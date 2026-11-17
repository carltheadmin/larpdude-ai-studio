import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

export const LINKS = {
  blueprint: "https://whop.com/3d-ai-cartoon-blueprint-course",
  drive:
    "https://drive.google.com/drive/folders/1wBtSUQP04t04iuNlMLFi20Q1jD-BLyvd",
  instagramDM: "https://ig.me/m/larpdude.ai.creator",
  telegramDM: "https://t.me/larpdude_aicreator",
  instagram: "https://ig.me/m/larpdude.ai.creator",
  telegram: "https://t.me/larpdude_aicreator",
  email: "mailto:larpdude.ai@gmail.com",
};

/* IntersectionObserver-based reveal wrapper */
export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  as?: "div" | "section" | "span" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "";

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={style}
      className={cn("reveal", variantClass, className)}
    >
      {children}
    </Tag>
  );
}

/* Instagram glyph (brand icons are not in lucide) — drawn in lucide stroke style */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* Small uppercase red section label */
export function SectionTag({
  children,
  className,
  center = false,
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        center && "justify-center",
        className
      )}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glowred opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson shadow-[0_0_10px_#ff152f]" />
      </span>
      <span className="font-sans text-[11px] font-semibold tracking-[0.32em] text-led uppercase sm:text-xs">
        {children}
      </span>
      <span className="h-px w-10 bg-gradient-to-r from-crimson/70 to-transparent sm:w-14" />
    </div>
  );
}
