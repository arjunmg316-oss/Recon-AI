"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { ParticleBackground } from "@/components/ParticleBackground";
import { FloatingOrb } from "@/components/FloatingOrb";
import {
  Brain,
  Eye,
  Zap,
  TrendingUp,
  Shield,
  BarChart3,
  Github,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden relative">
      <ParticleBackground />
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl w-full text-center">
            {/* Animated title */}
            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <motion.h1
                className="text-7xl md:text-8xl font-black gradient-text mb-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                RECON<span className="text-neon-cyan">AI</span>
              </motion.h1>
            </motion.div>

            {/* Subtitle with animated lines */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 justify-center mb-6">
                <motion.div
                  className="h-0.5 w-16 bg-gradient-to-r from-transparent to-neon-blue"
                  animate={{ width: [40, 64, 40] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-xl md:text-2xl text-neon-cyan font-light tracking-widest">
                  AI INVESTIGATION PLATFORM
                </p>
                <motion.div
                  className="h-0.5 w-16 bg-gradient-to-l from-transparent to-neon-purple"
                  animate={{ width: [40, 64, 40] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Next-generation AI-powered crime scene reconstruction and
                investigation assistant. Transform evidence into insights with
                holographic scene visualization and neural pattern analysis.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            >
              <Link href="/login">
                <NeonButton size="lg" color="gradient">
                  Start Investigation
                </NeonButton>
              </Link>
              <Link href="/dashboard">
                <NeonButton size="lg" color="blue">
                  View Demo
                </NeonButton>
              </Link>
            </motion.div>

            {/* Floating demo cards */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-3 gap-4 mt-20"
            >
              {["AI Timeline", "Evidence Analysis", "Scene Viz"].map(
                (text, i) => (
                  <motion.div
                    key={text}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <GlassCard gradient="blue" className="p-4">
                      <p className="text-sm text-neon-cyan font-semibold">
                        {text}
                      </p>
                    </GlassCard>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-24 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-black gradient-text text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Advanced Forensic AI Features
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Brain,
                  title: "AI Timeline Reconstruction",
                  desc: "Neural networks reconstruct event sequences from fragmented data",
                },
                {
                  icon: Eye,
                  title: "Witness Contradiction Detection",
                  desc: "Identify inconsistencies and pattern deviations in statements",
                },
                {
                  icon: Zap,
                  title: "Evidence Analysis",
                  desc: "Advanced forensic examination with AI cross-referencing",
                },
                {
                  icon: TrendingUp,
                  title: "Scene Visualization",
                  desc: "Holographic 3D crime scene reconstruction and exploration",
                },
                {
                  icon: BarChart3,
                  title: "Confidence Scoring",
                  desc: "Real-time reliability metrics for all AI predictions",
                },
                {
                  icon: Shield,
                  title: "AI Narrative Generation",
                  desc: "Automated comprehensive investigation report synthesis",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <GlassCard hover gradient="purple" className="p-6 h-full">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <feature.icon className="w-12 h-12 text-neon-cyan mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Demo Preview Section */}
        <motion.section
          className="py-24 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-5xl font-black gradient-text text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Interactive AI Dashboard Preview
            </motion.h2>

            <GlassCard hover gradient="cyan" className="p-8">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-neon-green"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <p className="text-neon-cyan font-mono text-sm">
                    [SYSTEM ACTIVE]
                  </p>
                </div>

                <motion.p
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Analyzing crime scene evidence...
                </motion.p>

                <div className="space-y-3">
                  {[
                    "Evidence: 47 digital artifacts detected",
                    "Timeline: 12 event nodes reconstructed",
                    "Contradictions: 3 inconsistencies flagged",
                    "Confidence Score: 89.7%",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * (i + 1) }}
                    >
                      <div className="w-2 h-2 rounded-full bg-neon-cyan" />
                      <p className="text-gray-300 font-mono text-sm">{text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="pt-4 border-t border-neon-blue/20"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-neon-cyan font-mono text-xs">
                    Report generation: 73% complete...
                  </p>
                </motion.div>
              </motion.div>
            </GlassCard>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="py-24 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  number: "2.5s",
                  label: "Average Analysis Time",
                },
                {
                  number: "94.3%",
                  label: "AI Accuracy Rate",
                },
                {
                  number: "1000+",
                  label: "Cases Reconstructed",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="text-center"
                >
                  <GlassCard gradient="blue" className="p-8">
                    <motion.h3
                      className="text-4xl md:text-5xl font-black gradient-text mb-3"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-300 font-semibold">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="border-t border-neon-blue/20 py-12 px-4 mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-neon-cyan font-bold mb-4">ReconAI</h4>
                <p className="text-gray-400 text-sm">
                  Next-generation forensic AI platform for crime scene
                  reconstruction.
                </p>
              </div>
              {[
                { title: "Product", items: ["Features", "Pricing", "Demo"] },
                { title: "Company", items: ["About", "Blog", "Careers"] },
                { title: "Legal", items: ["Privacy", "Terms", "Contact"] },
              ].map((col, i) => (
                <div key={i}>
                  <h4 className="font-bold mb-4 text-white">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <motion.div
              className="border-t border-neon-blue/20 pt-8 flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2026 ReconAI. All rights reserved.
              </p>
              <motion.a
                href="#"
                className="text-neon-cyan hover:text-neon-purple transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </motion.footer>
      </div>

      <FloatingOrb />
    </div>
  );
}
