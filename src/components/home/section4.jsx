
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Baby,
  HeartPulse,
  ShieldCheck,
  Syringe,
  Stethoscope,
  Activity,
  Sparkles,
  Plus,
} from "lucide-react";

const services = [
  {
    no: "01",
    title: "General Pediatrics",
    description: "Complete medical care for infants, children and young people up to 18 years.",
    icon: Baby,
    color: "bg-[#DDF5F4]",
    iconColor: "text-[#087E83]",
  },
  {
    no: "02",
    title: "Pediatric Emergencies",
    description: "Prompt assessment and medical management when children need urgent care.",
    icon: HeartPulse,
    color: "bg-[#E7EEFF]",
    iconColor: "text-[#526BC2]",
  },
  {
    no: "03",
    title: "Preventive Healthcare",
    description: "Regular health assessments and early guidance for healthy childhood development.",
    icon: ShieldCheck,
    color: "bg-[#F0EAFE]",
    iconColor: "text-[#8563C7]",
  },
  {
    no: "04",
    title: "Adolescent Care",
    description: "Dedicated healthcare and guidance for teenagers through their growing years.",
    icon: Activity,
    color: "bg-[#FFF0E5]",
    iconColor: "text-[#D58A48]",
  },
  {
    no: "05",
    title: "Childhood Vaccinations",
    description: "Immunization guidance to help protect children at every stage of childhood.",
    icon: Syringe,
    color: "bg-[#E6F4E9]",
    iconColor: "text-[#459665]",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Section4() {
  return (
    <section
      id="pediatric-services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#F8FBFC] py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C9F1EF]/50 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#DCEBFF]/60 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#0B9997]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#078786]">
                Care Beyond Treatment
              </span>
            </div>

            <h2
              id="services-heading"
              className="max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.055em] text-[#102E38] sm:text-6xl lg:text-[76px]"
            >
              Every child deserves
              <span className="block text-[#079B98]">
                a healthier beginning.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-2">
            <p className="text-base leading-8 text-slate-600">
              Expert pediatric care that supports children from infancy
              through adolescence, with attention to prevention, early
              diagnosis and long-term wellbeing.
            </p>
          </div>
        </motion.div>

        {/* Main composition */}
        <div className="grid items-stretch gap-7 lg:grid-cols-[0.88fr_1.12fr]">

          {/* LEFT FEATURE PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#0A3D49] sm:min-h-[680px]"
          >
            {/* Doctor image */}
            <Image
              src="/doc.png"
              alt="Dr. Gaurav Jadon, pediatrician and child healthcare specialist"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top opacity-90"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062B35] via-[#062B35]/20 to-transparent" />

            {/* Top label */}
            <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold tracking-wide text-white backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#69E3D0]" />
              Dedicated Pediatric Care
            </div>

            {/* Floating decorative plus */}
            <motion.div
              animate={{ rotate: 90, scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-7 top-28 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-xl"
            >
              <Plus size={28} />
            </motion.div>

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-9">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21B7AD] text-white">
                  <Stethoscope size={23} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FE4DC]">
                    Clinical experience
                  </p>
                  <p className="text-sm text-white/80">
                    India · Kuwait · UAE
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <div className="text-6xl font-black tracking-[-0.06em] text-white sm:text-7xl">
                    29
                  </div>
                  <p className="mt-2 text-sm font-medium text-white/75">
                    Years of clinical experience
                  </p>
                </div>

                <div className="max-w-[180px] border-l border-white/30 pl-4">
                  <p className="text-sm leading-6 text-white/80">
                    A thoughtful approach to every child's health and development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SERVICES */}
          <div className="flex flex-col">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#079B98]">
                  What we focus on
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#102E38] sm:text-3xl">
                  Areas of Expertise
                </h3>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#E1F5F3] text-[#078786] sm:flex">
                <Sparkles size={22} />
              </div>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isLast = index === services.length - 1;

                return (
                  <motion.article
                    key={service.no}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.09,
                    }}
                    whileHover={{ y: -5 }}
                    className={`group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[1.6rem] border border-[#E4ECEE] bg-white p-5 shadow-[0_8px_30px_rgba(15,60,70,0.035)] transition-all duration-300 hover:border-[#A7DDDA] hover:shadow-[0_18px_40px_rgba(15,90,100,0.09)] sm:p-6 ${
                      isLast ? "sm:col-span-2 sm:min-h-[175px]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.color} ${service.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      <span className="text-xs font-bold tracking-widest text-slate-300">
                        / {service.no}
                      </span>
                    </div>

                    <div className="mt-7">
                      <h4 className="text-lg font-extrabold tracking-tight text-[#16343D]">
                        {service.title}
                      </h4>

                      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full border-[18px] border-[#EAF7F6] opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />
                  </motion.article>
                );
              })}
            </div>

            {/* Bottom CTA strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-6 flex flex-col justify-between gap-5 rounded-[1.6rem] bg-[#E5F4F3] p-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-lg font-extrabold text-[#123D45]">
                  Your child's wellbeing comes first.
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Learn more about Dr. Gaurav Jadon's approach to pediatric care.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#087F80] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087F80]/20 transition-all hover:-translate-y-1 hover:bg-[#066B6D]"
              >
                Explore More
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
