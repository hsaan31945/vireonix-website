import { About } from "@/components/sections/about";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { TechnicalExcellence } from "@/components/sections/technical-excellence";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
      <main id="main">
        <Hero />
        <Services />
        <Benefits />
        <TechnicalExcellence />
        <Process />
        <Work />
        <Pricing />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
  );
}
