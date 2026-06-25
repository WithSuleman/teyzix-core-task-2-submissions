import { useState } from "react";

function FAQ() {
const [open, setOpen] = useState(null);

const faqs = [
{
q: "Do you offer a free trial?",
a: "Yes, we offer a 14-day free trial with full access to all premium features. No credit card is required.",
},
{
q: "Can I cancel my subscription anytime?",
a: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time without any hidden charges.",
},
{
q: "Is my data secure?",
a: "Yes. We use industry-standard encryption, secure cloud infrastructure, and regular backups to keep your data protected.",
},
{
q: "Do you provide customer support?",
a: "Yes, our support team is available 24/7 via email, live chat, and our help center.",
},
{
q: "Can I change my plan later?",
a: "Yes, you can switch between Starter, Pro, and Enterprise plans whenever your business needs change.",
},
];

return ( <section className="py-20 bg-white dark:bg-gray-900"> <div className="max-w-4xl mx-auto px-6">


    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Everything you need to know about our platform.
      </p>
    </div>

    <div className="space-y-4">

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="w-full flex justify-between items-center p-5 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <span className="font-semibold text-gray-900 dark:text-white">
              {faq.q}
            </span>

            <span className="text-2xl font-bold text-blue-600">
              {open === index ? "−" : "+"}
            </span>
          </button>

          {open === index && (
            <div className="p-5 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}

    </div>
  </div>
</section>


);
}

export default FAQ;
