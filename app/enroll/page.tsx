"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/lib/context/toast-context";
import { useEnrollment } from "@/lib/context/enrollment-context";
import { courses, getCourseById } from "@/lib/data/courses";
import { formatCurrency } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

const paymentMethods = ["bKash", "Nagad", "Rocket", "Bank Transfer", "Cash"];

function EnrollForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course") || "";
  const selectedCourse = getCourseById(courseId);
  const { addEnrollment } = useEnrollment();
  const { showToast } = useToast();

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    studentId: "",
    courseId: courseId || "",
    paymentMethod: "bKash",
  });

  const course = getCourseById(form.courseId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.courseId) {
      showToast("Please select a course", "error");
      return;
    }
    const c = getCourseById(form.courseId);
    if (!c) return;

    addEnrollment({
      fullName: form.fullName,
      mobile: form.mobile,
      email: form.email,
      studentId: form.studentId || undefined,
      courseId: form.courseId,
      courseName: c.title,
      paymentMethod: form.paymentMethod,
    });

    setSubmitted(true);
    showToast("Enrollment submitted! Status: Pending verification.", "success");
  };

  if (submitted) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
        <h2 className="mb-2 text-2xl font-bold text-text dark:text-white">
          Enrollment Submitted!
        </h2>
        <p className="mb-2 text-slate-600 dark:text-slate-400">
          Your enrollment status is <Badge variant="outline">Pending</Badge>
        </p>
        <p className="mb-6 text-sm text-slate-500">
          Our admin team will verify your payment and approve your enrollment. You&apos;ll receive
          a notification once approved with your live class link.
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
          <Button variant="outline" onClick={() => router.push("/courses")}>
            Browse More Courses
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {selectedCourse && (
        <Card className="mb-6 border-primary/20 bg-primary/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Enrolling in</p>
              <h3 className="text-lg font-bold text-text dark:text-white">
                {selectedCourse.title}
              </h3>
              <p className="text-sm text-slate-500">by {selectedCourse.instructor}</p>
            </div>
            <span className="text-2xl font-bold text-primary">
              {formatCurrency(selectedCourse.fee)}
            </span>
          </div>
        </Card>
      )}

      <Card>
        <h2 className="mb-6 text-xl font-bold text-text dark:text-white">
          Student Enrollment Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name *"
            id="enroll-name"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Mobile Number *"
              id="enroll-mobile"
              type="tel"
              placeholder="01XXXXXXXXX"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              required
            />
            <Input
              label="Email *"
              id="enroll-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <Input
            label="Student ID (Optional)"
            id="enroll-student-id"
            value={form.studentId}
            onChange={(e) => setForm({ ...form, studentId: e.target.value })}
          />
          <div>
            <label htmlFor="enroll-course" className="mb-1.5 block text-sm font-medium text-text dark:text-slate-200">
              Select Course *
            </label>
            <select
              id="enroll-course"
              value={form.courseId}
              onChange={(e) => setForm({ ...form, courseId: e.target.value })}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="">Choose a course...</option>
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} — {formatCurrency(c.fee)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-text dark:text-slate-200">
              Payment Method *
            </label>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setForm({ ...form, paymentMethod: method })}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                    form.paymentMethod === method
                      ? "bg-primary text-white"
                      : "border border-slate-200 text-slate-600 hover:border-primary dark:border-slate-700 dark:text-slate-300"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
          {course && (
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500">Course Fee</p>
              <p className="text-2xl font-bold text-primary">{formatCurrency(course.fee)}</p>
            </div>
          )}
          <Button type="submit" className="w-full" size="lg">
            Submit Enrollment
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default function EnrollPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 lg:px-6">
        <Breadcrumb items={[{ label: "Enroll" }]} />
        <h1 className="mt-4 mb-8 text-3xl font-bold text-text dark:text-white">
          Course Enrollment
        </h1>
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <EnrollForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
