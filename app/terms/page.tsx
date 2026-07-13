import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 lg:px-6">
        <Card className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold text-text dark:text-white">Terms & Conditions</h1>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>Last updated: July 2026</p>
            <p>
              By using EduConnect BD, you agree to these terms and conditions. Please read them
              carefully before using our platform.
            </p>
            <h2 className="text-lg font-bold text-text dark:text-white">Enrollment & Payment</h2>
            <p>
              Course fees must be paid as specified during enrollment. Enrollment is subject to
              admin verification and approval.
            </p>
            <h2 className="text-lg font-bold text-text dark:text-white">Course Access</h2>
            <p>
              Approved students receive access to live classes, recorded videos, and study materials
              through their student dashboard.
            </p>
            <h2 className="text-lg font-bold text-text dark:text-white">Refund Policy</h2>
            <p>
              Refunds are available within 7 days of enrollment if no classes have been attended.
              Contact support for refund requests.
            </p>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
}
