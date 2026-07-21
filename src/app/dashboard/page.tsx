import { prisma } from "@/lib/prisma";
import {
  FolderKanban,
  CreditCard,
  FileText,
  Bell,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";

export default async function DashboardPage() {
  const [
    projects,
    quotations,
    payments,
    notifications,
  ] = await Promise.all([
    prisma.project.count(),
    prisma.quotation.count(),
    prisma.payment.count(),
    prisma.notification.count(),
  ]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-slate-600">
        Here's what's happening today.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Projects"
          value={projects.toString()}
          icon={<FolderKanban className="text-white" />}
          color="bg-blue-600"
        />

        <StatCard
          title="Payments"
          value={payments.toString()}
          icon={<CreditCard className="text-white" />}
          color="bg-green-600"
        />

        <StatCard
          title="Quotations"
          value={quotations.toString()}
          icon={<FileText className="text-white" />}
          color="bg-orange-500"
        />

        <StatCard
          title="Notifications"
          value={notifications.toString()}
          icon={<Bell className="text-white" />}
          color="bg-purple-600"
        />
      </div>
    </div>
  );
}