import type { Notice, CourseMaterial } from "@/lib/types";

export const notices: Notice[] = [
  {
    id: "1",
    title: "HSC Physics — Class Rescheduled",
    content: "Tomorrow's Physics class moved to 4:00 PM due to instructor availability.",
    date: "2026-07-10",
    type: "course",
  },
  {
    id: "2",
    title: "New Admission Test Batch Starting",
    content: "Enrollment open for August 2026 admission test preparation batch. Limited seats!",
    date: "2026-07-08",
    type: "urgent",
  },
  {
    id: "3",
    title: "Eid Holiday Schedule",
    content: "Classes will remain closed during Eid holidays. Regular schedule resumes July 20.",
    date: "2026-07-05",
    type: "general",
  },
];

export const courseMaterials: CourseMaterial[] = [
  {
    id: "1",
    courseId: "1",
    title: "Chapter 1: Mechanics Fundamentals",
    type: "video",
    url: "#",
    duration: "45 min",
  },
  {
    id: "2",
    courseId: "1",
    title: "Chapter 2: Thermodynamics",
    type: "video",
    url: "#",
    duration: "52 min",
  },
  {
    id: "3",
    courseId: "1",
    title: "Physics Formula Sheet (PDF)",
    type: "pdf",
    url: "#",
  },
  {
    id: "4",
    courseId: "1",
    title: "Past Board Questions — Mechanics",
    type: "pdf",
    url: "#",
  },
];
