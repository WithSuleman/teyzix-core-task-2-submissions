import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Building2,
  Briefcase,
  CheckCircle,
  Mail,
} from "lucide-react";

function Onboarding() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    plan: "Starter",
  });

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim()) {
        alert("Please fill all required fields");
        return;
      }

      const emailRegex = /\S+@\S+\.\S+/;

      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email address");
        return;
      }
    }

    if (step === 2) {
      if (!formData.company.trim() || !formData.industry.trim()) {
        alert("Please fill all required fields");
        return;
      }
    }

    setStep(step + 1);
  };

  const handleSubmit = () => {
    localStorage.setItem(
      "userData",
      JSON.stringify(formData)
    );

    navigate("/dashboard");
  };

  const progress = (step / 3) * 100;

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="px-4 py-2 rounded-full
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white text-sm font-semibold uppercase tracking-widest"
          >
            Getting Started
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Create Your Workspace
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Complete the onboarding process to personalize your dashboard.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10">

          {/* Steps */}
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                ${
                  step >= item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mb-10">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">

              <div className="relative">
                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full pl-12 p-4 rounded-xl border
                  dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full pl-12 p-4 rounded-xl border
                  dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">

              <div className="relative">
                <Building2
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      company: e.target.value,
                    })
                  }
                  className="w-full pl-12 p-4 rounded-xl border
                  dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div className="relative">
                <Briefcase
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Industry"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      industry: e.target.value,
                    })
                  }
                  className="w-full pl-12 p-4 rounded-xl border
                  dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <label className="block mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Select Your Subscription Plan
              </label>

              <select
                value={formData.plan}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    plan: e.target.value,
                  })
                }
                className="w-full p-4 rounded-xl border
                dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              >
                <option value="Starter">Starter Plan</option>
                <option value="Pro">Pro Plan</option>
                <option value="Enterprise">Enterprise Plan</option>
              </select>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-10">

            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-xl bg-gray-500 hover:bg-gray-600 text-white transition"
              >
                Previous
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={nextStep}
                className="px-8 py-3 rounded-xl
                bg-gradient-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700
                text-white font-semibold transition"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 rounded-xl
                bg-gradient-to-r from-green-600 to-emerald-600
                hover:from-green-700 hover:to-emerald-700
                text-white font-semibold transition"
              >
                <CheckCircle size={18} />
                Complete Setup
              </button>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Onboarding;