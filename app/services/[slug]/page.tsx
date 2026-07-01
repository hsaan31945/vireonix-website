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

  const related = serviceDetails.filter((item) => item.slug !== slug).slice(0, 4);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${siteUrl}/services/${service.slug}`,
    areaServed: "Global",
    provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Vireonix", url: siteUrl },
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
            <span className="text-[11px] font-bold uppercase tracking-[.18em] text-accent">What Vireonix provides</span>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-[-.05em]">A focused {service.name.toLowerCase()} engagement.</h2>
            <p className="mt-6 text-base leading-8 text-muted">We begin with the business problem, users, current systems, constraints, and desired outcome. The result is a clear scope and a solution designed to remain useful beyond its first release.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.provides.map((item) => <li key={item} className="flex min-h-32 flex-col justify-between rounded-2xl border border-line bg-canvas p-5 text-sm font-semibold leading-6"><CheckCircle2 className="size-5 text-accent" />{item}</li>)}
          </ul>
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
