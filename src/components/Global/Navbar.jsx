"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Lock background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Close menu with Escape.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  // Close menu after navigating to another page.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  const isActive = (href) => pathname === href;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
      >
        {/* Logo and brand */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Dr. Gaurav Jadon - Home"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Dr. Gaurav Jadon logo"
            width={56}
            height={56}
            priority
            sizes="56px"
            className="h-12 w-12 rounded-full border-2 border-cyan-100 object-cover md:h-14 md:w-14"
          />

          <div className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-slate-800 md:text-xl">
              Dr. Gaurav Jadon
            </span>

            <span className="mt-1 block text-xs font-medium text-cyan-700 md:text-sm">
              Consultant Pediatrician
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex py-2 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "text-cyan-700"
                      : "text-slate-600 hover:text-cyan-700"
                  }`}
                >
                  {link.name}

                  {active && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-cyan-600"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop appointment CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 md:inline-flex"
        >
          <Calendar size={17} aria-hidden="true" />
          Book Appointment
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-cyan-50 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {open ? (
                <X size={23} aria-hidden="true" />
              ) : (
                <Menu size={23} aria-hidden="true" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="px-5 pb-6 pt-4">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.04,
                      }}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between py-4 text-base font-semibold transition-colors ${
                          active
                            ? "text-cyan-700"
                            : "text-slate-700 hover:text-cyan-700"
                        }`}
                      >
                        {link.name}

                        {active && (
                          <span className="h-2 w-2 rounded-full bg-cyan-600" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
              >
                <Calendar size={18} aria-hidden="true" />
                Book Appointment
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}