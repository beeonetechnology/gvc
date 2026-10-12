import React from "react";
import { Link } from "react-router-dom";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const Star = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.2 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z" />
  </svg>
);

export default function PageHeader({ title, current, description, homeHref = "/" }) {
  return (
    <header style={sans} className="relative overflow-hidden bg-[#0B0D10] text-white" aria-labelledby="page-title">
      <style>{`
        @keyframes gvc-rise { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
        @keyframes gvc-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes gvc-spin { to { transform: rotate(360deg); } }
        @keyframes gvc-pop { from { opacity: 0; transform: scale(.88); } to { opacity: 1; transform: none; } }
        .gvc-rise { animation: gvc-rise .9s cubic-bezier(.22,1,.36,1) both; }
        .gvc-draw { transform-origin: left; animation: gvc-draw 1s cubic-bezier(.22,1,.36,1) .5s both; }
        .gvc-pop { animation: gvc-pop 1.1s cubic-bezier(.22,1,.36,1) .2s both; }
        .gvc-orbit { animation: gvc-spin 48s linear infinite; }
        .gvc-orbit-rev { animation: gvc-spin 70s linear infinite reverse; }
        @media (prefers-reduced-motion: reduce) {
          .gvc-rise, .gvc-draw, .gvc-pop, .gvc-orbit, .gvc-orbit-rev { animation: none; }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-[#4A80C4]/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-[22rem] w-[22rem] rounded-full bg-[#A9A92F]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-28 pt-36 sm:px-8 sm:pb-32 sm:pt-44 lg:grid-cols-12 lg:px-12 lg:pb-40 lg:pt-48">
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="gvc-rise" style={{ animationDelay: ".05s" }}>
            <ol className="flex items-center gap-2 text-sm text-[#C9CCD1]">
              <li>
                <Link to={homeHref} className="transition hover:text-[#A9A92F] focus:outline-none focus-visible:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Star className="h-2.5 w-2.5 text-[#A9A92F]" />
              </li>
              <li aria-current="page" className="font-semibold text-white">
                {current}
              </li>
            </ol>
          </nav>

          <h1 id="page-title" style={{ ...serif, animationDelay: ".15s" }} className="gvc-rise mt-6 text-6xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            {title}
          </h1>

          <span aria-hidden="true" className="gvc-draw mt-7 block h-1 w-28 rounded-full bg-[#A9A92F]" />

          {description && (
            <p className="gvc-rise mt-7 max-w-xl text-base leading-relaxed text-[#C9CCD1] sm:text-lg" style={{ animationDelay: ".35s" }}>
              {description}
            </p>
          )}
        </div>

        <div className="hidden justify-center sm:flex lg:col-span-5 lg:justify-end" aria-hidden="true">
          <div className="gvc-pop relative h-64 w-64 lg:h-[24rem] lg:w-[24rem]">
            <div className="absolute inset-0 rounded-full border-[10px] border-[#C9CCD1]/90" />
            <div className="absolute inset-6 rounded-full border border-white/20" />
            <div className="gvc-orbit absolute inset-0">
              <Star className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 text-[#4A80C4]" />
              <Star className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 text-[#4A80C4]" />
            </div>
            <div className="gvc-orbit-rev absolute inset-10 rounded-full border border-dashed border-[#A9A92F]/40">
              <Star className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A9A92F]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center" style={serif}>
              <span className="text-6xl font-semibold text-[#A9A92F] lg:text-8xl">G</span>
              <span className="text-6xl font-semibold text-white lg:text-8xl">V</span>
              <span className="text-6xl font-semibold text-[#A9A92F] lg:text-8xl">C</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}