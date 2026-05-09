"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import { ArrowLeft, Bell, Lock, Download, Moon } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    emailAlerts: true,
    twoFactor: true,
    aiSensitivity: "high",
    autoSave: true,
  });

  const handleToggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
              <h1 className="text-3xl font-black gradient-text">Settings</h1>
              <p className="text-gray-400 text-sm mt-1">
                Configure your ReconAI investigator preferences
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
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard gradient="purple" className="p-8">
                <h2 className="text-2xl font-bold text-neon-cyan mb-6">
                  Investigator Profile
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 pb-6 border-b border-neon-blue/20">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-neon/20 border-2 border-neon-cyan flex items-center justify-center text-2xl"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      👮
                    </motion.div>
                    <div>
                      <p className="font-bold text-white text-lg">
                        Special Agent Alpha
                      </p>
                      <p className="text-gray-400 text-sm">
                        Agent ID: NSA-2026-847-ALPHA
                      </p>
                      <p className="text-neon-cyan text-xs font-mono">
                        STATUS: VERIFIED
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="text-gray-400 text-sm">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value="Agent Alpha"
                        className="w-full px-4 py-2 bg-white/5 border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                        readOnly
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="text-gray-400 text-sm">Email</label>
                      <input
                        type="email"
                        value="agent.alpha@agency.gov"
                        className="w-full px-4 py-2 bg-white/5 border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                        readOnly
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <NeonButton color="blue" size="md">
                      Update Profile
                    </NeonButton>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Display Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard gradient="cyan" className="p-8">
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center gap-2">
                  <Moon className="w-6 h-6" />
                  Display
                </h2>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center justify-between p-4 bg-white/5 border border-neon-blue/20 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div>
                      <p className="font-semibold text-white">Dark Mode</p>
                      <p className="text-gray-400 text-sm">Cyberpunk interface</p>
                    </div>
                    <motion.button
                      onClick={() => handleToggle("darkMode")}
                      className={`w-12 h-6 rounded-full border-2 flex items-center transition-colors ${
                        settings.darkMode
                          ? "bg-neon-cyan/20 border-neon-cyan"
                          : "bg-gray-600/20 border-gray-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className={`w-5 h-5 rounded-full ${
                          settings.darkMode
                            ? "bg-neon-cyan translate-x-6"
                            : "bg-gray-400"
                        }`}
                        layout
                      />
                    </motion.button>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Notification Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard gradient="blue" className="p-8">
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center gap-2">
                  <Bell className="w-6 h-6" />
                  Notifications
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      key: "notifications",
                      label: "System Notifications",
                      desc: "Receive alerts about analysis completion",
                    },
                    {
                      key: "emailAlerts",
                      label: "Email Alerts",
                      desc: "Get important updates via email",
                    },
                    {
                      key: "autoSave",
                      label: "Auto-Save Reports",
                      desc: "Automatically save investigation reports",
                    },
                  ].map((notif, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-4 bg-white/5 border border-neon-blue/20 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div>
                        <p className="font-semibold text-white">{notif.label}</p>
                        <p className="text-gray-400 text-sm">{notif.desc}</p>
                      </div>
                      <motion.button
                        onClick={() => handleToggle(notif.key)}
                        className={`w-12 h-6 rounded-full border-2 flex items-center transition-colors ${
                          settings[notif.key as any]
                            ? "bg-neon-cyan/20 border-neon-cyan"
                            : "bg-gray-600/20 border-gray-600"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className={`w-5 h-5 rounded-full ${
                            settings[notif.key as any]
                              ? "bg-neon-cyan translate-x-6"
                              : "bg-gray-400"
                          }`}
                          layout
                        />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Security Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard gradient="purple" className="p-8">
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center gap-2">
                  <Lock className="w-6 h-6" />
                  Security
                </h2>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center justify-between p-4 bg-white/5 border border-neon-blue/20 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div>
                      <p className="font-semibold text-white">
                        Two-Factor Authentication
                      </p>
                      <p className="text-gray-400 text-sm">
                        Enhanced security with biometric
                      </p>
                    </div>
                    <motion.button
                      onClick={() => handleToggle("twoFactor")}
                      className={`w-12 h-6 rounded-full border-2 flex items-center transition-colors ${
                        settings.twoFactor
                          ? "bg-neon-cyan/20 border-neon-cyan"
                          : "bg-gray-600/20 border-gray-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className={`w-5 h-5 rounded-full ${
                          settings.twoFactor
                            ? "bg-neon-cyan translate-x-6"
                            : "bg-gray-400"
                        }`}
                        layout
                      />
                    </motion.button>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 border border-neon-blue/20 rounded-lg space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="text-gray-400 text-sm">AI Sensitivity</label>
                    <select
                      value={settings.aiSensitivity}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          aiSensitivity: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 bg-white/5 border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue appearance-none cursor-pointer"
                    >
                      <option value="low">Low - Fewer Alerts</option>
                      <option value="medium">Medium - Balanced</option>
                      <option value="high">High - Detailed Analysis</option>
                      <option value="critical">
                        Critical - Maximum Detection
                      </option>
                    </select>
                    <p className="text-xs text-gray-400">
                      Adjust how sensitive AI analysis detection is
                    </p>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Data & Export */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GlassCard gradient="cyan" className="p-8">
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center gap-2">
                  <Download className="w-6 h-6" />
                  Data & Export
                </h2>

                <div className="space-y-4">
                  <motion.div
                    className="p-4 bg-white/5 border border-neon-blue/20 rounded-lg space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="font-semibold text-white">
                      Export Investigation Data
                    </p>
                    <p className="text-gray-400 text-sm">
                      Download all case files, timelines, and analysis reports
                    </p>
                    <div className="flex gap-2">
                      <NeonButton color="blue" size="sm" className="flex-1">
                        Export as PDF
                      </NeonButton>
                      <NeonButton color="purple" size="sm" className="flex-1">
                        Export as JSON
                      </NeonButton>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 border border-neon-blue/20 rounded-lg space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="font-semibold text-white">Danger Zone</p>
                    <NeonButton color="blue" size="sm" className="w-full">
                      Clear Cache
                    </NeonButton>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <GlassCard className="p-8 bg-white/[0.02]">
                <div className="space-y-3 text-center text-gray-400">
                  <p className="font-mono text-sm">ReconAI v1.0.0</p>
                  <p className="text-xs">
                    © 2026 AI-Powered Crime Scene Reconstruction
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <a href="#" className="text-neon-cyan hover:text-neon-purple text-xs">
                      Privacy
                    </a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="text-neon-cyan hover:text-neon-purple text-xs">
                      Terms
                    </a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="text-neon-cyan hover:text-neon-purple text-xs">
                      Support
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Save Button */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <NeonButton size="lg" color="gradient" className="flex-1">
                Save Changes
              </NeonButton>
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
