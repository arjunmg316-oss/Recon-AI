"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import Link from "next/link";

const contradictions = [
  {
    id: 1,
    witness1: "Witness A: Sarah Mitchell",
    statement1: "The suspect wore a red jacket and entered through the front door at 7:05 PM",
    witness2: "Witness B: James Chen",
    statement2: "I saw someone in a black hoodie enter from the rear entrance around 7:10 PM",
    inconsistency: "Clothing color, entry point, and time differ by 5 minutes",
    severity: "High",
    confidence: "94%",
  },
  {
    id: 2,
    witness1: "Witness C: Maria Rodriguez",
    statement1: "The altercation lasted approximately 15 minutes before police arrived",
    witness2: "Witness D: Robert Brown",
    statement2: "The noise only lasted about 5-7 minutes before things went silent",
    inconsistency: "Duration of incident significantly different between accounts",
    severity: "Medium",
    confidence: "87%",
  },
  {
    id: 3,
    witness1: "Security Log",
    statement1: "Front door alarm activated at 7:23 PM indicating exit",
    witness2: "Witness E: Lisa Thompson",
    statement2: "I saw the suspect running down the street at 7:15 PM heading east",
    inconsistency: "Exit timestamp contradicts eyewitness observation",
    severity: "Critical",
    confidence: "96%",
  },
];

export default function ContradictionsPage() {
  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="border-b border-neon-blue/10 bg-dark-gray/30 px-8 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <Link href="/dashboard">
              <motion.button
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowLeft className="w-6 h-6 text-neon-cyan" />
              </motion.button>
            </Link>
            <div>
              <h1 className="text-3xl font-black gradient-text">
                Contradiction Detection
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                AI witness statement analysis and inconsistency flagging
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="p-8 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Summary Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {[
                { label: "Total Contradictions", value: "3", color: "purple" },
                { label: "Critical Issues", value: "1", color: "blue" },
                {
                  label: "Average Confidence",
                  value: "92.3%",
                  color: "cyan",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <GlassCard gradient={stat.color as any} className="p-6">
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Contradictions List */}
            <motion.div
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              {contradictions.map((contradiction, i) => {
                const severityColor = {
                  Critical: "border-l-4 border-l-red-500",
                  High: "border-l-4 border-l-neon-purple",
                  Medium: "border-l-4 border-l-neon-blue",
                  Low: "border-l-4 border-l-neon-cyan",
                }[contradiction.severity as any];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <GlassCard
                      gradient="cyan"
                      className={`p-6 space-y-4 ${severityColor}`}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <motion.div
                          className="flex items-center gap-2"
                          animate={{
                            scale:
                              contradiction.severity === "Critical"
                                ? [1, 1.05, 1]
                                : 1,
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <AlertTriangle
                            className={`w-5 h-5 ${
                              contradiction.severity === "Critical"
                                ? "text-red-500"
                                : contradiction.severity === "High"
                                ? "text-neon-purple"
                                : "text-neon-blue"
                            }`}
                          />
                          <span className="font-bold text-white">
                            Contradiction #{contradiction.id}
                          </span>
                        </motion.div>
                        <motion.div
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            contradiction.severity === "Critical"
                              ? "bg-red-500/20 text-red-500"
                              : contradiction.severity === "High"
                              ? "bg-neon-purple/20 text-neon-purple"
                              : "bg-neon-blue/20 text-neon-blue"
                          }`}
                          animate={{
                            scale:
                              contradiction.severity === "Critical"
                                ? [1, 1.1, 1]
                                : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        >
                          {contradiction.severity}
                        </motion.div>
                      </div>

                      {/* Witness Comparison */}
                      <motion.div
                        className="grid md:grid-cols-2 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Witness 1 */}
                        <motion.div
                          className="p-4 bg-white/5 border border-neon-blue/20 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-neon-cyan font-semibold text-sm mb-2">
                            {contradiction.witness1}
                          </p>
                          <p className="text-gray-300 text-sm">
                            "{contradiction.statement1}"
                          </p>
                        </motion.div>

                        {/* Witness 2 */}
                        <motion.div
                          className="p-4 bg-white/5 border border-neon-purple/20 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-neon-purple font-semibold text-sm mb-2">
                            {contradiction.witness2}
                          </p>
                          <p className="text-gray-300 text-sm">
                            "{contradiction.statement2}"
                          </p>
                        </motion.div>
                      </motion.div>

                      {/* AI Analysis */}
                      <motion.div
                        className="pt-4 border-t border-neon-blue/20 space-y-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="font-semibold text-white">AI Analysis:</p>
                        <p className="text-gray-300 text-sm">
                          <span className="text-neon-cyan font-semibold">
                            Inconsistency:
                          </span>{" "}
                          {contradiction.inconsistency}
                        </p>

                        {/* Confidence Score */}
                        <motion.div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-400">
                                Detection Confidence
                              </span>
                              <span className="text-neon-cyan font-bold">
                                {contradiction.confidence}
                              </span>
                            </div>
                            <motion.div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-neon"
                                initial={{ width: 0 }}
                                animate={{
                                  width: contradiction.confidence,
                                }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Actions */}
                      <motion.div
                        className="flex gap-2 pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <NeonButton size="sm" color="blue" className="flex-1">
                          Flag for Review
                        </NeonButton>
                        <NeonButton size="sm" color="purple" className="flex-1">
                          Request Clarification
                        </NeonButton>
                      </motion.div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Recommendations */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <GlassCard gradient="purple" className="p-6">
                <h3 className="text-xl font-bold text-neon-purple mb-4">
                  AI Recommendations
                </h3>
                <motion.div
                  className="space-y-3"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.9 }}
                >
                  {[
                    "Request re-interview with Witness A regarding specific timeline",
                    "Cross-reference security footage during the disputed 7:05-7:10 PM window",
                    "Investigate the critical contradiction regarding exit time vs. witness sighting",
                    "Verify camera malfunction log during 7:18-7:23 PM period",
                  ].map((rec, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-neon-purple"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        {i + 1}
                      </motion.div>
                      <p className="text-gray-300 text-sm">{rec}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </GlassCard>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Link href="/final-reconstruction" className="flex-1">
                <NeonButton size="lg" color="gradient" className="w-full">
                  View Final Reconstruction
                </NeonButton>
              </Link>
              <Link href="/timeline" className="flex-1">
                <NeonButton size="lg" color="blue" className="w-full">
                  Back to Timeline
                </NeonButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <FloatingOrb />
    </div>
  );
}
