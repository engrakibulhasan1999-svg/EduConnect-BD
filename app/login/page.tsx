"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, LogIn } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/lib/context/toast-context";

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("educonnect_user", JSON.stringify({ email: form.email, role: "student" }));
    showToast("Login successful! Welcome back.", "success");
    router.push("/dashboard");
  };

  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-bold text-text dark:text-white">Welcome Back</h1>
            <p className="mt-1 text-sm text-slate-500">Sign in to your EduConnect BD account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              id="login-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              id="login-password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <Button type="submit" className="w-full">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Register
            </Link>
          </p>
          <p className="mt-2 text-center text-sm text-slate-500">
            Admin?{" "}
            <Link href="/admin" className="font-semibold text-primary hover:underline">
              Admin Dashboard
            </Link>
          </p>
        </Card>
      </main>
    </>
  );
}
