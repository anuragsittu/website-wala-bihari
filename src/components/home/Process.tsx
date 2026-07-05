import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaCreditCard,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const processSteps = [
  {
    step: "01",
    title: "Submit Requirements",
    description:
      "Share your business details, website type, required features, and design preferences. The more information you provide, the better we can understand your vision.",
    icon: FaClipboardList,
  },
  {
    step: "02",
    title: "Receive Quote",
    description:
      "We'll carefully review your requirements and provide a detailed quotation including project scope, timeline, and pricing.",
    icon: FaFileInvoiceDollar,
  },
  {
    step: "03",
    title: "Pay Advance",
    description:
      "Once you're happy with the proposal, pay the advance amount to confirm your project and allow us to begin development.",
    icon: FaCreditCard,
  },
  {
    step: "04",
    title: "We Build Your Website",
    description:
      "Our team designs, develops, tests, and keeps you updated throughout the entire development process.",
    icon: FaLaptopCode,
  },
  {
    step: "05",
    title: "Final Delivery & Launch",
    description:
      "Review the completed website, request any final changes, pay the remaining balance, and we'll launch your website with post-launch support.",
    icon: FaRocket,
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-white">
      <SectionTitle
        title="Get Your Website in 5 Simple Steps"
        subtitle="From your first inquiry to the final launch, we've made the entire process simple, transparent, and hassle-free."
      />

      <div className="relative mx-auto mt-16 max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 hidden h-full w-1 bg-blue-100 md:block"></div>

        <div className="space-y-10">
          {processSteps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-start"
              >
                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg">
                  <Icon />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-sm font-semibold text-blue-600">
                    STEP {item.step}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}