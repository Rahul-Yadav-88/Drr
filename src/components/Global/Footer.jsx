"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  ArrowRight,
  HeartPulse,
} from "lucide-react";

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61580738070119",
    bg: "from-blue-600 to-blue-500",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/drgauravjadon",
    bg: "from-pink-500 via-purple-500 to-orange-400",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/gauravjadon",
    bg: "from-sky-600 to-blue-700",
    label: "LinkedIn",
  },
];

const stats = [
  ["28+", "Years"],
  ["5000+", "Happy Families"],
  ["24/7", "Support"],
  ["100%", "Trusted"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#122430] via-[#171d23] to-black text-white pt-24">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Floating Social Buttons */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-50"
      >
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`group flex items-center gap-3 rounded-full bg-gradient-to-r ${social.bg} px-4 py-3 shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <Icon size={20} />

              <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-32 transition-all duration-300">
                {social.label}
              </span>
            </a>
          );
        })}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* CTA */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
            <HeartPulse size={16} />
            Pediatric Care
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Your Child Deserves Exceptional Care
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Book a consultation with Dr. Gaurav Jadon for compassionate,
            evidence-based pediatric care.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">

            <Link
              href="/contact"
              className="rounded-full bg-cyan-500 hover:bg-cyan-400 px-8 py-4 font-semibold flex items-center gap-2 text-white transition-all duration-300 hover:scale-105"
            >
              Book Appointment
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:0505870574"
              className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 transition-all duration-300"
            >
              Call Now
            </a>

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-14">

          {stats.map(([number, label]) => (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              key={label}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-cyan-300">
                {number}
              </div>

              <div className="text-white/70 mt-2">
                {label}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Footer Columns */}
        <div className="grid md:grid-cols-3 gap-10 py-8">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              About
            </h3>

            <p className="text-white/70 leading-8">
              Dr. Gaurav Jadon is a Consultant Pediatrician with 28+ years
              of experience across India, Kuwait and the UAE, delivering
              compassionate care for children.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-white/70">

              <a
                href="mailto:seemagauravansh@gmail.com"
                className="flex items-start gap-3 hover:text-cyan-300 transition-colors"
              >
                <Mail className="shrink-0 mt-1" size={20} />
                <span>seemagauravansh@gmail.com</span>
              </a>

              <a
                href="tel:0505870574"
                className="flex items-center gap-3 hover:text-cyan-300 transition-colors"
              >
                <Phone className="shrink-0" size={20} />
                <span>0505870574</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={20} />

                <span>
                  53 Street, Al Garhoud, Dubai,
                  United Arab Emirates.
                </span>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col items-start gap-3">

              <Link
                href="/about"
                className="text-white/70 hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >
                About →
              </Link>

              <Link
                href="/services"
                className="text-white/70 hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >
                Services →
              </Link>

              <Link
                href="/contact"
                className="text-white/70 hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >
                Contact →
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">

          <p>
            © 2026 Dr. Gaurav Jadon. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="/privacy"
              className="hover:text-cyan-300 transition-colors"
            >
              Private Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-300 transition-colors"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}