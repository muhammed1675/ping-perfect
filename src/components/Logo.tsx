import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../data/assets';

interface LogoProps {
  tone?: 'light' | 'dark';
  className?: string;
  to?: string;
}

/** Small decorative paddle-flame glyph used inside eyebrow pills / mini nav marks. */
export function LogoMark({ className = '' }: {className?: string;}) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">

      <path
        d="M2 17.5c5.5 2.5 10 3 14.5 1.8C21 18 25 15 29.5 9.5c-1.5 6-5 10.5-10 13-4.8 2.4-10.4 2.2-15.5-.5L2 17.5Z"
        fill="currentColor" />

      <path
        d="M29.5 9.5c-3 .6-5.8 1.6-8.3 3-1.2-2.2-.8-4.3 1-6 2.4.2 4.8 1.2 7.3 3Z"
        fill="currentColor"
        opacity="0.85" />

      <circle cx="22.5" cy="14" r="2.4" fill="#ffffff" />
    </svg>);

}

/**
 * Real Ping Perfect flying-paddle mark next to the wordmark.
 * Falls back to the inline vector glyph if the PNG is ever missing, so the
 * header icon can never render as a broken image.
 */
export function Logo({ tone = 'light', className = '', to = '/' }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Ping Perfect — home">

      {imgFailed ?
      <LogoMark className="h-7 w-8 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-y-0.5" /> :

      <img
        src={ASSETS.logo}
        alt=""
        aria-hidden="true"
        onError={() => setImgFailed(true)}
        className="h-7 w-8 shrink-0 object-contain transition-transform duration-300 group-hover:-translate-y-0.5" />
      }

      <span
        className={`font-heading text-[19px] font-bold uppercase leading-none tracking-[-0.01em] ${
        tone === 'dark' ? 'text-white' : 'text-ink'}`
        }>

        Ping-Perfect
      </span>
    </Link>);

}
