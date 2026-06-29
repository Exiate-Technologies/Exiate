"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Store,
  Mic,
  MicOff,
  Scale,
  Sparkles,
  Layers,
  ShieldAlert,
  Languages,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  Plus,
  Trash2
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  qty: number;
  unit: string;
  rate: number;
  total: number;
}

export default function DukaanOSPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // POS demo states
  const [language, setLanguage] = useState<"English" | "Hindi" | "Marathi">("English");
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", name: "Basmati Rice (Premium)", qty: 2.5, unit: "kg", rate: 80, total: 200 },
    { id: "2", name: "Refined Sugar", qty: 1.25, unit: "kg", rate: 40, total: 50 },
  ]);
  const [voiceSimulating, setVoiceSimulating] = useState(false);
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [precisionWeight, setPrecisionWeight] = useState<number>(0);
  const [bulkBoxes, setBulkBoxes] = useState(5);
  const [singleCones, setSingleCones] = useState(12);

  // Voice command simulation
  const triggerVoiceSimulation = () => {
    if (voiceSimulating) return;
    setVoiceSimulating(true);

    setTimeout(() => {
      // Add items from "spoken word"
      setCart((prev) => {
        const hasCones = prev.some((item) => item.id === "cones");
        if (hasCones) return prev;
        return [
          ...prev,
          {
            id: "cones",
            name: "Chocolate Cones (Single)",
            qty: 5,
            unit: "pcs",
            rate: 30,
            total: 150,
          },
        ];
      });
      setVoiceSimulating(false);
    }, 2800);
  };

  // Precision weighing calculation
  const calculatePrecisionSugar = (amount: number) => {
    const ratePerKg = 44; // ₹44/kg
    const exactWeight = amount / ratePerKg; // calculated to 3 decimals
    setPrecisionWeight(parseFloat(exactWeight.toFixed(3)));
  };

  // Split packaging de-bulk
  const handleDebulk = () => {
    if (bulkBoxes <= 0) return;
    setBulkBoxes((prev) => prev - 1);
    setSingleCones((prev) => prev + 24); // 1 box splits into 24 packets
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

  const cartTotal = cart.reduce((sum, item) => sum + item.total, 0);

  const TRANSLATIONS = {
    English: {
      headline: "The Ultimate Operating System for Local Retail Stores.",
      billingTitle: "Smart Billing Console",
      voiceBtn: "Simulate Voice Input",
      debulkBtn: "Debulk 1 Box",
      precisionLabel: "Calculate Weight by Target Price (₹)",
      totalLabel: "Grand Total",
      langLabel: "Toggle App Language",
    },
    Hindi: {
      headline: "स्थानीय रिटेल स्टोर के लिए सर्वोत्तम ऑपरेटिंग सिस्टम।",
      billingTitle: "स्मार्ट बिलिंग कंसोल",
      voiceBtn: "आवाज इनपुट का अनुकरण करें",
      debulkBtn: "1 बॉक्स खोलें (डी-बल्क)",
      precisionLabel: "लक्ष्य मूल्य द्वारा वजन की गणना करें (₹)",
      totalLabel: "कुल योग",
      langLabel: "ऐप की भाषा बदलें",
    },
    Marathi: {
      headline: "स्थानिक किरणा दुकानांसाठी अंतिम ऑपरेटिंग सिस्टम.",
      billingTitle: "स्मार्ट बिलिंग कन्सोल",
      voiceBtn: "आवाज इनपुट अनुकरण करा",
      debulkBtn: "1 बॉक्स विभाजित करा (डी-बल्क)",
      precisionLabel: "लक्ष्य किंमतीनुसार वजनाची गणना करा (₹)",
      totalLabel: "एकूण रक्कम",
      langLabel: "अॅपची भाषा बदला",
    },
  };

  const FEATURES = [
    {
      title: "Voice-Based Smart Billing",
      desc: "Speak naturally to add items (e.g., 'three boxes of cones, half kg rice'). Our offline speech-to-text parses phrases and structures checkout carts instantly.",
      Icon: Mic,
    },
    {
      title: "High-Precision Weighing Calculations",
      desc: "Supports 3-decimal-place scale inputs. Enter a target amount (e.g. ₹20 of sugar) and the engine calculates exact decimal weight without altering base rates.",
      Icon: Scale,
    },
    {
      title: "Split Packaging (De-bulking)",
      desc: "Link parent cases to child units. Instantly decrement bulk inventory and convert cases into retail packs with automated price and logs audit logs.",
      Icon: Layers,
    },
    {
      title: "Local Language Localization",
      desc: "Operate completely in English, Hindi, or Marathi. Persistent device registries allow cashiers and owners to work in their native languages.",
      Icon: Languages,
    },
    {
      title: "Wholesale Margin Protection",
      desc: "Export purchase orders as PDFs, PNGs, or text without exposing wholesale margins, suppliers' cost sheets, or tax discounts.",
      Icon: ShieldCheck,
    },
    {
      title: "Real-time Staff Revocation",
      desc: "Add employees, set roles, and instantly lock out credentials across all registers in real-time if employee roles change.",
      Icon: ShieldAlert,
    },
  ];

  const USE_CASES = [
    {
      user: "Kirana & Grocery Store Owners",
      use: "Unify high-traffic decimal checkouts, weigh operations, and customer ledger accounting (Khata) without notebook calculations.",
    },
    {
      user: "Local Retail Merchants",
      use: "Digitize catalogs, scan barcodes on mobile apps or desktop registers, and delegate stock access with custom credentials.",
    },
    {
      user: "B2B Suppliers & Stockists",
      use: "Coordinate restock lists and PO updates via WhatsApp/email without manual sheet copying or exposing internal cost structures.",
    },
    {
      user: "Shop Managers & Cashiers",
      use: "Learn and operate billing windows in local languages with voice command lookups, minimizing check-out human errors.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% -100px, rgba(139,124,246,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
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
                borderColor: "rgba(139,124,246,0.3)",
                backgroundColor: "rgba(139,124,246,0.06)",
                color: "#9d8cff",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
              Pre-Launch closed Beta
            </span>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground dark:text-white mb-6">
              {TRANSLATIONS[language].headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Empower your retail business with voice-activated billing, precise weight-based calculations, and real-time offline synchronization.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md bg-surface-2 border border-border p-6 rounded-2xl shadow-xl">
              {!submitted ? (
                <form onSubmit={handleWaitlistSubmit}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-violet mb-2">
                    Request Early Beta Access
                  </h3>
                  <p className="text-xs text-muted mb-4">
                    Launching August 2026. Join 50+ active merchant stores in closed beta and secure lifetime pricing discounts.
                  </p>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter store owner email"
                        className="w-full bg-background border border-border px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet text-foreground"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-3 text-sm font-bold text-background bg-violet rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: "#8b7cf6" }}
                    >
                      Reserve Access
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-4">
                  <CheckCircle size={44} className="text-green-400 mb-3" />
                  <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">Request Received!</h3>
                  <p className="text-sm text-muted">
                    We have logged your store profile for <strong>{email}</strong>. Our operations team will contact you for local language terminal configuration.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive POS Checkout Widget */}
          <div className="lg:col-span-5">
            <div
              className="relative p-6 rounded-3xl border bg-surface border-border"
              style={{
                boxShadow: "0 24px 64px -24px rgba(139,124,246,0.15)",
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-violet">
                  {TRANSLATIONS[language].billingTitle}
                </span>

                {/* Language Switcher */}
                <div className="flex gap-1 bg-surface border border-border p-0.5 rounded-lg text-[10px]">
                  {(["English", "Hindi", "Marathi"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLanguage(l)}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        language === l
                          ? "bg-violet text-white font-semibold"
                          : "text-muted hover:text-white"
                      }`}
                      style={language === l ? { backgroundColor: "#8b7cf6" } : {}}
                    >
                      {l === "English" ? "EN" : l === "Hindi" ? "HI" : "MR"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Digital POS Receipt Panel */}
              <div className="bg-surface-2 border border-border rounded-xl p-4 font-mono text-xs">
                <div className="border-b border-dashed border-border pb-2 mb-3 text-center">
                  <h4 className="font-bold text-foreground uppercase tracking-wider">DUKAANOS RETAIL LOG</h4>
                  <p className="text-[9px] text-muted">Device POS-04 (OFFLINE MODE)</p>
                </div>

                {/* Cart list */}
                <div className="space-y-2 mb-4 max-h-[140px] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-muted">
                      <span>
                        {item.name} <br />
                        <span className="text-[10px] text-muted">
                          {item.qty} {item.unit} x ₹{item.rate}
                        </span>
                      </span>
                      <span className="text-foreground font-semibold">₹{item.total.toFixed(2)}</span>
                    </div>
                  ))}
                  {voiceSimulating && (
                    <div className="flex justify-between items-center text-[10px] text-violet animate-pulse">
                      <span>🎙️ [Spoken] "five chocolate cones"...</span>
                      <span>Processing...</span>
                    </div>
                  )}
                </div>

                {/* Split Pack Box status */}
                <div className="border-t border-dashed border-border pt-3 mt-3 text-[10px] text-muted">
                  <div className="flex justify-between mb-1">
                    <span>Bulk Inventory (Box):</span>
                    <span className="text-foreground font-semibold">{bulkBoxes} boxes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retail Pack (Cones):</span>
                    <span className="text-foreground font-semibold">{singleCones} pcs</span>
                  </div>
                </div>

                {/* Precision calculation display */}
                {precisionWeight > 0 && (
                  <div className="bg-surface-2 p-2 rounded border border-border mt-3 text-[10px]">
                    <div className="flex justify-between">
                      <span className="text-muted">₹{targetAmount} Sugar Calc:</span>
                      <span className="text-green-400 font-bold font-mono">
                        {precisionWeight.toFixed(3)} kg
                      </span>
                    </div>
                  </div>
                )}

                {/* Grand Total */}
                <div className="border-t border-dashed border-border pt-3 mt-3 flex justify-between items-end">
                  <span className="text-muted uppercase text-[10px]">
                    {TRANSLATIONS[language].totalLabel}
                  </span>
                  <span className="text-base font-bold text-foreground font-mono">
                    ₹{(cartTotal + (cart.some((item) => item.id === "cones") ? 0 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2 mt-4">
                <button
                  onClick={triggerVoiceSimulation}
                  disabled={voiceSimulating}
                  className="w-full py-2.5 bg-violet/15 hover:bg-violet/25 text-violet border border-violet/30 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mic size={14} className={voiceSimulating ? "animate-bounce" : ""} />
                  {TRANSLATIONS[language].voiceBtn}
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleDebulk}
                    disabled={bulkBoxes <= 0}
                    className="py-2 text-[10px] font-bold text-white rounded bg-surface border border-border hover:bg-surface-2 disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    {TRANSLATIONS[language].debulkBtn}
                  </button>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="₹ Sugar"
                      value={targetAmount}
                      onChange={(e) => {
                        setTargetAmount(e.target.value);
                        calculatePrecisionSugar(Number(e.target.value));
                      }}
                      className="w-full text-[10px] bg-surface border border-border py-2 px-2 text-center rounded focus:outline-none focus:border-violet text-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
              Built for the reality of local retail
            </h2>
            <p className="text-muted leading-relaxed">
              No continuous cloud dependencies, no complex spreadsheets. DukaanOS is designed to match the fast, decimal, multi-unit calculations merchants use every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="bg-surface border border-border p-6 rounded-2xl hover:border-violet/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center text-violet mb-4 group-hover:scale-110 transition-transform">
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
              Empowering merchants at every scale
            </h2>
            <p className="text-muted">
              From local Kiranas and corner shops to stockist operations and distribution networks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {USE_CASES.map(({ user, use }) => (
              <div key={user} className="bg-surface-2 p-6 rounded-2xl border border-border">
                <h3 className="text-base font-bold text-violet mb-2">{user}</h3>
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
                <ShieldCheck className="text-violet" size={28} />
                Offline-First Data Storage
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                DukaanOS saves transaction logs, product costs, supplier agreements, and employee records in a secure local database on your device.
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <Plus size={16} className="text-violet" />
                  Your transactions are kept locally on device storage.
                </li>
                <li className="flex items-center gap-2">
                  <ShoppingBag size={16} className="text-violet" />
                  Wholesale price shielding filters wholesale cost prices out of Purchase Order sheets.
                </li>
                <li className="flex items-center gap-2">
                  <Trash2 size={16} className="text-violet" />
                  Immediate administrative logout revokes inactive staff sessions in milliseconds.
                </li>
              </ul>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="w-28 h-28 rounded-full bg-violet/10 flex items-center justify-center text-violet animate-pulse">
                <ShieldCheck size={56} />
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms Grid */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-foreground dark:text-white mb-2">Supported Registers</h2>
            <p className="text-sm text-muted">
              Install and run DukaanOS on standard hardware without expensive system upgrades.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-surface border border-border p-5 rounded-xl text-center">
              <span className="text-sm font-semibold text-foreground dark:text-white block mb-1">Android Application</span>
              <p className="text-xs text-muted leading-relaxed mt-2">
                Optimized for handheld smart POS terminals, smartphones, and tablets. Uses device camera for barcode scanning and microphone for voice inputs.
              </p>
            </div>
            <div className="bg-surface border border-border p-5 rounded-xl text-center">
              <span className="text-sm font-semibold text-foreground dark:text-white block mb-1">Windows Desktop Client</span>
              <p className="text-xs text-muted leading-relaxed mt-2">
                Designed for high-speed checkout counters. Supports USB barcode scanners, weighing scale serial imports, keyboard shortcuts, and thermal printers.
              </p>
            </div>
            <div className="bg-surface border border-border p-5 rounded-xl text-center">
              <span className="text-sm font-semibold text-foreground dark:text-white block mb-1">Web Portal Console</span>
              <p className="text-xs text-muted leading-relaxed mt-2">
                Access your store inventory levels, run restock audit logs, check transactions, and generate suppliers PO reports from any web browser.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
