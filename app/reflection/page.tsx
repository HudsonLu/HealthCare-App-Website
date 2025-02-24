"use client";

export default function ReflectionPage() {
  return (
    <div className="p-6 text-white text-left max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-300 text-center">
        Reflection & Learnings
      </h1>
      <p className="text-lg mt-4 text-blue-300 text-center">
        The UX design process taught us how to refine features based on user
        feedback. Continuous improvements make the app more user-friendly.
      </p>

      {/* Understanding User Needs */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">
          Understanding User Needs
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          The UX design process helped me identify user needs. By conducting
          user research, I created user personas, which provided a deeper
          understanding of users and inspired new ideas. This approach allowed
          me to focus on their actual needs rather than my assumptions, which
          may differ.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          It also helped me empathize with users by considering their
          perspectives. They are not concerned with the background processes as
          long as they can access what they need in a user-friendly way. The UX
          design process played a crucial role in understanding user needs and
          refining the app to enhance usability.
        </p>
      </div>

      {/* Key Learnings */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Key Learnings</h2>
        <p className="mt-4 text-gray-300 text-justify">
          Through user research, persona creation, and user journey mapping, I
          gained insights into how individuals with chronic conditions manage
          their medications and appointments. I learned the importance of
          accessibility, simplicity, and emotional considerations. Managing
          chronic conditions is stressful, and the app's goal is to support
          users by making their healthcare management easier and more intuitive.
        </p>
      </div>

      {/* Addressing Challenges */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">
          Addressing Challenges
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          The UX process addressed key challenges by simplifying navigation,
          enhancing appointment scheduling clarity, and improving notification
          management. A streamlined menu and quick-access button made medication
          tracking easier, while color-coded tags and a confirmation step
          reduced confusion in scheduling.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          I also incorporated the feature to contact health professionals in the
          appointment tab. Customizable reminders helped prevent notification
          overload.
        </p>
      </div>

      {/* Future Improvements */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">
          Future Improvements
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          Looking ahead, AI-powered medication insights and enhanced telehealth
          features will further improve usability. The iterative approach,
          driven by user feedback, ensures continuous refinement, making the app
          more intuitive and effective for users.
        </p>
      </div>
    </div>
  );
}
