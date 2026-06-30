"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const service = String(formData.get("service") || "");
    const budget = String(formData.get("budget") || "");
    const message = String(formData.get("message") || "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Service Needed: ${service}`,
      `Budget Range: ${budget}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:contact@vireonix.dev?subject=${encodeURIComponent(`Proposal request from ${name || "Vireonix website"}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }
  return (
    <section id="contact" className="noise relative overflow-hidden bg-[linear-gradient(130deg,#17182c,#202044_55%,#1c1c36)] py-24 text-white sm:py-28">
      <div className="absolute -bottom-48 -left-48 size-[450px] rounded-full bg-violet/25 blur-[100px]"/><div className="absolute -right-32 -top-32 size-80 rounded-full bg-cyan/15 blur-[80px]"/>
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div><Eyebrow light>Start a conversation</Eyebrow><h2 className="mt-5 font-heading text-5xl font-semibold leading-[1.05] tracking-[-.06em] sm:text-6xl">Let’s build something <span className="bg-gradient-to-r from-indigo-300 to-cyan bg-clip-text text-transparent">exceptional.</span></h2><p className="mt-6 max-w-lg text-base leading-8 text-white/55">Tell us about your business and we’ll help you plan a premium website built for growth, trust, and conversions.</p><div className="mt-10 flex flex-col gap-5 sm:flex-row sm:gap-10"><a href="mailto:contact@vireonix.dev" className="group"><small className="block text-[9px] uppercase tracking-[.15em] text-white/35">Email us</small><strong className="mt-2 flex items-center gap-2 text-xs">contact@vireonix.dev <ArrowUpRight className="size-3 transition group-hover:translate-x-1 group-hover:-translate-y-1"/></strong></a><a href="#contact"><small className="block text-[9px] uppercase tracking-[.15em] text-white/35">Prefer a call?</small><strong className="mt-2 block text-xs">Book a 30-minute intro</strong></a></div><div className="mt-10 flex gap-3 text-[10px] font-semibold text-white/45"><a href="#">LinkedIn</a><span>·</span><a href="#">Instagram</a><span>·</span><a href="#">Dribbble</a></div></div>
        <form onSubmit={handleSubmit} className="relative min-h-[540px] rounded-[28px] border border-white/10 bg-white/[.075] p-6 shadow-[0_25px_60px_rgba(0,0,0,.18)] backdrop-blur-xl sm:p-8">
          <div className="grid gap-x-4 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Jane Smith"/><Field label="Email" name="email" type="email" placeholder="jane@company.com"/><Field label="Company Name" name="company" placeholder="Company name"/><SelectField label="Service Needed" name="service" options={["Website design","Web development","SEO optimization","Brand identity","Landing page","Website maintenance"]}/><SelectField label="Budget Range" name="budget" options={["$2.5k–$5k","$5k–$10k","$10k–$20k","$20k+"]} full/></div><label className="mb-4 block text-[9px] font-bold uppercase tracking-[.1em] text-white/65">Message<textarea name="message" required rows={4} placeholder="Tell us about your goals, timeline, and what success looks like..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/[.06] px-4 py-3 text-xs text-white outline-none transition placeholder:text-white/25 focus:border-indigo-400 focus:bg-white/10"/></label><button type="submit" className="flex h-14 w-full items-center justify-center gap-3 rounded-[14px] bg-gradient-to-r from-accent to-violet text-sm font-bold shadow-[0_14px_34px_rgba(75,86,246,.28)] transition hover:-translate-y-0.5">Request a Proposal <ArrowUpRight className="size-4"/></button><p className="mt-3 text-center text-[8px] text-white/30">We usually reply within one business day.</p>
          <AnimatePresence>{submitted&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="status" aria-live="polite" className="absolute inset-0 grid place-content-center rounded-[28px] bg-[#191a30] p-8 text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-500 text-white"><Check className="size-6"/></span><strong className="mt-5 font-heading text-xl">Your brief is ready.</strong><p className="mt-2 text-sm text-white/50">Thanks for reaching out. We’ll be in touch within one business day.</p><button type="button" onClick={()=>setSubmitted(false)} className="mx-auto mt-6 inline-flex items-center gap-2 text-xs font-bold text-indigo-300"><Mail className="size-4"/> Send another message</button></motion.div>}</AnimatePresence>
        </form>
      </div>
    </section>
  );
}

interface FieldProps { label:string; name:string; placeholder:string; type?:string; }
function Field({label,name,placeholder,type="text"}:FieldProps){return <label className="mb-4 block text-[9px] font-bold uppercase tracking-[.1em] text-white/65">{label}<input required name={name} type={type} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[.06] px-4 text-xs text-white outline-none transition placeholder:text-white/25 focus:border-indigo-400 focus:bg-white/10"/></label>}

interface SelectFieldProps { label:string; name:string; options:readonly string[]; full?:boolean; }
function SelectField({label,name,options,full=false}:SelectFieldProps){return <label className={`mb-4 block text-[9px] font-bold uppercase tracking-[.1em] text-white/65 ${full?'sm:col-span-2':''}`}>{label}<select required name={name} defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#303149] px-4 text-xs text-white outline-none transition focus:border-indigo-400"><option value="" disabled>Select an option</option>{options.map(option=><option key={option}>{option}</option>)}</select></label>}
