"use server";

import nodemailer from "nodemailer";

import {
  projectSchema,
  type ProjectFormData,
} from "@/validations/project";

export async function sendEnquiry(data: ProjectFormData) {
  try {
    // Validate form data on the server
    const validatedData = projectSchema.parse(data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website Wala Bihari" <${process.env.EMAIL_USER}>`,
      to: process.env.ENQUIRY_EMAIL,
      replyTo: validatedData.email,

      subject: `New Project Enquiry - ${validatedData.projectTitle}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 20px;">

          <h2 style="color: #2563eb;">
            🚀 New Project Enquiry
          </h2>

          <p>
            You have received a new project enquiry from your website.
          </p>

          <hr />

          <h3>Client Details</h3>

          <p>
            <strong>Full Name:</strong>
            ${validatedData.fullName}
          </p>

          <p>
            <strong>Email:</strong>
            ${validatedData.email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${validatedData.phone}
          </p>

          <p>
            <strong>Business / Company:</strong>
            ${validatedData.company || "Not provided"}
          </p>

          <hr />

          <h3>Project Details</h3>

          <p>
            <strong>Project Title:</strong>
            ${validatedData.projectTitle}
          </p>

          <p>
            <strong>Website Type:</strong>
            ${validatedData.websiteType}
          </p>

          <p>
            <strong>Estimated Budget:</strong>
            ${validatedData.budget}
          </p>

          <p>
            <strong>Preferred Timeline:</strong>
            ${validatedData.timeline}
          </p>

          <p>
            <strong>Project Description:</strong>
          </p>

          <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
            ${validatedData.description}
          </div>

          <hr />

          <p style="color: #64748b; font-size: 14px;">
            This enquiry was submitted through the Website Wala Bihari website.
          </p>

        </div>
      `,
    });

    return {
      success: true,
      message: "Your enquiry has been sent successfully!",
    };
  } catch (error) {
    console.error("ENQUIRY EMAIL ERROR:", error);

    return {
      success: false,
      message: "Failed to send enquiry. Please try again later.",
    };
  }
}