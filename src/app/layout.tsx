import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/* ── SEO metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://exiate.com"),
  title: {
    default: "Exiate Technologies — Engineering What's Next",
    template: "%s | Exiate Technologies",
  },
  description:
    "Exiate Technologies develops modern software products, AI-powered tools, and cloud applications designed to help people and businesses work smarter.",
  keywords: [
    "Exiate Technologies",
    "software company",
    "SaaS products",
    "AI tools",
    "cloud applications",
    "Exiate Share",
    "Exiate Trade",
    "Exiate CRM",
    "Exiate AI",
    "digital products",
    "developer tools",
  ],
  authors: [{ name: "Exiate Technologies", url: "https://exiate.com" }],
  creator: "Exiate Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://exiate.com",
    siteName: "Exiate Technologies",
    title: "Exiate Technologies — Engineering What's Next",
    description:
      "Building software that solves real problems. Modern SaaS products for consumers, businesses, and developers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exiate Technologies — Engineering What's Next",
    description:
      "Building software that solves real problems. Modern SaaS products for consumers, businesses, and developers.",
    creator: "@ExiateTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e17" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* ── Root layout ──────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Skip-to-content link for keyboard / AT users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:text-white focus:bg-signal focus:shadow-lg"
          >
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
