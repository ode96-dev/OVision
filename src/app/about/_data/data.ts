export interface Tenet {
  title: string;
  body: string;
}

export interface Hub {
  region: string;
  city: string;
  detail: string;
}

export const TENETS: Tenet[] = [
  {
    title: "Anti-Slop Discipline",
    body: "No generic cookie-cutter templates. Every typography choice, spacing rhythm, and animation curve is purposefully crafted for your domain.",
  },
  {
    title: "Strict Reliability",
    body: "Deterministic tests and rigorous type invariants ensure zero regressions during ongoing feature evolutions.",
  },
  {
    title: "Senior Team Direct",
    body: "You interact directly with the systems architects who write the code, ensuring instant feedback loops and transparent communication.",
  },
  {
    title: "Long-Term Sovereignty",
    body: "Zero vendor lock-in. Full repository ownership, clean documentation, and painless handoffs to internal technical teams.",
  },
];

export const HUBS: Hub[] = [
  {
    region: "North America Hub",
    city: "Syracuse, Connecticut",
    detail: "Global Headquarters & Systems Lab",
  },
  {
    region: "European Hub",
    city: "Zurich, Switzerland",
    detail: "Creative Engineering & WebGL Studio",
  },
  {
    region: "Asia-Pacific Hub",
    city: "Tokyo, Japan",
    detail: "Mobile & IoT Hardware Integration",
  },
];

export const METRICS = [
  { value: "2009", label: "Founding Year", tone: "text-[#0B2818]" },
  { value: "+11,000", label: "Clients Worldwide", tone: "text-[#0084FF]" },
  {
    value: "48",
    label: "Senior Engineers & Designers",
    tone: "text-[#0B2818]",
  },
  { value: "98.4%", label: "Client Retention", tone: "text-[#0D3B24]" },
];

export const LOCATIONS = ["Syracuse, CT", "Zurich", "Tokyo"];

export const CLIENTS = [
  "amazon",
  "AMD",
  "CISCO",
  "dropcam",
  "logitech",
  "Spotify",
];
