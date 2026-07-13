import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TeacherCard } from "@/components/teachers/teacher-card";
import { teachers } from "@/lib/data/teachers";

export const metadata: Metadata = {
  title: "Teachers",
  description: "Meet our expert teachers and instructors at EduConnect BD.",
};

export default function TeachersPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 lg:px-6">
        <Breadcrumb items={[{ label: "Teachers" }]} />
        <h1 className="mt-4 text-3xl font-bold text-text dark:text-white md:text-4xl">
          Our Expert Teachers
        </h1>
        <p className="mt-2 mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
          Learn from Bangladesh&apos;s most qualified and experienced educators.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
