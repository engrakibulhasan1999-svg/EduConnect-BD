"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/lib/context/toast-context";

export function Contact() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message sent successfully! We'll get back to you soon.", "success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
            Contact Us
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Card>
              <Mail className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-bold text-text dark:text-white">Email</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">info@educonnect.bd</p>
            </Card>
            <Card>
              <Phone className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-bold text-text dark:text-white">Phone</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">+880 1712-345678</p>
            </Card>
            <Card>
              <MapPin className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-bold text-text dark:text-white">Address</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                House 12, Road 5, Dhanmondi, Dhaka 1205
              </p>
            </Card>
          </div>
          <Card className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <Input
                  label="Email"
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <Input
                label="Subject"
                id="contact-subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              />
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <Button type="submit">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
