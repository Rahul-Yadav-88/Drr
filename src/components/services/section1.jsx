"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    eyebrow: "EVERYDAY CHILD HEALTH",
    title: "General Pediatrics & Child Health",
    desc: "From routine health checkups and vaccinations to the diagnosis and treatment of common childhood illnesses, receive comprehensive pediatric care focused on prevention, healthy growth and development.",
    img: "/1.avif",
    icon: Stethoscope,
    accent: "bg-[#DDF4F3]",
  },
  {
    number: "02",
    eyebrow: "NEWBORN TO ADOLESCENCE",
    title: "Specialized Care for Children up to 18 Years",
    desc: "Personalized healthcare for newborns, infants, children and adolescents, with attention to their changing medical needs, preventive health and age-appropriate treatment.",
    img: "/2.jpg",
    icon: HeartPulse,
    accent: "bg-[#E5EFFB]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function Section1() {
  return (
    <section
      id="pediatric-care"
      aria-labelledby="pediatric-care-heading"
      className="relative overflow-hidden bg-[#F5FAFA] py-20 md:py-28"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#B9E9E7]/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#D6E9F9]/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#079B98]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#078B89]">
                Pediatric Excellence
              </span>
            </div>

            <h2
              id="pediatric-care-heading"
              className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[#12313B] sm:text-5xl lg:text-[58px]"
            >
              Comprehensive Pediatric Care
              <span className="block text-[#079B98]">
                for a Healthier Childhood.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-base leading-8 text-[#60747B] md:text-[17px]">
              Dr. Gaurav Jadon provides compassionate, evidence-based
              healthcare for children up to 18 years. With 28 years of
              clinical experience across India, Kuwait and the UAE, his
              approach focuses on early diagnosis, preventive care,
              healthy development and personalized treatment.
            </p>
          </div>
        </motion.div>

        {/* Experience strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-5 border-y border-[#DCE9E9] py-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDF4F3]">
              <ShieldCheck size={21} className="text-[#078B89]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#12313B]">
                Experienced Pediatric Care
              </p>
              <p className="text-xs text-[#71858A]">
                Child-focused medical approach
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold tracking-tight text-[#079B98]">
              28+
            </span>
            <div>
              <p className="text-sm font-bold text-[#12313B]">
                Years of Experience
              </p>
              <p className="text-xs text-[#71858A]">
                Across three countries
              </p>
            </div>
          </div>

          <div className="text-sm font-medium text-[#60747B]">
            India <span className="mx-2 text-[#079B98]">/</span>
            Kuwait <span className="mx-2 text-[#079B98]">/</span>
            UAE
          </div>
        </motion.div>

        {/* Service panels */}
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group relative min-w-0"
              >
                <div className="relative flex min-h-[440px] flex-col overflow-hidden rounded-[26px] bg-[#103640] sm:min-h-[470px]">

                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.img}
                      alt={
                        index === 0
                          ? "General pediatric healthcare and child health services"
                          : "Specialized healthcare for newborns, children and adolescents"
                      }
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F27] via-[#071F27]/65 to-[#071F27]/5" />

                  {/* Top label */}
                  <div className="relative z-10 flex items-center justify-between p-6 sm:p-8">
                    <span className="rounded-full border border-white/30 bg-[#0B3038]/40 px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-white backdrop-blur-sm">
                      {item.eyebrow}
                    </span>

                    <span className="text-3xl font-light text-white/70">
                      {item.number}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 mt-auto p-6 sm:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#079B98]">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <h3 className="max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-[15px]">
                      {item.desc}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                        Child-focused healthcare
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-[#079B98] group-hover:bg-[#079B98]">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Hover shine */}
                  <div className="pointer-events-none absolute -left-1/2 top-0 z-10 h-full w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#E5F3F2] px-6 py-7 sm:flex-row sm:items-center sm:px-9"
        >
          <div>
            <p className="text-lg font-bold text-[#12313B]">
              Your child's health deserves thoughtful care.
            </p>
            <p className="mt-1 text-sm text-[#60747B]">
              Learn more about Dr. Gaurav Jadon's pediatric services.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#087F80] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#065F63] hover:shadow-lg hover:shadow-[#087F80]/20"
            aria-label="Explore pediatric services"
          >
            Explore Services
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