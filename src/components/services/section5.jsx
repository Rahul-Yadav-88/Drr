"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  Heart,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Amazing team and amazing treatment from the best doctor in the world.",
    name: "Michael",
    role: "Parent",
    initials: "M",
    number: "01",
  },
  {
    quote:
      "Very friendly staff and excellent service. Highly recommended!",
    name: "Sophia",
    role: "Parent",
    initials: "S",
    number: "02",
  },
  {
    quote:
      "The doctor treated me like family. Truly grateful for the care.",
    name: "David",
    role: "Parent",
    initials: "D",
    number: "03",
  },
  {
    quote:
      "World-class facilities with a warm-hearted and compassionate team.",
    name: "Emma",
    role: "Parent",
    initials: "E",
    number: "04",
  },
  {
    quote:
      "Professional, caring, and always available whenever needed.",
    name: "Olivia",
    role: "Parent",
    initials: "O",
    number: "05",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const active = testimonials[index];

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      className="relative overflow-hidden bg-[#f5fbfd] py-20 md:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background details */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-200/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
              <Sparkles size={14} />
              Kind Words
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Trusted by families.
              <br />
              <span className="text-sky-600">Loved by little ones.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-500 md:text-base">
            Every family's experience matters. Here's what parents have shared
            about their journey with us.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_340px]">

          {/* Featured testimonial */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#123e55] p-7 text-white shadow-[0_25px_70px_rgba(15,65,90,0.15)] sm:p-10 md:p-14">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 backdrop-blur-sm">
                  <Quote size={27} />
                </div>

                <span className="text-sm font-medium tracking-[0.2em] text-white/40">
                  {active.number} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="my-12"
                >
                  <div className="mb-8 flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={17}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="max-w-3xl text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl md:text-[40px] md:leading-[1.35]">
                    “{active.quote}”
                  </p>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-cyan-300 to-sky-500 text-xl font-bold text-[#123e55]">
                      {active.initials}
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {active.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/50">
                        {active.role}
                      </p>
                    </div>

                    <div className="ml-auto hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/60 sm:flex">
                      <Heart size={14} className="text-cyan-300" />
                      Family Experience
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-between border-t border-white/15 pt-6">
                <div className="flex items-center gap-2">
                  {testimonials.map((item, i) => (
                    <button
                      key={item.number}
                      onClick={() => setIndex(i)}
                      aria-label={`Show testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === i
                          ? "w-10 bg-cyan-300"
                          : "w-3 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#123e55]"
                  >
                    <ArrowLeft size={19} />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-[#123e55] transition hover:bg-white"
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial selector */}
          <div className="flex flex-col rounded-[32px] border border-sky-100 bg-white p-5 shadow-[0_15px_50px_rgba(15,65,90,0.05)] sm:p-7">

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                Testimonials
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Parent stories
              </h3>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              {testimonials.map((item, i) => (
                <button
                  key={item.number}
                  onClick={() => setIndex(i)}
                  className={`group flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                    index === i
                      ? "bg-sky-50 ring-1 ring-sky-200"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                      index === i
                        ? "bg-sky-500 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-sky-700"
                    }`}
                  >
                    {item.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {item.role}
                    </p>
                  </div>

                  <span
                    className={`text-xs font-semibold ${
                      index === i ? "text-sky-600" : "text-slate-300"
                    }`}
                  >
                    {item.number}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#f0f9fc] p-5">
              <div className="mb-2 flex items-center gap-2 text-sky-700">
                <Heart size={17} />
                <span className="text-sm font-semibold">Care comes first</span>
              </div>
              <p className="text-xs leading-6 text-slate-500">
                Building trust with families through compassionate and
                thoughtful care.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
        >
          <span className="h-px w-8 bg-sky-200" />
          Your trust means everything
          <span className="h-px w-8 bg-sky-200" />
        </motion.div>

      </div>
    </section>
  );
}