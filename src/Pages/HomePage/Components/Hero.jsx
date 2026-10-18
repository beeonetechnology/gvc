import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../../../assets/images/hero.jpeg";

const EASE = [0.22, 1, 0.36, 1];

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
  >
    <path
      d="M2 8h11M9 3.5 13.5 8 9 12.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const btnBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold no-underline transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      style={sans}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#0B0D10]"
    >
      {/* Background image */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0 bg-[url('images/hero.jpg')] bg-cover bg-[center_70%] bg-no-repeat"
      />

      {/* Overlays (ink black from the logo) */}
      {/* Background image */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0 bg-cover bg-[center_70%] bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B0D10]/35" />

      {/* Content */}
      < div className="relative z-[2] mx-auto w-full max-w-7xl px-5 pb-44 sm:px-8 md:pb-48 lg:pb-60">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="mb-2 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#A9A92F]"
        >
          <span className="h-px w-8 bg-[#A9A92F]" aria-hidden="true" />
          Doha, Qatar
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            style={serif}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="mb-8 text-[clamp(120px,20vw,190px)] font-medium leading-[0.9] tracking-[-0.04em] text-white"
          >
            GVC
          </motion.h1>
        </div>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mb-10 max-w-[460px] text-[17.5px] leading-relaxed text-[#C9CCD1]"
        >
          Golden Village Contracting — a premier contracting and manpower supply
          company delivering quality, efficiency, and reliability across Qatar.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            to="/about"
            className={`${btnBase} bg-[#A9A92F] text-[#0B0D10] hover:bg-[#BDBD3A]`}
          >
            Discover GVC <ArrowIcon />
          </Link>
     
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1, ease: EASE }}
        className="absolute bottom-6 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#C9CCD1]/70 sm:flex"
      >
        <span>Scroll</span>
        <motion.i
          animate={reduce ? { scaleY: 1 } : { scaleY: [0, 1, 0], originY: 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
          className="block h-[42px] w-px bg-gradient-to-b from-[#A9A92F] to-transparent"
        />
      </motion.div>
    </section>
  );
}
