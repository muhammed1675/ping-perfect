import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ORIGIN = 'https://www.ping-perfect.com';

const DEFAULT = {
  title: 'Home Table Tennis Coaching in Dubai | Ping Perfect',
  description:
    'Ping Perfect provides private home table tennis coaching in Dubai for kids and adults, with structured training in technique, footwork and consistency.'
};

const PAGES: Record<string, { title: string; description: string }> = {
  '/': DEFAULT,
  '/about': {
    title: 'About Ping Perfect | Table Tennis Coaching in Dubai',
    description:
      'Learn about Ping Perfect, a professional table tennis coaching system in Dubai built on structured training, expert coaches and long-term player development.'
  },
  '/coach': {
    title: 'Coach Ademola Abiola | Table Tennis Coach in Dubai',
    description:
      'Meet Coach Ademola Abiola, the professional table tennis coach behind Ping Perfect private home coaching in Dubai.'
  },
  '/gallery': {
    title: 'Gallery | Ping Perfect Table Tennis Coaching Dubai',
    description:
      'Photos of home table tennis coaching sessions, junior training and players in action with Ping Perfect in Dubai.'
  },
  '/contact': {
    title: 'Contact Ping Perfect | Book Table Tennis Coaching in Dubai',
    description:
      'Get in touch with Ping Perfect to book private home table tennis coaching in Dubai via WhatsApp, phone or email.'
  },
  '/inner-court': {
    title: 'The Inner Court | Ping Perfect',
    description: 'The Inner Court, part of the Ping Perfect table tennis ecosystem.'
  },
  '/coachlab': {
    title: 'CoachLab | Ping Perfect',
    description: 'CoachLab, the coach development pathway within the Ping Perfect ecosystem.'
  },
  '/academy': {
    title: 'Academy Development | Ping Perfect',
    description: 'Academy design, coach sourcing and curriculum frameworks from Ping Perfect.'
  }
};

function upsert(selector: string, make: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = make();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const metaName = (name: string) => () => {
  const m = document.createElement('meta');
  m.setAttribute('name', name);
  return m;
};
const metaProp = (prop: string) => () => {
  const m = document.createElement('meta');
  m.setAttribute('property', prop);
  return m;
};
const linkCanonical = () => {
  const l = document.createElement('link');
  l.setAttribute('rel', 'canonical');
  return l;
};

export function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const meta = PAGES[path] ?? DEFAULT;
    const url = ORIGIN + path;

    document.title = meta.title;
    upsert('meta[name="description"]', metaName('description'), 'content', meta.description);
    upsert('link[rel="canonical"]', linkCanonical, 'href', url);
    upsert('meta[property="og:url"]', metaProp('og:url'), 'content', url);
    upsert('meta[property="og:title"]', metaProp('og:title'), 'content', meta.title);
    upsert('meta[property="og:description"]', metaProp('og:description'), 'content', meta.description);
  }, [pathname]);

  return null;
}
