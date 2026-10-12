import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../HomePage/Components/Navbar";
import Footer from "../HomePage/Components/Footer";
import { History, VisionMission } from "./Components/HistoryVisionMission";
import WhyChooseUsAbout from "./Components/WhyChooseUs";
import Whoweare from '../../assets/images/whoweare.jpg'
import company from '../../assets/images/companyimage.jpg'

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const PHONE = "+974 7724 2724";
const PHONE_TEL = "+97477242724";
const EMAIL = "goldenvillagegvc@gmail.com";

const Star = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.2 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z" />
  </svg>
);

const Icon = ({ children, className = "h-6 w-6" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
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

const solutions = ["Construction", "Maintenance", "Cleaning", "Workforce supply"];

const sectors = [
  {
    title: "Residential",
    text: "Homes and residential buildings.",
    icon: (
      <Icon>
        <path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6" />
      </Icon>
    ),
  },
  {
    title: "Commercial",
    text: "Offices and business premises.",
    icon: (
      <Icon>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      </Icon>
    ),
  },
  {
    title: "Industrial",
    text: "Sites, plants and industrial facilities.",
    icon: (
      <Icon>
        <path d="M3 21V10l6 4V10l6 4V6h6v15H3z" />
      </Icon>
    ),
  },
];

const strengths = [
  "A highly skilled team on every project",
  "Superior results with efficiency and professionalism",
  "The highest standards of quality and safety",
];

function Panel({ src, alt }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0B0D10]">
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="absolute -right-24 -top-24 h-80 w-80 text-[#C9CCD1] opacity-[0.1]"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="300" cy="300" r="290" strokeWidth="10" />
        <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
      </svg>

      <div
        className="flex h-44 w-44 items-center justify-center rounded-full border-[6px] border-[#C9CCD1] sm:h-52 sm:w-52"
        style={serif}
        aria-label="GVC"
      >
        <span className="text-5xl font-semibold text-[#A9A92F] sm:text-6xl">
          G
        </span>
        <span className="text-5xl font-semibold text-white sm:text-6xl">
          V
        </span>
        <span className="text-5xl font-semibold text-[#A9A92F] sm:text-6xl">
          C
        </span>
      </div>
    </div>
  );
}

