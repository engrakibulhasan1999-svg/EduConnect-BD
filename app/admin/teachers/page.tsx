import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teachers } from "@/lib/data/teachers";

export default function AdminTeachersPage() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">Teachers</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((t) => (
          <Card key={t.id}>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="56px" />
              </div>
              <div>
                <p className="font-semibold text-text dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500">{t.qualification}</p>
                <Badge variant="outline" className="mt-1 text-xs">{t.specialization}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
