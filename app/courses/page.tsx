"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SearchBar } from "@/components/ui/search-bar";
import { Pagination } from "@/components/ui/pagination";
import { CourseCard } from "@/components/courses/course-card";
import { CourseCardSkeleton } from "@/components/ui/skeleton";
import { courses } from "@/lib/data/courses";

const ITEMS_PER_PAGE = 6;
const categories = ["All", "HSC", "SSC", "Admission", "Language", "ICT"];

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "All";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesQuery =
        !query ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.instructor.toLowerCase().includes(query.toLowerCase()) ||
        c.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || c.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <>
      <div className="mb-8">
        <Breadcrumb items={[{ label: "Courses" }]} />
        <h1 className="mt-4 text-3xl font-bold text-text dark:text-white md:text-4xl">
          All Courses
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Browse our premium courses taught by expert instructors.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchBar
          value={query}
          onChange={(v) => { setQuery(v); setPage(1); }}
          placeholder="Search courses..."
          className="max-w-md"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setPage(1); }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-primary/10 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {paginated.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          )}
        </>
      ) : (
        <div className="py-20 text-center">
          <p className="text-lg text-slate-500">No courses found matching your criteria.</p>
        </div>
      )}
    </>
  );
}

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 lg:px-6">
        <Suspense fallback={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        }>
          <CoursesContent />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
