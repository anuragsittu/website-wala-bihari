"use client";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function StartProject() {
  return (
    <Section id="start-project" className="bg-white">
      <SectionTitle
        title="Start Your Project Today"
        subtitle="Tell us about your idea and we'll send you a personalized quotation with timeline and pricing."
      />

      <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

        <form className="grid gap-6 md:grid-cols-2">

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium">
              Full Name *
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium">
              Email Address *
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block font-medium">
              Phone Number *
            </label>

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Company */}
          <div>
            <label className="mb-2 block font-medium">
              Business / Company
            </label>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Website Type */}
          <div>
            <label className="mb-2 block font-medium">
              Website Type
            </label>

            <select className="w-full rounded-xl border border-gray-300 p-3">
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

            <select className="w-full rounded-xl border border-gray-300 p-3">
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

            <select className="w-full rounded-xl border border-gray-300 p-3">
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
              rows={6}
              placeholder="Describe your project..."
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Upload */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Upload Requirement File (Optional)
            </label>

            <input
              type="file"
              className="w-full rounded-xl border border-gray-300 p-3"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              🚀 Submit Project Request
            </button>
          </div>

        </form>

      </div>
    </Section>
  );
}