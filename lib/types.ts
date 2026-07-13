export type EnrollmentStatus = "pending" | "approved" | "rejected";

export interface Course {
  id: string;
  title: string;
  slug: string;
  instructor: string;
  instructorId: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  duration: string;
  classes: number;
  fee: number;
  category: string;
  featured?: boolean;
  progress?: number;
}

export interface Teacher {
  id: string;
  name: string;
  photo: string;
  qualification: string;
  experience: string;
  specialization: string;
  bio: string;
  courses: number;
  students: number;
  rating: number;
  whatsapp?: string;
  facebook?: string;
  email?: string;
  featured?: boolean;
}

export interface GovtService {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  isHelpline?: boolean;
  helplineNumbers?: { label: string; number: string }[];
}

export interface EducationResult {
  id: string;
  title: string;
  description: string;
  url: string;
  logo: string;
  type: "result" | "info";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Enrollment {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  studentId?: string;
  courseId: string;
  courseName: string;
  paymentMethod: string;
  status: EnrollmentStatus;
  createdAt: string;
  meetLink?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  mobile: string;
  studentId?: string;
  enrolledCourses: string[];
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  type: "general" | "course" | "urgent";
}

export interface CourseMaterial {
  id: string;
  courseId: string;
  title: string;
  type: "video" | "pdf";
  url: string;
  duration?: string;
}
