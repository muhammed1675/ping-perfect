import React from 'react';
import { CheckIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { ASSETS } from '../../data/assets';

const SERVICES = [
'Private & Semi-Private Coaching',
'Junior Development & Competitive Training',
'Adult Performance Programs',
'Home/Club & Partner Venue Sessions'];


export function WhatWeDo() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle
          title="WHAT WE DO"
          subtitle="A coaching system built on structure, discipline and long-term development." />
        

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border border-ink/[0.07] bg-white shadow-card">
          <div className="relative px-6 pb-4 pt-10 sm:px-10">
            <div
              aria-hidden="true"
              className="absolute right-8 top-8 h-16 w-16 rounded-full bg-brand/15 blur-2xl" />
            
            <img
              src={ASSETS.paddleFlame}
              alt="Ping Perfect paddle with a green motion flame"
              className="mx-auto w-full max-w-lg" />
            
          </div>

          <div className="px-6 pb-10 sm:px-10">
            <ul className="space-y-3.5">
              {SERVICES.map((service) =>
              <li key={service} className="flex items-center gap-3">
                  <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                  
                    <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-ink/80">{service}</span>
                </li>
              )}
            </ul>

            <p className="mt-7 text-[12px] leading-relaxed text-body">
              Our coaching philosophy prioritises technique before speed, habits before results, and a
              clear next step for every player.
            </p>
          </div>
        </div>
      </div>
    </section>);

}