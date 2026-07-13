import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EduConnect BD | Premium Online Education Platform Bangladesh",
    template: "%s | EduConnect BD",
  },
  description:
    "Bangladesh's premium online education platform. Quality courses, expert teachers, government services, and education board results — all in one place.",
  keywords: [
    "education Bangladesh",
    "online courses BD",
    "HSC preparation",
    "SSC courses",
    "admission test",
    "education board results",
    "government services Bangladesh",
  ],
  openGraph: {
    title: "EduConnect BD | Premium Online Education Platform",
    description: "Learn smarter, achieve more with Bangladesh's #1 education platform.",
    type: "website",
    locale: "en_BD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
