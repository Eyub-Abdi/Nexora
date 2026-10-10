import {
  BrainCircuit,
  CodeXml,
  Compass,
  Leaf,
  type LucideIcon,
} from "lucide-react";

/** The four service pillars. */
export type Service = {
  pillar: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    pillar: "Intelligence",
    icon: BrainCircuit,
    title: "AI & Intelligent Software",
    description:
      "Practical applications of artificial intelligence and intelligent software to improve workflows, support decisions, and unlock new possibilities.",
  },
  {
    pillar: "Engineering",
    icon: CodeXml,
    title: "Software Engineering",
    description:
      "Custom web applications, mobile experiences, APIs, and business systems designed for reliability, usability, and growth.",
  },
  {
    pillar: "Green Data",
    icon: Leaf,
    title: "Green Data & Intelligence",
    description:
      "Data-driven solutions that help organizations understand operations, make informed decisions, and explore more sustainable approaches.",
  },
  {
    pillar: "Advisory",
    icon: Compass,
    title: "Digital Transformation & Advisory",
    description:
      "Technology strategy, systems integration, process improvement, and practical guidance for organizations navigating digital change.",
  },
];

export type ImpactArea = {
  title: string;
  challenge: string;
  direction: string;
};

export const impactAreas: ImpactArea[] = [
  {
    title: "Digital business platforms",
    challenge: "Many organizations still run on paper, spreadsheets, and disconnected tools.",
    direction: "Platforms that bring operations, customers, and data into one dependable system.",
  },
  {
    title: "Intelligent automation",
    challenge: "Repetitive, manual work slows teams down and introduces avoidable errors.",
    direction: "Automation and AI assistance that free people to focus on judgement and service.",
  },
  {
    title: "Connected information systems",
    challenge: "Information is often trapped in silos that never talk to each other.",
    direction: "Integrations and shared data foundations that give a clear, current picture.",
  },
  {
    title: "Circular economy technology",
    challenge: "Materials and resources are too often used once and discarded.",
    direction: "Tools that make reuse, recovery, and resource tracking practical to manage.",
  },
  {
    title: "Sustainable digital infrastructure",
    challenge: "Digital growth carries real energy, cost, and resilience trade-offs.",
    direction: "Efficient, right-sized systems designed to last and to do more with less.",
  },
  {
    title: "Technology for emerging markets",
    challenge: "Imported solutions rarely fit local connectivity, costs, and context.",
    direction: "Software shaped by local realities: mobile-first, resilient, and accessible.",
  },
];

/**
 * Project showcase entries.
 *
 * `status` makes the maturity of each item explicit:
 *  - "exploring": an area Nexora is researching or building toward
 *  - "prototype": a working prototype exists
 *  - "live": a product or client delivery in production
 *
 * To publish real work, add entries with `status: "prototype" | "live"`,
 * an optional `image` (place files in /public/projects) and an optional `href`
 * pointing to a case study.
 */
export type ProjectStatus = "exploring" | "prototype" | "live";

export type Project = {
  name: string;
  description: string;
  category: string;
  status: ProjectStatus;
  image?: { src: string; alt: string };
  href?: string;
  /** Visual motif used for the generated cover when no image is supplied. */
  motif: "circular" | "network" | "flow";
};

export const projects: Project[] = [
  {
    name: "Circular resource tracking",
    description:
      "Exploring how simple digital tools could help businesses record, trace, and recover materials that would otherwise be wasted.",
    category: "Circular economy",
    status: "exploring",
    motif: "circular",
  },
  {
    name: "Operations intelligence for growing businesses",
    description:
      "Investigating lightweight dashboards and automation that turn everyday operational data into clearer decisions.",
    category: "Data & intelligence",
    status: "exploring",
    motif: "network",
  },
  {
    name: "Connected service platforms",
    description:
      "Researching mobile-first platforms that connect service providers and customers in markets with variable connectivity.",
    category: "Digital platforms",
    status: "exploring",
    motif: "flow",
  },
];
