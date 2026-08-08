import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProjectRequestForm from "@/components/sections/ProjectRequestForm";

export default async function ProjectRequestPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect(
      `/login?callbackUrl=${encodeURIComponent("/project-request")}`
    );
  }

  return <ProjectRequestForm />;
}