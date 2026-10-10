import { BadgeCheck, Earth, MapPin } from "lucide-react";

const principles = [
  { label: "Local understanding", icon: MapPin },
  { label: "African perspective", icon: Earth },
  { label: "Global standards", icon: BadgeCheck },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-24 sm:py-32"
    >
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <h2
              id="about-heading"
              className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-ocean sm:text-[2.6rem] lg:text-[3rem]"
            >
              Rooted in Zanzibar.{" "}
              <span className="text-ink-muted">Looking beyond boundaries.</span>
            </h2>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal space-y-5 text-pretty text-[1.05rem] leading-relaxed text-ink-soft sm:text-lg sm:leading-relaxed">
            <p>
              Nexora AI &amp; Software Technologies Ltd. is a technology company
              founded with a forward-looking ambition: to create useful digital
              solutions that address real challenges and open new
              possibilities.
            </p>
            <p>
              Born in Zanzibar, we see technology as more than code. It is a
              way to connect people, improve systems, support innovation, and
              create opportunities for a more sustainable future.
            </p>
            <p className="text-ocean">
              Our ambition is to build solutions with local understanding,
              African perspective, and global standards.
            </p>
          </div>

          <ul className="reveal mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {principles.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3 font-medium text-ocean">
                <Icon aria-hidden="true" className="size-5 shrink-0 text-teal" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
