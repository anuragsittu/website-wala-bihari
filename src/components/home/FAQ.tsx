"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 7–21 days depending on the project size and requirements.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the type of website and required features. Our pricing starts from ₹4,999, and we provide a customized quote after reviewing your requirements.",
  },
  {
    question: "Do I need to pay the full amount before the project starts?",
    answer:
      "No. We only require an advance payment to begin the project. The remaining amount is paid after the website is completed and approved.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website we build is fully responsive and works perfectly on mobile phones, tablets, laptops, and desktops.",
  },
  {
    question: "Can I request changes after the website is completed?",
    answer:
      "Absolutely. We provide revision rounds during development to ensure the final website meets your expectations.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes. We can help you purchase a domain, set up hosting, deploy your website, and configure everything for you.",
  },
  {
    question: "Will my website be SEO friendly?",
    answer:
      "Yes. Every website is built with basic SEO best practices including clean code, fast loading speed, mobile responsiveness, and proper meta tags.",
  },
  {
    question: "What happens after my website is launched?",
    answer:
      "We provide post-launch support, bug fixes, and guidance to ensure your website continues to run smoothly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-slate-50">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our website development services."
      />

      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-semibold text-slate-900">
                {faq.question}
              </span>

              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="border-t border-gray-100 px-6 py-5">
                <p className="leading-7 text-slate-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}