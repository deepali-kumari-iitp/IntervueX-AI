const faqs = [
  {
    q: "Is IntervueX AI free?",
    a: "Yes, basic interviews are free.",
  },
  {
    q: "Can I upload my resume?",
    a: "Yes, resume analysis is supported.",
  },
  {
    q: "Do you support company-specific interviews?",
    a: "Yes, including FAANG-style rounds.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="glass p-6 rounded-3xl text-white"
          >
            <h3 className="font-semibold mb-2">
              {faq.q}
            </h3>

            <p className="text-slate-300">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}