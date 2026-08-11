import React, { useEffect } from 'react';
import { EcoNav } from './EcoNav';
import { EcoFooter } from './EcoFooter';

interface EcoPageProps {
  pageName: string;
  tagline: string;
  /** Brand logo shown in this ecosystem page's nav and footer. */
  logoSrc: string;
  credit?: string;
  children: React.ReactNode;
}

export function EcoPage({ pageName, tagline, logoSrc, credit, children }: EcoPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <EcoNav pageName={pageName} logoSrc={logoSrc} />
      <main className="flex-1">{children}</main>
      <EcoFooter tagline={tagline} logoSrc={logoSrc} credit={credit} />
    </div>);

}