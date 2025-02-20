export default function UserJourneyPage() {
  return (
    <div className="p-6 text-white text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-300">User Journey Mapping</h1>
      <p className="text-lg mt-4 text-gray-300">
        A user journey map illustrates the steps users take while interacting
        with the application. This helps us identify pain points and improve the
        design.
      </p>
      <div className="mt-6">
        <img
          src="/Icons/UserJourney.png"
          alt="User Journey"
          className="mx-auto w-40 h-40"
        />
      </div>
    </div>
  );
}
