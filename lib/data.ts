import {
  AppWindow,
  BrainCircuit,
  Blocks,
  Braces,
  Bug,
  Cloud,
  Code2,
  Headphones,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
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
  { icon: Code2, title: "Web Development", description: "Fast, responsive websites and platforms engineered for performance, security, and long-term growth." },
  { icon: Smartphone, title: "App Development", description: "User-focused mobile and cross-platform applications built around real business requirements." },
  { icon: BrainCircuit, title: "AI/ML Solutions", description: "Practical AI, machine learning, and intelligent automation that improve decisions and operations." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Security assessments, hardening, monitoring, and protection for critical digital systems." },
  { icon: Search, title: "SEO & Digital Marketing", description: "Search strategy and digital campaigns designed to improve visibility, reach, and qualified demand." },
  { icon: Palette, title: "Graphic Design & Branding", description: "Professional identity systems and creative assets that make your business clear and memorable." },
  { icon: Braces, title: "Custom Software Development", description: "Purpose-built software that streamlines workflows and solves complex operational challenges." },
  { icon: AppWindow, title: "SaaS Development", description: "Scalable software products designed, developed, and prepared for sustainable market growth." },
  { icon: Bug, title: "Software Testing", description: "Structured quality assurance that improves reliability, usability, and release confidence." },
  { icon: Cloud, title: "IT Consulting", description: "Clear technical guidance across cloud, architecture, automation, and digital transformation." },
] as const;

export const benefits = [
  { icon: Zap, title: "Modern technology", text: "Current, proven tools selected for performance and maintainability." },
  { icon: ShieldCheck, title: "Secure solutions", text: "Security considered throughout planning, development, and delivery." },
  { icon: Blocks, title: "Scalable development", text: "Systems designed to evolve as your users and operations grow." },
  { icon: Target, title: "Business-focused strategy", text: "Every technical decision connects back to a measurable objective." },
  { icon: Palette, title: "Creative design", text: "Clear, polished experiences that strengthen trust in your brand." },
  { icon: Headphones, title: "Reliable support", text: "Responsive communication and dependable help beyond launch." },
] as const;

export const processSteps = [
  { number: "01", title: "Discovery", text: "We understand your business, goals, audience, services, and competitive landscape." },
  { number: "02", title: "Planning", text: "We define scope, architecture, priorities, timelines, and a practical delivery roadmap." },
  { number: "03", title: "Design", text: "We shape clear user journeys and professional interfaces aligned with your brand." },
  { number: "04", title: "Development", text: "We build the solution using secure, scalable, and maintainable technology." },
  { number: "05", title: "Testing", text: "We validate functionality, quality, performance, security, and responsiveness." },
  { number: "06", title: "Launch", text: "We deploy carefully, verify production behavior, and prepare your team for handover." },
  { number: "07", title: "Support", text: "We provide ongoing improvements, maintenance, monitoring, and technical guidance." },
] as const;

export const projects = [
  { number: "01", title: "AJL Tour", url: "https://ajltour.com", image: "/images/projects/ajl-tour.png", category: "Travel & tourism platform", tags: ["Web development", "UX design"], description: "A clear, responsive digital experience that helps travelers explore services and plan with confidence.", theme: "blue" },
  { number: "02", title: "AJL Transfer", url: "https://ajltransfer.com", image: "/images/projects/ajl-transfer.png", category: "Transport booking solution", tags: ["Platform", "Development"], description: "A professional transfer service website focused on simple discovery, trust, and booking intent.", theme: "slate" },
  { number: "03", title: "Everhide Global", url: "https://everhideglobal.com", image: "/images/projects/everhide-global.png", category: "Global business website", tags: ["Branding", "Web design"], description: "A modern corporate presence designed to communicate capability across international markets.", theme: "steel" },
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

export const footerServices = ["Web Development", "App Development", "AI/ML Solutions", "Cybersecurity", "Custom Software", "IT Consulting"] as const;

export { Megaphone };
