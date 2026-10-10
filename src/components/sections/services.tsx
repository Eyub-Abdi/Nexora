import { services } from "@/lib/content";
import { SectionHeading } from "../ui";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          title="Technology built around real-world challenges."
          intro="We bring together software engineering, intelligent systems, and practical technology strategy to help turn complex challenges into useful digital solutions."
        />

        {/* An index rather than a card grid. */}
        <ul className="mt-14 border-t border-line sm:mt-20">
          {services.map(({ icon: Icon, ...service }) => (
            <li
              key={service.title}
              className="reveal group relative grid gap-3 border-b border-line py-8 sm:py-10 lg:grid-cols-12 lg:items-baseline lg:gap-8"
            >
              <span
                aria-hidden="true"
                className="bg-brand-gradient absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 transition-transform duration-700 ease-out-soft group-hover:scale-x-100"
              />
              <p className="flex items-center gap-3 text-sm font-medium text-ink-muted lg:col-span-3">
                <Icon aria-hidden="true" className="size-[1.125rem] shrink-0 text-ocean" strokeWidth={1.75} />
                {service.pillar}
              </p>
              <h3 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-ocean sm:text-[1.75rem] lg:col-span-4">
                {service.title}
              </h3>
              <p className="max-w-xl text-pretty leading-relaxed text-ink-soft lg:col-span-5">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
