"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import {
  LayoutDashboard,
  Plus,
  Upload,
  Users,
  Zap,
  Clock,
  Settings,
  Bell,
  LogOut,
  Search,
  Briefcase,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Plus, label: "New Investigation", href: "/investigation/new" },
  { icon: Upload, label: "Evidence Upload", href: "/evidence" },
  { icon: Users, label: "Witness Statements", href: "/witnesses" },
  { icon: Zap, label: "AI Reconstruction", href: "/reconstruction" },
  { icon: Clock, label: "Timeline Analysis", href: "/timeline" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const dashboardStats = [
  { icon: Briefcase, label: "Total Cases", value: "48", color: "blue" },
  { icon: Zap, label: "Active Investigations", value: "12", color: "cyan" },
  { icon: BarChart3, label: "AI Confidence Rate", value: "91.2%", color: "purple" },
  { icon: Upload, label: "Evidence Processed", value: "2,847", color: "blue" },
];

const recentCases = [
  { name: "Case #2026-0847", status: "Analysis Complete", confidence: "94%" },
  { name: "Case #2026-0846", status: "In Progress", confidence: "72%" },
  { name: "Case #2026-0845", status: "Pending Review", confidence: "88%" },
  { name: "Case #2026-0844", status: "Analysis Complete", confidence: "96%" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <motion.div
          className="w-72 bg-dark-gray/50 border-r border-neon-blue/10 overflow-y-auto hidden md:block"
          animate={{ x: sidebarOpen ? 0 : -288 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-12">
              <motion.h1
                className="text-2xl font-black gradient-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                RECON<span className="text-neon-cyan">AI</span>
              </motion.h1>
            </Link>

            {/* Navigation */}
            <nav className="space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={item.href}>
                    <GlassCard
                      hover
                      gradient="blue"
                      className="p-3 flex items-center gap-3 cursor-pointer"
                    >
                      <item.icon className="w-5 h-5 text-neon-cyan" />
                      <span className="font-semibold text-sm">{item.label}</span>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navbar */}
          <motion.div
            className="h-20 border-b border-neon-blue/10 bg-dark-gray/30 px-8 flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 flex-1">
              <motion.button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-neon-cyan"
                whileHover={{ scale: 1.1 }}
              >
                <LayoutDashboard className="w-6 h-6" />
              </motion.button>

              {/* Search Bar */}
              <GlassCard className="flex-1 flex items-center gap-2 px-4 py-2">
                <Search className="w-4 h-4 text-neon-cyan" />
                <input
                  type="text"
                  placeholder="Search cases..."
                  className="bg-transparent text-sm outline-none flex-1 placeholder-gray-500"
                />
              </GlassCard>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <motion.button
                className="relative p-2 hover:bg-white/5 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Bell className="w-6 h-6 text-neon-cyan" />
                <motion.span
                  className="absolute top-1 right-1 w-2 h-2 bg-neon-cyan rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.button>

              <GlassCard className="px-4 py-2">
                <p className="text-sm font-semibold">INVESTIGATOR</p>
              </GlassCard>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <LogOut className="w-6 h-6 text-neon-cyan" />
              </motion.button>
            </div>
          </motion.div>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-8"
            >
              {/* Welcome Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl font-black gradient-text mb-2">
                  Welcome Back, Investigator
                </h1>
                <p className="text-gray-400 font-mono text-sm">
                  [SYSTEM STATUS: OPERATIONAL] | Active Cases: 12
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="visible"
              >
                {dashboardStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <GlassCard gradient={stat.color as any} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <stat.icon className="w-8 h-8 text-neon-cyan" />
                        <motion.div
                          className="w-2 h-2 rounded-full bg-neon-cyan"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                      <motion.h3
                        className="text-3xl font-bold text-white"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        {stat.value}
                      </motion.h3>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Grid */}
              <motion.div
                className="grid lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Recent Cases */}
                <motion.div className="lg:col-span-2">
                  <GlassCard gradient="cyan" className="p-6">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-neon-cyan" />
                      Recent Cases
                    </h2>

                    <div className="space-y-3">
                      {recentCases.map((caseItem, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between p-4 bg-white/5 border border-neon-blue/20 rounded-lg hover:bg-white/[0.08] transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <div>
                            <p className="font-semibold text-white">
                              {caseItem.name}
                            </p>
                            <p className="text-sm text-gray-400">
                              {caseItem.status}
                            </p>
                          </div>
                          <motion.div
                            className="px-3 py-1 bg-neon-cyan/20 border border-neon-cyan/50 rounded-full"
                            animate={{
                              boxShadow: [
                                "0 0 10px rgba(0, 255, 255, 0.3)",
                                "0 0 20px rgba(0, 255, 255, 0.6)",
                                "0 0 10px rgba(0, 255, 255, 0.3)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          >
                            <p className="text-xs font-bold text-neon-cyan">
                              {caseItem.confidence}
                            </p>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link href="/dashboard">
                        <NeonButton color="cyan" size="md" className="w-full">
                          View All Cases
                        </NeonButton>
                      </Link>
                    </motion.div>
                  </GlassCard>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <GlassCard gradient="purple" className="p-6 h-full">
                    <h2 className="text-xl font-bold mb-6">Quick Actions</h2>

                    <div className="space-y-3">
                      <Link href="/investigation/new">
                        <NeonButton color="gradient" size="md" className="w-full">
                          New Investigation
                        </NeonButton>
                      </Link>

                      <Link href="/evidence">
                        <NeonButton color="blue" size="md" className="w-full">
                          Upload Evidence
                        </NeonButton>
                      </Link>

                      <Link href="/reconstruction">
                        <NeonButton color="cyan" size="md" className="w-full">
                          Start AI Analysis
                        </NeonButton>
                      </Link>

                      <Link href="/timeline">
                        <NeonButton color="purple" size="md" className="w-full">
                          View Timeline
                        </NeonButton>
                      </Link>
                    </div>

                    {/* System Status */}
                    <motion.div
                      className="mt-8 pt-6 border-t border-neon-blue/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="text-xs text-gray-400 font-mono mb-3">
                        SYSTEM STATUS
                      </p>
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-neon-cyan"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.8, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <p className="text-sm text-neon-cyan font-semibold">
                          All Systems Operational
                        </p>
                      </div>
                    </motion.div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <FloatingOrb />
    </div>
  );
}
