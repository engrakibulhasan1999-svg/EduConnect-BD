"use client";

import { Card } from "@/components/ui/card";
import { useEnrollment } from "@/lib/context/enrollment-context";

export default function AdminStudentsPage() {
  const { enrollments } = useEnrollment();
  const students = Array.from(
    new Map(
      enrollments.map((e) => [
        e.email,
        { name: e.fullName, email: e.email, mobile: e.mobile, studentId: e.studentId },
      ])
    ).values()
  );

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">Students</h2>
      <Card className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Email</th>
              <th className="px-4 py-3 text-left font-semibold">Mobile</th>
              <th className="px-4 py-3 text-left font-semibold">Student ID</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((s, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3">{s.name}</td>
                  <td className="px-4 py-3">{s.email}</td>
                  <td className="px-4 py-3">{s.mobile}</td>
                  <td className="px-4 py-3">{s.studentId || "—"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                  No students registered yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
