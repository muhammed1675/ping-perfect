import React from 'react';
import { CheckIcon } from 'lucide-react';
import { EcoPage } from '../../components/ecosystem/EcoPage';
import { EcoHero } from '../../components/ecosystem/EcoHero';
import { EcoBanner } from '../../components/ecosystem/EcoBanner';
import { ASSETS } from '../../data/assets';
import { EcoLabel } from '../../components/ecosystem/EcoLabel';
import { EcoCta } from '../../components/ecosystem/EcoCta';

const SCOPE = [
{
  number: '01',
  title: 'Coach readiness assessment',
  description: 'Evaluation of current skills, knowledge, and elite coaching potential.'
},
{
  number: '02',
  title: 'Standards and behavioral alignment',
  description: 'Alignment with professional conduct, communication, and ethical frameworks.'
},
{
  number: '03',
  title: 'Mentorship and supervised exposure',
  description: 'Hands-on coaching in real environments under elite supervision.'
},
{
  number: '04',
  title: 'Assisted and full deployment',
  description: 'Gradual independence with ongoing performance monitoring.'
}];


const USED_BY = [
{
  title: 'Developing and international coaches',
  description: 'Coaches seeking professional-level standards.'
},
{
  title: 'Academies and performance programs',
  description: 'Organizations requiring vetted coaching staff.'
}];


export function CoachLab() {
  return (
    <EcoPage
      pageName="CoachLab Pathway"
      logoSrc={ASSETS.ecosystem.coachLab}
      tagline="Preserving clarity and professional perspective in elite table tennis.">
      
      <EcoHero
        eyebrow="CoachLab Pathway"
        title="CoachLab Pathway"
        subtitle="A Structured Pathway for Professional Coaches"
        paragraph="CoachLab Pathway develops and aligns table tennis coaches to professional standards before placement. It is not recruitment. Coaches are assessed, mentored, and prepared for real environments." />
      

      <EcoBanner caption="Coach development pathway" tone="dark" src={ASSETS.ecosystem.coachLab}>
        <p className="italic leading-none">
          <span className="text-3xl font-extrabold tracking-tight text-[#D9D9D9] sm:text-6xl">
            COACH
          </span>{' '}
          <span className="text-3xl font-extrabold tracking-tight text-[#C79A3A] sm:text-6xl">
            LAB
          </span>
        </p>
        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm">
          Coach Pathway | Dubai
        </p>
      </EcoBanner>

      <section className="w-full bg-eco-black py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <EcoLabel
            tone="dark"
            intro="A comprehensive four-stage pathway that transforms promising coaches into elite-ready professionals.">
            
            Scope
          </EcoLabel>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {SCOPE.map((item) =>
            <article key={item.number} className="border border-white/[0.08] bg-[#141414] p-7">
                <p className="text-3xl font-bold tracking-tight text-eco-green">{item.number}</p>
                <h3 className="mt-5 text-[15px] font-bold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{item.description}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F3F3F3] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <EcoLabel>Used by</EcoLabel>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {USED_BY.map((item) =>
            <article key={item.title} className="bg-white p-7">
                <CheckIcon className="h-4 w-4 text-eco-green" strokeWidth={3} aria-hidden="true" />
                <h3 className="mt-5 text-[15px] font-bold tracking-tight text-eco-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-body">{item.description}</p>
              </article>
            )}
          </div>

          <blockquote className="mt-4 border-l-[3px] border-eco-green bg-white px-7 py-7">
            <p className="text-lg font-medium text-eco-black sm:text-xl">
              &quot;CoachLab raises coaching quality before opportunity.&quot;
            </p>
            <footer className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/45">
              Our promise
            </footer>
          </blockquote>
        </div>
      </section>

      <EcoCta
        heading="Learn About CoachLab Pathway"
        paragraph="Whether you're a coach seeking development or an organization seeking talent, CoachLab is your pathway to excellence."
        primary={{ label: 'Apply Now', to: '/contact' }}
        secondary={{ label: 'Explore Academy', to: '/academy' }} />
      
    </EcoPage>);

}