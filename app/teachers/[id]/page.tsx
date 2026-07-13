import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  BookOpen,
  Users,
  Mail,
  MessageCircle,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CourseCard } from "@/components/courses/course-card";
import { getTeacherById } from "@/lib/data/teachers";
import { courses } from "@/lib/data/courses";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const teacher = getTeacherById(id);
  if (!teacher) return { title: "Teacher Not Found" };
  return {
    title: teacher.name,
    description: teacher.bio,
  };
}

export default async function TeacherProfilePage({ params }: Props) {
  const { id } = await params;
  const teacher = getTeacherById(id);
  if (!teacher) notFound();

  const teacherCourses = courses.filter((c) => c.instructorId === teacher.id);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 lg:px-6">
        <Breadcrumb
          items={[
            { label: "Teachers", href: "/teachers" },
            { label: teacher.name },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <Card className="text-center lg:col-span-1">
            <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full ring-4 ring-primary/20">
              <Image
                src={teacher.photo}
                alt={teacher.name}
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-text dark:text-white">{teacher.name}</h1>
            <p className="mt-1 text-primary">{teacher.qualification}</p>
            <Badge variant="outline" className="mt-3">
              {teacher.specialization}
            </Badge>

            <div className="mt-6 flex justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" /> {teacher.courses} Courses
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" /> {teacher.students}+
              </span>
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-amber-500" /> {teacher.rating}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {teacher.email && (
                <a href={`mailto:${teacher.email}`}>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4" /> Contact
                  </Button>
                </a>
              )}
              {teacher.whatsapp && (
                <a
                  href={`https://wa.me/${teacher.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" className="w-full">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              )}
              {teacher.facebook && (
                <a href={teacher.facebook} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="w-full">
                    <Share2 className="h-4 w-4" /> Facebook Page
                  </Button>
                </a>
              )}
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-8">
            <Card>
              <h2 className="mb-4 text-xl font-bold text-text dark:text-white">About</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{teacher.bio}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="text-sm text-slate-500">Experience</p>
                  <p className="font-semibold text-text dark:text-white">{teacher.experience}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="text-sm text-slate-500">Specialization</p>
                  <p className="font-semibold text-text dark:text-white">{teacher.specialization}</p>
                </div>
              </div>
            </Card>

            {teacherCourses.length > 0 && (
              <div>
                <h2 className="mb-6 text-xl font-bold text-text dark:text-white">
                  Courses by {teacher.name.split(" ")[0]}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {teacherCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Link href="/teachers" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Teachers
        </Link>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
