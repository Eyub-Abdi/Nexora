import { brandGradientStops } from "@/lib/brand";

type BrandGradientProps = {
  id: string;
  x1: number | string;
  y1: number | string;
  x2: number | string;
  y2: number | string;
  /** Skip the leading Deep Ocean stop, for use on dark backgrounds. */
  onDark?: boolean;
};

/** SVG `<linearGradient>` carrying the official brand gradient. Place inside `<defs>`. */
export function BrandGradient({ id, onDark = false, ...coords }: BrandGradientProps) {
  const stops = onDark ? brandGradientStops.slice(1) : brandGradientStops;
  const first = stops[0].offset;
  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" {...coords}>
      {stops.map((s) => (
        <stop
          key={s.offset}
          offset={onDark ? (s.offset - first) / (1 - first) : s.offset}
          stopColor={s.color}
        />
      ))}
    </linearGradient>
  );
}
