"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedStat } from "@/components/ui/animated-stat";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pb-20 pt-12 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 lg:pb-28 lg:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Bangladesh&apos;s #1 Education Platform
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-text dark:text-white md:text-5xl lg:text-6xl">
              Learn Smarter,{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Achieve More
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-slate-600 dark:text-slate-300">
              Premium online courses, expert teachers, government services, and education
              board results — all in one elegant platform built for Bangladeshi students.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
                <Button size="lg">
                  Explore Courses
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" size="lg">
                  <Play className="h-5 w-5" />
                  Get Started Free
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/50 bg-white/60 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60">
              <div className="grid grid-cols-2 gap-6">
                <AnimatedStat value={5000} suffix="+" label="Active Students" />
                <AnimatedStat value={50} suffix="+" label="Expert Teachers" />
                <AnimatedStat value={100} suffix="+" label="Premium Courses" />
                <AnimatedStat value={98} suffix="%" label="Success Rate" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
