"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/data/faqs";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Student Stories
          </span>
          <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
            What Our Students Say
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="relative h-full">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-6 text-slate-600 dark:text-slate-300">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="font-semibold text-text dark:text-white">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