export default function AboutPage({ companyImage, teamImage }) {
  return (
    <div id="top" style={sans} className="bg-[#F4F5F7] text-[#0B0D10]">
      <style>{`
        @keyframes gvc-rise {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes gvc-draw {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes gvc-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gvc-pop {
          from {
            opacity: 0;
            transform: scale(.88);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .gvc-rise {
          animation: gvc-rise .9s cubic-bezier(.22,1,.36,1) both;
        }

        .gvc-draw {
          transform-origin: left;
          animation: gvc-draw 1s cubic-bezier(.22,1,.36,1) .5s both;
        }

        .gvc-pop {
          animation: gvc-pop 1.1s cubic-bezier(.22,1,.36,1) .2s both;
        }

        .gvc-orbit {
          animation: gvc-spin 48s linear infinite;
        }

        .gvc-orbit-rev {
          animation: gvc-spin 70s linear infinite reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .gvc-rise,
          .gvc-draw,
          .gvc-pop,
          .gvc-orbit,
          .gvc-orbit-rev {
            animation: none;
          }
        }
      `}</style>

      <Navbar active="About" />

      {/* ===== Page header ===== */}
      <header
        className="relative overflow-hidden bg-[#0B0D10] text-white"
        aria-labelledby="about-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-[#4A80C4]/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-[22rem] w-[22rem] rounded-full bg-[#A9A92F]/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-32 pt-36 sm:px-8 sm:pb-36 sm:pt-44 lg:grid-cols-12 lg:px-12 lg:pb-44 lg:pt-48">
          <div className="lg:col-span-7">
            <nav
              aria-label="Breadcrumb"
              className="gvc-rise"
              style={{ animationDelay: ".05s" }}
            >
              <ol className="flex items-center gap-2 text-sm text-[#C9CCD1]">
                <li>
                  <Link
                    to="/"
                    className="transition hover:text-[#A9A92F] focus:outline-none focus-visible:underline"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">
                  <Star className="h-2.5 w-2.5 text-[#A9A92F]" />
                </li>

                <li
                  aria-current="page"
                  className="font-semibold text-white"
                >
                  About
                </li>
              </ol>
            </nav>

            <h1
              id="about-title"
              style={{ ...serif, animationDelay: ".15s" }}
              className="gvc-rise mt-6 text-6xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
            >
              About us
            </h1>

            <span
              aria-hidden="true"
              className="gvc-draw mt-7 block h-1 w-28 rounded-full bg-[#A9A92F]"
            />

            <p
              className="gvc-rise mt-7 max-w-xl text-base leading-relaxed text-[#C9CCD1] sm:text-lg"
              style={{ animationDelay: ".35s" }}
            >
              A leading contracting and manpower supply company, dedicated to
              delivering high-quality services across multiple industries.
            </p>
          </div>

          {/* Seal with orbiting stars */}
          <div
            className="hidden justify-center sm:flex lg:col-span-5 lg:justify-end"
            aria-hidden="true"
          >
            <div className="gvc-pop relative h-72 w-72 lg:h-[26rem] lg:w-[26rem]">
              <div className="absolute inset-0 rounded-full border-[10px] border-[#C9CCD1]/90" />

              <div className="absolute inset-6 rounded-full border border-white/20" />

              <div className="gvc-orbit absolute inset-0">
                <Star className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 text-[#4A80C4]" />
                <Star className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 text-[#4A80C4]" />
              </div>

              <div className="gvc-orbit-rev absolute inset-10 rounded-full border border-dashed border-[#A9A92F]/40">
                <Star className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A9A92F]" />
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center"
                style={serif}
              >
                <span className="text-6xl font-semibold text-[#A9A92F] lg:text-8xl">
                  G
                </span>
                <span className="text-6xl font-semibold text-white lg:text-8xl">
                  V
                </span>
                <span className="text-6xl font-semibold text-[#A9A92F] lg:text-8xl">
                  C
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ===== Sectors strip overlapping the header ===== */}
        <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-5 sm:-mt-20 sm:px-8 lg:px-12">
          <ul className="grid divide-y divide-[#0B0D10]/10 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-[#0B0D10]/15 ring-1 ring-[#0B0D10]/5 md:grid-cols-3 md:divide-x md:divide-y-0">
            {sectors.map((s) => (
              <li
                key={s.title}
                className="flex items-center gap-5 p-6 sm:p-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#C9CCD1]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0D10] text-[#A9A92F]">
                    {s.icon}
                  </span>
                </span>

                <div>
                  <h2
                    style={serif}
                    className="text-xl font-medium sm:text-2xl"
                  >
                    {s.title}
                  </h2>

                  <p className="mt-1 text-sm text-[#3B424C]">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== About company ===== */}
        <section
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
          aria-labelledby="company-heading"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0B0D10]/20 ring-1 ring-[#C9CCD1]/60">
                  <Panel
                    src={company}
                    alt="Golden Village Contracting at work"
                  />
                </div>

                <div className="absolute -bottom-6 right-4 rounded-2xl bg-[#A9A92F] px-6 py-4 text-[#0B0D10] shadow-xl sm:-right-4">
                  <p
                    style={serif}
                    className="text-xl font-medium leading-tight sm:text-2xl"
                  >
                    Quality, safety
                    <br />
                    and excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
                <span
                  className="h-px w-8 bg-[#4A80C4]"
                  aria-hidden="true"
                />
                About company
              </p>

              <h2
                id="company-heading"
                style={serif}
                className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
              >
                Golden Village Contracting (GVC)
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[#3B424C] sm:text-lg">
                Golden Village Contracting (GVC) is a leading contracting and
                manpower supply company dedicated to delivering high-quality
                services across multiple industries. With years of expertise
                and a commitment to excellence, we provide a wide range of
                solutions, including construction, maintenance, cleaning, and
                workforce supply.
              </p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {solutions.map((s) => (
                  <li
                    key={s}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold ring-1 ring-[#0B0D10]/10"
                  >
                    <Star className="h-3 w-3 text-[#A9A92F]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Who we are ===== */}
        <section className="bg-white" aria-labelledby="who-heading">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="order-2 lg:order-1 lg:col-span-6">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
                  <span
                    className="h-px w-8 bg-[#4A80C4]"
                    aria-hidden="true"
                  />
                  Who we are
                </p>

                <h2
                  id="who-heading"
                  style={serif}
                  className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
                >
                  Ready for the demands of every client.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#3B424C] sm:text-lg">
                  At GVC, we take pride in our ability to meet the dynamic
                  demands of our clients. Whether it's construction projects,
                  facility maintenance, or cleaning services, our highly
                  skilled team ensures superior results with efficiency and
                  professionalism. We cater to residential, commercial, and
                  industrial sectors, ensuring every project meets the highest
                  standards of quality and safety.
                </p>

                <ul className="mt-8 space-y-4">
                  {strengths.map((s) => (
                    <li key={s} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B0D10] text-[#A9A92F]">
                        <Icon className="h-4 w-4">
                          <path d="M5 12l5 5 9-10" />
                        </Icon>
                      </span>

                      <span className="text-base text-[#0B0D10]">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-6">
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0B0D10]/20 ring-1 ring-[#C9CCD1]/60">
                  <Panel
                    src={Whoweare}
                    alt="The Golden Village Contracting team"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <History />
        <VisionMission />
        <WhyChooseUsAbout />

        {/* ===== Need help ===== */}
        <section
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
          aria-labelledby="help-heading"
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0D10] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <svg
              aria-hidden="true"
              viewBox="0 0 600 600"
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 text-[#C9CCD1] opacity-[0.1]"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="300" cy="300" r="290" strokeWidth="10" />
              <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
            </svg>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2
                  id="help-heading"
                  style={serif}
                  className="text-3xl font-medium sm:text-4xl"
                >
                  Need help? Contact us.
                </h2>

                <p className="mt-3 max-w-md text-[#C9CCD1]">
                  Call or write to us and we will get back to you.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A9A92F] px-7 py-3.5 text-sm font-semibold text-[#0B0D10] transition hover:bg-[#BDBD3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
                >
                  <Icon className="h-4 w-4">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </Icon>
                  {PHONE}
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold transition hover:border-[#A9A92F] hover:text-[#A9A92F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
                >
                  <Icon className="h-4 w-4">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </Icon>
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}