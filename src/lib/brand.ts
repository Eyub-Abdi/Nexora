/**
 * Nexora brand palette for places CSS tokens can't reach: inline SVG
 * artwork, generated images, and data. Values mirror the `@theme` tokens in
 * `src/app/globals.css` (and the static `src/app/icon.svg`); change all
 * three together.
 */
export const brand = {
  ocean: "#0b3654",
  ocean950: "#051c2c",
  digital: "#0b8fe8",
  turquoise: "#18c6c0",
  teal: "#0aa58d",
  green: "#46b85b",
  mist: "#f5f8fa",
  white: "#ffffff",
} as const;

/** Stops of the official gradient: Deep Ocean → Digital Blue → Turquoise → Teal → Green. */
export const brandGradientStops = [
  { offset: 0, color: brand.ocean },
  { offset: 0.3, color: brand.digital },
  { offset: 0.55, color: brand.turquoise },
  { offset: 0.78, color: brand.teal },
  { offset: 1, color: brand.green },
] as const;
