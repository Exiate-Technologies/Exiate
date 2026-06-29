"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  TrendingUp,
  Activity,
  Zap,
  Lock,
  Globe,
  Sliders,
  Award,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  RefreshCw,
  Play,
  Pause
} from "lucide-react";

export default function ExiateTradePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Simulator states
  const [isPlaying, setIsPlaying] = useState(true);
  const [afterHours, setAfterHours] = useState(true);
  const [priceData, setPriceData] = useState<number[]>([100, 101, 99, 102, 101.5, 103, 102, 104]);
  const [currentPrice, setCurrentPrice] = useState(104);
  const [position, setPosition] = useState<{ entryPrice: number; size: number } | null>(null);
  const [log, setLog] = useState<string>("Ready to trade. Open a paper position to test automated stop loss execution.");

  // SVG Chart Dimensions
  const chartWidth = 500;
  const chartHeight = 220;

  // Add random ticks
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPriceData((prev) => {
          const lastPrice = prev[prev.length - 1];
          // Determine scale of change: after hours random walks vs active
          const volatility = afterHours ? 1.5 : 0.8;
          const change = (Math.random() - 0.49) * volatility;
          const nextPrice = Math.max(10, parseFloat((lastPrice + change).toFixed(2)));

          // Check Stop Loss if position is active
          if (position) {
            const stopLossPrice = position.entryPrice * 0.985; // 1.5% stop loss
            if (nextPrice <= stopLossPrice) {
              setLog(
                `🛑 Stop Loss Triggered! Position closed automatically at ₹${nextPrice} (-1.5%). Zero capital lost.`
              );
              setPosition(null);
            }
          }

          setCurrentPrice(nextPrice);
          const sliced = prev.length > 20 ? prev.slice(1) : prev;
          return [...sliced, nextPrice];
        });
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isPlaying, afterHours, position]);

  // Execute buy order
  const handleBuy = () => {
    setPosition({ entryPrice: currentPrice, size: 10 });
    setLog(`✅ Order Executed: Bought 10 units at ₹${currentPrice}. Stop loss set at ₹${(currentPrice * 0.985).toFixed(2)} (-1.5%).`);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  // SVG Line generator
  const maxPrice = Math.max(...priceData) * 1.02;
  const minPrice = Math.min(...priceData) * 0.98;
  const priceRange = maxPrice - minPrice;

  const points = priceData
    .map((price, i) => {
      const x = (i / (priceData.length - 1)) * chartWidth;
      const y = chartHeight - ((price - minPrice) / priceRange) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  const FEATURES = [
    {
      title: "TradingView Canvas Engine",
      desc: "Powered by TradingView's Lightweight Charts library, offering hardware-accelerated, high-fidelity candlestick charts that adjust instantly.",
      Icon: Cpu,
    },
    {
      title: "Low-Latency WebSocket Feeds",
      desc: "Live market streaming direct from exchanges. Experience real-world execution speeds and depth of book with zero-delay WebSockets.",
      Icon: Activity,
    },
    {
      title: "Server-Side Stop Loss checking",
      desc: "Not a local browser script. Stop loss thresholds execute on our low-latency servers every 5 seconds, exiting your trade even if you go offline.",
      Icon: Zap,
    },
    {
      title: "After-Hours Walk Simulator",
      desc: "Keep practicing 24/7. When NSE/BSE close, our organic simulator applies dynamic random walks to historical data so you can trade overnight.",
      Icon: RefreshCw,
    },
    {
      title: "Granular Simulator Configs",
      desc: "Adjust volatility, speed, and simulation modes directly from your trading dashboard to match various historical market conditions.",
      Icon: Sliders,
    },
    {
      title: "Gamified Leaderboards",
      desc: "Compete in live trading challenges with other users, test your systems, and climb the ranks of our public beta scoreboard.",
      Icon: Award,
    },
  ];

  const USE_CASES = [
    {
      user: "Active Retail Traders",
      benefit: "Validate new custom scripts, indicators, and risk management strategies in real market environments before risking real margins.",
    },
    {
      user: "Finance Students & Educators",
      benefit: "Study market structures, order books, and leverage tools in a high-fidelity sandbox. Perfect for classroom portfolios and labs.",
    },
    {
      user: "Part-Time Investors",
      benefit: "Work your day job and trade the simulator at night. The After-Hours Simulator lets you build experience on your own schedule.",
    },
    {
      user: "Trading Communities",
      benefit: "Create closed paper trading matches, review team execution logs, and share trade entries with clean image exports.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% -100px, rgba(34,211,238,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(91,120,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors duration-150 mb-10 group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-150 group-hover:-translate-x-1"
          />
          Back to Products
        </Link>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            {/* Tagline Badge */}
            <span
              className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border text-xs font-semibold"
              style={{
                borderColor: "rgba(34,211,238,0.3)",
                backgroundColor: "rgba(34,211,238,0.06)",
                color: "#22d3ee",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-circuit animate-pulse" />
              Beta Stage
            </span>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground dark:text-white mb-6">
              Master the Markets. <br />
              <span className="text-gradient">Zero Capital Risk.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Experience the exact feel of active market feeds with our high-fidelity, canvas-based charts, real-time WebSockets, and server-side automated stop loss execution.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md bg-surface-2 border border-border p-6 rounded-2xl shadow-xl">
              {!submitted ? (
                <form onSubmit={handleWaitlistSubmit}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-circuit mb-2">
                    Claim ₹10 Lakhs Virtual Capital
                  </h3>
                  <p className="text-xs text-muted mb-4">
                    Beta registration is free. Lock in early access to the 24/7 simulator and leaderboard.
                  </p>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-background border border-border px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-circuit focus:ring-1 focus:ring-circuit text-foreground"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-3 text-sm font-bold text-background bg-circuit rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: "#22d3ee" }}
                    >
                      Unlock Sandbox
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-4">
                  <CheckCircle size={44} className="text-green-400 mb-3" />
                  <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">Capital Unlocked!</h3>
                  <p className="text-sm text-muted">
                    We&apos;ve added your email <strong>{email}</strong> to our beta registry. You will receive an invite to set up your simulator credentials shortly.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Trading Chart Widget */}
          <div className="lg:col-span-5">
            <div
              className="relative p-6 rounded-3xl border bg-surface border-border"
              style={{
                boxShadow: "0 24px 64px -24px rgba(34,211,238,0.15)",
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-circuit">ExiateTrade Terminal</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-circuit/10 text-[9px] font-bold text-circuit uppercase">
                    {afterHours ? "After-Hours Walk" : "Live Market"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded hover:bg-surface-2 text-muted hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                  </button>
                </div>
              </div>

              {/* Live Ticks & Chart */}
              <div className="relative bg-surface-2 rounded-xl p-4 border border-border">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-[10px] text-muted uppercase">Mock Index (NIFTY)</span>
                    <h3 className="text-xl font-bold text-foreground font-mono">
                      ₹{currentPrice.toFixed(2)}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-muted">Stop Loss Mode</span>
                    <p className="text-xs font-mono font-semibold text-red-400">1.5% Server-Side</p>
                  </div>
                </div>

                <div className="relative w-full overflow-hidden" style={{ height: chartHeight }}>
                  <svg className="w-full h-full overflow-visible">
                    {/* SVG Line Chart */}
                    <polyline
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={points}
                    />

                    {/* Entry Price Dash Line */}
                    {position && (
                      <line
                        x1="0"
                        y1={
                          chartHeight -
                          ((position.entryPrice - minPrice) / priceRange) * chartHeight
                        }
                        x2={chartWidth}
                        y2={
                          chartHeight -
                          ((position.entryPrice - minPrice) / priceRange) * chartHeight
                        }
                        stroke="#4ade80"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                      />
                    )}

                    {/* Stop Loss Dash Line */}
                    {position && (
                      <line
                        x1="0"
                        y1={
                          chartHeight -
                          ((position.entryPrice * 0.985 - minPrice) / priceRange) * chartHeight
                        }
                        x2={chartWidth}
                        y2={
                          chartHeight -
                          ((position.entryPrice * 0.985 - minPrice) / priceRange) * chartHeight
                        }
                        stroke="#f87171"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                      />
                    )}
                  </svg>

                  {/* Absolute overlays for levels */}
                  {position && (
                    <>
                      <span
                        className="absolute left-2 text-[9px] bg-green-500/20 text-green-400 px-1 rounded font-mono"
                        style={{
                          top: `${
                            chartHeight -
                            ((position.entryPrice - minPrice) / priceRange) * chartHeight -
                            8
                          }px`,
                        }}
                      >
                        Buy: ₹{position.entryPrice.toFixed(2)}
                      </span>
                      <span
                        className="absolute right-2 text-[9px] bg-red-500/20 text-red-400 px-1 rounded font-mono"
                        style={{
                          top: `${
                            chartHeight -
                            ((position.entryPrice * 0.985 - minPrice) / priceRange) * chartHeight -
                            8
                          }px`,
                        }}
                      >
                        SL: ₹{(position.entryPrice * 0.985).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex gap-2.5 mt-4">
                  <button
                    onClick={handleBuy}
                    disabled={position !== null}
                    className="flex-1 py-2 text-xs font-bold text-white rounded bg-green-500 hover:bg-green-600 disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    Buy (Virtual)
                  </button>
                  <button
                    onClick={() => {
                      if (position) {
                        setLog(`✅ Position squared off manually. Earned/Lost on trade.`);
                        setPosition(null);
                      }
                    }}
                    disabled={position === null}
                    className="flex-1 py-2 text-xs font-bold text-white rounded bg-red-500 hover:bg-red-600 disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    Sell / Square Off
                  </button>
                </div>
              </div>

              {/* Console log */}
              <div className="bg-surface-2 border border-border p-3 rounded-lg mt-3 text-[11px] font-mono text-muted leading-normal min-h-[50px] flex items-center">
                {log}
              </div>

              {/* Config Panel */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                <span>Simulator Settings</span>
                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={afterHours}
                    onChange={() => setAfterHours(!afterHours)}
                    className="rounded border-border bg-background text-circuit focus:ring-0"
                  />
                  24/7 After-Hours Mode
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
              Practice. Refine. Execute. Master.
            </h2>
            <p className="text-muted leading-relaxed">
              Ditch slow, high-latency, SVG-based portfolio trackers. ExiateTrade simulates market actions at the speed of real active exchanges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="bg-surface border border-border p-6 rounded-2xl hover:border-circuit/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-circuit/10 flex items-center justify-center text-circuit mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-24 py-16 border-y border-border">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
              Designed for serious market practice
            </h2>
            <p className="text-muted">
              Whether you are an aspiring retail investor or looking to build a structured trading desk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {USE_CASES.map(({ user, benefit }) => (
              <div key={user} className="bg-surface-2 p-6 rounded-2xl border border-border">
                <h3 className="text-base font-bold text-circuit mb-2">{user}</h3>
                <p className="text-sm text-muted leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-24 bg-surface rounded-3xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-circuit" size={28} />
                Safe Sandbox Environment
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                ExiateTrade is built using partitioned cloud databases and TLS 1.3 socket networks. All accounts receive isolation and individual session privileges.
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <Lock size={16} className="text-circuit" />
                  E2E encryption on all account credentials and simulation keys.
                </li>
                <li className="flex items-center gap-2">
                  <Activity size={16} className="text-circuit" />
                  Partitioned database entries protecting student leaderboards.
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-circuit" />
                  Server logs auto-clear historical walks after sessions finish.
                </li>
              </ul>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="w-28 h-28 rounded-full bg-circuit/10 flex items-center justify-center text-circuit animate-pulse">
                <ShieldCheck size={56} />
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms Grid */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-foreground dark:text-white mb-2">Supported Terminals</h2>
            <p className="text-sm text-muted">
              Hone your skills on standard, low-latency applications designed for your preferred hardware.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-surface border border-border p-5 rounded-xl text-center">
              <span className="text-sm font-semibold text-foreground dark:text-white block mb-1">Android Application</span>
              <span className="text-xs text-muted block mb-3">Mobile & Tablet UI</span>
              <p className="text-xs text-muted leading-relaxed">
                Take price feeds on the go. Utilize swipe-based execution controls and custom overlay push alerts.
              </p>
            </div>
            <div className="bg-surface border border-border p-5 rounded-xl text-center">
              <span className="text-sm font-semibold text-foreground dark:text-white block mb-1">Windows Desktop Terminal</span>
              <span className="text-xs text-muted block mb-3">Professional workstation</span>
              <p className="text-xs text-muted leading-relaxed">
                Dual monitor setup compatibility. Supports USB keyboard macros, macro execution sheets, and serial scale hooks.
              </p>
            </div>
            <div className="bg-surface border border-border p-5 rounded-xl text-center">
              <span className="text-sm font-semibold text-foreground dark:text-white block mb-1">Web Console</span>
              <span className="text-xs text-muted block mb-3">Vite & Next.js dashboard</span>
              <p className="text-xs text-muted leading-relaxed">
                Zero-install web environment. Access leaderboard reports and trace strategy portfolios in any browser.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
