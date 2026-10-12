import React, { useEffect, useRef, useState } from "react";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const PHONE = "+974 6622 2725";
const PHONE_TEL = "+97466222725";

const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

const Icon = ({ children, className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen];
}

/* ---------------------------------- History --------------------------------- */
export function History() {
  const [ref, seen] = useInView();

  return (
    <section style={sans} className="relative overflow-hidden bg-[#F4F5F7] text-[#0B0D10]" aria-labelledby="history-heading">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[#A9A92F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
          <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
          Our history
        </p>
        <h2 id="history-heading" style={serif} className="mt-5 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Excellence in contracting &amp; manpower solutions
        </h2>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Years */}
          <div className="lg:col-span-5">
            <p style={serif} className="text-6xl font-medium leading-none tracking-tight sm:text-7xl lg:text-[5.5rem]">
              2019
              <span className="mx-2 inline-block h-1 w-8 -translate-y-3 rounded-full bg-[#A9A92F] sm:w-12 lg:-translate-y-5" aria-hidden="true" />
              <span className="sr-only"> to </span>
              2025
            </p>
            <p style={serif} className="mt-5 text-2xl text-[#4A80C4] sm:text-3xl">
              Our most efficient years
            </p>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-[#3B424C] sm:text-lg">
              Golden Village Contracting (GVC) has built a strong reputation for quality and
              reliability over the years. Since our establishment, we have consistently delivered
              exceptional services across various industries, including construction, maintenance, and
              manpower supply. During this period, we achieved significant milestones, expanding our
              expertise and workforce to meet the growing demands of our clients. Our commitment to
              innovation, efficiency, and customer satisfaction has positioned us as a trusted name in
              the industry.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B0D10] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1B2027] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2"
            >
              <Icon className="h-4 w-4">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </Icon>
              {PHONE}
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div ref={ref} className="mt-16 lg:mt-24" role="img" aria-label="Timeline from 2019 to 2025">
          <div className="relative px-2">
            <div className="absolute inset-x-2 top-[7px] h-0.5 rounded-full bg-[#0B0D10]/10" aria-hidden="true" />
            <div
              aria-hidden="true"
              className="absolute left-2 top-[7px] h-0.5 rounded-full bg-[#A9A92F] transition-[width] duration-[1600ms] ease-out"
              style={{ width: seen ? "calc(100% - 1rem)" : "0%" }}
            />
            <ol className="relative flex justify-between">
              {years.map((y, i) => (
                <li key={y} className="flex flex-col items-center gap-3">
                  <span
                    className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                      seen ? "scale-100 border-[#A9A92F] bg-[#A9A92F]" : "scale-75 border-[#C9CCD1] bg-[#F4F5F7]"
                    }`}
                    style={{ transitionDelay: seen ? `${i * 230}ms` : "0ms" }}
                  />
                  <span
                    className={`text-xs font-semibold transition-colors duration-500 sm:text-sm ${seen ? "text-[#0B0D10]" : "text-[#0B0D10]/40"}`}
                    style={{ transitionDelay: seen ? `${i * 230}ms` : "0ms" }}
                  >
                    {y}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Vision and Mission ---------------------------- */
const items = [
  {
    word: "Vision",
    text: [
      "Golden Village Contracting's vision is to become the premier solution provider, offering world leadership in engineering and technical manpower solutions for construction and engineering.",
      "We strive to be the leader in client satisfaction, innovation, professionalism, and superior quality solutions.",
    ],
    icon: (
      <Icon>
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </Icon>
    ),
  },
  {
    word: "Mission",
    text: [
      "Golden Village Contracting (GVC) is committed to building long-term, value-driven relationships with clients and partners by providing top-quality manpower solutions and services.",
      "We utilize the best resources and latest techniques to ensure excellence, efficiency, and reliability, delivering superior results that exceed expectations across various industries and project requirements.",
    ],
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </Icon>
    ),
  },
];

export function VisionMission() {
  return (
    <section style={sans} className="relative overflow-hidden bg-[#0B0D10] text-white" aria-label="Vision and mission">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#4A80C4]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {items.map((it) => (
            <article key={it.word} className="group relative overflow-hidden rounded-3xl bg-[#14181D] p-7 ring-1 ring-white/10 transition duration-300 hover:ring-[#A9A92F]/50 sm:p-10 lg:p-12">
              {/* outlined ghost word */}
              <span
                aria-hidden="true"
                style={{ ...serif, WebkitTextStroke: "1.5px rgba(201,204,209,0.14)", color: "transparent" }}
                className="pointer-events-none absolute -right-2 -top-4 select-none text-[6rem] font-medium leading-none sm:text-[8rem] lg:text-[9rem]"
              >
                {it.word}
              </span>

              <div className="relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C9CCD1]/70">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A9A92F] text-[#0B0D10]">{it.icon}</span>
                </span>
                <h2 style={serif} className="mt-8 text-4xl font-medium sm:text-5xl">
                  {it.word}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-[#C9CCD1] sm:text-[17px]">
                  {it.text.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HistoryVisionMission() {
  return (
    <>
      <History />
      <VisionMission />
    </>
  );
}