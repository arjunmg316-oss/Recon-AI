"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function FinalReconstructionPage() {
  const [showNarrative, setShowNarrative] = useState(true);

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
                Final Scene Reconstruction
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Holographic crime scene visualization with AI narrative analysis
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="p-8 max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {/* Left: Scene Visualization */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-neon-cyan">
                Holographic Reconstruction
              </h2>

              <GlassCard gradient="purple" className="p-8">
                {/* Hologram Container */}
                <motion.div
                  className="relative w-full aspect-square bg-gradient-neon/10 border border-neon-purple/30 rounded-lg overflow-hidden flex items-center justify-center"
                  animate={{
                    borderColor: [
                      "rgba(176, 38, 255, 0.3)",
                      "rgba(0, 212, 255, 0.3)",
                      "rgba(176, 38, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Scanning lines */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, rgba(0, 212, 255, 0.1) 0px, rgba(0, 212, 255, 0.1) 1px, transparent 1px, transparent 2px)",
                      backgroundSize: "100% 4px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "0px 4px"] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                  />

                  {/* 3D Scene Elements */}
                  <motion.div
                    className="relative z-10 w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="space-y-6 w-3/4">
                      {/* Entry Point */}
                      <motion.div
                        className="space-y-2"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-8 h-8 rounded-full border-2 border-neon-cyan"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                "0 0 10px rgba(0, 212, 255, 0.5)",
                                "0 0 20px rgba(0, 212, 255, 0.8)",
                                "0 0 10px rgba(0, 212, 255, 0.5)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <p className="text-neon-cyan text-sm font-mono">
                            ENTRY POINT
                          </p>
                        </div>
                      </motion.div>

                      {/* Path */}
                      <motion.svg
                        viewBox="0 0 200 100"
                        className="w-full h-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.path
                          d="M 10 50 Q 60 20, 110 50 T 190 50"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.7 }}
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.8)" />
                            <stop offset="50%" stopColor="rgba(176, 38, 255, 0.8)" />
                            <stop offset="100%" stopColor="rgba(0, 212, 255, 0.8)" />
                          </linearGradient>
                        </defs>
                      </motion.svg>

                      {/* Exit Point */}
                      <motion.div
                        className="space-y-2"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-8 h-8 rounded-full border-2 border-neon-purple"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                "0 0 10px rgba(176, 38, 255, 0.5)",
                                "0 0 20px rgba(176, 38, 255, 0.8)",
                                "0 0 10px rgba(176, 38, 255, 0.5)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          />
                          <p className="text-neon-purple text-sm font-mono">
                            EXIT POINT
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Scene Details */}
                <motion.div
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Scene Confidence:</span>
                    <span className="text-neon-cyan font-bold">89.7%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-neon"
                      initial={{ width: 0 }}
                      animate={{ width: "89.7%" }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </div>
                </motion.div>
              </GlassCard>

              {/* Confidence Metrics */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {[
                  { label: "Timeline Accuracy", value: "94%" },
                  { label: "Evidence Match", value: "88%" },
                  { label: "Witness Alignment", value: "86%" },
                  { label: "Scene Probability", value: "92%" },
                ].map((metric, i) => (
                  <GlassCard gradient="blue" key={i} className="p-4">
                    <p className="text-gray-400 text-xs mb-2">{metric.label}</p>
                    <p className="text-2xl font-bold text-neon-cyan">
                      {metric.value}
                    </p>
                  </GlassCard>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: AI Narrative & Summary */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-neon-cyan">
                AI-Generated Narrative
              </h2>

              <GlassCard gradient="cyan" className="p-6 h-full">
                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b border-neon-blue/20">
                  <motion.button
                    onClick={() => setShowNarrative(true)}
                    className={`px-4 py-2 text-sm font-semibold border-b-2 ${
                      showNarrative
                        ? "border-neon-cyan text-neon-cyan"
                        : "border-transparent text-gray-400 hover:text-white"
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Narrative
                  </motion.button>
                  <motion.button
                    onClick={() => setShowNarrative(false)}
                    className={`px-4 py-2 text-sm font-semibold border-b-2 ${
                      !showNarrative
                        ? "border-neon-cyan text-neon-cyan"
                        : "border-transparent text-gray-400 hover:text-white"
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Summary
                  </motion.button>
                </div>

                {/* Content */}
                <motion.div
                  className="space-y-4 max-h-96 overflow-y-auto"
                  key={showNarrative ? "narrative" : "summary"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {showNarrative ? (
                    <>
                      <motion.p
                        className="text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Based on holographic reconstruction and AI pattern analysis, the
                        suspect entered the building at approximately 7:05 PM through the
                        rear entrance, contrary to initial witness accounts. The suspect
                        remained on premises for roughly 20 minutes before exiting through
                        the front entrance at 7:25 PM.
                      </motion.p>

                      <motion.p
                        className="text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Security system tampering occurred between 7:18-7:23 PM, indicating
                        premeditation. Evidence suggests the suspect had prior knowledge of
                        the facility layout and security infrastructure. Witness statements
                        align with 94% accuracy to the reconstructed timeline.
                      </motion.p>

                      <motion.p
                        className="text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        The critical 8-minute gap between the suspected exit time (7:25 PM)
                        and when one witness observed the suspect fleeing (7:15 PM) requires
                        further investigation. This discrepancy may indicate a second suspect
                        or an error in timeline reconstruction.
                      </motion.p>
                    </>
                  ) : (
                    <div className="space-y-3">
                      {[
                        {
                          label: "Suspect Entry Time:",
                          value: "7:05 PM (Rear Entrance)",
                        },
                        {
                          label: "Time on Premises:",
                          value: "~20 minutes",
                        },
                        {
                          label: "Suspect Exit Time:",
                          value: "7:25 PM (Front Entrance)",
                        },
                        {
                          label: "Security Tampering:",
                          value: "7:18-7:23 PM",
                        },
                        {
                          label: "Overall Confidence:",
                          value: "89.7%",
                        },
                        {
                          label: "Investigation Status:",
                          value: "Active - Requires Follow-up",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex justify-between items-start p-3 bg-white/5 border border-neon-blue/20 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 * i }}
                        >
                          <span className="text-gray-400 text-sm">
                            {item.label}
                          </span>
                          <span className="text-neon-cyan font-semibold text-sm">
                            {item.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </GlassCard>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <NeonButton
                  size="lg"
                  color="gradient"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Generate Alternate Reconstruction
                </NeonButton>
                <NeonButton size="lg" color="blue" className="w-full">
                  Export Investigation Report
                </NeonButton>
                <Link href="/dashboard" className="w-full">
                  <NeonButton size="lg" color="cyan" className="w-full">
                    Back to Dashboard
                  </NeonButton>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <FloatingOrb />
    </div>
  );
}
