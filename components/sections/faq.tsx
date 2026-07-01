"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <Section id="faq" className="bg-[#f0f1f6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeading eyebrow="Common questions" title={<>Frequently asked <span className="gradient-text">questions.</span></>} description="Still curious? We’re happy to talk through your project with no pressure and no jargon."/><Button href="/contact" variant="dark" className="mt-7">Ask Us Anything</Button></div>
        <div>{faqs.map(([question,answer],index)=>{const isOpen=openIndex===index;return <div key={question} className="border-b border-line"><button type="button" onClick={()=>setOpenIndex(isOpen?-1:index)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-heading text-sm font-semibold sm:text-base" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>{question}<span className={`grid size-8 shrink-0 place-items-center rounded-full border transition ${isOpen?'rotate-45 border-accent bg-accent text-white':'border-line bg-white'}`}><Plus className="size-4"/></span></button><AnimatePresence initial={false}>{isOpen&&<motion.div id={`faq-answer-${index}`} initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.28}} className="overflow-hidden"><p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-muted">{answer}</p></motion.div>}</AnimatePresence></div>})}</div>
      </div>
    </Section>
  );
}
