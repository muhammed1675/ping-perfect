import { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { storageAPI, bankAPI } from '../lib/api';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { CheckCircle2, FileText, ImageIcon, Loader2, UserPlus, X, Camera } from 'lucide-react';
import { toast } from 'sonner';

// Admin-side "onboard an agent for them" form. Mirrors the fields on
// /become-agent, but the admin fills it in and uploads the documents.
// Creates the account (if needed) and files a PENDING verification request —
// approval still happens in the normal Agent Verification list.

const emptyForm = { full_name: '', email: '', phone: '', address: '' };

export function AdminOnboardAgentDialog({ open, onOpenChange, onDone }) {
  const [form, setForm] = useState(emptyForm);
  const [idCardFile, setIdCardFile] = useState(null);
  const [agreementFile, setAgreementFile] = useState(null);
  const [selfieFile, setSelfieFile] = useState(null);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const selfieRef = useRef(null);
  const idRef = useRef(null);
  const agreementRef = useRef(null);

  const [banks, setBanks] = useState(bankAPI.FALLBACK_BANKS);
  const [bankCode, setBankCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [resolving, setResolving] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [lookupError, setLookupError] = useState('');

  const [submitting, setSubmitting] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    if (!open) return;
    bankAPI.getBanks().then(setBanks).catch(() => {});
  }, [open]);

  // Same Korapay account-name lookup the agent-facing form uses.
  useEffect(() => {
    if (!bankCode || accountNumber.length !== 10) {
      setAccountName(''); setResolved(false); setLookupError('');
      return;
    }
    let cancelled = false;
    setResolving(true); setLookupError(''); setResolved(false); setAccountName('');
    bankAPI.resolveAccountName(bankCode, accountNumber, bankName).then((r) => {
      if (cancelled) return;
      if (r.success) { setAccountName(r.account_name.toUpperCase()); setResolved(true); }
      else setLookupError(r.message || "Couldn't verify this account — check the number and bank, or type the name manually.");
    }).finally(() => { if (!cancelled) setResolving(false); });
    return () => { cancelled = true; };
  }, [bankCode, accountNumber, bankName]);

  const reset = () => {
    setForm(emptyForm); setIdCardFile(null); setAgreementFile(null);
    setSelfieFile(null); setSelfiePreview(null);
    if (selfieRef.current) selfieRef.current.value = '';
    setBankCode(''); setBankName(''); setAccountNumber(''); setAccountName('');
    setResolved(false); setLookupError('');
    if (idRef.current) idRef.current.value = '';
    if (agreementRef.current) agreementRef.current.value = '';
  };

  const pickId = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) { toast.error('ID card must be an image (JPG/PNG)'); return; }
    if (f.size > 5 * 1024 * 1024) { toast.error('Image must be under 5MB'); return; }
    setIdCardFile(f);
  };

  const pickSelfie = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) { toast.error('Photo must be an image (JPG/PNG)'); return; }
    if (f.size > 10 * 1024 * 1024) { toast.error('Image must be under 10MB'); return; }
    setSelfieFile(f);
    setSelfiePreview(URL.createObjectURL(f));
  };

  const clearSelfie = () => {
    if (selfiePreview) URL.revokeObjectURL(selfiePreview);
    setSelfieFile(null); setSelfiePreview(null);
    if (selfieRef.current) selfieRef.current.value = '';
  };

  const pickAgreement = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (f.type !== 'application/pdf') { toast.error('Agreement must be a PDF'); return; }
    if (f.size > 10 * 1024 * 1024) { toast.error('PDF must be under 10MB'); return; }
    setAgreementFile(f);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!idCardFile) return toast.error('Upload the agent\'s ID card photo');
    if (!agreementFile) return toast.error('Upload the signed agreement PDF');
    if (!selfieFile) return toast.error('Upload the agent\'s selfie — it becomes their profile picture');
    if (!bankCode) return toast.error('Select the agent\'s bank');
    if (accountNumber.length !== 10) return toast.error('Account number must be 10 digits');
    if (resolving) return toast.error('Still verifying the account — one moment');
    if (!accountName.trim()) return toast.error('Account name is required');

    setSubmitting(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) throw new Error('Your session has expired. Please log in again.');

      toast.loading('Uploading documents...', { id: 'onboard-upload' });
      const [idRes, agRes, selfieRes] = await Promise.all([
        storageAPI.uploadFile(idCardFile, 'verification/id-cards'),
        storageAPI.uploadFile(agreementFile, 'verification/agreements'),
        // Public 'avatars' bucket, same as /become-agent — on approval this
        // becomes the agent's profile picture.
        storageAPI.uploadImage(selfieFile, 'avatars', { maxWidthOrHeight: 800, maxSizeMB: 0.3 }),
      ]);
      toast.dismiss('onboard-upload');

      const res = await fetch('/api/admin-onboard-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
        body: JSON.stringify({
          ...form,
          bank_code: bankCode,
          bank_name: bankName,
          account_number: accountNumber,
          account_name: accountName.trim().toUpperCase(),
          id_card_url: idRes.data.url,
          agreement_url: agRes.data.url,
          selfie_url: selfieRes.data.url,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || 'Failed to onboard agent');

      toast.success(result.account_created
        ? 'Account created and request filed — review it below, then approve after the video call.'
        : 'Existing account found and request filed — review it below.');
      reset();
      onOpenChange(false);
      onDone?.();
    } catch (err) {
      toast.dismiss('onboard-upload');
      toast.error(err.message || 'Failed to onboard agent');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!submitting) onOpenChange(v); }}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2"><UserPlus className="w-5 h-5" /> Onboard an agent</DialogTitle>
          <DialogDescription>
            Fills in the agent application for them. Their account is created if it doesn't exist yet, and the
            request lands in the pending list — approve it there after the WhatsApp video call.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label>Full name (as on ID) *</Label>
            <Input value={form.full_name} onChange={set('full_name')} placeholder="e.g. Siyanbola Oyebanji" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Login email *</Label>
              <Input type="email" value={form.email} onChange={set('email')} placeholder="name@gmail.com" />
            </div>
            <div className="space-y-1.5">
              <Label>Phone / WhatsApp *</Label>
              <Input inputMode="tel" value={form.phone} onChange={set('phone')} placeholder="08012345678" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Home address *</Label>
            <Textarea rows={2} value={form.address} onChange={set('address')} placeholder="Full address" />
          </div>

          <div className="space-y-1.5">
            <Label>ID card photo * <span className="text-xs text-muted-foreground font-normal">(not a selfie — NIN, voter's card, licence or passport)</span></Label>
            <input ref={idRef} type="file" accept="image/*" className="hidden" onChange={pickId} />
            {idCardFile ? (
              <div className="flex items-center gap-2 p-2.5 rounded-md border border-green-200 bg-green-50 text-sm">
                <ImageIcon className="w-4 h-4 text-green-600 shrink-0" />
                <span className="truncate flex-1">{idCardFile.name}</span>
                <button type="button" onClick={() => { setIdCardFile(null); if (idRef.current) idRef.current.value = ''; }}><X className="w-4 h-4" /></button>
              </div>
            ) : (
              <Button type="button" variant="outline" className="w-full" onClick={() => idRef.current?.click()}>Choose ID image</Button>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Agent selfie * <span className="text-xs text-muted-foreground font-normal">(clear face photo — becomes their profile picture)</span></Label>
            <input ref={selfieRef} type="file" accept="image/*" className="hidden" onChange={pickSelfie} />
            {selfiePreview ? (
              <div className="flex items-center gap-3 p-2.5 rounded-md border border-green-200 bg-green-50 text-sm">
                <img src={selfiePreview} alt="Selfie preview" className="h-14 w-14 rounded-full border object-cover shrink-0" />
                <span className="truncate flex-1">{selfieFile?.name}</span>
                <button type="button" onClick={clearSelfie}><X className="w-4 h-4" /></button>
              </div>
            ) : (
              <Button type="button" variant="outline" className="w-full gap-2" onClick={() => selfieRef.current?.click()}><Camera className="w-4 h-4" /> Choose selfie</Button>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Signed agreement PDF *</Label>
            <input ref={agreementRef} type="file" accept="application/pdf" className="hidden" onChange={pickAgreement} />
            {agreementFile ? (
              <div className="flex items-center gap-2 p-2.5 rounded-md border border-green-200 bg-green-50 text-sm">
                <FileText className="w-4 h-4 text-green-600 shrink-0" />
                <span className="truncate flex-1">{agreementFile.name}</span>
                <button type="button" onClick={() => { setAgreementFile(null); if (agreementRef.current) agreementRef.current.value = ''; }}><X className="w-4 h-4" /></button>
              </div>
            ) : (
              <Button type="button" variant="outline" className="w-full" onClick={() => agreementRef.current?.click()}>Choose signed PDF</Button>
            )}
          </div>

          <div className="space-y-3 pt-1 border-t">
            <p className="text-sm font-semibold pt-3">Bank account</p>
            <div className="space-y-1.5">
              <Label>Bank *</Label>
              <Select value={bankCode} onValueChange={(v) => { setBankCode(v); setBankName(banks.find((b) => b.code === v)?.name || ''); }}>
                <SelectTrigger><SelectValue placeholder="Select bank..." /></SelectTrigger>
                <SelectContent>
                  {banks.map((b) => <SelectItem key={b.code} value={b.code}>{b.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Account number *</Label>
              <Input inputMode="numeric" maxLength={10} value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))} placeholder="10-digit account number" />
            </div>
            <div className="space-y-1.5">
              <Label>Account name *</Label>
              {resolving ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground p-2.5 border rounded-md"><Loader2 className="w-4 h-4 animate-spin" /> Verifying account...</div>
              ) : resolved ? (
                <div className="flex items-center gap-2 p-2.5 border border-green-200 bg-green-50 rounded-md text-sm font-semibold text-green-800">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> {accountName}
                </div>
              ) : (
                <Input value={accountName} onChange={(e) => setAccountName(e.target.value)}
                  disabled={!bankCode || accountNumber.length !== 10}
                  placeholder="Select bank and enter account number first" />
              )}
              {lookupError && <p className="text-xs text-amber-600">⚠ {lookupError}</p>}
              <p className="text-xs text-muted-foreground">Must match the name on the agent's ID.</p>
            </div>
          </div>

          <Button type="submit" className="w-full gap-2" disabled={submitting || resolving}>
            {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Onboarding...</> : <><UserPlus className="w-4 h-4" /> Create account & file request</>}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AdminOnboardAgentDialog;
