 import { useState } from "react";
import {
  Users,
  DollarSign,
  FolderKanban,
  TrendingUp,
  Bell,
  Activity,
} from "lucide-react";

function Dashboard() {
  const [user] = useState(() => {
    try {
      const savedUser = localStorage.getItem("userData");

      return savedUser
        ? JSON.parse(savedUser)
        : {
            name: "Guest User",
            email: "",
            company: "",
            plan: "Starter",
          };
    } catch (error) {
      console.error("Error loading user data:", error);

      return {
        name: "Guest User",
        email: "",
        company: "",
        plan: "Starter",
      };
    }
  });

  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Revenue",
      value: "$12,500",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Projects",
      value: "54",
      icon: FolderKanban,
      color: "text-purple-600",
    },
    {
      title: "Growth",
      value: "+18%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <span
            className="px-4 py-2 rounded-full
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white text-xs font-semibold uppercase tracking-widest"
          >
            Dashboard
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
            Welcome Back, {user?.name || "Guest User"} 👋
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Here's an overview of your workspace and business performance.
          </p>
        </div>

        <button
          className="mt-4 md:mt-0 flex items-center gap-2
          bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg
          text-gray-700 dark:text-gray-300"
        >
          <Bell size={18} />
          Notifications
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800
            p-6 rounded-3xl shadow-lg
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300"
          >
            <item.icon
              size={42}
              className={item.color}
            />

            <h3 className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
              {item.title}
            </h3>

            <p className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {/* Activity */}
        <div
          className="lg:col-span-2 bg-white dark:bg-gray-800
          rounded-3xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-blue-600" />

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
              ✅ New user registration completed
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
              💳 Payment received from Pro customer
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
              🚀 New project launched successfully
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
              📈 Monthly analytics report generated
            </div>
          </div>
        </div>

        {/* Profile */}
        <div
          className="bg-white dark:bg-gray-800
          rounded-3xl shadow-lg p-8"
        >
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto
              bg-gradient-to-r from-blue-600 to-indigo-600
              flex items-center justify-center
              text-white text-2xl font-bold"
            >
              {user?.name
                ? user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()
                : "GU"}
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              {user?.name || "Guest User"}
            </h3>

            <p className="text-gray-500 dark:text-gray-400">
              Workspace Owner
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {user?.email || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Company</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {user?.company || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Plan</span>
              <span className="font-semibold text-blue-600">
                {user?.plan || "Starter"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="font-semibold text-green-600">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
            Conversion Rate
          </h3>

          <p className="text-4xl font-bold text-blue-600">
            82%
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
            New Leads
          </h3>

          <p className="text-4xl font-bold text-purple-600">
            328
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
            Active Projects
          </h3>

          <p className="text-4xl font-bold text-green-600">
            54
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;