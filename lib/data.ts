import {
  Blocks,
  Box,
  Braces,
  Code2,
  Gem,
  LineChart,
  Megaphone,
  MousePointerClick,
  Palette,
  Search,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  { icon: Palette, title: "Website Design", description: "Premium, conversion-focused interfaces that build trust and guide visitors toward action." },
  { icon: Code2, title: "Web Development", description: "Fast, responsive, scalable websites built with Next.js, TypeScript, React, and Tailwind CSS." },
  { icon: Search, title: "SEO Optimization", description: "Search-ready architecture, metadata, headings, performance, and content foundations." },
  { icon: MousePointerClick, title: "Landing Pages", description: "Focused landing pages for campaigns, services, products, and lead generation." },
  { icon: Gem, title: "Brand Identity", description: "Strategic visual systems, color, typography, and assets that make your business look established." },
  { icon: Wrench, title: "Website Maintenance", description: "Ongoing improvements, bug fixes, content updates, monitoring, and performance support." },
] as const;

export const benefits = [
  { icon: Gem, title: "Premium visual design", text: "Distinctive interfaces polished down to the last detail." },
  { icon: Braces, title: "Technical quality", text: "Clean, typed, maintainable code with a scalable structure." },
  { icon: LineChart, title: "Conversion focused", text: "Clear messaging and user journeys built around action." },
  { icon: Search, title: "SEO-ready", text: "Semantic architecture designed for search visibility." },
  { icon: Zap, title: "Fast and responsive", text: "Lean experiences tuned for every screen and interaction." },
  { icon: Box, title: "Modern 3D experiences", text: "Performance-conscious WebGL that adds depth with purpose." },
  { icon: Blocks, title: "Reusable systems", text: "Components that stay consistent and evolve with your brand." },
  { icon: ShieldCheck, title: "Long-term mindset", text: "A reliable partner before, during, and after launch." },
] as const;

export const processSteps = [
  { number: "01", title: "Discovery", text: "We understand your business, goals, audience, services, and competitive landscape." },
  { number: "02", title: "Strategy", text: "We plan the structure, messaging, user flow, content, and conversion path." },
  { number: "03", title: "Design & Development", text: "We design a premium interface and build it with scalable modern technology." },
  { number: "04", title: "Launch & Growth", text: "We test, launch, optimize, and support your website for long-term results." },
] as const;

export const projects = [
  { number: "01", title: "NexaFlow", category: "Startup landing page", tags: ["Web design", "Development"], result: "+46% qualified leads", description: "A focused SaaS launch experience built to clarify the product and capture demand.", theme: "violet" },
  { number: "02", title: "North & Co.", category: "Business website redesign", tags: ["Branding", "SEO"], result: "2.1× engagement", description: "A sharper identity and digital presence for a modern business advisory firm.", theme: "cyan" },
  { number: "03", title: "Axis Health", category: "SEO-ready service website", tags: ["Development", "SEO"], result: "+71% organic reach", description: "A fast, accessible service platform structured for discovery and conversion.", theme: "orange" },
] as const;

export const pricing = [
  { name: "Starter", description: "For small businesses that need a credible online presence.", price: "From $2.5k", cta: "Start Project", popular: false, features: ["1–3 page website", "Responsive design", "Basic SEO setup", "Contact form", "Fast delivery", "Mobile optimization"] },
  { name: "Growth", description: "For businesses ready to turn their website into a growth channel.", price: "From $5.5k", cta: "Choose Growth", popular: true, features: ["5–8 page website", "Custom design", "Next.js development", "SEO-ready structure", "Performance optimization", "Service pages", "Lead capture form", "Purposeful animation"] },
  { name: "Premium", description: "For companies that need strategy, advanced visuals, and scale.", price: "Custom", cta: "Request Proposal", popular: false, features: ["Custom multi-page website", "Interactive 3D visuals", "Advanced animations", "Full SEO setup", "Conversion strategy", "CMS-ready structure", "Priority support"] },
] as const;

export const testimonials = [
  { quote: "Vireonix gave our brand a professional online presence and made the entire process smooth from strategy to launch.", name: "Maya Chen", role: "Founder, NexaFlow", initials: "MC" },
  { quote: "The website looked modern, loaded fast, and finally explained our services in a way customers immediately understood.", name: "Daniel Brooks", role: "Director, North & Co.", initials: "DB" },
  { quote: "Their design and technical approach made the final result feel premium, trustworthy, and built for the long term.", name: "Sara Ahmed", role: "Growth Lead, Axis Health", initials: "SA" },
] as const;

export const faqs = [
  ["What services does Vireonix offer?", "Vireonix offers website design, web development, SEO, branding, landing pages, and ongoing website support."],
  ["What technology do you use?", "We use a modern stack including Next.js, TypeScript, React, Tailwind CSS, React Three Fiber, and Framer Motion."],
  ["Can you build 3D websites?", "Yes. We create polished 3D web experiences with Three.js and React Three Fiber while protecting performance, accessibility, and usability."],
  ["Do you offer SEO with websites?", "Yes. Every build includes SEO-ready structure, metadata, semantic headings, responsive design, and performance-focused development."],
  ["How long does a website project take?", "Focused websites typically take 4–8 weeks. Larger custom builds depend on page count, content readiness, integrations, and feature scope."],
  ["Can you redesign an existing website?", "Absolutely. We can transform an outdated website into a modern, responsive, SEO-ready experience without losing what already works."],
  ["Do you offer ongoing support?", "Yes. Vireonix provides maintenance, updates, bug fixes, performance monitoring, and long-term improvements."],
  ["How do I get started?", "Book a free consultation or send your brief through the contact form. We’ll respond with clear next steps and a tailored proposal."],
] as const;

export const footerServices = ["Website Design", "Web Development", "SEO", "Branding", "Landing Pages", "Website Maintenance"] as const;

export { Megaphone };
