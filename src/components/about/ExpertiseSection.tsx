import React from 'react';
import { CheckIcon } from 'lucide-react';

const SKILLS = [
{
  label: 'Footwork & Agility',
  value: 95,
  description: 'Quick movement and court coverage for home practice.'
},
{
  label: 'Serve & Return Techniques',
  value: 88,
  description: 'Mastering spin, placement, and control at home.'
},
{
  label: 'Match Strategy',
  value: 82,
  description: 'Smart tactics and decision-making for home training.'
},
{
  label: 'Fitness & Endurance',
  value: 78,
  description: 'Stamina, strength, and conditioning for consistent home practice.'
},
{
  label: 'Technical Precision',
  value: 92,
  description: 'Perfecting strokes, accuracy, and technique in home sessions.'
},
{
  label: 'Sportsmanship',
  value: 96,
  description: 'Encouraging discipline, respect, and positive play even at home.'
}];


const POINTS = ['Certified Home Coaches', 'Skill Improvement Focused'];

export function ExpertiseSection() {
  return (
    <section className="w-full bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[28px]">
              Our Home Coaching Expertise
            </h2>
            <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-body">
              At Ping Perfect, we bring professional table tennis coaching to your home. Our programs
              combine expert guidance, personalized drills, and structured sessions to help players of
              all ages improve their skills and enjoy the game.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {POINTS.map((point) =>
              <li key={point} className="flex items-center gap-2">
                  <span
                  aria-hidden="true"
                  className="flex h-4 w-4 items-center justify-center rounded-full bg-brand">
                  
                    <CheckIcon className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[12px] font-medium text-ink">{point}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SKILLS.map((skill) =>
            <div
              key={skill.label}
              className="rounded-lg border border-ink/[0.07] bg-white p-4 shadow-card">
              
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[13px] font-bold text-ink">{skill.label}</p>
                  <p className="text-[13px] font-bold text-brand">{skill.value}%</p>
                </div>
                <div
                role="progressbar"
                aria-label={skill.label}
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
                className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                
                  <div
                  className="h-full rounded-full bg-brand transition-[width] duration-700"
                  style={{ width: `${skill.value}%` }} />
                
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-body">{skill.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}