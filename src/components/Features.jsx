import {
  BarChart3,
  Bot,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Advanced Analytics",
    description:
      "Gain real-time insights with powerful dashboards and detailed reports.",
    icon: <BarChart3 size={40} />,
  },
  {
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and streamline your workflow effortlessly.",
    icon: <Bot size={40} />,
  },
  {
    title: "Cloud Integration",
    description:
      "Access your data securely from anywhere with cloud-based technology.",
    icon: <Cloud size={40} />,
  },
  {
    title: "Enterprise Security",
    description:
      "Protect your business with industry-leading security and encryption.",
    icon: <ShieldCheck size={40} />,
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
           <span
    className="inline-flex items-center px-5 py-2 rounded-full
    bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400
    font-semibold text-sm uppercase tracking-[0.2em]
    border border-blue-200 dark:border-blue-800"
  >
    ✨ Features & Benefits
  </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
            Everything You Need To Grow
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed to help businesses increase efficiency,
            improve collaboration, and accelerate growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
              border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;