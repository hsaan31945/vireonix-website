import { About } from "@/components/sections/about";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { TechnicalExcellence } from "@/components/sections/technical-excellence";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <a href="#main" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-xl transition focus:translate-y-0">Skip to content</a>
      <Navbar />
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
      <Footer />
    </>
  );
}
