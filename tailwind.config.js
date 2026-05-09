/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00d4ff",
        "neon-cyan": "#00ffff",
        "neon-purple": "#b026ff",
        "cyber-black": "#0a0e27",
        "dark-gray": "#1a1f3a",
      },
      backgroundImage: {
        "glow-blue": "radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
        "glow-purple": "radial-gradient(circle at center, rgba(176, 38, 255, 0.1) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)",
        "gradient-neon": "linear-gradient(135deg, #00d4ff 0%, #b026ff 50%, #00ffff 100%)",
        "gradient-dark": "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(0, 212, 255, 0.1)",
        "neon-purple": "0 0 20px rgba(176, 38, 255, 0.5), inset 0 0 20px rgba(176, 38, 255, 0.1)",
        "neon-cyan": "0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)",
        "glow": "0 0 30px rgba(0, 212, 255, 0.3)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow-border": "glow-border 2s ease-in-out infinite",
        "scan-line": "scan-line 3s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 10px rgba(0, 212, 255, 0.5)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 30px rgba(0, 212, 255, 0.8)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-border": {
          "0%, 100%": { borderColor: "rgba(0, 212, 255, 0.5)" },
          "50%": { borderColor: "rgba(0, 212, 255, 1)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      backdropFilter: {
        glass: "blur(10px) brightness(1.1)",
      },
      fontSize: {
        "nano": "0.625rem",
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
