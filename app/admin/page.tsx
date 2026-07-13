"use client";

import { Users, BookOpen, ClipboardList, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { useEnrollment } from "@/lib/context/enrollment-context";
import { courses } from "@/lib/data/courses";
import { teachers } from "@/lib/data/teachers";

export default function AdminDashboard() {
  const { enrollments } = useEnrollment();
  const pending = enrollments.filter((e) => e.status === "pending").length;
  const approved = enrollments.filter((e) => e.status === "approved").length;

  const stats = [
    { icon: Users, label: "Total Students", value: enrollments.length + 120, color: "text-primary" },
    { icon: BookOpen, label: "Active Courses", value: courses.length, color: "text-secondary" },
    { icon: ClipboardList, label: "Pending Enrollments", value: pending, color: "text-amber-500" },
    { icon: TrendingUp, label: "Approved Enrollments", value: approved, color: "text-accent" },
  ];

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">Dashboard Overview</h2>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center gap-4">
              <div className={`rounded-xl bg-slate-50 p-3 dark:bg-slate-800 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-text dark:text-white">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 font-bold text-text dark:text-white">Recent Enrollments</h3>
          {enrollments.length > 0 ? (
            <div className="space-y-3">
              {enrollments.slice(-5).reverse().map((e) => (
                <div
                  key={e.id}
                  className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-800"
                >
                  <div>
                    <p className="text-sm font-medium">{e.fullName}</p>
                    <p className="text-xs text-slate-500">{e.courseName}</p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      e.status === "approved"
                        ? "bg-emerald-100 text-emerald-700"
                        : e.status === "pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">No enrollments yet.</p>
          )}
        </Card>

        <Card>
          <h3 className="mb-4 font-bold text-text dark:text-white">Platform Stats</h3>
          <div className="grid grid-cols-2 gap-6">
            <AnimatedStat value={teachers.length} suffix="+" label="Teachers" />
            <AnimatedStat value={courses.length} suffix="+" label="Courses" />
            <AnimatedStat value={5000} suffix="+" label="Students" />
            <AnimatedStat value={98} suffix="%" label="Success Rate" />
          </div>
        </Card>
      </div>
    </div>
  );
}
