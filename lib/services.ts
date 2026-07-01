export interface ServiceDetail {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  summary: string;
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
    provides: ["Responsive business websites and landing pages", "Custom React and Next.js development", "CMS, API, and third-party integrations", "Performance, accessibility, and technical SEO foundations"],
    benefits: ["A credible experience on desktop and mobile", "Faster loading and easier content discovery", "Maintainable code ready for future features", "Clear paths from visitor interest to enquiry"],
  },
  {
    slug: "app-development",
    name: "App Development",
    title: "App Development Services",
    metaDescription: "Vireonix builds practical mobile and cross-platform applications with user-focused interfaces, reliable integrations, and scalable technical foundations.",
    summary: "We turn product requirements into intuitive mobile and cross-platform applications, connecting product strategy, interface design, engineering, testing, and launch support.",
    provides: ["Product discovery and technical planning", "Mobile and cross-platform app development", "Backend services and API integration", "Testing, release preparation, and maintenance"],
    benefits: ["A focused product shaped around real users", "Consistent experiences across supported devices", "Secure, scalable application architecture", "A clearer route from concept to launch"],
  },
  {
    slug: "ai-ml-solutions",
    name: "AI/ML Solutions",
    title: "AI & Machine Learning Solutions",
    metaDescription: "Vireonix develops practical AI and machine learning solutions for automation, data analysis, intelligent applications, and better business decisions.",
    summary: "Vireonix helps organizations apply AI and machine learning where it creates practical value, from workflow assistance and knowledge tools to predictive models and intelligent product features.",
    provides: ["AI opportunity assessment and solution design", "Custom machine learning and data workflows", "Retrieval, classification, and intelligent search", "Model integration, evaluation, and monitoring"],
    benefits: ["Less repetitive manual work", "Faster access to useful business knowledge", "More consistent data-supported decisions", "AI capabilities aligned with clear operational goals"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    title: "Cybersecurity Services",
    metaDescription: "Vireonix provides cybersecurity assessments, application hardening, monitoring guidance, and practical protection for modern digital systems.",
    summary: "We help businesses identify risk, strengthen applications and infrastructure, and build practical security controls into day-to-day technology operations.",
    provides: ["Security reviews and risk assessments", "Web application and infrastructure hardening", "Access, backup, and monitoring recommendations", "Security-focused development and remediation support"],
    benefits: ["Earlier visibility into meaningful risks", "Stronger protection for systems and information", "Clearer priorities for security investment", "More resilient digital operations"],
  },
  {
    slug: "seo-digital-marketing",
    name: "SEO & Digital Marketing",
    title: "SEO & Digital Marketing Services",
    metaDescription: "Vireonix improves search visibility and digital reach through technical SEO, content structure, analytics, and focused digital marketing strategy.",
    summary: "Vireonix connects technical SEO, useful content, measurement, and digital campaigns to help the right audience discover and understand your business.",
    provides: ["Technical and on-page SEO audits", "Search-focused site and content structure", "Analytics and conversion measurement", "Digital campaign planning and optimization"],
    benefits: ["Improved crawlability and search visibility", "Content aligned with genuine customer questions", "Better understanding of channel performance", "More qualified paths into your website"],
  },
  {
    slug: "graphic-design-branding",
    name: "Graphic Design & Branding",
    title: "Graphic Design & Branding Services",
    metaDescription: "Vireonix creates clear brand identities, visual systems, and digital design assets that help businesses communicate consistently and professionally.",
    summary: "We shape coherent visual identities and practical design systems that make businesses easier to recognize, understand, and trust across digital touchpoints.",
    provides: ["Brand positioning and visual direction", "Logo and identity system design", "Digital marketing and presentation assets", "Reusable brand guidelines and design systems"],
    benefits: ["A more distinctive and credible presence", "Consistent communication across channels", "Reusable assets that support internal teams", "Design choices connected to business positioning"],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    title: "Custom Software Development",
    metaDescription: "Vireonix builds secure custom software for unique workflows, integrations, customer experiences, and operational requirements.",
    summary: "Vireonix designs purpose-built software around the way your organization actually works, replacing disconnected tools and manual processes with maintainable digital systems.",
    provides: ["Requirements discovery and solution architecture", "Custom platforms, portals, and internal tools", "API, database, and system integrations", "Quality assurance, deployment, and support"],
    benefits: ["Software fitted to real operational needs", "Reduced duplication and manual handling", "Better visibility across connected workflows", "A scalable foundation owned around your priorities"],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    title: "SaaS Development Services",
    metaDescription: "Vireonix designs and develops scalable SaaS products, from product planning and UX through secure engineering, testing, and launch.",
    summary: "We help founders and businesses plan, build, and improve software-as-a-service products with a clear product scope, usable experience, and scalable technical foundation.",
    provides: ["MVP planning and product architecture", "Account, subscription, and role-based experiences", "Scalable frontend and backend development", "Testing, deployment, and product iteration"],
    benefits: ["Faster validation of the right product scope", "A consistent experience for users and teams", "Architecture prepared for measured growth", "A practical roadmap beyond the first release"],
  },
  {
    slug: "software-testing",
    name: "Software Testing",
    title: "Software Testing & Quality Assurance",
    metaDescription: "Vireonix provides software testing and quality assurance for websites, apps, and platforms, covering functionality, usability, compatibility, and reliability.",
    summary: "Vireonix applies structured testing to websites, applications, and software releases so teams can find issues earlier and launch with greater confidence.",
    provides: ["Functional and regression testing", "Responsive, browser, and device checks", "Usability and accessibility review", "Test planning, defect reporting, and release verification"],
    benefits: ["Fewer avoidable production issues", "More consistent experiences across devices", "Clear defect evidence and priorities", "Greater confidence before important releases"],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    title: "Cloud Solutions & Infrastructure",
    metaDescription: "Vireonix helps businesses plan, deploy, and improve secure cloud infrastructure for websites, applications, data, and modern operations.",
    summary: "We help businesses use cloud infrastructure deliberately, with hosting, deployment, storage, observability, resilience, and cost considerations built into the solution.",
    provides: ["Cloud architecture and hosting guidance", "Deployment pipelines and environment setup", "Storage, backups, and reliability planning", "Monitoring, performance, and cost optimization"],
    benefits: ["Infrastructure aligned with actual demand", "More reliable and repeatable deployments", "Clearer operational visibility", "A stronger path for future scale"],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    title: "Business Automation Solutions",
    metaDescription: "Vireonix automates repetitive business workflows by connecting systems, data, approvals, notifications, and custom software.",
    summary: "Vireonix maps repetitive workflows and connects the right tools, integrations, and custom logic to reduce manual effort without losing essential oversight.",
    provides: ["Workflow discovery and automation planning", "System, API, and data integrations", "Approval, notification, and reporting workflows", "Custom dashboards and operational tools"],
    benefits: ["Less repetitive administration", "More consistent processes and handoffs", "Faster access to operational information", "More time for higher-value work"],
  },
  {
    slug: "chatbot-development",
    name: "Chatbot Development",
    title: "Chatbot Development Services",
    metaDescription: "Vireonix develops useful website and business chatbots for customer support, lead qualification, internal knowledge, and workflow assistance.",
    summary: "We build focused conversational tools that help customers or internal teams find information, complete useful tasks, and reach a person when automation is not enough.",
    provides: ["Chatbot strategy and conversation design", "Knowledge-base and AI assistant integration", "Website, support, and workflow connections", "Evaluation, guardrails, analytics, and improvement"],
    benefits: ["Faster answers to common questions", "More consistent initial support", "Better routing of qualified enquiries", "Useful automation with clear human handoff"],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    title: "IT Consulting Services",
    metaDescription: "Vireonix provides practical IT consulting for digital strategy, software architecture, cloud, security, automation, and technology decisions.",
    summary: "Vireonix gives leaders clear, independent technical guidance when they need to choose systems, modernize operations, reduce risk, or plan a digital initiative.",
    provides: ["Technology strategy and roadmap development", "Architecture and vendor assessment", "Cloud, security, and automation guidance", "Delivery planning and technical oversight"],
    benefits: ["Decisions connected to business priorities", "Earlier visibility into cost and technical risk", "A clearer roadmap for teams and partners", "Practical expertise without unnecessary complexity"],
  },
] as const;

export const serviceSlugs = serviceDetails.map((service) => service.slug);

export function getService(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
