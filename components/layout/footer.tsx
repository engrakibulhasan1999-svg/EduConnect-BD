import Link from "next/link";
import {
  GraduationCap,
  Share2,
  MessageCircle,
  Play,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/teachers", label: "Teachers" },
  { href: "/contact", label: "Contact" },
];

const courseLinks = [
  { href: "/courses?category=HSC", label: "HSC Courses" },
  { href: "/courses?category=SSC", label: "SSC Courses" },
  { href: "/courses?category=Admission", label: "Admission Prep" },
  { href: "/courses?category=ICT", label: "ICT & Programming" },
];

const govtLinks = [
  { href: "/govt-info", label: "e-Passport" },
  { href: "/govt-info", label: "NID Services" },
  { href: "/govt-info", label: "Land Services" },
  { href: "/govt-info", label: "All Govt Services" },
];

const resultLinks = [
  { href: "/results", label: "SSC & HSC Results" },
  { href: "/results", label: "NU Results" },
  { href: "/results", label: "BTEB Results" },
  { href: "/results", label: "All Results" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800">
      <div className="container mx-auto px-4 py-16 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white">
                EduConnect <span className="text-primary">BD</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Bangladesh&apos;s premium online education platform. Empowering students with
              quality courses, expert teachers, and easy access to government services and
              education results.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors hover:bg-green-600 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors hover:bg-red-600 hover:text-white"
                aria-label="YouTube"
              >
                <Play className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Courses
            </h3>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Govt & Results
            </h3>
            <ul className="space-y-2">
              {govtLinks.map((link) => (
                <li key={`govt-${link.label}`}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {resultLinks.map((link) => (
                <li key={`result-${link.label}`}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-slate-800 pt-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sm">info@educonnect.bd</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-sm">+880 1712-345678</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm">Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} EduConnect BD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
