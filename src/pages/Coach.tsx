import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Button, PlayLink } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { ContactSection } from '../components/ContactSection';
import { COACHES } from '../data/team';

export function Coach() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Coach"
        title="The Mind Behind Ping Perfect"
        description="Get to know the driving force behind Ping Perfect Academy — Coach Ademola Abiola. With years of competitive and professional coaching experience, he is committed to developing players of all ages and skill levels through structured training, modern techniques, and disciplined growth."
        actions={
        <>
            <Button href="#coach-profiles">
              View Coaching Programs
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <PlayLink href="#coach-profiles">Watch Coaching Highlights</PlayLink>
          </>
        }
        checklist={['Pro-Level Training', 'Certified Expertise', 'Player-Centered Approach']} />
      

      <section id="coach-profiles" className="w-full bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-shell px-5 lg:px-8">
          <SectionTitle title="Coach" subtitle="Meet Our Coach" />

          <div className="mt-10 flex justify-center">
            <span className="rounded-full bg-brand px-5 py-1.5 text-[13px] font-medium text-white">
              All
            </span>
          </div>

          <div className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COACHES.map((coach, index) =>
            <article
              key={coach.name}
              className="overflow-hidden rounded-lg border border-ink/[0.07] bg-white shadow-card">
              
                <ImagePlaceholder
                ratio={index === 0 ? '3/4' : '4/3'}
                label={coach.photoLabel}
                src={coach.photoSrc}
                alt={coach.name}
                rounded="rounded-none" />
              
                <div className="p-5">
                  <h3 className="text-[13px] font-semibold text-brand">{coach.name}</h3>
                  <p className="mt-2 text-[14px] text-ink/80">{coach.fullRole}</p>
                  <p className="mt-3 text-[12px] leading-relaxed text-body">{coach.bio}</p>
                  <Button to="/contact" className="mt-5 w-full">
                    Read More
                  </Button>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <ContactSection messagePlaceholder="Which coach or programme are you interested in?" />
    </>);

}