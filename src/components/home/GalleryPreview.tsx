import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Lightbox } from '../ui/Lightbox';
import { RevealGroup, RevealItem } from '../ui/Reveal';

const COLUMNS = [
[
{ label: 'Head coach portrait', ratio: '3/4', src: '/assets/img/ademola-abiola-table-tennis-coach-dubai-Copy-3.jpg' },
{ label: 'Coach with players', ratio: '4/3', src: '/assets/img/ping-perfect-table-tennis-coaching-dubai.jpg' }],

[
{ label: 'Ping Perfect training session', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_1.jpg' },
{ label: 'Junior squad drill', ratio: '4/3', src: '/assets/img/home_table_tennis_coaching_2.jpg' }],

[
{ label: 'Match play action', ratio: '4/3', src: '/assets/img/kids-table-tennis-training-dubai.jpg' },
{ label: 'Coach portrait', ratio: '3/4', src: '/assets/img/Coach-Adedosu.jpg' }]];


// Flattened in the on-screen reading order so the lightbox steps through them naturally.
const FLAT_TILES = COLUMNS.flat();

export function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle
          title="Gallery"
          subtitle="Trusted by players, parents, and partners committed to serious development" />
        

        <RevealGroup stagger={0.08} className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {COLUMNS.map((column, columnIndex) =>
          <RevealItem key={`gallery-column-${columnIndex}`} className="flex flex-col gap-4">
              {column.map((tile) =>
            <ImagePlaceholder
              key={`${tile.label}-${tile.ratio}`}
              ratio={tile.ratio}
              label={tile.label}
              src={tile.src}
              alt={tile.label}
              rounded="rounded-md"
              onClick={() =>
              setLightboxIndex(FLAT_TILES.findIndex((candidate) => candidate.src === tile.src))
              } />

            )}
            </RevealItem>
          )}
        </RevealGroup>
      </div>

      <Lightbox
        images={FLAT_TILES.map((tile) => ({ src: tile.src, alt: tile.label }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex} />
      
    </section>);

}
