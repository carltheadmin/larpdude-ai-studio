import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import heroImg from "../assets/hero-character.jpg";
import { LINKS, Reveal, SectionTag } from "./ui";

const SPECS = ["9:16 VERTICAL VIDEO", "MP4 · NO WATERMARK", "CUSTOM 3D CHARACTERS"];

export default function Hero() {
  return (
    <section id="home" className="noise relative overflow-hidden bg-void">
      {/* atmosphere */}
      <div className="led-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-glowred/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-20%] left-[-12%] h-[26rem] w-[26rem] rounded-full bg-crimson/10 blur-[120px]"
        aria-hidden="true"
      />
      <span
        className="text-outline-faint pointer-events-none absolute top-24 -right-6 hidden font-display text-[11rem] leading-none tracking-tight select-none xl:block"
        aria-hidden="true"
      >
        3D AI
      </span>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pt-40 lg:pb-28">
        {/* ---- copy ---- */}
        <div>
          <Reveal>
            <SectionTag>3D AI ANIMATION STUDIO</SectionTag>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-[2.9rem] leading-[0.98] tracking-wide text-white uppercase sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
              Turn your ideas into{" "}
              <span className="text-crimson drop-shadow-[0_0_22px_rgba(255,21,47,0.45)]">
                3D AI
              </span>{" "}
              cartoon{" "}
              <span className="relative inline-block">
                stories.
                <span className="absolute right-0 -bottom-1 left-0 h-[6px] rounded-full bg-gradient-to-r from-crimson via-led to-transparent" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Create attention-grabbing animated stories with AI. Hire me to
              bring your ideas to life, or learn how to create your own with my
              step-by-step blueprint.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={LINKS.blueprint}
                target="_blank"
                rel="noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-2xl bg-crimson px-7 py-4 font-sans text-sm font-bold tracking-wide text-white sm:text-[15px]"
              >
                GET THE BLUEPRINT — $13.99
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-black/40 px-7 py-4 font-sans text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-led/70 hover:bg-card"
              >
                EXPLORE MY SERVICES
                <ArrowDown className="h-4 w-4 text-led" strokeWidth={2.5} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {SPECS.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-2 rounded-full border border-line bg-coal/80 px-3.5 py-1.5 font-sans text-[10px] font-semibold tracking-[0.18em] text-body"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-led shadow-[0_0_8px_#ff152f]" />
                  {spec}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---- character image ---- */}
        <Reveal variant="right" delay={200} className="relative">
          <div className="relative mx-auto max-w-[560px]">
            <div
              className="absolute -inset-6 rounded-[2.4rem] bg-glowred/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -top-5 -right-5 h-24 w-24 rounded-full border border-led/30"
              aria-hidden="true"
            />
            <div
              className="absolute -right-3 top-1/3 h-16 w-16 rounded-full border border-crimson/25"
              aria-hidden="true"
            />

            <figure className="glow-frame relative overflow-hidden rounded-[1.6rem] border border-line bg-coal">
              <img
                src={heroImg}
                alt="LarpDude 3D cartoon character in a red LED gaming studio, holding a smartphone showing a 3D AI cartoon story and pointing at it"
                className="block h-auto w-full"
                loading="eager"
              />
              {/* corner ticks */}
              <span className="absolute top-3 left-4 font-display text-lg text-led/80 select-none" aria-hidden="true">+</span>
              <span className="absolute top-3 right-4 font-display text-lg text-led/80 select-none" aria-hidden="true">+</span>
              <span className="absolute bottom-3 left-4 font-display text-lg text-led/80 select-none" aria-hidden="true">+</span>
              <span className="absolute right-4 bottom-3 font-display text-lg text-led/80 select-none" aria-hidden="true">+</span>
            </figure>

            {/* floating badge — bottom right, clear of face & phone */}
            <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-line bg-coal/95 py-3 pr-5 pl-3 shadow-[0_18px_40px_rgba(0,0,0,0.65)] backdrop-blur sm:-right-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson shadow-[0_0_16px_rgba(255,21,47,0.55)]">
                <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
              </span>
              <span className="leading-tight">
                <span className="block font-sans text-[13px] font-bold tracking-wide text-white">
                  3D CARTOON STORIES
                </span>
                <span className="block font-sans text-[10px] font-medium tracking-[0.22em] text-muted">
                  CREATED WITH AI
                </span>
              </span>
            </div>

            {/* LED strip under frame */}
            <div
              className="mx-auto mt-9 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-transparent via-crimson to-transparent opacity-80"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
