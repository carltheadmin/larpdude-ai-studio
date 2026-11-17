import { Reveal, SectionTag } from "./ui";

const STEPS = [
  {
    num: "01",
    title: "Start With an Idea",
    desc: "Message me your idea or pick a story style.",
  },
  {
    num: "02",
    title: "Get the Details",
    desc: "We confirm the details and the price.",
  },
  {
    num: "03",
    title: "Watch It Come to Life",
    desc: "I create your 3D cartoon video.",
  },
  {
    num: "04",
    title: "Review and Receive",
    desc: "You review it, request 1 revision, and get your final file.",
  },
];

export default function Process() {
  return (
    <section id="how" className="relative overflow-hidden bg-coal">
      <span
        className="text-outline-faint pointer-events-none absolute top-8 right-0 hidden font-display text-[9rem] leading-none select-none lg:block"
        aria-hidden="true"
      >
        PROCESS
      </span>
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <SectionTag>FROM IDEA TO FINAL VIDEO.</SectionTag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.6rem]">
                You bring the idea.{" "}
                <span className="text-crimson">I'll bring it to life.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-base leading-relaxed text-body sm:text-lg">
              Getting a custom 3D AI cartoon video made is simple.
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="relative mt-16">
          {/* desktop rail */}
          <div
            className="absolute top-[2.4rem] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute top-[2.4rem] left-[12%] hidden h-[3px] w-[38%] rounded bg-gradient-to-r from-crimson to-led opacity-70 blur-[1px] lg:block"
            aria-hidden="true"
          />
          {/* mobile rail */}
          <div
            className="absolute top-2 bottom-2 left-[1.65rem] w-px bg-gradient-to-b from-crimson/60 via-line to-transparent lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.num} delay={i * 130}>
                <div className="group relative flex gap-5 pl-1 lg:flex-col lg:gap-0 lg:pl-0">
                  <div className="relative z-10 shrink-0">
                    <span className="text-outline-red font-display text-6xl transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(255,21,47,0.5)] sm:text-7xl lg:text-[5.2rem]">
                      {step.num}
                    </span>
                    <span className="absolute -bottom-2 left-1 hidden h-2.5 w-2.5 rounded-full bg-crimson shadow-[0_0_12px_#ff152f] lg:block" />
                  </div>
                  <div className="lg:mt-8 lg:pr-4">
                    <h3 className="font-display text-[1.3rem] tracking-wide text-white uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-body">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
