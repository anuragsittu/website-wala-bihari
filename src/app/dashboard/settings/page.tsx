import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Settings
      </h1>

      <p className="mt-2 text-slate-600">
        Manage your account settings.
      </p>

      <div className="mt-8 max-w-2xl rounded-2xl bg-white p-8 shadow">
        <h2 className="text-xl font-semibold">
          Account Information
        </h2>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm text-slate-500">
              Name
            </p>

            <p className="font-medium">
              {session.user.name || "Not available"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="font-medium">
              {session.user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}