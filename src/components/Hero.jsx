import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white dark:bg-gray-900 py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="px-4 py-2 rounded-full
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white text-sm font-semibold uppercase
            tracking-widest shadow-lg"
          >
            🚀 Trusted by 10,000+ Businesses
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Grow Your Business
          <span className="text-blue-600"> Faster</span>
          <br />
          With Smart Automation
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Streamline operations, automate repetitive tasks, and gain
          real-time insights with our powerful SaaS platform built for
          startups, teams, and growing businesses.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/onboarding"
            className="inline-flex items-center justify-center gap-2
            bg-blue-600 hover:bg-blue-700 text-white
            px-8 py-4 rounded-xl font-semibold
            transition duration-300 shadow-lg"
          >
            Start Free Trial
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/demo"
            className="inline-flex items-center justify-center gap-2
            border border-gray-300 dark:border-gray-700
            px-8 py-4 rounded-xl font-semibold
            text-gray-800 dark:text-white
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition duration-300"
          >
            <PlayCircle size={20} />
            Watch Demo
          </Link>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Active Users
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">99.9%</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Uptime
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Integrations
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Support
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;