import React, { useRef, useState } from "react";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const services = [
  {
    title: "Electrical Works",
    text: "We provide expert electrical works, ensuring safety, efficiency, and high-quality solutions.",
    icon: <Icon><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></Icon>,
  },
  {
    title: "Plumbing Works",
    text: "We offer professional plumbing works, ensuring reliability, efficiency, and high-quality solutions.",
    icon: <Icon><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></Icon>,
  },
  {
    title: "Painting Works",
    text: "We provide expert painting works, delivering quality, precision, and long-lasting finishes.",
    icon: (
      <Icon>
        <rect x="3" y="3" width="14" height="5" rx="1" />
        <path d="M17 5.5h2a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-7v3" />
        <rect x="10" y="14" width="4" height="7" rx="1" />
      </Icon>
    ),
  },
  {
    title: "Cleaning Services",
    text: "We offer professional cleaning services, ensuring hygiene, efficiency, and spotless results every time.",
    icon: (
      <Icon>
        <path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
      </Icon>
    ),
  },
  {
    title: "Carpentry Service",
    text: "We provide expert carpentry services, delivering precision, quality, and durable craftsmanship.",
    icon: (
      <Icon>
        <path d="M13 5l3-3 6 6-3 3-6-6z" />
        <path d="M14 9L4 19a1.4 1.4 0 0 0 2 2l10-10" />
      </Icon>
    ),
  },
  {
    title: "Partitions and Ceilings",
    text: "We offer expert partitions and ceilings solutions, ensuring durability, precision, and aesthetic appeal.",
    icon: (
      <Icon>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </Icon>
    ),
  },
];

const PAD = 20; // matches px-5 on the mobile slider

export default function Services() {
  const trackRef = useRef(null);
  const frame = useRef(0);
  const [active, setActive] = useState(0);
  const total = services.length;

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = trackRef.current;
      if (!el) return;
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < total; i++) {
        const d = Math.abs(el.children[i].offsetLeft - PAD - el.scrollLeft);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      setActive(best);
    });
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.max(0, Math.min(total - 1, i));
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: el.children[idx].offsetLeft - PAD, behavior: reduce ? "auto" : "smooth" });
  };

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-[#0B0D10]/20 text-[#0B0D10] transition active:scale-95 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F]";

  return (
    <section
      id="services"
      style={sans}
      className="relative overflow-hidden bg-white text-[#0B0D10]"
      aria-labelledby="services-heading"
    >
      <style>{`
        .gvc-snap { scrollbar-width: none; -ms-overflow-style: none; }
        .gvc-snap::-webkit-scrollbar { display: none; }
        .gvc-card, .gvc-card .gvc-icon, .gvc-card .gvc-title, .gvc-card .gvc-text, .gvc-card .gvc-ring { transition: background-color .4s, color .4s, opacity .4s, box-shadow .4s; }
        @media (max-width: 639px) {
          .gvc-card.is-active { background: #0B0D10; box-shadow: 0 24px 40px -16px rgba(11,13,16,.45); }
          .gvc-card.is-active .gvc-icon { background: #A9A92F; color: #0B0D10; }
          .gvc-card.is-active .gvc-title { color: #fff; }
          .gvc-card.is-active .gvc-text { color: #C9CCD1; }
          .gvc-card.is-active .gvc-ring { opacity: .12; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gvc-card, .gvc-card * { transition: none !important; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[26rem] w-[26rem] rounded-full bg-[#4A80C4]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
              <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
              Main services
            </p>
            <h2
              id="services-heading"
              style={serif}
              className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Skilled work, finished properly.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#3B424C] lg:pb-2">
            From wiring to finishing, our trained teams deliver safe, precise and lasting results
            on every site.
          </p>
        </div>

        {/* Slider on phones, grid from tablet up */}
        <ul
          ref={trackRef}
          onScroll={onScroll}
          aria-roledescription="carousel"
          className="gvc-snap relative mx-auto mt-10 flex w-full max-w-[22rem] snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-1 pb-6 sm:mx-0 sm:mt-12 sm:grid sm:max-w-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-16 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <li
              key={s.title}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              className="basis-[92%] shrink-0 snap-start sm:basis-auto"
            >
              <article
                className={`gvc-card group relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-3xl bg-[#F4F5F7] p-7 ring-1 ring-[#0B0D10]/5 sm:min-h-0 sm:p-8 sm:transition sm:duration-300 sm:hover:-translate-y-1 sm:hover:bg-[#0B0D10] sm:hover:shadow-2xl sm:hover:shadow-[#0B0D10]/20 motion-reduce:hover:translate-y-0 ${
                  active === i ? "is-active" : ""
                }`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 600 600"
                  className="gvc-ring pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 text-[#C9CCD1] opacity-0 group-hover:opacity-[0.12]"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="300" cy="300" r="290" strokeWidth="10" />
                  <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
                </svg>

                <div className="gvc-icon relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B0D10] text-[#A9A92F] group-hover:bg-[#A9A92F] group-hover:text-[#0B0D10]">
                  {s.icon}
                </div>

                <h3 style={serif} className="gvc-title relative mt-8 text-[1.75rem] font-medium leading-tight group-hover:text-white sm:mt-7 sm:text-2xl">
                  {s.title}
                </h3>
                <p className="gvc-text relative mt-3 flex-1 text-[15px] leading-relaxed text-[#3B424C] group-hover:text-[#C9CCD1]">
                  {s.text}
                </p>
              </article>
            </li>
          ))}
          <li aria-hidden="true" className="w-1 shrink-0 sm:hidden" />
        </ul>

        {/* Slider controls (phones only) */}
        <div className="mt-2 flex items-center gap-4 sm:hidden">
          <p className="w-14 shrink-0 text-sm text-[#3B424C]" aria-live="polite">
            <span className="font-semibold text-[#0B0D10]">{String(active + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
          </p>
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-[#0B0D10]/10" aria-hidden="true">
            <div
              className="h-full rounded-full bg-[#A9A92F] transition-all duration-500"
              style={{ width: `${((active + 1) / total) * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button type="button" className={arrow} onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous service">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" className={arrow} onClick={() => goTo(active + 1)} disabled={active === total - 1} aria-label="Next service">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}