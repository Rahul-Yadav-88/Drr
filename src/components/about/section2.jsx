"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Globe2,
  Award,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Clinical Experience",
    description:
      "Over 28 years of post-specialization pediatric experience across India, Kuwait and the UAE.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Child Healthcare",
    description:
      "General pediatric care, childhood illnesses, growth, development and pediatric emergencies.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Medical Education",
    description:
      "Involvement in teaching, clinical audits and professional pediatric education.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Research & Development",
    description:
      "Participation in international research forums and scientific publications.",
    icon: BookOpen,
  },
];

const qualifications = [
  "MBBS",
  "DCH",
  "DNB Pediatrics",
  "Diploma in European Board of Pediatrics",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Section2() {
  return (
    <section
      id="about-doctor"
      aria-labelledby="doctor-profile-heading"
      className="relative isolate overflow-hidden bg-[#092D35] text-white"
    >
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-[url('/about2.png')] bg-cover bg-center"
          aria-hidden="true"
        />
      </div>

      {/* Image treatment */}
      <div className="absolute inset-0 -z-10 bg-[#082B33]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06252D]/90 via-[#092D35]/65 to-[#092D35]/80" />

      {/* Main content */}
      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-9 sm:py-16 lg:px-16 lg:py-20">

        {/* TOP EDITORIAL HEADER */}
        <div className="grid gap-7 border-b border-white/20 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#61D3C5]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8DE4D9]">
                About the Doctor
              </span>
            </div>

            <h2
              id="doctor-profile-heading"
              className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[68px]"
            >
              A Career Dedicated
              <br className="hidden sm:block" />
              to <span className="text-[#66D7C8]">Children's Health.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-5 lg:pb-2"
          >
            <div>
              <span className="block text-6xl font-semibold leading-none tracking-[-0.07em] text-white sm:text-7xl">
                28<span className="text-[#66D7C8]">+</span>
              </span>
              <span className="mt-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-white/65">
                Years Experience
              </span>
            </div>

            <div className="h-16 w-px bg-white/25" />

            <div>
              <Globe2 size={23} className="mb-2 text-[#66D7C8]" />
              <span className="block text-sm font-semibold text-white">
                India · Kuwait · UAE
              </span>
              <span className="mt-1 block text-xs text-white/60">
                International practice
              </span>
            </div>
          </motion.div>
        </div>

        {/* DOCTOR INTRODUCTION */}
        <div className="grid gap-8 border-b border-white/20 py-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
              Meet Your Pediatrician
            </span>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Dr. Gaurav Jadon
            </h3>

            <p className="mt-2 text-base font-medium text-[#83DCCF]">
              Consultant Pediatrician
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <p className="text-base leading-8 text-white/80 sm:text-lg">
              Dr. Gaurav Jadon brings over 28 years of post-specialization
              experience in pediatrics across India, Kuwait and the UAE.
              His professional work combines general pediatric practice,
              academic involvement and a commitment to evidence-based
              healthcare for infants, children and adolescents.
            </p>
          </motion.div>
        </div>

        {/* PROFESSIONAL JOURNEY */}
        <div className="pt-9">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
                Expertise & Contributions
              </span>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Professional Journey
              </h3>
            </div>

            <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-white/45 sm:block">
              Experience · Education · Research
            </span>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 xl:grid-cols-4"
          >
            {journey.map((entry) => {
              const Icon = entry.icon;

              return (
                <motion.article
                  key={entry.number}
                  variants={item}
                  className="group relative min-h-[220px] bg-[#0B3540]/90 p-6 transition-colors duration-300 hover:bg-[#10505A]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.15em] text-[#68D9CA]">
                      / {entry.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-white/65 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#77E0D1]"
                    />
                  </div>

                  <h4 className="mt-9 text-xl font-semibold text-white">
                    {entry.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {entry.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#66D7C8] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* QUALIFICATIONS + CTA */}
        <div className="mt-9 grid gap-7 border-t border-white/20 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Award size={21} className="text-[#68D9CA]" />
              <h3 className="text-lg font-semibold text-white">
                Education & Qualifications
              </h3>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {qualifications.map((qualification) => (
                <div
                  key={qualification}
                  className="flex items-center gap-2 text-sm text-white/75"
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#68D9CA]"
                  />
                  {qualification}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#68D9CA] pb-2 text-sm font-semibold text-white transition-colors hover:text-[#68D9CA]"
          >
            Explore Professional Profile
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}