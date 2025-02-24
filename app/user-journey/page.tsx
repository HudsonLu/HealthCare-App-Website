"use client";

import Image from "next/image";

export default function UserJourneyPage() {
  const handleFullscreen = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      img.requestFullscreen();
    }
  };

  return (
    <div className="p-6 text-white text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-300">User Journey Mapping</h1>
      <p className="text-lg mt-4 text-blue-300">
        A user journey map illustrates the steps users take while interacting
        with the application. This helps us identify pain points and improve the
        design.
      </p>

      <p className="mt-6 text-lg text-blue-300">
        Please consult:
        <a
          href="https://www.figma.com/board/0dLGSlpV00YE1cNtKQs4oJ/User-Journey-map?node-id=0-1&p=f&t=zQAlYZB7k4FkEllh-0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 underline ml-1"
        >
          Figma User Journey Map
        </a>
      </p>

      <div className="mt-6 relative">
        <p className="text-sm text-blue-400 mb-2">
          Click on the image to view in fullscreen.
        </p>
        <Image
          src="/Personas/UserJourney.png"
          alt="User Journey"
          width={2000}
          height={600}
          className="mx-auto rounded-lg shadow-md cursor-pointer"
          onClick={handleFullscreen}
        />
      </div>

      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
        <h2 className="text-2xl font-semibold text-teal-400">
          David&apos;s Journey
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          In the user journey map, David is going through the entire process of
          setting up for the first time. He received a new prescription from his
          doctor, and he wants to use this app to facilitate his medication
          tracking and management. He will input the necessary information about
          his medication and set reminders to maintain a consistent health
          routine.
        </p>
      </div>
    </div>
  );
}
