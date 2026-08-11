import React from 'react';
import { CheckIcon } from 'lucide-react';
import { EcoPage } from '../../components/ecosystem/EcoPage';
import { EcoHero } from '../../components/ecosystem/EcoHero';
import { EcoBanner } from '../../components/ecosystem/EcoBanner';
import { ASSETS } from '../../data/assets';
import { EcoLabel } from '../../components/ecosystem/EcoLabel';
import { EcoQuote } from '../../components/ecosystem/EcoQuote';
import { EcoCta } from '../../components/ecosystem/EcoCta';

const FOCUS = [
{
  title: 'Elite coaching and performance interpretation',
  description: 'Deep analysis of coaching methodologies used at the highest levels of competition.'
},
{
  title: 'High-level preparation, mindset, and structure',
  description: 'Understanding the mental and physical frameworks that drive elite performance.'
},
{
  title: 'Professional standards across training environments',
  description: 'Documenting best practices from world-class training facilities.'
}];


const AUDIENCE = [
{
  number: '01',
  title: 'Serious players and coaches',
  description: 'Athletes and mentors committed to reaching the highest levels.'
},
{
  number: '02',
  title: 'Performance professionals',
  description: 'Sports scientists, analysts, and support staff in elite programs.'
},
{
  number: '03',
  title: 'Clubs, federations, and ecosystem leaders',
  description: 'Decision-makers shaping the future of table tennis development.'
}];


export function InnerCourt() {
  return (
    <EcoPage
      pageName="The Inner Court"
      logoSrc={ASSETS.ecosystem.innerCourt}
      tagline="Preserving clarity and professional perspective in elite table tennis.">
      
      <EcoHero
        eyebrow="Inner Court 01"
        title="The Inner Court"
        subtitle="Studying the Standard Behind Elite Table Tennis"
        paragraph="The Inner Court is a professional insight and documentation platform focused on how table tennis is practiced at the highest level. It captures coaching logic, performance thinking, preparation, and environment—without exaggeration or entertainment framing." />
      

      <EcoBanner caption="Professional documentation" tone="gray" src={ASSETS.ecosystem.innerCourt}>
        <p className="font-serif leading-none tracking-[0.06em] text-eco-black">
          <span className="block text-xl sm:text-3xl">THE</span>
          <span className="mt-2 block text-3xl sm:text-6xl">INNER COURT</span>
        </p>
      </EcoBanner>

      <section className="w-full bg-white pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <div>
            <EcoLabel>Focus</EcoLabel>
            <div className="mt-8 space-y-4">
              {FOCUS.map((item) =>
              <article key={item.title} className="border border-ink/[0.09] bg-white p-6">
                  <CheckIcon className="h-4 w-4 text-eco-green" strokeWidth={3} aria-hidden="true" />
                  <h3 className="mt-5 text-[15px] font-bold tracking-tight text-eco-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-body">{item.description}</p>
                </article>
              )}
            </div>
          </div>

          <div>
            <EcoLabel>Audience</EcoLabel>
            <ol className="mt-8 space-y-4">
              {AUDIENCE.map((item) =>
              <li
                key={item.number}
                className="grid gap-3 border border-ink/[0.09] bg-white p-6 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-5">
                
                  <span className="text-[11px] font-bold text-eco-green">{item.number}</span>
                  <h3 className="text-[15px] font-bold leading-snug tracking-tight text-eco-black">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-body">{item.description}</p>
                </li>
              )}
            </ol>
          </div>
        </div>
      </section>

      <EcoQuote
        quote="The Inner Court exists to preserve clarity and professional perspective."
        caption="Our mission" />
      

      <EcoCta
        heading="Explore The Inner Court"
        paragraph="Access professional insights and documentation that elevate your understanding of elite table tennis."
        primary={{ label: 'Get Access', to: '/contact' }}
        secondary={{ label: 'Explore CoachLab', to: '/coachlab' }} />
      
    </EcoPage>);

}