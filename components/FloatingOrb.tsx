"use client";

import { motion } from "framer-motion";

export function FloatingOrb() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-neon/30 border border-neon-cyan/50 flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 20px rgba(0, 212, 255, 0.5)",
            "0 0 40px rgba(0, 212, 255, 0.8)",
            "0 0 20px rgba(0, 212, 255, 0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-neon-blue/50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Pulse rings */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full border border-neon-cyan/50"
          animate={{ scale: [1, 2], opacity: [1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.4,
          }}
        />
      ))}
    </motion.div>
  );
}
