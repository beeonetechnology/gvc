import React, { useEffect, useRef, useState } from "react";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const values = [
  {
    label: "Quality",
    text: "To enhance the quality of manpower supply in the field of construction, real estate and cleaning.",
  },
  {
    label: "Value",
    text: "To serve with the best value for money and a high return on services.",
  },
  {
    label: "Excellence",
    text: "To serve in an environment of professionalism, teamwork and excellence.",
  },
  {
    label: "Customers",
    text: "To value our customers and give priority to their satisfaction.",
  },
  {
    label: "Compliance",
    text: "To respect all environmental rules, regulations and legal requirements.",
  },
];

const Star = ({ className = "", style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.2 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z" />
  </svg>
);

// Each word rises out of a mask, one after another
const RiseWords = ({ text, play, baseDelay = 0 }) =>
  text.split(" ").map((w, i, arr) => (
    <React.Fragment key={i}>
      <span className="gvc-mask">
        <span
          className={`gvc-word ${play ? "is-in" : ""}`}
          style={{ transitionDelay: `${baseDelay + i * 35}ms` }}
        >
          {w}
        </span>
      </span>
      {i < arr.length - 1 ? " " : ""}
    </React.Fragment>
  ));

export default function OurValues() {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [intro, setIntro] = useState(false);
  const [seen, setSeen] = useState(() => values.map(() => false));

  // Intro: plays once when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setIntro(true);
      setSeen(values.map(() => true));
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIntro(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Active statement (middle band) + one-time reveal for each statement
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const activeIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number(e.target.dataset.index);
            setSeen((s) => (s[i] ? s : s.map((v, k) => (k === i ? true : v))));
            revealIO.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => {
      if (el) {
        activeIO.observe(el);
        revealIO.observe(el);
      }
    });
    return () => {
      activeIO.disconnect();
      revealIO.disconnect();
    };
  }, []);

  // Ring turns slowly as you scroll through the section
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const s = sectionRef.current;
      const r = ringRef.current;
      if (!s || !r) return;
      const rect = s.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      r.style.transform = `rotate(${p * 140}deg) scale(${0.92 + p * 0.12})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="values"
      ref={sectionRef}
      style={sans}
      className="relative overflow-hidden bg-[#F4F5F7] text-[#0B0D10]"
      aria-labelledby="values-heading"
    >
      <style>{`
        /* Ring draws itself on intro */
        .gvc-ring-outer { stroke-dasharray: 1822; stroke-dashoffset: 1822; transition: stroke-dashoffset 2.2s cubic-bezier(.65,0,.25,1); }
        .gvc-intro .gvc-ring-outer { stroke-dashoffset: 0; }
        .gvc-ring-wrap { transition: opacity 1.4s ease; opacity: 0; }
        .gvc-intro .gvc-ring-wrap { opacity: 1; }

        /* Title stars pop in one by one */
        .gvc-star { opacity: 0; transform: scale(.2) rotate(-90deg); transition: opacity .5s ease, transform .8s cubic-bezier(.3,1.6,.5,1); }
        .gvc-intro .gvc-star { opacity: 1; transform: none; }

        /* Masked word rise */
        .gvc-mask { display: inline-block; overflow: hidden; vertical-align: bottom; padding-bottom: .14em; margin-bottom: -.14em; }
        .gvc-word { display: inline-block; transform: translateY(110%); transition: transform .9s cubic-bezier(.2,.8,.2,1); }
        .gvc-word.is-in { transform: none; }

        /* Statements */
        .gvc-val { position: relative; opacity: .38; transition: opacity .6s ease; }
        .gvc-val.is-active { opacity: 1; }
        .gvc-val-label svg { transition: transform .9s cubic-bezier(.3,1.4,.5,1), color .4s ease; }
        .gvc-val.is-active .gvc-val-label svg { transform: rotate(144deg) scale(1.35); color: #A9A92F; }

        /* Progress segments */
        .gvc-seg { height: 3px; background: rgba(11,13,16,.12); position: relative; overflow: hidden; border-radius: 2px; }
        .gvc-seg::after { content: ""; position: absolute; inset: 0; background: #A9A92F; transform: scaleX(0); transform-origin: left; transition: transform .6s cubic-bezier(.2,.8,.2,1); }
        .gvc-seg.is-on::after { transform: scaleX(1); }

        @media (min-width: 640px) {
          /* top rule draws across when the statement becomes active */
          .gvc-val::before { content: ""; position: absolute; top: -1px; left: 0; height: 2px; width: 100%; background: #A9A92F; transform: scaleX(0); transform-origin: left; transition: transform .9s cubic-bezier(.2,.8,.2,1); }
          .gvc-val.is-active::before { transform: scaleX(1); }
        }
        @media (max-width: 639px) {
          .gvc-val { border-left: 3px solid rgba(11,13,16,.12); padding-left: 1.25rem; transition: opacity .5s ease, border-color .5s ease; }
          .gvc-val.is-active { border-left-color: #A9A92F; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gvc-ring-outer, .gvc-ring-wrap, .gvc-star, .gvc-word, .gvc-val, .gvc-seg::after, .gvc-val::before, .gvc-val-label svg { transition: none !important; }
          .gvc-ring-outer { stroke-dashoffset: 0; }
          .gvc-ring-wrap, .gvc-star { opacity: 1; transform: none; }
          .gvc-word { transform: none; }
        }
      `}</style>

      <div className={intro ? "gvc-intro" : ""}>
        {/* Ring motif echoing the logo seal — draws itself, then turns with scroll */}
        <div
          className="gvc-ring-wrap pointer-events-none absolute -bottom-40 -left-40 h-[34rem] w-[34rem] text-[#0B0D10] lg:-bottom-56 lg:-left-52 lg:h-[46rem] lg:w-[46rem]"
          aria-hidden="true"
        >
          <svg
            ref={ringRef}
            viewBox="0 0 600 600"
            className="h-full w-full opacity-[0.09] will-change-transform"
            fill="none"
            stroke="currentColor"
          >
            <circle className="gvc-ring-outer" cx="300" cy="300" r="290" strokeWidth="10" transform="rotate(-90 300 300)" />
            <circle cx="300" cy="300" r="250" strokeWidth="1.5" strokeDasharray="2 9" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Title (sticky on desktop) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-1.5 text-[#A9A92F]" aria-hidden="true">
                  <Star className="gvc-star h-4 w-4" style={{ transitionDelay: "100ms" }} />
                  <Star className="gvc-star h-6 w-6" style={{ transitionDelay: "260ms" }} />
                  <Star className="gvc-star h-4 w-4" style={{ transitionDelay: "420ms" }} />
                </div>
                <h2
                  id="values-heading"
                  style={serif}
                  className="mt-6 text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
                >
                  <RiseWords text="Our values" play={intro} baseDelay={350} />
                </h2>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-[#3B424C]">
                  <RiseWords
                    text="The principles that guide how we work with our clients, our people and our environment."
                    play={intro}
                    baseDelay={650}
                  />
                </p>

                {/* Progress: one segment per value */}
                <div
                  className="mt-8 hidden max-w-[12rem] gap-1.5 sm:flex"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={values.length}
                  aria-valuenow={active + 1}
                  aria-label="Values progress"
                >
                  {values.map((v, i) => (
                    <span key={v.label} className={`gvc-seg flex-1 ${i <= active ? "is-on" : ""}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Statements */}
            <ul className="space-y-2 sm:space-y-0 lg:col-span-8">
              {values.map((v, i) => (
                <li
                  key={v.label}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-index={i}
                  className={`gvc-val group grid gap-3 py-7 sm:grid-cols-[9.5rem_1fr] sm:gap-8 sm:border-t sm:border-[#0B0D10]/10 sm:py-10 sm:first:border-t-0 sm:first:pt-0 lg:first:pt-2 ${
                    active === i ? "is-active" : ""
                  }`}
                >
                  <p className="gvc-val-label flex items-center gap-2 text-sm font-semibold text-[#4A80C4] sm:pt-2">
                    <Star className="h-3 w-3 shrink-0" />
                    {v.label}
                  </p>
                  <p
                    style={serif}
                    className="text-[1.65rem] leading-snug text-[#0B0D10] sm:text-[1.75rem] lg:text-3xl"
                  >
                    <RiseWords text={v.text} play={seen[i]} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}