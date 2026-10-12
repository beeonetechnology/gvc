import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../HomePage/Components/Navbar";
import PageHeader from "./Components/PageHeader";
import Footer from "../HomePage/Components/Footer";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const contracting = [
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

const manpower = [
  {
    title: "Manpower Supply",
    text: "Golden Village Contracting's Manpower Department is equipped with the requisite expertise and wide experience.",
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
    title: "Recruitment Services",
    text: "We offer skilled and unskilled recruitment services, ensuring reliability, efficiency, and expertise.",
    icon: (
      <Icon>
        <circle cx="10" cy="8" r="3.5" />
        <path d="M3.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M19 8v6M16 11h6" />
      </Icon>
    ),
  },
  {
    title: "Payroll Management",
    text: "We provide efficient payroll management services with accuracy and reliability.",
    icon: (
      <Icon>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 12h.01M18 12h.01" />
      </Icon>
    ),
  },
  {
    title: "HR Consulting",
    text: "We offer expert HR consulting services for effective workforce management solutions.",
    icon: (
      <Icon>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </Icon>
    ),
  },
];

function ServiceList({ items, dark = false }) {
  const [open, setOpen] = useState(0);
  const line = dark ? "border-white/15" : "border-[#0B0D10]/10";

  return (
    <ul className={`border-t ${line}`}>
      {items.map((s, i) => {
        const isOpen = open === i;
        const panelId = `${dark ? "dark" : "light"}-service-${i}`;
        return (
          <li key={s.title} className={`group border-b ${line}`}>
            {/* ===== MOBILE: tap-to-open accordion ===== */}
            <div
              className={`my-2 rounded-2xl px-3 transition-colors duration-300 sm:hidden ${
                isOpen
                  ? dark
                    ? "bg-white/[0.07]"
                    : "bg-white shadow-md shadow-[#0B0D10]/5 ring-1 ring-[#0B0D10]/5"
                  : ""
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 rounded-xl py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F]"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${dark ? "border-white/30" : "border-[#C9CCD1]"}`}>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#A9A92F] text-[#0B0D10]"
                        : dark
                        ? "bg-[#A9A92F]/15 text-[#A9A92F]"
                        : "bg-[#0B0D10] text-[#A9A92F]"
                    }`}
                  >
                    {s.icon}
                  </span>
                </span>
                <span style={serif} className={`flex-1 text-xl font-medium leading-snug ${dark ? "text-white" : "text-[#0B0D10]"}`}>
                  {s.title}
                </span>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  isOpen ? "border-[#A9A92F] bg-[#A9A92F] text-[#0B0D10]" : dark ? "border-white/30 text-white" : "border-[#0B0D10]/20 text-[#0B0D10]"
                }`}>
                  <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-label={s.title}
                className={`grid transition-all duration-500 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className={`pl-16 text-[15px] leading-relaxed ${dark ? "text-[#C9CCD1]" : "text-[#3B424C]"}`}>{s.text}</p>
               
                </div>
              </div>
            </div>

            {/* ===== TABLET / DESKTOP: sweeping-fill row ===== */}
            <div className="relative hidden overflow-hidden sm:block">
              <span
                aria-hidden="true"
                className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-focus-within:scale-x-100 group-hover:scale-x-100 motion-reduce:transition-none ${
                  dark ? "bg-[#A9A92F]" : "bg-[#0B0D10]"
                }`}
              />
              <div className="relative flex items-center gap-8 px-6 py-8">
                <span
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                    dark ? "border-white/30 group-hover:border-[#0B0D10]/40" : "border-[#C9CCD1] group-hover:border-white/30"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 ${
                      dark
                        ? "bg-[#A9A92F] text-[#0B0D10] group-hover:bg-[#0B0D10] group-hover:text-[#A9A92F]"
                        : "bg-[#0B0D10] text-[#A9A92F] group-hover:bg-[#A9A92F] group-hover:text-[#0B0D10]"
                    }`}
                  >
                    {s.icon}
                  </span>
                </span>

                <div className="min-w-0 flex-1 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
                  <h3
                    style={serif}
                    className={`text-3xl font-medium leading-tight transition-colors duration-500 lg:col-span-5 ${
                      dark ? "text-white group-hover:text-[#0B0D10]" : "text-[#0B0D10] group-hover:text-white"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 text-[15px] leading-relaxed transition-colors duration-500 lg:col-span-7 lg:mt-0 ${
                      dark ? "text-[#C9CCD1] group-hover:text-[#0B0D10]/80" : "text-[#3B424C] group-hover:text-[#C9CCD1]"
                    }`}
                  >
                    {s.text}
                  </p>
                </div>

              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

const SectionHead = ({ label, title, dark }) => (
  <div className="mb-10 max-w-2xl lg:mb-14">
    <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
      <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
      {label}
    </p>
    <h2 style={serif} className={`mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl ${dark ? "text-white" : "text-[#0B0D10]"}`}>
      {title}
    </h2>
  </div>
);

export default function ServicesPage() {
  return (
    <div id="top" style={sans} className="bg-[#F4F5F7] text-[#0B0D10]">
      <Navbar active="Services" />
      <PageHeader title="Our services" current="Services" description="Trust the experience." />

      <main>
        {/* Contracting */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28" aria-label="Contracting and maintenance services">
          <SectionHead label="Contracting & maintenance" title="Skilled work, finished properly." />
          <ServiceList items={contracting} />
        </section>

        {/* Manpower */}
        <section className="relative overflow-hidden bg-[#0B0D10]" aria-label="Manpower and HR services">
          <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-56 -top-56 h-[40rem] w-[40rem] text-[#C9CCD1] opacity-[0.06]" fill="none" stroke="currentColor">
            <circle cx="300" cy="300" r="290" strokeWidth="10" />
            <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
          </svg>
          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <SectionHead label="Manpower & HR" title="The people behind every project." dark />
            <ServiceList items={manpower} dark />
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="services-cta">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white px-6 py-10 ring-1 ring-[#0B0D10]/5 sm:px-12 md:flex-row md:items-center">
            <div>
              <h2 id="services-cta" style={serif} className="text-3xl font-medium sm:text-4xl">
                Need a team for your next project?
              </h2>
              <p className="mt-2 text-[#3B424C]">Tell us what you need and we will get back to you.</p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0B0D10] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#1B2027] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2"
            >
              Request a quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}