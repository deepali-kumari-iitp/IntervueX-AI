import { Card } from "@/components/ui/card";

const features = [
  {
    title: "AI Interview Engine",
    description: "Adaptive interview questions based on your resume and performance.",
  },
  {
    title: "Resume Analyzer",
    description: "Extract skills, projects, strengths, and weaknesses instantly.",
  },
  {
    title: "Global Ranking",
    description: "Compete with candidates and track your percentile.",
  },
  {
    title: "Hiring Committee",
    description: "Receive feedback from AI Recruiter, Hiring Manager, and Team Lead.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="glass p-6 text-white hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-slate-300">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}