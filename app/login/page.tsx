"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Shield, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center px-4 overflow-hidden relative">
      <ParticleBackground />
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <Shield className="w-16 h-16 text-neon-cyan" />
          </motion.div>
          <h1 className="text-4xl font-black gradient-text mb-2">
            RECON<span className="text-neon-cyan">AI</span>
          </h1>
          <p className="text-neon-cyan font-mono text-sm tracking-widest">
            SECURE INVESTIGATOR ACCESS
          </p>
        </motion.div>

        <GlassCard gradient="purple" className="p-8">
          <motion.form
            onSubmit={handleLogin}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Email Input */}
            <motion.div
              className="space-y-2"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring" }}
            >
              <label className="text-neon-cyan font-semibold text-sm">
                INVESTIGATOR ID
              </label>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@agency.gov"
                className="w-full px-4 py-3 bg-white/5 border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all"
                whileFocus={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
              />
            </motion.div>

            {/* Password Input */}
            <motion.div
              className="space-y-2"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring" }}
            >
              <label className="text-neon-cyan font-semibold text-sm">
                BIOMETRIC CLEARANCE
              </label>
              <div className="relative">
                <motion.input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full px-4 py-3 bg-white/5 border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all"
                  whileFocus={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neon-cyan hover:text-neon-purple transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Remember & Forgot */}
            <motion.div
              className="flex items-center justify-between text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-400">Remember ID</span>
              </label>
              <a
                href="#"
                className="text-neon-cyan hover:text-neon-purple transition-colors"
              >
                Forgot Password?
              </a>
            </motion.div>

            {/* Login Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <NeonButton
                onClick={handleLogin}
                size="lg"
                color="gradient"
                className="w-full"
              >
                AUTHENTICATE
              </NeonButton>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-neon-blue/30" />
              <p className="text-gray-400 text-xs">OR</p>
              <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-neon-purple/30" />
            </motion.div>

            {/* Social Login */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <NeonButton color="blue" className="w-full" size="md">
                Sign in with Agency Portal
              </NeonButton>
            </motion.div>
          </motion.form>

          {/* Footer */}
          <motion.div
            className="mt-8 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>
              New Investigator?{" "}
              <a href="#" className="text-neon-cyan hover:text-neon-purple transition-colors">
                Request Access
              </a>
            </p>
          </motion.div>
        </GlassCard>

        {/* Security Notice */}
        <motion.p
          className="text-center text-xs text-gray-500 mt-6 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          [ENCRYPTED CONNECTION] | [BIOMETRIC ENABLED]
        </motion.p>

        {/* Back to Home */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link href="/" className="text-neon-cyan hover:text-neon-purple transition-colors text-sm">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
