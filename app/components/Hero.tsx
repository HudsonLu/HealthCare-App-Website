"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-blue-500 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-300">
            Healthcare <span className="text-white">Management System</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Empowering healthcare professionals with seamless patient management
            and scheduling tools.
          </p>
          <div className="mt-6">
            <Link
              href="/user-research"
              className="btn btn-primary bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/Icons/Logo.png"
            alt="Healthcare Hero Image"
            width={450}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Curve at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24 text-white fill-current"
        >
          <path d="M0,288L48,272C96,256,192,224,288,186.7C384,149,480,107,576,117.3C672,128,768,192,864,218.7C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
