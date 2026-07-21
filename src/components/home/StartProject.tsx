"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  projectSchema,
  type ProjectFormData,
} from "@/validations/project";

import { createProject } from "@/actions/project/createProject";

export default function StartProject() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectTitle: "",
      websiteType: "Business Website",
      budget: "₹10,000 - ₹20,000",
      timeline: "Flexible",
      description: "",
    },
  });

  async function onSubmit(data: ProjectFormData) {
    const result = await createProject(data);

    if (!result.success) {
      alert(result.message);
      return;
    }

    reset();

    router.push(
      `/project-submitted?code=${result.projectCode}`
    );
  }

  return (
    <Section id="start-project" className="bg-white">
      <SectionTitle
        title="Start Your Project Today"
        subtitle="Tell us about your idea and we'll send you a personalized quotation with timeline and pricing."
      />

      <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Full Name */}
<div>
  <label className="mb-2 block font-medium">
    Full Name *
  </label>

  <input
    {...register("fullName")}
    type="text"
    placeholder="Enter your full name"
    className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
  />

  {errors.fullName && (
    <p className="mt-1 text-sm text-red-500">
      {errors.fullName.message}
    </p>
  )}
</div>

{/* Email */}
<div>
  <label className="mb-2 block font-medium">
    Email Address *
  </label>

  <input
    {...register("email")}
    type="email"
    placeholder="example@email.com"
    className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
  />

  {errors.email && (
    <p className="mt-1 text-sm text-red-500">
      {errors.email.message}
    </p>
  )}
</div>

{/* Phone */}
<div>
  <label className="mb-2 block font-medium">
    Phone Number *
  </label>

  <input
    {...register("phone")}
    type="tel"
    placeholder="+91 XXXXX XXXXX"
    className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
  />

  {errors.phone && (
    <p className="mt-1 text-sm text-red-500">
      {errors.phone.message}
    </p>
  )}
</div>

{/* Company */}
<div>
  <label className="mb-2 block font-medium">
    Business / Company
  </label>

  <input
    {...register("company")}
    type="text"
    placeholder="Company Name"
    className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
  />
</div>

{/* Project Title */}
<div>
  <label className="mb-2 block font-medium">
    Project Title *
  </label>

  <input
    {...register("projectTitle")}
    type="text"
    placeholder="Restaurant Website"
    className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
  />

  {errors.projectTitle && (
    <p className="mt-1 text-sm text-red-500">
      {errors.projectTitle.message}
    </p>
  )}
</div>

{/* Website Type */}
<div>
  <label className="mb-2 block font-medium">
    Website Type
  </label>

  <select
    {...register("websiteType")}
    className="w-full rounded-xl border border-gray-300 p-3"
  >
    <option>Business Website</option>
    <option>Portfolio Website</option>
    <option>Restaurant Website</option>
    <option>Hospital Website</option>
    <option>Coaching Institute</option>
    <option>E-Commerce Website</option>
    <option>Custom Web Application</option>
  </select>
</div>

{/* Budget */}
<div>
  <label className="mb-2 block font-medium">
    Estimated Budget
  </label>

  <select
    {...register("budget")}
    className="w-full rounded-xl border border-gray-300 p-3"
  >
    <option>₹5,000 - ₹10,000</option>
    <option>₹10,000 - ₹20,000</option>
    <option>₹20,000 - ₹50,000</option>
    <option>₹50,000+</option>
  </select>
</div>

{/* Timeline */}
<div className="md:col-span-2">
  <label className="mb-2 block font-medium">
    Preferred Timeline
  </label>

  <select
    {...register("timeline")}
    className="w-full rounded-xl border border-gray-300 p-3"
  >
    <option>Urgent (3-5 Days)</option>
    <option>1 Week</option>
    <option>2 Weeks</option>
    <option>1 Month</option>
    <option>Flexible</option>
  </select>
</div>

{/* Description */}
<div className="md:col-span-2">
  <label className="mb-2 block font-medium">
    Project Description *
  </label>

  <textarea
    {...register("description")}
    rows={6}
    placeholder="Describe your project..."
    className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
  />

  {errors.description && (
    <p className="mt-1 text-sm text-red-500">
      {errors.description.message}
    </p>
  )}
</div>
{/* Upload Requirement File */}
<div className="md:col-span-2">
  <label className="mb-2 block font-medium">
    Upload Requirement File (Optional)
  </label>

  <input
    type="file"
    className="w-full rounded-xl border border-gray-300 p-3"
  />

  <p className="mt-1 text-sm text-gray-500">
    You can upload a PDF, image, or document containing your requirements.
  </p>
</div>

{/* Submit Button */}
<div className="md:col-span-2">
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {isSubmitting
      ? "Submitting Your Request..."
      : "🚀 Submit Project Request"}
  </button>
</div>
        </form>
      </div>
    </Section>)}