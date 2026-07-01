import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata, siteUrl } from "@/lib/seo";
import { getService, serviceDetails } from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const relatedServiceSlugs: Record<string, readonly string[]> = {
  "web-development": ["seo-digital-marketing", "graphic-design-branding", "software-testing", "cloud-solutions"],
  "app-development": ["custom-software-development", "saas-development", "software-testing", "cloud-solutions"],
  "ai-ml-solutions": ["business-automation", "chatbot-development", "custom-software-development", "it-consulting"],
  cybersecurity: ["cloud-solutions", "software-testing", "it-consulting", "web-development"],
  "seo-digital-marketing": ["web-development", "graphic-design-branding", "business-automation", "it-consulting"],
  "graphic-design-branding": ["web-development", "seo-digital-marketing", "app-development", "saas-development"],
  "custom-software-development": ["saas-development", "app-development", "business-automation", "cloud-solutions"],
  "saas-development": ["custom-software-development", "app-development", "software-testing", "cloud-solutions"],
  "software-testing": ["web-development", "app-development", "saas-development", "cybersecurity"],
  "cloud-solutions": ["cybersecurity", "custom-software-development", "saas-development", "it-consulting"],
  "business-automation": ["ai-ml-solutions", "chatbot-development", "custom-software-development", "it-consulting"],
  "chatbot-development": ["ai-ml-solutions", "business-automation", "web-development", "custom-software-development"],
  "it-consulting": ["cloud-solutions", "cybersecurity", "business-automation", "custom-software-development"],
};

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({ title: `${service.title} | Vireonix`, description: service.metaDescription, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = (relatedServiceSlugs[slug] ?? []).map((relatedSlug) => getService(relatedSlug)).filter((item) => item !== undefined);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/${service.slug}#service`,
        name: service.name,
        description: service.metaDescription,
        url: `${siteUrl}/services/${service.slug}`,
        areaServed: ["Zurich", "Switzerland", "Global"],
        provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Vireonix", url: siteUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: `${siteUrl}/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PageHero
        eyebrow={service.name}
        title={<>{service.title} for <span className="gradient-text">modern businesses.</span></>}
        description={service.summary}
        primaryLabel="Discuss Your Project"
        primaryHref="/contact"
        secondaryLabel="All Services"
        secondaryHref="/services"
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted"><Link href="/" className="hover:text-accent">Home</Link><span aria-hidden="true">/</span><Link href="/services" className="hover:text-accent">Services</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-ink">{service.name}</span></nav>
            <span className="text-[11px] font-bold uppercase tracking-[.18em] text-accent">What Vireonix provides</span>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">A focused {service.name.toLowerCase()} engagement.</h2>
            <p className="mt-6 text-base leading-8 text-muted">{service.approach}</p>
            <p className="mt-4 text-sm leading-7 text-muted">Vireonix operates from Zurich, Switzerland and works with businesses internationally. For a broader local overview, explore our <Link href="/it-services-zurich" className="font-semibold text-accent hover:underline">IT services in Zurich</Link>.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.provides.map((item) => <li key={item} className="flex min-h-32 flex-col justify-between rounded-2xl border border-line bg-canvas p-5 text-sm font-semibold leading-6"><CheckCircle2 className="size-5 text-accent" />{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="max-w-3xl"><span className="text-[11px] font-bold uppercase tracking-[.18em] text-accent">Typical use cases</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">Common {service.name.toLowerCase()} projects.</h2><p className="mt-5 text-sm leading-7 text-muted">The right scope depends on users, content, integrations, risk, and operational needs. These examples show where the service is commonly useful—not a fixed limit on what can be built.</p></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{service.useCases.map((item, index) => <article key={item} className="rounded-2xl border border-line bg-white p-5"><span className="font-mono text-[10px] text-accent">0{index + 1}</span><h3 className="mt-8 text-sm font-semibold leading-6">{item}</h3></article>)}</div>
        </div>
      </section>

      <section className="bg-[#091321] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><span className="section-label">Benefits</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">Built for useful, sustainable outcomes.</h2></div>
            <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">Every engagement is shaped around the organization’s context. We do not promise invented metrics; we define appropriate success measures with you before delivery begins.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((item, index) => <article key={item} className="rounded-2xl border border-white/10 bg-[#0d1929] p-6"><span className="font-mono text-[10px] text-blue-400">0{index + 1}</span><h3 className="mt-10 text-base font-semibold leading-6">{item}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f0f1f6] py-24 sm:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="max-w-3xl"><span className="text-[11px] font-bold uppercase tracking-[.18em] text-accent">Our process</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">From requirements to dependable delivery.</h2><p className="mt-6 text-base leading-8 text-muted">We discover the requirements, plan the scope and architecture, design the experience, build the solution, test it carefully, and support launch and iteration. Each stage has clear decisions and review points.</p></div>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Discovery", "Planning", "Design", "Development", "Testing", "Launch", "Support"].map((step, index) => <span key={step} className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold"><span className="mr-2 font-mono text-[9px] text-accent">0{index + 1}</span>{step}</span>)}
          </div>
          <Button href="/process" variant="dark" className="mt-8">See Our Full Process</Button>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-[-.04em]">Explore related services</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <Link key={item.slug} href={`/services/${item.slug}`} className="group flex min-h-28 items-end justify-between rounded-2xl border border-line bg-canvas p-5 text-sm font-semibold transition hover:border-accent/30 hover:bg-white">{item.name}<ArrowRight className="size-4 text-accent transition group-hover:translate-x-1" /></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#07101d] px-5 py-20 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl"><h2 className="font-heading text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Have a {service.name.toLowerCase()} project in mind?</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">Share the goal, current situation, and preferred timeline. Vireonix will respond with practical next steps and an appropriate scope.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/contact">Request a Quote</Button><Button href="/work" variant="outlineDark">View Selected Work</Button></div></div>
      </section>
    </main>
  );
}
