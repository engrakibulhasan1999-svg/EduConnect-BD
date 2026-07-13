import type { FAQ, Testimonial } from "@/lib/types";

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I enroll in a course?",
    answer:
      "Browse our courses, click 'Enroll Now', fill in your details and payment method. Our admin team will verify your payment and approve your enrollment within 24 hours.",
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer:
      "We accept bKash, Nagad, Rocket, bank transfer, and cash payment at our office. Payment details are provided during enrollment.",
  },
  {
    id: "3",
    question: "How do I join live classes?",
    answer:
      "Once your enrollment is approved, you'll receive a Google Meet or Zoom link in your student dashboard. Join classes directly from there.",
  },
  {
    id: "4",
    question: "Can I access recorded classes?",
    answer:
      "Yes! All enrolled students get access to recorded class videos, PDF notes, and study materials through the student dashboard.",
  },
  {
    id: "5",
    question: "Is there a refund policy?",
    answer:
      "Refunds are available within 7 days of enrollment if no classes have been attended. Contact our support team for assistance.",
  },
  {
    id: "6",
    question: "Do you offer scholarships?",
    answer:
      "Yes, we offer merit-based and need-based scholarships for deserving students. Contact us with your academic records to apply.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ayesha Rahman",
    role: "HSC Student, Dhaka",
    content:
      "EduConnect BD transformed my Physics preparation. Dr. Rahima's teaching style made complex topics easy to understand. I scored A+ in my board exam!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: "2",
    name: "Rafiqul Islam",
    role: "SSC Student, Chittagong",
    content:
      "The Mathematics course was exceptional. Weekly tests and personalized feedback helped me improve from B to A+. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: "3",
    name: "Nusrat Jahan",
    role: "Admission Aspirant",
    content:
      "Thanks to EduConnect's admission prep course, I got into my dream university. The mock tests and strategy sessions were invaluable.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: "4",
    name: "Imran Hossain",
    role: "HSC Student, Sylhet",
    content:
      "The student dashboard is so convenient — live class links, notes, and progress tracking all in one place. Best online platform in Bangladesh!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
  },
];
