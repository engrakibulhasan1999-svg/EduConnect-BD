"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEnrollment } from "@/lib/context/enrollment-context";
import { useToast } from "@/lib/context/toast-context";
import { CheckCircle, XCircle } from "lucide-react";

export default function AdminEnrollmentsPage() {
  const { enrollments, updateEnrollment } = useEnrollment();
  const { showToast } = useToast();
  const [meetLinks, setMeetLinks] = useState<Record<string, string>>({});

  const handleApprove = (id: string) => {
    const link = meetLinks[id] || "https://meet.google.com/abc-defg-hij";
    updateEnrollment(id, { status: "approved", meetLink: link });
    showToast("Enrollment approved! Student will be notified.", "success");
  };

  const handleReject = (id: string) => {
    updateEnrollment(id, { status: "rejected" });
    showToast("Enrollment rejected.", "error");
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">
        Enrollment Requests
      </h2>
      {enrollments.length > 0 ? (
        <div className="space-y-4">
          {enrollments.map((e) => (
            <Card key={e.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-text dark:text-white">{e.fullName}</p>
                    <Badge
                      variant={
                        e.status === "approved" ? "accent" : e.status === "pending" ? "secondary" : "outline"
                      }
                    >
                      {e.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500">{e.courseName}</p>
                  <p className="text-xs text-slate-400">
                    {e.email} · {e.mobile} · {e.paymentMethod}
                  </p>
                  <p className="text-xs text-slate-400">
                    Submitted: {new Date(e.createdAt).toLocaleDateString("en-BD")}
                  </p>
                </div>
                {e.status === "pending" && (
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
                    <input
                      type="url"
                      placeholder="Google Meet / Zoom link"
                      value={meetLinks[e.id] || ""}
                      onChange={(ev) =>
                        setMeetLinks({ ...meetLinks, [e.id]: ev.target.value })
                      }
                      className="rounded-xl border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                    />
                    <Button size="sm" onClick={() => handleApprove(e.id)}>
                      <CheckCircle className="h-4 w-4" /> Approve
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleReject(e.id)}>
                      <XCircle className="h-4 w-4" /> Reject
                    </Button>
                  </div>
                )}
                {e.status === "approved" && e.meetLink && (
                  <a
                    href={e.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Meeting Link Assigned
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-center text-slate-500 py-8">No enrollment requests yet.</p>
        </Card>
      )}
    </div>
  );
}
