import React, { useState } from "react";
import manpowerImage from "../../../assets/images/manpower-supply.jpg";
import recruitmentImage from "../../../assets/images/recruitment-services.jpg";
import payrollImage from "../../../assets/images/payroll-management.jpg";
import hrImage from "../../../assets/images/hr-consulting.jpg";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
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

const offers = [
  {
    key: "manpower",
    title: "Manpower Supply",
    text: "Golden Village Contracting's Manpower Department is equipped with the requisite expertise and wide experience.",
    image: manpowerImage,
    icon: (
      <Icon>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 14.5a5 5 0 0 1 5 5.5" />
      </Icon>
    ),
  },
  {
    key: "recruitment",
    title: "Recruitment Services",
    text: "We offer skilled and unskilled recruitment services, ensuring reliability, efficiency, and expertise.",
    image: recruitmentImage,
    icon: (
      <Icon>
        <circle cx="10" cy="8" r="3.5" />
        <path d="M3.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M19 8v6M16 11h6" />
      </Icon>
    ),
  },
  {
    key: "payroll",
    title: "Payroll Management",
    text: "We provide efficient payroll management services with accuracy and reliability.",
    image: payrollImage,
    icon: (
      <Icon>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 12h.01M18 12h.01" />
      </Icon>
    ),
  },
  {
    key: "hr",
    title: "HR Consulting",
    text: "We offer expert HR consulting services for effective workforce management solutions.",
    image: hrImage,
    icon: (
      <Icon>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </Icon>
    ),
  },
];

function CardImage({ src, alt, icon }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1B2027] to-[#0B0D10] text-[#A9A92F]/60">
        <div className="scale-[2.5]">{icon}</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
    />
  );
}

export default function WhatWeOffer({
  images = {},
  ctaHref = "#contact",
}) {
  return (
    <section
      id="offer"
      style={sans}
      className="relative overflow-x-clip bg-[#0B0D10] text-white"
      aria-labelledby="offer-heading"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-[#A9A92F]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
              <span
                className="h-px w-8 bg-[#4A80C4]"
                aria-hidden="true"
              />
              What we offer
            </p>

            <h2
              id="offer-heading"
              style={serif}
              className="mt-5 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
            >
              The people behind every project.
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-[#C9CCD1] lg:pb-2">
            Workforce solutions from hiring to payroll, so you can focus on
            running your business.
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-12 flex flex-col gap-5 pb-4 md:grid md:grid-cols-2 md:gap-6 md:pb-0 lg:mt-16 lg:gap-8">
          {offers.map((o, i) => (
            <li
              key={o.key}
              className="sticky md:static"
              style={{
                top: `calc(5.5rem + ${i * 0.75}rem)`,
              }}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#14181D] shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-300 hover:ring-[#A9A92F]/60 md:shadow-none">

                {/* Image */}
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <CardImage
                    src={images[o.key] || o.image}
                    alt={o.title}
                    icon={o.icon}
                  />

                  {/* Mobile counter */}
                  <span className="absolute left-5 top-5 rounded-full bg-[#0B0D10]/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur md:hidden">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(offers.length).padStart(2, "0")}
                  </span>

                  {/* Image overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#14181D] via-transparent to-transparent"
                  />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#A9A92F] text-[#0B0D10] shadow-lg sm:left-7">
                    {o.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 pt-5 sm:p-8 sm:pt-6">
                  <h3
                    style={serif}
                    className="text-2xl font-medium sm:text-[1.5rem]"
                  >
                    {o.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#C9CCD1]">
                    {o.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}