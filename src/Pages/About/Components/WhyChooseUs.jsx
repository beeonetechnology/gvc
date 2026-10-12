import React, { useState } from "react";


const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const reasons = [
  {
    title: "Accredited Company",
    text: "Golden Village Contracting (GVC) is an accredited company, delivering quality contracting, maintenance, and manpower solutions with reliability, safety, and excellence.",
    icon: (
      <Icon>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </Icon>
    ),
  },
  {
    title: "100% Guarantee",
    text: "Golden Village Contracting (GVC) guarantees 100% satisfaction, delivering excellence, reliability, and superior craftsmanship in every project with professionalism and precision.",
    icon: (
      <Icon>
        <circle cx="12" cy="9" r="6" />
        <path d="M9 9l2 2 4-4M8.5 14.5L7 21l5-3 5 3-1.5-6.5" />
      </Icon>
    ),
  },
  {
    title: "Quality Material",
    text: "Golden Village Contracting (GVC) uses high-quality materials, ensuring durability, safety, and excellence in every project for long-lasting, reliable results.",
    icon: (
      <Icon>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </Icon>
    ),
  },
];

export default function WhyChooseUsAbout() {
  const [active, setActive] = useState(0);

  return (
    <section style={sans} className="bg-white text-[#0B0D10]" aria-labelledby="reasons-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
            <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
            Why choose us
          </p>
          <h2 id="reasons-heading" style={serif} className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Reasons for choosing us
          </h2>
        </div>

        <ul className="mt-12 flex flex-col gap-4 lg:mt-16 lg:h-[30rem] lg:flex-row lg:gap-5">
          {reasons.map((r, i) => {
            const on = active === i;
            return (
              <li
                key={r.title}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl p-7 outline-none ring-1 transition-all duration-700 ease-out focus-visible:ring-2 focus-visible:ring-[#A9A92F] sm:p-10 lg:min-w-0 motion-reduce:transition-none ${
                  on
                    ? "bg-[#0B0D10] text-white ring-[#0B0D10] lg:flex-[2.4]"
                    : "bg-[#F4F5F7] text-[#0B0D10] ring-[#0B0D10]/5 lg:flex-1"
                }`}
              >
                {/* ghost ring */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 600 600"
                  className={`pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 text-[#C9CCD1] transition-opacity duration-700 ${on ? "opacity-[0.12]" : "opacity-0"}`}
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="300" cy="300" r="290" strokeWidth="10" />
                  <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
                </svg>

                <span
                  className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                    on ? "border-[#C9CCD1]/60" : "border-[#C9CCD1]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 ${
                      on ? "bg-[#A9A92F] text-[#0B0D10]" : "bg-[#0B0D10] text-[#A9A92F]"
                    }`}
                  >
                    {r.icon}
                  </span>
                </span>

                <div className="relative mt-auto pt-10">
                  <h3 style={serif} className="text-3xl font-medium leading-tight sm:text-4xl lg:text-[2rem]">
                    {r.title}
                  </h3>
                  {/* Text: always visible on small screens, fades in on the active panel on large ones */}
                  <p
                    className={`mt-4 max-w-md text-base leading-relaxed transition-all duration-700 lg:overflow-hidden ${
                      on
                        ? "text-[#C9CCD1] lg:max-h-[12rem] lg:translate-y-0 lg:opacity-100"
                        : "text-[#3B424C] lg:max-h-0 lg:translate-y-3 lg:opacity-0"
                    }`}
                  >
                    {r.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}