
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Award,
  Globe2,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  BookOpenCheck,
  MessagesSquare,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Baby,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Award,
    title: "28 Years of Clinical Experience",
    description:
      "28 years of pediatric clinical experience across India, Kuwait and the UAE, bringing international exposure to child healthcare.",
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Strong Medical Qualifications",
    description:
      "MBBS, DCH, DNB Pediatrics and Diploma in European Board of Pediatrics.",
    color: "from-violet-500 to-indigo-500",
    bg: "bg-violet-50",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Specialised Pediatric Interests",
    description:
      "Preventive pediatrics, growth and development, childhood asthma and pediatric emergency care.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Parent-Focused Communication",
    description:
      "An approach centred on evidence-based information, clear communication and helping parents make informed healthcare decisions.",
    color: "from-teal-500 to-emerald-500",
    bg: "bg-teal-50",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Section3() {
  return (
    <section
      id="why-choose-dr-gaurav-jadon"
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden bg-[#F4FAFC] py-24 md:py-32"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-200/40 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[150px]" />

      <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#0891b2_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-[3px] text-cyan-700 shadow-sm backdrop-blur-md">
            <Sparkles size={15} />
            Your Child's Health Matters
          </div>

          <h2
            id="why-choose-heading"
            className="mx-auto max-w-4xl text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Why Parents Choose
            <span className="mt-2 block bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              Dr. Gaurav Jadon
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Experienced pediatric care built on medical expertise,
            international clinical exposure and a thoughtful approach
            to children's health and parental guidance.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="grid items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* LEFT PROFILE PANEL */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative flex h-full min-h-[600px] flex-col overflow-hidden rounded-[36px] border border-white bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-10">

              {/* Decorative Gradient */}

              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />

              <div className="absolute right-8 top-32 h-40 w-40 rounded-full border border-cyan-100/70" />

              <div className="absolute right-16 top-40 h-24 w-24 rounded-full border border-cyan-100/70" />

              <div className="relative z-10 flex flex-1 flex-col">

                {/* Top Label */}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-700">
                    Pediatric Specialist
                  </span>

                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  >
                    <Stethoscope size={27} />
                  </motion.div>
                </div>

                {/* Doctor Identity */}

                <div className="mt-16">
                  <motion.div
                    animate={{
                      y: [0, -9, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 shadow-inner"
                  >
                    <Baby size={48} strokeWidth={1.5} />

                    <div className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-md">
                      <HeartPulse size={19} />
                    </div>
                  </motion.div>

                  <p className="text-sm font-bold uppercase tracking-[3px] text-cyan-600">
                    Consultant Pediatrician
                  </p>

                  <h3 className="mt-4 text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl">
                    Dr. Gaurav
                    <span className="mt-2 block text-cyan-600">
                      Jadon
                    </span>
                  </h3>

                  <p className="mt-6 max-w-sm text-base leading-8 text-slate-600">
                    Dedicated to supporting children's health,
                    development and wellbeing through experienced
                    pediatric care.
                  </p>
                </div>

                {/* Experience Highlight */}

                <div className="relative mt-12 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#087EAA] via-[#0891B2] to-[#0D9488] p-7 text-white shadow-xl shadow-cyan-700/15">

                  <div className="absolute -right-8 -top-10 opacity-10">
                    <Award size={145} />
                  </div>

                  <div className="relative flex items-center gap-5">
                    <div>
                      <span className="block text-6xl font-black tracking-tight">
                        28+
                      </span>

                      <span className="mt-2 block text-xs font-bold uppercase tracking-[2px] text-white/80">
                        Years of Experience
                      </span>
                    </div>

                    <div className="h-16 w-px bg-white/30" />

                    <p className="max-w-[140px] text-sm leading-6 text-white/90">
                      International pediatric clinical experience
                    </p>
                  </div>

                  <div className="relative mt-6 flex items-center gap-2 border-t border-white/20 pt-5 text-sm font-medium text-white/90">
                    <Globe2 size={17} />
                    India · Kuwait · UAE
                  </div>
                </div>

                {/* Bottom Medical Note */}

                <div className="mt-auto pt-9">
                  <div className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                      <ShieldCheck size={23} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Child-Centred Approach
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Supporting informed and confident parenting.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}

          <div className="flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-700">
                What Sets The Practice Apart
              </span>

              <h3 className="mt-4 max-w-xl text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Experience, Knowledge
                <span className="text-cyan-600"> & Care.</span>
              </h3>

              <p className="mt-4 max-w-xl leading-8 text-slate-600">
                Every child deserves thoughtful medical attention
                and every parent deserves clear, reliable information.
              </p>
            </motion.div>

            {/* Feature Cards */}

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-4"
            >
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    variants={reveal}
                    whileHover={{
                      x: 7,
                      transition: { duration: 0.25 },
                    }}
                    className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_18px_45px_rgba(8,145,178,0.10)] sm:p-7"
                  >
                    {/* Hover Background */}

                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/0 via-cyan-50/30 to-blue-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex gap-5">

                      {/* Icon */}

                      <div className="relative shrink-0">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} text-slate-700 transition-all duration-500 group-hover:scale-110`}>
                          <Icon size={25} />
                        </div>
                      </div>

                      {/* Text */}

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="text-[11px] font-bold tracking-[2px] text-cyan-600">
                            {item.number}
                          </span>

                          <div className="h-px flex-1 bg-slate-100" />
                        </div>

                        <h4 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-700 sm:text-xl">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow */}

                      <div className="hidden shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-600 sm:block">
                        <ArrowUpRight size={21} />
                      </div>
                    </div>

                    {/* Bottom Accent */}

                    <div className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`} />

                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Message */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-7 flex items-start gap-3 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 p-5"
            >
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-cyan-600"
              />

              <p className="text-sm leading-7 text-slate-600">
                Focused on evidence-based information and clear
                communication to help parents understand their
                child's healthcare needs.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom Decorative Line */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        />

      </div>
    </section>
  );
}
