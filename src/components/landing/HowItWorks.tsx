const steps = [
  "Upload Resume",
  "Paste Job Description",
  "Start AI Interview",
  "Get Detailed Report",
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={step}
            className="glass rounded-3xl p-8 text-center text-white"
          >
            <div className="text-5xl font-bold text-purple-400 mb-4">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold">
              {step}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}