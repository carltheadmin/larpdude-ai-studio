import { Reveal, SectionTag } from "./ui";

const HIGHLIGHTS = [
  { num: "01", title: "3D AI CHARACTER STORIES" },
  { num: "02", title: "SHORT-FORM ANIMATED VIDEOS" },
  { num: "03", title: "CUSTOM AI VIDEO CREATION" },
];

export default function BrandStatement() {
  return (
    <section id="intro" className="relative overflow-hidden bg-void">
      <span
        className="text-outline-faint pointer-events-none absolute -bottom-10 left-0 hidden font-display text-[10rem] leading-none select-none lg:block"
        aria-hidden="true"
      >
        STORIES
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionTag>BEYOND ORDINARY CONTENT.</SectionTag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.6rem]">
                Stories deserve more than{" "}
                <span className="text-outline-red">just words.</span>
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-5">
            <Reveal delay={200}>
              <p className="max-w-md text-base leading-relaxed text-body sm:text-lg lg:ml-auto">
                I create 3D AI cartoon videos that turn ideas, characters, and
                storytelling into engaging visual content for social media.
              </p>
            </Reveal>
          </div>
        </div>

        {/* numbered strip */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/60 sm:mt-16 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.num} delay={i * 120} className="bg-coal">
              <div className="group flex h-full items-center gap-5 px-7 py-7 transition-colors duration-300 hover:bg-card sm:px-8">
                <span className="font-display text-4xl text-crimson drop-shadow-[0_0_14px_rgba(255,21,47,0.4)] transition-transform duration-300 group-hover:-translate-y-1 sm:text-5xl">
                  {h.num}
                </span>
                <span className="h-10 w-px shrink-0 bg-gradient-to-b from-transparent via-line to-transparent" />
                <span className="font-sans text-sm leading-snug font-bold tracking-[0.08em] text-white sm:text-[15px]">
                  {h.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
