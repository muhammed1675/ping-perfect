import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';

/** Apple's signature "expo out" curve — everything here shares it. */
export const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';

interface KineticHeadingProps {
  text: string;
  /** Element the text renders into. Defaults to a span so it can nest inside an existing heading. */
  as?: Tag;
  className?: string;
  /** Split unit. "char" is the tightest, most Apple-keynote-like; "word" is calmer for long lines. */
  by?: 'char' | 'word' | 'line';
  /** Seconds before the first unit starts. */
  delay?: number;
  /** Seconds between units. */
  stagger?: number;
  /** Animate on mount (hero) instead of on scroll into view (sections). */
  onMount?: boolean;
  /** How far each unit travels up, in em. */
  distance?: number;
}

/**
 * Apple-style kinetic type: each character/word rises, un-blurs and fades in,
 * with a tight stagger. Screen readers get the whole string via aria-label,
 * and the animation collapses to a plain fade when the user prefers reduced motion.
 */
export function KineticHeading({
  text,
  as = 'span',
  className = '',
  by = 'word',
  delay = 0,
  stagger,
  onMount = false,
  distance = 0.55
}: KineticHeadingProps) {
  const reduce = useReducedMotion();
  const Tagged = motion[as] as typeof motion.span;

  const step = stagger ?? (by === 'char' ? 0.022 : by === 'word' ? 0.045 : 0.09);
  const units = by === 'char' ? text.split('') : by === 'word' ? text.split(' ') : text.split('\n');

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : step, delayChildren: delay } }
  };

  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: `${distance}em`, filter: 'blur(10px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.85, ease: APPLE_EASE }
        }
      };

  const animateProps = onMount
    ? { animate: 'show' as const }
    : { whileInView: 'show' as const, viewport: { once: true, amount: 0.5 } };

  return (
    <Tagged
      className={className}
      aria-label={text}
      initial="hidden"
      variants={container}
      {...animateProps}>
      {units.map((unit, index) => (
        <React.Fragment key={`${unit}-${index}`}>
          <motion.span
            aria-hidden="true"
            variants={item}
            className="inline-block will-change-[transform,opacity,filter]"
            style={{ whiteSpace: 'pre' }}>
            {by === 'char' ? (unit === ' ' ? '\u00A0' : unit) : unit}
          </motion.span>
          {by === 'word' && index < units.length - 1 ? ' ' : null}
          {by === 'line' && index < units.length - 1 ? <br aria-hidden="true" /> : null}
        </React.Fragment>
      ))}
    </Tagged>
  );
}

interface ScrollRevealWordsProps {
  text: string;
  className?: string;
  /** Tailwind class for the "not read yet" state. */
  dimClassName?: string;
}

/**
 * Scroll-linked paragraph: words brighten one by one as the block travels up
 * the viewport — the Apple product-page "read along" effect.
 */
export function ScrollRevealWords({
  text,
  className = '',
  dimClassName = 'opacity-20'
}: ScrollRevealWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35']
  });
  const words = text.split(' ');

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <ScrollWord
          key={`${word}-${index}`}
          progress={scrollYProgress}
          range={[index / words.length, (index + 1) / words.length]}
          dimClassName={dimClassName}>
          {word}
        </ScrollWord>
      ))}
    </p>
  );
}

function ScrollWord({
  children,
  progress,
  range,
  dimClassName
}: {
  children: React.ReactNode;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  dimClassName: string;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative inline-block whitespace-pre">
      <span aria-hidden="true" className={`absolute inset-0 ${dimClassName}`}>
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
    </span>
  );
}

/**
 * Slow parallax lift for hero art and cover images. Keeps movement subtle
 * (Apple never exceeds a few percent of the element height).
 */
export function ParallaxBlock({
  children,
  className = '',
  distance = 40
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/** Thin brand-green progress rail pinned to the top of the viewport. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-brand"
    />
  );
}
