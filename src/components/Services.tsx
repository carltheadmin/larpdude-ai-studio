import { ArrowUpRight, Check, Clapperboard, Download, WandSparkles } from "lucide-react";
import { LINKS, Reveal, SectionTag } from "./ui";

const HIRE_POINTS = [
  { icon: WandSparkles, text: "Custom video creation" },
  { icon: Clapperboard, text: "AI cartoon storytelling" },
  { icon: Download, text: "Final downloadable video" },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-void">
      <div
        className="absolute bottom-[-10%] left-[-10%] h-[22rem] w-[22rem] rounded-full bg-crimson/10 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionTag center>CHOOSE YOUR EXPERIENCE.</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.6rem]">
              Two ways to bring your ideas <span className="text-crimson">to life.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ---- DONE FOR YOU ---- */}
          <Reveal variant="left">
            <article className="card-lift relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-coal p-8 sm:p-11">
              <span
                className="text-outline-faint pointer-events-none absolute -top-4 right-5 font-display text-8xl select-none"
                aria-hidden="true"
              >
                01
              </span>
              <p className="font-sans text-[11px] font-semibold tracking-[0.32em] text-body">
                DONE FOR YOU
              </p>
              <h3 className="mt-4 font-display text-5xl tracking-wide text-white uppercase sm:text-6xl">
                Hire me.
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-body">
                I create the 3D AI cartoon videos for you. You provide the
                idea, and I'll handle the video creation. You own the final
                video.
              </p>
              <ul className="mt-8 space-y-3.5">
                {HIRE_POINTS.map((point) => (
                  <li key={point.text} className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-card text-led">
                      <point.icon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <span className="font-sans text-[15px] font-semibold text-white">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 font-sans text-sm font-bold tracking-[0.14em] text-led transition-colors hover:text-white"
                >
                  SEE VIDEO PACKAGES
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-crimson/50">
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </article>
          </Reveal>

          {/* ---- MAKE IT YOURSELF ---- */}
          <Reveal variant="right" delay={120}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-crimson/45 bg-[linear-gradient(150deg,#191919_10%,#211315_55%,#2b0d12_100%)] p-8 shadow-[0_0_45px_rgba(255,21,47,0.14)] sm:p-11">
              <div
                className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-glowred/20 blur-[70px]"
                aria-hidden="true"
              />
              <span
                className="text-outline pointer-events-none absolute -top-4 right-5 font-display text-8xl select-none"
                aria-hidden="true"
              >
                02
              </span>
              <p className="relative flex items-center gap-2.5 font-sans text-[11px] font-semibold tracking-[0.32em] text-led">
                MAKE IT YOURSELF
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-glowred shadow-[0_0_8px_#ff152f]" />
              </p>
              <h3 className="relative mt-4 font-display text-5xl tracking-wide text-white uppercase sm:text-6xl">
                Learn the <span className="text-crimson">process.</span>
              </h3>
              <p className="relative mt-5 max-w-md text-base leading-relaxed text-body">
                Learn how to create your own 3D AI cartoon videos with my
                blueprint, tutorials, prompts, characters, editing system, and
                private community.
              </p>

              <div className="relative mt-8 flex flex-wrap items-end gap-x-5 gap-y-2">
                <span className="font-display text-6xl leading-none text-white drop-shadow-[0_0_20px_rgba(255,21,47,0.45)] sm:text-7xl">
                  $13.99
                </span>
                <span className="pb-1.5 font-sans text-[10px] leading-relaxed font-semibold tracking-[0.24em] text-body">
                  ONE-TIME PURCHASE
                  <br />
                  KEEP FOREVER
                </span>
              </div>

              <ul className="relative mt-7 flex flex-wrap gap-2">
                {["BLUEPRINT", "TUTORIALS", "PROMPTS", "CHARACTERS", "EDITING SYSTEM", "COMMUNITY"].map(
                  (chip) => (
                    <li
                      key={chip}
                      className="flex items-center gap-1.5 rounded-full border border-crimson/35 bg-black/40 px-3 py-1.5 font-sans text-[10px] font-semibold tracking-[0.16em] text-white"
                    >
                      <Check className="h-3 w-3 text-led" strokeWidth={3} />
                      {chip}
                    </li>
                  )
                )}
              </ul>

              <div className="relative mt-auto pt-10">
                <a
                  href={LINKS.blueprint}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-crimson px-7 py-4 font-sans text-sm font-bold tracking-wide text-white sm:w-auto"
                >
                  EXPLORE THE BLUEPRINT
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
