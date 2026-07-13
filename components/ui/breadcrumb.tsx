import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1 text-sm", className)}>
      <Link
        href="/"
        className="flex items-center text-slate-500 hover:text-primary dark:text-slate-400"
      >
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-slate-500 hover:text-primary dark:text-slate-400"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-text dark:text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
