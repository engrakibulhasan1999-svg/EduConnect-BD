import type { Course } from "@/lib/types";

export const courses: Course[] = [
  {
    id: "1",
    title: "HSC Physics Masterclass",
    slug: "hsc-physics-masterclass",
    instructor: "Dr. Rahima Akter",
    instructorId: "1",
    description:
      "Complete HSC Physics preparation with concept-based learning, problem solving, and board exam strategies.",
    shortDescription: "Master HSC Physics with expert guidance and board-focused practice.",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    duration: "6 Months",
    classes: 48,
    fee: 8500,
    category: "HSC",
    featured: true,
    progress: 65,
  },
  {
    id: "2",
    title: "SSC Mathematics Excellence",
    slug: "ssc-mathematics-excellence",
    instructor: "Mohammad Karim",
    instructorId: "2",
    description:
      "Comprehensive SSC Mathematics course covering algebra, geometry, and statistics with weekly assessments.",
    shortDescription: "Build strong math foundations for SSC board success.",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
    duration: "4 Months",
    classes: 36,
    fee: 6000,
    category: "SSC",
    featured: true,
    progress: 40,
  },
  {
    id: "3",
    title: "English for Academic Success",
    slug: "english-academic-success",
    instructor: "Sarah Chowdhury",
    instructorId: "3",
    description:
      "Improve English reading, writing, and communication skills for academic and professional growth.",
    shortDescription: "Enhance your English proficiency for exams and career.",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    duration: "3 Months",
    classes: 24,
    fee: 5500,
    category: "Language",
    featured: true,
  },
  {
    id: "4",
    title: "Admission Test Preparation",
    slug: "admission-test-prep",
    instructor: "Dr. Rahima Akter",
    instructorId: "1",
    description:
      "Intensive preparation for university admission tests including DU, BUET, and medical entrance.",
    shortDescription: "Crack top university admission tests with proven strategies.",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    duration: "8 Months",
    classes: 64,
    fee: 12000,
    category: "Admission",
    featured: true,
  },
  {
    id: "5",
    title: "HSC Chemistry Advanced",
    slug: "hsc-chemistry-advanced",
    instructor: "Fatima Begum",
    instructorId: "4",
    description:
      "In-depth HSC Chemistry with lab concepts, organic chemistry, and past paper analysis.",
    shortDescription: "Advanced chemistry concepts for HSC excellence.",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    duration: "5 Months",
    classes: 40,
    fee: 7500,
    category: "HSC",
  },
  {
    id: "6",
    title: "ICT & Programming Basics",
    slug: "ict-programming-basics",
    instructor: "Tanvir Hasan",
    instructorId: "5",
    description:
      "Learn ICT fundamentals and introductory programming with Python for SSC and HSC students.",
    shortDescription: "Start your programming journey with ICT fundamentals.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    duration: "4 Months",
    classes: 32,
    fee: 7000,
    category: "ICT",
  },
];

export function getCourseById(id: string) {
  return courses.find((c) => c.id === id);
}

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses() {
  return courses.filter((c) => c.featured);
}
