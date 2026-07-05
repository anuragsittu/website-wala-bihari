import {
  FaGlobe,
  FaRocket,
  FaGraduationCap,
  FaHospital,
  FaUtensils,
  FaUser,
  FaShoppingCart,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Business Website",
    description:
      "Professional websites for local businesses, shops, startups, and companies to establish a strong online presence.",
    icon: FaGlobe,
  },
  {
    title: "Startup Website",
    description:
      "Modern, scalable websites designed to help startups launch quickly and attract customers and investors.",
    icon: FaRocket,
  },
  {
    title: "Coaching Institute Website",
    description:
      "Professional websites for coaching centers, schools, colleges, and educational institutes.",
    icon: FaGraduationCap,
  },
  {
    title: "Hospital & Clinic Website",
    description:
      "Healthcare websites with doctor profiles, appointment booking, services, and patient information.",
    icon: FaHospital,
  },
  {
    title: "Restaurant Website",
    description:
      "Beautiful restaurant websites with digital menus, reservations, food ordering, and customer reviews.",
    icon: FaUtensils,
  },
  {
    title: "Portfolio Website",
    description:
      "Creative portfolio websites for students, developers, designers, photographers, and freelancers.",
    icon: FaUser,
  },
  {
    title: "E-Commerce Website",
    description:
      "Online stores with secure payments, product management, inventory, and order tracking.",
    icon: FaShoppingCart,
  },
  {
    title: "Custom Web Application",
    description:
      "Custom solutions like admin panels, dashboards, booking systems, ERP, CRM, and business management software.",
    icon: FaLaptopCode,
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates, bug fixes, backups, security improvements, speed optimization, and technical support.",
    icon: FaTools,
  },
];

export default function Services() {
  return (
    <Section className="bg-slate-50" id="services">
      <SectionTitle
        title="Website Solutions for Every Business"
        subtitle="From startups and local businesses to hospitals, restaurants, coaching institutes, and online stores—we build modern websites that help your business grow."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 border border-transparent"
            >
              <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-3xl text-blue-600">
                <Icon />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}