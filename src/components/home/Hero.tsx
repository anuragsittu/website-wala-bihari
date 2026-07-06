import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          🚀 Professional Website Development Agency
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Build Your Dream
          <span className="text-blue-600"> Website </span>
          with Website Wala Bihari
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          We design and develop fast, responsive, and SEO-friendly websites for
          startups, local businesses, restaurants, coaching institutes,
          hospitals, freelancers, and growing brands.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#start-project"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            🚀 Start Your Project
          </Link>

          <Link
            href="#services"
            className="rounded-xl border border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Explore Services
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

          <div>
            <h2 className="text-4xl font-bold text-blue-600">5+</h2>
            <p className="mt-2 text-slate-600">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">100%</h2>
            <p className="mt-2 text-slate-600">Responsive Design</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="mt-2 text-slate-600">Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}