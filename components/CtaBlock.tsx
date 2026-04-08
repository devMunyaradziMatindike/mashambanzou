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
      className="p-6 rounded-lg border border-brand-dark/10 bg-white hover:border-brand-warm/30 hover:shadow-md transition-all"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="font-heading text-xl font-semibold text-brand-dark">{title}</h3>
      <p className="mt-2 text-brand-dark/80">{description}</p>
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
