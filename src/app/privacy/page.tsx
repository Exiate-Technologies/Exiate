import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Exiate Technologies Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-10 transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold font-display text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted mb-8">Last updated: January 2025</p>
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted">
          <p>
            Exiate Technologies (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            safeguard information when you use our products and services.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
            Information We Collect
          </h2>
          <p>
            We collect only what is necessary to provide and improve our
            services. This may include contact information you voluntarily
            provide, usage data to improve product performance, and technical
            information to diagnose issues.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use collected data solely to operate and improve our products,
            communicate with you, and comply with legal obligations. We never
            sell your personal data to third parties.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
            Contact
          </h2>
          <p>
            For privacy-related queries, contact us at{" "}
            <a
              href="mailto:privacy@exiate.com"
              className="text-accent hover:underline"
            >
              privacy@exiate.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
