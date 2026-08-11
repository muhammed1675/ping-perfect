import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Button } from '../components/ui/Button';
import { WhatWeDo } from '../components/home/WhatWeDo';
import { EcosystemSection } from '../components/home/EcosystemSection';
import { WhyPingPerfect } from '../components/home/WhyPingPerfect';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { FaqSection } from '../components/FaqSection';
import { TeamSection } from '../components/home/TeamSection';
import { ContactSection } from '../components/ContactSection';

export function Home() {
  return (
    <>
      <PageHero
        eyebrow="Professional Table Tennis Coaching & Development Platform"
        title="Ping Perfect"
        description="Ping Perfect operates as a dedicated home table tennis coaching system in Dubai — designed for players who want structured, high-quality training within their own environment. Our system is designed exclusively for home coaching environments. Every program is structured to develop technically sound players through disciplined training, consistency, and a clear long-term pathway."
        actions={
        <>
            <Button to="/contact">
              Start Training
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/contact">
              Enquire / Partner
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </>
        } />
      
      <WhatWeDo />
      <EcosystemSection />
      <WhyPingPerfect />
      <GalleryPreview />
      <FaqSection />
      <TeamSection />
      <ContactSection
        subheading="Ready to start your table tennis journey the right way?"
        formTitle="Book Training / Contact Us"
        messagePlaceholder="Tell us about the player, level and preferred training days" />
      
    </>);

}