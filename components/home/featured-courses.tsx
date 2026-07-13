import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CourseCard } from "@/components/courses/course-card";
import { getFeaturedCourses } from "@/lib/data/courses";

export function FeaturedCourses() {
  const courses = getFeaturedCourses();

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Popular Courses
            </span>
            <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
              Featured Courses
            </h2>
            <p className="mt-2 max-w-lg text-slate-600 dark:text-slate-400">
              Hand-picked courses from our top instructors to accelerate your learning journey.
            </p>
          </div>
          <Link
            href="/courses"
            className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
