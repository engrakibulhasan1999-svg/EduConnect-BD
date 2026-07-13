import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ResultsPortal } from "@/components/home/results-portal";

export const metadata: Metadata = {
  title: "Education Board Results",
  description: "Check SSC, HSC, NU, and BTEB results from official Bangladesh education portals.",
};

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 pt-12 lg:px-6">
          <Breadcrumb items={[{ label: "Education Results" }]} />
        </div>
        <ResultsPortal />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
