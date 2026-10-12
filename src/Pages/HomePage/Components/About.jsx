import React from "react";
import { Link } from "react-router-dom";
import aboutUsImage from "../../../assets/images/about-us.jpeg";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const values = [
  {
    title: "Quality",
    text: "Careful work, checked against the standard you expect.",
  },
  {
    title: "Efficiency",
    text: "Right people, right place, delivered on schedule.",
  },
  {
    title: "Reliability",
    text: "A partner you can count on from first request to handover.",
  },
];

const Star = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.2 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z" />
  </svg>
);

export default function AboutUs({ ctaHref = "/contact-us" }) {
  return (
    <section
      id="about"
      style={sans}
      className="relative overflow-hidden bg-[#F4F5F7] text-[#0B0D10]"
      aria-labelledby="about-heading"
    >
      {/* soft background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#A9A92F]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        {/* ---------- Top: story + visual ---------- */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
              <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
              About the company
            </p>

            <h2
              id="about-heading"
              style={serif}
              className="mt-5 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Building, maintaining and staffing the places people rely on.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#3B424C] sm:text-lg">
              <span className="font-semibold text-[#0B0D10]">
                Golden Village Contracting (GVC)
              </span>{" "}
              is a premier contracting and manpower supply company, offering
              skilled and unskilled workforce solutions to diverse industries.
              With a strong commitment to quality, efficiency and reliability,
              we provide top-tier services across construction, maintenance and
              cleaning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#0B0D10] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1B2027] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2"
              >
                Request a quote
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#0B0D10] shadow-2xl shadow-[#0B0D10]/20 ring-1 ring-[#C9CCD1]/60">
                <img
                  src={aboutUsImage}
                  alt="Golden Village Contracting construction site"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Dark overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/45 via-transparent to-transparent" />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white p-4 shadow-xl shadow-[#0B0D10]/10 ring-1 ring-[#0B0D10]/5 sm:left-auto sm:right-[-1rem] sm:max-w-[16rem]">
                <p className="text-sm font-semibold">
                  Skilled &amp; unskilled workforce
                </p>

                <p className="mt-1 text-sm leading-snug text-[#3B424C]">
                  One partner for the people your project needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Commitments ---------- */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#0B0D10] px-6 py-10 text-white sm:mt-20 sm:px-10 sm:py-12 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h3 style={serif} className="text-2xl font-medium sm:text-3xl">
                Our commitment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#C9CCD1]">
                Every project, large or small, is held to the same three
                standards.
              </p>
            </div>

            <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
              {values.map((v) => (
                <li key={v.title} className="border-t border-white/15 pt-5">
                  <div className="flex items-center gap-2 text-[#A9A92F]">
                    <Star className="h-3.5 w-3.5" />

                    <h4 className="text-base font-semibold text-white">
                      {v.title}
                    </h4>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-[#C9CCD1]">
                    {v.text}
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