import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ali Khan",
    role: "CEO, TechNova",
    review:
      "This platform transformed our workflow and significantly improved team productivity. Highly recommended!",
  },
  {
    name: "Ahmed Raza",
    role: "Product Manager",
    review:
      "Clean interface, excellent performance, and outstanding customer support. A great experience overall.",
  },
  {
    name: "Sara Ahmed",
    role: "Founder, StartupHub",
    review:
      "One of the best SaaS solutions we've used. It helped us scale faster and manage operations efficiently.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
            <span
    className="inline-flex items-center px-5 py-2 rounded-full
    bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400
    font-semibold text-sm uppercase tracking-[0.2em]
    border border-blue-200 dark:border-blue-800"
  >
    ✨ Testimonials
  </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses worldwide to improve productivity,
            collaboration, and growth.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg
              hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                "{item.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;