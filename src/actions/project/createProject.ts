"use server";

import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/validations/project";

export async function createProject(formData: unknown) {
  try {
    const data = projectSchema.parse(formData);

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
      const parts = latestProject.projectCode.split("-");

      if (parts.length === 3) {
        const last = Number(parts[2]);

        if (!Number.isNaN(last)) {
          nextNumber = last + 1;
        }
      }
    }

    const projectCode = `WWB-${year}-${String(nextNumber).padStart(4, "0")}`;

    const project = await prisma.project.create({
      data: {
        projectCode,

        title: data.projectTitle.trim(),

        description: data.description.trim(),

        category: data.websiteType,

        budget: Number(data.budget.replace(/[^\d]/g, "")) || null,

        timeline: data.timeline,

        customerName: data.fullName.trim(),

        customerEmail: data.email.toLowerCase().trim(),

        customerPhone: data.phone.trim(),

        company: data.company?.trim() || null,

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
      message: "Unable to submit project.",
    };
  }
}