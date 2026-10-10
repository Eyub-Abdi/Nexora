import { brand } from "@/lib/brand";
import { site } from "@/lib/site";
import { ContactForm } from "../contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-ocean py-24 text-white sm:py-32"
    >
      {/* Restrained circular motif echoing the brand mark. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="absolute -right-48 top-1/2 -z-10 w-[44rem] max-w-none -translate-y-1/2 opacity-60 max-lg:-bottom-80 max-lg:top-auto max-lg:translate-y-0"
      >
        <defs>
          <linearGradient id="contact-ring" x1="0" y1="600" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={brand.digital} stopOpacity="0" />
            <stop offset="0.45" stopColor={brand.turquoise} />
            <stop offset="1" stopColor={brand.green} />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="290" stroke="url(#contact-ring)" strokeOpacity="0.5" />
        <circle cx="300" cy="300" r="210" stroke={brand.white} strokeOpacity="0.06" />
        <circle cx="300" cy="300" r="130" stroke={brand.white} strokeOpacity="0.06" />
      </svg>
      <div aria-hidden="true" className="bg-brand-gradient absolute inset-x-0 top-0 h-px opacity-70" />

      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <h2
            id="contact-heading"
            className="text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[3rem] lg:text-[3.4rem]"
          >
            Have a challenge{" "}
            <span className="text-white/60">worth solving?</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-[1.05rem] leading-relaxed text-white/75 sm:text-lg">
            Let&apos;s explore how thoughtful engineering and the right
            technology can help turn your ideas into something useful.
          </p>
          {site.contactEmail ? (
            <p className="mt-8 text-sm text-white/60">
              Prefer email?{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-medium text-white underline decoration-turquoise/60 underline-offset-4 hover:decoration-turquoise"
              >
                {site.contactEmail}
              </a>
            </p>
          ) : null}
        </div>

        <div className="reveal lg:col-span-7">
          <ContactForm email={site.contactEmail} />
        </div>
      </div>
    </section>
  );
}
