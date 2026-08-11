import React from 'react';
import { motion } from 'framer-motion';
import { KineticHeading } from './AppleType';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  tone?: 'light' | 'dark';
  className?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Main-site section heading: centered bold title, short green underline,
 * then a small gray subheading. Animates in — word-by-word title reveal,
 * underline draws in, subtitle fades up — the first time it scrolls into view.
 */
export function SectionTitle({ title, subtitle, tone = 'light', className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2
        className={`text-[26px] font-bold tracking-tight sm:text-[32px] ${
        tone === 'dark' ? 'text-white' : 'text-ink'}`
        }>
        
        <KineticHeading text={title} by="word" />
      </h2>
      <motion.span
        aria-hidden="true"
        className={`mt-3 block h-[3px] w-24 origin-left rounded-full bg-brand ${
        tone === 'dark' ? 'opacity-100' : ''}`
        }
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.55, delay: 0.25, ease: EASE }} />
      
      {subtitle ?
      <motion.p
        className={`mt-4 max-w-xl text-[13px] leading-relaxed ${
        tone === 'dark' ? 'font-semibold text-white' : 'text-body'}`
        }
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.55, delay: 0.35, ease: EASE }}>
        
          {subtitle}
        </motion.p> :
      null}
    </div>);

}