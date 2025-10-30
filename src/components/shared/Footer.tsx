"use client";

import Link from "next/link";
import { HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                CareNest
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Revolutionizing healthcare with AI-powered doctor matching and
              intelligent care solutions.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#hipaa"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  HIPAA
                </Link>
              </li>
              <li>
                <Link
                  href="#compliance"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} CareNest. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built with ❤️ using{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Next.js & ShadCN UI
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
