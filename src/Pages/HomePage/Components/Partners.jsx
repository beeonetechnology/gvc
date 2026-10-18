import React, { useState } from "react";
import voltas from "../../../assets/images/Partners/Voltas.png";
import hbk from "../../../assets/images/Partners/hbk.png";
import AAC from "../../../assets/images/Partners/AAC.png";
import alemadi from "../../../assets/images/Partners/alemadi-logo.png";
import carisun from "../../../assets/images/Partners/carisunqatar.jpeg";
import bravo from "../../../assets/images/Partners/barvo.png";
import greaterdoha from "../../../assets/images/Partners/greaterdoha.png";
import hbksf from "../../../assets/images/Partners/hbksf.png";
import bkGulf from "../../../assets/images/Partners/bk.png";
import elite from "../../../assets/images/Partners/elite.jpeg";
import AGA from "../../../assets/images/Partners/aga.png";
import logo from "../../../assets/images/Partners/logo.jpeg";
import mekdam from "../../../assets/images/Partners/mekdam.png";
import navayuga from "../../../assets/images/Partners/navayuga.png";
import powervac from "../../../assets/images/Partners/powervac.png";
import qbec from "../../../assets/images/Partners/qbec.png";
import QDSBG from "../../../assets/images/Partners/qd.png";
import shelter from "../../../assets/images/Partners/shelter.png";
import tadmur from "../../../assets/images/Partners/tadmur.png";
import takyeef from "../../../assets/images/Partners/takyeef.png";
import  upfc from '../../../assets/images/Partners/upfc.png';
const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };


const partners = [
  { name: "Voltas", logo: voltas },
  { name: "HBK", logo: hbk },
  { name: "Al Attiyah Construction", logo: AAC },
  { name: "Al Emadi", logo: alemadi },
  { name: "Carisun Qatar", logo: carisun },
  { name: "Bravo Engineering", logo: bravo },
  { name: "Greater Doha", logo: greaterdoha },
  { name: "HBK Specialties", logo: hbksf },
  { name: "BK Gulf", logo: bkGulf },
  { name: "Elite", logo: elite },
  { name: "AGA", logo: AGA },
  { name: "Partner", logo: logo },
  { name: "Mekdam", logo: mekdam },
  { name: "Navayuga", logo: navayuga },
  { name: "Powervac", logo: powervac },
  { name: "QBEC", logo: qbec },
  { name: "QDSBG", logo: QDSBG },
  { name: "Shelter", logo: shelter },
  { name: "Tadmur", logo: tadmur },
  { name: "Takyeef", logo: takyeef },
  { name: "UPFC", logo: upfc },
];

const rowA = partners.slice(0, 6);
const rowB = partners.slice(6);

/** Base duration for row A, in seconds. Row B is scaled to match this visual speed. */
const BASE_SPEED = 50;
const ROW_B_DURATION = (BASE_SPEED * rowB.length) / rowA.length;

/** Logo image with automatic fallback to a text wordmark */
function PartnerMark({ partner, decorative }) {
  const [failed, setFailed] = useState(false);

  if (!partner.logo || failed) {
    return (
      <span
        style={serif}
        className="line-clamp-2 text-center text-lg font-medium leading-tight text-[#0B0D10]/70 transition-colors duration-300 group-hover:text-[#0B0D10] sm:text-xl"
      >
        {partner.name}
      </span>
    );
  }

  return (
    <img
      src={partner.logo}
      alt={decorative ? "" : partner.name}
      loading="lazy"
      decoding="async"
      draggable="false"
      onError={() => setFailed(true)}
      className="gvc-logo max-h-full max-w-full object-contain"
    />
  );
}

function Tile({ partner, decorative }) {
  return (
    <div
      title={partner.name}
      className="group mr-3 flex h-[4.5rem] w-36 shrink-0 select-none items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-[#0B0D10]/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0B0D10]/10 hover:ring-[#A9A92F]/60 sm:mr-4 sm:h-24 sm:w-52 sm:p-5 lg:h-28 lg:w-60 lg:p-6"
    >
      <PartnerMark partner={partner} decorative={decorative} />
    </div>
  );
}

function MarqueeRow({ items, reverse = false, duration = 40 }) {
  // Repeat the list so one group is always wider than the screen.
  const group = [...items, ...items, ...items];
  return (
    <div className="gvc-marquee relative overflow-hidden py-2">
      <div
        className={`gvc-track ${reverse ? "gvc-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((g) => (
          <div key={g} className="flex shrink-0" aria-hidden={g === 1 ? "true" : undefined}>
            {group.map((p, i) => (
              <Tile key={`${g}-${p.name}-${i}`} partner={p} decorative={g === 1 || i >= items.length} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      style={sans}
      className="relative overflow-hidden bg-[#F4F5F7] py-16 text-[#0B0D10] sm:py-20 lg:py-28"
      aria-labelledby="partners-heading"
    >
      <style>{`
        @keyframes gvc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes gvc-marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .gvc-track { display: flex; width: max-content; animation: gvc-marquee 40s linear infinite; will-change: transform; }
        .gvc-track.gvc-reverse { animation-name: gvc-marquee-rev; }
        .gvc-marquee { -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); }
        .gvc-marquee:hover .gvc-track, .gvc-marquee:focus-within .gvc-track { animation-play-state: paused; }

        /* Logos: calm grey on small screens with hover, full colour on hover.
           Laptop / desktop (lg and up) always shows full colour.
           Touch devices have no hover, so they always show full colour. */
        .gvc-logo { transition: filter .3s ease, opacity .3s ease, transform .3s ease; }

        /* Small screens (below lg): grey by default on hover-capable devices */
        @media (max-width: 1023px) and (hover: hover) {
          .gvc-logo { filter: grayscale(1); opacity: .7; }
          .group:hover .gvc-logo { filter: none; opacity: 1; transform: scale(1.04); }
        }

        /* Laptop / desktop (lg and up): always full colour */
        @media (min-width: 1024px) {
          .gvc-logo { filter: none; opacity: 1; }
          .group:hover .gvc-logo { transform: scale(1.04); }
        }

        @media (prefers-reduced-motion: reduce) {
          .gvc-track { animation: none; }
          .gvc-marquee { overflow-x: auto; -webkit-mask-image: none; mask-image: none; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-[#A9A92F]/10 blur-3xl"
      />

      <div className="relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="inline-flex items-center gap-3 text-sm font-semibold text-[#4A80C4]">
            <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
            Working with the best
            <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
          </p>
          <h2
            id="partners-heading"
            style={serif}
            className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Our partners
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#3B424C]">
            Leading names in construction, engineering and facilities trust GVC to deliver.
          </p>
        </div>

        {/* Marquees — both rows scroll at the same visual speed */}
        <div className="mt-10 space-y-2 sm:mt-14 sm:space-y-3">
          <MarqueeRow items={rowA} duration={BASE_SPEED} />
          <MarqueeRow items={rowB} reverse duration={ROW_B_DURATION} />
        </div>
      </div>
    </section>
  );
}