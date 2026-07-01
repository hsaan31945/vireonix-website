export interface ServiceDetail {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  summary: string;
  approach: string;
  useCases: readonly string[];
  provides: readonly string[];
  benefits: readonly string[];
}

export const serviceDetails: readonly ServiceDetail[] = [
  {
    slug: "web-development",
    name: "Web Development",
    title: "Web Development Services",
    metaDescription: "Vireonix provides modern web development services for businesses, startups, and organizations, including responsive websites, landing pages, and scalable web solutions.",
    summary: "Vireonix designs and develops fast, accessible websites that communicate clearly, work across devices, and create a dependable foundation for search visibility and business growth.",
    approach: "Our web development work starts with the audience, content, and actions the website must support. We then plan the page structure, user journeys, responsive interface, technical architecture, analytics, accessibility, and search foundations before launch.",
    useCases: ["Business and professional service websites", "Campaign and product landing pages", "Content-managed marketing websites", "Customer portals and web platforms"],
    provides: ["Responsive business websites and landing pages", "Custom React and Next.js development", "CMS, API, and third-party integrations", "Performance, accessibility, and technical SEO foundations"],
    benefits: ["A credible experience on desktop and mobile", "Faster loading and easier content discovery", "Maintainable code ready for future features", "Clear paths from visitor interest to enquiry"],
  },
  {
    slug: "app-development",
    name: "App Development",
    title: "App Development Services",
    metaDescription: "Vireonix builds practical mobile and cross-platform applications with user-focused interfaces, reliable integrations, and scalable technical foundations.",
    summary: "We turn product requirements into intuitive mobile and cross-platform applications, connecting product strategy, interface design, engineering, testing, and launch support.",
    approach: "We define the app’s users, core tasks, supported devices, integrations, offline needs, security requirements, and release path before choosing an implementation approach. This keeps the first version focused while leaving room for responsible iteration.",
    useCases: ["Customer-facing mobile applications", "Cross-platform business apps", "Internal field and operations tools", "Apps connected to existing APIs and systems"],
    provides: ["Product discovery and technical planning", "Mobile and cross-platform app development", "Backend services and API integration", "Testing, release preparation, and maintenance"],
    benefits: ["A focused product shaped around real users", "Consistent experiences across supported devices", "Secure, scalable application architecture", "A clearer route from concept to launch"],
  },
  {
    slug: "ai-ml-solutions",
    name: "AI/ML Solutions",
    title: "AI & Machine Learning Solutions",
    metaDescription: "Vireonix develops practical AI and machine learning solutions for automation, data analysis, intelligent applications, and better business decisions.",
    summary: "Vireonix helps organizations apply AI and machine learning where it creates practical value, from workflow assistance and knowledge tools to predictive models and intelligent product features.",
    approach: "We begin by testing whether AI is appropriate for the problem, what data is available, how output quality can be evaluated, and where human review is required. The solution is designed around useful performance, safeguards, privacy, and measurable operational value.",
    useCases: ["Knowledge assistants and intelligent search", "Document classification and extraction", "Forecasting and decision-support workflows", "AI features inside existing products"],
    provides: ["AI opportunity assessment and solution design", "Custom machine learning and data workflows", "Retrieval, classification, and intelligent search", "Model integration, evaluation, and monitoring"],
    benefits: ["Less repetitive manual work", "Faster access to useful business knowledge", "More consistent data-supported decisions", "AI capabilities aligned with clear operational goals"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    title: "Cybersecurity Services",
    metaDescription: "Vireonix provides cybersecurity assessments, application hardening, monitoring guidance, and practical protection for modern digital systems.",
    summary: "We help businesses identify risk, strengthen applications and infrastructure, and build practical security controls into day-to-day technology operations.",
    approach: "Cybersecurity work is scoped around assets, users, access paths, likely threats, current controls, and business impact. Findings are prioritized by practical risk, with clear remediation guidance rather than fear-based claims or impossible guarantees.",
    useCases: ["Website and web application security reviews", "Access-control and account hardening", "Cloud configuration and backup reviews", "Security remediation planning"],
    provides: ["Security reviews and risk assessments", "Web application and infrastructure hardening", "Access, backup, and monitoring recommendations", "Security-focused development and remediation support"],
    benefits: ["Earlier visibility into meaningful risks", "Stronger protection for systems and information", "Clearer priorities for security investment", "More resilient digital operations"],
  },
  {
    slug: "seo-digital-marketing",
    name: "SEO & Digital Marketing",
    title: "SEO & Digital Marketing Services",
    metaDescription: "Vireonix improves search visibility and digital reach through technical SEO, content structure, analytics, and focused digital marketing strategy.",
    summary: "Vireonix connects technical SEO, useful content, measurement, and digital campaigns to help the right audience discover and understand your business.",
    approach: "We separate technical obstacles from content and authority gaps, then prioritize changes that help people and search engines understand the site. Recommendations are based on evidence from the website, search data, competitors, and business goals—without guaranteeing rankings, traffic, leads, or revenue.",
    useCases: ["Technical SEO and indexing audits", "Service-page and content architecture", "Google Search Console and analytics setup", "Ongoing content and website improvement plans"],
    provides: ["Technical and on-page SEO audits", "Search-focused site and content structure", "Analytics and conversion measurement", "Digital campaign planning and optimization"],
    benefits: ["Improved crawlability and search visibility", "Content aligned with genuine customer questions", "Better understanding of channel performance", "More qualified paths into your website"],
  },
  {
    slug: "graphic-design-branding",
    name: "Graphic Design & Branding",
    title: "Graphic Design & Branding Services",
    metaDescription: "Vireonix creates clear brand identities, visual systems, and digital design assets that help businesses communicate consistently and professionally.",
    summary: "We shape coherent visual identities and practical design systems that make businesses easier to recognize, understand, and trust across digital touchpoints.",
    approach: "Branding begins with positioning, audience, personality, and the contexts in which the identity must work. We translate that direction into a usable visual system rather than a disconnected collection of attractive files.",
    useCases: ["Startup identity and launch kits", "Brand refreshes for established businesses", "Digital campaign and social assets", "Visual systems for websites and products"],
    provides: ["Brand positioning and visual direction", "Logo and identity system design", "Digital marketing and presentation assets", "Reusable brand guidelines and design systems"],
    benefits: ["A more distinctive and credible presence", "Consistent communication across channels", "Reusable assets that support internal teams", "Design choices connected to business positioning"],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    title: "Custom Software Development",
    metaDescription: "Vireonix builds secure custom software for unique workflows, integrations, customer experiences, and operational requirements.",
    summary: "Vireonix designs purpose-built software around the way your organization actually works, replacing disconnected tools and manual processes with maintainable digital systems.",
    approach: "We map the current workflow, users, permissions, data, exceptions, integrations, and reporting requirements before defining the software architecture. Delivery is divided into testable stages so important assumptions can be validated early.",
    useCases: ["Internal operations and workflow systems", "Customer and partner portals", "Data dashboards and reporting tools", "Software connecting multiple business systems"],
    provides: ["Requirements discovery and solution architecture", "Custom platforms, portals, and internal tools", "API, database, and system integrations", "Quality assurance, deployment, and support"],
    benefits: ["Software fitted to real operational needs", "Reduced duplication and manual handling", "Better visibility across connected workflows", "A scalable foundation owned around your priorities"],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    title: "SaaS Development Services",
    metaDescription: "Vireonix designs and develops scalable SaaS products, from product planning and UX through secure engineering, testing, and launch.",
    summary: "We help founders and businesses plan, build, and improve software-as-a-service products with a clear product scope, usable experience, and scalable technical foundation.",
    approach: "SaaS development starts with the customer problem, product assumptions, account model, roles, billing needs, data boundaries, and essential workflows. We prioritize a coherent first release over an overloaded feature list, then plan iteration around real product learning.",
    useCases: ["New SaaS minimum viable products", "Subscription-based business platforms", "Multi-tenant customer portals", "Modernization of an existing SaaS product"],
    provides: ["MVP planning and product architecture", "Account, subscription, and role-based experiences", "Scalable frontend and backend development", "Testing, deployment, and product iteration"],
    benefits: ["Faster validation of the right product scope", "A consistent experience for users and teams", "Architecture prepared for measured growth", "A practical roadmap beyond the first release"],
  },
  {
    slug: "software-testing",
    name: "Software Testing",
    title: "Software Testing & Quality Assurance",
    metaDescription: "Vireonix provides software testing and quality assurance for websites, apps, and platforms, covering functionality, usability, compatibility, and reliability.",
    summary: "Vireonix applies structured testing to websites, applications, and software releases so teams can find issues earlier and launch with greater confidence.",
    approach: "Testing is planned around critical user journeys, supported environments, known risks, integrations, and release priorities. Defects are reported with reproducible steps, evidence, severity, and context so teams can act efficiently.",
    useCases: ["Pre-launch website and application testing", "Regression testing after major changes", "Browser, device, and responsive verification", "Independent review of critical user journeys"],
    provides: ["Functional and regression testing", "Responsive, browser, and device checks", "Usability and accessibility review", "Test planning, defect reporting, and release verification"],
    benefits: ["Fewer avoidable production issues", "More consistent experiences across devices", "Clear defect evidence and priorities", "Greater confidence before important releases"],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    title: "Cloud Solutions & Infrastructure",
    metaDescription: "Vireonix helps businesses plan, deploy, and improve secure cloud infrastructure for websites, applications, data, and modern operations.",
    summary: "We help businesses use cloud infrastructure deliberately, with hosting, deployment, storage, observability, resilience, and cost considerations built into the solution.",
    approach: "Cloud decisions are based on workload, availability, security, data, operational capability, expected demand, and budget. We favor understandable infrastructure and repeatable deployments over unnecessary complexity.",
    useCases: ["Cloud hosting for websites and applications", "Deployment pipeline and environment setup", "Backup, storage, and recovery planning", "Infrastructure performance and cost reviews"],
    provides: ["Cloud architecture and hosting guidance", "Deployment pipelines and environment setup", "Storage, backups, and reliability planning", "Monitoring, performance, and cost optimization"],
    benefits: ["Infrastructure aligned with actual demand", "More reliable and repeatable deployments", "Clearer operational visibility", "A stronger path for future scale"],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    title: "Business Automation Solutions",
    metaDescription: "Vireonix automates repetitive business workflows by connecting systems, data, approvals, notifications, and custom software.",
    summary: "Vireonix maps repetitive workflows and connects the right tools, integrations, and custom logic to reduce manual effort without losing essential oversight.",
    approach: "We document the current process, volumes, handoffs, exceptions, data sources, approvals, and failure risks before automating it. Human review stays where judgment or accountability matters, while repetitive steps are simplified.",
    useCases: ["Lead and enquiry routing", "Approval and notification workflows", "Data synchronization between systems", "Automated operational reporting"],
    provides: ["Workflow discovery and automation planning", "System, API, and data integrations", "Approval, notification, and reporting workflows", "Custom dashboards and operational tools"],
    benefits: ["Less repetitive administration", "More consistent processes and handoffs", "Faster access to operational information", "More time for higher-value work"],
  },
  {
    slug: "chatbot-development",
    name: "Chatbot Development",
    title: "Chatbot Development Services",
    metaDescription: "Vireonix develops useful website and business chatbots for customer support, lead qualification, internal knowledge, and workflow assistance.",
    summary: "We build focused conversational tools that help customers or internal teams find information, complete useful tasks, and reach a person when automation is not enough.",
    approach: "Chatbot development begins with supported questions, trusted information sources, actions, escalation rules, privacy needs, and failure handling. We test responses against realistic scenarios and make uncertainty visible instead of pretending the system always knows the answer.",
    useCases: ["Website enquiry and service assistants", "Internal knowledge-base chatbots", "Customer-support triage", "Conversational workflow assistants"],
    provides: ["Chatbot strategy and conversation design", "Knowledge-base and AI assistant integration", "Website, support, and workflow connections", "Evaluation, guardrails, analytics, and improvement"],
    benefits: ["Faster answers to common questions", "More consistent initial support", "Better routing of qualified enquiries", "Useful automation with clear human handoff"],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    title: "IT Consulting Services",
    metaDescription: "Vireonix provides practical IT consulting for digital strategy, software architecture, cloud, security, automation, and technology decisions.",
    summary: "Vireonix gives leaders clear, independent technical guidance when they need to choose systems, modernize operations, reduce risk, or plan a digital initiative.",
    approach: "Consulting starts by understanding the decision, constraints, stakeholders, current systems, risks, and available resources. Recommendations explain tradeoffs, priorities, dependencies, and practical next steps rather than prescribing technology for its own sake.",
    useCases: ["Technology strategy and modernization roadmaps", "Software architecture and platform decisions", "Vendor and solution assessments", "Technical planning for digital initiatives"],
    provides: ["Technology strategy and roadmap development", "Architecture and vendor assessment", "Cloud, security, and automation guidance", "Delivery planning and technical oversight"],
    benefits: ["Decisions connected to business priorities", "Earlier visibility into cost and technical risk", "A clearer roadmap for teams and partners", "Practical expertise without unnecessary complexity"],
  },
] as const;

export const serviceSlugs = serviceDetails.map((service) => service.slug);

export function getService(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
