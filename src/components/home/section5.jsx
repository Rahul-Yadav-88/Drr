
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  HeartPulse,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Plus,
} from "lucide-react";

const pulseTransition = {
  duration: 2.2,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function Section5() {
  return (
    <section
      id="pediatric-contact"
      aria-labelledby="pediatric-contact-heading"
      className="relative isolate overflow-hidden bg-[#F5FAFB] py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Top introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-teal-500" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
                Here When You Need Us
              </span>
            </div>

            <h2
              id="pediatric-contact-heading"
              className="max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-[#12313B] sm:text-5xl lg:text-6xl"
            >
              Your child's health
              <span className="block text-[#079B98]">
                deserves attention.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-8 text-slate-600 lg:pb-2">
            Have a concern about your child's health? Get in touch with
            Dr. Gaurav Jadon for information about pediatric consultation
            and care.
          </p>
        </motion.div>

        {/* Main contact composition */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0A3541] shadow-[0_30px_90px_rgba(8,55,70,0.16)]"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:55px_55px]" />

          <div className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-20 h-[330px] w-[330px] rounded-full border border-white/10" />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-between p-7 sm:p-12 lg:p-14">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-teal-200">
                  <span className="h-2 w-2 rounded-full bg-teal-300" />
                  Pediatric consultation
                </div>

                <h3 className="mt-8 max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Worried about your
                  <span className="text-[#69D9CE]"> little one's health?</span>
                </h3>

                <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                  Whether you have questions about childhood illnesses,
                  growth, development or preventive healthcare, reaching
                  the right pediatric professional is an important first step.
                </p>
              </div>

              {/* Bottom details */}
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-teal-300" />
                  <span className="text-sm font-medium text-white/80">
                    Child-focused care
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <HeartPulse size={20} className="text-teal-300" />
                  <span className="text-sm font-medium text-white/80">
                    Comprehensive pediatrics
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTACT PANEL */}
            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0C6870] to-[#078D88] px-7 py-14 sm:px-12">

              {/* Animated pulse rings */}
              <motion.div
                animate={{
                  scale: [0.85, 1.25, 0.85],
                  opacity: [0.3, 0.05, 0.3],
                }}
                transition={{
                  ...pulseTransition,
                  duration: 4,
                }}
                className="absolute h-80 w-80 rounded-full border border-white/40"
              />

              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.25, 0.03, 0.25],
                }}
                transition={{
                  ...pulseTransition,
                  duration: 4,
                  delay: 0.8,
                }}
                className="absolute h-64 w-64 rounded-full border border-white/40"
              />

              <div className="relative z-10 w-full max-w-sm text-center">

                {/* Animated pulse icon */}
                <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={pulseTransition}
                    className="absolute inset-0 rounded-[2rem] bg-white/15"
                  />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.8rem] border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-xl">
                    <HeartPulse size={45} strokeWidth={1.5} />
                  </div>

                  <motion.div
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-3 -top-3 text-teal-100"
                  >
                    <Plus size={24} />
                  </motion.div>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-100">
                  Speak with us
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-white">
                  Contact Dr. Gaurav Jadon
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  Call for consultation and pediatric care enquiries.
                </p>

                {/* Phone number */}
                <motion.a
                  href="tel:+971505870574"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group mt-8 flex w-full items-center justify-between gap-4 rounded-2xl bg-white p-5 text-left shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-2xl sm:p-6"
                  aria-label="Call Dr. Gaurav Jadon at 0505870574"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E1F6F3] text-[#078B83]">
                      <PhoneCall size={25} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Call us directly
                      </p>
                      <p className="mt-1 text-2xl font-black tracking-tight text-[#12313B] sm:text-3xl">
                        0505870574
                      </p>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#078B83] text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={21} />
                  </div>
                </motion.a>

                <p className="mt-5 text-xs leading-5 text-white/60">
                  For life-threatening emergencies, contact your local
                  emergency services immediately.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
              <Activity size={20} />
            </div>
            <p className="text-sm text-slate-500">
              Supporting healthier childhoods through informed pediatric care.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 transition-colors hover:text-teal-600"
          >
            Visit Contact Page
            <ArrowRightIcon />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return <ArrowUpRight size={17} />;
}
