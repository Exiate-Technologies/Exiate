"use client";

import {
  Brain,
  Cloud,
  Package,
  Smartphone,
  Globe,
  Monitor,
  Terminal,
  BarChart2,
} from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import type { LucideIcon } from "lucide-react";

interface TechDomain {
  Icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  bg: string;
}

const TECH_DOMAINS: TechDomain[] = [
  {
    Icon: Brain,
    name: "AI & Automation",
    description: "LLM integration, intelligent agents, and workflow automation",
    color: "#5b78ff",
    bg: "rgba(91,120,255,0.08)",
  },
  {
    Icon: Cloud,
    name: "Cloud Computing",
    description: "Serverless, edge deployment, and distributed systems",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
  },
  {
    Icon: Package,
    name: "SaaS Platforms",
    description: "Multi-tenant architecture, billing, and subscription models",
    color: "#8b7cf6",
    bg: "rgba(139,124,246,0.08)",
  },
  {
    Icon: Smartphone,
    name: "Mobile Development",
    description: "React Native and cross-platform native applications",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
  },
  {
    Icon: Globe,
    name: "Web Applications",
    description: "Next.js, TypeScript, and modern full-stack web apps",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
  },
  {
    Icon: Monitor,
    name: "Desktop Software",
    description: "Electron, Tauri, and native desktop experiences",
    color: "#ffb347",
    bg: "rgba(255,179,71,0.08)",
  },
  {
    Icon: Terminal,
    name: "Developer Tools",
    description: "CLIs, SDKs, APIs, and developer-focused utilities",
    color: "#f87171",
    bg: "rgba(248,113,113,0.08)",
  },
  {
    Icon: BarChart2,
    name: "Analytics & Data",
    description: "Real-time dashboards, reporting, and data pipelines",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
  },
];

function TechCard({
  domain,
  index,
}: {
  domain: TechDomain;
  index: number;
}) {
  const { Icon, name, description, color, bg } = domain;

  return (
    <AnimateIn delay={index * 0.06} className="h-full">
      <div
        className="group h-full rounded-2xl p-5 border border-border bg-surface transition-all duration-300 cursor-default hover:-translate-y-0.5"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${color}35`;
          (e.currentTarget as HTMLElement).style.backgroundColor = bg;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px -16px ${color}40`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "";
          (e.currentTarget as HTMLElement).style.backgroundColor = "";
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
      >
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: bg }}
        >
          <Icon size={18} style={{ color }} aria-hidden="true" />
        </div>
        <h3 className="text-sm font-bold font-display text-foreground mb-1.5">
          {name}
        </h3>
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      </div>
    </AnimateIn>
  );
}

export function TechSection() {
  return (
    <section
      id="technology"
      className="relative py-24 lg:py-32 bg-surface-2 overflow-hidden"
      aria-labelledby="tech-heading"
    >
      {/* Top rule */}
      <div
        className="absolute left-0 right-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(91,120,255,0.25), rgba(34,211,238,0.25), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <AnimateIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Technology
              </p>
              <h2
                id="tech-heading"
                className="text-4xl sm:text-5xl font-bold leading-tight text-foreground"
              >
                Deep expertise across{" "}
                <span className="text-gradient">every layer</span>
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1} direction="left">
            <p className="text-lg text-muted leading-relaxed">
              From AI pipelines and cloud infrastructure to pixel-perfect
              interfaces — we cover the full stack so our products feel cohesive
              from the ground up.
            </p>
          </AnimateIn>
        </div>

        {/* Domain grid — 4 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_DOMAINS.map((domain, i) => (
            <TechCard key={domain.name} domain={domain} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <AnimateIn delay={0.3} className="mt-12 text-center">
          <p className="text-sm text-muted">
            Our stack evolves as the industry does — we adopt proven tools, not
            hype.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
