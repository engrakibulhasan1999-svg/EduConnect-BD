import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TeacherCard } from "@/components/teachers/teacher-card";
import { getFeaturedTeachers } from "@/lib/data/teachers";

export function FeaturedTeachers() {
  const teachers = getFeaturedTeachers();

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              Expert Faculty
            </span>
            <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
              Featured Teachers
            </h2>
            <p className="mt-2 max-w-lg text-slate-600 dark:text-slate-400">
              Learn from Bangladesh&apos;s most experienced and passionate educators.
            </p>
          </div>
          <Link
            href="/teachers"
            className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View All Teachers <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
