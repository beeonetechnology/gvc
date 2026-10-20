import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../assets/images/logo1.png";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
];

const services = [
  { label: "Electrical Works" },
  { label: "Plumbing Works" },
  { label: "Painting Works" },
  { label: "Cleaning Services" },
  { label: "Carpentry Service" },
  { label: "Partitions and Ceilings" },
  { label: "Manpower Supply" },
  { label: "Recruitment Services" },
  { label: "Payroll Management" },
];

const EMAILS = ["marketing@gvcqatar.com"];

const linkClass =
  "inline-block text-[15px] text-[#C9CCD1] transition hover:translate-x-1 hover:text-[#A9A92F] focus:outline-none focus-visible:text-[#A9A92F] focus-visible:underline motion-reduce:transition-none motion-reduce:hover:translate-x-0";

const Star = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.2 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z" />
  </svg>
);

const ColumnTitle = ({ children }) => (
  <h3 style={serif} className="flex items-center gap-2 text-xl font-medium text-white">
    <Star className="h-3 w-3 text-[#A9A92F]" />
    {children}
  </h3>
);

export default function Footer({ poweredByHref }) {
  const logo = logoImage;
  return (
    <footer style={sans} className="relative overflow-hidden bg-[#0B0D10] text-white">
      {/* ring motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -bottom-56 -right-56 h-[40rem] w-[40rem] text-[#C9CCD1] opacity-[0.06]"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="300" cy="300" r="290" strokeWidth="10" />
        <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* About */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
              aria-label="Golden Village Contracting home"
            >
              {logo ? (
               <img
  src={logo}
  alt="Golden Village Contracting"
  className="h-14 w-auto max-w-[220px] object-contain sm:h-16"
/>
              ) : (
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#C9CCD1]"
                  style={serif}
                  aria-hidden="true"
                >
                  <span className="text-xl font-semibold text-[#A9A92F]">G</span>
                  <span className="text-xl font-semibold text-white">V</span>
                  <span className="text-xl font-semibold text-[#A9A92F]">C</span>
                </span>
              )}
              <span>
                <span style={serif} className="block text-xl font-medium leading-tight">
                  Golden Village Contracting
                </span>
                <span className="mt-0.5 block text-xs text-[#C9CCD1]">
                  Real Estate &amp; Cleaning W.L.L.
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#C9CCD1]">
              <span className="font-semibold text-white">GVC</span> is a premier contracting and manpower
              supply company, offering skilled and unskilled workforce solutions to diverse industries.
            </p>

            <address className="mt-6 space-y-1 text-[15px] not-italic text-[#C9CCD1]">
              <p>P.O. Box 14335, Doha, Qatar</p>
              <p>
                <a href="tel:+97466222725" className="transition hover:text-[#A9A92F]">
                  +974 6622 2725
                </a>
              </p>
              {EMAILS.map((email) => (
                <p key={email}>
                  <a href={`mailto:${email}`} className="break-all transition hover:text-[#A9A92F]">
                    {email}
                  </a>
                </p>
              ))}
            </address>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-3 lg:pl-8" aria-label="Quick links">
            <ColumnTitle>Quick links</ColumnTitle>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="lg:col-span-5" aria-label="Our services">
            <ColumnTitle>Our services</ColumnTitle>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {services.map((l) => (
                <li key={l.label} className="text-[15px] text-[#C9CCD1]">
                  {l.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 py-8 sm:mt-16 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2 text-sm text-[#C9CCD1] sm:gap-1">
            <p>&copy; {new Date().getFullYear()} Golden Village Contracting. All rights reserved.</p>
        
          </div>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
          >
            Back to top
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#A9A92F] group-hover:bg-[#A9A92F] group-hover:text-[#0B0D10]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 19V5M6 11l6-6 6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}