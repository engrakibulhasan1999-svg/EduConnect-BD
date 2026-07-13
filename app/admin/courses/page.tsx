import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/data/courses";
import { formatCurrency } from "@/lib/utils";

export default function AdminCoursesPage() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">Courses</h2>
      <Card className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="px-4 py-3 text-left font-semibold">Course</th>
              <th className="px-4 py-3 text-left font-semibold">Instructor</th>
              <th className="px-4 py-3 text-left font-semibold">Category</th>
              <th className="px-4 py-3 text-left font-semibold">Duration</th>
              <th className="px-4 py-3 text-left font-semibold">Fee</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id} className="border-b border-slate-100 dark:border-slate-800">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-14 overflow-hidden rounded-lg">
                      <Image src={c.thumbnail} alt={c.title} fill className="object-cover" sizes="56px" />
                    </div>
                    <span className="font-medium">{c.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{c.instructor}</td>
                <td className="px-4 py-3"><Badge variant="primary">{c.category}</Badge></td>
                <td className="px-4 py-3">{c.duration}</td>
                <td className="px-4 py-3 font-semibold text-primary">{formatCurrency(c.fee)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
