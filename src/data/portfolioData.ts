export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: 'web' | 'app' | 'ecommerce';
  categoryLabel: string;
  image: string;
  cardBgColor: string;
  cardTextColor?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  client: string;
  year: string;
  linkText: string;
  metrics?: string;
}

export interface Service {
  id: string;
  iconName: 'monitor' | 'link' | 'code';
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  tools: string[];
  typicalTimeline: string;
}

export const PORTFOLIO_INFO = {
  name: "Aldy Azarya",
  role: "Full Stack Developer & UI/UX Designer",
  email: "azarya.dev@gmail.com",
  website: "aldyazarya.dev",
  location: "Jakarta, Indonesia",
  timezone: "WIB (UTC+7)",
  experienceYears: "6+ Years Experience",
  completedProjects: "20+ Projects Completed",
  whatsappNumber: "6281234567890", // clean placeholder international number
  whatsappUrl: "https://wa.me/6281234567890?text=Hi%20Aldy%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!",
  heroDescription: "From intuitive interface design to powerful full-stack development and production-grade builds, I craft user-centered digital products that engage, perform, and ship on time.",
  aboutQuote: "Turning product ideas into interfaces people actually enjoy using.",
  aboutBio: "I'm a full stack developer dedicated to transforming ideas into visually compelling and user-focused experiences. I care about the details most people never notice: loading states that feel calm, forms that forgive mistakes, and layouts that hold up on a cheap Android phone.",
  skills: [
    "App design",
    "User Experience",
    "Web design",
    "Custom Development"
  ],
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Figma",
    "GraphQL",
    "Docker"
  ]
};

export const SERVICES: Service[] = [
  {
    id: "website-design",
    iconName: "monitor",
    title: "Website Design",
    shortDesc: "I build visually striking, user-friendly websites that capture your brand identity and keep your audience engaged from first scroll to conversion.",
    longDesc: "High-performance marketing websites, editorial digital magazines, and corporate web presences built with obsessive attention to typography, responsive layouts, micro-interactions, and conversion optimization.",
    deliverables: [
      "Custom responsive design (Figma & code)",
      "Design systems & component libraries",
      "Interactive prototypes & motion guidelines",
      "Core Web Vitals & speed optimization (95+ score)",
      "Technical SEO & OpenGraph setup"
    ],
    tools: ["Figma", "React", "Tailwind CSS", "Next.js", "Framer Motion"],
    typicalTimeline: "2 – 3 weeks"
  },
  {
    id: "application-design",
    iconName: "link",
    title: "Application Design",
    shortDesc: "Mobile and web app interfaces designed around real user flows, so the product feels intuitive, fast, and worth coming back to.",
    longDesc: "End-to-end user experience and interface design for complex SaaS tools, mobile PWAs, and internal operations dashboards. Focused on reducing cognitive friction and streamlining everyday user tasks.",
    deliverables: [
      "User journey mapping & information architecture",
      "Wireframing & interactive high-fidelity mockups",
      "Design token architecture & dark/light modes",
      "Usability testing & feedback synthesis",
      "Developer handoff documentation"
    ],
    tools: ["Figma", "FigJam", "Miro", "Storybook", "Framer"],
    typicalTimeline: "3 – 5 weeks"
  },
  {
    id: "custom-development",
    iconName: "code",
    title: "Custom Development",
    shortDesc: "From front-end to back-end, I build powerful, scalable digital products using the latest technologies.",
    longDesc: "Full-stack engineering implementing secure REST and GraphQL APIs, reactive client single-page apps, database schemas, real-time sync, and automated cloud deployments with high test coverage.",
    deliverables: [
      "Full-stack architecture & database design",
      "React / Next.js frontends with TypeScript",
      "Express / Node.js backend microservices",
      "Third-party API integrations (Payment, OAuth, CRM)",
      "Production deployment & CI/CD pipeline"
    ],
    tools: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind", "Docker"],
    typicalTimeline: "4 – 8 weeks"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "kassa",
    title: "kassa — offline-first POS",
    shortTitle: "kassa",
    tagline: "High-reliability point of sale system with instantaneous local caching and cloud sync",
    category: "app",
    categoryLabel: "Application & POS",
    image: "/src/assets/images/project_kassa_pos_1793036334776.jpg",
    cardBgColor: "#e8f5e9",
    cardTextColor: "#1b5e20",
    description: "Kassa is an offline-first Point of Sale application engineered for high-volume retail stores and cafes facing intermittent internet connectivity. Designed with rapid touchscreen checkout flows, real-time local IndexedDB persistence, and seamless background replication.",
    highlights: [
      "Offline-first synchronization with zero data loss during network dropouts",
      "Sub-100ms item scan and checkout interactions on budget hardware",
      "Integrated receipt printing, barcode scanning, and multi-tender split payments",
      "Role-based staff permissions and end-of-day register reconciliation"
    ],
    techStack: ["React", "TypeScript", "IndexedDB", "Tailwind CSS", "WebSockets"],
    client: "Retail & Hospitality Brands",
    year: "2024 – 2025",
    linkText: "View Case Study",
    metrics: "99.98% offline uptime across 18 retail locations"
  },
  {
    id: "carepoint",
    title: "CarePoint appointment platform",
    shortTitle: "CarePoint",
    tagline: "Frictionless multi-provider healthcare scheduling & telehealth portal",
    category: "web",
    categoryLabel: "Web Platform & Health",
    image: "/src/assets/images/project_carepoint_1793036335426.jpg",
    cardBgColor: "#1a237e",
    cardTextColor: "#ffffff",
    description: "CarePoint connects specialized medical clinics with patients through an intuitive appointment scheduling system, automated SMS/WhatsApp reminders, and telehealth video consultations.",
    highlights: [
      "Real-time schedule conflict resolution across 30+ doctors simultaneously",
      "Self-service patient booking portal with triage symptom intake questionnaire",
      "Encrypted medical history file attachments and automated prescription delivery",
      "Reduced appointment no-show rates by 38% through contextual reminders"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebRTC"],
    client: "CarePoint Health Network",
    year: "2024",
    linkText: "View Case Study",
    metrics: "38% drop in patient appointment no-shows"
  },
  {
    id: "arokisah",
    title: "arokisah scent storytelling",
    shortTitle: "arokisah",
    tagline: "Sensory editorial e-commerce platform for artisanal perfume fragrances",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Branding",
    image: "/src/assets/images/project_arokisah_1793036336548.jpg",
    cardBgColor: "#fafafa",
    cardTextColor: "#171717",
    description: "Arokisah is an editorial boutique e-commerce destination blending literary storytelling with bespoke scent exploration. The interactive fragrance pyramid visualizer allows fragrance enthusiasts to explore top, heart, and base notes before ordering discovery sample kits.",
    highlights: [
      "Interactive 3D scent pyramid visualizer highlighting olfactory notes",
      "Sensory audio-visual journal entries matching distinct perfume moods",
      "Headless checkout with dynamic currency conversion and regional fulfillment",
      "Artisanal typography and responsive imagery optimized for sub-second page loads"
    ],
    techStack: ["React", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"],
    client: "Arokisah Fragrances",
    year: "2023 – 2024",
    linkText: "View Case Study",
    metrics: "+42% increase in discovery set conversion rates"
  }
];

export const MARQUEE_WORDS = [
  "USABLE",
  "RELIABLE",
  "ACCESSIBLE",
  "INTERACTIVE",
  "CLARITY",
  "CONSISTENCY"
];
