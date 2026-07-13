"use client";

import {
  BookOpenCheck,
  IdCard,
  FileText,
  Map,
  Receipt,
  Landmark,
  Calculator,
  Shield,
  Globe,
  Phone,
  ExternalLink,
  Info,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { govtServices } from "@/lib/data/govt-services";
import type { GovtService } from "@/lib/types";
import { useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  IdCard,
  FileText,
  Map,
  Receipt,
  Landmark,
  Calculator,
  Shield,
  Globe,
  Phone,
};

function GovtServiceCard({ service }: { service: GovtService }) {
  const [modalOpen, setModalOpen] = useState(false);
  const Icon = iconMap[service.icon] || Globe;

  return (
    <>
      <Card hover className="flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <Badge variant="official">Official Government Portal</Badge>
        </div>
        <h3 className="mb-2 text-lg font-bold text-text dark:text-white">{service.name}</h3>
        <p className="mb-6 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setModalOpen(true)}
          >
            <Info className="h-4 w-4" />
            Learn More
          </Button>
          {!service.isHelpline && (
            <a href={service.url} target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                <ExternalLink className="h-4 w-4" />
                Visit Official Website
              </Button>
            </a>
          )}
        </div>
      </Card>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={service.name}
      >
        <p className="mb-4 text-slate-600 dark:text-slate-300">{service.description}</p>
        {service.isHelpline && service.helplineNumbers ? (
          <div className="space-y-3">
            {service.helplineNumbers.map((h) => (
              <div
                key={h.number}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
              >
                <span className="text-sm font-medium">{h.label}</span>
                <a
                  href={`tel:${h.number}`}
                  className="text-lg font-bold text-primary"
                >
                  {h.number}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <a href={service.url} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              <ExternalLink className="h-4 w-4" />
              Visit Official Website
            </Button>
          </a>
        )}
      </Modal>
    </>
  );
}

export function GovtPortal() {
  return (
    <section id="govt-info" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <Badge variant="official" className="mb-4">
            Official Government Portal
          </Badge>
          <h2 className="text-3xl font-bold text-text dark:text-white md:text-4xl">
            GovtInfo Service Portal
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Quick access to official Bangladesh government services. All links open the
            official government websites in a new tab.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {govtServices.map((service) => (
            <GovtServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
