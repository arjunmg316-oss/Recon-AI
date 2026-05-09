"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const analysisSteps = [
  "Analyzing witness statements…",
  "Cross-referencing testimony…",
  "Detecting contradictions…",
  "Mapping spatial relationships…",
  "Reconstructing timeline…",
  "Generating probability models…",
  "Calculating confidence scores…",
  "Finalizing narrative…",
];

export default function AIAnalysisPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  useEffect(() => {
    if (currentStep < analysisSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setAnalysisComplete(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const progress = ((currentStep + 1) / analysisSteps.length) * 100;

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
                AI Reconstruction Analysis
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Neural pattern recognition and holographic scene reconstruction
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="p-8 max-w-4xl mx-auto min-h-[calc(100vh-180px)] flex items-center justify-center">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {!analysisComplete ? (
              <GlassCard gradient="cyan" className="p-12">
                <div className="space-y-12">
                  {/* Rotating Holographic Loader */}
                  <motion.div
                    className="flex justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="relative w-40 h-40">
                      {/* Outer Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-blue border-r-neon-purple"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />

                      {/* Middle Ring */}
                      <motion.div
                        className="absolute inset-4 rounded-full border-2 border-transparent border-b-neon-cyan border-l-neon-blue"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />

                      {/* Inner Glow */}
                      <motion.div
                        className="absolute inset-12 rounded-full bg-gradient-neon/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Center Dot */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan"
                        animate={{
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            "0 0 10px rgba(0, 212, 255, 0.5)",
                            "0 0 20px rgba(0, 212, 255, 1)",
                            "0 0 10px rgba(0, 212, 255, 0.5)",
                          ],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Analysis Messages */}
                  <motion.div
                    className="space-y-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {/* Current Step */}
                    <motion.div
                      key={currentStep}
                      className="space-y-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.p
                        className="text-2xl font-bold text-neon-cyan"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {analysisSteps[currentStep]}
                      </motion.p>
                    </motion.div>

                    {/* Previous Steps */}
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {analysisSteps.slice(0, currentStep).map((step, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-neon-blue"
                            animate={{
                              scale: [1, 1.5, 1],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <p className="text-sm font-mono">{step}</p>
                          <motion.span
                            className="text-neon-cyan font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            ✓
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Progress Bar */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-400">Analysis Progress</p>
                      <p className="text-neon-cyan font-bold">{Math.round(progress)}%</p>
                    </div>
                    <motion.div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-neon"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* System Status */}
                  <motion.div
                    className="flex justify-center gap-4 text-xs font-mono text-gray-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div className="w-2 h-2 rounded-full bg-neon-green" />
                      NEURAL NETWORK ACTIVE
                    </div>
                    <div>|</div>
                    <div>MEMORY: 847.3 MB</div>
                  </motion.div>
                </div>
              </GlassCard>
            ) : (
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Success Glow */}
                <motion.div
                  className="flex justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="relative w-32 h-32">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-neon/30"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(0, 212, 255, 0.5)",
                          "0 0 60px rgba(0, 212, 255, 0.8)",
                          "0 0 20px rgba(0, 212, 255, 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-neon-cyan flex items-center justify-center text-4xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      ✓
                    </motion.div>
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  className="text-center space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-4xl font-black gradient-text">
                    Analysis Complete
                  </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Holographic reconstruction successful. Scene visualization and detailed
                    timeline analysis are ready for review.
                  </p>
                </motion.div>

                {/* Result Cards */}
                <motion.div
                  className="grid md:grid-cols-3 gap-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    {
                      label: "Timeline Events",
                      value: "12",
                      color: "blue",
                    },
                    {
                      label: "Contradictions Detected",
                      value: "3",
                      color: "purple",
                    },
                    {
                      label: "Confidence Score",
                      value: "89.7%",
                      color: "cyan",
                    },
                  ].map((result, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * (i + 1) }}
                    >
                      <GlassCard gradient={result.color as any} className="p-6">
                        <p className="text-gray-400 text-sm mb-2">{result.label}</p>
                        <p className="text-3xl font-bold text-white">{result.value}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/timeline" className="flex-1">
                    <NeonButton size="lg" color="gradient" className="w-full">
                      View Timeline Reconstruction
                    </NeonButton>
                  </Link>
                  <Link href="/dashboard" className="flex-1">
                    <NeonButton size="lg" color="blue" className="w-full">
                      Return to Dashboard
                    </NeonButton>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <FloatingOrb />
    </div>
  );
}
