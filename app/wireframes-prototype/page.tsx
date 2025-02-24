"use client";

import Image from "next/image";

export default function WireframesPage() {
  return (
    <div className="p-6 text-white text-left max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-300 text-center">
        Wireframes &amp; Prototype
      </h1>
      <p className="text-lg mt-4 text-blue-300 text-center">
        Wireframes help visualize the structure of the application before
        development. Prototypes allow user testing and interaction with design
        elements.
      </p>

      {/* Sketches */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Sketches</h2>
        <p className="mt-4 text-gray-300 text-justify">
          Initial sketches were created to outline the basic structure of the
          application. These sketches serve as the foundation for wireframing
          and prototyping, ensuring a well-organized user interface before
          moving into the final design phase.
        </p>
        <div className="mt-4">
          <Image
            src="/Wireframes/sketches.png"
            alt="Sketches"
            width={800}
            height={600}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Wireframes */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Wireframes</h2>
        <p className="mt-4 text-gray-300 text-justify">
          Wireframes provide a blueprint of the app’s layout and functionality
          before adding final design elements. These allow us to structure
          content, plan navigation, and optimize usability.
        </p>
        <p className="mt-4 text-lg text-gray-300">
          Please consult:
          <a
            href="https://www.figma.com/proto/QAfOQg9TZJa265uzdFtf0i/HealthCare-App?node-id=3-22&t=PC2kGKJGPQS7fROG-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 underline ml-1"
          >
            Figma Wireframes
          </a>
        </p>
        <div className="mt-4 h-64 flex justify-center items-center border border-dashed border-gray-500 rounded-lg">
          <span className="text-gray-400">
            (Wireframe images will be placed here)
          </span>
        </div>
      </div>

      {/* Prototype */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Prototype</h2>
        <p className="mt-4 text-gray-300 text-justify">
          The prototype brings the wireframes to life by adding interactive
          elements. It enables user testing and refining of the application’s
          interface based on real interactions.
        </p>
        <p className="mt-4 text-lg text-gray-300">
          Please consult:
          <a
            href="https://www.figma.com/proto/QAfOQg9TZJa265uzdFtf0i/HealthCare-App?node-id=3-22&t=PC2kGKJGPQS7fROG-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 underline ml-1"
          >
            Figma Prototype
          </a>
        </p>
      </div>

      {/* Color Palette */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Color Palette</h2>
        <p className="mt-4 text-gray-300 text-justify">
          For the design, I applied claymorphism, which includes soft shadows,
          rounded corners, and a slightly inflated 3D effect to create visually
          appealing depth. I opted for a simplistic and minimalistic design.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          The color palette was chosen to align with the theme of health,
          including white, green, and blue. These colors evoke a sense of
          calmness, helping to create a soothing experience for users and
          patients suffering from chronic illnesses.
        </p>
      </div>
    </div>
  );
}
