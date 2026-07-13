"use client";

import {
  GraduationCap,
  School,
  Wrench,
  University,
  Building2,
  Award,
  BookOpen,
  ExternalLink,
  Info,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { educationResults } from "@/lib/data/education-results";
import type { EducationResult } from "@/lib/types";
import { useState } from "react";

const logoMap: Record<string, LucideIcon> = {
  GraduationCap,
  School,
  Wrench,
  University,
  Building2,
  Award,
  BookOpen,
};

function ResultCard({ result }: { result: EducationResult }) {
  const [modalOpen, setModalOpen] = useState(false);
  const Logo = logoMap[result.logo] || GraduationCap;

  return (
    <>
      <Card hover className="flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/20">
            <Logo className="h-7 w-7" />
          </div>
          <Badge variant="official">Official Portal</Badge>
        </div>
        <h3 className="mb-2 text-lg font-bold text-text dark:text-white">{result.title}</h3>
        <p className="mb-6 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {result.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setModalOpen(true)}>
            <Info className="h-4 w-4" />
            Information
          </Button>
          <a href={result.url} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant={result.type === "result" ? "primary" : "secondary"}>
              <ExternalLink className="h-4 w-4" />
              {result.type === "result" ? "Official Result" : "Visit Portal"}
            </Button>
          </a>
        </div>
      </Card>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={result.title}>
        <p className="mb-4 text-slate-600 dark:text-slate-300">{result.description}</p>
        <p className="mb-4 text-sm text-slate-500">
          This is an official Bangladesh education portal. Click below to visit the official website.
        </p>
        <a href={result.url} target="_blank" rel="noopener noreferrer">
          <Button className="w-full">
            <ExternalLink className="h-4 w-4" />
            Visit Official Website
          </Button>
        </a>
      </Modal>
    </>
  );
}

export function ResultsPortal() {
  return (
    <section id="results" className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <Badge variant="official" className="mb-4">
            Education Board Results
          </Badge>
          <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
            Education Board Result Portal
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Check your SSC, HSC, NU, and technical board results from official education portals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      </div>
    </section>
  );
}
