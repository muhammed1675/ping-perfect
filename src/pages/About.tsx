import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Button, PlayLink } from '../components/ui/Button';
import { AboutFeatures } from '../components/about/AboutFeatures';
import { AboutStory } from '../components/about/AboutStory';
import { StatsBar } from '../components/about/StatsBar';
import { ExpertiseSection } from '../components/about/ExpertiseSection';
import { PlatformFeatures } from '../components/about/PlatformFeatures';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Ping Perfect"
        title="Committed to Growing Table Tennis Talent"
        description="Ping Perfect is a professional table tennis hub dedicated to nurturing talent at all levels. We provide expert coaching, modern facilities, and a supportive community to help every player excel."
        actions={
        <>
            <Button href="#about-story">
              About Us
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <PlayLink href="#about-story">Watch Our Story</PlayLink>
          </>
        }
        checklist={['Expert Coaching', 'World-Class Facilities', 'Supportive Community']} />
      
      <AboutFeatures />
      <div id="about-story">
        <AboutStory />
      </div>
      <StatsBar />
      <ExpertiseSection />
      <PlatformFeatures />
      <FaqSection background="cream" />
      <ContactSection
        formTitle="Get in Touch With Us"
        messagePlaceholder="Tell us what you'd like to know about our coaching" />
    </>);

}