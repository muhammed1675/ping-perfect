import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, UsersIcon, ZapIcon } from 'lucide-react';
import { LogoMark } from './Logo';
import { KineticHeading } from './ui/AppleType';

const CHECK_ICONS = [ZapIcon, ShieldCheckIcon, UsersIcon];
const EASE = [0.16, 1, 0.3, 1] as const;

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  checklist?: string[];
}

/**
 * Dark hero at the top of every main-site page: a floating dark card with a
 * green eyebrow pill, large white heading, gray paragraph, CTAs and small checklist.
 * Content cascades in on load, Apple-keynote style — pill, then headline word-by-word,
 * then paragraph, then actions, then checklist.
 */
export function PageHero({ eyebrow, title, description, actions, checklist = [] }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-night">
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#0d3d18] blur-[120px]" />
      

      <div className="relative mx-auto max-w-shell px-5 py-14 sm:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto max-w-3xl rounded-2xl border border-white/[0.07] bg-night-light p-8">
          
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium text-white/90">
            
            <LogoMark className="h-3.5 w-3.5 text-brand" />
            {eyebrow}
          </motion.span>

          <h1 className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            <KineticHeading text={title} by="char" delay={0.22} onMount />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
            className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
            
            {description}
          </motion.p>

          {actions ?
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-5">
            
              {actions}
            </motion.div> :
          null}

          {checklist.length ?
          <motion.ul
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
            
              {checklist.map((item, index) => {
              const Icon = CHECK_ICONS[index % CHECK_ICONS.length];
              return (
                <li key={item} className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    <span className="text-[13px] text-white/80">{item}</span>
                  </li>);

            })}
            </motion.ul> :
          null}
        </motion.div>
      </div>
    </section>);

}