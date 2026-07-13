"use client";

import { ThemeProvider } from "@/lib/context/theme-context";
import { ToastProvider } from "@/lib/context/toast-context";
import { EnrollmentProvider } from "@/lib/context/enrollment-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <EnrollmentProvider>{children}</EnrollmentProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
