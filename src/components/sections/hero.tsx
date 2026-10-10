import { ArrowDown, ArrowRight, Earth, Globe, MapPin } from "lucide-react";
import { ButtonLink } from "../ui";

const brandMessage = [
  { text: "Born in Zanzibar.", icon: MapPin },
  { text: "Built for Africa.", icon: Earth },
  { text: "Designed for the World.", icon: Globe },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh flex-col bg-mist pt-[var(--header-height)]"
    >
      <div className="container-page flex flex-1 flex-col items-center justify-center py-20 text-center sm:py-28">
        <h1
          id="hero-heading"
          className="animate-rise max-w-4xl text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ocean sm:text-[3.5rem] lg:text-[4rem]"
          style={{ ["--delay" as string]: "80ms" }}
        >
          Intelligence.
          <br />
          Engineered for a <span className="whitespace-nowrap">Circular Future.</span>
        </h1>

        <p
          className="animate-rise mt-7 max-w-2xl text-pretty text-[1.075rem] leading-relaxed text-ink-soft sm:text-xl sm:leading-relaxed"
          style={{ ["--delay" as string]: "160ms" }}
        >
          We design and build intelligent software, connected digital systems,
          and technology solutions that help businesses solve meaningful
          problems and create lasting value.
        </p>

        <div
          className="animate-rise mt-10 flex w-full flex-col justify-center gap-3 min-[480px]:w-auto min-[480px]:flex-row"
          style={{ ["--delay" as string]: "240ms" }}
        >
          <ButtonLink href="#contact" size="lg">
            Start a Conversation
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </ButtonLink>
          <ButtonLink href="#services" size="lg" variant="secondary">
            Explore Our Capabilities
            <ArrowDown
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </ButtonLink>
        </div>
      </div>

      {/* The brand message as the hero's foundation. */}
      <div className="relative border-t border-line bg-white/70">
        <span aria-hidden="true" className="bg-brand-gradient absolute inset-x-0 -top-px h-px" />
        <ul className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {brandMessage.map(({ text, icon: Icon }) => (
            <li
              key={text}
              className="flex items-center justify-center gap-2.5 py-4 text-sm font-medium text-ocean sm:py-5"
            >
              <Icon aria-hidden="true" className="size-4 shrink-0 text-teal" strokeWidth={1.75} />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
