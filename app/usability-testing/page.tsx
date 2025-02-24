"use client";

export default function UsabilityTestingPage() {
  return (
    <div className="p-6 text-white text-left max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-300 text-center">
        Usability Testing
      </h1>
      <p className="text-lg mt-4 text-blue-300 text-center">
        Usability testing ensures the system is user-friendly and meets
        accessibility standards. Feedback helps refine interactions and enhance
        user experience.
      </p>

      {/* Testing Methodology */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">
          Testing Methodology
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          Usability testing is useful for determining how usable a product is
          and how findable its features are for users. It collects real data
          directly from users to refine the design and improve the overall user
          experience. To facilitate usability testing, it is important to
          introduce the test user group, making them feel comfortable and
          setting expectations. The session format will be conducted as follows:
        </p>
        <ul className="list-disc ml-6 mt-4 text-gray-300">
          <li>
            <strong>Session Length:</strong> 30 minutes
          </li>
          <li>
            <strong>Moderated Remote Testing</strong>
          </li>
          <li>
            <strong>Allowances:</strong> Breaks, questions, and stopping at any
            time
          </li>
          <li>
            <strong>Research Overview:</strong> High-level research topic and
            method
          </li>
          <li>
            <strong>User Participation:</strong> Think out loud, exhibit natural
            behavior
          </li>
          <li>
            <strong>Testing Focus:</strong> Evaluation of design, not the user
          </li>
          <li>
            <strong>Facilitator Role:</strong> Asking clarifying questions and
            providing guidance
          </li>
          <li>
            <strong>Recording:</strong> Participants will be reminded that the
            session is being recorded
          </li>
        </ul>
      </div>

      {/* Goals */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Goals</h2>
        <p className="mt-4 text-gray-300 text-justify">
          The objectives of the testing will focus on the main features of the
          application, such as the ease of setting up medication reminders and
          scheduling doctor appointments. It will also assess the navigation and
          the findability of essential features needed by users. Another goal is
          to understand users&apos; emotional responses to the app and identify
          pain points.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          Additionally, the testing aims to prevent future design mistakes,
          detect potential usability issues early, and validate the design with
          real user data. It also ensures that the product is intuitive and
          user-centered. Developers often fall into the false-consensus bias,
          and usability testing helps provide insights from the actual
          user&apos;s perspective.
        </p>
      </div>

      {/* User Tasks */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">User Tasks</h2>
        <ul className="list-decimal ml-6 mt-4 text-gray-300">
          <li>Create an account and input medical details.</li>
          <li>
            Add a new medication, set a reminder schedule, and confirm the
            notification.
          </li>
          <li>Book a doctor&apos;s appointment and receive confirmation.</li>
          <li>Log medication intake and review past logs.</li>
          <li>Send a message to a healthcare professional.</li>
        </ul>
        <p className="mt-4 text-gray-300 text-justify">
          The goal is to assess whether users can navigate intuitively on their
          own. The funnel technique will be applied as the testing approach for
          user tasks. In other words, exploratory tasks will be introduced
          first, followed by directed tasks to evaluate usability in a
          structured manner. This ensures that both intuitive navigation and
          guided interactions are tested. If users do not utilize the expected
          tools, they will be guided toward the correct ones. The facilitator
          will assist users in staying on the correct track by gradually
          narrowing their choices.
        </p>
      </div>

      {/* Analysis and Iteration */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">
          Analysis and Iteration
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          Usability testing plays a crucial role in enhancing the healthcare
          management app by ensuring a seamless and user-friendly experience.
          Data from usability sessions will be gathered, categorized, and
          prioritized to address navigation and interaction issues. Design
          modifications will be made based on validated feedback, followed by
          re-testing to drive iterative improvements.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          Various methods will be used to collect feedback, including screen
          recordings, interviews, and quantitative metrics like task completion
          time and success rates. Common pain points will be identified,
          usability issues will be prioritized by severity, and design updates
          will be implemented accordingly. Finally, A/B testing will be
          conducted to measure the effectiveness of refinements, such as shapes
          and colors, ensuring continuous enhancement of the app&apos;s
          usability.
        </p>
      </div>
    </div>
  );
}
