import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700",
        className
      )}
      aria-hidden="true"
    />
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-0 dark:border-slate-700 dark:bg-slate-900">
      <Skeleton className="h-48 w-full rounded-t-2xl rounded-b-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
