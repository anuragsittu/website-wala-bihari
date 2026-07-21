import Link from "next/link";

type ProjectSubmittedPageProps = {
  searchParams: Promise<{
    code?: string;
  }>;
};

export default async function ProjectSubmittedPage({
  searchParams,
}: ProjectSubmittedPageProps) {
  const params = await searchParams;

  const projectCode = params.code || "Not Available";

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl text-green-600">
            ✓
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Project Request Submitted!
        </h1>

        <p className="mt-3 text-slate-600">
          Thank you for choosing Website Wala Bihari.
          Your project request has been successfully submitted.
        </p>

        {/* Project Code */}
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="text-sm font-medium text-slate-600">
            Your Project Code
          </p>

          <p className="mt-2 text-2xl font-bold tracking-wider text-blue-600">
            {projectCode}
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Please save this code to track your project.
          </p>
        </div>

        {/* Track Project */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Track Your Project
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Create an account or sign in to track your project,
            view quotations, payments, files, and messages.
          </p>
        </div>

        {/* Login */}
        <Link
          href={`/login?projectCode=${encodeURIComponent(projectCode)}`}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue to Login
        </Link>

        {/* Register */}
        <Link
          href={`/register?projectCode=${encodeURIComponent(projectCode)}`}
          className="mt-3 flex w-full items-center justify-center rounded-xl border border-gray-300 py-3 font-semibold text-slate-700 transition hover:bg-gray-50"
        >
          Create an Account
        </Link>

        {/* Home */}
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Homepage
        </Link>

      </div>
    </main>
  );
}