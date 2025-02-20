export default function WireframesPage() {
  return (
    <div className="p-6 text-white text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-300">
        Wireframes & Prototype
      </h1>
      <p className="text-lg mt-4 text-gray-300">
        Wireframes help visualize the structure of the application before
        development. Prototypes allow user testing and interaction with design
        elements.
      </p>
      <div className="mt-6">
        <img
          src="/Icons/Wireframe.png"
          alt="Wireframe Icon"
          className="mx-auto w-40 h-40"
        />
      </div>
    </div>
  );
}
