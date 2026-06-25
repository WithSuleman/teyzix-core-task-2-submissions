const plans = [
{
name: "Starter",
price: "$9",
description: "Perfect for individuals and small teams.",
features: [
"5 Team Members",
"10 Projects",
"Basic Analytics",
"Email Support",
],
},
{
name: "Pro",
price: "$29",
description: "Best choice for growing businesses.",
features: [
"Unlimited Team Members",
"Unlimited Projects",
"Advanced Analytics",
"Priority Support",
],
popular: true,
},
{
name: "Enterprise",
price: "$99",
description: "For large organizations with advanced needs.",
features: [
"Custom Integrations",
"Dedicated Manager",
"Enterprise Security",
"24/7 Premium Support",
],
},
];

function Pricing() {
return ( 
  <section id="pricing" className="py-20 bg-gray-100 dark:bg-gray-900"> <div className="max-w-7xl mx-auto px-6">


    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Pricing Plans
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Flexible pricing designed for businesses of all sizes.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-3xl p-8 bg-white dark:bg-gray-800 shadow-lg
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
          ${
            plan.popular
              ? "border-2 border-blue-600 scale-105"
              : ""
          }`}
        >

          {plan.popular && (
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {plan.name}
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {plan.description}
          </p>

          <div className="mt-6">
            <span className="text-5xl font-bold text-blue-600">
              {plan.price}
            </span>

            <span className="text-gray-500">
              /month
            </span>
          </div>

          <ul className="mt-8 space-y-4">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                ✅ {feature}
              </li>
            ))}
          </ul>

          <button
            className={`w-full mt-8 py-3 rounded-xl font-semibold transition
            ${
              plan.popular
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            Get Started
          </button>

        </div>
      ))}

    </div>
  </div>
</section>


);
}

export default Pricing;
