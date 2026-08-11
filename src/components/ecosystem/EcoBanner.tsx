import React from 'react';

interface EcoBannerProps {
  caption: string;
  tone?: 'gray' | 'dark' | 'light';
  children: React.ReactNode;
  ratio?: string;
  /** Real banner photo — when provided, replaces the CSS wordmark recreation. */
  src?: string;
}

const TONES: Record<'gray' | 'dark' | 'light', string> = {
  gray: 'bg-[linear-gradient(180deg,#FFFFFF_0%,#D9D9D9_55%,#8A8A8A_100%)] text-eco-black',
  dark: 'bg-[linear-gradient(180deg,#0B1622_0%,#101B27_60%,#0A121B_100%)] text-white',
  light: 'bg-[linear-gradient(180deg,#F7F7F7_0%,#DDDDDD_60%,#A9A9A9_100%)] text-eco-black'
};

/** Large image banner with a centered wordmark and a small bottom-left caption. */
export function EcoBanner({ caption, tone = 'gray', children, ratio = '5/2', src }: EcoBannerProps) {
  return (
    <section className="w-full bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <figure
          className={`relative flex items-center justify-center overflow-hidden ${
          src ? 'bg-eco-black' : TONES[tone]}`
          }
          style={{ aspectRatio: ratio }}>
          
          {src ?
          <img src={src} alt={caption} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /> :

          <div className="relative px-6 text-center">{children}</div>
          }
          <figcaption className="absolute bottom-5 left-6 text-[10px] font-bold uppercase tracking-[0.14em] text-eco-black">
            {caption}
          </figcaption>
        </figure>
      </div>
    </section>);

}