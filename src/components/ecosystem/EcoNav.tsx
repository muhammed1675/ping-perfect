import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ECOSYSTEM_LINKS } from '../../data/site';

interface EcoNavProps {
  pageName: string;
  /** Brand logo for the specific ecosystem page. */
  logoSrc: string;
}

export function EcoNav({ pageName, logoSrc }: EcoNavProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/[0.07] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${pageName} — Ping Perfect`}>
          <img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="h-8 w-8 shrink-0 rounded-sm object-cover" />

          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-eco-black">
            {pageName}
          </span>
        </Link>

        <nav aria-label="Ecosystem" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[13px]">
            {ECOSYSTEM_LINKS.map((link) =>
            <li key={link.label}>
                <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                `transition-colors ${
                isActive ? 'text-eco-green' : 'text-ink/70 hover:text-eco-black'}`

                }>
                
                  {link.label}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <Link
          to="/contact"
          className="rounded-md bg-eco-green px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-eco-dark">
          
          Contact
        </Link>
      </div>

      <nav aria-label="Ecosystem mobile" className="border-t border-ink/[0.07] md:hidden">
        <ul className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-5 py-2.5 text-[12px]">
          {ECOSYSTEM_LINKS.map((link) =>
          <li key={link.label} className="shrink-0">
              <NavLink
              to={link.to}
              end
              className={({ isActive }) => isActive ? 'text-eco-green' : 'text-ink/70'}>
              
                {link.label}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>);

}