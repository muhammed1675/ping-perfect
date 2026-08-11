import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { EcoPage } from '../../components/ecosystem/EcoPage';
import { EcoHero } from '../../components/ecosystem/EcoHero';
import { EcoBanner } from '../../components/ecosystem/EcoBanner';
import { ASSETS } from '../../data/assets';
import { EcoLabel } from '../../components/ecosystem/EcoLabel';
import { EcoQuote } from '../../components/ecosystem/EcoQuote';
import { EcoCta } from '../../components/ecosystem/EcoCta';

const DELIVERABLES = [
{
  number: '01',
  title: 'Academy design and launch blueprint',
  description:
  'Complete architectural, operational, and financial planning for new academy development.'
},
{
  number: '02',
  title: 'Coach sourcing via CoachLab',
  description:
  'Access to pre-vetted, professionally developed coaching talent through our CoachLab Pathway.'
},
{
  number: '03',
  title: 'Training standards and curriculum frameworks',
  description:
  'Proven methodologies and structured programs adapted to your specific context and goals.'
},
{
  number: '04',
  title: 'Growth and stabilization support',
  description: 'Ongoing guidance through scaling phases with performance monitoring and optimization.'
}];


const PARTNERS = [
{
  title: 'Investors',
  description: 'Strategic capital partners seeking opportunities in sports infrastructure development.',
  items: ['Private equity firms', 'Sports investment funds', 'High-net-worth individuals']
},
{
  title: 'Institutions and schools',
  description: 'Educational bodies integrating elite table tennis programs into their offerings.',
  items: ['Universities', 'International schools', 'Sports institutes']
},
{
  title: 'Clubs and regional operators',
  description: 'Existing organizations looking to elevate their programs to professional standards.',
  items: ['National federations', 'Regional clubs', 'Sports complexes']
}];


function GlobePaddleMark({ className = '' }: {className?: string;}) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      
      <circle cx="42" cy="52" r="34" fill="#1D4ED8" />
      <path
        d="M8 52h68M42 18c12 10 12 58 0 68M42 18c-12 10-12 58 0 68"
        stroke="#ffffff"
        strokeWidth="2.5"
        fill="none"
        opacity="0.85" />
      
      <ellipse cx="60" cy="30" rx="22" ry="21" fill="#C1272D" />
      <rect x="46" y="44" width="14" height="34" rx="7" transform="rotate(-32 46 44)" fill="#F3F4F6" />
      <circle cx="52" cy="44" r="7" fill="#ffffff" />
    </svg>);

}

export function Academy() {
  return (
    <EcoPage
      pageName="TT Global Academy"
      logoSrc={ASSETS.ecosystem.academy}
      tagline="Preserving clarity and professional perspective in elite table tennis.">
      
      <EcoHero
        eyebrow="TT Global Academy"
        title="TT Global Academy Holdings"
        subtitle="Building Professional Table Tennis Academies"
        paragraph="TT Global Academy Holdings designs and deploys structured, standards-driven table tennis academies. It converts proven coaching systems into scalable academy operations." />
      

      <EcoBanner caption="Academy development & infrastructure" tone="light" src={ASSETS.ecosystem.academy}>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <GlobePaddleMark className="h-16 w-16 sm:h-28 sm:w-28" />
          <p className="text-left leading-none">
            <span className="block text-2xl font-bold tracking-tight sm:text-5xl">
              <span className="text-[#1D4ED8]">TT</span>{' '}
              <span className="text-[#3F3F46]">GLOBAL</span>
            </span>
            <span className="mt-2 block text-[11px] font-medium tracking-[0.24em] text-[#52525B] sm:text-xl">
              ACADEMY HOLDINGS
            </span>
          </p>
        </div>
      </EcoBanner>

      <section className="w-full bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <EcoLabel intro="Comprehensive solutions for building and operating professional table tennis academies.">
            Deliverables
          </EcoLabel>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {DELIVERABLES.map((item) =>
            <article key={item.number} className="border border-ink/[0.09] bg-white p-7">
                <p className="text-3xl font-bold tracking-tight text-eco-green">{item.number}</p>
                <h3 className="mt-5 text-[15px] font-bold tracking-tight text-eco-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-body">{item.description}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-eco-black py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <EcoLabel
            tone="dark"
            intro="We work with forward-thinking organizations committed to building sustainable table tennis infrastructure.">
            
            Partners
          </EcoLabel>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PARTNERS.map((partner) =>
            <article key={partner.title} className="bg-[#141414] p-7">
                <h3 className="text-[15px] font-bold tracking-tight text-white">{partner.title}</h3>
                <p className="mt-3 text-[12px] leading-relaxed text-white/55">
                  {partner.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {partner.items.map((item) =>
                <li key={item} className="flex items-start gap-2 text-[13px] text-white/70">
                      <ChevronRightIcon
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-eco-green"
                    aria-hidden="true" />
                  
                      {item}
                    </li>
                )}
                </ul>
              </article>
            )}
          </div>
        </div>
      </section>

      <EcoQuote
        quote="This platform focuses on sustainability, not short-term projects."
        caption="Our philosophy" />
      

      <EcoCta
        heading="Partner With Us"
        paragraph="Ready to build a world-class table tennis academy? Let's discuss how we can bring your vision to life."
        primary={{ label: 'Start Partnership', to: '/contact' }}
        secondary={{ label: 'Explore Platform', to: '/inner-court' }}
        tone="green" />
      
    </EcoPage>);

}