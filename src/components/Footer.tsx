import { ArrowUp, Mail, Send } from "lucide-react";
import { InstagramIcon, LINKS } from "./ui";

export default function Footer() {
  return (
    <footer className="relative bg-black">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-6">
            <a href="#home" className="flex items-baseline gap-1">
              <span className="font-display text-4xl tracking-wide text-white">
                LARPDUDE
              </span>
              <span className="h-2.5 w-2.5 rounded-[3px] bg-crimson shadow-[0_0_12px_#ff152f]" />
            </a>
            <p className="mt-4 font-sans text-sm font-semibold tracking-[0.22em] text-body">
              3D AI ANIMATION STUDIO.
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-led shadow-[0_0_8px_#ff152f]" />
              Videos are AI-generated.
            </p>
          </div>

          {/* connect */}
          <div className="md:col-span-3">
            <p className="font-sans text-[11px] font-semibold tracking-[0.3em] text-led">
              CONNECT
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-[15px] font-medium text-body transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4.5 w-4.5 text-crimson transition-transform group-hover:scale-110" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-[15px] font-medium text-body transition-colors hover:text-white"
                >
                  <Send className="h-4.5 w-4.5 text-crimson transition-transform group-hover:scale-110" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={LINKS.email}
                  className="group flex items-center gap-3 text-[15px] font-medium break-all text-body transition-colors hover:text-white"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-crimson transition-transform group-hover:scale-110" />
                  larpdude.ai@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* legal */}
          <div className="md:col-span-3">
            <p className="font-sans text-[11px] font-semibold tracking-[0.3em] text-led">
              SUPPORT
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={LINKS.email}
                  className="text-[15px] font-medium text-body transition-colors hover:text-white"
                >
                  Terms &amp; Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[15px] font-medium text-body transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="group inline-flex items-center gap-2 pt-2 font-sans text-xs font-bold tracking-[0.2em] text-body transition-colors hover:text-white"
                >
                  BACK TO TOP
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-all group-hover:border-crimson group-hover:bg-crimson">
                    <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line/70 pt-7 sm:flex-row">
          <p className="font-sans text-xs tracking-wide text-muted">
            © {new Date().getFullYear()} LARPDUDE. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.24em] text-muted">
            TURN IDEAS INTO
            <span className="text-led">3D AI STORIES</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
