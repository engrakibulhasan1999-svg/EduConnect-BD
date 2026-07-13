"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEnrollment } from "@/lib/context/enrollment-context";
import { useToast } from "@/lib/context/toast-context";
import { CheckCircle } from "lucide-react";

export default function AdminPaymentsPage() {
  const { enrollments, updateEnrollment } = useEnrollment();
  const { showToast } = useToast();
  const pendingPayments = enrollments.filter((e) => e.status === "pending");

  const verifyPayment = (id: string) => {
    updateEnrollment(id, { status: "approved", meetLink: "https://meet.google.com/abc-defg-hij" });
    showToast("Payment verified and enrollment approved!", "success");
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">
        Payment Verification
      </h2>
      {pendingPayments.length > 0 ? (
        <Card className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-4 py-3 text-left font-semibold">Student</th>
                <th className="px-4 py-3 text-left font-semibold">Course</th>
                <th className="px-4 py-3 text-left font-semibold">Payment Method</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingPayments.map((e) => (
                <tr key={e.id} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3">
                    <p className="font-medium">{e.fullName}</p>
                    <p className="text-xs text-slate-500">{e.mobile}</p>
                  </td>
                  <td className="px-4 py-3">{e.courseName}</td>
                  <td className="px-4 py-3">{e.paymentMethod}</td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary">Pending</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Button size="sm" onClick={() => verifyPayment(e.id)}>
                      <CheckCircle className="h-4 w-4" /> Verify Payment
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : (
        <Card>
          <p className="text-center text-slate-500 py-8">No pending payments to verify.</p>
        </Card>
      )}
    </div>
  );
}
