import React from 'react';

interface EcoQuoteProps {
  quote: string;
  caption: string;
  tone?: 'gray' | 'white';
}

/** Centered mission quote block with a short green rule above. */
export function EcoQuote({ quote, caption, tone = 'gray' }: EcoQuoteProps) {
  return (
    <section className={`w-full py-20 lg:py-24 ${tone === 'gray' ? 'bg-[#F3F3F3]' : 'bg-white'}`}>
      <div className="mx-auto max-w-2xl px-5 text-center lg:px-8">
        <span aria-hidden="true" className="mx-auto block h-[2px] w-10 bg-eco-green" />
        <blockquote className="mt-8">
          <p className="text-2xl font-normal leading-snug text-eco-black sm:text-[30px]">
            &quot;{quote}&quot;
          </p>
          <footer className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/45">
            {caption}
          </footer>
        </blockquote>
      </div>
    </section>);

}