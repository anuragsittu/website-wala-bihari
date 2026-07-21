import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProjectsPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const email = session.user.email.toLowerCase();

  // Find the logged-in user
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  // Get projects linked to user OR submitted using same email
const projects = await prisma.project.findMany({
  orderBy: {
    createdAt: "desc",
  },
});

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            My Projects
          </h1>

          <p className="mt-2 text-slate-600">
            Track and manage all your website projects.
          </p>
        </div>

        <Link
          href="/#start-project"
          className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          + Start New Project
        </Link>
      </div>

      {/* Projects */}
      <div className="mt-8 space-y-5">
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              No Projects Yet
            </h2>

            <p className="mt-2 text-slate-600">
              You haven't submitted any projects yet.
            </p>

            <Link
              href="/#start-project"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
            >
              Start Your First Project
            </Link>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    {project.projectCode}
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Submitted on{" "}
                    {new Date(project.createdAt).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                  {project.status.replace("_", " ")}
                </span>
              </div>

              <div className="mt-6 grid gap-5 border-t border-gray-100 pt-5 sm:grid-cols-3">
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

                <div>
                  <p className="text-sm text-slate-500">
                    Project Code
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    {project.projectCode}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link
                  href={`/dashboard/projects/${project.projectCode}`}
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}