"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CtaBlock({
  title,
  description,
  linkText,
  href,
}: {
  title: string;
  description: string;
  linkText: string;
  href: string;
}) {
  return (
    <motion.div
      className="p-6 rounded-lg border border-white/10 bg-brand-dark/15 backdrop-blur hover:border-white/20 hover:shadow-md hover:shadow-brand-dark/20 transition-all"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/80">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-brand-warm font-medium hover:underline"
      >
        {linkText}
        <span className="ml-1">→</span>
      </Link>
    </motion.div>
  );
}
