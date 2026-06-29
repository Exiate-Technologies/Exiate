import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Exiate Technologies Terms of Service — the rules governing use of our products.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-muted mb-8">Last updated: January 2025</p>
        <div className="space-y-6 text-muted">
          <p>
            By accessing or using any Exiate Technologies product or service,
            you agree to be bound by these Terms of Service. If you do not agree
            with any part of these terms, you may not use our services.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
            Use of Services
          </h2>
          <p>
            Our services are provided for lawful purposes only. You agree not
            to misuse our products, attempt to gain unauthorised access, or
            engage in any activity that disrupts or interferes with our
            services.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
            Intellectual Property
          </h2>
          <p>
            All content, trademarks, and software associated with Exiate
            Technologies products are the property of Exiate Technologies and
            are protected by applicable intellectual property laws.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
            Limitation of Liability
          </h2>
          <p>
            Exiate Technologies shall not be liable for any indirect,
            incidental, or consequential damages arising from use of our
            products. Our services are provided &quot;as is&quot; without warranties of
            any kind.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
            Contact
          </h2>
          <p>
            For terms-related queries, contact us at{" "}
            <a
              href="mailto:legal@exiate.com"
              className="text-accent hover:underline"
            >
              legal@exiate.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
