import { ArrowUpRight, FlaskConical, Rocket, Telescope, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { brand } from "@/lib/brand";
import { projects, type Project, type ProjectStatus } from "@/lib/content";
import { SectionHeading } from "../ui";

const statusMeta: Record<ProjectStatus, { label: string; icon: LucideIcon }> = {
  exploring: { label: "Exploring", icon: Telescope },
  prototype: { label: "Prototype", icon: FlaskConical },
  live: { label: "Live product", icon: Rocket },
};

export function Work() {
  const hasShippedWork = projects.some((p) => p.status !== "exploring");

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-line bg-white py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="work-heading"
            title="Ideas deserve thoughtful engineering."
            intro={
              hasShippedWork
                ? "Selected products, prototypes, and explorations from Nexora."
                : (
                    <>
                      <strong className="font-semibold text-ocean">What we&apos;re exploring.</strong>{" "}
                      As a new company, we&apos;d rather show where we&apos;re heading than
                      list work we haven&apos;t done yet.
                    </>
                  )
            }
          />
          <ul aria-label="Status legend" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
            {Object.values(statusMeta).map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon aria-hidden="true" className="size-4 text-ocean" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name} className="reveal">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { label: statusLabel, icon: StatusIcon } = statusMeta[project.status];
  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist ring-1 ring-inset ring-line">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectCover motif={project.motif} />
        )}
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-ink-muted">
        <span>{project.category}</span>
        <span className="inline-flex items-center gap-1.5 text-ocean">
          <StatusIcon aria-hidden="true" className="size-4" strokeWidth={1.75} />
          {statusLabel}
        </span>
      </p>
      <h3 className="mt-2 flex items-start justify-between gap-4 text-lg font-semibold tracking-[-0.02em] text-ocean">
        {project.name}
        {project.href ? (
          <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : null}
      </h3>
      <p className="mt-2 text-pretty leading-relaxed text-ink-soft">{project.description}</p>
    </>
  );

  return project.href ? (
    <a href={project.href} className="group block rounded-xl">
      {body}
    </a>
  ) : (
    <article className="group">{body}</article>
  );
}

/** Generated abstract cover used until real imagery is available. */
function ProjectCover({ motif }: { motif: Project["motif"] }) {
  return (
    <svg
      viewBox="0 0 400 300"
      aria-hidden="true"
      className="absolute inset-0 size-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={brand.mist} />
      <g stroke={brand.ocean} strokeOpacity="0.06">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
        ))}
      </g>

      {motif === "circular" && (
        <g fill="none" strokeLinecap="round">
          <path d="M243 113a60 60 0 1 0 17 37" stroke={brand.teal} strokeWidth="2.5" />
          <path d="M228 128a38 38 0 1 0 10 22" stroke={brand.green} strokeWidth="2" />
          <circle cx="257" cy="128" r="5" fill={brand.green} stroke="none" />
          <circle cx="200" cy="150" r="9" fill={brand.ocean} stroke="none" />
          <path d="M120 230h160" stroke={brand.ocean} strokeOpacity="0.15" strokeDasharray="2 6" />
        </g>
      )}

      {motif === "network" && (
        <g>
          {[
            [110, 190, 170, 120],
            [170, 120, 240, 160],
            [240, 160, 300, 95],
            [170, 120, 200, 210],
            [240, 160, 200, 210],
            [200, 210, 290, 220],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={brand.digital} strokeOpacity="0.4" strokeWidth="1.5" />
          ))}
          {[
            [110, 190, brand.ocean],
            [170, 120, brand.digital],
            [240, 160, brand.turquoise],
            [300, 95, brand.teal],
            [200, 210, brand.ocean],
            [290, 220, brand.green],
          ].map(([cx, cy, fill]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill={fill as string} stroke={brand.white} strokeWidth="3" />
          ))}
        </g>
      )}

      {motif === "flow" && (
        <g fill="none" strokeLinecap="round">
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M60 ${110 + i * 26} C 160 ${70 + i * 26}, 240 ${180 + i * 18}, 340 ${120 + i * 22}`}
              stroke={[brand.ocean, brand.digital, brand.turquoise, brand.green][i]}
              strokeOpacity={0.75 - i * 0.12}
              strokeWidth="2"
            />
          ))}
          <circle cx="60" cy="149" r="6" fill={brand.ocean} />
          <circle cx="340" cy="153" r="6" fill={brand.green} />
        </g>
      )}
    </svg>
  );
}
