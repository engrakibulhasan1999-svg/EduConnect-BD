"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Enrollment } from "@/lib/types";

interface EnrollmentContextType {
  enrollments: Enrollment[];
  addEnrollment: (enrollment: Omit<Enrollment, "id" | "createdAt" | "status">) => void;
  updateEnrollment: (id: string, updates: Partial<Enrollment>) => void;
  getEnrollmentById: (id: string) => Enrollment | undefined;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

const STORAGE_KEY = "educonnect_enrollments";

export function EnrollmentProvider({ children }: { children: React.ReactNode }) {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEnrollments(JSON.parse(stored));
      } catch {
        setEnrollments([]);
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(enrollments));
    }
  }, [enrollments, loaded]);

  const addEnrollment = useCallback(
    (data: Omit<Enrollment, "id" | "createdAt" | "status">) => {
      const enrollment: Enrollment = {
        ...data,
        id: Date.now().toString(),
        status: "pending",
        createdAt: new Date().toISOString(),
      };
      setEnrollments((prev) => [...prev, enrollment]);
    },
    []
  );

  const updateEnrollment = useCallback((id: string, updates: Partial<Enrollment>) => {
    setEnrollments((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updates } : e))
    );
  }, []);

  const getEnrollmentById = useCallback(
    (id: string) => enrollments.find((e) => e.id === id),
    [enrollments]
  );

  return (
    <EnrollmentContext.Provider
      value={{ enrollments, addEnrollment, updateEnrollment, getEnrollmentById }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within EnrollmentProvider");
  }
  return context;
}
