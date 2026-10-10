import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverted" | "ghost-inverted";

const variants: Record<Variant, string> = {
  primary:
    "bg-ocean text-white hover:bg-ocean-900 shadow-[0_1px_0_rgb(255_255_255/0.12)_inset,0_8px_24px_-12px_rgb(11_54_84/0.6)]",
  secondary:
    "bg-white text-ocean ring-1 ring-inset ring-line hover:ring-ocean/30 hover:bg-mist",
  inverted: "bg-white text-ocean hover:bg-mist",
  "ghost-inverted":
    "text-white ring-1 ring-inset ring-white/25 hover:ring-white/50 hover:bg-white/5",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  size?: "md" | "lg";
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const sizing = size === "lg" ? "h-12 px-6 text-[0.95rem]" : "h-10 px-4 text-sm";
  return (
    <a
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[background-color,box-shadow,color,transform] duration-200 ease-out active:scale-[0.98] ${sizing} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  id,
  title,
  intro,
  inverted = false,
}: {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  inverted?: boolean;
}) {
  return (
    <div className="reveal max-w-3xl">
      <h2
        id={id}
        className={`text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.6rem] lg:text-[3rem] ${
          inverted ? "text-white" : "text-ocean"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 max-w-2xl text-pretty text-[1.05rem] leading-relaxed sm:text-lg ${
            inverted ? "text-white/70" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
