import { ArrowRight } from "lucide-react";

function ProductOverview() {
  return (
    <section id="overview" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="px-4 py-2 rounded-full
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white text-sm font-semibold uppercase
            tracking-widest shadow-lg"
          >
            Product Overview
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          One Platform To Manage
          <span className="text-blue-600"> Everything</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Simplify your workflow with a powerful all-in-one platform
          designed to manage teams, track analytics, automate processes,
          and improve customer relationships from a single dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="px-8 py-4 rounded-xl bg-blue-600 text-white
            font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </button>

          <button
            className="px-8 py-4 rounded-xl border border-gray-300
            dark:border-gray-700 font-semibold
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition flex items-center justify-center gap-2"
          >
            Learn More
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Active Users
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">99.9%</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Uptime
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Integrations
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Support
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductOverview;