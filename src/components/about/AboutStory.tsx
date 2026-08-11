import React from 'react';
import { ArrowRightIcon, CalendarCheckIcon, SparklesIcon, TargetIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

export function AboutStory() {
  return (
    <section className="w-full bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle
          title="About"
          subtitle="Professional Table Tennis Coaching Delivered to Your Home" />
        

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-ink/[0.07] bg-white p-6 shadow-card sm:p-9">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1.5 text-[11px] font-semibold text-brand">
            <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Our Story
          </span>

          <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-ink">
            Expert Home Table Tennis Coaching for All Ages
          </h3>

          <p className="mt-4 text-[13px] leading-relaxed text-body">
            At Ping Perfect, we specialize in delivering high-quality table tennis coaching directly to
            your home. We provide flexible, convenient, and personalized home-based training designed
            to help players of all ages improve quickly and confidently.
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-body">
            Whether you are a complete beginner, a young learner, or an advanced player preparing for
            competition, our sessions are structured to build strong technique, coordination,
            discipline, and game strategy — all in the comfort of your own space.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-brand/20 bg-[#F3FBF4] p-4">
              <div className="flex items-center gap-2">
                <CalendarCheckIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                <h4 className="text-[13px] font-bold text-ink">Convenient Home Sessions</h4>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-body">
                No need to travel — our certified coaches come to your home with a personalized
                training plan built for your space and schedule.
              </p>
            </div>
            <div className="rounded-lg border border-brand/20 bg-[#F3FBF4] p-4">
              <div className="flex items-center gap-2">
                <TargetIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                <h4 className="text-[13px] font-bold text-ink">Personalized Training</h4>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-body">
                Every session is tailored to your level, goals, and pace — ensuring steady improvement
                and building confidence with every lesson.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Button to="/contact">
              <CalendarCheckIcon className="h-4 w-4" aria-hidden="true" />
              Book Your Home Session
            </Button>
            <Link
              to="/coach"
              className="inline-flex items-center gap-1.5 text-[12px] text-body transition-colors hover:text-brand">
              
              See all training options
              <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>);

}