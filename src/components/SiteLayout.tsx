import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTopButton } from './ScrollToTopButton';
import { ScrollProgressBar } from './ui/AppleType';

export function SiteLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
            
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer
        blurb={
        isHome ?
        'Professional coaching built on standards and long-term development.' :
        'Delivering expert coaching and top-notch training.'
        }
        ctaLabel={isHome ? 'Book Training' : 'Register Now'} />
      
      <ScrollToTopButton />
    </div>);

}