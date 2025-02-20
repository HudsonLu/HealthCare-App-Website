"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-blue-900 text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-teal-300">
            HealthCare Management
          </h2>
          <p className="text-gray-300">
            Empowering better healthcare solutions.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-teal-300">Quick Links</h3>
          <Link href="/" className="text-gray-300 hover:text-teal-400">
            Home
          </Link>
          <Link
            href="/user-research"
            className="text-gray-300 hover:text-teal-400"
          >
            User Research
          </Link>
          <Link
            href="/user-journey"
            className="text-gray-300 hover:text-teal-400"
          >
            User Journey
          </Link>
          <Link
            href="/wireframes-prototype"
            className="text-gray-300 hover:text-teal-400"
          >
            Wireframes
          </Link>
          <Link
            href="/usability-testing"
            className="text-gray-300 hover:text-teal-400"
          >
            Usability Testing
          </Link>
          <Link
            href="/reflection"
            className="text-gray-300 hover:text-teal-400"
          >
            Reflection
          </Link>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-teal-300">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.35C0 23.403.597 24 1.325 24h11.49v-9.294H9.847V11.07h2.968V8.412c0-2.937 1.793-4.57 4.415-4.57 1.261 0 2.345.094 2.662.136v3.084l-1.825.001c-1.428 0-1.705.678-1.705 1.673v2.173h3.417l-.445 3.636h-2.972V24h5.825c.728 0 1.325-.597 1.325-1.325v-21.35C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.163c-5.488 0-9.837 4.36-9.837 9.737 0 5.04 3.756 9.213 8.644 9.735v-6.88h-2.619v-2.855h2.619v-2.17c0-2.6 1.537-4.023 3.89-4.023 1.128 0 2.306.197 2.306.197v2.515h-1.303c-1.285 0-1.689.797-1.689 1.617v1.864h2.865l-.457 2.855h-2.408v6.88c4.888-.522 8.644-4.695 8.644-9.735 0-5.377-4.349-9.737-9.837-9.737z" />
              </svg>
            </a>
            <a href="#" className="hover:text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19.615 3.184c-1.085-.648-2.268-1.05-3.548-1.15-1.27-.1-2.53.24-3.78.94-1.25-.7-2.51-1.04-3.78-.94-1.28.1-2.46.502-3.55 1.15-2.205 1.307-3.357 3.68-3.07 6.18.274 2.47 2.243 4.923 5.62 7.318l1.65 1.133c.245.168.514.307.795.41.282.103.57.152.855.146.285.006.574-.043.855-.146.282-.103.55-.242.795-.41l1.65-1.133c3.378-2.395 5.347-4.847 5.62-7.318.287-2.5-.866-4.873-3.07-6.18z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-400 text-sm mt-5">
        © 2024 Healthcare Management. All Rights Reserved.
      </div>
    </footer>
  );
}
