import React, { useState } from "react";

const serif = { fontFamily: "'Newsreader', Georgia, serif" };
const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

const EMAILS = ["goldenvillagegvc@gmail.com", "gvcqatar@gmail.com"];
const PHONES = [
  { label: "+974 6622 2725", tel: "+97466222725" },
  { label: "+974 7724 2724", tel: "+97477242724" },
  { label: "+974 7724 2711", tel: "+97477242711" },
];
const WHATSAPP = "https://wa.me/97466222725";

const serviceOptions = [
  "Electrical Works",
  "Plumbing Works",
  "Painting Works",
  "Cleaning Services",
  "Carpentry Service",
  "Partitions and Ceilings",
  "Manpower Supply",
  "Recruitment Services",
  "Payroll Management",
  "HR Consulting",
  "Other",
];

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

const IconRing = ({ children }) => (
  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#C9CCD1]">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0D10] text-[#A9A92F]">
      {children}
    </span>
  </span>
);

const fieldClass =
  "mt-2 block w-full rounded-xl border border-[#0B0D10]/15 bg-white px-4 py-3.5 text-[15px] text-[#0B0D10] placeholder:text-[#0B0D10]/40 transition focus:border-[#A9A92F] focus:outline-none focus:ring-2 focus:ring-[#A9A92F]/40";

export default function Contact({ onSubmit }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      if (onSubmit) {
        await onSubmit(data);
        form.reset();
      } else {
        const subject = encodeURIComponent(
          `Enquiry: ${data.service || "General"} - ${data.name}`
        );
        const body = encodeURIComponent(
          `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`
        );
        window.location.href = `mailto:${EMAILS.join(",")}?subject=${subject}&body=${body}`;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={sans}
      className="relative overflow-hidden bg-white text-[#0B0D10]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A80C4]">
            <span className="h-px w-8 bg-[#4A80C4]" aria-hidden="true" />
            Contact us
          </p>
          <h2
            id="contact-heading"
            style={serif}
            className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Let's talk about your project.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          {/* Head office */}
          <div className="lg:col-span-5">
            <h3 style={serif} className="text-2xl font-medium sm:text-3xl">
              Head office
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#3B424C]">
              At Golden Village Contracting, we provide exceptional services across various
              industries, including contracting, maintenance, and cleaning. Our team is committed
              to delivering quality and efficiency.
            </p>

            <ul className="mt-9 space-y-7">
              <li className="flex gap-5">
                <IconRing>
                  <Icon>
                    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </Icon>
                </IconRing>
                <div>
                  <p className="text-sm font-semibold text-[#4A80C4]">Address</p>
                  <p className="mt-1 text-lg leading-snug">
                    P.O. Box 14335
                    <br />
                    Doha, Qatar
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <IconRing>
                  <Icon>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </Icon>
                </IconRing>
                <div>
                  <p className="text-sm font-semibold text-[#4A80C4]">Phone</p>
                  <ul className="mt-1 space-y-0.5 text-lg">
                    {PHONES.map((p) => (
                      <li key={p.tel}>
                        <a
                          href={`tel:${p.tel}`}
                          className="transition hover:text-[#4A80C4] focus:outline-none focus-visible:underline"
                        >
                          {p.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex gap-5">
                <IconRing>
                  <Icon>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </Icon>
                </IconRing>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#4A80C4]">Email</p>
                  <ul className="mt-1 space-y-0.5 text-lg">
                    {EMAILS.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          className="block break-all transition hover:text-[#4A80C4] focus:outline-none focus-visible:underline"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0B0D10] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1B2027] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9A92F] focus-visible:ring-offset-2"
            >
              <Icon>
                <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z" />
              </Icon>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-[#F4F5F7] p-6 ring-1 ring-[#0B0D10]/5 sm:p-10"
              aria-describedby="form-status"
            >
              <h3 style={serif} className="text-2xl font-medium sm:text-3xl">
                Send us a message
              </h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+974"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-semibold">
                    Service
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      className={`${fieldClass} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 24 24"
                      className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-[#0B0D10]/60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project"
                    className={`${fieldClass} resize-y`}
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-full bg-[#A9A92F] px-8 py-4 text-sm font-semibold text-[#0B0D10] transition hover:bg-[#BDBD3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0D10] focus-visible:ring-offset-2 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                <p
                  id="form-status"
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${status === "error" ? "text-red-700" : "text-[#3B424C]"}`}
                >
                  {status === "sent" && "Thank you. We will get back to you shortly."}
                  {status === "error" &&
                    "Something went wrong. Please call or email us instead."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}