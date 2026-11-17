import { Send } from "lucide-react";
import { InstagramIcon, LINKS, Reveal, SectionTag } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className="noise relative overflow-hidden bg-void">
      <div
        className="absolute top-1/2 left-1/2 h-[26rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glowred/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <SectionTag center>LET'S CREATE SOMETHING.</SectionTag>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-6xl lg:text-[4.2rem]">
            Ready to bring your idea <span className="text-crimson">to life?</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            Message me your story idea, your preferred package, and your
            deadline. Let's discuss your project.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LINKS.instagramDM}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-crimson px-8 py-4 font-sans text-sm font-bold tracking-wide text-white sm:w-auto"
            >
              <InstagramIcon className="h-5 w-5" />
              MESSAGE ME ON INSTAGRAM
            </a>
            <a
              href={LINKS.discordDM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-crimson/50 bg-coal px-8 py-4 font-sans text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-led hover:bg-card hover:shadow-[0_0_24px_rgba(255,21,47,0.25)] sm:w-auto"
            >
              <Send className="h-5 w-5 text-led" strokeWidth={2.2} />
              MESSAGE ME ON DISCORD
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
