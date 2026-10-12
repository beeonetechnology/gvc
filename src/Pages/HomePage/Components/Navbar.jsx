import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact-us" },
];

const linkBase =
  "relative pb-1 text-[13.5px] font-medium uppercase tracking-[0.16em] no-underline transition-opacity " +
  "after:absolute after:bottom-0 after:left-0 after:right-[0.16em] after:h-px after:origin-left after:bg-current " +
  "after:transition-transform after:content-['']";

const linkActive = "opacity-100 after:scale-x-100";
const linkIdle =
  "opacity-80 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100";

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 60);
    setHidden(latest > prev && latest > 150);
  });

  const textColor = "#ffffff";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 px-6 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0c0c10]/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <motion.div
        animate={{ height: scrolled ? 64 : 86 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mx-auto grid max-w-[1506px] grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]"
      >
        {/* Logo */}
        <MotionLink
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          to="/"
          aria-label="GVC home"
          style={{ color: textColor }}
          className="justify-self-start text-[22px] font-extrabold tracking-[-0.06em] no-underline"
        >
          GVC
        </MotionLink>

        {/* Desktop links */}
        <nav
          aria-label="Primary"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col items-start gap-5 bg-[#0c0c10]/95 px-6 py-7 backdrop-blur-md md:static md:flex md:flex-row md:gap-10 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <MotionLink
                key={to}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
                to={to}
                onClick={() => setOpen(false)}
                style={{ color: textColor }}
                className={`${linkBase} ${
                  isActive ? linkActive : linkIdle
                }`}
              >
                {label}
              </MotionLink>
            );
          })}
       
        </nav>

     

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-[60] flex h-8 w-8 flex-col justify-center items-end gap-[7px] p-2 md:hidden"
        >
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              rotate: open ? 45 : 0,
              y: open ? 4 : 0,
            }}
            transition={{ duration: 0.5, delay: open ? 0 : 1.1, ease: EASE }}
            style={{ originX: 1, backgroundColor: textColor }}
            className="block h-[1.5px] w-6"
          />
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              rotate: open ? -45 : 0,
              y: open ? -4 : 0,
            }}
            transition={{ duration: 0.5, delay: open ? 0 : 1.2, ease: EASE }}
            style={{ originX: 1, backgroundColor: textColor }}
            className="block h-[1.5px] w-6"
          />
        </button>
      </motion.div>
    </motion.header>
  );
}