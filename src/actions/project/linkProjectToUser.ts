"use server";

import { prisma } from "@/lib/prisma";

export async function linkProjectToUser(
  projectCode: string,
  userEmail: string
) {
  try {
    if (!projectCode || !userEmail) {
      return {
        success: false,
        message: "Project code and email are required.",
      };
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail.toLowerCase(),
      },
    });

    if (!user) {
      return {
        success: false,
        message: "User account not found.",
      };
    }

    // Find the project
    const project = await prisma.project.findUnique({
      where: {
        projectCode,
      },
    });

    if (!project) {
      return {
        success: false,
        message: "Project not found.",
      };
    }

    // If project is already linked to another account
    if (project.clientId && project.clientId !== user.id) {
      return {
        success: false,
        message: "This project is already linked to another account.",
      };
    }

    // Verify email matches the email submitted with the project
    if (
      project.customerEmail.toLowerCase() !==
      user.email.toLowerCase()
    ) {
      return {
        success: false,
        message:
          "The email used for login does not match the email used for the project request.",
      };
    }

    // Link project to user
    await prisma.project.update({
      where: {
        id: project.id,
      },
      data: {
        clientId: user.id,
      },
    });

    return {
      success: true,
      message: "Project linked successfully.",
    };
  } catch (error) {
    console.error("Link Project Error:", error);

    return {
      success: false,
      message: "Unable to link project to your account.",
    };
  }
}