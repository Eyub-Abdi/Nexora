import { impactAreas } from "@/lib/content";

export function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative isolate overflow-hidden bg-ocean-950 py-24 text-white sm:py-32"
    >
      {/* Soft ocean light from the top corner. */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle,rgb(24_198_192/0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-56 -left-40 -z-10 size-[32rem] rounded-full bg-[radial-gradient(circle,rgb(11_143_232/0.14),transparent_65%)]"
      />

      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="reveal lg:sticky lg:top-32">
            <h2
              id="solutions-heading"
              className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.6rem] lg:text-[3rem]"
            >
              Technology with a{" "}
              <span className="text-white/60">wider purpose.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-[1.05rem] leading-relaxed text-white/70 sm:text-lg">
              Good technology should make organizations work better and leave
              a positive mark on the communities and environments around them.
              These are the areas where we focus our thinking and where we
              intend to build.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {impactAreas.map((area) => (
            <li
              key={area.title}
              className="reveal group border-t border-white/10 py-8 first:border-t-0 first:pt-0 sm:py-10 lg:first:pt-2"
            >
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                  {area.title}
                </h3>
                <dl className="mt-5 grid gap-5 text-[0.95rem] leading-relaxed md:grid-cols-2 md:gap-8">
                  <div>
                    <dt className="text-sm font-medium text-white/60">
                      The challenge
                    </dt>
                    <dd className="mt-2 text-white/75">{area.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-green-soft">
                      Our direction
                    </dt>
                    <dd className="mt-2 text-white/90">{area.direction}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
