
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Globe2,
  Award,
  HeartPulse,
  CheckCircle2,
  Microscope,
  Users,
  Building2,
  Medal,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "General Pediatrics",
    description:
      "Comprehensive care for infants, children and adolescents, including childhood illnesses, vaccinations, growth and development monitoring.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Neonatology & Critical Care",
    description:
      "Clinical experience in neonatal intensive care, pediatric intensive care, emergency management and complex pediatric cases.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Medical Education",
    description:
      "15 years of mentoring pediatric trainees, registrars and nursing staff through clinical teaching, seminars and academic activities in the UAE.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Research & Publications",
    description:
      "Four PubMed-indexed publications, international conference presentations and participation in clinical audits and quality improvement.",
    icon: Microscope,
  },
];

const career = [
  {
    period: "Nov 2025 – Present",
    position: "Consultant Pediatrician",
    organization: "Mediclinic Welcare Hospital",
    location: "Dubai, UAE",
    description:
      "Providing inpatient and outpatient pediatric care, managing emergencies, childhood vaccinations, growth and development, and adolescent health counselling. Participating in MBRU academic teaching.",
  },
  {
    period: "May 2011 – Nov 2025",
    position: "Specialist Pediatrician / Consultant & Deputy HOD",
    organization: "NMC Specialty Hospital",
    location: "Dubai, UAE",
    description:
      "Led pediatric services, supervised registrars, conducted CMEs and clinical audits, implemented protocols and coordinated AFP surveillance with DHA.",
  },
  {
    period: "Aug 2007 – May 2011",
    position: "Fellow Registrar – Pediatric Intensive Care",
    organization: "Mubarak Al Kabir Hospital & Medical College",
    location: "Kuwait",
    description:
      "Managed critically ill pediatric patients in a tertiary PICU, including advanced airway management, invasive monitoring and ventilation.",
  },
  {
    period: "Jun 1998 – Aug 2007",
    position: "Consultant / Registrar – Pediatrics & Neonatology",
    organization: "Fortis Escorts Hospital",
    location: "Faridabad, India",
    description:
      "Managed NICU and pediatric critical care services, pediatric OPD and IPD, and participated in DNB teaching, seminars and bedside clinical education.",
  },
  {
    period: "Jan 1998 – Jun 1998",
    position: "Registrar – Pediatrics",
    organization: "Jaipur Golden Hospital",
    location: "New Delhi, India",
    description:
      "Managed neonatal intensive care and pediatric inpatient cases.",
  },
];

const education = [
  {
    degree: "Professional Diploma in Pediatrics",
    institute: "Royal College of Physicians of Ireland",
    location: "Ireland",
  },
  {
    degree: "Diploma in European Board of Pediatrics",
    institute: "European Board of Pediatrics",
    location: "Europe",
  },
  {
    degree: "DNB – Pediatrics",
    institute: "Fortis Escorts Hospital",
    location: "Faridabad, India · 2006",
  },
  {
    degree: "DCH – Diploma in Child Health",
    institute: "PGIMS Rohtak",
    location: "India · 1997",
  },
  {
    degree: "MBBS",
    institute: "PGIMS Rohtak",
    location: "India · 1993",
  },
  {
    degree: "Fellowship in Child Health",
    institute: "Society for Advanced Studies in Medical Sciences",
    location: "New Delhi",
  },
  {
    degree: "Post Graduate Certificate Course in Adolescent Health",
    institute: "IMA",
    location: "New Delhi, India",
  },
];

const publications = [
  {
    title:
      "Impact of nutritional status on mortality and clinical outcomes in pediatric intensive care",
    journal: "Clinical Nutrition · 2025",
    pmid: "40516325",
  },
  {
    title: "Role of biomarkers in pediatric sepsis",
    journal: "World Journal of Clinical Pediatrics · 2026",
    pmid: "41884047",
  },
  {
    title: "Exploring nutritional screening tools for hospitalized children",
    journal: "Clinical and Experimental Pediatrics · 2025",
    pmid: "41125225",
  },
  {
    title:
      "Promising role of voxelotor in managing sickle cell disease in children",
    journal: "Clinical and Experimental Pediatrics · 2025",
    pmid: "39533724",
  },
];

