import React from 'react';
import {
  CloudIcon,
  LayersIcon,
  LineChartIcon,
  SettingsIcon,
  ShieldCheckIcon,
  Table2Icon } from
'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const FEATURES = [
{
  Icon: LayersIcon,
  title: 'Home-Based Coaching',
  description:
  'Train from the comfort of your home with structured sessions designed for kids, adults, and competitive-level players.'
},
{
  Icon: ShieldCheckIcon,
  title: 'Certified Home Trainers',
  description:
  'Our experienced coaches come to your home with customized drills, technique building, and progress-focused training programs.'
},
{
  Icon: LineChartIcon,
  title: 'Progress Monitoring',
  description:
  'Stay motivated with clear evaluations, skill assessments, and performance tracking tailored to home training routines.'
},
{
  Icon: Table2Icon,
  title: 'Home Training Tools',
  description:
  'We recommend and set up the right equipment for your space — from practice nets to rebounders and precision training aids.'
},
{
  Icon: CloudIcon,
  title: 'Online Coaching Access',
  description:
  'Join live virtual sessions or watch training replays anytime for flexible, guided improvement from home.'
},
{
  Icon: SettingsIcon,
  title: 'Family & Group Home Sessions',
  description:
  'Enjoy fun, engaging training for families and small groups at home — perfect for bonding, fitness, and skill development.'
}];


export function AboutFeatures() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle
          title="About Ping Perfect"
          subtitle="Leading the Way in Home Table Tennis Coaching" />
        

        <div className="mt-12 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, description }) =>
          <article
            key={title}
            className="rounded-lg border border-ink/[0.07] bg-white p-6 shadow-card">
            
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-6 text-[15px] font-bold tracking-tight text-ink">{title}</h3>
              <p className="mt-2.5 text-[12px] leading-relaxed text-body">{description}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}