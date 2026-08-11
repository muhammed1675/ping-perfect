import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

interface EcoCtaProps {
  heading: string;
  paragraph: string;
  primary: {label: string;to: string;};
  secondary: {label: string;to: string;};
  tone?: 'dark' | 'green';
}

export function EcoCta({ heading, paragraph, primary, secondary, tone = 'dark' }: EcoCtaProps) {
  const isGreen = tone === 'green';

  return (
    <section className={`w-full ${isGreen ? 'bg-[#22A94F]' : 'bg-[#111111]'}`}>
      <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8 lg:py-24">
        <h2 className="text-2xl font-bold uppercase tracking-[-0.01em] text-white sm:text-[32px]">
          {heading}
        </h2>
        <p
          className={`mx-auto mt-6 max-w-xl text-[15px] leading-relaxed ${
          isGreen ? 'text-white/90' : 'text-white/60'}`
          }>
          
          {paragraph}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={primary.to}
            className={`inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors sm:w-auto ${
            isGreen ? 'bg-white text-ink hover:bg-white/90' : 'bg-eco-green text-white hover:bg-eco-dark'}`
            }>
            
            {primary.label}
            <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            to={secondary.to}
            className="inline-flex w-full items-center justify-center border border-white/40 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 sm:w-auto">
            
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>);

}