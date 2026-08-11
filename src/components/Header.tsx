import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X,
  Home as HomeIcon,
  Info,
  Image as ImageIcon,
  UserRound,
  Mail,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo';
import { SITE } from '../data/site';

const NAV = [
{ label: 'Home', to: '/', icon: HomeIcon },
{ label: 'About', to: '/about', icon: Info },
{ label: 'Gallery', to: '/gallery', icon: ImageIcon },
{ label: 'Coach', to: '/coach', icon: UserRound },
{ label: 'Contact', to: '/contact', icon: Mail }];


export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // The Coach page nav carries an extra "Blog" link between Gallery and Coach.
  const items =
  pathname === '/coach' ?
  [...NAV.slice(0, 3), { label: 'Blog', to: '#', icon: Info }, ...NAV.slice(3)] :
  NAV;

  // Close the mobile menu whenever the route changes, and lock body scroll while it's open.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const desktopLink = (item: { label: string;to: string; }) =>
  item.to === '#' ?
  <a
    key={item.label}
    href="#"
    onClick={(event) => event.preventDefault()}
    className="link-underline block px-4 py-1 text-sm text-ink/80 transition-colors hover:text-brand">
    
      {item.label}
    </a> :

  <NavLink
    key={item.label}
    to={item.to}
    end={item.to === '/'}
    className={({ isActive }) =>
    `link-underline block px-4 py-1 text-sm transition-colors ${
    isActive ? 'text-brand' : 'text-ink/80 hover:text-brand'}`

    }>
    
      {item.label}
    </NavLink>;


  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Logo />

        <div className="flex items-center gap-2">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Whatsapp"
            className="flex h-8 w-8 items-center justify-center text-ink transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-brand">
            
            <i className="bi bi-whatsapp text-[18px]" aria-hidden="true" />
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center text-ink transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-brand">
            
            <i className="bi bi-instagram text-[18px]" aria-hidden="true" />
          </a>

          {/* Hamburger — visible below the lg breakpoint, where the nav bar is hidden */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            className={`ml-1 flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden ${
            menuOpen ? 'bg-brand text-white' : 'text-ink hover:bg-brand/10 hover:text-brand'}`
            }>
            
            {menuOpen ?
            <X className="h-5 w-5" aria-hidden="true" /> :

            <Menu className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Desktop / tablet nav bar */}
      <div className="mx-auto hidden max-w-shell px-5 lg:block lg:px-8">
        <nav aria-label="Main" className="bg-cream">
          <ul className="flex items-center justify-center gap-1 overflow-x-auto px-2 py-3.5">
            {items.map((item) =>
            <li key={item.label} className="shrink-0">
                {desktopLink(item)}
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Mobile dropdown — floats over the page, never pushes content down */}
      <AnimatePresence>
        {menuOpen &&
        <>
            <motion.button
            key="mobile-nav-backdrop"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 top-[64px] z-40 bg-night/40 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} />
            

            <motion.div
            key="mobile-nav-panel"
            id="mobile-nav-panel"
            className="absolute left-0 right-0 top-full z-50 origin-top overflow-hidden rounded-b-2xl border-t-2 border-brand bg-white shadow-lift lg:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}>
            
              <nav aria-label="Mobile" className="px-3 py-3">
                <ul className="flex flex-col gap-1">
                  {items.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = item.to !== '#' && (item.to === '/' ? pathname === '/' : pathname.startsWith(item.to));
                  const commonClasses = `group flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                  isActive ? 'bg-brand/10 text-brand' : 'text-ink hover:bg-brand/5 hover:text-brand'}`;

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.04 * index }}>
                      
                        {item.to === '#' ?
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          setMenuOpen(false);
                        }}
                        className={commonClasses}>
                        
                            <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                            <span className="flex-1">{item.label}</span>
                            <ChevronRight
                          className="h-4 w-4 shrink-0 text-ink/25 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                          aria-hidden="true" />
                          
                          </a> :

                      <NavLink to={item.to} end={item.to === '/'} className={commonClasses}>
                            <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                            <span className="flex-1">{item.label}</span>
                            <ChevronRight
                          className="h-4 w-4 shrink-0 text-ink/25 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                          aria-hidden="true" />
                          
                          </NavLink>
                      }
                      </motion.li>);

                })}
                </ul>
              </nav>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}
