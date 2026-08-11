import React from 'react';
import { ImageIcon, Maximize2Icon } from 'lucide-react';

interface ImagePlaceholderProps {
  /** CSS aspect-ratio value, e.g. "4/3", "3/4", "16/9" */
  ratio?: string;
  label?: string;
  tone?: 'light' | 'dark';
  className?: string;
  rounded?: string;
  /** When true the placeholder stretches to fill its parent instead of using a ratio */
  fill?: boolean;
  /** Real photo path (e.g. "/assets/img/coach.jpg"). When set, renders the photo instead of the gray placeholder. */
  src?: string;
  /** Alt text for the real photo. Falls back to `label` when omitted. */
  alt?: string;
  /** object-position for the real photo, e.g. "top", "center 20%" */
  objectPosition?: string;
  /** When provided, the photo becomes a button that opens it full screen. */
  onClick?: () => void;
}

/**
 * Image slot with a real-photo mode and a neutral gray placeholder fallback.
 * Keeps the intended aspect ratio in both modes so layouts stay stable.
 * Photos zoom gently on hover; pass `onClick` to make them open full screen.
 */
export function ImagePlaceholder({
  ratio = '4/3',
  label = 'Image',
  tone = 'light',
  className = '',
  rounded = 'rounded-xl',
  fill = false,
  src,
  alt,
  objectPosition,
  onClick
}: ImagePlaceholderProps) {
  const shellStyle = fill ? undefined : { aspectRatio: ratio };
  const shellClasses = `group relative overflow-hidden ${rounded} ${
  fill ? 'h-full w-full' : 'w-full'} ${
  className}`;

  if (src) {
    const media =
    <>
        <img
        src={src}
        alt={alt ?? label}
        loading="lazy"
        style={objectPosition ? { objectPosition } : undefined}
        className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]" />

        {onClick ?
      <>
            <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

              <Maximize2Icon className="h-4 w-4" aria-hidden="true" />
            </span>
          </> :
      null}
      </>;


    if (onClick) {
      return (
        <button
          type="button"
          onClick={onClick}
          aria-label={`View ${alt ?? label} full screen`}
          style={shellStyle}
          className={`${shellClasses} block cursor-zoom-in transition-shadow duration-500 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2`}>

          {media}
        </button>);

    }

    return (
      <div style={shellStyle} className={shellClasses}>
        {media}
      </div>);

  }

  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      style={shellStyle}
      className={`placeholder-hatch flex items-center justify-center ${shellClasses} ${
      tone === 'dark' ?
      'bg-white/[0.06] ring-1 ring-inset ring-white/10' :
      'bg-[#E5E7EB] ring-1 ring-inset ring-ink/10'}`
      }>
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <ImageIcon
          aria-hidden="true"
          className={`h-6 w-6 ${tone === 'dark' ? 'text-white/40' : 'text-ink/30'}`} />

        <span
          className={`text-[11px] font-medium uppercase tracking-[0.16em] ${
          tone === 'dark' ? 'text-white/40' : 'text-ink/40'}`
          }>
          {label}
        </span>
      </div>
    </div>);

}
