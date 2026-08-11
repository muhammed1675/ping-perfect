import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SESSION_KEY = 'pp_intro_seen';
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Full-screen splash shown once per browser session, the first time the site loads.
 * Logo scales/fades in, a shimmering placeholder bar "loads" beneath it, then the
 * whole mark punches forward and fades — a quick Netflix-style zoom-out — before
 * the real site is revealed underneath.
 */
export function LoadingScreen() {
  const [phase, setPhase] = useState<'hidden' | 'intro' | 'exit' | 'done'>('hidden');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (alreadySeen) {
      setPhase('done');
      return;
    }
    setPhase('intro');
    sessionStorage.setItem(SESSION_KEY, '1');

    const exitTimer = window.setTimeout(() => setPhase('exit'), 1600);
    const doneTimer = window.setTimeout(() => setPhase('done'), 2150);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      {phase !== 'done' &&
      <motion.div
        key="loading-screen"
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-night"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.45, ease: EASE, delay: 0.15 } }}>
        
          <motion.div
          className="flex flex-col items-center"
          animate={
          phase === 'exit' ?
          { scale: 5.5, opacity: 0 } :
          { scale: 1, opacity: 1 }
          }
          initial={{ scale: 0.82, opacity: 0 }}
          transition={
          phase === 'exit' ?
          { duration: 0.62, ease: [0.6, 0, 0.9, 0.2] } :
          { duration: 0.7, ease: EASE }
          }>
          
            <img
            src="/assets/img/PING-PERFECT-LOGO.png"
            alt="Ping Perfect"
            className="h-16 w-16 sm:h-20 sm:w-20" />
            
            <motion.p
            className="font-heading mt-4 text-[15px] font-bold uppercase tracking-[0.28em] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'exit' ? 0 : 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}>
            
              Ping Perfect
            </motion.p>

            {/* Loading placeholder: a thin shimmering bar that fills while the intro plays */}
            <div className="mt-6 h-[3px] w-36 overflow-hidden rounded-full bg-white/10 sm:w-44">
              <motion.div
              className="h-full rounded-full bg-brand"
              initial={{ width: '0%' }}
              animate={{ width: phase === 'exit' ? '100%' : '78%' }}
              transition={{ duration: phase === 'exit' ? 0.3 : 1.1, ease: 'easeInOut' }} />
              
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