const awards = [
  {
    title: "Pediatrician of the Year Award",
    detail:
      "Sixth Edition of the Annual HEALTH Awards 2026, UAE.",
    icon: Award,
  },
  {
    title: "Dr. James Flett Gold Medal",
    detail: "National IAP Conference, Mumbai, India.",
    icon: Medal,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Section2() {
  return (
    <section
      id="about-doctor"
      aria-labelledby="doctor-profile-heading"
      className="relative isolate overflow-hidden bg-[#092D35] text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[url('/about2.png')] bg-cover bg-center" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[#082B33]/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06252D]/90 via-[#092D35]/65 to-[#092D35]/85" />

      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-9 sm:py-16 lg:px-16 lg:py-20">

        {/* PROFILE HEADER */}
        <div className="grid gap-7 border-b border-white/20 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#61D3C5]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8DE4D9]">
                About the Doctor
              </span>
            </div>

            <h2
              id="doctor-profile-heading"
              className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[68px]"
            >
              A Career Dedicated
              <br className="hidden sm:block" />
              to{" "}
              <span className="text-[#66D7C8]">
                Advancing Children's Health.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-5 lg:pb-2"
          >
            <div>
              <span className="block text-6xl font-semibold leading-none tracking-[-0.07em] text-white sm:text-7xl">
                29<span className="text-[#66D7C8]">+</span>
              </span>
              <span className="mt-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-white/65">
                Years Experience
              </span>
            </div>

            <div className="h-16 w-px bg-white/25" />

            <div>
              <Globe2 size={23} className="mb-2 text-[#66D7C8]" />
              <span className="block text-sm font-semibold">
                India · Kuwait · UAE
              </span>
              <span className="mt-1 block text-xs text-white/60">
                International Practice
              </span>
            </div>
          </motion.div>
        </div>

        {/* PROFESSIONAL INTRODUCTION */}
        <div className="grid gap-8 border-b border-white/20 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
              Professional Profile
            </span>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Dr. Gaurav Jadon
            </h3>

            <p className="mt-2 text-base font-medium text-[#83DCCF]">
              Consultant Pediatrician
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["DNB Pediatrics", "DCH", "MBBS", "European Board of Pediatrics"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/75"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <p className="text-base leading-8 text-white/80 sm:text-lg">
              Dr. Gaurav Jadon is an experienced Consultant Pediatrician
              with over 29 years of post-specialization experience in
              General Pediatrics, Neonatology and Pediatric Intensive
              Care across India, Kuwait and the UAE.
            </p>

            <p className="mt-4 text-base leading-8 text-white/70">
              His professional interests include undergraduate and
              postgraduate medical education, clinical mentoring,
              evidence-based pediatric practice, research publications
              and quality improvement initiatives. He has also spent
              15 years mentoring trainees, residents and nursing staff
              in the UAE.
            </p>
          </motion.div>
        </div>

        {/* CLINICAL EXPERTISE */}
        <div className="pt-10">
          <div className="mb-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
              Areas of Expertise
            </span>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Clinical Expertise & Contributions
            </h3>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 xl:grid-cols-4"
          >
            {expertise.map((entry) => {
              const Icon = entry.icon;

              return (
                <motion.article
                  key={entry.number}
                  variants={item}
                  className="group relative min-h-[245px] bg-[#0B3540]/95 p-6 transition-colors duration-300 hover:bg-[#10505A]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.15em] text-[#68D9CA]">
                      / {entry.number}
                    </span>

                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-white/65 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#77E0D1]"
                    />
                  </div>

                  <h4 className="mt-8 text-xl font-semibold">
                    {entry.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {entry.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#66D7C8] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* CAREER TIMELINE */}
        <div className="mt-16 border-t border-white/20 pt-10">
          <div className="mb-9">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
              Professional Experience
            </span>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Career Journey
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              A professional journey spanning hospitals and healthcare
              institutions across India, Kuwait and the UAE.
            </p>
          </div>

          <div className="relative ml-2 border-l border-[#68D9CA]/40 pl-7 sm:ml-4 sm:pl-10">
            {career.map((job, index) => (
              <motion.article
                key={job.organization}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[34px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#68D9CA] bg-[#092D35] sm:-left-[47px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#68D9CA]" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#68D9CA]">
                  {job.period}
                </span>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold sm:text-xl">
                    {job.position}
                  </h4>

                  <span className="flex items-center gap-1.5 text-xs text-white/50">
                    <Globe2 size={14} />
                    {job.location}
                  </span>
                </div>

                <p className="mt-1 flex items-center gap-2 text-sm font-medium text-[#83DCCF]">
                  <Building2 size={15} />
                  {job.organization}
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65">
                  {job.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-16 border-t border-white/20 pt-10">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap size={25} className="text-[#68D9CA]" />
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
                Academic Background
              </span>
              <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">
                Education & Qualifications
              </h3>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-xl border border-white/15 bg-[#0B3540]/85 p-5 transition-all duration-300 hover:border-[#68D9CA]/50 hover:bg-[#10505A]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#68D9CA]">
                    0{index + 1}
                  </span>
                  <CheckCircle2
                    size={18}
                    className="text-[#68D9CA]"
                  />
                </div>

                <h4 className="text-base font-semibold leading-6">
                  {edu.degree}
                </h4>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {edu.institute}
                </p>

                <p className="mt-2 text-xs text-[#83DCCF]">
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RESEARCH AND PUBLICATIONS */}
        <div className="mt-16 border-t border-white/20 pt-10">
          <div className="mb-8 flex items-center gap-3">
            <BookOpen size={24} className="text-[#68D9CA]" />
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
                Scientific Contributions
              </span>
              <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">
                Research & Publications
              </h3>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-4 rounded-xl border border-[#68D9CA]/25 bg-[#0B3540]/80 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#68D9CA]/10 text-[#68D9CA]">
              <Microscope size={25} />
            </div>

            <div>
              <span className="block text-3xl font-bold text-[#68D9CA]">
                04
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60">
                PubMed-Indexed Publications
              </span>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/65 sm:ml-auto">
              Research contributions covering pediatric nutrition,
              sepsis biomarkers and sickle cell disease management.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {publications.map((publication, index) => (
              <article
                key={publication.pmid}
                className="rounded-xl border border-white/15 bg-[#0B3540]/85 p-5 transition-colors hover:border-[#68D9CA]/50"
              >
                <span className="text-xs font-bold text-[#68D9CA]">
                  PUBLICATION 0{index + 1}
                </span>

                <h4 className="mt-3 text-base font-semibold leading-7">
                  {publication.title}
                </h4>

                <p className="mt-3 text-sm text-white/60">
                  {publication.journal}
                </p>

                <p className="mt-2 text-xs text-[#83DCCF]">
                  PMID: {publication.pmid}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* AWARDS */}
        <div className="mt-16 border-t border-white/20 pt-10">
          <div className="mb-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8DE4D9]">
              Recognition & Achievements
            </span>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Awards & Honours
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {awards.map((awardItem) => {
              const Icon = awardItem.icon;

              return (
                <div
                  key={awardItem.title}
                  className="flex items-start gap-5 rounded-xl border border-white/15 bg-[#0B3540]/85 p-6 transition-colors hover:border-[#68D9CA]/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#68D9CA]/10 text-[#68D9CA]">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      {awardItem.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-white/60">
                      {awardItem.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TEACHING AND LEADERSHIP */}
        <div className="mt-16 grid gap-7 border-t border-white/20 pt-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Users size={23} className="text-[#68D9CA]" />
              <h3 className="text-xl font-semibold">
                Teaching & Mentorship
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Faculty trainer for DNB postgraduate students, interns
              and nursing staff. Experienced in bedside teaching,
              journal clubs, seminars, CME presentations and guiding
              junior doctors in pediatric emergency, NICU and PICU
              management.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Award size={23} className="text-[#68D9CA]" />
              <h3 className="text-xl font-semibold">
                Leadership & Administration
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Experienced in departmental quality improvement,
              clinical audits, protocol development, registrar
              supervision, multidisciplinary collaboration and
              coordination of AFP surveillance activities with DHA.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-8">
          <div>
            <p className="text-lg font-semibold">
              Explore the complete professional profile
            </p>
            <p className="mt-1 text-sm text-white/55">
              Learn more about clinical experience and academic contributions.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 border-b border-[#68D9CA] pb-2 text-sm font-semibold text-white transition-colors hover:text-[#68D9CA]"
          >
            Book an Appointment
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
