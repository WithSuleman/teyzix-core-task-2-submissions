function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              SaaSPro
            </h2>

            <p className="text-sm leading-6">
              Empowering startups and businesses with
              modern SaaS solutions to scale faster and
              work smarter.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Resources
            </h3>

            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} SaaSPro. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;