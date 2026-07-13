import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Find answers to common questions about enrollment, classes, and payments.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
