import React from 'react';

interface EcoLabelProps {
  children: React.ReactNode;
  intro?: string;
  tone?: 'light' | 'dark';
  className?: string;
}

/** Small green "— LABEL" eyebrow (plus optional intro paragraph) used on the microsites. */
export function EcoLabel({ children, intro, tone = 'light', className = '' }: EcoLabelProps) {
  return (
    <div className={className}>
      <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-eco-green">
        <span aria-hidden="true" className="h-[2px] w-8 bg-eco-green" />
        {children}
      </p>
      {intro ?
      <p
        className={`mt-7 max-w-xl text-[15px] leading-[1.9] ${
        tone === 'dark' ? 'text-white/60' : 'text-body'}`
        }>
        
          {intro}
        </p> :
      null}
    </div>);

}