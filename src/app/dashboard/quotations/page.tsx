import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function QuotationsPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const quotations = await prisma.quotation.findMany({
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
        Quotations
      </h1>

      <p className="mt-2 text-slate-600">
        View quotations received for your projects.
      </p>

      <div className="mt-8 grid gap-6">
        {quotations.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="text-slate-600">
              No quotations available yet.
            </p>
          </div>
        ) : (
          quotations.map((quotation) => (
            <div
              key={quotation.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">
                {quotation.project.title}
              </h2>

              <p className="mt-1 text-sm text-blue-600">
                {quotation.project.projectCode}
              </p>

              <div className="mt-5">
                <p className="text-sm text-slate-500">
                  Quotation Amount
                </p>

                <p className="text-2xl font-bold text-slate-900">
                  ₹{Number(quotation.price).toLocaleString("en-IN")}
                </p>
              </div>

              <p className="mt-3 text-slate-600">
                Estimated Delivery: {quotation.estimatedDays} days
              </p>

              <div className="mt-4">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    quotation.accepted
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {quotation.accepted
                    ? "Accepted"
                    : "Pending Approval"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}