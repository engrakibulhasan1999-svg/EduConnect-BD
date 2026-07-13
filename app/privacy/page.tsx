import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 lg:px-6">
        <Card className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold text-text dark:text-white">Privacy Policy</h1>
          <div className="prose prose-slate dark:prose-invert space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>Last updated: July 2026</p>
            <p>
              EduConnect BD (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This policy explains how we collect, use, and safeguard your personal information.
            </p>
            <h2 className="text-lg font-bold text-text dark:text-white">Information We Collect</h2>
            <p>
              We collect information you provide during registration and enrollment, including your
              name, email, mobile number, and payment details.
            </p>
            <h2 className="text-lg font-bold text-text dark:text-white">How We Use Your Information</h2>
            <p>
              Your information is used to process enrollments, provide course access, send
              notifications, and improve our services.
            </p>
            <h2 className="text-lg font-bold text-text dark:text-white">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information
              against unauthorized access or disclosure.
            </p>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
}
