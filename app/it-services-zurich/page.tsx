import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata, siteUrl } from "@/lib/seo";
import { serviceDetails } from "@/lib/services";

export const metadata: Metadata = createMetadata({
  title: "IT Services Zurich | Vireonix",
  description: "Vireonix provides IT and digital services from Zurich, including web development, apps, AI/ML, cybersecurity, SEO, cloud, automation, SaaS, and custom software.",
  path: "/it-services-zurich",
});

const localServiceSlugs = ["web-development", "app-development", "ai-ml-solutions", "cybersecurity", "seo-digital-marketing", "custom-software-development", "cloud-solutions", "it-consulting"] as const;
const localServices = localServiceSlugs.map((slug) => serviceDetails.find((service) => service.slug === slug)).filter((service) => service !== undefined);

export default function ItServicesZurichPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "IT Services Zurich",
        description: "IT and digital solutions including web development, app development, AI/ML, cybersecurity, SEO, cloud, automation, SaaS, custom software, and IT consulting.",
        url: `${siteUrl}/it-services-zurich`,
        areaServed: { "@type": "City", name: "Zurich" },
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Vireonix", url: siteUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "IT Services Zurich", item: `${siteUrl}/it-services-zurich` },
        ],
      },
    ],
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero eyebrow="Zurich, Switzerland" title={<>IT services in Zurich for <span className="gradient-text">modern businesses.</span></>} description="Vireonix is an IT and digital solutions brand operating from Zurich and supporting businesses locally and internationally with practical technology, security, software, design, and digital growth expertise." primaryLabel="Discuss Your Project" secondaryLabel="Explore Services" secondaryHref="/services" />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-muted"><Link href="/" className="hover:text-accent">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-ink">IT Services Zurich</span></nav>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-accent"><MapPin className="size-4" />Based in Zurich</span>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">Technology decisions connected to real business needs.</h2>
            <p className="mt-6 text-base leading-8 text-muted">Businesses rarely need technology in isolation. A new website may also require brand clarity, search foundations, analytics, secure hosting, and integration with existing workflows. A software project may need product planning, interface design, cloud architecture, testing, and long-term support.</p>
            <p className="mt-4 text-base leading-8 text-muted">Vireonix brings these disciplines together around a defined objective. We clarify the problem, recommend an appropriate scope, explain tradeoffs, and deliver in stages that can be reviewed and tested.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Websites and digital platforms", "Apps, SaaS, and custom software", "AI, automation, and chatbots", "Cybersecurity and cloud guidance", "SEO and digital marketing", "Design and brand systems"].map((item) => <div key={item} className="flex min-h-28 items-end justify-between rounded-2xl border border-line bg-canvas p-5 text-sm font-semibold"><CheckCircle2 className="size-5 shrink-0 text-accent" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#091321] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="section-label">Core capabilities</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">IT and digital services available from Zurich.</h2></div><p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">Each service page explains the common project types, delivery approach, benefits, and related capabilities in more detail.</p></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {localServices.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="group flex min-h-44 flex-col rounded-2xl border border-white/10 bg-[#0d1929] p-5 transition hover:-translate-y-1 hover:border-blue-400/30"><h3 className="text-base font-semibold">{service.name}</h3><p className="mt-3 line-clamp-3 text-xs leading-6 text-slate-400">{service.summary}</p><span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold text-blue-300">Explore service<ArrowRight className="size-3.5 transition group-hover:translate-x-1" /></span></Link>)}
          </div>
          <div className="mt-8 text-center"><Button href="/services" variant="outlineDark">View All Services</Button></div>
        </div>
      </section>

      <section className="bg-[#f0f1f6] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div><span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-accent"><Globe2 className="size-4" />Local context, global delivery</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">A Zurich base without artificial boundaries.</h2><p className="mt-6 text-base leading-8 text-muted">Vireonix operates from Zurich, Switzerland, while the work itself can be delivered remotely for organizations in other regions. Project communication, scope, responsibilities, timelines, review points, and handover expectations are defined before delivery begins.</p></div>
          <div><h2 className="font-heading text-3xl font-semibold tracking-[-.04em]">Start with the problem you need to solve.</h2><p className="mt-5 text-sm leading-7 text-muted">You do not need a perfectly prepared technical brief. Share the current situation, intended users, important constraints, preferred timeline, and available budget. Vireonix will help identify a practical next step without promising fabricated outcomes.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button href="/contact" variant="dark">Request a Consultation</Button><Button href="/pricing" variant="secondary">View Starting Prices</Button></div></div>
        </div>
      </section>
    </main>
  );
}
