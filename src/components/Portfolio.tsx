import { MousePointerClick, Play } from "lucide-react";
import heroImg from "../assets/hero-character.jpg";
import { LINKS, Reveal, SectionTag } from "./ui";

function Thumb({
  label,
  position,
  zoom = "",
  className = "",
}: {
  label: string;
  position: string;
  zoom?: string;
  className?: string;
}) {
  return (
    <div
      className={`group/thumb overflow-hidden rounded-2xl border border-line bg-card shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:border-led/50 ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-cover ${zoom}`}
          style={{ objectPosition: position }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 font-sans text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-glowred" />
          {label}
        </span>
        <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-crimson shadow-[0_0_14px_rgba(255,21,47,0.6)] transition-transform duration-300 group-hover/thumb:scale-110">
          <Play className="ml-0.5 h-3.5 w-3.5 fill-white text-white" />
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="noise relative overflow-hidden bg-coal">
      <div
        className="absolute top-1/3 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-crimson/10 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionTag>MY CREATIVE DIRECTION.</SectionTag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.6rem]">
                Explore the styles <span className="text-crimson">I can create.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-body sm:text-lg lg:ml-auto">
              Discover different 3D AI cartoon storytelling formats. These
              examples belong to their original creators and are shown for style
              reference.
            </p>
          </Reveal>
        </div>

        {/* ---- clickable preview stage ---- */}
        <Reveal variant="scale" delay={150}>
          <a
            href={LINKS.drive}
            target="_blank"
            rel="noreferrer"
            className="group relative mx-auto mt-16 block max-w-4xl focus:outline-none"
            aria-label="Watch 4 sample videos on Google Drive"
          >
            <div className="relative h-[560px] sm:h-[600px]">
              {/* side thumbnails */}
              <Thumb
                label="SAMPLE 02"
                position="16% 48%"
                zoom="scale-[1.35]"
                className="absolute top-16 left-0 z-0 w-32 -rotate-[8deg] sm:top-20 sm:left-2 sm:w-48 lg:left-6"
              />
              <Thumb
                label="SAMPLE 03"
                position="80% 18%"
                zoom="scale-[1.5]"
                className="absolute top-40 right-0 z-0 w-32 rotate-[7deg] sm:top-32 sm:right-2 sm:w-48 lg:right-6"
              />
              <Thumb
                label="SAMPLE 04"
                position="50% 55%"
                className="absolute bottom-0 left-2 z-0 w-36 rotate-[4deg] sm:left-8 sm:w-52 lg:left-14"
              />

              {/* phone */}
              <div className="absolute top-0 left-1/2 z-10 w-[238px] -translate-x-1/2 sm:w-[268px]">
                <div className="relative rounded-[2.9rem] border border-led/30 bg-black p-[10px] shadow-[0_0_50px_rgba(255,21,47,0.25),0_40px_80px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2.3rem] bg-card">
                    <img
                      src={heroImg}
                      alt="Preview of a 3D AI cartoon story video"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "66% 22%" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
                    {/* notch */}
                    <span className="absolute top-2.5 left-1/2 h-[22px] w-24 -translate-x-1/2 rounded-full bg-black" />
                    {/* top label */}
                    <span className="absolute top-11 left-4 flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-[0.2em] text-white">
                      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-glowred shadow-[0_0_8px_#ff152f]" />
                      SAMPLE 01
                    </span>
                    {/* play button */}
                    <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                      <span className="absolute h-20 w-20 animate-ping rounded-full bg-crimson/30" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-crimson shadow-[0_0_30px_rgba(255,21,47,0.7)] transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-1 h-6 w-6 fill-white text-white" />
                      </span>
                    </span>
                    {/* progress bar */}
                    <span className="absolute right-4 bottom-4 left-4">
                      <span className="block h-1 overflow-hidden rounded-full bg-white/25">
                        <span className="block h-full w-2/3 rounded-full bg-led shadow-[0_0_8px_#ff152f]" />
                      </span>
                    </span>
                  </div>
                  {/* side buttons */}
                  <span className="absolute top-24 -right-[2px] h-14 w-[3px] rounded bg-line" />
                  <span className="absolute top-20 -left-[2px] h-9 w-[3px] rounded bg-line" />
                </div>
                <div
                  className="mx-auto mt-6 h-[3px] w-1/2 rounded-full bg-gradient-to-r from-transparent via-crimson to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* bottom-right wide tile */}
              <div className="absolute right-2 bottom-6 z-0 hidden w-56 rotate-[-3deg] sm:block lg:right-12">
                <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-colors duration-500 group-hover:border-led/50">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={heroImg}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full scale-[1.8] object-cover"
                      style={{ objectPosition: "20% 60%" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-2.5 left-3 font-sans text-[9px] font-bold tracking-[0.2em] text-white">
                      PHONE-STORY FORMAT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 flex items-center justify-center gap-2.5 text-center font-sans text-sm font-semibold tracking-wide text-white">
              <MousePointerClick className="h-5 w-5 text-led" />
              Tap to watch 4 sample videos.
            </p>
          </a>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="font-sans text-xs font-medium tracking-[0.14em] text-muted">
              Credits: @nateassets, @dbfadedthat, @om.assets, @ayushbuche.
            </p>
            <p className="mt-4 font-display text-xl tracking-wide text-white uppercase sm:text-2xl">
              I can create original stories and characters{" "}
              <span className="text-crimson">in these styles for you.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
