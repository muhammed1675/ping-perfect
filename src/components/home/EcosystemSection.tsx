import React from 'react';
import { ArrowUpRightIcon, BookOpenIcon, GraduationCapIcon, Building2Icon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { RevealGroup, RevealItem } from '../ui/Reveal';

const PILLARS = [
{
  Icon: BookOpenIcon,
  pill: 'Media Platform',
  title: 'The Inner Court',
  description:
  'A standards-driven media platform documenting elite-level coaching, performance thinking, and professional table tennis environments.',
  to: '/inner-court'
},
{
  Icon: GraduationCapIcon,
  pill: 'Coach Development',
  title: 'CoachLab Pathway',
  description:
  'A structured coach development and deployment pathway focused on readiness, standards alignment, and real-world deployment.',
  to: '/coachlab'
},
{
  Icon: Building2Icon,
  pill: 'Academy Building',
  title: 'TT Global Academy Holdings',
  description:
  'An academy-building platform designing, launching, and scaling professional table tennis academies in partnership with investors and institutions.',
  to: '/academy'
}];


export function EcosystemSection() {
  return (
    <section className="w-full bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle
          title="THE PING PERFECT ECOSYSTEM"
          subtitle="Beyond coaching, Ping Perfect operates a broader professional table tennis ecosystem across media, coach development, and academy building." />
        

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ Icon, pill, title, description, to }) =>
          <RevealItem key={title}>
              <article className="flex h-full flex-col rounded-xl border border-ink/[0.07] bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
              
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-light px-3 py-1.5 text-[11px] font-semibold text-brand">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {pill}
                </span>
                <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-ink">{title}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-body">{description}</p>
                <Button to={to} size="sm" className="mt-6 w-fit">
                  <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Learn more
                </Button>
              </article>
            </RevealItem>
          )}
        </RevealGroup>
      </div>
    </section>);

}