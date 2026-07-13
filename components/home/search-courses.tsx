"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/ui/search-bar";
import { Button } from "@/components/ui/button";

const categories = ["All", "HSC", "SSC", "Admission", "Language", "ICT"];

export function SearchCourses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "All") params.set("category", category);
    router.push(`/courses?${params.toString()}`);
  };

  return (
    <section className="relative -mt-10 z-10 pb-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-lg dark:border-slate-700/80 dark:bg-slate-900/80 md:p-8">
          <h2 className="mb-4 text-center text-xl font-bold text-text dark:text-white">
            Find Your Perfect Course
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search courses, subjects, teachers..."
              className="flex-1"
            />
            <Button onClick={handleSearch} className="shrink-0 sm:px-8">
              Search
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
