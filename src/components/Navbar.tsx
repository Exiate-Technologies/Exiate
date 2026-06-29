"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/#products" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/85 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Logo size="sm" prefix="nav" />

            {/* Desktop nav */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-0.5"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="px-3.5 py-2 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-surface-2 transition-colors duration-150"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-1.5">
              {/* Theme toggle — only renders after mount to avoid hydration flash */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun size={17} />
                  ) : (
                    <Moon size={17} />
                  )}
                </button>
              )}

              {/* Desktop CTA */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                style={{
                  background: "linear-gradient(135deg, #5b78ff, #3d5afe)",
                  boxShadow: "0 0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px -8px rgba(91,120,255,0.55)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 0 transparent";
                }}
              >
                Get in Touch
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                className="lg:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-overlay/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="panel"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[72px] left-4 right-4 z-50 lg:hidden bg-surface border border-border rounded-2xl p-3 shadow-2xl"
            >
              <nav className="flex flex-col">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.04 }}
                    onClick={closeMobile}
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-surface-2 rounded-xl transition-colors duration-150"
                  >
                    {label}
                  </motion.a>
                ))}

                <div className="mt-2 pt-2 border-t border-border">
                  <a
                    href="#contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-white rounded-xl transition-colors duration-150"
                    style={{
                      background: "linear-gradient(135deg, #5b78ff, #3d5afe)",
                    }}
                  >
                    Get in Touch
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
