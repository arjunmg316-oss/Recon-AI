"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { FloatingOrb } from "@/components/FloatingOrb";
import { ArrowLeft, Upload, Trash2, FileText, Image, Video, Mic } from "lucide-react";
import Link from "next/link";

const uploadZones = [
  { icon: Image, label: "Images", accepts: "image/*" },
  { icon: Video, label: "Videos", accepts: "video/*" },
  { icon: Mic, label: "Audio", accepts: "audio/*" },
  { icon: FileText, label: "Documents", accepts: ".pdf,.txt,.doc,.docx" },
];

export default function EvidenceUploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const handleFileUpload = (type: string) => {
    // Simulate file upload
    setUploadedFiles((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: `Evidence_${type}_${uploadedFiles.length + 1}`,
        type,
        size: Math.random() * 1000 + 100,
        status: "Scanning",
      },
    ]);
  };

  const removeFile = (id: number) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
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
              <h1 className="text-3xl font-black gradient-text">
                Evidence Upload & Analysis
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Upload crime scene evidence for holographic scanning and AI analysis
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
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Upload Areas */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-neon-cyan flex items-center gap-2">
                <Upload className="w-6 h-6" />
                Upload Evidence Files
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {uploadZones.map((zone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (i + 1) }}
                  >
                    <motion.button
                      onClick={() => handleFileUpload(zone.label)}
                      className="w-full border-2 border-dashed border-neon-cyan/50 rounded-lg p-6 text-center hover:border-neon-cyan transition-colors"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <zone.icon className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                      <p className="font-semibold text-white">{zone.label}</p>
                      <p className="text-xs text-gray-400 mt-1">Click to upload</p>
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Drag and Drop Zone */}
              <GlassCard gradient="purple" className="p-8 border-2 border-dashed border-neon-purple/50">
                <motion.div
                  className="text-center space-y-4"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div className="text-6xl">🔄</motion.div>
                  <div>
                    <p className="text-white font-semibold">
                      Drag & Drop Evidence Here
                    </p>
                    <p className="text-gray-400 text-sm">
                      or use the buttons above to select files
                    </p>
                  </div>
                </motion.div>
              </GlassCard>

              {/* Info */}
              <GlassCard className="p-4 bg-neon-cyan/10 border border-neon-cyan/20">
                <p className="text-sm text-gray-300">
                  <span className="text-neon-cyan font-semibold">✓ Supported:</span> Images (JPG, PNG), Videos (MP4), Audio (MP3, WAV), Documents (PDF, TXT)
                </p>
              </GlassCard>
            </motion.div>

            {/* Uploaded Files & Analysis */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-neon-cyan flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Evidence Queue
              </h2>

              <GlassCard gradient="blue" className="p-6">
                {uploadedFiles.length === 0 ? (
                  <motion.div
                    className="text-center py-8 text-gray-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p>No files uploaded yet</p>
                    <p className="text-sm mt-2">Upload evidence to begin analysis</p>
                  </motion.div>
                ) : (
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
                  >
                    {uploadedFiles.map((file, i) => (
                      <motion.div
                        key={file.id}
                        className="flex items-center justify-between p-3 bg-white/5 border border-neon-blue/20 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white truncate">
                            {file.name}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
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
                            <p className="text-xs text-gray-400">
                              {file.status}...
                            </p>
                          </div>
                        </div>
                        <motion.button
                          onClick={() => removeFile(file.id)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Trash2 className="w-4 h-4 text-neon-cyan" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Progress */}
                {uploadedFiles.length > 0 && (
                  <motion.div
                    className="mt-6 pt-4 border-t border-neon-blue/20 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-400">Analysis Progress</p>
                      <p className="text-neon-cyan font-semibold">
                        {Math.min(uploadedFiles.length * 25, 100)}%
                      </p>
                    </div>
                    <motion.div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-neon"
                        animate={{
                          width: `${Math.min(uploadedFiles.length * 25, 100)}%`,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </GlassCard>

              {/* Scan Effects */}
              {uploadedFiles.length > 0 && (
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <GlassCard className="p-4">
                    <p className="text-sm text-gray-300 mb-3">
                      <span className="text-neon-cyan font-semibold">
                        ⚡ Holographic Scanning Active
                      </span>
                    </p>
                    <div className="space-y-2">
                      {["Metadata Analysis", "Forensic Fingerprinting", "Pattern Detection"].map(
                        (scan, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 text-xs text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 * (i + 1) }}
                          >
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            {scan}
                          </motion.div>
                        )
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/reconstruction" className="flex-1">
                  <NeonButton size="lg" color="gradient" className="w-full">
                    Proceed to Analysis
                  </NeonButton>
                </Link>
                <Link href="/dashboard" className="flex-1">
                  <NeonButton size="lg" color="blue" className="w-full">
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
