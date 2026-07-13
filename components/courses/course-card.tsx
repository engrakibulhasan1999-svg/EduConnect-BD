import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import type { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 dark:border-slate-700/80 dark:bg-slate-900">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <Badge variant="primary">{course.category}</Badge>
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-1 line-clamp-2 text-lg font-bold text-text dark:text-white">
          {course.title}
        </h3>
        <div className="mb-2 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <User className="h-3.5 w-3.5" />
          {course.instructor}
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
          {course.shortDescription}
        </p>
        <div className="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {course.classes} Classes
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {formatCurrency(course.fee)}
          </span>
          <Link href={`/enroll?course=${course.id}`}>
            <Button size="sm">Enroll Now</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
