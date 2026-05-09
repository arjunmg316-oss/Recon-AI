"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const timelineEvents = [
  {
    time: "6:45 PM",
    title: "Initial Report Received",
    description: "Emergency call made to dispatch center",
    confidence: "100%",
    type: "call",
  },
  {
    time: "7:05 PM",
    title: "Suspect Entered Building",
    description: "Security footage confirms entry at rear entrance",
    confidence: "96%",
    type: "sighting",
  },
  {
    time: "7:12 PM",
    title: "Witness Reported Disturbance",
    description: "Neighbor heard raised voices and commotion",
    confidence: "88%",
    type: "witness",
  },
  {
    time: "7:18 PM",
    title: "Security System Malfunction",
    description: "Cameras went offline - device tampering suspected",
    confidence: "94%",
    type: "technical",
  },
  {
    time: "7:25 PM",
    title: "Suspect Exit Detected",
    description: "Secondary witness spotted suspect leaving premises",
    confidence: "85%",
    type: "sighting",
  },
  {
    time: "7:32 PM",
    title: "Police Units Arrived",
    description: "First responders arrived at scene - crime in progress",
    confidence: "100%",
    type: "police",
  },
];

const getEventColor = (type: string) => {
  const colors: any = {
    call: "blue",
    witness: "purple",
    sighting: "cyan",
    technical: "blue",
    police: "blue",
  };
  return colors[type] || "blue";
};

export default function TimelinePage() {
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
                Timeline Reconstruction
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                AI-reconstructed event sequence with confidence metrics
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="p-8 max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Timeline Container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Center Line */}
              <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-cyan"
                layoutId="timeline-line"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />

              {/* Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${i % 2 === 0 ? "pr-12" : "pl-12"}`}>
                      <GlassCard
                        gradient={getEventColor(event.type) as any}
                        className="p-6 hover:shadow-glow"
                      >
                        {/* Time */}
                        <motion.p
                          className="text-neon-cyan font-mono font-bold text-lg mb-2"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        >
                          {event.time}
                        </motion.p>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4">
                          {event.description}
                        </p>

                        {/* Confidence */}
                        <motion.div
                          className="flex items-center gap-2 pt-3 border-t border-neon-blue/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-neon-cyan"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                          <p className="text-xs text-neon-cyan font-semibold">
                            Confidence: {event.confidence}
                          </p>
                        </motion.div>
                      </GlassCard>
                    </div>

                    {/* Timeline Node */}
                    <div className="w-0 flex justify-center -mx-4">
                      <motion.div
                        className="relative w-8 h-8 rounded-full border-2 border-neon-cyan bg-cyber-black flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.3 + i * 0.15,
                          duration: 0.5,
                          type: "spring",
                        }}
                      >
                        <motion.div
                          className="w-3 h-3 rounded-full bg-neon-cyan"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.8, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />

                        {/* Pulse rings */}
                        {[0, 1].map((ring) => (
                          <motion.div
                            key={ring}
                            className="absolute inset-0 rounded-full border border-neon-cyan/50"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: ring * 1 + i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Summary Section */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { label: "Total Duration", value: "47 minutes", color: "blue" },
                { label: "Events Detected", value: "6", color: "purple" },
                {
                  label: "Average Confidence",
                  value: "93.8%",
                  color: "cyan",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <GlassCard gradient={stat.color as any} className="p-6 text-center">
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <motion.p
                      className="text-3xl font-bold text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {stat.value}
                    </motion.p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* AI Insights */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <GlassCard gradient="cyan" className="p-6">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">
                  AI Timeline Insights
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
                  transition={{ delay: 1.2 }}
                >
                  {[
                    "Suspect remained on premises for approximately 20 minutes",
                    "Security system was deliberately disabled between 7:18 PM and police arrival",
                    "Timeline gaps suggest possible evidence tampering",
                    "Witness accounts align with 94% accuracy to reconstructed sequence",
                  ].map((insight, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-neon-cyan flex-shrink-0 mt-2"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <p className="text-gray-300 text-sm">{insight}</p>
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
              transition={{ delay: 1.4 }}
            >
              <Link href="/contradictions" className="flex-1">
                <NeonButton size="lg" color="gradient" className="w-full">
                  View Contradictions
                </NeonButton>
              </Link>
              <Link href="/dashboard" className="flex-1">
                <NeonButton size="lg" color="blue" className="w-full">
                  Back to Dashboard
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
