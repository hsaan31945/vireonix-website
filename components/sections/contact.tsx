"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Globe2, Mail, MapPin } from "lucide-react";

const serviceOptions = ["Web development", "App development", "AI/ML solutions", "Cybersecurity", "SEO & digital marketing", "Graphic design & branding", "Custom software", "SaaS development", "Software testing", "Cloud solutions", "Business automation", "Chatbot development", "IT consulting"] as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setSending(true);

    try {
      const response = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your proposal request.");
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not send your proposal request.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#07101d] py-24 text-white sm:py-28 lg:py-32">
      <div className="absolute right-0 top-0 size-96 bg-blue-500/[.05] blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1180px] items-start gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28"><span className="section-label">Start a conversation</span><h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">Let’s solve the right technology problem.</h2><p className="mt-6 max-w-lg text-base leading-8 text-slate-400">Tell us what you are building, improving, or trying to solve. We’ll respond with clear next steps and a practical recommendation.</p>
          <div className="mt-10 grid gap-3"><ContactItem icon={Globe2} label="Website" value="vireonix.dev" href="https://vireonix.dev" /><ContactItem icon={Mail} label="Email" value="contact@vireonix.dev" href="mailto:contact@vireonix.dev" /><ContactItem icon={MapPin} label="Location" value="Zurich, Switzerland" /></div>
        </div>
        <form onSubmit={handleSubmit} className="relative min-h-[560px] rounded-2xl border border-white/10 bg-[#0b1728] p-6 shadow-[0_24px_70px_rgba(0,0,0,.28)] sm:p-8">
          <div className="grid gap-x-4 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Your name" /><Field label="Email" name="email" type="email" placeholder="you@company.com" /><Field label="Company" name="company" placeholder="Company name" /><SelectField label="Service needed" name="service" options={serviceOptions} /><SelectField label="Project budget" name="budget" options={["Under $2.5k", "$2.5k–$5k", "$5k–$10k", "$10k–$20k", "$20k+"]} full /></div>
          <label className="mb-4 block text-[10px] font-semibold uppercase tracking-[.12em] text-slate-400">Project details<textarea name="message" required rows={5} placeholder="Tell us about your goals, requirements, and preferred timeline..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#0e1c2f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60" /></label>
          <button type="submit" disabled={sending} className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60">{sending ? "Sending..." : "Get a Free Consultation"}<ArrowUpRight className="size-4" /></button>
          <p className="mt-3 text-center text-[10px] text-slate-500">We usually reply within one business day.</p>
          {error && <p role="alert" className="mt-3 text-center text-xs font-medium text-rose-300">{error}</p>}
          <AnimatePresence>{submitted && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="status" aria-live="polite" className="absolute inset-0 grid place-content-center rounded-2xl bg-[#0b1728] p-8 text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-500 text-white"><Check className="size-6" /></span><strong className="mt-5 text-xl">Thank you for reaching out.</strong><p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">Your project details have been received. Our team will contact you within one business day.</p><button type="button" onClick={() => setSubmitted(false)} className="mx-auto mt-6 inline-flex items-center gap-2 text-xs font-semibold text-blue-300"><Mail className="size-4" /> Send another message</button></motion.div>}</AnimatePresence>
        </form>
      </div>
    </section>
  );
}

interface ContactItemProps { icon: typeof Mail; label: string; value: string; href?: string; }
function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) { const content = <><span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[.03] text-blue-400"><Icon className="size-4" /></span><span><small className="block text-[9px] uppercase tracking-[.12em] text-slate-600">{label}</small><strong className="mt-1 block text-sm font-medium text-slate-300">{value}</strong></span></>; return href ? <a href={href} className="flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-blue-400/30">{content}</a> : <div className="flex items-center gap-4 rounded-xl border border-white/10 p-4">{content}</div>; }

interface FieldProps { label: string; name: string; placeholder: string; type?: string; }
function Field({ label, name, placeholder, type = "text" }: FieldProps) { return <label className="mb-4 block text-[10px] font-semibold uppercase tracking-[.12em] text-slate-400">{label}<input required name={name} type={type} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0e1c2f] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60" /></label>; }

interface SelectFieldProps { label: string; name: string; options: readonly string[]; full?: boolean; }
function SelectField({ label, name, options, full = false }: SelectFieldProps) { return <label className={`mb-4 block text-[10px] font-semibold uppercase tracking-[.12em] text-slate-400 ${full ? "sm:col-span-2" : ""}`}>{label}<select required name={name} defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0e1c2f] px-4 text-sm text-white outline-none transition focus:border-blue-400/60"><option value="" disabled>Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>; }
