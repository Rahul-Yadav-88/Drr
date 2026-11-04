"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[760px] w-full overflow-hidden bg-[#071D22] sm:min-h-[800px] lg:min-h-[calc(100svh-80px)]"
    >
      {/* Background image - original image retained */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/pp.jpeg"
          alt="Dr. Gaurav Jadon, Consultant Pediatrician in Dubai"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="
            object-cover
            object-[62%_center]
            sm:object-[65%_center]
            lg:object-center
          "
        />
      </motion.div>

      {/* Layered image treatment */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041619]/95 via-[#061B20]/75 to-[#061B20]/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#06191D]/85 via-transparent to-[#06191D]/35" />

      {/* Subtle ambient light */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />

      {/* Top brand label */}
      <div className="absolute left-5 top-6 z-20 sm:left-8 sm:top-8 lg:left-14">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
            <Stethoscope
              size={19}
              className="text-cyan-200"
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-white">
              Pediatric Care
            </p>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[1.5px] text-white/55">
              Dubai, UAE
            </p>
          </div>
        </div>
      </div>

      {/* Experience badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute right-5 top-6 z-20 sm:right-8 sm:top-8 lg:right-14"
      >
        <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-[#102D32]/60 px-3 py-2 backdrop-blur-lg sm:px-5 sm:py-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

          <span className="text-[10px] font-semibold tracking-wide text-white sm:text-xs">
            29 Years of Experience
          </span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1500px] items-center px-5 pb-28 pt-36 sm:min-h-[800px] sm:px-8 sm:pb-32 sm:pt-36 lg:min-h-[calc(100svh-80px)] lg:px-14 lg:pb-36 lg:pt-32">
        <div className="w-full max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 flex items-center gap-3 sm:mb-8"
          >
            <span className="h-[2px] w-9 bg-cyan-300 sm:w-12" />

            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-cyan-200 sm:text-xs sm:tracking-[4px]">
              Consultant Pediatrician in Dubai
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <h1
              id="hero-heading"
              className="max-w-3xl text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white"
            >
              Expert Care.
              <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                Healthier
              </span>
              <span className="block text-white">
                Little Lives.
              </span>
            </h1>
          </motion.div>

          {/* Doctor information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex items-center gap-3 sm:mt-8"
          >
            <span className="h-8 w-[2px] rounded-full bg-cyan-300" />

            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                Dr. Gaurav Jadon
              </p>
              <p className="mt-0.5 text-xs text-white/65 sm:text-sm">
                Consultant Pediatrician
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:mt-7 sm:text-base sm:leading-8"
          >
            Compassionate, evidence-based pediatric healthcare for infants,
            children and adolescents, backed by extensive clinical experience
            across India, Kuwait and the UAE.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-5"
          >
            <Link
              href="/services"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#06252A] shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071D22]"
            >
              Explore Our Services

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071D22]"
            >
              <CalendarDays size={17} aria-hidden="true" />
              Book an Appointment
            </Link>
          </motion.div>

          {/* Trust information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-9 flex items-center gap-2.5 border-t border-white/15 pt-5 sm:mt-12 sm:pt-6"
          >
            <ShieldCheck
              size={19}
              className="shrink-0 text-teal-300"
              aria-hidden="true"
            />

            <p className="text-xs font-medium tracking-wide text-white/70 sm:text-sm">
              Personalized and evidence-based pediatric care
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom experience strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#071D22]/55 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 lg:px-14">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-cyan-200 sm:text-xs">
              Clinical Experience
            </p>
            <p className="mt-1 text-xs text-white/70 sm:text-sm">
              India <span className="mx-1 text-cyan-300">/</span> Kuwait
              <span className="mx-1 text-cyan-300">/</span> UAE
            </p>
          </div>

          <div className="flex items-center gap-2 text-right">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              29
            </span>
            <span className="max-w-[85px] text-[10px] leading-4 text-white/60 sm:max-w-none sm:text-xs">
              Years of
              <br className="sm:hidden" /> Experience
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-6 z-20 hidden flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[3px] text-white/50">
          Scroll
        </span>
        <ChevronDown size={19} className="text-cyan-200" aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default HeroSection;