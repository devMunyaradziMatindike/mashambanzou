"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-cream px-6 py-16 text-center"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-sunlight/25 blur-3xl" />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative z-10 mb-8"
      >
        <Image src="/logo.png" alt="Mashambanzou Care Trust" width={80} height={80} className="mx-auto h-20 w-20 object-contain" priority />
      </motion.div>

      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 mb-10 flex h-40 w-40 items-center justify-center rounded-full border-4 border-brand-green/20 bg-white shadow-xl shadow-brand-green/10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border-2 border-dashed border-brand-green/30"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Clock className="h-16 w-16 text-brand-green" strokeWidth={1.5} aria-hidden />
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-sm font-bold uppercase tracking-[0.35em] text-brand-green"
      >
        Mashambanzou Care Trust
      </motion.p>

      <motion.h1
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="relative z-10 mt-4 font-heading text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl md:text-6xl"
      >
        Coming Soon
      </motion.h1>

      <motion.p
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 mt-4 max-w-md text-base text-brand-dark/70 sm:text-lg"
      >
        Our website is being prepared. Please check back soon for updates on our work in Harare and beyond.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="relative z-10 mt-8 flex gap-2"
        aria-hidden
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-brand-green"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
