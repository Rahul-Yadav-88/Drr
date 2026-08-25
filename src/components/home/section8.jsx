"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Section8 = () => {
  return (
    <section className="relative mt-10 min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="/section8.png"
        alt="Dr. Gaurav Jadon"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07141F]/90 via-[#173448]/80 to-black/70" />

      {/* Decorative Blur */}
      <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-400/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            w-full
            max-w-6xl
            rounded-3xl
            border
            border-white/20
            bg-black/45
            backdrop-blur-2xl
            p-8
            md:p-16
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            text-center
          "
        >
          {/* Quote Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              mb-10
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-cyan-500/20
              border
              border-cyan-300/30
            "
          >
            <Quote size={38} className="text-cyan-300" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mb-8
              text-3xl
              font-bold
              text-white
              md:text-5xl
              drop-shadow-lg
            "
          >
            Excellence in Pediatric Care
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="
              mx-auto
              max-w-4xl
              text-lg
              leading-9
              text-white
              font-normal
              tracking-wide
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
              sm:text-xl
              md:text-2xl
              md:leading-[2.8rem]
              lg:text-[30px]
              lg:leading-[3.3rem]
            "
          >
            Dr. Gaurav Jadon is a Consultant Pediatrician with over{" "}
            <span className="font-bold text-cyan-300">
              28 years of post-specialization experience
            </span>{" "}
            across India, Kuwait, and the UAE. He specializes in General
            Pediatrics, combining clinical expertise with academic leadership.
            <br />
            <br />
            Certified by the European Board of Pediatrics, he actively
            contributes to teaching, clinical audits, and international
            research forums. Passionate about pediatric education and
            evidence-based practice, he continues to advance child health
            standards in the GCC region through compassionate care and lifelong
            learning.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="
              mx-auto
              my-10
              h-[3px]
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-white
              to-cyan-400
            "
          />

          {/* Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="
              text-3xl
              font-bold
              text-white
              md:text-4xl
              drop-shadow-lg
            "
          >
            Dr. Gaurav Jadon
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="
              mt-4
              text-base
              font-medium
              uppercase
              tracking-[0.35em]
              text-cyan-200
              md:text-lg
            "
          >
            Consultant Pediatrician
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section8;