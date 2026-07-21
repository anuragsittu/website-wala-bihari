import { z } from "zod";

export const projectSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),

  email: z.email("Invalid email"),

  phone: z.string().min(10, "Phone number is required"),

  company: z.string().optional(),

  websiteType: z.string(),

  budget: z.string(),

  timeline: z.string(),

  projectTitle: z.string().min(3, "Project title is required"),

  description: z.string().min(20, "Please describe your project"),
});

export type ProjectFormData = z.infer<typeof projectSchema>;