"use client";
import Link from "next/link";
import { ArrowUpRight, Share2, TrendingUp, Store, MessageSquare } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Product {
  name: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  status: "Available Soon" | "Beta" | "In Development";
  accentColor: string;
  accentBg: string;
  glowColor: string;
  href: string;
}

const PRODUCTS: Product[] = [
  {
    name: "LocalShare",
    tagline: "File sharing, reimagined",
    description:
      "Cross-platform peer-to-peer file sharing application. Move files, folders, and clipboards instantly between any device with no internet required.",
    Icon: Share2,
    status: "Available Soon",
    accentColor: "#ffb347",
    accentBg: "rgba(255,179,71,0.1)",
    glowColor: "rgba(255,179,71,0.2)",
    href: "/products/share",
  },
  {
    name: "LocalTalk",
    tagline: "LAN chat, completely offline",
    description:
      "Secure, serverless peer-to-peer LAN messaging. End-to-end encrypted chats, group channels, and high-speed offline file transfers with zero configuration.",
    Icon: MessageSquare,
    status: "Available Soon",
    accentColor: "#10b981",
    accentBg: "rgba(16,185,129,0.1)",
    glowColor: "rgba(16,185,129,0.2)",
    href: "/products/talk",
  },
  {
    name: "ExiateTrade",
    tagline: "Master the markets, risk-free",
    description:
      "Institutional-grade paper trading terminal driven by real-time WebSocket feeds and canvas-based TradingView charts.",
    Icon: TrendingUp,
    status: "Beta",
    accentColor: "#22d3ee",
    accentBg: "rgba(34,211,238,0.1)",
    glowColor: "rgba(34,211,238,0.2)",
    href: "/products/trade",
  },
  {
    name: "DukaanOS",
    tagline: "The retail operating system",
    description:
      "Complete offline-first shop management system with smart voice billing, pack splitting, and high-precision weighing.",
    Icon: Store,
    status: "Available Soon",
    accentColor: "#8b7cf6",
    accentBg: "rgba(139,124,246,0.1)",
    glowColor: "rgba(139,124,246,0.2)",
    href: "/products/dukaanos",
  },
];

const STATUS_STYLES: Record<
  Product["status"],
  { label: string; color: string; bg: string; dot: string }
> = {
  "Available Soon": {
    label: "Available Soon",
    color: "#92400e",
    bg: "rgba(255,179,71,0.15)",
    dot: "#ffb347",
  },
  Beta: {
    label: "Beta",
    color: "#164e63",
    bg: "rgba(34,211,238,0.12)",
    dot: "#22d3ee",
  },
  "In Development": {
    label: "In Development",
    color: "#4c1d95",
    bg: "rgba(139,124,246,0.12)",
    dot: "#8b7cf6",
  },
};

function StatusBadge({ status }: { status: Product["status"] }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{ backgroundColor: s.bg }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: s.dot,
          boxShadow: `0 0 4px ${s.dot}`,
        }}
        aria-hidden="true"
      />
      <span
        className="dark:text-current"
        style={{ color: s.dot }}
      >
        {s.label}
      </span>
    </span>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { name, tagline, description, Icon, status, accentColor, accentBg, glowColor } =
    product;

  return (
    <AnimateIn delay={index * 0.1} className="h-full">
      <Link href={product.href} className="block h-full">
        <article
          className={cn(
            "group relative h-full rounded-2xl p-6 flex flex-col transition-all duration-300",
            "bg-surface border border-border cursor-pointer",
            "hover:-translate-y-1"
          )}
          style={{
            ["--card-glow" as string]: glowColor,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${accentColor}33, 0 24px 48px -24px ${glowColor}`;
            (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}40`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "";
            (e.currentTarget as HTMLElement).style.borderColor = "";
          }}
        >
          {/* Icon + badge row */}
          <div className="flex items-start justify-between mb-5">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: accentBg }}
            >
              <Icon size={22} style={{ color: accentColor }} aria-hidden="true" />
            </div>
            <StatusBadge status={status} />
          </div>

          {/* Name + tagline */}
          <h3 className="text-xl font-bold font-display text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: accentColor }}>
            {tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-muted leading-relaxed flex-1">
            {description}
          </p>

          {/* Footer link */}
          <div className="mt-6 pt-5 border-t border-border">
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 group-hover:gap-2"
              style={{ color: accentColor }}
              aria-label={`Learn more about ${name}`}
            >
              Learn more
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </article>
      </Link>
    </AnimateIn>
  );
}

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-24 lg:py-32 bg-surface-2 overflow-hidden"
      aria-labelledby="products-heading"
    >
      {/* Top rule */}
      <div
        className="absolute left-0 right-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(91,120,255,0.25), rgba(34,211,238,0.25), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Our Products
            </p>
            <h2
              id="products-heading"
              className="text-4xl sm:text-5xl font-bold leading-tight text-foreground"
            >
              A growing portfolio of{" "}
              <span className="text-gradient">digital products</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Each product is designed to solve a specific real-world problem —
              built with care, released with purpose, and maintained for the
              long term.
            </p>
          </AnimateIn>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
