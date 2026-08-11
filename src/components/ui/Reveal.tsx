import React from 'react';
import { motion, type Variants } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const; // Apple-style "expo out" easing

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before this element starts animating. */
  delay?: number;
  /** Distance (px) the element travels while fading in. */
  y?: number;
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
  as?: 'div' | 'section' | 'li';
}

/**
 * Fade + rise reveal for cards, sections, and blocks of copy.
 * Animates once, the first time the element scrolls into view.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
  amount = 0.3,
  as = 'div'
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}>
      
      {children}
    </MotionTag>);

}

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  /** Delay (s) added between each direct child animating in. */
  stagger?: number;
  amount?: number;
}

const groupVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } }
};

/** Wrap a row/grid of cards in this, then wrap each card in <Reveal.Item>, to stagger them in as a set. */
export function RevealGroup({ children, className = '', stagger = 0.12, amount = 0.2 }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}>
      
      {children}
    </motion.div>);

}

export function RevealItem({ children, className = '' }: {children: React.ReactNode;className?: string;}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>);

}

interface RevealTextProps {
  text: string;
  className?: string;
  /** Delay (s) before the first word starts. */
  delay?: number;
  /** Split by "word" (default, Apple-keynote style) or "line" (whole element fades as one block per <br/>-separated line). */
  by?: 'word' | 'line';
}

/**
 * Apple-keynote-style staggered word reveal for headlines.
 * Splits the text into words, each animating up + fading in with a slight delay after the last.
 */
export function RevealText({ text, className = '', delay = 0, by = 'word' }: RevealTextProps) {
  const units = by === 'word' ? text.split(' ') : text.split('\n');

  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
      aria-label={text}>
      
      {units.map((unit, index) =>
      <React.Fragment key={`${unit}-${index}`}>
          <motion.span
          aria-hidden="true"
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: '0.5em', filter: 'blur(4px)' },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.6, ease: EASE }
            }
          }}>
          
            {unit}
          </motion.span>
          {index < units.length - 1 ? by === 'word' ? ' ' : <br /> : null}
        </React.Fragment>
      )}
    </motion.span>);

}
