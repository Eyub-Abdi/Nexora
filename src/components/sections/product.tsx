import { ArrowRight, Clock, GraduationCap, HandCoins, Handshake, Sprout } from "lucide-react";
import { JourneyDock } from "../journey-dock";

const audiences = [
  { icon: Sprout, who: "Entrepreneurs", what: "Assess gaps, learn, and build readiness." },
  { icon: HandCoins, who: "Investors", what: "Discover verified, well-prepared businesses." },
  { icon: Handshake, who: "Partners", what: "Run programmes, grants, and pitch events." },
  { icon: GraduationCap, who: "Mentors & experts", what: "Give targeted professional support." },
];

const journey = ["Assess", "Develop", "Support", "Validate", "Pitch", "Connect", "Invest", "Grow"];

export function Product() {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="bg-mist py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="reveal grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-2 text-sm font-medium text-ocean">
              <Clock aria-hidden="true" className="size-4 text-teal" strokeWidth={2} />
              Coming soon
            </p>
            <h2
              id="product-heading"
              className="mt-4 text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ocean sm:text-[3.25rem]"
            >
              Jasiri ya Mali
            </h2>
            <p className="mt-4 text-pretty text-lg font-medium text-ocean sm:text-xl">
              Building stronger entrepreneurs. Developing investable businesses.
            </p>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-soft sm:text-lg">
              An entrepreneurship platform that helps businesses become ready
              for investment, then connects them with investors, partners, and
              experts. Investment is the outcome of the journey, not the
              starting point.
            </p>
            <p className="mt-8 text-sm text-ink-muted">
              A Malazi Consultants product, designed, built, and maintained by
              Nexora.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 font-medium text-ocean underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ocean"
            >
              Ask about partnering or early access
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <ul className="divide-y divide-line self-end border-y border-line lg:col-span-6">
            {audiences.map(({ icon: Icon, who, what }) => (
              <li key={who} className="flex items-start gap-4 py-5">
                <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal" strokeWidth={1.75} />
                <p className="leading-relaxed">
                  <span className="font-semibold text-ocean">{who}.</span>{" "}
                  <span className="text-ink-soft">{what}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* The product's own journey, from first assessment to growth. */}
        <div className="reveal mt-16 rounded-2xl bg-white sm:mt-20">
          <JourneyDock stages={journey} />
        </div>
      </div>
    </section>
  );
}
