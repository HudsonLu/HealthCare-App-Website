"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      {/* Left Side: Home Button */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          🏠 Home
        </Link>
      </div>

      {/* Right Side: Navigation Links */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/user-research">User Research</Link>
          </li>
          <li>
            <Link href="/user-journey">User Journey</Link>
          </li>
          <li>
            <Link href="/wireframes-prototype">Wireframes</Link>
          </li>
          <li>
            <Link href="/usability-testing">Usability Testing</Link>
          </li>
          <li>
            <Link href="/reflection">Reflection</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
