export default function UserResearchPage() {
  return (
    <div className="p-6 text-white text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-teal-500">
        User Research & Persona Creation
      </h1>
      <p className="text-lg mt-4 text-blue-300">
        Understanding user needs through surveys, interviews, and research. This
        process helps us create accurate user personas and improve the user
        experience.
      </p>

      {/* Survey Section */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">User Research</h2>
        <p className="mt-2 text-gray-300">
          Please consult the survey form:
          <a
            href="https://forms.gle/9py4WSzJdPCcneap9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 underline ml-1"
          >
            Google Form
          </a>
        </p>
        <p className="mt-4 text-gray-300">
          The survey targets individuals with chronic conditions or those who
          take daily medication, gathering insights to refine the Medora app.
        </p>
      </div>

      {/* Survey Design */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Survey Design</h2>
        <p className="mt-4 text-gray-300">
          For my health management app, the main target audience consists of
          people with chronic medical conditions or those who take medication
          daily for any purpose. The goal of the survey is to gather initial
          user feedback on HealthCare’s concept and refine the design during
          development. The survey is structured according to best practices,
          starting with demographic questions, followed by light questions, then
          the important questions, and concluding with additional light
          questions. The survey takes approximately five minutes to complete.
        </p>
        <p className="mt-4 text-gray-300">
          The survey contains 4 types of questions:
        </p>
        <ul className="list-disc text-left mx-auto max-w-3xl mt-2 text-gray-300">
          <li>
            <strong>Binary (Yes/No):</strong> Any chronic illness that requires
            medication attention
          </li>
          <li>
            <strong>Multiple-choice:</strong> User priorities in a health
            management app
          </li>
          <li>
            <strong>Likert scale (1–5):</strong> Familiarity with mobile apps
          </li>
          <li>
            <strong>Open-ended:</strong> Detailed opinions on the reasons of
            inconsistency in medication routine
          </li>
        </ul>
        <p className="mt-4 text-gray-300">
          A pilot test was conducted to ensure clarity and comprehension before
          the survey was distributed. The survey was shared through personal
          connections and messaging platforms to reach a diverse audience.
          Confidentiality was assured, as all participants' responses remained
          anonymous.
        </p>
      </div>

      {/* Survey Results */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">Survey Results</h2>
        <p className="mt-4 text-gray-300">
          The survey included 21 participants, mostly aged 18-29 and 65+.
          Two-thirds have chronic conditions requiring regular medication.
          Memory and notes are the primary reminder methods, but all
          participants admitted forgetting medication at least once.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[...Array(15).keys()].map((i) => (
            <img
              key={i}
              src={`/survey/${i + 1}.png`}
              alt={`Survey result ${i + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Key Findings */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
        <h2 className="text-2xl font-semibold text-teal-400">Key Findings</h2>
        <p className="mt-4 text-gray-300 text-justify">
          The survey had 21 participants, with the majority belonging to the
          18-29 and 65+ age groups. There were slightly more male than female
          participants, which explains why the most common occupations were
          students and retired individuals.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          <strong>Medication & Reminders: </strong>
          Two-thirds of the participants have medical conditions that require
          regular appointments or medication. Most rely on notes and memory as
          their primary method for reminders, which aligns with the target
          audience of the app. Every participant admitted to forgetting to take
          their medication at least once, with "sometimes" and "rarely" being
          the most common responses. The primary reasons for this include
          difficulty understanding medication instructions, lack of discipline
          in maintaining a consistent health routine, and simply forgetting to
          take medication on time.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          <strong>Appointment Scheduling & Feature Preferences: </strong>
          The overwhelming majority schedule doctor appointments via phone
          calls. Apart from the core features of the app, the most desired
          additional feature is tracking health metrics. In terms of reminder
          preferences, phone text messages were the most popular choice,
          receiving half of the votes. This suggests that push notifications
          within the app might not be familiar to most users, so careful
          consideration is needed for implementation.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          <strong>Accessibility & Usability: </strong>
          Most participants are comfortable with mobile apps, meaning the goal
          is to design the app in a way that is both familiar yet unique,
          incorporating best practices from well-designed mobile applications.
          Regarding accessibility needs, the most requested features are high
          color contrast and multiple language support. These enhancements will
          benefit users with visual impairments and help elderly users or
          non-native English speakers better understand complex medical
          instructions.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          <strong>Security & Privacy:</strong>
          Security and ease of use are high priorities. This means the app
          should have a minimalistic and intuitive design. To ensure privacy and
          security for users’ sensitive health information, a robust login
          system is required, with the potential integration of biometric
          authentication or two-factor authentication (2FA) for added
          protection.
        </p>
        <p className="mt-4 text-gray-300 text-justify">
          <strong>Conclusion:</strong>
          The survey revealed insightful data that will contribute to the
          development of the healthcare management app. Key findings include the
          importance of health metrics tracking, multiple language support, and
          high customization in reminders. Users expressed a preference for
          various reminder types, such as alarms and small notifications, while
          also emphasizing the need for features that help track medication
          intake effectively. The most critical aspects identified were
          usability, findability of features, and account security. To enhance
          security, participants recommended implementing two-factor
          authentication (2FA) or biometric authentication to protect their
          sensitive health information.
        </p>
      </div>

      {/* Personas */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-400">User Personas</h2>

        <div className="mt-4 p-4 bg-gray-900 rounded-lg flex flex-col items-center">
          <img
            src="/Personas/Persona1.png"
            alt="David Nguyen Persona"
            className="w-70 h-auto rounded-lg shadow-md mb-4"
          />
          <h3 className="text-xl font-bold text-teal-300">David Nguyen</h3>
          <p className="text-gray-300 text-left max-w-2xl">
            Represents the majority: 18-29, students, male, tech-savvy, prefers
            easy-to-use apps, and prioritizes health tracking.
          </p>
          <p className="text-gray-300 text-left max-w-2xl mt-2">
            David Nguyen is the first persona created based on the analysis of
            user research. In terms of demographics, over 38% of the
            participants fall within the age group of 18 to 29, 43% are
            students, and 57% are male. Regarding other metrics, 81% are
            familiar with mobile apps, 90% want to track their health metrics,
            and 76% prefer an app that is easy to use. David perfectly
            represents a large portion of the participants.
          </p>
        </div>

        <div className="mt-4 p-4 bg-gray-900 rounded-lg flex flex-col items-center">
          <img
            src="/Personas/Persona2.png"
            alt="Margaret Smith Persona"
            className="w-70 h-auto rounded-lg shadow-md mb-4"
          />
          <h3 className="text-xl font-bold text-teal-300">Margaret Smith</h3>
          <p className="text-gray-300 text-left max-w-2xl">
            Represents older users: 65+, retired, less tech-savvy, needs easy
            appointment scheduling and medication reminders.
          </p>
          <p className="text-gray-300 text-left max-w-2xl mt-2">
            Margaret Smith is the second persona created, representing the
            second-largest portion of the survey participants. Among them, 29%
            are retired, 43% are female, 48% are aged 65 and above, and 20% are
            less familiar with mobile apps. She belongs to the 38% who
            occasionally forget to take their medication on time and the 29% who
            have difficulties scheduling doctor appointments.
          </p>
        </div>
      </div>
    </div>
  );
}
