
"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Award,
  Globe2,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Activity,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const credentials = [
  {
    icon: GraduationCap,
    title: "Medical Qualifications",
    desc: "DNB, DCH and MBBS",
  },
  {
    icon: Award,
    title: "European Certification",
    desc: "Diploma, European Board of Pediatrics",
  },
  {
    icon: Globe2,
    title: "International Experience",
    desc: "Clinical experience across India, Kuwait and UAE",
  },
];

const expertise = [
  {
    icon: HeartPulse,
    title: "General Pediatrics",
    desc: "Comprehensive healthcare for infants, children and adolescents.",
  },
  {
    icon: Activity,
    title: "Emergency & Critical Care",
    desc: "Pediatric assessment, emergency care and clinical management.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Child Healthcare",
    desc: "Childhood vaccinations, asthma management and adolescent health.",
  },
];

export default function Section2() {
  return (
    <section
      id="about-doctor"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#071521] py-24 text-white md:py-32"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:65px_65px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-cyan-300">
              <Sparkles size={14} />
              About The Doctor
            </div>

            <h2
              id="about-heading"
              className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Expert Pediatric Care,
              <span className="block text-cyan-400">
                Built Around Every Child.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-slate-400">
            Experienced pediatric healthcare focused on your child's
            health, development and wellbeing at every stage of life.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT PROFILE */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#102535] p-7 sm:p-10">

              {/* Decorative Shape */}

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-400/10" />
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-cyan-400/10" />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">
                    Medical Profile
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                    <Stethoscope size={23} />
                  </div>
                </div>

                <div className="my-12">
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-[26px] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-300"
                  >
                    <HeartPulse size={38} />
                  </motion.div>

                  <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                    Consultant Pediatrician
                  </p>

                  <h3 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                    Dr. Gaurav
                    <span className="block text-cyan-400">Jadon</span>
                  </h3>

                  <p className="mt-5 max-w-sm leading-7 text-slate-400">
                    Dedicated to providing compassionate and comprehensive
                    healthcare for children and their families.
                  </p>
                </div>

                {/* Experience Highlight */}

                <div className="relative mb-9 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/15 to-blue-500/10 p-6">
                  <div className="absolute -right-5 -top-8 text-cyan-300/10">
                    <Award size={115} />
                  </div>

                  <div className="relative flex items-center gap-5">
                    <div>
                      <div className="text-5xl font-black tracking-tight text-cyan-300">
                        28+
                      </div>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[2px] text-slate-300">
                        Years of Experience
                      </p>
                    </div>

                    <div className="h-14 w-px bg-white/15" />

                    <p className="max-w-[145px] text-sm leading-6 text-slate-300">
                      Extensive pediatric clinical experience
                    </p>
                  </div>
                </div>

                {/* Credentials */}

                <div className="space-y-5">
                  {credentials.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                        <item.icon size={22} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-9 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Globe2 size={17} className="text-cyan-400" />
                    India <span className="text-cyan-400">/</span> Kuwait
                    <span className="text-cyan-400">/</span> UAE
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="pt-2 lg:pt-8"
          >

            <span className="text-sm font-bold uppercase tracking-[3px] text-cyan-400">
              Experience That Matters
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Compassionate Healthcare.
              <span className="text-slate-400">
                {" "}Experienced Hands.
              </span>
            </h3>

            <p className="mt-7 text-base leading-8 text-slate-400">
              With more than <strong className="text-white">28 years of clinical experience</strong>,
              Dr. Gaurav Jadon has provided pediatric care across India,
              Kuwait and the UAE. His medical experience combines
              international exposure with a compassionate approach
              to child healthcare.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-400">
              His recent 14.5 years of experience at NMC Speciality
              Hospital, Dubai, further reflects his long-standing
              involvement in pediatric healthcare.
            </p>

            {/* Expertise */}

            <div className="mt-12">
              <div className="mb-7 flex items-center justify-between">
                <h4 className="text-xl font-bold">
                  Areas of Expertise
                </h4>

                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  Pediatric Care
                </span>
              </div>

              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.12,
                    }}
                    whileHover={{ x: 7 }}
                    className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] sm:p-6"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-[#071521]">
                      <item.icon size={25} />
                    </div>

                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-white">
                        {item.title}
                      </h5>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {item.desc}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hospital Info */}

            <div className="mt-9 flex flex-col gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                  <CheckCircle2 size={17} />
                  Current Practice
                </div>

                <p className="mt-2 text-lg font-semibold text-white">
                  Consultant Pediatrician

                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Dubai, United Arab Emirates
                </p>
              </div>

              <a
                href="tel:+971505870574"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#071521] transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
                aria-label="Call Dr. Gaurav Jadon"
              >
                Contact Doctor
                <ArrowUpRight size={18} />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
