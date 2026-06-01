const stats = [
  { value: "25K+", label: "Interviews Conducted" },
  { value: "12K+", label: "Candidates" },
  { value: "91%", label: "Success Rate" },
  { value: "500+", label: "Companies Targeted" },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-5xl font-bold text-purple-400">
              {stat.value}
            </h2>

            <p className="text-slate-300 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}