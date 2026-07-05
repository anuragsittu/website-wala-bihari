import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Website Wala Bihari
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              We build modern, responsive and SEO-friendly websites for
              businesses, startups, restaurants, coaching institutes,
              hospitals and professionals.
            </p>

            <div className="mt-6 flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebook />
              </a>

              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
              <li><Link href="#start-project">Start Project</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">
              <li>Business Website</li>
              <li>Portfolio Website</li>
              <li>E-Commerce Website</li>
              <li>Custom Web Application</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-500" />
                <span>biharultimate@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <FaPhone className="mt-1 text-blue-500" />
                <span>+91 7319697312</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span>Bihar, India</span>
              </div>

            </div>
          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Website Wala Bihari. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}