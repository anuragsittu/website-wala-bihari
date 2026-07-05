import {
  FaBolt,
  FaMobileAlt,
  FaSearch,
  FaPalette,
  FaHeadset,
  FaWallet,
} from "react-icons/fa";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    title: "Fast Delivery",
    description:
      "Get your website delivered on time without compromising quality.",
    icon: FaBolt,
  },
  {
    title: "100% Responsive",
    description:
      "Your website will look perfect on mobiles, tablets, laptops, and desktops.",
    icon: FaMobileAlt,
  },
  {
    title: "SEO Optimized",
    description:
      "Built with SEO best practices to improve your visibility on Google.",
    icon: FaSearch,
  },
  {
    title: "Premium UI/UX",
    description:
      "Modern, attractive designs focused on creating the best user experience.",
    icon: FaPalette,
  },
  {
    title: "Dedicated Support",
    description:
      "We're here to help even after your website is launched.",
    icon: FaHeadset,
  },
  {
    title: "Affordable Pricing",
    description:
      "Premium quality websites at prices that fit startups and local businesses.",
    icon: FaWallet,
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-us">
      <SectionTitle
        title="Why Choose Website Wala Bihari?"
        subtitle="We combine modern technology, creative design, and reliable support to help your business grow online."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}