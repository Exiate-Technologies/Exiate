"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { GitHubIcon } from "@/components/SocialIcons";

const LINK_GROUPS = [
  {
    label: "Navigation",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Products", href: "/#products" },
      { label: "Technology", href: "/#technology" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    label: "Products",
    links: [
      { label: "LocalShare", href: "/products/share" },
      { label: "LocalTalk", href: "/products/talk" },
      { label: "ExiateTrade", href: "/products/trade" },
      { label: "DukaanOS", href: "/products/dukaanos" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Exiate-Technologies", Icon: GitHubIcon },
  { label: "Email", href: "mailto:contact.exiate@gmail.com", Icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative border-t"
      style={{ backgroundColor: "#06090f", borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Top gradient rule */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(91,120,255,0.35), rgba(34,211,238,0.35), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer body */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Logo prefix="footer" size="sm" />
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "#475569" }}
            >
              Engineering What&apos;s Next. An independent software company building
              modern digital products for people, businesses, and developers.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-2.5" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                  style={{
                    color: "#475569",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#475569";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.07)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map((group) => (
            <div key={group.label}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#334155" }}
              >
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("#") || href.startsWith("http") ? (
                      <a
                        href={href}
                        className="text-sm transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline"
                        style={{ color: "#475569" }}
                        {...(href.startsWith("http")
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline"
                        style={{ color: "#475569" }}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#334155" }}>
            © {year} Exiate Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#1e293b" }}>
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
