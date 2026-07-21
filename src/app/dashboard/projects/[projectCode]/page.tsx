import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";

interface ProjectDetailsPageProps {
  params: Promise<{
    projectCode: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const { projectCode } = await params;

  const project = await prisma.project.findUnique({
    where: {
      projectCode: projectCode,
    },
    include: {
      quotation: true,
      payments: {
        orderBy: {
          createdAt: "desc",
        },
      },
      files: {
        orderBy: {
          uploadedAt: "desc",
        },
      },
      messages: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">

      {/* Back */}
      <Link
        href="/dashboard/projects"
        className="inline-block text-sm font-semibold text-blue-600 hover:underline"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            {project.projectCode}
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            {project.title}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Submitted on{" "}
            {new Date(project.createdAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          {project.status.replace("_", " ")}
        </span>
      </div>

      {/* Project Details */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Project Information
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div>
            <p className="text-sm text-slate-500">
              Customer Name
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {project.customerName}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {project.customerEmail}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Phone
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {project.customerPhone || "Not provided"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Company
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {project.company || "Not provided"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Website Type
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {project.category || "Not specified"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Estimated Budget
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {project.budget
                ? `₹${project.budget.toLocaleString("en-IN")}`
                : "Not specified"}
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="mt-6 border-t border-gray-100 pt-6">
          <p className="text-sm text-slate-500">
            Project Description
          </p>

          <p className="mt-2 leading-7 text-slate-700">
            {project.description}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Project Progress
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-6">

          {[
            "PENDING",
            "QUOTE_SENT",
            "APPROVED",
            "IN_PROGRESS",
            "REVIEW",
            "COMPLETED",
          ].map((status, index) => {

            const statuses = [
              "PENDING",
              "QUOTE_SENT",
              "APPROVED",
              "IN_PROGRESS",
              "REVIEW",
              "COMPLETED",
            ];

            const currentIndex = statuses.indexOf(project.status);

            const isCompleted = index <= currentIndex;

            return (
              <div
                key={status}
                className="text-center"
              >
                <div
                  className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    isCompleted
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>

                <p className="mt-2 text-xs font-medium text-slate-600">
                  {status.replace("_", " ")}
                </p>
              </div>
            );
          })}

        </div>
      </div>

      {/* Quotation */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Quotation
        </h2>

        {project.quotation ? (
          <div className="mt-5">

            <p className="text-3xl font-bold text-slate-900">
              ₹
              {Number(project.quotation.price).toLocaleString("en-IN")}
            </p>

            <p className="mt-2 text-slate-600">
              Estimated delivery:{" "}
              {project.quotation.estimatedDays} days
            </p>

            <p className="mt-3 font-medium">
              Status:{" "}
              {project.quotation.accepted
                ? "Accepted"
                : "Pending Approval"}
            </p>

          </div>
        ) : (
          <p className="mt-4 text-slate-600">
            Our team has not sent a quotation yet.
          </p>
        )}

      </div>

      {/* Payments */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Payments
        </h2>

        {project.payments.length === 0 ? (
          <p className="mt-4 text-slate-600">
            No payments recorded yet.
          </p>
        ) : (
          <div className="mt-5 space-y-3">

            {project.payments.map((payment) => (
              <div
                key={payment.id}
                className="flex justify-between rounded-xl bg-gray-50 p-4"
              >
                <span>
                  ₹{Number(payment.amount).toLocaleString("en-IN")}
                </span>

                <span className="font-medium">
                  {payment.status.replace("_", " ")}
                </span>
              </div>
            ))}

          </div>
        )}

      </div>

      {/* Files */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Files
        </h2>

        {project.files.length === 0 ? (
          <p className="mt-4 text-slate-600">
            No files available yet.
          </p>
        ) : (
          <div className="mt-5 space-y-3">

            {project.files.map((file) => (
              <a
                key={file.id}
                href={file.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-gray-50 p-4 text-blue-600 hover:bg-gray-100"
              >
                📄 {file.fileName}
              </a>
            ))}

          </div>
        )}

      </div>

      {/* Messages */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Messages
        </h2>

        {project.messages.length === 0 ? (
          <p className="mt-4 text-slate-600">
            No messages yet.
          </p>
        ) : (
          <div className="mt-5 space-y-3">

            {project.messages.map((message) => (
              <div
                key={message.id}
                className="rounded-xl bg-gray-50 p-4"
              >
                <p className="text-slate-700">
                  {message.content}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {new Date(message.createdAt).toLocaleString("en-IN")}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}