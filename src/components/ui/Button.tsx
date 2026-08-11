import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'outlineDark'
  | 'outlineLight'
  | 'white'
  | 'whiteOutline'
  | 'ecoPrimary';

const BASE =
  'inline-flex items-center justify-center gap-1.5 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97] motion-reduce:transform-none';

// Exact padding/size values pulled from the live site's .btn-primary-ghost / .btn-accent / .btn-join rules
const SIZES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-[14px] py-[10px] text-[13px]',
  md: 'px-[18px] py-[10px] text-sm',
  lg: 'px-[22px] py-3 text-[15px]'
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white border border-brand/70 hover:bg-brand-dark shadow-[0_8px_20px_rgba(16,173,84,0.22)]',
  outlineDark: 'border border-white/25 text-white hover:border-brand hover:text-brand',
  outlineLight: 'border border-ink/20 bg-white text-ink hover:border-brand hover:text-brand',
  white: 'bg-white text-eco-green hover:bg-white/90',
  whiteOutline: 'border border-white/70 text-white hover:bg-white/10',
  ecoPrimary: 'bg-eco-green text-white hover:bg-eco-dark'
};

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded pill — the live site only uses this on the contact form's Submit button. */
  pill?: boolean;
  className?: string;
  children: React.ReactNode;
  to?: string;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  className = '',
  children,
  to,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${pill ? 'rounded-full' : 'rounded-btn'} ${SIZES[size]} ${
    VARIANTS[variant]
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={rest.type ?? 'button'} className={classes} {...rest}>
      {children}
    </button>
  );
}

interface PlayLinkProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  tone?: 'dark' | 'light';
}

/** Small green circular play button followed by bold label — the "Watch …" secondary CTA. */
export function PlayLink({ children, href = '#', to, tone = 'dark' }: PlayLinkProps) {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white"
      >
        <PlayIcon className="h-3.5 w-3.5 fill-current" />
      </span>
      <span className="text-sm font-semibold">{children}</span>
    </>
  );

  const classes = `group inline-flex items-center gap-2.5 transition-colors hover:text-brand ${
    tone === 'dark' ? 'text-white' : 'text-ink'
  }`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}
