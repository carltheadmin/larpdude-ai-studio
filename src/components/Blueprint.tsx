import { ArrowUpRight, MousePointer2, Shapes, Type, Video } from "lucide-react";
import { LINKS, Reveal, SectionTag } from "./ui";

const FLOATERS = [
  { icon: Video, label: "TUTORIALS", className: "top-6 -left-3 sm:-left-8 -rotate-6" },
  { icon: Type, label: "PROMPTS", className: "top-1/3 -right-3 sm:-right-9 rotate-3" },
  { icon: Shapes, label: "CHARACTERS", className: "-bottom-4 left-6 rotate-2" },
  { icon: MousePointer2, label: "EDITING SYSTEM", className: "-bottom-5 right-8 -rotate-3" },
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="noise relative overflow-hidden bg-void">
      <div className="led-grid absolute inset-0 rotate-180" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-[62%] h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-glowred/15 blur-[130px]"
        aria-hidden="true"
      />
      <span
        className="text-outline-faint pointer-events-none absolute -top-4 left-0 hidden font-display text-[10rem] leading-none select-none lg:block"
        aria-hidden="true"
      >
        DIY
      </span>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-32">
        {/* copy */}
        <div>
          <Reveal>
            <SectionTag>LEARN IT YOURSELF.</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.8rem]">
              Start creating your own{" "}
              <span className="text-crimson drop-shadow-[0_0_22px_rgba(255,21,47,0.4)]">
                3D AI cartoon
              </span>{" "}
              videos.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-body sm:text-lg">
              Get access to my step-by-step blueprint, tutorials, documents,
              prompts, characters, and editing system for creating 3D AI
              cartoon videos with getpixmo.com.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-end gap-x-6 gap-y-3">
              <span className="font-display text-7xl leading-none text-white drop-shadow-[0_0_26px_rgba(255,21,47,0.5)] sm:text-8xl">
                $13.99
              </span>
              <span className="pb-2 font-sans text-[11px] leading-relaxed font-semibold tracking-[0.26em] text-body">
                ONE-TIME PURCHASE
                <br />
                <span className="text-led">KEEP FOREVER</span>
              </span>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <a
              href={LINKS.blueprint}
              target="_blank"
              rel="noreferrer"
              className="btn-glow mt-9 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-crimson px-8 py-4 font-sans text-sm font-bold tracking-wide text-white sm:w-auto sm:text-[15px]"
            >
              GET THE BLUEPRINT NOW
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
          </Reveal>
        </div>

        {/* product cover */}
        <Reveal variant="right" delay={200}>
          <div className="relative mx-auto max-w-[400px] pb-6">
            {/* rings */}
            <div
              className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/15"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 left-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-led/20"
              aria-hidden="true"
            />

            <div className="animate-float-slow relative rotate-[3deg]">
              <div className="glow-frame relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-crimson/40 bg-[linear-gradient(165deg,#161616_5%,#211315_55%,#12060a_100%)] p-7 sm:p-9">
                <div
                  className="absolute -top-14 -right-14 h-44 w-44 rounded-full bg-glowred/30 blur-[60px]"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex items-baseline gap-1 font-display text-lg tracking-wide text-white">
                    LARPDUDE
                    <span className="h-2 w-2 rounded-[2px] bg-crimson shadow-[0_0_8px_#ff152f]" />
                  </span>
                  <span className="rounded-full border border-crimson/50 bg-black/50 px-3 py-1 font-sans text-[9px] font-bold tracking-[0.22em] text-led">
                    DIGITAL BLUEPRINT
                  </span>
                </div>

                <div className="relative mt-14">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.3em] text-led">
                    THE STEP-BY-STEP SYSTEM
                  </p>
                  <p className="mt-3 font-display text-[2.6rem] leading-[1.02] tracking-wide text-white uppercase">
                    3D AI
                    <br />
                    Cartoon
                    <br />
                    <span className="text-outline-red">Blueprint</span>
                  </p>
                </div>

                <div className="absolute right-7 bottom-7 left-7 sm:right-9 sm:left-9">
                  <div className="flex items-end justify-between border-t border-line pt-5">
                    <div>
                      <p className="font-sans text-[9px] font-semibold tracking-[0.26em] text-muted">
                        CREATED FOR
                      </p>
                      <p className="mt-1 font-sans text-sm font-bold text-white">
                        getpixmo.com
                      </p>
                    </div>
                    <p className="font-display text-4xl text-led drop-shadow-[0_0_14px_rgba(255,21,47,0.5)]">
                      $13.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* floating chips */}
            {FLOATERS.map((f) => (
              <span
                key={f.label}
                className={`absolute z-10 hidden items-center gap-2 rounded-xl border border-line bg-coal/95 px-3.5 py-2.5 font-sans text-[10px] font-bold tracking-[0.18em] text-white shadow-[0_14px_30px_rgba(0,0,0,0.6)] backdrop-blur sm:flex ${f.className}`}
              >
                <f.icon className="h-4 w-4 text-led" strokeWidth={2.2} />
                {f.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
