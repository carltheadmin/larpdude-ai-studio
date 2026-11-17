import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, SectionTag } from "./ui";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "Who owns the video?",
    a: "You do, after payment is complete. I may show it in my portfolio unless you ask me not to.",
  },
  {
    q: "How long does it take?",
    a: "Usually 3–5 business days for a single video. Rush delivery is available.",
  },
  {
    q: "How many revisions are included?",
    a: "1 revision per video. Extra revisions are $5 each.",
  },
  {
    q: "What format will I get?",
    a: "Vertical 9:16 MP4, no watermark.",
  },
  {
    q: "Do I need to write a script?",
    a: "No. Send me your idea, or I can write it for you as an add-on.",
  },
  {
    q: "Can you use real people or brands?",
    a: "Only with written permission from the person or the brand.",
  },
  {
    q: "How do I pay?",
    a: "After we agree on the details, I'll send a payment link or invoice. Work starts after payment.",
  },
  {
    q: "Do you guarantee views or sales?",
    a: "No. I create the videos. Results depend on many factors.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-coal">
      <span
        className="text-outline-faint pointer-events-none absolute right-0 bottom-6 hidden font-display text-[9rem] leading-none select-none lg:block"
        aria-hidden="true"
      >
        FAQ
      </span>
      <div className="relative mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <Reveal>
            <SectionTag center>NEED TO KNOW.</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.4rem]">
              Frequently asked <span className="text-crimson">questions.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3.5">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={Math.min(i, 4) * 70}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-300",
                    open
                      ? "border-crimson/50 bg-cardred/60"
                      : "border-line bg-card hover:border-crimson/35"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span
                        className={cn(
                          "hidden font-display text-sm sm:block",
                          open ? "text-led" : "text-muted"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-sans text-[15px] font-semibold text-white sm:text-base">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                        open
                          ? "rotate-45 border-crimson bg-crimson text-white shadow-[0_0_14px_rgba(255,21,47,0.5)]"
                          : "border-line bg-coal text-led"
                      )}
                    >
                      <Plus className="h-4.5 w-4.5" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className={cn("faq-panel", open && "open")}>
                    <div className="faq-inner">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-body sm:px-7 sm:pl-[3.9rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
