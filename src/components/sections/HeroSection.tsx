"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NetworkVisualization } from "@/components/NetworkVisualization";

const TRUST_BADGES = [
  "Cross-Platform",
  "Privacy-First",
  "AI-Powered",
  "Developer-Ready",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#06090f" }}
      aria-labelledby="hero-heading"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 35%, black 40%, transparent 100%)",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(91,120,255,0.12) 0%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-28 lg:py-0 min-h-screen">
          {/* ── Left: Copy ───────────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 self-start mt-7 mb-3 px-3.5 py-1.5 rounded-full border text-sm font-medium"
              style={{
                borderColor: "rgba(91,120,255,0.35)",
                backgroundColor: "rgba(91,120,255,0.1)",
                color: "#a5b4fc",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "#22d3ee",
                  animation: "pulse-soft 2.6s ease-in-out infinite",
                }}
              />
              Engineering What&apos;s Next
            </motion.div>

            {/* H1 */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-tight text-white"
            >
              Building Software{" "}
              <br className="hidden sm:block" />
              That{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #5b78ff, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Solves Real
              </span>{" "}
              Problems
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-lg leading-relaxed max-w-xl"
              style={{ color: "#94a3b8" }}
            >
              Exiate Technologies develops modern software products, AI-powered
              tools, and cloud applications designed to help people and
              businesses work smarter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                style={{
                  background: "linear-gradient(135deg, #5b78ff 0%, #3d5afe 100%)",
                  boxShadow: "0 4px 24px -8px rgba(91,120,255,0.5)",
                }}
              >
                Explore Products
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              >
                Contact Us
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-2.5"
              aria-label="Key attributes"
            >
              {TRUST_BADGES.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    color: "#64748b",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visualization ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <NetworkVisualization />
          </motion.div>
        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ color: "#334155" }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={15} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
