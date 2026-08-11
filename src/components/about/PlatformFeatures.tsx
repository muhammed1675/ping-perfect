import React from 'react';
import {
  AwardIcon,
  BookOpenIcon,
  CheckIcon,
  ClockIcon,
  CloudIcon,
  HeartHandshakeIcon,
  HomeIcon,
  LineChartIcon,
  MonitorPlayIcon,
  PlayIcon,
  UsersIcon,
  UsersRoundIcon,
  ZapIcon } from
'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

const FEATURES = [
{
  Icon: CloudIcon,
  title: 'Smart Home Training',
  description:
  'Coaches will advise and customize drills you can practice at home to improve speed, precision, and technique.',
  pill: { Icon: ZapIcon, label: 'Train Smarter' }
},
{
  Icon: HomeIcon,
  title: 'Safe & Flexible Environment',
  description:
  'Train comfortably at home while choosing safe, structured, and effective sessions.',
  pill: { Icon: HeartHandshakeIcon, label: 'Home Friendly' }
},
{
  Icon: UsersRoundIcon,
  title: 'Virtual Community & Events',
  description:
  'Join online tournaments, challenges, and community events to stay connected and motivated from home.',
  pill: { Icon: UsersIcon, label: 'Stay Connected' }
},
{
  Icon: LineChartIcon,
  title: 'Home Progress Tracking',
  description:
  'Receive detailed feedback and track improvement through video analysis and coach reports.',
  pill: { Icon: LineChartIcon, label: 'Track Progress' }
},
{
  Icon: BookOpenIcon,
  title: 'On-Demand Resources',
  description: 'Access training videos, drills, and tips anytime, anywhere, right in your home.',
  pill: { Icon: ClockIcon, label: '24/7 Access' }
},
{
  Icon: MonitorPlayIcon,
  title: 'Team & Doubles Training',
  description:
  'Specialized guidance for doubles strategy and team play, adaptable to home practice settings.',
  pill: { Icon: UsersIcon, label: 'Group Ready' }
}];


const BULLETS = [
'Certified coaches with home experience',
'Personalized training plans for all levels',
'Guidance on using professional-grade equipment at home'];


export function PlatformFeatures() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle
          title="Ping-Perfect Features"
          subtitle="Expert home coaching, personalized guidance, and smart training tools to help you excel at table tennis at home." />
        

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <div className="rounded-lg border border-ink/[0.07] bg-white p-4 shadow-card">
            <ImagePlaceholder
              ratio="4/3"
              label="Player reviewing a training plan on a tablet"
              src="/assets/img/professional-table-tennis-coach-dubai.jpg"
              alt="Player reviewing a training plan on a tablet"
              rounded="rounded-md" />
            

            <h3 className="mt-5 text-[13px] font-bold text-ink">Built for Home Champions</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-body">
              Whether beginner or advanced, Ping Perfect brings professional table tennis coaching
              directly to your home, with tailored plans and expert guidance.
            </p>

            <ul className="mt-4 space-y-2.5">
              {BULLETS.map((bullet) =>
              <li key={bullet} className="flex items-start gap-2.5">
                  <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand">
                  
                    <CheckIcon className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[11px] text-ink/80">{bullet}</span>
                </li>
              )}
            </ul>

            <Button to="/contact" size="sm" className="mt-5">
              <PlayIcon className="h-3 w-3 fill-current" aria-hidden="true" />
              Start Home Training
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, description, pill }) =>
            <article
              key={title}
              className="flex flex-col rounded-lg border border-ink/[0.07] bg-white p-4 shadow-card">
              
                <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A3D] text-white">
                
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-[13px] font-bold leading-snug text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-[11px] leading-relaxed text-body">{description}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-ink/[0.04] px-2 py-1 text-[10px] font-medium text-ink/70">
                  <pill.Icon className="h-3 w-3 text-brand" aria-hidden="true" />
                  {pill.label}
                </span>
              </article>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-lg border border-ink/[0.07] bg-white p-4 shadow-card sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
              
              <AwardIcon className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-[13px] font-bold text-ink">Trusted by Home Players Worldwide</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-body">
                From casual home enthusiasts to competitive players, Ping Perfect brings world-class
                table tennis coaching to your doorstep.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center rounded-md bg-brand px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
            Trusted &amp; Reliable
          </span>
        </div>
      </div>
    </section>);

}