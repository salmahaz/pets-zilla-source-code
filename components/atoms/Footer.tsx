import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f4fafe] text-gray-700 py-12 max-w-7xl mx-auto">
      {/* Constrain width to 5xl so columns aren’t too far apart */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6">
        {/* Services */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-[#7ac7fb] transition-colors">
                Home Visit
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#7ac7fb] transition-colors">
                Pet Boarding
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#7ac7fb] transition-colors">
                Pet Sitting
              </Link>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Explore</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:justify-items-start">
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7ac7fb] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7ac7fb] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7ac7fb] transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7ac7fb] transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#7ac7fb] transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📞</span>
              <span>+971 (50) 259 4745</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📧</span>
              <span>support@pets-zilla.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📨</span>
              <span>petzilla.ae@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center text-xs text-gray-500">
        © 2025 Pet Zilla. All rights reserved.
      </div>
    </footer>
  );
}
