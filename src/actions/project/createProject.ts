"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/validations/project";

export async function createProject(formData: unknown) {
  try {
    // Check authentication
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        message: "Please login before creating a project.",
      };
    }

    // Validate form data
    const data = projectSchema.parse(formData);

    // Find latest project code
    const latestProject = await prisma.project.findFirst({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        projectCode: true,
      },
    });

    const year = new Date().getFullYear();

    let nextNumber = 1;

    if (latestProject?.projectCode) {
      const lastNumber = Number(
        latestProject.projectCode.split("-")[2]
      );

      if (!Number.isNaN(lastNumber)) {
        nextNumber = lastNumber + 1;
      }
    }

    const projectCode = `WWB-${year}-${String(nextNumber).padStart(
      4,
      "0"
    )}`;

    // Create project linked to logged-in user
    const project = await prisma.project.create({
      data: {
        projectCode,

        title: data.projectTitle,

        description: data.description,

        category: data.websiteType,

        customerName: data.fullName,

        customerEmail: data.email.toLowerCase(),

        customerPhone: data.phone,

        company: data.company || null,

        budget:
          Number(data.budget.replace(/[^\d]/g, "")) || null,

        clientId: session.user.id,

        status: "PENDING",
      },
    });

    return {
      success: true,
      projectId: project.id,
      projectCode: project.projectCode,
      message: "Project submitted successfully.",
    };
  } catch (error) {
    console.error("Create Project Error:", error);

    return {
      success: false,
      message: "Unable to submit project. Please try again.",
    };
  }
}