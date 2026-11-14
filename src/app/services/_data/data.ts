import { Layers, LucideIcon, ShieldCheck, Sparkles, Zap } from "lucide-react";

export interface Pillar {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const HERO_FACTS = ["Since 2009", "+11K Global Clients", "99.99% SLA"];

export const PILLARS: Pillar[] = [
  {
    icon: Zap,
    title: "Sub-Second Speed",
    body: "Optimized server-rendered Next.js components with zero layout shift (CLS = 0).",
  },
  {
    icon: ShieldCheck,
    title: "Security Hardened",
    body: "End-to-end encryption, automated OWASP scans, and strict token management.",
  },
  {
    icon: Layers,
    title: "Modular Systems",
    body: "Component-driven architecture allowing non-breaking feature extensions at scale.",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Rigor",
    body: "Bespoke fluid typography, micro-interactions, and high-frequency 60 FPS physics.",
  },
];

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  badge: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudyId: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web & Cloud Architecture",
    subtitle:
      "High-performance distributed web applications built for modern enterprise scale.",
    description:
      "We architect and engineer resilient, blazing-fast web platforms using Next.js 15+, TypeScript, and modern cloud infrastructure. Our systems handle high concurrency with zero layout shifts and sub-second interaction latencies.",
    heroImage: "/images/services_team.jpg",
    badge: "Core Competency",
    deliverables: [
      "Custom Full-Stack Next.js 15+ App Router Development",
      "Event-Driven Microservices & REST/GraphQL API Design",
      "Real-Time WebSockets & Interactive Telemetry Pipelines",
      "Multi-Region Cloud Deployments on AWS, GCP & Vercel",
      "Rigorous Unit & Integration Test Automation",
      "WCAG 2.1 AA Accessibility & Security Hardening",
    ],
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Avg TTFB Latency", value: "< 80ms" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Load Concurrency", value: "50k+ req/s" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Architectural Discovery",
        description:
          "Mapping system bounds, data schemas, security perimeters, and infrastructure budgets.",
      },
      {
        step: "02",
        title: "Iterative Sprint Build",
        description:
          "Bi-weekly staged milestones with continuous automated deployment to isolated preview sandboxes.",
      },
      {
        step: "03",
        title: "Stress & Chaos Testing",
        description:
          "Rigorous load testing, synthetic latency injection, and security vulnerability auditing.",
      },
      {
        step: "04",
        title: "Zero-Downtime Rollout",
        description:
          "Canary deployments, blue-green cutovers, and 24/7 automated telemetry observability.",
      },
    ],
    faqs: [
      {
        question:
          "How do you ensure zero-downtime during major system upgrades?",
        answer:
          "We utilize blue-green cloud deployments and database migration rollback strategies paired with health-checked canary routing.",
      },
      {
        question:
          "Do you build bespoke CMS integrations or headless solutions?",
        answer:
          "Yes, we specialize in headless architectures integrating Sanity, Strapi, Contentful, or custom PostgreSQL-backed dashboards.",
      },
    ],
    relatedCaseStudyId: "proj-2",
  },
  {
    slug: "ecommerce",
    title: "Headless eCommerce",
    subtitle:
      "Bespoke commerce flagships designed to maximize conversion, retention, and brand prestige.",
    description:
      "We turn online retail into an immersive editorial experience. By decoupling frontend storefronts from commerce engines like Shopify Plus, we unlock bespoke 3D product visualizers, instant page loads, and frictionless checkout flows.",
    heroImage: "/images/showcase_cosmetics.jpg",
    badge: "Retail Innovation",
    deliverables: [
      "Headless Shopify Plus & MedusaJS Custom Storefronts",
      "Interactive 3D WebGL Product Customizers & Viewers",
      "Global Multi-Currency & Multi-Language Orchestration",
      "Sub-Second Checkout Flow Optimization & Apple Pay Integration",
      "ERP & Omnichannel Inventory Synchronization",
      "Custom Klaviyo & Segment Automated Loyalty Pipelines",
    ],
    techStack: [
      "Shopify Storefront API",
      "Next.js",
      "Three.js",
      "Tailwind CSS",
      "Stripe",
      "Algolia",
    ],
    metrics: [
      { label: "Conversion Lift", value: "+42%" },
      { label: "Page Load Speed", value: "0.6s" },
      { label: "Cart Abandonment Drop", value: "-28%" },
      { label: "Mobile Revenue Growth", value: "+65%" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Brand & UX Strategy",
        description:
          "User journey mapping, merchandising hierarchy, and brand elevation.",
      },
      {
        step: "02",
        title: "Headless Storefront Engineering",
        description:
          "Developing high-performance UI components with server-rendered product catalogs.",
      },
      {
        step: "03",
        title: "Payment & Logistics Integration",
        description:
          "End-to-end testing of payment gateways, tax calculation engines, and fulfillment webhooks.",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        description:
          "A/B testing, CDN asset acceleration, and global edge cache configuration.",
      },
    ],
    faqs: [
      {
        question: "Why choose headless over standard Shopify themes?",
        answer:
          "Headless unlocks complete creative freedom, sub-second page transitions, and bespoke 3D interactive product configurators impossible with templated themes.",
      },
      {
        question: "Can we retain our existing inventory and ERP systems?",
        answer:
          "Yes, our custom middleware synchronizes seamlessly with NetSuite, SAP, Brightpearl, and custom legacy warehouses.",
      },
    ],
    relatedCaseStudyId: "proj-1",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Engineering",
    subtitle:
      "Native and cross-platform mobile ecosystems that captivate and retain users.",
    description:
      "We craft iOS and Android applications with silky-smooth 120 FPS gestures, robust offline capabilities, and secure biometric authentication. From fintech wallets to IoT logistics, our mobile software is built for durability.",
    heroImage: "/images/globe.jpg",
    badge: "Mobile First",
    deliverables: [
      "React Native & Flutter Cross-Platform Mobile Applications",
      "Swift iOS & Kotlin Android Native Module Integration",
      "Offline-First Data Sync with WatermelonDB / SQLite",
      "Hardware & BLE Sensor Connectivity for IoT Devices",
      "Biometric Security & Encrypted Keychain Storage",
      "App Store & Google Play Automated CI/CD Pipelines",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Swift",
      "Kotlin",
      "Firebase",
      "GraphQL",
      "Fastlane",
    ],
    metrics: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Crash-Free Rate", value: "99.98%" },
      { label: "Offline Availability", value: "100%" },
      { label: "App Store Rating", value: "4.9 ★" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Touch & Ergonomics Prototyping",
        description:
          "Thumb-zone optimization, haptic feedback maps, and fluid gesture wireframes.",
      },
      {
        step: "02",
        title: "Modular Client Development",
        description:
          "Strict TypeScript architecture with componentized design system tokens.",
      },
      {
        step: "03",
        title: "Device Matrix QA",
        description:
          "Testing across 40+ physical iOS and Android device form-factors and operating systems.",
      },
      {
        step: "04",
        title: "Submission & Review Expediting",
        description:
          "Full handling of App Store guidelines, privacy manifests, and staged deployment rings.",
      },
    ],
    faqs: [
      {
        question: "Do you support single-codebase cross-platform deployment?",
        answer:
          "Yes, our React Native and Flutter architectures share up to 95% of business logic while maintaining true native UI rendering and performance.",
      },
      {
        question: "How do you handle offline functionality?",
        answer:
          "We implement client-side SQLite/WatermelonDB caches that queue mutations locally and reconcile state conflict-free when connectivity returns.",
      },
    ],
    relatedCaseStudyId: "proj-3",
  },
  {
    slug: "seo-optimization",
    title: "SEO & Performance Tuning",
    subtitle:
      "Data-driven technical SEO, Core Web Vitals optimization, and organic market dominance.",
    description:
      "Visibility is engineered, not guessed. We conduct deep code-level optimizations to achieve perfect Google Core Web Vitals, implement structured Schema.org knowledge graphs, and build programmatic content architectures that dominate competitive organic search verticals.",
    heroImage: "/images/team_meeting.jpg",
    badge: "Growth Engine",
    deliverables: [
      "Core Web Vitals Optimization (LCP, INP, CLS)",
      "Rich JSON-LD Structured Data & Semantic Microdata",
      "Server-Side Rendering (SSR) & Dynamic OpenGraph Generator",
      "Programmatic Content Generation & Landing Hubs",
      "Comprehensive Technical Site Audits & Penalty Recovery",
      "Real-Time Search Console & Telemetry Dashboards",
    ],
    techStack: [
      "Next.js SSR",
      "Schema.org",
      "Google Search Console",
      "Lighthouse CI",
      "Edge SEO",
    ],
    metrics: [
      { label: "Organic Traffic Lift", value: "+185%" },
      { label: "Core Web Vitals", value: "100% Pass" },
      { label: "Google Index Speed", value: "< 2 Hours" },
      { label: "Top 3 Keyword Ranks", value: "+340" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Technical Crawl & Audit",
        description:
          "Deep audit of JavaScript hydration overhead, crawl budget waste, and indexation bottlenecks.",
      },
      {
        step: "02",
        title: "Code-Level Remediation",
        description:
          "Refactoring render paths, critical CSS inline injection, and Next.js image optimization.",
      },
      {
        step: "03",
        title: "Knowledge Graph Construction",
        description:
          "Implementing rich Schema.org entities for organizations, products, reviews, and breadcrumbs.",
      },
      {
        step: "04",
        title: "Monitoring & Continuous Guardrails",
        description:
          "Integrating Lighthouse CI in pull requests to catch performance regressions before production.",
      },
    ],
    faqs: [
      {
        question: "How quickly can we see Core Web Vitals improvements?",
        answer:
          "Code-level fixes reflect immediately upon production deployment, with Google Search Console field data verifying the score pass within 28 days.",
      },
      {
        question: "Does this cover international and multilingual SEO?",
        answer:
          "Yes, we handle complete hreflang tagging, localized URL hierarchies, and geo-targeted edge routing.",
      },
    ],
    relatedCaseStudyId: "proj-4",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  if (!slug) return undefined;
  return SERVICES_DATA.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllServices(): ServiceDetail[] {
  return SERVICES_DATA;
}
