import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LINKS } from "./ui";
import { cn } from "../utils/cn";

const NAV = [
  { label: "HOME", href: "#home" },
  { label: "MY WORK", href: "#work" },
  { label: "HOW IT WORKS", href: "#how" },
  { label: "PRICING", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-void/85 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "border-b border-transparent bg-void/40 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a href="#home" className="group flex items-baseline gap-1" aria-label="LARPDUDE home">
          <span className="font-display text-[1.65rem] tracking-wide text-white">
            LARPDUDE
          </span>
          <span className="h-2.5 w-2.5 rounded-[3px] bg-crimson shadow-[0_0_12px_#ff152f] transition-transform duration-300 group-hover:rotate-45" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-sans text-[13px] font-semibold tracking-[0.18em] text-body transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded bg-crimson shadow-[0_0_8px_#ff152f] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={LINKS.blueprint}
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex items-center gap-1.5 rounded-full bg-crimson px-5 py-2.5 font-sans text-[13px] font-bold tracking-wide text-white"
          >
            GET THE BLUEPRINT
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-coal text-white transition-colors hover:border-crimson lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-line bg-void/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-[26rem] border-b" : "max-h-0"
        )}
      >
        <nav className="space-y-1 px-5 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 font-sans text-sm font-semibold tracking-[0.18em] text-body transition-colors hover:bg-card hover:text-white"
            >
              {item.label}
              <span className="h-1.5 w-1.5 rounded-full bg-crimson/70" />
            </a>
          ))}
          <a
            href={LINKS.blueprint}
            target="_blank"
            rel="noreferrer"
            className="btn-glow mt-3 flex items-center justify-center gap-2 rounded-xl bg-crimson px-5 py-3.5 font-sans text-sm font-bold tracking-wide text-white"
          >
            GET THE BLUEPRINT
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}
