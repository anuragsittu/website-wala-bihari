import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function PaymentsPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const payments = await prisma.payment.findMany({
    where: {
      project: {
        customerEmail: session.user.email.toLowerCase(),
      },
    },
    include: {
      project: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Payments
      </h1>

      <p className="mt-2 text-slate-600">
        Track your project payments.
      </p>

      <div className="mt-8 grid gap-6">
        {payments.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="text-slate-600">
              No payment records available.
            </p>
          </div>
        ) : (
          payments.map((payment) => (
            <div
              key={payment.id}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <h2 className="font-semibold">
                {payment.project.title}
              </h2>

              <p className="text-sm text-blue-600">
                {payment.project.projectCode}
              </p>

              <p className="mt-4 text-2xl font-bold">
                ₹{Number(payment.amount).toLocaleString("en-IN")}
              </p>

              <p className="mt-2 text-slate-600">
                Status: {payment.status.replace("_", " ")}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}