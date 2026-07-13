import {
  Award,
  Monitor,
  Users,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Learn from qualified teachers with years of board exam and admission test experience.",
  },
  {
    icon: Monitor,
    title: "Live & Recorded Classes",
    description: "Join live Google Meet/Zoom sessions and access recorded videos anytime from your dashboard.",
  },
  {
    icon: Users,
    title: "Personalized Learning",
    description: "Track your progress, get personalized feedback, and learn at your own pace.",
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "Secure enrollment, verified payments, and official government service links you can trust.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Evening and weekend batches designed for school and college students across Bangladesh.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support via WhatsApp, email, and phone for all your learning needs.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Why EduConnect BD
          </span>
          <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            We combine premium education with essential government and result services for a
            complete student experience.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} hover className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-text dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
