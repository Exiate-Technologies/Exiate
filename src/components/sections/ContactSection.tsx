"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: "", email: "", company: "", message: "" };

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Exiate-Technologies",
    Icon: GitHubIcon,
  },
  {
    label: "Email",
    href: "mailto:contact.exiate@gmail.com",
    Icon: Mail,
  },
];

/* ── Shared field styles ─────────────────────────────────── */
const fieldBase =
  "w-full rounded-xl px-4 py-3 text-sm font-medium bg-surface-2 border border-border text-foreground placeholder:text-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-signal/40 focus:border-signal/60";

export function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [state, setState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    /* Simulate network delay — replace with real API call */
    await new Promise((r) => setTimeout(r, 1600));
    setState("success");
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setState("idle");
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="contact-heading"
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

      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(91,120,255,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* ── Left: Info ───────────────────────────── */}
          <div>
            <AnimateIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="text-4xl sm:text-5xl font-bold leading-tight text-foreground"
              >
                Let&apos;s build something{" "}
                <span className="text-gradient">great together</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Have a question, a partnership idea, or want to learn more about
                what we&apos;re building? We read every message and respond promptly.
              </p>
            </AnimateIn>

            {/* Quick reach */}
            <AnimateIn delay={0.18}>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(91,120,255,0.1)" }}
                  >
                    <Send size={15} style={{ color: "#5b78ff" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:contact.exiate@gmail.com"
                      className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      contact.exiate@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Social links */}
            <AnimateIn delay={0.26}>
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
                  Follow our journey
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted hover:text-foreground hover:border-border-strong hover:bg-surface-2 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: Form ───────────────────────────── */}
          <AnimateIn delay={0.12} direction="left">
            <div className="relative rounded-2xl bg-surface border border-border p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-10 gap-5"
                    role="status"
                    aria-live="polite"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(74,222,128,0.12)" }}
                    >
                      <CheckCircle
                        size={30}
                        style={{ color: "#4ade80" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Message sent!
                      </h3>
                      <p className="text-sm text-muted leading-relaxed max-w-xs">
                        Thanks for reaching out. We&apos;ll get back to you within 24
                        hours.
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="mt-2 text-sm font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="cf-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                        >
                          Name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="cf-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="Your name"
                          className={fieldBase}
                          disabled={state === "submitting"}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="cf-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                        >
                          Email <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="cf-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="you@company.com"
                          className={fieldBase}
                          disabled={state === "submitting"}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="cf-company"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                      >
                        Company
                      </label>
                      <input
                        id="cf-company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        placeholder="Your company (optional)"
                        className={fieldBase}
                        disabled={state === "submitting"}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="cf-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
                      >
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="cf-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what you're working on or what you'd like to know..."
                        className={cn(fieldBase, "resize-none")}
                        disabled={state === "submitting"}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className={cn(
                        "w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal",
                        state === "submitting"
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:-translate-y-0.5"
                      )}
                      style={{
                        background:
                          "linear-gradient(135deg, #5b78ff 0%, #3d5afe 100%)",
                        boxShadow: "0 4px 20px -8px rgba(91,120,255,0.5)",
                      }}
                    >
                      {state === "submitting" ? (
                        <>
                          <svg
                            className="animate-spin"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted text-center">
                      We typically respond within 24 hours.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
