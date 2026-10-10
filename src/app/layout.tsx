import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { brand } from "@/lib/brand";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.legalName,
    title: site.title,
    description: site.description,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: brand.ocean,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh overflow-x-clip">{children}</body>
    </html>
  );
}
