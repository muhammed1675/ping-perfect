import React from 'react';
import { CheckIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const PRINCIPLES = [
'Professional coaching standards',
'Clear development pathways',
'International exposure & partnerships',
'Long-term athlete-first approach'];


export function WhyPingPerfect() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle
          title="WHY PING PERFECT"
          subtitle="We don’t chase trends. We build foundations." />
        

        <div className="relative mx-auto mt-12 max-w-2xl">
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-6 select-none font-sans text-[64px] font-bold leading-none text-ink/10 sm:-left-10">
            
            “
          </span>

          <div className="rounded-xl border border-ink/[0.07] bg-[linear-gradient(180deg,#ffffff_0%,#F3FBF4_100%)] px-7 py-9 shadow-card sm:px-10">
            <ul className="space-y-4">
              {PRINCIPLES.map((item) =>
              <li key={item} className="flex items-center gap-3">
                  <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                  
                    <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-ink/80">{item}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}