import React from "react";
import { Link } from "react-router-dom";


const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const reasons = [
  {
    title: "Quality Materials",
    text: "We use high-quality materials, ensuring durability, reliability, and superior project outcomes.",
    icon: (
      <Icon>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </Icon>
    ),
  },
  {
    title: "Accredited",
    text: "We are an accredited company, ensuring quality, reliability, and industry-standard services.",
    icon: (
      <Icon>
        <circle cx="12" cy="9" r="6" />
        <path d="M9 9l2 2 4-4M8.5 14.5L7 21l5-3 5 3-1.5-6.5" />
      </Icon>
    ),
  },
  {
    title: "Trained Workers",
    text: "We provide trained workers, ensuring expertise, efficiency, and high-quality workmanship.",
    icon: (
      <Icon>
        <path d="M4 17h16M5 17v-2a7 7 0 0 1 14 0v2" />
        <path d="M12 8V5M9 5h6" />
      </Icon>
    ),
  },
  {
    title: "Time Availability",
    text: "We offer flexible time availability, ensuring reliable service whenever you need it.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </Icon>
    ),
  },
  {
    title: "Quick Response",
    text: "We ensure a quick response, providing fast and reliable service every time.",
    icon: (
      <Icon>
        <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z" />
        <path d="M12.5 8l-2.5 4h4l-2.5 4" />
      </Icon>
    ),
  },
  {
    title: "Cost-effective Services",
    text: "We provide cost-effective services, ensuring quality, efficiency, and affordability for every project.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.5a2.5 2 0 0 0-2.5-1.5c-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2a2.5 2 0 0 1-2.5-1.5M12 6v2M12 16v2" />
      </Icon>
    ),
  },
];

export default function WhyChooseUs({ ctaHref = "/contact-us" }) {
  return (
    <section
      id="why-us"
      style={sans}
      className="bg-white text-[#0B0D10]"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Dark intro panel */}
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0D10] p-8 text-white sm:p-12 lg:col-span-5 lg:p-14">
            <svg
              aria-hidden="true"
              viewBox="0 0 600 600"
              className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 text-[#C9CCD1] opacity-[0.12] sm:h-96 sm:w-96"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="300" cy="300" r="290" strokeWidth="10" />
              <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
            </svg>

            <div className="relative flex h-full flex-col">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
                <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
                Why choose us
              </p>
              <h2
                id="why-heading"
                style={serif}
                className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
              >
                Six reasons people choose us.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-[#C9CCD1]">
                Trained people, quality materials and a quick response, delivered at a fair price.
              </p>
              <Link
                to={ctaHref}
                className="mt-10 inline-flex items-center justify-center self-start rounded-full bg-[#A9A92F] px-7 py-3.5 text-sm font-semibold text-[#0B0D10] transition hover:bg-[#BDBD3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] lg:mt-auto"
              >
                Request a quote
              </Link>
            </div>
          </div>

          {/* Reasons */}
          <ul className="grid sm:grid-cols-2 sm:gap-x-12 lg:col-span-7">
            {reasons.map((r) => (
              <li
                key={r.title}
                className="group flex gap-5 border-b border-[#0B0D10]/10 py-7 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#C9CCD1]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0D10] text-[#A9A92F] transition-colors group-hover:bg-[#A9A92F] group-hover:text-[#0B0D10]">
                    {r.icon}
                  </span>
                </span>
                <div>
                  <h3 style={serif} className="text-xl font-medium sm:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#3B424C]">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}