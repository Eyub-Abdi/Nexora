import { useId } from "react";
import { brand } from "@/lib/brand";
import { BrandGradient } from "./brand-gradient";

type LogoMarkProps = {
  className?: string;
  /** Use light strokes for placement on Deep Ocean backgrounds. */
  inverted?: boolean;
};

/**
 * Interim Nexora mark: an open circular ring (the circular future) around a
 * connected "N" (engineered intelligence). Replace with the official logo
 * artwork when the source file is available.
 */
export function LogoMark({ className, inverted = false }: LogoMarkProps) {
  const id = useId();
  const gradientId = `nexora-ring-${id}`;
  const strokeN = inverted ? brand.white : brand.ocean;

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <BrandGradient id={gradientId} x1="4" y1="36" x2="36" y2="4" onDark={inverted} />
      </defs>
      {/* Open ring: 315° arc leaving a gap at the top right. */}
      <path
        d="M31.4 8.6A16 16 0 1 0 36 20"
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="34.8" cy="13.9" r="2" fill={brand.green} />
      <path
        d="M14 27V13l12 14V13"
        stroke={strokeN}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className = "", inverted = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-8 shrink-0" inverted={inverted} />
      <span
        className={`text-[1.2rem] font-semibold tracking-[-0.03em] ${
          inverted ? "text-white" : "text-ocean"
        }`}
      >
        Nexora
      </span>
    </span>
  );
}
