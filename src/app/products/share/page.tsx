"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Lock,
  Globe,
  FolderOpen,
  Zap,
  CheckCircle,
  Copy,
  Smartphone,
  Laptop,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  WifiOff
} from "lucide-react";

export default function LocalSharePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [transferring, setTransferring] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transferComplete, setTransferComplete] = useState(false);

  // Email form submission handler
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

  // P2P Transfer Micro-simulation trigger
  const startSimulation = () => {
    if (transferring) return;
    setTransferring(true);
    setTransferComplete(false);
    setProgress(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (transferring && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTransferring(false);
            setTransferComplete(true);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [transferring, progress]);

  const FEATURES = [
    {
      title: "True P2P E2E Encryption",
      desc: "Every connection is secured with X25519 elliptic curve key exchange and AES-256-GCM encryption. Even on public Wi-Fi networks, your transfers are completely safe from snooping.",
      Icon: Lock,
    },
    {
      title: "Web Portal Share",
      desc: "No app installation required on the receiver's end. Spin up a local secure web portal and let any device on the network upload/download files via a browser.",
      Icon: Globe,
    },
    {
      title: "Recursive Folder Transfers",
      desc: "Move entire folder structures intact without losing your directory hierarchy or compression into ZIP files.",
      Icon: FolderOpen,
    },
    {
      title: "Zero-Configuration Discovery",
      desc: "UDP multicast and Network Service Discovery (NSD) protocols detect nearby devices automatically. No complex pairing or Bluetooth syncing required.",
      Icon: Zap,
    },
    {
      title: "Clipboard Syncing",
      desc: "Copy text on your mobile phone and instantly paste it on your desktop computer, streamlining your multi-device workspace.",
      Icon: Copy,
    },
    {
      title: "Maximum Wi-Fi Speeds",
      desc: "Say goodbye to slow cloud uploads. Transfer large videos, databases, and assets peer-to-peer at the absolute maximum speed your hardware allows.",
      Icon: WifiOff,
    },
  ];

  const PLATFORMS = [
    { name: "Android App", desc: "Optimized for phones & tablets" },
    { name: "iOS App", desc: "Fast transfers for iPhone & iPad" },
    { name: "Windows", desc: "High-speed desktop console" },
    { name: "macOS", desc: "Native Apple Silicon support" },
    { name: "Linux", desc: "CLI & GUI tools for developers" },
    { name: "Web Portal", desc: "Zero-install browser client" },
  ];

  const USE_CASES = [
    {
      role: "Creators & Videographers",
      use: "Move massive raw media files from mobile cameras to editing workstations without compression or cloud middleman lag.",
    },
    {
      role: "Developers & Designers",
      use: "Instantly sync code snippets, assets, designs, and testing mockups across different operating systems and physical screens.",
    },
    {
      role: "Students & Educators",
      use: "Collaborate and share large study materials, projects, and slides in classrooms or libraries without relying on slow public Wi-Fi.",
    },
    {
      role: "Remote Workers & Travelers",
      use: "Share important documents, guides, and archives in airplanes, hotels, or off-grid areas with zero cellular data consumption.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% -100px, rgba(255,179,71,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-10"
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
                borderColor: "rgba(255,179,71,0.3)",
                backgroundColor: "rgba(255,179,71,0.06)",
                color: "#ffb347",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
              Pre-Launch Phase
            </span>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground dark:text-white mb-6">
              The fastest way to share files. <br />
              <span className="text-gradient">No internet required.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              LocalShare connects your phones, computers, and tablets over your local network to send files, folders, and text instantly—privately, securely, and completely offline.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md bg-surface-2 border border-border p-6 rounded-2xl shadow-xl">
              {!submitted ? (
                <form onSubmit={handleWaitlistSubmit}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-2">
                    Join the waitlist
                  </h3>
                  <p className="text-xs text-muted mb-4">
                    Beta launches October 15, 2026. Secure early access and lock in lifetime pro features.
                  </p>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-background border border-border px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber text-foreground"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-3 text-sm font-bold text-background bg-amber rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: "#ffb347" }}
                    >
                      Reserve Spot
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-4">
                  <CheckCircle size={44} className="text-green-400 mb-3" />
                  <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">You&apos;re on the list!</h3>
                  <p className="text-sm text-muted">
                    Thanks for reserving your username. We will email you invite credentials at <strong>{email}</strong> when beta goes live.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive P2P Simulator Widget */}
          <div className="lg:col-span-5">
            <div
              className="relative p-6 rounded-3xl border bg-surface border-border"
              style={{
                boxShadow: "0 24px 64px -24px rgba(255,179,71,0.15)",
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-amber">interactive P2P simulator</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              </div>

              {/* Devices visualization */}
              <div className="flex justify-between items-center py-10 relative">
                {/* Connection Line */}
                <div className="absolute left-[20%] right-[20%] top-[45%] h-0.5 bg-border z-0">
                  <div
                    className="h-full bg-gradient-to-r from-amber to-blue-400 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                  {/* Animating file packet */}
                  {transferring && (
                    <motion.div
                      className="absolute w-4 h-4 rounded-full bg-amber flex items-center justify-center -top-[7px]"
                      animate={{ left: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    >
                      <Share2 size={10} className="text-background" />
                    </motion.div>
                  )}
                </div>

                {/* Device 1: Desktop */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-border flex items-center justify-center text-amber shadow-lg">
                    <Laptop size={24} />
                  </div>
                  <span className="text-xs font-semibold text-muted">macOS Workstation</span>
                </div>

                {/* Device 2: Mobile */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-border flex items-center justify-center text-blue-400 shadow-lg">
                    <Smartphone size={24} />
                  </div>
                  <span className="text-xs font-semibold text-muted">Android Phone</span>
                </div>
              </div>

              {/* Transfer Console */}
              <div className="bg-surface-2 p-4 rounded-xl border border-border mt-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-muted">Target: 4K_Video_Edit.mp4</span>
                  <span className="font-mono text-foreground font-semibold">{progress}%</span>
                </div>
                <div className="w-full bg-border h-2 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-amber rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  {progress === 0 && !transferComplete && (
                    <button
                      onClick={startSimulation}
                      className="w-full py-2.5 bg-amber/15 hover:bg-amber/25 text-amber border border-amber/30 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Test Peer-to-Peer Transfer
                    </button>
                  )}
                  {transferring && (
                    <span className="text-center text-xs text-muted py-2 animate-pulse">
                      Encrypting & streaming files...
                    </span>
                  )}
                  {transferComplete && (
                    <div className="text-center py-1">
                      <p className="text-xs text-green-400 font-semibold flex items-center justify-center gap-1.5 mb-2">
                        <CheckCircle size={14} /> Transfer complete!
                      </p>
                      <p className="text-[10px] text-muted">
                        1.2 GB transferred in 4.2s (285 MB/s LAN Wi-Fi speed)
                      </p>
                      <button
                        onClick={() => setProgress(0)}
                        className="mt-3 text-[10px] text-amber hover:underline focus:outline-none"
                      >
                        Reset Demo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
              Designed to break down walled gardens
            </h2>
            <p className="text-muted leading-relaxed">
              Why should transferring a file to a device sitting next to you require uploads to remote cloud servers? LocalShare makes local networking fast, direct, and painless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="bg-surface border border-border p-6 rounded-2xl hover:border-amber/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center text-amber mb-4 group-hover:scale-110 transition-transform">
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
              Who uses LocalShare?
            </h2>
            <p className="text-muted">
              Ideal for cross-functional workflows and environments where speed, bandwidth conservation, and privacy are key.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {USE_CASES.map(({ role, use }) => (
              <div key={role} className="bg-surface-2 p-6 rounded-2xl border border-border">
                <h3 className="text-base font-bold text-amber mb-2">{role}</h3>
                <p className="text-sm text-muted leading-relaxed">{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-24 bg-surface rounded-3xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-amber" size={28} />
                Your data stays in your hands
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                LocalShare is a local-first system. It stores database registries locally and never sends raw contents to third-party cloud servers.
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <HardDrive size={16} className="text-amber" />
                  No tracking logs or telemetry on transfers.
                </li>
                <li className="flex items-center gap-2">
                  <Lock size={16} className="text-amber" />
                  E2E Elliptic-Curve Encrypted packages.
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-amber" />
                  Operates 100% offline with zero network logs.
                </li>
              </ul>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="w-28 h-28 rounded-full bg-amber/10 flex items-center justify-center text-amber animate-pulse">
                <ShieldCheck size={56} />
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms Grid */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-foreground dark:text-white mb-2">Supported Platforms</h2>
            <p className="text-sm text-muted">
              Connect and sync seamlessly across every device in your workspace.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PLATFORMS.map(({ name, desc }) => (
              <div
                key={name}
                className="bg-surface border border-border p-4 rounded-xl text-center flex flex-col justify-center items-center"
              >
                <span className="text-sm font-semibold text-foreground dark:text-white mb-1">{name}</span>
                <span className="text-[10px] text-muted">{desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
