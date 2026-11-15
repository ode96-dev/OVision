import { ProjectItem } from "@/lib/agency-logic";

export const FLAGSHIP_STUDY: ProjectItem = {
  id: "flagship-aura",
  indexStr: "01",
  title: "Aura Botanica Clean Cosmetics Flagship",
  category: "ecommerce",
  description:
    "Complete headless eCommerce reimagining for a luxury French organic beauty brand. Features bespoke real-time 3D packaging customizer, instant edge-cached page loads, and multi-currency global checkout.",
  image: "/images/showcase_cosmetics.jpg",
  client: "Aura Botanica Paris",
  year: "2025",
  tags: [
    "Shopify Storefront API",
    "Next.js 15 App Router",
    "Three.js",
    "Tailwind CSS",
    "Stripe",
  ],
};

export const HERO_FACTS = [
  "140+ Projects",
  "15 Awards",
  "100% On-Time Delivery",
];

export const METRICS = [
  { value: "140+", label: "Enterprise Deployments", tone: "text-[#0B2818]" },
  { value: "+42%", label: "Avg. Conversion Lift", tone: "text-[#0084FF]" },
  { value: "0.6s", label: "Global Edge TTFB", tone: "text-[#0B2818]" },
  {
    value: "99.99%",
    label: "Cloud Infrastructure SLA",
    tone: "text-[#0D3B24]",
  },
];

export const OUTCOMES = [
  "+42% conversion rate increase in Q1 post-launch",
  "Average session duration grew from 1m 20s to 4m 15s",
  "Sub-500ms checkout completion across 18 countries",
];

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    indexStr: "01",
    title: "Aura Botanica Clean Cosmetics",
    category: "ecommerce",
    description:
      "Headless digital flagship with immersive 3D packaging previews and sub-second checkout times.",
    image: "/images/showcase_cosmetics.jpg",
    client: "Aura Botanica Paris",
    year: "2025",
    tags: ["Shopify", "Next.js 15", "Three.js"],
  },
  {
    id: "proj-2",
    indexStr: "02",
    title: "Apex Capital Trading Engine",
    category: "web",
    description:
      "Ultra-responsive trading terminal for institutional derivative brokers with real-time streaming.",
    image: "/images/services_team.jpg",
    client: "Apex Global Capital",
    year: "2025",
    tags: ["React 19", "TypeScript", "WebSockets"],
  },
  {
    id: "proj-3",
    indexStr: "03",
    title: "Orbital Fleet Logistics App",
    category: "mobile",
    description:
      "Native cross-platform mobile suite for tracking cargo vessels with offline synchronization.",
    image: "/images/globe.jpg",
    client: "Orbital Global",
    year: "2024",
    tags: ["React Native", "Tailwind", "Telemetry"],
  },
  {
    id: "proj-4",
    indexStr: "04",
    title: "Studio Foster Spatial Portfolio",
    category: "branding",
    description:
      "Luxury architectural monograph with smooth inertial scroll timelines and high-fidelity rendering.",
    image: "/images/team_meeting.jpg",
    client: "Foster & Partners",
    year: "2024",
    tags: ["GSAP", "WebGL", "Framer Motion"],
  },
  {
    id: "proj-5",
    indexStr: "05",
    title: "Executive Trust & Venture Platform",
    category: "web",
    description:
      "Decentralized identity protocol and capital governance portal for global venture syndicates.",
    image: "/images/testimonial_handshake.jpg",
    client: "Venture Syndicate Ltd",
    year: "2024",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
  },
  {
    id: "proj-6",
    indexStr: "06",
    title: "Nordic Minimalist Living Monograph",
    category: "ecommerce",
    description:
      "Editorial furniture atelier with curated spatial rooms and augmented reality placement.",
    image: "/images/about_1.jpg",
    client: "Atelier Oslo",
    year: "2025",
    tags: ["AR Web", "Next.js", "Commerce"],
  },
];
