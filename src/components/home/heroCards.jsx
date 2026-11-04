"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  PhoneCall,
  ArrowUpRight,
  Mail,
  HeartPulse,
  Sparkles,
  Baby,
} from "lucide-react";
import Link from "next/link";

const cards = [
  {
    id: "growth",
    number: "01",
    label: "CHILD DEVELOPMENT",
    title: "Child Growth & Development",
    subtitle: "Supporting every stage of childhood.",
    description:
      "Guidance on physical growth, developmental milestones, nutrition and children's overall wellbeing to support a healthy childhood.",
    icon: Baby,
    color: "teal",
    action: "Explore Services",
    href: "/services",
    button: true,
  },
  {
    id: "practice",
    number: "02",
    label: "OUR PRACTICE",
    title: "Current Practice",
    subtitle: "Dedicated pediatric healthcare.",
    description:
      "Personalized pediatric care focused on understanding each child's needs and supporting their health through every stage of development.",
    icon: Stethoscope,
    color: "emerald",
    button: false,
  },
  {
    id: "contact",
    number: "03",
    label: "GET IN TOUCH",
    title: "Contact Details",
    subtitle: "We're here to help.",
    description:
      "For appointment enquiries and information about pediatric consultations, get in touch.",
    icon: PhoneCall,
    color: "aqua",
    action: "Call Now",
    href: "tel:+971505870574",
    phone: "+971 50 587 0574",
    email: "seemagauravansh@gmail.com",
    button: true,
  },
];

const colorStyles = {
  teal: {
    icon: "bg-teal-500/10 text-teal-400 border-teal-400/20",
    glow: "group-hover:bg-teal-500/10",
    accent: "text-teal-400",
    line: "bg-teal-400",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
    glow: "group-hover:bg-emerald-500/10",
    accent: "text-emerald-400",
    line: "bg-emerald-400",
  },
  aqua: {
    icon: "bg-cyan-500/10 text-cyan-300 border-cyan-400/20",
    glow: "group-hover:bg-cyan-500/10",
    accent: "text-cyan-300",
    line: "bg-cyan-300",
  },
};

export default function HeroCards() {
  return (
    <section className="relative overflow-hidden bg-[#071B1C] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-teal-500/[0.07] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/[0.07] px-4 py-2">
              <Sparkles size={14} className="text-teal-400" />
              <span className="text-[10px] font-semibold tracking-[0.2em] text-teal-300 sm:text-xs">
                PEDIATRIC CARE IN DUBAI
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your Child's Health,
              <span className="block bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Our Priority.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Supporting children and families with thoughtful pediatric care,
              guidance and attention at every stage of childhood.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <HeartPulse size={19} className="text-teal-400" />
            <span>Care that grows with your child</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const styles = colorStyles[card.color];

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -7 }}
                className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#102C2D] p-7 transition-colors duration-500 hover:border-white/[0.15] sm:p-8"
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[85px] transition-all duration-500 ${styles.glow}`}
                />

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${styles.icon}`}
                  >
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-slate-600">
                    / {card.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-9 flex-1">
                  <span
                    className={`text-[10px] font-semibold tracking-[0.22em] ${styles.accent}`}
                  >
                    {card.label}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {card.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {card.description}
                  </p>
                </div>

                {/* Contact details */}
                {card.id === "contact" && (
                  <div className="relative mt-5 space-y-3 border-t border-white/[0.08] pt-5">
                    <a
                      href="tel:+971505870574"
                      className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-teal-300"
                    >
                      <PhoneCall size={15} className="text-teal-400" />
                      {card.phone}
                    </a>

                    <a
                      href={`mailto:${card.email}`}
                      className="flex items-center gap-3 break-all text-sm text-slate-300 transition hover:text-teal-300"
                    >
                      <Mail size={15} className="shrink-0 text-teal-400" />
                      {card.email}
                    </a>
                  </div>
                )}

                {/* Action */}
                {card.button && (
                  <div className="relative mt-7 border-t border-white/[0.08] pt-5">
                    {card.href.startsWith("tel:") ? (
                      <a
                        href={card.href}
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${styles.accent} transition-all duration-300 hover:gap-4`}
                      >
                        {card.action}
                        <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <Link
                        href={card.href}
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${styles.accent} transition-all duration-300 hover:gap-4`}
                      >
                        {card.action}
                        <ArrowUpRight size={17} />
                      </Link>
                    )}
                  </div>
                )}

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${styles.line}`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Every child is unique. Our approach focuses on their individual
            health needs, growth and wellbeing.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-slate-400">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            PEDIATRIC CARE · DUBAI, UAE
          </div>
        </motion.div>
      </div>
    </section>
  );
}