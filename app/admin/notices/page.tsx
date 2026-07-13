"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { notices as initialNotices } from "@/lib/data/notices";
import { useToast } from "@/lib/context/toast-context";
import { Plus } from "lucide-react";
import type { Notice } from "@/lib/types";

export default function AdminNoticesPage() {
  const { showToast } = useToast();
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", content: "", type: "general" as Notice["type"] });

  const addNotice = (e: React.FormEvent) => {
    e.preventDefault();
    const notice: Notice = {
      id: Date.now().toString(),
      ...form,
      date: new Date().toISOString().split("T")[0],
    };
    setNotices([notice, ...notices]);
    setForm({ title: "", content: "", type: "general" });
    setShowForm(false);
    showToast("Notice published successfully!", "success");
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text dark:text-white">Notices</h2>
        <Button size="sm" onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4" /> Add Notice
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <form onSubmit={addNotice} className="space-y-4">
            <Input
              label="Title"
              id="notice-title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <div>
              <label className="mb-1.5 block text-sm font-medium">Content</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                required
                rows={3}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value as Notice["type"] })}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <option value="general">General</option>
              <option value="course">Course</option>
              <option value="urgent">Urgent</option>
            </select>
            <Button type="submit">Publish Notice</Button>
          </form>
        </Card>
      )}

      <div className="space-y-3">
        {notices.map((n) => (
          <Card key={n.id}>
            <div className="flex items-center gap-2">
              <Badge variant={n.type === "urgent" ? "outline" : "primary"}>{n.type}</Badge>
              <span className="text-xs text-slate-400">{n.date}</span>
            </div>
            <p className="mt-2 font-semibold">{n.title}</p>
            <p className="text-sm text-slate-500">{n.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
