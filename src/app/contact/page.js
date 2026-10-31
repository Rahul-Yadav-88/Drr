"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call for Appointments",
    value: "0505870574",
    href: "tel:+971505870574",
  },
  {
    icon: Mail,
    label: "Email",
    value: "seemagauravansh@gmail.com",
    href: "mailto:seemagauravansh@gmail.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#F3F8F7] py-20 md:py-28"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#B8E6E2]/40 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#D9EAF7]/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#079B98]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#078B89]">
              Get in Touch
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-[#12313B] sm:text-5xl lg:text-[58px]"
          >
            Let's Talk About
            <span className="block text-[#079B98]">
              Your Child's Health.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#687C81] md:text-lg">
            Have a question or want to arrange a consultation?
            Get in touch with Dr. Gaurav Jadon for information about
            pediatric healthcare and appointments.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT: Doctor profile */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[30px] bg-[#103640] p-8 text-white sm:p-10"
          >
            {/* Decorative background */}
            <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-12 top-32 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#079B98]/20 blur-[80px]" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <HeartPulse size={29} className="text-[#7FE1D8]" />
              </div>

              <p className="mt-9 text-xs font-bold uppercase tracking-[0.2em] text-[#7FE1D8]">
                Your Child's Health Matters
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Experienced Care.
                <span className="block text-[#7FE1D8]">
                  A Personal Approach.
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70 sm:text-base">
                Dr. Gaurav Jadon is a Consultant Pediatrician with
                28 years of clinical experience across India,
                Kuwait and the UAE, providing evidence-based
                healthcare for children.
              </p>
            </div>

            {/* Experience */}
            <div className="relative z-10 mt-10 flex items-center gap-5 border-y border-white/15 py-6">
              <div className="text-5xl font-bold tracking-tight text-[#7FE1D8]">
                28+
              </div>
              <div>
                <p className="font-bold text-white">
                  Years of Experience
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Pediatric clinical practice
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div className="relative z-10 mt-auto space-y-4 pt-10">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:border-[#7FE1D8]/50 hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7FE1D8]/10 text-[#7FE1D8]">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/50">
                        {item.label}
                      </p>
                      <p className="mt-1 break-all text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7FE1D8]"
                    />
                  </a>
                );
              })}
            </div>

            <div className="relative z-10 mt-7 flex items-center gap-3 text-xs text-white/55">
              <ShieldCheck size={17} className="text-[#7FE1D8]" />
              Compassionate, child-focused healthcare
            </div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[30px] border border-[#E0EBE9] bg-white p-7 shadow-[0_20px_70px_rgba(15,55,60,0.06)] sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#079B98]">
                  Appointment Enquiry
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#12313B] sm:text-3xl">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#7A8B90]">
                  Fill in your details and we'll have your enquiry
                  ready for the clinic.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E7F5F3] text-[#078B89] sm:flex">
                <Send size={22} />
              </div>
            </div>

            <form
              action="#"
              method="POST"
              className="mt-9 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-[#29464D]"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-[#DFE9E7] bg-[#F9FBFA] px-4 py-4 text-sm text-[#12313B] outline-none transition-all placeholder:text-[#A4B1B2] focus:border-[#079B98] focus:bg-white focus:ring-4 focus:ring-[#079B98]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold text-[#29464D]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-[#DFE9E7] bg-[#F9FBFA] px-4 py-4 text-sm text-[#12313B] outline-none transition-all placeholder:text-[#A4B1B2] focus:border-[#079B98] focus:bg-white focus:ring-4 focus:ring-[#079B98]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-[#29464D]"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-[#DFE9E7] bg-[#F9FBFA] px-4 py-4 text-sm text-[#12313B] outline-none transition-all placeholder:text-[#A4B1B2] focus:border-[#079B98] focus:bg-white focus:ring-4 focus:ring-[#079B98]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-[#29464D]"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What is your enquiry about?"
                  className="w-full rounded-xl border border-[#DFE9E7] bg-[#F9FBFA] px-4 py-4 text-sm text-[#12313B] outline-none transition-all placeholder:text-[#A4B1B2] focus:border-[#079B98] focus:bg-white focus:ring-4 focus:ring-[#079B98]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#29464D]"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-[#DFE9E7] bg-[#F9FBFA] px-4 py-4 text-sm text-[#12313B] outline-none transition-all placeholder:text-[#A4B1B2] focus:border-[#079B98] focus:bg-white focus:ring-4 focus:ring-[#079B98]/10"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#087F80] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#065F63] hover:shadow-lg hover:shadow-[#087F80]/20"
              >
                Send Enquiry
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <p className="text-center text-xs leading-6 text-[#91A0A2]">
                Please avoid sharing sensitive medical information
                through this general enquiry form.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}