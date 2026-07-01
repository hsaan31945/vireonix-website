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
  { slug: "web-development", icon: Code2, title: "Web Development", description: "Fast, responsive websites and platforms engineered for accessibility, performance, security, and long-term growth." },
  { slug: "app-development", icon: Smartphone, title: "App Development", description: "User-focused mobile and cross-platform applications built around real product and business requirements." },
  { slug: "ai-ml-solutions", icon: BrainCircuit, title: "AI/ML Solutions", description: "Practical AI, machine learning, intelligent search, and data workflows that improve decisions and operations." },
  { slug: "cybersecurity", icon: ShieldCheck, title: "Cybersecurity", description: "Security assessments, application hardening, monitoring guidance, and protection for critical digital systems." },
  { slug: "seo-digital-marketing", icon: Search, title: "SEO & Digital Marketing", description: "Technical SEO, content structure, analytics, and focused digital campaigns that improve visibility and qualified reach." },
  { slug: "graphic-design-branding", icon: Palette, title: "Graphic Design & Branding", description: "Professional identity systems, brand guidelines, and creative assets that make a business clear and memorable." },
  { slug: "custom-software-development", icon: Braces, title: "Custom Software Development", description: "Purpose-built platforms, portals, and internal tools that streamline complex operational workflows." },
  { slug: "saas-development", icon: AppWindow, title: "SaaS Development", description: "Scalable software products planned, designed, developed, tested, and prepared for sustainable market growth." },
  { slug: "software-testing", icon: Bug, title: "Software Testing", description: "Structured functional, compatibility, usability, and regression testing that improves release confidence." },
  { slug: "cloud-solutions", icon: Cloud, title: "Cloud Solutions", description: "Secure cloud architecture, deployment, storage, backups, monitoring, and infrastructure optimization." },
  { slug: "business-automation", icon: Zap, title: "Business Automation", description: "Connected workflows, approvals, notifications, integrations, and tools that reduce repetitive manual work." },
  { slug: "chatbot-development", icon: Megaphone, title: "Chatbot Development", description: "Useful customer and internal chatbots with knowledge integration, safeguards, analytics, and human handoff." },
  { slug: "it-consulting", icon: Headphones, title: "IT Consulting", description: "Clear technical guidance across strategy, architecture, cloud, security, automation, and digital transformation." },
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
  { number: "01", title: "AJL Tour", url: "https://ajltour.com/", image: "/images/projects/ajl-tour.webp", category: "Private Switzerland Tours Website", tags: ["Web development", "UX design"], description: "A clear, responsive website presenting private Switzerland tour options and enquiry paths for prospective travelers.", theme: "blue" },
  { number: "02", title: "AJL Transfer", url: "https://www.ajltransfer.com/", image: "/images/projects/ajl-transfer.webp", category: "Private Airport Transfer & Chauffeur Website", tags: ["Web development", "UX design"], description: "A professional website presenting airport transfer and chauffeur services with clear service and booking information.", theme: "slate" },
  { number: "03", title: "Everhide Global", url: "https://everhideglobal.com/", image: "/images/projects/everhide-global.webp", category: "Professional Business Website", tags: ["Web development", "Brand design"], description: "A modern business website designed to present the organization, its capabilities, and direct contact paths.", theme: "steel" },
] as const;

export const pricing = [
  { name: "Landing Page", description: "For startups, personal brands, and small businesses that need a focused one-page website to present an offer or collect leads.", price: "From $299", cta: "Start Landing Page", popular: false, features: ["1-page responsive website", "Modern section layout", "Contact / lead form", "Basic SEO setup", "Mobile optimization", "Fast deployment"] },
  { name: "Starter Website", description: "For small businesses that need a clean and credible online presence.", price: "From $499", cta: "Start Project", popular: false, features: ["1–3 page website", "Responsive design", "Basic SEO setup", "Contact form", "Speed optimization", "Mobile-friendly layout", "Deployment support"] },
  { name: "Business Website", description: "For businesses that need a stronger website with multiple pages, service sections, and better structure.", price: "From $899", cta: "Choose Business", popular: false, features: ["4–6 page website", "Custom UI design", "Service sections/pages", "SEO-ready structure", "Contact / lead capture form", "Performance optimization", "Basic analytics setup", "Deployment support"] },
  { name: "Growth Website", description: "For businesses ready to use their website as a proper growth and lead-generation channel.", price: "From $1.5k", cta: "Choose Growth", popular: true, features: ["6–10 page website", "Custom design system", "Next.js or modern web development", "SEO-ready architecture", "Conversion-focused sections", "Blog/CMS-ready structure", "Performance optimization", "Purposeful animations", "Lead capture setup"] },
  { name: "Premium Digital Experience", description: "For companies that need advanced visuals, 3D animation, integrations, dashboards, or a more unique digital presence.", price: "From $2.5k", cta: "Request Proposal", popular: false, features: ["Custom multi-page website", "Interactive 3D visuals", "Advanced animations", "CMS integration", "API integrations", "Full technical SEO setup", "Conversion-focused structure", "Priority support"] },
  { name: "SEO & Digital Growth", description: "For businesses that want better search visibility, content structure, and long-term digital growth.", price: "From $250/mo", cta: "Start SEO Growth", popular: false, features: ["Technical SEO audit", "Keyword research", "On-page SEO", "Metadata optimization", "Google Search Console setup", "Content recommendations", "Monthly reporting", "Website improvement plan"] },
  { name: "Branding Kit", description: "For startups and businesses that need a clean visual identity before launching online.", price: "From $199", cta: "Build My Brand", popular: false, features: ["Logo refinement or basic logo concept", "Brand colors", "Typography selection", "Social media profile assets", "Basic brand guide", "Business card or cover design"] },
  { name: "Custom Software / App", description: "For apps, SaaS platforms, dashboards, automation systems, portals, and custom business tools.", price: "Custom Quote", cta: "Discuss Project", popular: false, features: ["Requirement analysis", "UI/UX planning", "Web app or mobile app development", "Admin dashboard", "Database integration", "API integration", "Testing and deployment", "Ongoing support options"] },
] as const;

export const faqs = [
  ["What services does Vireonix provide?", "Vireonix provides web development, app development, AI/ML, cybersecurity, SEO and digital marketing, graphic design and branding, SaaS and custom software development, software testing, cloud solutions, business automation, chatbot development, and IT consulting."],
  ["Does Vireonix build websites and mobile apps?", "Yes. Vireonix builds responsive websites, web platforms, mobile applications, and cross-platform products based on each organization’s goals and requirements."],
  ["Does Vireonix provide AI/ML solutions?", "Yes. We develop practical AI and machine learning solutions for intelligent search, knowledge tools, workflow assistance, data analysis, automation, and product features."],
  ["Does Vireonix offer cybersecurity services?", "Yes. Our cybersecurity work can include risk assessments, application and infrastructure hardening, access and backup guidance, security-focused development, and remediation support."],
  ["Can Vireonix help with SEO and digital marketing?", "Yes. Vireonix supports technical SEO, site and content structure, analytics, search visibility, and focused digital marketing campaigns without guaranteeing specific rankings or results."],
  ["Where is Vireonix based?", "Vireonix operates from Zurich, Switzerland, and provides IT and digital solutions to clients internationally."],
  ["How can I request a quote?", "Use the contact form or email contact@vireonix.dev with your goals, requirements, preferred timeline, and available budget. We will respond with practical next steps."],
] as const;
