import {
  ArrowUpRight,
  BadgeCheck,
  FileVideo2,
  Plus,
  RefreshCcw,
  Video,
} from "lucide-react";
import { LINKS, Reveal, SectionTag } from "./ui";
import { cn } from "../utils/cn";

const PACKAGES = [
  {
    num: "01",
    title: "Single Video",
    price: "$50",
    unit: "PER VIDEO",
    features: [
      { icon: Video, text: "1 video" },
      { icon: RefreshCcw, text: "1 revision" },
      { icon: FileVideo2, text: "MP4 format" },
      { icon: BadgeCheck, text: "No watermark" },
    ],
  },
  {
    num: "02",
    title: "Starter Pack",
    price: "$170",
    unit: "4 VIDEOS",
    features: [
      { icon: Video, text: "4 videos" },
      { icon: RefreshCcw, text: "1 revision each" },
      { icon: FileVideo2, text: "MP4 format" },
      { icon: BadgeCheck, text: "No watermark" },
    ],
  },
  {
    num: "03",
    title: "Growth Pack",
    price: "$299",
    unit: "8 VIDEOS",
    features: [
      { icon: Video, text: "8 videos" },
      { icon: RefreshCcw, text: "1 revision each" },
      { icon: FileVideo2, text: "MP4 format" },
      { icon: BadgeCheck, text: "No watermark" },
    ],
    featured: true,
  },
];

const ADDONS = [
  "Custom 3D character +$5",
  "Script writing +$5 per video",
  "Extra revision +$5",
  "Additional 1 minute +$5",
];

export default function Pricing() {
  return (
    <section id="pricing" className="noise relative overflow-hidden bg-coal">
      <div
        className="absolute top-[-10%] left-1/2 h-[24rem] w-[46rem] -translate-x-1/2 rounded-full bg-crimson/10 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionTag center>STRAIGHTFORWARD PRICING.</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.6rem]">
              Choose your <span className="text-crimson">video package.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              Simple starting prices for custom 3D AI cartoon videos.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 110}>
              <article
                className={cn(
                  "card-lift relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-7 sm:p-8",
                  pkg.featured
                    ? "border-crimson/60 bg-cardred shadow-[0_0_40px_rgba(255,21,47,0.16)]"
                    : "border-line bg-card"
                )}
              >
                {pkg.featured && (
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson via-led to-crimson" />
                )}
                <div className="flex items-center justify-between">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.3em] text-muted">
                    PACKAGE {pkg.num}
                  </p>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 font-sans text-[9px] font-bold tracking-[0.18em]",
                      pkg.featured
                        ? "border-crimson/50 bg-crimson/15 text-led"
                        : "border-line text-body"
                    )}
                  >
                    {pkg.unit}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.65rem] tracking-wide text-white uppercase">
                  {pkg.title}
                </h3>
                <p className="mt-4 flex items-start gap-1">
                  <span
                    className={cn(
                      "font-display text-6xl leading-none",
                      pkg.featured
                        ? "text-led drop-shadow-[0_0_18px_rgba(255,21,47,0.5)]"
                        : "text-white"
                    )}
                  >
                    {pkg.price}
                  </span>
                </p>
                <span className="mt-6 h-px w-full bg-gradient-to-r from-line via-line/60 to-transparent" />
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <f.icon
                        className={cn(
                          "h-4.5 w-4.5 shrink-0",
                          pkg.featured ? "text-led" : "text-crimson"
                        )}
                        strokeWidth={2}
                      />
                      <span className="text-[15px] font-medium text-body">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* Blueprint pricing card */}
          <Reveal delay={330}>
            <a
              href={LINKS.blueprint}
              target="_blank"
              rel="noreferrer"
              className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-crimson/50 bg-[linear-gradient(160deg,#111111,#211315_70%)] p-7 focus:outline-none sm:p-8"
            >
              <div
                className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-glowred/25 blur-[50px]"
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between">
                <p className="font-sans text-[10px] font-semibold tracking-[0.3em] text-led">
                  DO IT YOURSELF
                </p>
                <ArrowUpRight className="h-5 w-5 text-led transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="relative mt-5 font-display text-[1.65rem] leading-tight tracking-wide text-white uppercase">
                Blueprint — Learn Your Own
              </h3>
              <p className="relative mt-4">
                <span className="font-display text-6xl leading-none text-led drop-shadow-[0_0_18px_rgba(255,21,47,0.5)]">
                  $13.99
                </span>
              </p>
              <span className="relative mt-6 h-px w-full bg-gradient-to-r from-crimson/50 to-transparent" />
              <p className="relative mt-6 text-[15px] leading-relaxed text-body">
                Step-by-step tutorial video / docs, my prompts, characters and
                editing system for getpixmo.com.
              </p>
              <span className="relative mt-auto inline-flex items-center gap-2 pt-8 font-sans text-xs font-bold tracking-[0.18em] text-white">
                GET THE BLUEPRINT
                <span className="h-1.5 w-1.5 rounded-full bg-led shadow-[0_0_8px_#ff152f]" />
              </span>
            </a>
          </Reveal>
        </div>

        {/* add-ons */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col gap-5 rounded-[1.75rem] border border-line bg-card px-7 py-7 sm:px-9 lg:flex-row lg:items-center">
            <p className="flex shrink-0 items-center gap-3 font-display text-xl tracking-wide text-white uppercase">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-crimson shadow-[0_0_14px_rgba(255,21,47,0.45)]">
                <Plus className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              Add-ons
            </p>
            <span className="hidden h-10 w-px bg-line lg:block" />
            <ul className="flex flex-wrap gap-2.5">
              {ADDONS.map((addon) => (
                <li
                  key={addon}
                  className="rounded-full border border-line bg-coal px-4 py-2 font-sans text-[13px] font-medium text-body"
                >
                  {addon}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* custom requests */}
        <Reveal delay={220}>
          <div className="mt-5 rounded-[1.75rem] border border-dashed border-crimson/40 bg-cardred/50 px-7 py-7 text-center sm:px-9">
            <p className="font-display text-xl tracking-wide text-white uppercase">
              Custom requests
            </p>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-relaxed text-body">
              Need a different number of videos? Tell me what you need. Custom
              pricing depends on your project.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
