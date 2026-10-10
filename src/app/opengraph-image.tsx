import { ImageResponse } from "next/og";
import { BrandGradient } from "@/components/brand-gradient";
import { brand, brandGradientStops } from "@/lib/brand";
import { site } from "@/lib/site";

export const alt = `${site.legalName}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: brand.ocean950,
          color: brand.white,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
            <defs>
              <BrandGradient id="g" x1="4" y1="36" x2="36" y2="4" onDark />
            </defs>
            <path d="M31.4 8.6A16 16 0 1 0 36 20" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="34.8" cy="13.9" r="2" fill={brand.green} />
            <path d="M14 27V13l12 14V13" stroke={brand.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1.5 }}>Nexora</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: brand.turquoise, textTransform: "uppercase" }}>
            AI &amp; Software Technologies
          </div>
          <div style={{ marginTop: 24, fontSize: 76, fontWeight: 600, lineHeight: 1.05, letterSpacing: -3, maxWidth: 980 }}>
            Intelligence. Engineered for a Circular Future.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              height: 4,
              width: "100%",
              backgroundImage: `linear-gradient(90deg, ${brandGradientStops.map((s) => s.color).join(", ")})`,
            }}
          />
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
            Born in Zanzibar. Built for Africa. Designed for the World.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
