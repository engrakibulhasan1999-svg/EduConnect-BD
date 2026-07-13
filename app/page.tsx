import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Hero } from "@/components/home/hero";
import { SearchCourses } from "@/components/home/search-courses";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { FeaturedTeachers } from "@/components/home/featured-teachers";
import { GovtPortal } from "@/components/home/govt-portal";
import { ResultsPortal } from "@/components/home/results-portal";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { Contact } from "@/components/home/contact";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SearchCourses />
        <FeaturedCourses />
        <FeaturedTeachers />
        <GovtPortal />
        <ResultsPortal />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
