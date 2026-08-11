import React from 'react';
import { UsersIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Button } from '../ui/Button';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { COACHES } from '../../data/team';

export function TeamSection() {
  return (
    <section className="w-full bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle title="Team" subtitle="Meet the dedicated coaches behind Ping Perfect" />

        <RevealGroup className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((coach, index) =>
          <RevealItem key={coach.name}>
              <article className="overflow-hidden rounded-lg border border-ink/[0.07] bg-white shadow-card transition-transform duration-300 hover:-translate-y-1">
              
                <ImagePlaceholder
                ratio={index === 0 ? '3/4' : '4/5'}
                label={coach.photoLabel}
                src={coach.photoSrc}
                alt={coach.name}
                rounded="rounded-none" />
              
                <div className="p-5">
                  <h3 className="text-[13px] font-semibold text-brand">{coach.name}</h3>
                  <p className="mt-1 text-[13px] text-ink/70">{coach.shortRole}</p>
                  <p className="mt-3 text-[12px] leading-relaxed text-body">{coach.homeBio}</p>
                </div>
              </article>
            </RevealItem>
          )}
        </RevealGroup>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="flex items-start gap-4 rounded-lg border border-ink/[0.07] bg-[#F3FBF4] p-5 lg:col-span-2">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
              
              <UsersIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-ink">Our coaching team, your success</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-body">
                Our coaches combine technical expertise, competition experience, and player-focused
                development to help every player reach their potential.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-ink/[0.07] bg-[#F3FBF4] p-5">
            <p className="text-[13px] font-semibold text-brand">Join Ping Perfect</p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-body">
              Ready to start your table tennis journey the right way?
            </p>
            <Button to="/contact" size="sm" className="mt-4">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>);

}