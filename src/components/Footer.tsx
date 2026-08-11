import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Programs', to: '/coach' }
];

interface FooterProps {
  blurb?: string;
  ctaLabel?: string;
}

export function Footer({
  blurb = 'Delivering expert coaching and top-notch training.',
  ctaLabel = 'Register Now'
}: FooterProps) {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-shell px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Ping Perfect</h2>
            <p className="mt-5 max-w-xs text-sm text-body">{blurb}</p>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-[13px] font-semibold text-ink">SOCIAL MEDIA</span>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Whatsapp"
                className="flex h-9 w-9 items-center justify-center text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-brand">
                <i className="bi bi-whatsapp text-[16px]" aria-hidden="true" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-brand">
                <i className="bi bi-instagram text-[16px]" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Ping Perfect">
            <h2 className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink/70">
              Ping-Perfect
            </h2>
            <ul className="mt-6 space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="link-underline text-sm text-body transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[15px] font-medium text-ink">Contact</h2>
            <ul className="mt-6 space-y-3.5 text-sm text-body">
              <li className="max-w-[180px]">{SITE.address}</li>
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-brand">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="break-all transition-colors hover:text-brand">
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-brand">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-medium text-ink">Join Us</h2>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded border border-ink/30 px-6 py-2.5 text-[14px] font-medium uppercase tracking-[0.8px] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-shell flex-col items-center gap-2 px-5 py-5 text-[13px] text-body sm:flex-row sm:justify-between lg:px-8">
          <p>
            © {SITE.year} <span className="font-semibold text-ink">Ping Perfect</span>. All rights
            reserved.
          </p>
          <p>
            Developed by{' '}
            <a
              href="https://www.mgraphixweb.site/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand transition-colors hover:underline"
            >
              {SITE.developer}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}