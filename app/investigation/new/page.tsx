"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import { ArrowLeft, FileText, MapPin, Calendar, Tag } from "lucide-react";
import Link from "next/link";

const crimeCategories = [
  "Homicide",
  "Robbery",
  "Burglary",
  "Assault",
  "Fraud",
  "Cybercrime",
  "Traffic Incident",
  "Property Crime",
];

export default function NewInvestigationPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    datetime: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate case creation
    window.location.href = "/reconstruction";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          <div className="max-w-4xl mx-auto flex items-center gap-4">
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
                Initialize New Investigation
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Create and configure a new crime scene reconstruction case
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="p-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard gradient="purple" className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Case Title */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="flex items-center gap-2 text-neon-cyan font-semibold">
                    <FileText className="w-5 h-5" />
                    Case Title
                  </label>
                  <motion.input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Downtown Bank Robbery - May 9th"
                    className="w-full px-4 py-3 bg-white/5 border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Description */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-neon-cyan font-semibold">
                    Case Description
                  </label>
                  <motion.textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide detailed information about the incident..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Grid for Location and DateTime */}
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Location */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-neon-cyan font-semibold">
                      <MapPin className="w-5 h-5" />
                      Crime Scene Location
                    </label>
                    <motion.input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter location address"
                      className="w-full px-4 py-3 bg-white/5 border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  {/* DateTime */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-neon-cyan font-semibold">
                      <Calendar className="w-5 h-5" />
                      Incident Date & Time
                    </label>
                    <motion.input
                      type="datetime-local"
                      name="datetime"
                      value={formData.datetime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Crime Category */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="flex items-center gap-2 text-neon-cyan font-semibold">
                    <Tag className="w-5 h-5" />
                    Crime Category
                  </label>
                  <motion.select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all appearance-none cursor-pointer"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select a category...</option>
                    {crimeCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>

                {/* File Upload Area */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="text-neon-cyan font-semibold">
                    Attach Initial Evidence
                  </label>
                  <motion.div
                    className="border-2 border-dashed border-neon-cyan/50 rounded-lg p-8 text-center hover:border-neon-cyan transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02, borderColor: "#00ffff" }}
                    whileDrag={{ scale: 1.05, borderColor: "#00d4ff" }}
                  >
                    <div className="space-y-3">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-4xl"
                      >
                        📁
                      </motion.div>
                      <div>
                        <p className="text-white font-semibold">
                          Drag files here or click to browse
                        </p>
                        <p className="text-gray-400 text-sm">
                          Images, videos, documents, audio files
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <NeonButton
                    size="lg"
                    color="gradient"
                    className="flex-1"
                    onClick={handleSubmit}
                  >
                    Initialize AI Reconstruction
                  </NeonButton>
                  <Link href="/dashboard" className="flex-1">
                    <NeonButton size="lg" color="blue" className="w-full">
                      Cancel
                    </NeonButton>
                  </Link>
                </motion.div>
              </form>

              {/* Info Box */}
              <motion.div
                className="mt-8 p-4 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <p className="text-sm text-gray-300">
                  <span className="text-neon-cyan font-semibold">ℹ️ Tip:</span> You can
                  add more evidence after case creation. The AI will begin analysis once
                  you proceed.
                </p>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <FloatingOrb />
    </div>
  );
}
