"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  Stethoscope,
  MoveUpRight,
} from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#F5FAFA] text-[#12333A]"
    >
      {/* FULL SECTION BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/section8.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* LIGHT OVERLAY - KEEPS BACKGROUND VISIBLE */}
      <div className="absolute inset-0 -z-10 bg-[#F5FAFA]/65" />

      {/* GRADIENT FOR TEXT READABILITY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/65 via-white/45 to-[#E8F7F5]/40" />

      {/* DECORATIVE BACKGROUND GLOW */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-[100px]"
      />

      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-teal-200/30 blur-[110px]"
      />

      <div className="mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-12 px-5 pb-20 pt-28 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-16 lg:pb-24 lg:pt-32">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 order-2 lg:order-1"
        >
          {/* Label */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#B7DEDA]/70 bg-white/75 px-4 py-2.5 shadow-sm backdrop-blur-md">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9F1EE] text-[#078B87]">
              <Stethoscope size={19} />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#078B87]">
              Consultant Pediatrician
            </span>
          </div>

          {/* SEO H1 */}
          <h1
            id="hero-heading"
            className="max-w-[760px] text-[46px] font-semibold leading-[1.08] tracking-[-0.055em] text-[#12333A] sm:text-6xl lg:text-[76px]"
          >
            Every Child
            <br />
            Deserves a
            <span className="relative ml-2 inline-block text-[#079B98]">
              Healthy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 240 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 10C66 1 158 1 236 8"
                  stroke="#EAB45C"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            Tomorrow.
          </h1>

          {/* Doctor Name */}
          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-[#183F48] sm:text-3xl">
            Dr. Gaurav Jadon
          </h2>

          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#648087]">
            General Pediatrics & Child Healthcare
          </p>

          {/* Description */}
          <p className="mt-7 max-w-[570px] text-base leading-8 text-[#506C72] sm:text-lg">
            Compassionate, evidence-based pediatric care for infants,
            children and adolescents up to 18 years. Bringing over 28 years
            of post-specialization experience across India, Kuwait and the UAE.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-[#087F80] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(8,127,128,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#066D6E]"
            >
              Book an Appointment
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-[#C6DEDC] bg-white/60 px-6 py-4 text-sm font-semibold text-[#244A51] backdrop-blur-md transition-all duration-300 hover:border-[#079B98] hover:text-[#079B98]"
            >
              Discover My Approach
              <MoveUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* TRUST DETAILS */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#C8DEDC]/80 pt-7">
            <div className="flex items-center gap-2 text-sm font-medium text-[#557177]">
              <CheckCircle2 size={17} className="text-[#079B98]" />
              Child-focused care
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-[#557177]">
              <CheckCircle2 size={17} className="text-[#079B98]" />
              Evidence-based practice
            </div>
          </div>
        </motion.div>

        {/* RIGHT: DOCTOR PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative order-1 mx-auto w-full max-w-[540px] lg:order-2"
        >
          <div className="relative mx-auto aspect-[0.86/1] w-[88%] max-w-[470px]">

            {/* OFFSET DECORATIVE SHAPE */}
            <motion.div
              initial={{ rotate: -8, scale: 0.9 }}
              animate={{ rotate: -4, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-[48%_48%_24px_24px] bg-[#C9EAE6]/90"
            />

            {/* DOCTOR IMAGE */}
            <div className="absolute inset-0 overflow-hidden rounded-[48%_48%_24px_24px] border-[7px] border-white shadow-[0_30px_80px_rgba(22,72,76,0.18)]">
              <Image
                src="/about1.png"
                alt="Dr. Gaurav Jadon, Consultant Pediatrician"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 470px"
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#102F36]/30 to-transparent" />
            </div>

            {/* EXPERIENCE FLOATING LABEL */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-9 top-[24%] z-20 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_15px_45px_rgba(21,70,73,0.13)] backdrop-blur-xl sm:-left-14 sm:p-5"
            >
              <span className="block text-4xl font-bold leading-none tracking-tight text-[#087F80]">
                28+
              </span>
              <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B8588]">
                Years of
                <br />
                Experience
              </span>
            </motion.div>

            {/* PEDIATRIC CARE LABEL */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-5 -right-4 z-20 flex max-w-[235px] items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_15px_45px_rgba(21,70,73,0.13)] backdrop-blur-xl sm:-right-9 sm:p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E1F4F0] text-[#078B87]">
                <Stethoscope size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#183F48]">
                  Pediatric Care
                </p>
                <p className="mt-1 text-xs text-[#71888B]">
                  Infants to adolescents
                </p>
              </div>
            </motion.div>

            {/* DECORATIVE DOT */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-5 top-12 h-5 w-5 rounded-full bg-[#EAB45C] shadow-[0_0_0_9px_rgba(234,180,92,0.13)]"
            />
          </div>

          {/* EXPERIENCE LABEL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55777B]"
          >
            <span className="h-px w-8 bg-[#A8C9C6]" />
            International Pediatric Experience
            <span className="h-px w-8 bg-[#A8C9C6]" />
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-[#6F8D90] lg:flex"
      >
        <ArrowDown size={15} />
        Scroll to explore
      </motion.div>
    </section>
  );
}