export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
          🚀 Website Development Agency
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          We Build
          <span className="text-blue-600"> Modern Websites </span>
          That Grow Your Business
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          We create beautiful, responsive and high-performing websites
          for startups, businesses, restaurants, schools,
          coaching institutes and professionals.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100">
            View Portfolio
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-10 text-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="mt-2 text-gray-600">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">100+</h2>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="mt-2 text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}