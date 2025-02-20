"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="navbar bg-blue-900 text-white shadow-lg px-4">
      {/* Left Side: Home Button */}
      <div className="flex-1">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/Icons/Logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-25 h-auto"
          />
        </Link>
      </div>

      {/* Right Side: Navigation Links as Buttons */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex gap-x-4">
          {/** User Research **/}
          <li>
            <Link
              href="/user-research"
              className="card bg-blue-800 shadow-lg p-2 rounded-lg flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-teal-500"
            >
              <Image
                src="/Icons/UserResearch.png"
                alt="User Research Icon"
                width={50}
                height={50}
                className="mt-[-2px] filter invert"
              />
              <span className="text-white font-medium">User Research</span>
            </Link>
          </li>

          {/** User Journey **/}
          <li>
            <Link
              href="/user-journey"
              className="card bg-blue-800 shadow-lg p-2 rounded-lg flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-teal-500"
            >
              <Image
                src="/Icons/UserJourney.png"
                alt="User Journey Icon"
                width={50}
                height={50}
                className="mt-[-2px] filter invert"
              />
              <span className="text-white font-medium">User Journey</span>
            </Link>
          </li>

          {/** Wireframes **/}
          <li>
            <Link
              href="/wireframes-prototype"
              className="card bg-blue-800 shadow-lg p-2 rounded-lg flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-teal-500"
            >
              <Image
                src="/Icons/Wireframe.png"
                alt="Wireframe Icon"
                width={50}
                height={50}
                className="mt-[-2px] filter invert"
              />
              <span className="text-white font-medium">Wireframes</span>
            </Link>
          </li>

          {/** Usability Testing **/}
          <li>
            <Link
              href="/usability-testing"
              className="card bg-blue-800 shadow-lg p-2 rounded-lg flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-teal-500"
            >
              <Image
                src="/Icons/UsabilityTesting.png"
                alt="Usability Testing Icon"
                width={50}
                height={50}
                className="mt-[-2px] filter invert"
              />
              <span className="text-white font-medium">Usability Testing</span>
            </Link>
          </li>

          {/** Reflection **/}
          <li>
            <Link
              href="/reflection"
              className="card bg-blue-800 shadow-lg p-2 rounded-lg flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-teal-500"
            >
              <Image
                src="/Icons/Reflection.png"
                alt="Reflection Icon"
                width={50}
                height={50}
                className="mt-[-2px] filter invert"
              />
              <span className="text-white font-medium">Reflection</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
