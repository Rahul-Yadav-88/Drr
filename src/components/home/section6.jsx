
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Baby,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Globe2,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Comprehensive Children's Care",
    subtitle: "Care through every stage of childhood",
    description:
      "Individualized healthcare for infants, children and adolescents up to 18 years, with attention to their unique health needs, growth and development.",
    image: "/card1.png",
    alt: "Comprehensive pediatric healthcare for children",
    icon: Baby,
    accent: "from-[#D7F3F0] to-[#E8F7F7]",
    reverse: false,
  },
  {
    number: "02",
    title: "General Pediatric Healthcare",
    subtitle: "Prevention, diagnosis and wellbeing",
    description:
      "Medical guidance for common childhood illnesses, nutrition, vaccinations, growth monitoring and preventive healthcare.",
    image: "/card2.png",
    alt: "General pediatric consultation and child health assessment",
    icon: HeartPulse,
    accent: "from-[#E2EAFF] to-[#F0F3FF]",
    reverse: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export default function Section6() {
  return (
    <section
      id="why-choose-dr-gaurav-jadon"
      aria-labelledby="why-choose-heading"
      className="relative isolate overflow-hidden bg-[#F8FBFC] py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-100/80 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-100/70 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#0f5966_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* INTRODUCTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-teal-100 bg-white px-4 py-2 shadow-sm">
              <Sparkles size={15} className="text-teal-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
                The Difference in Care
              </span>
            </div>

            <h2
              id="why-choose-heading"
              className="max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.045em] text-[#12313B] sm:text-5xl lg:text-7xl"
            >
              More than healthcare.
              <span className="block text-[#079B98]">
                A healthier future.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-slate-600 lg:pb-2">
            Choosing the right pediatrician matters. Dr. Gaurav Jadon
            combines international clinical experience with a thoughtful,
            evidence-based approach to children's health and development.
          </p>
        </motion.div>

        {/* EXPERIENCE HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 overflow-hidden rounded-[2rem] bg-[#0B3945] p-7 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-5 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1AA99F] text-white shadow-lg shadow-teal-900/30">
                <Stethoscope size={30} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-teal-200">
                  Clinical experience
                </p>
                <p className="mt-1 text-3xl font-black text-white">
                  29 Years
                </p>
              </div>
            </div>

            <div className="max-w-xl md:border-l md:border-white/20 md:pl-8">
              <p className="text-lg font-bold text-white">
                International pediatric experience
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Clinical experience across India, Kuwait and the United Arab Emirates.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-teal-100">
              <Globe2 size={22} />
              <span>India · Kuwait · UAE</span>
            </div>
          </div>
        </motion.div>

        {/* FEATURE SHOWCASE */}
        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: index * 0.12 }}
                className={`group grid overflow-hidden rounded-[2.2rem] border border-[#E5EEF0] bg-white shadow-[0_15px_55px_rgba(16,60,70,0.045)] lg:min-h-[420px] lg:grid-cols-2 ${
                  feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image side */}
                <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent}`} />

                  <motion.div
                    whileHover={{ scale: 1.045 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102F39]/35 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/50 bg-white/85 px-4 py-2 text-xs font-bold text-[#17434B] shadow-lg backdrop-blur-lg">
                    <span className="h-2 w-2 rounded-full bg-teal-500" />
                    Pediatric Expertise
                  </div>

                  <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-white/90 text-teal-700 shadow-xl backdrop-blur-xl">
                    <Icon size={27} />
                  </div>

                  <div className="absolute bottom-8 right-7 text-6xl font-black text-white/70">
                    {feature.number}
                  </div>
                </div>

                {/* Text side */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-[2px] w-9 bg-teal-500" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                      {feature.subtitle}
                    </span>
                  </div>

                  <h3 className="max-w-md text-3xl font-black leading-tight tracking-tight text-[#12313B] sm:text-4xl">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                    {feature.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-teal-200 bg-[#F0FAF9] px-6 py-3.5 text-sm font-bold text-teal-800 transition-all duration-300 hover:gap-5 hover:border-teal-500 hover:bg-teal-600 hover:text-white"
                  >
                    Explore Services
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CREDENTIALS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid gap-6 rounded-[2rem] border border-[#E4EEF0] bg-white p-7 shadow-sm sm:grid-cols-[auto_1fr] sm:items-center sm:p-10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E3F6F3] text-teal-700">
            <ShieldCheck size={32} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Professional qualifications
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-[#12313B] sm:text-2xl">
              Qualified Pediatric Expertise
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              MBBS, DCH, DNB Pediatrics and Diploma in European Board of Pediatrics.
            </p>
          </div>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-gradient-to-r from-[#DDF5F2] via-[#ECF8FA] to-[#E3EEFF] p-8 text-center sm:flex-row sm:text-left sm:p-10"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Compassion · Experience · Care
            </p>
            <h3 className="mt-3 text-2xl font-black text-[#12313B] sm:text-3xl">
              Every stage of childhood matters.
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Discover the pediatric services available for your child.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#087F80] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-800/15 transition-all hover:-translate-y-1 hover:bg-[#066B6D]"
          >
            View All Services
            <ArrowUpRight size={19} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
