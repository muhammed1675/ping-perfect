import React, { useState } from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';
import { SITE } from '../data/site';
import { ASSETS } from '../data/assets';

/**
 * Live Zoho Forms endpoint used by the original contact.html.
 * Field names MUST stay exactly as-is — Zoho drops records with renamed fields.
 */
export const ZOHO_FORM_ACTION =
'https://forms.zohopublic.com/sportpingp1/form/ContactUs/formperma/laQM-mmaVBZ9ZtcozMnCRHxlyYUI0Li72UWDmXj8nIU/htmlRecords/submit';

interface ContactSectionProps {
  heading?: string;
  subheading?: string;
  formTitle?: string;
  /** Placeholder for the email input. */
  emailPlaceholder?: string;
  /** Custom placeholder for the message textarea — varies per page on the live site. */
  messagePlaceholder?: string;
  /** Placeholders for the two name inputs. */
  firstNamePlaceholder?: string;
  lastNamePlaceholder?: string;
  /** Optional URL Zoho redirects to after a successful submission. */
  redirectUrl?: string;
  className?: string;
}

const FIELD =
'w-full border-0 bg-white px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection({
  heading = 'Contact',
  subheading = 'Get in Touch with Ping Perfect',
  formTitle = 'Get in Touch With Us',
  emailPlaceholder = 'Email',
  messagePlaceholder = 'Message',
  firstNamePlaceholder = 'First name',
  lastNamePlaceholder = 'Last name',
  redirectUrl = '',
  className = ''
}: ContactSectionProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const details = [
  { label: 'Address', value: SITE.address, Icon: MapPinIcon, href: undefined as string | undefined },
  { label: 'Call Us', value: SITE.phone, Icon: PhoneIcon, href: SITE.phoneHref },
  { label: 'Email Us', value: SITE.email, Icon: MailIcon, href: SITE.emailHref }];


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const next: Record<string, string> = {};
    if (!get('Name_First')) next.Name_First = 'First name is required';
    if (!get('Name_Last')) next.Name_Last = 'Last name is required';
    const email = get('Email');
    if (!email) next.Email = 'Email is required';else
    if (!EMAIL_RE.test(email) || email.length > 255) next.Email = 'Enter a valid email address';
    const message = get('MultiLine');
    if (!message) next.MultiLine = 'Message is required';else
    if (message.length > 5000) next.MultiLine = 'Message must be under 5000 characters';

    setErrors(next);
    if (Object.keys(next).length > 0) {
      event.preventDefault();
    }
    // Otherwise the browser posts natively to Zoho, exactly like the original site.
  }

  const errorText = (key: string) =>
  errors[key] ?
  <p className="mt-1 text-[11px] text-red-400">{errors[key]}</p> :
  null;

  return (
    <section id="contact" className={`relative w-full overflow-hidden bg-night ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${ASSETS.worldMap})` }} />
      

      <div className="relative mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
        <SectionTitle title={heading} subtitle={subheading} tone="dark" />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-10">
          <ul className="space-y-9 lg:pl-6">
            {details.map(({ label, value, Icon, href }) =>
            <li key={label} className="flex items-center gap-4">
                <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-white">{label}</p>
                  {href ?
                <a
                  href={href}
                  className="mt-0.5 block break-all text-[13px] text-white/60 transition-colors hover:text-brand">
                  
                      {value}
                    </a> :

                <p className="mt-0.5 text-[13px] text-white/60">{value}</p>
                }
                </div>
              </li>
            )}
          </ul>

          <div className="form-glow rounded-sm bg-black/40">
            <div className="bg-white px-6 py-9 text-center">
              <h3 className="text-2xl font-light tracking-tight text-ink">{formTitle}</h3>
            </div>

            <form
              className="px-6 py-8 sm:px-8"
              action={ZOHO_FORM_ACTION}
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              noValidate>
              
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value={redirectUrl} />
              <input type="hidden" name="zc_gad" value="" />

              <fieldset>
                <legend className="mb-3 text-sm text-white">
                  Full name <span className="text-red-500">*</span>
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      id="first-name"
                      name="Name_First"
                      maxLength={255}
                      placeholder={firstNamePlaceholder}
                      aria-label="First name"
                      className={FIELD} />
                    
                    <label htmlFor="first-name" className="mt-1.5 block text-[11px] text-white/70">
                      First
                    </label>
                    {errorText('Name_First')}
                  </div>
                  <div>
                    <input
                      id="last-name"
                      name="Name_Last"
                      maxLength={255}
                      placeholder={lastNamePlaceholder}
                      aria-label="Last name"
                      className={FIELD} />
                    
                    <label htmlFor="last-name" className="mt-1.5 block text-[11px] text-white/70">
                      Last
                    </label>
                    {errorText('Name_Last')}
                  </div>
                </div>
              </fieldset>

              <div className="mt-6">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  maxLength={255}
                  placeholder={emailPlaceholder}
                  className={FIELD} />
                
                {errorText('Email')}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="MultiLine"
                  rows={4}
                  maxLength={5000}
                  placeholder={messagePlaceholder}
                  className={`${FIELD} resize-none`} />
                
                {errorText('MultiLine')}
              </div>

              <div className="mt-8 flex justify-center">
                <Button type="submit" pill size="lg" className="px-10">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>);

}
