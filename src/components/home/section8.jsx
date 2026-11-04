"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Globe2,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Medical Qualifications",
    description: "MBBS, DCH and DNB Pediatrics",
  },
  {
    icon: Award,
    title: "European Certification",
    description: "Diploma in European Board of Pediatrics",
  },
  {
    icon: BookOpen,
    title: "Academic Contribution",
    description: "Teaching, clinical audits and research forums",
  },
];

const countries = ["India", "Kuwait", "UAE"];

export default function Section8() {
  return (
    <section
      id="about-dr-gaurav-jadon"
      className="relative isolate min-h-[850px] overflow-hidden bg-[#092b35] text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/section8.png"
          alt="Dr. Gaurav Jadon, Consultant Pediatrician"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft overlay — image remains visible */}
      <div className="absolute inset-0 -z-10 bg-[#071f27]/45" />

      {/* Subtle gradient for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071f27]/75 via-[#071f27]/35 to-transparent" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="mx-auto flex min-h-[850px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Left experience panel */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-[430px]">
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-tl-[35px] border-l border-t border-cyan-300/60" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#082e39]/65 p-8 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Experience that matters
                </span>

                <div className="mt-8 flex items-end gap-3">
                  <span className="text-8xl font-light leading-none tracking-tighter text-white sm:text-9xl">
                    29
                  </span>
                  <div className="pb-2">
                    <span className="block text-3xl font-light text-cyan-300">+</span>
                    <span className="text-sm leading-5 text-white/70">
                      Years of
                      <br />
                      Experience
                    </span>
                  </div>
                </div>

                <div className="my-8 h-px w-full bg-white/20" />

                <p className="max-w-xs text-base leading-7 text-white/75">
                  Dedicated to supporting children's health through
                  compassionate care and evidence-based pediatric practice.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-xs font-medium tracking-wide text-cyan-50"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-br-[35px] border-b border-r border-cyan-300/60 sm:block" />
            </div>
          </motion.div>

          {/* Right profile content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Meet Your Pediatrician
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Dr. Gaurav
              <span className="block text-cyan-300">Jadon</span>
            </h2>

            <p className="mt-4 text-lg font-medium text-white/85">
              Consultant Pediatrician
            </p>

            <p className="mt-7 text-base leading-8 text-white/75 sm:text-lg">
              Dr. Gaurav Jadon is a Consultant Pediatrician with over 29 years
              of post-specialization experience across India, Kuwait, and the
              UAE. He specializes in General Pediatrics, combining clinical
              expertise with academic leadership.
            </p>

            <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
              With professional interests in pediatric education and
              evidence-based practice, he actively contributes to teaching,
              clinical audits, and international research forums. His approach
              focuses on compassionate care and advancing child health
              standards.
            </p>

            {/* Credentials */}
            <div className="mt-9 space-y-4">
              {credentials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="group flex items-center gap-4 border-b border-white/15 pb-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-200 transition-colors group-hover:bg-cyan-300 group-hover:text-[#092b35]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-semibold text-[#082b35] transition-all duration-300 hover:bg-white"
              >
                Get in Touch
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="flex items-center gap-2 text-sm text-white/65">
                <Globe2 size={17} className="text-cyan-300" />
                International Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}