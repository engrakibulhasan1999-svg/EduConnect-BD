import Image from "next/image";
import Link from "next/link";
import { Star, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Teacher } from "@/lib/types";

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 dark:border-slate-700/80 dark:bg-slate-900">
      <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full ring-4 ring-primary/20 transition-all group-hover:ring-primary/40">
        <Image
          src={teacher.photo}
          alt={teacher.name}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>
      <h3 className="mb-1 text-lg font-bold text-text dark:text-white">{teacher.name}</h3>
      <p className="mb-2 text-sm text-primary">{teacher.qualification}</p>
      <Badge variant="outline" className="mb-3">
        {teacher.specialization}
      </Badge>
      <div className="mb-4 flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1">
          <BookOpen className="h-3.5 w-3.5" />
          {teacher.courses} Courses
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" />
          {teacher.students}+
        </span>
        <span className="flex items-center gap-1 text-amber-500">
          <Star className="h-3.5 w-3.5 fill-amber-500" />
          {teacher.rating}
        </span>
      </div>
      <Link
        href={`/teachers/${teacher.id}`}
        className="inline-block text-sm font-semibold text-primary hover:underline"
      >
        View Profile →
      </Link>
    </article>
  );
}
