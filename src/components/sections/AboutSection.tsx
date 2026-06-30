"use client";

import { AnimateIn } from "@/components/AnimateIn";

const STATS = [
  { value: "3", label: "Products in Development" },
  { value: "5+", label: "Platforms Supported" },
  { value: "2025", label: "Founded" },
];

// Syntax-highlighted mock config file lines
const CODE_LINES = [
  {
    num: 1,
    tokens: [
      { text: "import", color: "#7c9cff" },
      { text: " { defineConfig } ", color: "#f4f6fb" },
      { text: "from", color: "#7c9cff" },
      { text: ' "exiate"', color: "#ffb347" },
    ],
  },
  { num: 2, tokens: [{ text: "", color: "" }] },
  {
    num: 3,
    tokens: [
      { text: "export default", color: "#7c9cff" },
      { text: " defineConfig({", color: "#f4f6fb" },
    ],
  },
  {
    num: 4,
    tokens: [
      { text: "  products", color: "#22d3ee" },
      { text: ": [", color: "#f4f6fb" },
    ],
  },
  {
    num: 5,
    tokens: [
      { text: '    "share"', color: "#ffb347" },
      { text: ",    ", color: "#f4f6fb" },
      { text: "// LocalShare P2P transfer", color: "#4b5563" },
    ],
  },
  {
    num: 6,
    tokens: [
      { text: '    "trade"', color: "#ffb347" },
      { text: ",    ", color: "#f4f6fb" },
      { text: "// ExiateTrade simulator", color: "#4b5563" },
    ],
  },
  {
    num: 7,
    tokens: [
      { text: '    "dukaanos"', color: "#ffb347" },
      { text: ", ", color: "#f4f6fb" },
      { text: "// DukaanOS Kirana POS", color: "#4b5563" },
    ],
  },
  {
    num: 8,
    tokens: [{ text: "  ],", color: "#f4f6fb" }],
  },
  { num: 9, tokens: [{ text: "", color: "" }] },
  {
    num: 10,
    tokens: [
      { text: "  stack", color: "#22d3ee" },
      { text: ": {", color: "#f4f6fb" },
    ],
  },
  {
    num: 11,
    tokens: [
      { text: "    frontend", color: "#22d3ee" },
      { text: ': "Next.js",', color: "#f4f6fb" },
    ],
  },
  {
    num: 12,
    tokens: [
      { text: "    ai", color: "#22d3ee" },
      { text: ':       "Gemini",', color: "#f4f6fb" },
    ],
  },
  {
    num: 13,
    tokens: [{ text: "  },", color: "#f4f6fb" }],
  },
  { num: 14, tokens: [{ text: "", color: "" }] },
  {
    num: 15,
    tokens: [
      { text: "  privacy", color: "#22d3ee" },
      { text: ': "', color: "#f4f6fb" },
      { text: "first", color: "#4ade80" },
      { text: '",', color: "#f4f6fb" },
      { text: "  // Always", color: "#4b5563" },
    ],
  },
  {
    num: 16,
    tokens: [{ text: "})", color: "#f4f6fb" }],
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle gradient band */}
      <div
        className="absolute left-0 right-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(91,120,255,0.3), rgba(34,211,238,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── Left: Copy ───────────────────── */}
          <div>
            <AnimateIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                About Us
              </p>
              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl font-bold leading-tight text-foreground"
              >
                Independent. Focused.{" "}
                <span className="text-gradient">Builder-first.</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Exiate Technologies is an independent software company focused
                on creating reliable, scalable, and user-friendly digital
                products. Our mission is to build practical technology that
                simplifies workflows, improves productivity, and empowers users
                worldwide.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed">
                We work across consumer, business, and developer segments —
                shipping products that are thoughtfully designed, performant by
                default, and built to last.
              </p>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={0.18}>
              <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <p
                      className="text-3xl font-bold font-display"
                      style={{
                        backgroundImage:
                          "linear-gradient(120deg, #5b78ff, #22d3ee)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-muted leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: Code window ───────────── */}
          <AnimateIn delay={0.12} direction="left" className="w-full min-w-0">
            <div
              className="w-full rounded-2xl overflow-hidden font-mono text-sm leading-relaxed"
              style={{
                backgroundColor: "#0d1120",
                border: "1px solid rgba(91,120,255,0.25)",
                boxShadow:
                  "0 0 0 1px rgba(91,120,255,0.1), 0 32px 64px -32px rgba(0,0,0,0.6), 0 0 80px -20px rgba(91,120,255,0.12)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{
                  backgroundColor: "#0a0d17",
                  borderColor: "rgba(91,120,255,0.15)",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span
                  className="ml-3 text-xs"
                  style={{ color: "#4b5563", fontFamily: "inherit" }}
                >
                  exiate.config.ts
                </span>
              </div>

              {/* Code body */}
              <div className="p-5 overflow-x-auto">
                <table
                  className="w-full border-collapse"
                  aria-label="Exiate configuration file example"
                >
                  <tbody>
                    {CODE_LINES.map((line) => (
                      <tr key={line.num} className="group">
                        <td
                          className="select-none pr-5 text-right text-xs w-8 pt-0.5"
                          style={{ color: "#1f2937" }}
                          aria-hidden="true"
                        >
                          {line.num}
                        </td>
                        <td className="whitespace-pre">
                          {line.tokens.map((tok, ti) => (
                            <span key={ti} style={{ color: tok.color }}>
                              {tok.text}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Blinking cursor */}
                <div className="mt-2 ml-8 flex items-center gap-1">
                  <span
                    className="inline-block w-2 h-4 rounded-sm"
                    style={{
                      backgroundColor: "#22d3ee",
                      animation: "pulse-soft 1.1s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
