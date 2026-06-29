"use client";

import { Zap, ShieldCheck, Layers, Code2, Lightbulb, GitBranch } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import type { LucideIcon } from "lucide-react";

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const FEATURES: Feature[] = [
  {
    Icon: Zap,
    title: "Fast & Reliable",
    description:
      "Performance is a feature, not an afterthought. Every product is engineered for speed and high availability.",
    color: "#ffb347",
    bg: "rgba(255,179,71,0.1)",
  },
  {
    Icon: ShieldCheck,
    title: "Privacy-Focused Architecture",
    description:
      "Data minimisation by design. We only collect what's necessary, and we never sell your data.",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.1)",
  },
  {
    Icon: Layers,
    title: "Cross-Platform Solutions",
    description:
      "Web, desktop, and mobile — our products meet users wherever they are, with native-quality experiences.",
    color: "#8b7cf6",
    bg: "rgba(139,124,246,0.1)",
  },
  {
    Icon: Code2,
    title: "Modern Technology Stack",
    description:
      "Built with battle-tested, forward-looking technologies that scale gracefully as your needs grow.",
    color: "#5b78ff",
    bg: "rgba(91,120,255,0.1)",
  },
  {
    Icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We ship iteratively, learn quickly, and evolve our products based on real-world usage and feedback.",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
  },
  {
    Icon: GitBranch,
    title: "Developer-Friendly",
    description:
      "Clean APIs, comprehensive documentation, and SDKs that make integrating Exiate products a pleasure.",
    color: "#f87171",
    bg: "rgba(248,113,113,0.1)",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { Icon, title, description, color, bg } = feature;
  return (
    <AnimateIn delay={index * 0.08} className="h-full">
      <div
        className="group h-full rounded-2xl p-6 border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{
          ["--hover-glow" as string]: color,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px -16px ${color}30`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "";
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
      >
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: bg }}
        >
          <Icon size={20} style={{ color }} aria-hidden="true" />
        </div>

        {/* Content */}
        <h3 className="text-base font-bold font-display text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </AnimateIn>
  );
}

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(91,120,255,0.06) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-48 top-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Why Exiate
            </p>
            <h2
              id="why-heading"
              className="text-4xl sm:text-5xl font-bold leading-tight text-foreground"
            >
              Built on principles that{" "}
              <span className="text-gradient">actually matter</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              We don&apos;t chase trends. We build software that holds up — fast,
              private, cross-platform, and designed with developers and end-users
              equally in mind.
            </p>
          </AnimateIn>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
