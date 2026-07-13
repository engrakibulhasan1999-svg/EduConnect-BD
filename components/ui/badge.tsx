import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "official" | "outline";
  className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary dark:bg-primary/20",
    secondary: "bg-secondary/10 text-secondary dark:bg-secondary/20",
    accent: "bg-accent/10 text-accent dark:bg-accent/20",
    official:
      "bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
    outline: "border border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
