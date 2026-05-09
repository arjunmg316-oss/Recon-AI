"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: "blue" | "purple" | "cyan" | "none";
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  gradient = "none",
}: GlassCardProps) {
  const baseClass =
    "bg-white/[0.03] backdrop-blur-xl border border-white/[0.1] rounded-2xl";
  const hoverClass = hover ? "transition-all duration-300 hover:bg-white/[0.08] hover:border-neon-blue/50" : "";
  const gradientClass = {
    blue: "hover:shadow-neon-blue",
    purple: "hover:shadow-neon-purple",
    cyan: "hover:shadow-neon-cyan",
    none: "",
  }[gradient];

  return (
    <motion.div
      className={`${baseClass} ${hoverClass} ${gradientClass} ${className}`}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
