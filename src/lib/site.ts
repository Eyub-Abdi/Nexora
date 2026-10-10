/**
 * Central site configuration.
 *
 * Contact details and social profiles are intentionally driven by environment
 * variables so that nothing unverified is published. Set them in `.env.local`
 * (see `.env.example`) once the real company details are confirmed.
 */
export const site = {
  name: "Nexora",
  legalName: "Nexora AI & Software Technologies Ltd.",
  tagline: "Intelligence. Engineered for a Circular Future.",
  title: "Nexora | AI & Software Technologies",
  description:
    "Nexora AI & Software Technologies Ltd. builds intelligent software, digital platforms, and technology solutions from Zanzibar, Tanzania, with a vision for Africa and beyond.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  location: "Zanzibar, Tanzania",
  social: [
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "" },
    { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL ?? "" },
    { label: "X", href: process.env.NEXT_PUBLIC_X_URL ?? "" },
  ].filter((s) => s.href),
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Product", href: "#product" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
