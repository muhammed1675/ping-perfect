import React from 'react';
import { CalendarDaysIcon, ClockIcon, SmileIcon, UsersIcon } from 'lucide-react';

const STATS = [
{
  Icon: SmileIcon,
  label: 'Player Satisfaction',
  caption: 'Happy players, better games',
  value: '232',
  plus: true,
  accent: 'border-t-brand'
},
{
  Icon: CalendarDaysIcon,
  label: 'Training Sessions Completed',
  caption: 'From beginners to pros',
  value: '521',
  plus: true,
  accent: 'border-t-brand'
},
{
  Icon: ClockIcon,
  label: 'Coaching Hours',
  caption: 'Dedicated to player growth',
  value: '1463',
  plus: false,
  accent: 'border-t-brand'
},
{
  Icon: UsersIcon,
  label: 'Professional Coaches',
  caption: 'Experienced & passionate',
  value: '15',
  plus: false,
  accent: 'border-t-violet-500'
}];


export function StatsBar() {
  return (
    <section className="w-full bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ Icon, label, caption, value, plus, accent }) =>
          <div
            key={label}
            className={`rounded-lg border border-ink/[0.07] border-t-2 ${accent} bg-white p-4 shadow-card`}>
            
              <div className="flex items-start gap-2">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <dt className="text-[12px] font-bold leading-tight text-ink">{label}</dt>
                  <p className="mt-1 text-[10px] text-body">{caption}</p>
                </div>
              </div>
              <dd className="mt-4 text-[26px] font-bold leading-none tracking-tight text-ink">
                {value}
                {plus ? <span className="ml-1 align-top text-sm text-body">+</span> : null}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-lg border border-ink/[0.07] bg-white px-4 py-3 text-[11px] text-body">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
            Stats updated quarterly
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Compared with national standards
          </span>
        </div>
      </div>
    </section>);

}