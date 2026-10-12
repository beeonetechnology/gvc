import React, { useState } from "react";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const SLIDE_SECONDS = 7;

const testimonials = [
  {
    quote:
      "Golden Village Contracting provided exceptional service! Their skilled workforce completed our project on time with outstanding quality. Highly recommended!",
    name: "Jeniffer Smith",
    role: "Chef",
    rating: 4.5,
  },
  {
    quote:
      "Professional, reliable, and efficient! Their cleaning services keep our hotel spotless. Truly a game-changer for our business.",
    name: "Pamela Duncan",
    role: "Director",
    rating: 4,
  },
  {
    quote:
      "The team at GVC is highly skilled and responsive. From electrical work to plumbing, they handled everything perfectly!",
    name: "Steve Tailor",
    role: "CFO",
    rating: 4.5,
  },
  {
    quote:
      "GVC's manpower supply was exactly what we needed. Skilled workers, timely delivery, and excellent service!",
    name: "GVC Client", // replace with the real name
    role: "Manpower Supply", // replace with the real role
  },
];

const starPath = "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.2 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z";

function Stars({ value }) {
  return (
    <div className="flex items-center gap-2" role="img" aria-label={`Rated ${value} out of 5`}>
      <div className="flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, value - i)) * 100;
          return (
            <span key={i} className="relative inline-block h-4 w-4">
              <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full text-white/20" fill="currentColor" aria-hidden="true">
                <path d={starPath} />
              </svg>
              <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#A9A92F]" fill="currentColor" aria-hidden="true">
                  <path d={starPath} />
                </svg>
              </span>
            </span>
          );
        })}
      </div>
      <span className="text-sm font-semibold text-[#C9CCD1]">{value}/5</span>
    </div>
  );
}

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState("next");
  const [touchX, setTouchX] = useState(null);
  const total = testimonials.length;
  const t = testimonials[index];

  const go = (to, direction) => {
    setDir(direction);
    setIndex((to + total) % total);
  };
  const next = () => go(index + 1, "next");
  const prev = () => go(index - 1, "prev");

  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const diff = e.changedTouches[0].clientX - touchX;
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
    setTouchX(null);
  };

  return (
    <section
      id="testimonials"
      style={sans}
      className="relative overflow-hidden bg-[#0B0D10] text-white"
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
    >
      <style>{`
        @keyframes gvc-t-next { from { opacity: 0; transform: translateX(36px); filter: blur(6px); } to { opacity: 1; transform: none; filter: none; } }
        @keyframes gvc-t-prev { from { opacity: 0; transform: translateX(-36px); filter: blur(6px); } to { opacity: 1; transform: none; filter: none; } }
        @keyframes gvc-t-up { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes gvc-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .gvc-t-next { animation: gvc-t-next .7s cubic-bezier(.22,1,.36,1) both; }
        .gvc-t-prev { animation: gvc-t-prev .7s cubic-bezier(.22,1,.36,1) both; }
        .gvc-t-up { animation: gvc-t-up .6s cubic-bezier(.22,1,.36,1) both; }
        .gvc-t-bar { transform-origin: left; animation: gvc-progress ${SLIDE_SECONDS}s linear forwards; }
        .gvc-t-wrap:hover .gvc-t-bar, .gvc-t-wrap:focus-within .gvc-t-bar { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .gvc-t-next, .gvc-t-prev, .gvc-t-up { animation: none; }
          .gvc-t-bar { animation: none; transform: scaleX(0); }
        }
      `}</style>

      {/* background glow + ring */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#4A80C4]/10 blur-3xl" />
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-48 -top-48 h-[34rem] w-[34rem] text-[#C9CCD1] opacity-[0.07]"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="300" cy="300" r="290" strokeWidth="10" />
        <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading and controls */}
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
              <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
              Testimonials
            </p>
            <h2
              id="testimonials-heading"
              style={serif}
              className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              People say the nicest things.
            </h2>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:border-[#A9A92F] hover:bg-[#A9A92F] hover:text-[#0B0D10] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:border-[#A9A92F] hover:bg-[#A9A92F] hover:text-[#0B0D10] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <p className="ml-2 text-sm text-[#C9CCD1]" aria-live="off">
                <span className="font-semibold text-white">{String(index + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* Right: stacked card */}
          <div className="lg:col-span-7">
            <div
              className="gvc-t-wrap relative pb-10"
              onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
              onTouchEnd={onTouchEnd}
            >
              {/* depth layers */}
              <div aria-hidden="true" className="absolute inset-x-8 bottom-0 top-8 rounded-3xl bg-white/[0.04] ring-1 ring-white/5" />
              <div aria-hidden="true" className="absolute inset-x-4 bottom-5 top-4 rounded-3xl bg-white/[0.06] ring-1 ring-white/5" />

              <figure
                className="relative overflow-hidden rounded-3xl bg-[#14181D] ring-1 ring-white/10"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
              >
                <div key={index} className={`flex min-h-[23rem] flex-col p-7 sm:min-h-[21rem] sm:p-12 ${dir === "next" ? "gvc-t-next" : "gvc-t-prev"}`}>
                  <svg viewBox="0 0 32 24" className="h-8 w-10 text-[#A9A92F]" fill="currentColor" aria-hidden="true">
                    <path d="M0 24V14.4C0 6.2 4.3 1.3 12 0l1 3.6C8.9 4.9 7.2 7.3 7 10.8h6V24H0zm19 0V14.4C19 6.2 23.3 1.3 31 0l1 3.6c-4.1 1.3-5.8 3.7-6 7.2h6V24H19z" />
                  </svg>

                  <blockquote style={serif} className="mt-6 flex-1 text-2xl leading-snug sm:text-[1.9rem] sm:leading-[1.3]">
                    {t.quote}
                  </blockquote>

                  <figcaption className="gvc-t-up mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6" style={{ animationDelay: ".15s" }}>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A9A92F] text-sm font-bold text-[#0B0D10] ring-4 ring-[#A9A92F]/20">
                        {initials(t.name)}
                      </span>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-[#C9CCD1]">{t.role}</p>
                      </div>
                    </div>
                    {t.rating ? <Stars value={t.rating} /> : null}
                  </figcaption>
                </div>

                {/* autoplay progress */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10" aria-hidden="true">
                  <div key={index} className="gvc-t-bar h-full bg-[#A9A92F]" onAnimationEnd={next} />
                </div>
              </figure>
            </div>

            {/* dots */}
            <div className="mt-2 flex justify-center gap-2 lg:justify-start" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => go(i, i > index ? "next" : "prev")}
                  className={`h-2 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
                    i === index ? "w-8 bg-[#A9A92F]" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}