import React, { useMemo, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { Button, PlayLink } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { Lightbox } from '../components/ui/Lightbox';
import { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { ContactSection } from '../components/ContactSection';
import { GALLERY_FILTERS, GALLERY_ITEMS, type GalleryCategory } from '../data/gallery';

export function Gallery() {
  const [filter, setFilter] = useState<'All' | GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
    filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter),
    [filter]
  );

  // The lightbox steps through whatever is currently filtered on screen.
  const lightboxImages = useMemo(
    () => items.map((item) => ({ src: item.src, alt: item.label })),
    [items]
  );

  return (
    <>
      <PageHero
        eyebrow="Ping Perfect Gallery"
        title="A Glimpse into Our Academy"
        description="Explore moments from Ping Perfect — our training sessions, tournaments, and community events. See how we nurture talent, build skills, and create a vibrant table tennis environment for all players."
        actions={
        <>
            <Button to="/coach">
              View Our Programs
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <PlayLink href="#gallery-grid">Watch Our Story</PlayLink>
          </>
        }
        checklist={['Expert Coaching', 'World-Class Facilities', 'Supportive Community']} />
      

      <section id="gallery-grid" className="w-full bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-shell px-5 lg:px-8">
          <SectionTitle title="Gallery" subtitle="Check Our Gallery" />

          <div
            className="mt-9 flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Gallery filters">
            
            {GALLERY_FILTERS.map((option) => {
              const isActive = option === filter;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setFilter(option);
                    setLightboxIndex(null);
                  }}
                  className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive ?
                  'text-white' :
                  'text-ink/70 hover:bg-white hover:text-brand hover:shadow-sm'}`
                  }>
                  
                  {isActive ?
                  <motion.span
                    layoutId="gallery-filter-pill"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-brand shadow-[0_6px_16px_rgba(16,173,84,0.28)]"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }} /> :

                  null}
                  <span className="relative z-10">{option}</span>
                </button>);

            })}
          </div>

          <RevealGroup
            key={filter}
            stagger={0.06}
            amount={0.05}
            className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            
            {items.map((item, index) =>
            <RevealItem key={item.id} className="mb-4 break-inside-avoid">
                <ImagePlaceholder
                ratio={item.ratio}
                label={item.label}
                src={item.src}
                alt={item.label}
                rounded="rounded-md"
                onClick={() => setLightboxIndex(index)} />
              </RevealItem>
            )}
          </RevealGroup>

          {items.length === 0 ?
          <p className="mt-12 text-center text-sm text-body">No items in this category yet.</p> :
          null}

          <p className="mt-8 text-center text-[12px] uppercase tracking-[0.16em] text-body/60">
            Click any photo to view it full screen
          </p>
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex} />
      

      <ContactSection messagePlaceholder="Ask us about sessions, events or photo enquiries" />
    </>);

}
