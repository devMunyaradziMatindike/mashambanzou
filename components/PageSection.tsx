"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function PageSection({
  children,
  className = "",
  noAnimation,
}: {
  children: React.ReactNode;
  className?: string;
  noAnimation?: boolean;
}) {
  if (noAnimation) {
    return <section className={className}>{children}</section>;
  }
  return (
    <motion.section {...fadeIn} className={className}>
      {children}
    </motion.section>
  );
}
