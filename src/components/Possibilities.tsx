import {
  BookOpenText,
  BriefcaseBusiness,
  Coins,
  Megaphone,
  UserRoundPlus,
  Users,
} from "lucide-react";
import { Reveal, SectionTag } from "./ui";
import { cn } from "../utils/cn";

const CARDS = [
  {
    icon: Users,
    num: "01",
    title: "Grow an Audience",
    desc: "Post story series on Instagram, TikTok, and YouTube Shorts and build a following without showing your face.",
    span: "lg:col-span-3",
  },
  {
    icon: Megaphone,
    num: "02",
    title: "Promote a Business",
    desc: "Turn your product, service, or brand message into a short animated story that people actually watch.",
    span: "lg:col-span-3",
  },
  {
    icon: UserRoundPlus,
    num: "03",
    title: "Build a Personal Brand",
    desc: "Share your ideas, lessons, and motivation through your own animated character.",
    span: "lg:col-span-2",
  },
  {
    icon: BookOpenText,
    num: "04",
    title: "Storytelling Pages",
    desc: "Create daily animated stories that inspire, teach, entertain, or connect with an audience.",
    span: "lg:col-span-2",
  },
  {
    icon: Coins,
    num: "05",
    title: "Monetize Your Content",
    desc: "Creators may earn through platform monetization programs, brand deals, selling their own products or services, or affiliate links with proper disclosure. Eligibility and results depend on each platform and on your effort.",
    span: "lg:col-span-2",
    hot: true,
  },
  {
    icon: BriefcaseBusiness,
    num: "06",
    title: "Offer It as a Service",
    desc: "Create animated videos for other creators and small businesses.",
    span: "lg:col-span-6",
    wide: true,
  },
];

export default function Possibilities() {
  return (
    <section className="relative overflow-hidden bg-void">
      <div
        className="absolute top-0 right-[-15%] h-[24rem] w-[24rem] rounded-full bg-crimson/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <SectionTag>THE POSSIBILITIES.</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white uppercase sm:text-5xl lg:text-[3.6rem]">
              One creative style. <span className="text-crimson">So many possibilities.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              3D AI cartoon videos can be used for storytelling, content
              creation, brand promotion, and more.
            </p>
          </Reveal>
        </div>

        {/* mosaic grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.num}
              delay={(i % 3) * 110}
              className={cn("sm:col-span-1", card.span, card.wide && "sm:col-span-2")}
            >
              <article
                className={cn(
                  "card-lift group relative h-full overflow-hidden rounded-3xl border border-line p-7 sm:p-8",
                  card.hot
                    ? "bg-cardred shadow-[inset_0_0_40px_rgba(229,9,36,0.08)]"
                    : "bg-card",
                  card.wide && "sm:flex sm:items-center sm:gap-8"
                )}
              >
                <span
                  className="text-outline-faint pointer-events-none absolute -top-3 right-4 font-display text-7xl select-none"
                  aria-hidden="true"
                >
                  {card.num}
                </span>
                <div className={cn("relative", card.wide && "sm:flex sm:items-center sm:gap-8")}>
                  <span
                    className={cn(
                      "mb-5 flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(255,21,47,0.4)]",
                      card.hot
                        ? "border-crimson/50 bg-crimson text-white"
                        : "border-line bg-coal text-led group-hover:border-crimson/60 group-hover:bg-crimson group-hover:text-white"
                    )}
                    style={{ height: "3.25rem", width: "3.25rem" }}
                  >
                    <card.icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.35rem] tracking-wide text-white uppercase">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-body">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <span className="absolute bottom-0 left-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-crimson to-led transition-all duration-500 group-hover:w-24" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* highlighted full-width block */}
        <Reveal delay={120}>
          <div className="noise relative mt-6 overflow-hidden rounded-[2rem] border border-crimson/30 bg-[linear-gradient(115deg,#0a0a0a_20%,#1c0a0e_55%,#33070d_100%)] px-7 py-12 text-center sm:px-12 sm:py-16">
            <div
              className="absolute top-1/2 left-1/2 h-56 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glowred/15 blur-[90px]"
              aria-hidden="true"
            />
            <div className="relative">
              <SectionTag center>YOUR STORY. YOUR CHARACTER. YOUR WORLD.</SectionTag>
              <h3 className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-[1.05] tracking-wide text-white uppercase sm:text-5xl">
                Have a story <span className="text-led">you want to tell?</span>
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
                Maybe it's your journey, a lesson you learned, or how you
                reached a goal. I can turn it into a 3D animated story you can
                share with the world.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 text-center font-sans text-xs tracking-wide text-muted">
            Results vary. Videos do not guarantee views, followers, sales, or
            income.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
