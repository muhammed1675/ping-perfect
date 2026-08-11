import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { APPLE_EASE, KineticHeading, ScrollRevealWords } from '../ui/AppleType';

interface EcoHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraph: string;
}

export function EcoHero({ eyebrow, title, subtitle, paragraph }: EcoHeroProps) {
  return (
    <section className="grid-paper w-full bg-white pb-12 pt-10 lg:pb-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] font-light text-ink/50 transition-colors hover:text-eco-green">

          <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Home
        </Link>

        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
          className="mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-eco-green">

          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: APPLE_EASE }}
            className="h-[2px] w-8 origin-left bg-eco-green" />

          {eyebrow}
        </motion.p>

        <KineticHeading
          as="h1"
          text={title}
          by="char"
          onMount
          delay={0.18}
          className="mt-4 block max-w-3xl text-[34px] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-eco-black sm:text-5xl lg:text-[54px]" />

        <KineticHeading
          as="p"
          text={subtitle}
          by="word"
          onMount
          delay={0.5}
          distance={0.35}
          className="mt-6 block max-w-2xl text-xl font-light leading-snug text-ink/70 sm:text-[26px]" />

        <ScrollRevealWords
          text={paragraph}
          className="mt-6 max-w-2xl text-[15px] font-light leading-[1.9] text-body" />
      </div>
    </section>);

}
