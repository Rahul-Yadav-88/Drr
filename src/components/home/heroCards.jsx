
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Stethoscope,
  PhoneCall,
  ArrowUpRight,
  Mail,
  HeartPulse,
  Sparkles,
  Clock3,
} from "lucide-react";

const cards = [
  {
    id: "location",
    number: "01",
    label: "FIND US",
    title: "Hospital Location",
    subtitle: "Quality pediatric care in Dubai.",
    description:
      "Find our healthcare location in Dubai, UAE, for professional pediatric consultations and comprehensive child healthcare services.",
    icon: MapPin,
    color: "blue",
    action: "View Location",
    href: "#location-section",
    button: true,
  },
  {
    id: "practice",
    number: "02",
    label: "OUR EXPERTISE",
    title: "Current Practice",
    subtitle: "Consultant Pediatrician",
    description:
      "Providing dedicated pediatric healthcare with a focus on children's health, wellbeing, preventive care and personalized medical attention.",
    icon: Stethoscope,
    color: "cyan",
    button: false,
  },
  {
    id: "contact",
    number: "03",
    label: "GET IN TOUCH",
    title: "Contact Details",
    subtitle: "We're here to help.",
    description:
      "For appointments, pediatric consultations and general enquiries, get in touch using the contact details below.",
    icon: PhoneCall,
    color: "violet",
    action: "Call Now",
    href: "tel:+971505870574",
    phone: "+971 50 587 0574",
    email: "seemagauravansh@gmail.com",
    button: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const themes = {
  blue: {
    icon: "bg-blue-500/10 text-blue-400 border-blue-400/20",
    accent: "text-blue-400",
    button: "bg-blue-600 hover:bg-blue-500",
    glow: "bg-blue-500",
    line: "from-blue-500 to-cyan-400",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400 border-cyan-400/20",
    accent: "text-cyan-400",
    button: "bg-cyan-600 hover:bg-cyan-500",
    glow: "bg-cyan-500",
    line: "from-cyan-400 to-teal-400",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-400 border-violet-400/20",
    accent: "text-violet-400",
    button: "bg-violet-600 hover:bg-violet-500",
    glow: "bg-violet-500",
    line: "from-violet-500 to-fuchsia-400",
  },
};

export default function HeroCards() {
  return (
    <section
      aria-labelledby="healthcare-heading"
      className="relative isolate overflow-hidden bg-[#070d19] py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.09] blur-[150px]" />
        <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/[0.09] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                Healthcare & Patient Support
              </span>
            </div>

            <h2
              id="healthcare-heading"
              className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your Child's Health,
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Our Priority.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover our pediatric practice, hospital location and
              contact information for accessible healthcare support
              in Dubai, UAE.
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 shadow-[0_0_60px_rgba(34,211,238,0.08)] md:flex"
          >
            <HeartPulse className="h-12 w-12 text-cyan-400" strokeWidth={1.4} />
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const theme = themes[card.color];

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -10 }}
                className="group relative flex min-h-[440px] flex-col overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#101a2a]/80 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-9"
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full ${theme.glow} opacity-[0.07] blur-[90px] transition-all duration-700 group-hover:opacity-20 group-hover:scale-125`}
                />

                {/* Top accent line */}
                <div
                  className={`absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r ${theme.line} transition-all duration-700 group-hover:w-full`}
                />

                {/* Card header */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-slate-500">
                    {card.number} / 03
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-slate-400">
                    {card.label}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative mt-10 flex h-[70px] w-[70px] items-center justify-center rounded-[22px] border ${theme.icon}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.6} />
                </motion.div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[27px]">
                    {card.title}
                  </h3>

                  <p className={`mt-3 text-sm font-semibold ${theme.accent}`}>
                    {card.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {card.description}
                  </p>
                </div>

                {/* Contact information */}
                {card.phone && (
                  <div className="relative mt-5 space-y-4">
                    <a
                      href="tel:+971505870574"
                      className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-violet-300"
                    >
                      <PhoneCall className="h-4 w-4 text-violet-400" />
                      {card.phone}
                    </a>

                    <a
                      href={`mailto:${card.email}`}
                      className="flex items-center gap-3 break-all text-sm text-slate-300 transition-colors hover:text-violet-300"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-violet-400" />
                      {card.email}
                    </a>
                  </div>
                )}

                {/* Bottom action */}
                <div className="relative mt-auto pt-8">
                  {card.button ? (
                    <motion.a
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      href={card.href}
                      className={`flex w-full items-center justify-between rounded-xl ${theme.button} px-5 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition-colors`}
                    >
                      {card.action}
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-2 border-t border-white/[0.08] pt-5 text-sm font-semibold text-cyan-300">
                      <Clock3 className="h-4 w-4" />
                      Dedicated Pediatric Care
                    </div>
                  )}
                </div>

                {/* Bottom decorative glow */}
                <div
                  className={`pointer-events-none absolute -bottom-28 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full ${theme.glow} opacity-[0.06] blur-[75px] transition-opacity duration-500 group-hover:opacity-20`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-5 backdrop-blur-xl sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10">
              <HeartPulse className="h-5 w-5 text-emerald-400" />
            </div>

            <p className="text-sm font-medium text-slate-400">
              Focused on children's health and wellbeing.
            </p>
          </div>

          <span className="text-sm font-semibold text-cyan-300">
            Dubai, United Arab Emirates
          </span>
        </motion.div>

      </div>
    </section>
  );
}
