"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  color?: "blue" | "purple" | "cyan" | "gradient";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export function NeonButton({
  children,
  onClick,
  className = "",
  color = "gradient",
  size = "md",
  disabled = false,
}: NeonButtonProps) {
  const colorClass = {
    blue: "bg-neon-blue/20 border-neon-blue hover:bg-neon-blue/40 hover:shadow-neon-blue",
    purple: "bg-neon-purple/20 border-neon-purple hover:bg-neon-purple/40 hover:shadow-neon-purple",
    cyan: "bg-neon-cyan/20 border-neon-cyan hover:bg-neon-cyan/40 hover:shadow-neon-cyan",
    gradient: "bg-gradient-neon/20 border-transparent hover:shadow-glow",
  }[color];

  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${colorClass} ${sizeClass} border rounded-lg font-semibold transition-all duration-300 ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {children}
    </motion.button>
  );
}
