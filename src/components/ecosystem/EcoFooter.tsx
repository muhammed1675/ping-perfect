import React from 'react';
import { SITE } from '../../data/site';

interface EcoFooterProps {
  tagline: string;
  /** Brand logo for the specific ecosystem page. */
  logoSrc: string;
  credit?: string;
}

export function EcoFooter({
  tagline,
  logoSrc,
  credit = '© 2026 The Inner Court. All rights reserved.'
}: EcoFooterProps) {
  return (
    <footer className="w-full bg-eco-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-8 text-center md:flex-row md:justify-between md:text-left lg:px-8">
        <img
          src={logoSrc}
          alt=""
          aria-hidden="true"
          className="h-8 w-8 shrink-0 rounded-sm object-cover" />

        <p className="max-w-md text-[12px] text-white/55">{tagline}</p>

        <div className="text-[11px] leading-relaxed text-white/45 md:text-right">
          <p>{credit}</p>
          <p>
            Developed by <span className="font-semibold text-eco-green">{SITE.developer}</span>
          </p>
        </div>
      </div>
    </footer>);

}