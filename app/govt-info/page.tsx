import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { GovtPortal } from "@/components/home/govt-portal";

export const metadata: Metadata = {
  title: "Government Services",
  description: "Access official Bangladesh government services — e-Passport, NID, Land Services, and more.",
};

export default function GovtInfoPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 pt-12 lg:px-6">
          <Breadcrumb items={[{ label: "GovtInfo Services" }]} />
        </div>
        <GovtPortal />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
