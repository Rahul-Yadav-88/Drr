
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Stethoscope,
  Award,
  Globe2,
  BookOpen,
  MoveUpRight,
} from "lucide-react";

const stats = [
  { value: "29", label: "Years of Experience", icon: Stethoscope },
  { value: "03", label: "Countries", icon: Globe2 },
  { value: "04", label: "Research Publications", icon: BookOpen },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F5FAFA] text-[#12333A]"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#D9F1EE]/70 blur-[100px]" />
        <div className="absolute -bottom-48 -left-32 h-[500px] w-[500px] rounded-full bg-[#EAB45C]/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#087F80_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-12 px-5 pb-20 pt-28 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-28">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 order-2 lg:order-1"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-[#087F80]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#087F80]">
              Compassion · Experience · Excellence
            </span>
          </div>

          <h1 className="max-w-[750px] text-[48px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#12333A] sm:text-6xl lg:text-[76px]">
            Dedicated to
            <br />
            Every Child's
            <br />
            <span className="relative inline-block text-[#087F80]">
              Healthy Future.
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 400 16"
                fill="none"
              >
                <path
                  d="M3 12C100 0 260 1 395 10"
                  stroke="#EAB45C"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <div className="mt-10 border-l-[3px] border-[#087F80] pl-5">
            <h2 className="text-2xl font-semibold text-[#12333A] sm:text-3xl">
              Dr. Gaurav Jadon
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087F80]">
              Consultant Pediatrician
            </p>
          </div>

          <p className="mt-7 max-w-[570px] text-base leading-8 text-[#587178] sm:text-lg">
            Bringing over 29 years of post-specialization experience
            in General Pediatrics, Neonatology and Pediatric Intensive
            Care. Committed to evidence-based healthcare, medical
            education and better outcomes for children.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-[#087F80] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#087F80]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#066D6E]"
            >
              Book an Appointment
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-[#B9D8D5] px-6 py-4 text-sm font-semibold text-[#244A51] transition hover:border-[#087F80] hover:text-[#087F80]"
            >
              Explore Profile
              <MoveUpRight size={17} />
            </Link>
          </div>

          {/* STATISTICS */}
          <div className="mt-14 grid grid-cols-3 gap-3 border-t border-[#C9DEDB] pt-7">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  <Icon size={19} className="mb-3 text-[#087F80]" />
                  <div className="text-3xl font-semibold tracking-tight text-[#12333A]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-[10px] font-bold uppercase leading-5 tracking-wider text-[#71888B] sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-[590px] lg:order-2"
        >
          <div className="absolute -right-5 top-12 h-[75%] w-[75%] rounded-[45%_45%_20px_20px] border border-[#087F80]/20 sm:right-0" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative mx-auto aspect-[0.84/1] w-[83%] max-w-[460px]"
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[48%_48%_20px_20px] bg-[#C6E9E4]" />

            <div className="absolute inset-0 overflow-hidden rounded-[48%_48%_20px_20px] border-[8px] border-white shadow-[0_35px_90px_rgba(8,65,68,0.18)]">
              <Image
                src="/about1.png"
                alt="Dr. Gaurav Jadon, Consultant Pediatrician"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 460px"
                className="object-cover object-center transition duration-1000 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#092D35]/30 to-transparent" />
            </div>
          </motion.div>

          {/* EXPERIENCE FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-0 top-[24%] z-20 rounded-2xl border border-white bg-white/95 p-5 shadow-[0_20px_60px_rgba(8,65,68,0.14)] backdrop-blur-xl sm:-left-2"
          >
            <span className="block text-4xl font-bold text-[#087F80]">
              29
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-[#71888B]">
              Years of
              <br />
              Experience
            </span>
          </motion.div>

          {/* AWARD CARD */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-4 right-0 z-20 flex max-w-[270px] items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-[0_20px_60px_rgba(8,65,68,0.14)] backdrop-blur-xl sm:-right-2"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3D8] text-[#B98729]">
              <Award size={25} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#12333A]">
                Pediatrician of the Year
              </p>
              <p className="mt-1 text-xs text-[#71888B]">
                Annual HEALTH Awards 2026
              </p>
            </div>
          </motion.div>

          {/* DECORATIVE ELEMENT */}
          <div className="absolute -right-2 top-8 h-5 w-5 rounded-full bg-[#EAB45C] shadow-[0_0_0_10px_rgba(234,180,92,0.13)]" />
        </motion.div>
      </div>
    </section>
  );
}
