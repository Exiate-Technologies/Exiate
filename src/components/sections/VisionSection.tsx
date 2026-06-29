"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "#06090f" }}
      aria-labelledby="vision-heading"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(91,120,255,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large decorative quote mark */}
        <AnimateIn direction="none">
          <svg
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-9 mx-auto mb-10 opacity-30"
            aria-hidden="true"
          >
            <path
              d="M0 48V28.8C0 12 10.4 2.8 31.2 0L33.6 4.8C23.6 6.8 18 12.8 16.8 22.4H28.8V48H0ZM35.2 48V28.8C35.2 12 45.6 2.8 66.4 0L68.8 4.8C58.8 6.8 53.2 12.8 52 22.4H64V48H35.2Z"
              fill="url(#quote-grad)"
            />
            <defs>
              <linearGradient
                id="quote-grad"
                x1="0"
                y1="0"
                x2="64"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5b78ff" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </AnimateIn>

        {/* Vision label */}
        <AnimateIn delay={0.08}>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-8"
            style={{ color: "#5b78ff" }}
          >
            Our Vision
          </p>
        </AnimateIn>

        {/* The statement */}
        <AnimateIn delay={0.16}>
          <blockquote>
            <h2
              id="vision-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-white"
            >
              We aim to build a portfolio of software products that improve how
              people{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #5b78ff, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                work, create, communicate,
              </span>{" "}
              and grow in a digital world.
            </h2>
            <footer className="mt-10">
              <cite
                className="not-italic text-sm font-medium tracking-widest uppercase"
                style={{ color: "#475569" }}
              >
                — Exiate Technologies
              </cite>
            </footer>
          </blockquote>
        </AnimateIn>

        {/* Decorative rule */}
        <AnimateIn delay={0.28} className="mt-14">
          <div
            className="h-px w-32 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(91,120,255,0.6), rgba(34,211,238,0.6), transparent)",
            }}
            aria-hidden="true"
          />
        </AnimateIn>
      </div>
    </section>
  );
}
