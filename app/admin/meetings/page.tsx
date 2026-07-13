"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEnrollment } from "@/lib/context/enrollment-context";
import { useToast } from "@/lib/context/toast-context";
import { Video, ExternalLink } from "lucide-react";

export default function AdminMeetingsPage() {
  const { enrollments, updateEnrollment } = useEnrollment();
  const { showToast } = useToast();
  const approved = enrollments.filter((e) => e.status === "approved");
  const [links, setLinks] = useState<Record<string, string>>({});

  const assignLink = (id: string) => {
    const link = links[id];
    if (!link) {
      showToast("Please enter a meeting link", "error");
      return;
    }
    updateEnrollment(id, { meetLink: link });
    showToast("Meeting link assigned successfully!", "success");
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">
        Live Meeting Management
      </h2>
      {approved.length > 0 ? (
        <div className="space-y-4">
          {approved.map((e) => (
            <Card key={e.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="font-semibold text-text dark:text-white">{e.fullName}</p>
                  <p className="text-sm text-slate-500">{e.courseName}</p>
                  {e.meetLink && (
                    <a
                      href={e.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" /> {e.meetLink}
                    </a>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Google Meet or Zoom link"
                    value={links[e.id] || e.meetLink || ""}
                    onChange={(ev) => setLinks({ ...links, [e.id]: ev.target.value })}
                    className="min-w-[280px]"
                  />
                  <Button size="sm" onClick={() => assignLink(e.id)}>
                    <Video className="h-4 w-4" /> Assign
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-center text-slate-500 py-8">
            No approved enrollments. Approve enrollments first to assign meeting links.
          </p>
        </Card>
      )}
    </div>
  );
}
