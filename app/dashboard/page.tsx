"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Video,
  FileText,
  Bell,
  VideoIcon,
  Play,
  ExternalLink,
  User,
  LogOut,
  GraduationCap,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/lib/context/enrollment-context";
import { courses } from "@/lib/data/courses";
import { notices } from "@/lib/data/notices";
import { courseMaterials } from "@/lib/data/notices";

export default function StudentDashboard() {
  const router = useRouter();
  const { enrollments } = useEnrollment();
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("educonnect_user");
    if (!stored) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [router]);

  const myEnrollments = enrollments.filter(
    (e) => e.email === user?.email || e.fullName === user?.name
  );
  const approvedEnrollments = myEnrollments.filter((e) => e.status === "approved");
  const continueCourse = courses.find((c) => c.progress && c.progress > 0);

  if (!user) return null;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 lg:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-text dark:text-white md:text-3xl">
              Student Dashboard
            </h1>
            <p className="text-slate-500">Welcome back, {user.name || user.email}!</p>
          </div>
          <Button
            variant="ghost"
            onClick={() => {
              localStorage.removeItem("educonnect_user");
              router.push("/login");
            }}
          >
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>

        {/* Welcome Card */}
        <Card className="mb-8 bg-gradient-to-r from-primary to-secondary text-white border-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">Welcome to EduConnect BD!</h2>
              <p className="mt-1 text-white/80">
                {approvedEnrollments.length > 0
                  ? `You have ${approvedEnrollments.length} active course(s). Keep learning!`
                  : "Enroll in a course to start your learning journey."}
              </p>
            </div>
            <Link href="/courses">
              <Button className="bg-white text-primary hover:bg-white/90">
                <GraduationCap className="h-4 w-4" /> Browse Courses
              </Button>
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-text dark:text-white">My Profile</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="text-slate-500">Name:</span> {user.name || "—"}</p>
              <p><span className="text-slate-500">Email:</span> {user.email}</p>
            </div>
          </Card>

          {/* My Courses */}
          <Card className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-text dark:text-white">My Courses</h3>
            </div>
            {myEnrollments.length > 0 ? (
              <div className="space-y-3">
                {myEnrollments.map((e) => (
                  <div
                    key={e.id}
                    className="flex items-center justify-between rounded-xl border border-slate-100 p-4 dark:border-slate-800"
                  >
                    <div>
                      <p className="font-medium text-text dark:text-white">{e.courseName}</p>
                      <p className="text-xs text-slate-500">{e.paymentMethod}</p>
                    </div>
                    <Badge
                      variant={
                        e.status === "approved"
                          ? "accent"
                          : e.status === "rejected"
                          ? "outline"
                          : "secondary"
                      }
                    >
                      {e.status.charAt(0).toUpperCase() + e.status.slice(1)}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No enrollments yet.</p>
            )}
          </Card>
        </div>

        {/* Continue Learning */}
        {continueCourse && (
          <Card className="mt-6">
            <h3 className="mb-4 font-bold text-text dark:text-white">Continue Learning</h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">{continueCourse.title}</p>
                <div className="mt-2 h-2 w-full max-w-xs overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${continueCourse.progress}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">{continueCourse.progress}% complete</p>
              </div>
              <Button size="sm">
                <Play className="h-4 w-4" /> Continue
              </Button>
            </div>
          </Card>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Live Class */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <VideoIcon className="h-5 w-5 text-secondary" />
              <h3 className="font-bold text-text dark:text-white">Live Class</h3>
            </div>
            {approvedEnrollments.length > 0 ? (
              <div className="space-y-3">
                {approvedEnrollments.map((e) => (
                  <div key={e.id} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                    <p className="mb-2 font-medium">{e.courseName}</p>
                    {e.meetLink ? (
                      <a href={e.meetLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4" />
                          Join Google Meet
                        </Button>
                      </a>
                    ) : (
                      <p className="text-sm text-slate-500">Meeting link will be assigned soon.</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                Live class links appear after enrollment approval.
              </p>
            )}
          </Card>

          {/* Notices */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <Bell className="h-5 w-5 text-accent" />
              <h3 className="font-bold text-text dark:text-white">Notices</h3>
            </div>
            <div className="space-y-3">
              {notices.map((n) => (
                <div key={n.id} className="rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Badge variant={n.type === "urgent" ? "outline" : "primary"} className="text-xs">
                      {n.type}
                    </Badge>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <p className="mt-1 font-medium text-sm">{n.title}</p>
                  <p className="text-xs text-slate-500">{n.content}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Course Videos */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <Video className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-text dark:text-white">Course Videos</h3>
            </div>
            <div className="space-y-2">
              {courseMaterials
                .filter((m) => m.type === "video")
                .map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-800"
                  >
                    <span className="text-sm">{m.title}</span>
                    <span className="text-xs text-slate-500">{m.duration}</span>
                  </div>
                ))}
            </div>
          </Card>

          {/* PDF Notes */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-5 w-5 text-secondary" />
              <h3 className="font-bold text-text dark:text-white">PDF Notes</h3>
            </div>
            <div className="space-y-2">
              {courseMaterials
                .filter((m) => m.type === "pdf")
                .map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-800"
                  >
                    <span className="text-sm">{m.title}</span>
                    <Button variant="ghost" size="sm">Download</Button>
                  </div>
                ))}
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
