import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav
      className="sticky top-0 z-50
      bg-white/80 dark:bg-gray-900/80
      backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            flex items-center justify-center text-white font-bold"
          >
            S
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            SaaS<span className="text-blue-600">Pro</span>
          </h1>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="nav-link">
            Home
          </a>

          <a href="#overview" className="nav-link">
            Product
          </a>

          <a href="#features" className="nav-link">
            Features
          </a>

          


          

          <a href="#testimonials" className="nav-link">
            Testimonials
          </a>

          <a href="#pricing" className="nav-link">
            Pricing
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>

          
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-xl border border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA Button */}
          <Link
            to="/onboarding"
            className="hidden sm:inline-flex items-center
            bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-700 hover:to-indigo-700
            text-white px-6 py-3 rounded-xl font-semibold
            shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;