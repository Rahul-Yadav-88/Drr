"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Stethoscope,
  Baby,
  Activity,
  Syringe,
  Apple,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const specialties = [
  {
    number: "01",
    title: "General Pediatrics",
    desc: "Comprehensive medical care for infants, children and adolescents.",
    img: "/img1.png",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Care for Children up to 18 Years",
    desc: "Routine checkups, growth monitoring and preventive healthcare.",
    img: "/img4.png",
    icon: Baby,
  },
  {
    number: "03",
    title: "Pediatric Emergency Care",
    desc: "Assessment and treatment of acute childhood illnesses and injuries.",
    img: "/img5.png",
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "Child Growth & Development",
    desc: "Monitoring physical growth, developmental milestones and progress.",
    img: "/img6.png",
    icon: Activity,
  },
  {
    number: "05",
    title: "Vaccination & Immunization",
    desc: "Childhood vaccination guidance and age-appropriate immunization.",
    img: "/img7.png",
    icon: Syringe,
  },
  {
    number: "06",
    title: "Nutrition & Diet Counseling",
    desc: "Nutrition guidance to support healthy childhood growth.",
    img: "/img1.png",
    icon: Apple,
  },
  {
    number: "07",
    title: "Chronic Disease Management",
    desc: "Ongoing care for conditions such as asthma, allergies and anemia.",
    img: "/img8.png",
    icon: ShieldCheck,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function SpecialtySection() {
  return (
    <section
      id="pediatric-specialties"
      aria-labelledby="specialties-heading"
      className="relative overflow-hidden bg-[#F4F9F8] py-20 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#BDE8E5]/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#D6E7F5]/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#079B98]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#078B89]">
                Areas of Expertise
              </span>
            </div>

            <h2
              id="specialties-heading"
              className="text-4xl font-bold leading-[1.12] tracking-tight text-[#12313B] sm:text-5xl lg:text-[56px]"
            >
              Pediatric Specialties
              <span className="block text-[#079B98]">
                for Every Stage of Childhood
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#64777D] md:text-[17px]">
            From newborn care to adolescent health, Dr. Gaurav Jadon
            offers a broad range of pediatric services with a focus on
            prevention, accurate diagnosis and personalized treatment.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid items-stretch gap-7 lg:grid-cols-[0.88fr_1.12fr]">

          {/* Featured specialty */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75 }}
            className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[28px] bg-[#103640]"
          >
            <Image
              src="/img1.png"
              alt="General pediatric care for infants, children and adolescents"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061F27] via-[#082D35]/65 to-[#082D35]/10" />

            <div className="relative z-10 flex items-start justify-between p-7 sm:p-9">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Featured Specialty
              </span>

              <span className="text-4xl font-light text-white/60">
                01
              </span>
            </div>

            <div className="relative z-10 mt-auto p-7 sm:p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                <Stethoscope size={27} strokeWidth={1.6} />
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7FE1D8]">
                Complete Child Healthcare
              </p>

              <h3 className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                General Pediatrics
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                Comprehensive healthcare for infants, children and
                adolescents, including routine checkups, diagnosis,
                treatment and preventive health guidance.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-5">
                <span className="text-sm font-semibold text-white">
                  Compassionate care at every age
                </span>
                <ArrowUpRight
                  size={19}
                  className="text-[#7FE1D8] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </motion.div>

          {/* Specialty list */}
          <div className="overflow-hidden rounded-[28px] border border-[#DCE9E7] bg-white/80 px-5 py-2 shadow-[0_15px_50px_rgba(15,55,60,0.05)] sm:px-8">
            {specialties.slice(1).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group border-b border-[#E6EFED] last:border-0"
                >
                  <div className="flex items-center gap-4 py-5 sm:gap-6 sm:py-[21px]">

                    {/* Number */}
                    <span className="hidden text-sm font-semibold tabular-nums text-[#9BAEAE] sm:block">
                      {item.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E7F5F3] text-[#078B89] transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-[#087F80] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold leading-snug text-[#173C45] transition-colors duration-300 group-hover:text-[#078B89] sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-[#74858A]">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCEAE8] text-[#078B89] transition-all duration-300 group-hover:border-[#078B89] group-hover:bg-[#078B89] group-hover:text-white">
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom information strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col justify-between gap-5 rounded-2xl bg-[#103640] px-6 py-6 sm:flex-row sm:items-center sm:px-9"
        >
          <div>
            <p className="text-lg font-bold text-white">
              Supporting your child's health, growth and development.
            </p>
            <p className="mt-1 text-sm text-white/65">
              Explore pediatric services and consultation information.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#7FE1D8] px-6 py-3.5 text-sm font-bold text-[#103640] transition-all duration-300 hover:bg-white"
          >
            Book a Consultation
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}