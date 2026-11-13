export interface ProjectItem {
  id: string;
  indexStr: string;
  title: string;
  category: "all" | "web" | "mobile" | "ecommerce" | "branding";
  description: string;
  image: string;
  client: string;
  year: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  indexStr: string;
  name: string;
  role: string;
  quoteTitle: string;
  quoteBody: string;
  rating: number;
}

export function formatCounter(index: number, total: number): string {
  const paddedIndex = String(index + 1).padStart(2, "0");
  const paddedTotal = String(total).padStart(2, "0");
  return `${paddedIndex} / (${paddedTotal})`;
}

export function getNextIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current + 1) % total;
}

export function getPrevIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current - 1 + total) % total;
}

export function filterProjects(
  category: string,
  projects: ProjectItem[],
): ProjectItem[] {
  if (!category || category === "all") return projects;
  return projects.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function calculateTiltTransform(
  relativeX: number,
  relativeY: number,
  maxTiltDeg = 15,
): { rotateX: number; rotateY: number } {
  const normalizedX = (relativeX - 0.5) * 2;
  const normalizedY = (relativeY - 0.5) * 2;

  const rotateX = -normalizedY * maxTiltDeg;
  const rotateY = normalizedX * maxTiltDeg;

  const rx = Math.round(rotateX * 100) / 100;
  const ry = Math.round(rotateY * 100) / 100;

  return {
    rotateX: Object.is(rx, -0) ? 0 : rx,
    rotateY: Object.is(ry, -0) ? 0 : ry,
  };
}
