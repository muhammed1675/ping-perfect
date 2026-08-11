import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircleIcon, MinusIcon, PlusIcon } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { FAQS } from '../data/faqs';

interface FaqSectionProps {
  background?: 'white' | 'cream';
}

export function FaqSection({ background = 'white' }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`w-full py-16 lg:py-20 ${background === 'cream' ? 'bg-cream' : 'bg-white'}`}>
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <SectionTitle title="F.A.Q" subtitle="Frequently Asked Questions" />

        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-lg border bg-white ${
                isOpen ? 'border-brand/30 shadow-card' : 'border-ink/10'}`
                }>
                
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center gap-3.5 px-5 py-4 text-left">
                    
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                      
                      <HelpCircleIcon className="h-4 w-4" />
                    </span>
                    <span
                      className={`flex-1 text-[15px] font-semibold ${
                      isOpen ? 'text-brand' : 'text-ink'}`
                      }>
                      
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? 'bg-brand text-white' : 'bg-ink/5 text-ink/50'}`
                      }>
                      
                      {isOpen ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ?
                  <motion.div
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="overflow-hidden">
                    
                      <p className="px-5 pb-5 pl-[58px] text-[13px] leading-relaxed text-body">
                        {faq.answer}
                      </p>
                    </motion.div> :
                  null}
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}