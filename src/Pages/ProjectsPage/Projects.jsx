import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../HomePage/Components/Navbar";
import PageHeader from "../ServicesPage/Components/PageHeader";
import Footer from "../HomePage/Components/Footer";
import pro1 from "../../assets/images/pro1.jpg";
import pro2 from "../../assets/images/pro2.png";
import pro3 from "../../assets/images/pro3.png";
import pro4 from "../../assets/images/pro4.jpg";
import pro5 from "../../assets/images/pro5.jpg";
import pro6 from "../../assets/images/pro6.jpg";
import pro7 from "../../assets/images/pro7.jpg";
import pro8 from "../../assets/images/pro8.jpg";
import pro9 from "../../assets/images/pro9.jpg";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const projects = [
  { id: 1, image: pro1 },
  { id: 2, image: pro2 },
  { id: 3, image: pro3 },
  { id: 4, image: pro4 },
  { id: 5, image: pro5 },
  { id: 6, image: pro6 },
  { id: 7, image: pro7 },
  { id: 8, image: pro8 },
  { id: 9, image: pro9 },
];

const aspects = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square"];

function Visual({ project, className = "", fit = "object-cover" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !project.image) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1B2027] to-[#0B0D10] ${className}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          className="h-40 w-40 text-[#C9CCD1] opacity-10"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="300" cy="300" r="290" strokeWidth="12" />
          <circle cx="300" cy="300" r="250" strokeWidth="2" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full ${fit} ${className}`}
    />
  );
}

function Viewer({ items, index, onClose, onMove }) {
  const p = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onMove]);

  const btn =
    "flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#A9A92F] hover:bg-[#A9A92F] hover:text-[#0B0D10] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F]";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="gvc-fade fixed inset-0 z-[60] flex flex-col bg-[#0B0D10]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-end px-5 py-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className={btn}
          autoFocus
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center gap-4 px-4 pb-6 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => onMove(-1)}
          aria-label="Previous image"
          className={`${btn} hidden shrink-0 sm:flex`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>

        <div
          key={p.id}
          className="gvc-pop-in h-full max-h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl ring-1 ring-white/10"
        >
          <Visual project={p} fit="object-contain bg-[#0B0D10]" />
        </div>

        <button
          type="button"
          onClick={() => onMove(1)}
          aria-label="Next image"
          className={`${btn} hidden shrink-0 sm:flex`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div
        className="flex justify-center gap-3 pb-6 sm:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => onMove(-1)}
          aria-label="Previous image"
          className={btn}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => onMove(1)}
          aria-label="Next image"
          className={btn}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [open, setOpen] = useState(null);

  const move = (d) =>
    setOpen((i) => (i === null ? i : (i + d + projects.length) % projects.length));
  const close = () => setOpen(null);

  return (
    <div id="top" style={sans} className="bg-[#F4F5F7] text-[#0B0D10]">
      <style>{`
        @keyframes gvc-fade-up { from { opacity: 0; transform: translateY(22px) scale(.98); } to { opacity: 1; transform: none; } }
        @keyframes gvc-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gvc-pop-in { from { opacity: 0; transform: scale(.94); } to { opacity: 1; transform: none; } }
        .gvc-item { animation: gvc-fade-up .6s cubic-bezier(.22,1,.36,1) both; }
        .gvc-fade { animation: gvc-fade .3s ease both; }
        .gvc-pop-in { animation: gvc-pop-in .45s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .gvc-item, .gvc-fade, .gvc-pop-in { animation: none; } }
      `}</style>

      <Navbar active="Projects" />
      <PageHeader
        title="Our projects"
        current="Projects"
        description="Inspiration for your next project."
      />

      <main>
        <section
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
          aria-label="Project gallery"
        >
          <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
            {projects.map((p, i) => (
              <li
                key={p.id}
                className="gvc-item mb-5 break-inside-avoid lg:mb-6"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`View project ${i + 1}`}
                  className="group relative block w-full overflow-hidden rounded-3xl shadow-lg shadow-[#0B0D10]/10 ring-1 ring-[#0B0D10]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2"
                >
                  <div className={`${aspects[i % aspects.length]} w-full overflow-hidden`}>
                    <Visual
                      project={p}
                      className="transition duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section
          className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12"
          aria-labelledby="projects-cta"
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0D10] px-6 py-12 text-white sm:px-12 sm:py-14">
            <svg
              aria-hidden="true"
              viewBox="0 0 600 600"
              className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 text-[#C9CCD1] opacity-[0.1]"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="300" cy="300" r="290" strokeWidth="10" />
              <circle cx="300" cy="300" r="250" strokeWidth="1.5" />
            </svg>
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2
                  id="projects-cta"
                  style={serif}
                  className="text-3xl font-medium sm:text-4xl"
                >
                  Have a project in mind?
                </h2>
                <p className="mt-2 text-[#C9CCD1]">
                  Tell us about it and we will get back to you.
                </p>
              </div>
              <Link
                to="/contact-us"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#A9A92F] px-8 py-4 text-sm font-semibold text-[#0B0D10] transition hover:bg-[#BDBD3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {open !== null && projects[open] && (
        <Viewer
          items={projects}
          index={open}
          onClose={close}
          onMove={move}
        />
      )}
    </div>
  );
}