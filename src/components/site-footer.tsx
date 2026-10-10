import { services } from "@/lib/content";
import { navLinks, site } from "@/lib/site";
import { CurrentYear } from "./current-year";
import { Logo } from "./logo";

const linkClass = "text-sm text-white/65 transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="relative bg-ocean-950 text-white">
      <div aria-hidden="true" className="bg-brand-gradient h-0.5 w-full" />
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-5">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/65">
            {site.legalName} designs and builds intelligent software, digital
            platforms, and technology solutions for real-world challenges.
          </p>
          <p className="mt-6 text-sm font-medium text-white/85">
            Born in Zanzibar. Built for Africa. Designed for the World.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-white">
            Company
          </h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-white">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.title}>
                <a href="#services" className={linkClass}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-white">
            Get in touch
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li>{site.location}</li>
            {site.contactEmail ? (
              <li>
                <a href={`mailto:${site.contactEmail}`} className={`${linkClass} break-all`}>
                  {site.contactEmail}
                </a>
              </li>
            ) : (
              <li>
                <a href="#contact" className={linkClass}>
                  Start a conversation
                </a>
              </li>
            )}
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className={linkClass} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.legalName} All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
