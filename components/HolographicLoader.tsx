"use client";

import { motion } from "framer-motion";

export function HolographicLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Rotating outer ring */}
      <motion.div
        className="relative w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-blue border-r-neon-purple"></div>
      </motion.div>

      {/* Rotating inner ring */}
      <motion.div
        className="absolute relative w-24 h-24"
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-b-neon-cyan border-l-neon-purple"></div>
      </motion.div>

      {/* Center glow */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-neon-blue/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Text */}
      <motion.p
        className="text-neon-cyan font-semibold mt-20 text-sm tracking-widest"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        RECONSTRUCTING...
      </motion.p>
    </div>
  );
}
