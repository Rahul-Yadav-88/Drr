"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  HeartPulse,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61580738070119",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/drgauravjadon",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/gauravjadon",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Dr. Jadon", href: "/about" },
  { label: "Pediatric Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A252D] text-white">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#079B98]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[#087F80]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Appointment banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mt-1 flex flex-col justify-between gap-6 overflow-hidden rounded-b-[26px] border-x border-b border-white/10 bg-[#123B43] px-7 py-8 sm:flex-row sm:items-center sm:px-10"
        >
          <div className="absolute -right-10 -top-20 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -right-2 -top-12 h-32 w-32 rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7FE1D8]">
              <HeartPulse size={16} />
              Pediatric Healthcare
            </div>

            <h2 className="max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
              Your Child's Health Deserves
              <span className="text-[#7FE1D8]"> Expert Attention.</span>
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Get in touch to enquire about a pediatric consultation.
            </p>
          </div>

          <Link
            href="/contact"
            className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#7FE1D8] px-7 py-4 text-sm font-bold text-[#103640] transition-all duration-300 hover:bg-white"
          >
            Book an Appointment
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">

          {/* Doctor identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7FE1D8] text-[#103640]">
                <Stethoscope size={25} />
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-white">
                  Dr. Gaurav Jadon
                </p>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-[#7FE1D8]">
                  Consultant Pediatrician
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/60">
              Dr. Gaurav Jadon is a Consultant Pediatrician with
              over 28 years of clinical experience across India,
              Kuwait and the UAE, providing compassionate and
              evidence-based healthcare for children.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Dr. Gaurav Jadon on ${social.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#7FE1D8] hover:bg-[#7FE1D8] hover:text-[#103640]"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#7FE1D8]">
              Explore
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="space-y-5">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-[#7FE1D8]"
                    >
                      <span className="h-px w-0 bg-[#7FE1D8] transition-all duration-300 group-hover:w-4" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#7FE1D8]">
              Contact Information
            </h3>

            <div className="space-y-6">

              <a
                href="tel:+971505870574"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-[#7FE1D8] transition-colors group-hover:bg-[#7FE1D8] group-hover:text-[#103640]">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/80 transition-colors group-hover:text-[#7FE1D8]">
                    0505870574
                  </p>
                </div>
              </a>

              <a
                href="mailto:seemagauravansh@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-[#7FE1D8] transition-colors group-hover:bg-[#7FE1D8] group-hover:text-[#103640]">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/40">
                    Email
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold text-white/80 transition-colors group-hover:text-[#7FE1D8]">
                    seemagauravansh@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-[#7FE1D8]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/80">
                    Dubai, UAE
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-5 border-t border-white/10 py-7 text-xs text-white/45 sm:flex-row sm:items-center">

          <p>
            © {new Date().getFullYear()} Dr. Gaurav Jadon. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#7FE1D8]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#7FE1D8]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 transition-colors hover:text-[#7FE1D8]"
            >
              Contact Us
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}