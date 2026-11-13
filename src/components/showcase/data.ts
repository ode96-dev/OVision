import { ProjectItem } from "@/lib/agency-logic";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "aura-skincare",
    indexStr: "01",
    title: "Aura Botanica Clean Cosmetics",
    category: "ecommerce",
    description:
      "Explore our newest feature crafted to enhance your journey! This cutting-edge tool enables you to effortlessly manage your tasks.",
    image: "/images/showcase_cosmetics.jpg",
    client: "Aura Botanica Paris",
    year: "2025",
    tags: ["Headless Next.js", "Shopify Storefront API", "Tailwind CSS"],
  },
  {
    id: "apex-portal",
    indexStr: "02",
    title: "Fintech Enterprise Trading Terminal",
    category: "web",
    description:
      "High-throughput algorithmic trading portal with low-latency WebSockets, real-time depth-of-market order books, and institutional compliance.",
    image: "/images/services_team.jpg",
    client: "Apex Global Capital",
    year: "2025",
    tags: ["Next.js 15", "TypeScript", "WebSockets", "TradingView"],
  },
  {
    id: "cyber-telemetry",
    indexStr: "03",
    title: "Autonomous Fleet Satellite Telemetry",
    category: "mobile",
    description:
      "Global logistics real-time coordination dashboard connecting 14,000 maritime vessels with satellite positioning and route optimization.",
    image: "/images/globe.jpg",
    client: "Orbital Logistics Ltd",
    year: "2024",
    tags: ["Three.js", "GeoJSON", "React Native"],
  },
  {
    id: "modern-studio",
    indexStr: "04",
    title: "Kinetic Architecture Digital Showcase",
    category: "branding",
    description:
      "Interactive 3D spatial portfolio engineered for an award-winning architectural firm with smooth inertial scrolling and WebGL lighting.",
    image: "/images/team_meeting.jpg",
    client: "Studio Foster & Partners",
    year: "2024",
    tags: ["WebGL", "GSAP ScrollTrigger", "GLTF Pipeline"],
  },
  {
    id: "enterprise-workspace",
    indexStr: "05",
    title: "Collaborative Design Engineering Hub",
    category: "web",
    description:
      "Unified design system manager and automated continuous deployment orchestrator built for cross-functional product teams.",
    image: "/images/testimonial_handshake.jpg",
    client: "Nexus Systems International",
    year: "2024",
    tags: ["Next.js App Router", "Framer Motion", "Tailwind"],
  },
];
