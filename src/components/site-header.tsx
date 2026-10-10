"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/site";
import { Logo } from "./logo";
import { ButtonLink } from "./ui";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && setOpen(false);
    // Treat the open menu as modal: page content behind it can't take focus.
    const background = [document.getElementById("main"), document.querySelector("footer")];
    background.forEach((el) => el?.setAttribute("inert", ""));
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
      document.body.style.overflow = "";
      background.forEach((el) => el?.removeAttribute("inert"));
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid
          ? "border-b border-line/80 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ocean focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-6">
        <a href="#top" aria-label="Nexora home" className="rounded-md">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ocean"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="#contact" className="hidden sm:inline-flex">
            Let&apos;s Talk
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ocean ring-1 ring-inset ring-line transition-colors hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        ref={menuRef}
        hidden={!open}
        className="h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="divide-y divide-line">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-xl font-medium tracking-[-0.02em] text-ocean"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#contact"
            size="lg"
            className="mt-8 w-full"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
          </ButtonLink>
          <p className="mt-8 text-sm text-ink-muted">
            Born in Zanzibar. Built for Africa. Designed for the World.
          </p>
        </nav>
      </div>
    </header>
  );
}
