import {
  FaCheckCircle,
  FaArrowRight,
  FaLaptopCode,
  FaBuilding,
  FaShoppingCart,
} from "react-icons/fa";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const plans = [
  {
    title: "Portfolio Website",
    price: "₹4,999",
    subtitle: "Starting From",
    icon: FaLaptopCode,
    popular: false,
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "SEO Friendly",
      "7 Days Support",
    ],
  },
  {
    title: "Business Website",
    price: "₹9,999",
    subtitle: "Starting From",
    icon: FaBuilding,
    popular: true,
    features: [
      "Up to 10 Pages",
      "Premium UI/UX",
      "WhatsApp Integration",
      "SEO Optimized",
      "Admin Panel (Optional)",
      "30 Days Support",
    ],
  },
  {
    title: "E-Commerce Website",
    price: "Custom",
    subtitle: "Quote Based",
    icon: FaShoppingCart,
    popular: false,
    features: [
      "Unlimited Products",
      "Secure Payments",
      "Order Management",
      "Inventory System",
      "Customer Accounts",
      "Premium Support",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-slate-50">
      <SectionTitle
        title="Simple & Transparent Pricing"
        subtitle="Choose a package that fits your needs. Every project is customized to your requirements."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <div
              key={plan.title}
              className={`relative rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-600 ring-2 ring-blue-100"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-3xl text-blue-600">
                <Icon />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {plan.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">{plan.subtitle}</p>

              <div className="mt-4">
                <span className="text-5xl font-bold text-blue-600">
                  {plan.price}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <FaCheckCircle className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                Get Quote
                <FaArrowRight />
              </button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}