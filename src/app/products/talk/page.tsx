"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageSquare,
  Lock,
  Wifi,
  WifiOff,
  Users,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  Bell,
  Terminal,
  RefreshCw,
  Send,
  Check
} from "lucide-react";

export default function LocalTalkPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Simulation states
  const [simStep, setSimStep] = useState<"idle" | "discovery" | "handshake" | "typing" | "delivered">("idle");
  const [simLog, setSimLog] = useState<string[]>([]);
  const [simProgress, setSimProgress] = useState(0);

  const startSimulation = () => {
    if (simStep !== "idle" && simStep !== "delivered") return;
    
    setSimStep("discovery");
    setSimLog(["[SYSTEM] Scanning LAN adapters...", "[SYSTEM] Listening on UDP port 5353 (mDNS)"]);
    setSimProgress(0);
  };

  useEffect(() => {
    if (simStep === "discovery") {
      const t1 = setTimeout(() => {
        setSimLog(prev => [...prev, "[DISCOVERY] Peer discovered: Lab-MacBook-Pro (IP: 192.168.1.14)", "[SYSTEM] Connecting to peer..."]);
        setSimStep("handshake");
      }, 1500);
      return () => clearTimeout(t1);
    }

    if (simStep === "handshake") {
      const t2 = setTimeout(() => {
        setSimLog(prev => [
          ...prev, 
          "[SECURITY] Commencing Noise_XX_25519_ChaChaPoly_BLAKE2b handshake",
          "[SECURITY] Public key fingerprint verified. Matching Security PIN: 8421",
          "[SECURITY] E2E Encrypted channel established securely."
        ]);
        setSimStep("typing");
      }, 1800);
      return () => clearTimeout(t2);
    }

    if (simStep === "typing") {
      const t3 = setTimeout(() => {
        setSimLog(prev => [...prev, "[MSG_OUTBOUND] You: Hey team, here are the secure lab archives."]);
        setSimStep("delivered");
      }, 2000);
      return () => clearTimeout(t3);
    }

    if (simStep === "delivered") {
      setSimLog(prev => [
        ...prev,
        "[MSG_ACK] Message delivered to recipient.",
        "[RECEIVER] Decrypted payload successfully in SQLCipher local DB.",
        "[SYSTEM] Local OS notification triggered locally on recipient device."
      ]);
    }
  }, [simStep]);

  // Waitlist submit handler
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

  const FEATURES = [
    {
      title: "100% Serverless P2P Messenger",
      desc: "Chat directly device-to-device. No central databases, no hosted account servers, and no external clouds. Perfect for secure operations.",
      Icon: Users,
    },
    {
      title: "Noise Protocol Handshake & E2EE",
      desc: "Every connection undergoes a state-of-the-art secure key agreement, encrypting text and attachments with ChaCha20-Poly1305 by default.",
      Icon: Lock,
    },
    {
      title: "SQLCipher Encrypted DB",
      desc: "Local message histories, draft logs, and session keys are secured at rest using AES-256 database encryption with hardware-backed keys.",
      Icon: HardDrive,
    },
    {
      title: "Zero-Configuration Auto Discovery",
      desc: " mDNS and UDP multicast broadcast find team members automatically across Wi-Fi, Ethernet, and hotspots. No configuration needed.",
      Icon: Wifi,
    },
    {
      title: "Resilient Offline Delivery Queues",
      desc: "Messages are stored in a local encrypted outbound buffer when contacts are offline, sending automatically the moment they reconnect.",
      Icon: RefreshCw,
    },
    {
      title: "True LAN-Only Notifications",
      desc: "Alert team members with local OS-generated notifications triggered right from the LAN sockets, with no Firebase or Apple APNs telemetry.",
      Icon: Bell,
    },
  ];

  const PLATFORMS = [
    { name: "Android App", desc: "Background socket listener & secure lock" },
    { name: "Windows Native", desc: "System tray autostart and notification center" },
    { name: "Linux Package", desc: "Debian & AppImage packages for R&D labs" },
    { name: "macOS Native", desc: "Apple Silicon optimized with menu bar integration" },
    { name: "iOS App", desc: "TouchID/FaceID app lock and sandboxed storage" },
  ];

  const USE_CASES = [
    {
      role: "Clinics & Medical Facilities",
      use: "Coordinate patient updates, laboratory statuses, and clinical tasks securely within the building, fully preserving HIPPA-grade data perimeter control.",
    },
    {
      role: "Factories & Warehouses",
      use: "Keep managers and floor operators in touch in thick-walled structures or cellular dead zones, routing through local Wi-Fi nodes.",
    },
    {
      role: "Research Labs & Clean Rooms",
      use: "Share blueprints, experimental data, and highly sensitive proprietary IP inside air-gapped networks with zero leakage risks.",
    },
    {
      role: "Off-Grid Field Operations",
      use: "Maintain robust team messaging on cargo vessels, construction sites, or field stations using local Wi-Fi hotspots and mesh network devices.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% -100px, rgba(16,185,129,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-12 hover:text-accent transition-colors group"
        >
          <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-7">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "rgba(16,185,129,0.12)", color: "#10b981" }}
            >
              <WifiOff size={12} />
              100% Offline LAN Chat
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight tracking-tight mb-6">
              Keep your team chats <span className="text-gradient">inside the room.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-2xl">
              LocalTalk is a secure, serverless team messenger designed specifically for local networks.
              No internet, no external servers, and zero cloud configuration. Beautifully native and completely offline.
            </p>

            {/* Email form */}
            <form onSubmit={handleWaitlistSubmit} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitted}
                  className="flex-1 rounded-xl px-4 py-3 text-sm bg-surface-2 border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition-all"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="rounded-xl px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm disabled:opacity-50"
                  style={{ backgroundColor: "#10b981" }}
                >
                  Join Waitlist
                </button>
              </div>
              {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-green-500 font-medium flex items-center gap-1.5"
                >
                  <Check size={16} /> Welcome to the offline revolution! We&apos;ll notify you.
                </motion.p>
              )}
            </form>
          </div>

          {/* Interactive Simulation Console */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl border border-border bg-surface shadow-2xl p-6 relative overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(16,185,129,0.1), 0 32px 64px -32px rgba(0,0,0,0.6), 0 0 80px -20px rgba(16,185,129,0.12)",
              }}
            >
              {/* Device UI preview header */}
              <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="text-xs font-semibold text-muted font-mono flex items-center gap-1">
                  <Terminal size={12} />
                  localtalk_debug_socket
                </div>
              </div>

              {/* Chat log body */}
              <div className="h-[220px] rounded-lg bg-surface-2 p-4 font-mono text-xs overflow-y-auto space-y-2 border border-border flex flex-col justify-end">
                {simLog.length === 0 ? (
                  <div className="text-muted h-full flex flex-col items-center justify-center text-center p-4">
                    <Wifi size={24} className="mb-2 opacity-50" />
                    <p className="font-semibold text-foreground">LAN Communication Simulation</p>
                    <p className="text-[10px] mt-1">Press the trigger button below to test automated local peer discovery and Noise E2EE socket transport.</p>
                  </div>
                ) : (
                  simLog.map((log, idx) => {
                    let color = "#94a3b8"; // Slate
                    if (log.startsWith("[SYSTEM]")) color = "#a855f7"; // Purple
                    if (log.startsWith("[DISCOVERY]")) color = "#3b82f6"; // Blue
                    if (log.startsWith("[SECURITY]")) color = "#10b981"; // Emerald
                    if (log.startsWith("[MSG_OUTBOUND]")) color = "#ffb347"; // Orange
                    if (log.startsWith("[MSG_ACK]")) color = "#22d3ee"; // Cyan
                    if (log.startsWith("[RECEIVER]")) color = "#14b8a6"; // Teal
                    
                    return (
                      <div key={idx} style={{ color }}>
                        {log}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Controls */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted flex items-center gap-1">
                  <WifiOff size={13} />
                  Local Area Only
                </span>

                <button
                  onClick={startSimulation}
                  disabled={simStep !== "idle" && simStep !== "delivered"}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-foreground text-background hover:opacity-90 transition-opacity flex items-center gap-1.5 disabled:opacity-50"
                  style={{
                    backgroundColor: simStep === "discovery" || simStep === "handshake" || simStep === "typing" ? "rgba(16,185,129,0.2)" : "#10b981",
                    color: simStep === "discovery" || simStep === "handshake" || simStep === "typing" ? "#10b981" : "#ffffff"
                  }}
                >
                  {simStep === "idle" && (
                    <>
                      <Send size={12} />
                      Simulate Local Send
                    </>
                  )}
                  {(simStep === "discovery" || simStep === "handshake" || simStep === "typing") && (
                    <>
                      <RefreshCw size={12} className="animate-spin" />
                      Transporting...
                    </>
                  )}
                  {simStep === "delivered" && (
                    <>
                      <Check size={12} />
                      Simulate Again
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
              Engineered for absolute communication integrity
            </h2>
            <p className="text-muted leading-relaxed">
              Designed from the threat-model upward. Zero dependencies on corporate SaaS servers. 
              Built strictly around offline security.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ title, desc, Icon }, index) => (
              <div key={index} className="rounded-2xl border border-border p-6 bg-surface hover:border-accent/40 transition-colors">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(16,185,129,0.1)", color: "#10b981" }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
              Multi-platform native clients
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              LocalTalk compiles natively for all major operating systems. Every client handles local notifications, 
              local keychains, and adaptive interfaces out of the box.
            </p>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((plat, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-lg border border-border bg-surface-2 font-medium"
                >
                  {plat.name}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-left text-sm border-collapse bg-surface">
                <thead>
                  <tr className="border-b border-border bg-surface-2">
                    <th className="px-6 py-4 font-semibold text-muted">Platform</th>
                    <th className="px-6 py-4 font-semibold text-muted">Native Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORMS.map((plat, idx) => (
                    <tr key={idx} className="border-b border-border last:border-none hover:bg-surface-2/40 transition-colors">
                      <td className="px-6 py-4 font-bold">{plat.name}</td>
                      <td className="px-6 py-4 text-muted">{plat.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
              Deployable across secure industries
            </h2>
            <p className="text-muted leading-relaxed">
              From air-gapped laboratory subnets to offline logistics centers, LocalTalk keeps coordination active.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {USE_CASES.map((uc, index) => (
              <div key={index} className="rounded-2xl border border-border p-6 bg-surface relative overflow-hidden group">
                <div
                  className="absolute right-0 top-0 w-32 h-32 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{
                    background: "radial-gradient(circle, #10b981 0%, transparent 70%)"
                  }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                  style={{ color: "#10b981" }}
                >
                  {uc.role}
                </span>
                <p className="text-muted leading-relaxed text-sm">{uc.use}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
