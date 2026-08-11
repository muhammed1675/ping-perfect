import React, { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the open image, or null when the lightbox is closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

/**
 * Full-screen image viewer.
 * Click any gallery photo to open it here; Esc closes, ← / → step through the set.
 */
export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const isOpen = index !== null && index >= 0 && index < images.length;

  const step = useCallback(
    (direction: 1 | -1) => {
      if (index === null || images.length === 0) return;
      onIndexChange((index + direction + images.length) % images.length);
    },
    [index, images.length, onIndexChange]
  );

  // Keyboard controls + body scroll lock while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, step]);

  const current = isOpen ? images[index as number] : null;

  return (
    <AnimatePresence>
      {isOpen && current ?
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={current.alt}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: EASE }}
        onClick={onClose}>

          <button
          type="button"
          onClick={onClose}
          aria-label="Close image"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:right-6 sm:top-6">

            <XIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          {images.length > 1 ?
        <>
              <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:left-6">

                <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:right-6">

                <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </> :
        null}

          <motion.figure
          key={current.src}
          className="m-0 flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: EASE }}
          onClick={(event) => event.stopPropagation()}>

            <img
            src={current.src}
            alt={current.alt}
            className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl" />

            <figcaption className="text-center text-[13px] text-white/70">
              {current.alt}
              {images.length > 1 ?
            <span className="ml-2 text-white/40">
                  {(index as number) + 1} / {images.length}
                </span> :
            null}
            </figcaption>
          </motion.figure>
        </motion.div> :
      null}
    </AnimatePresence>);

}
