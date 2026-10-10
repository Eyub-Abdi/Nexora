"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const MAX_SCALE = 1.55; // size of the word directly under the pointer
const RANGE = 150; // px from the pointer at which magnification fades out
const LIFT = 4; // extra px the fully magnified word rises

/**
 * The Jasiri ya Mali journey with macOS Dock-style magnification: words grow
 * with proximity to the pointer and push their neighbours apart. Only enabled
 * for precise hover-capable pointers without reduced motion; otherwise it is
 * a static list.
 */
export function JourneyDock({ stages }: { stages: readonly string[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    let centers: number[] = [];
    let widths: number[] = [];
    let pointerX: number | null = null;
    let frame = 0;

    // Measure the resting layout once per hover, as the Dock does.
    const measure = () => {
      const words = wordRefs.current.filter((w): w is HTMLSpanElement => w !== null);
      for (const w of words) {
        w.style.transition = "none";
        w.style.transform = "";
        w.style.marginInline = "";
      }
      centers = words.map((w) => w.getBoundingClientRect().left + w.offsetWidth / 2);
      widths = words.map((w) => w.offsetWidth);
      for (const w of words) w.style.transition = "";
    };

    const render = () => {
      frame = 0;
      wordRefs.current.forEach((w, i) => {
        if (!w) return;
        let scale = 1;
        if (pointerX !== null) {
          const d = Math.abs(pointerX - centers[i]);
          if (d < RANGE) scale = 1 + (MAX_SCALE - 1) * ((Math.cos((Math.PI * d) / RANGE) + 1) / 2);
        }
        w.style.transform = scale === 1 ? "" : `translateY(${(-(scale - 1) / (MAX_SCALE - 1)) * LIFT}px) scale(${scale})`;
        w.style.marginInline = scale === 1 ? "" : `${((scale - 1) * widths[i]) / 2}px`;
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onEnter = (e: PointerEvent) => {
      measure();
      pointerX = e.clientX;
      schedule();
    };
    const onMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      schedule();
    };
    const onLeave = () => {
      pointerX = null;
      schedule();
    };

    const attach = () => {
      list.addEventListener("pointerenter", onEnter);
      list.addEventListener("pointermove", onMove);
      list.addEventListener("pointerleave", onLeave);
    };
    const detach = () => {
      list.removeEventListener("pointerenter", onEnter);
      list.removeEventListener("pointermove", onMove);
      list.removeEventListener("pointerleave", onLeave);
      onLeave();
    };
    const sync = () => {
      if (query.matches) attach();
      else detach();
    };

    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      detach();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol
      ref={listRef}
      aria-label="The Jasiri ya Mali journey"
      className="flex flex-wrap items-end justify-center gap-x-1.5 gap-y-3 px-5 py-6 sm:gap-x-3 sm:px-8 sm:py-8"
    >
      {stages.map((stage, i) => (
        <li key={stage} className="flex items-center gap-1.5 sm:gap-3">
          <span
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            className="inline-block origin-bottom text-[0.95rem] font-semibold tracking-[-0.01em] text-ocean transition-[transform,margin] duration-150 ease-out will-change-transform sm:text-lg"
          >
            {stage}
          </span>
          {i < stages.length - 1 ? (
            <ChevronRight aria-hidden="true" className="size-4 text-teal" strokeWidth={2} />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
