import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    feedback:
      "IntervueX AI helped me crack multiple technical interviews.",
  },
  {
    name: "Priya Singh",
    role: "Frontend Developer",
    feedback:
      "The AI feedback felt exactly like a real interviewer.",
  },
  {
    name: "Aman Verma",
    role: "Full Stack Developer",
    feedback:
      "My confidence improved dramatically after practicing here.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Success Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <Card key={item.name} className="glass p-6 text-white">
            <p className="text-slate-300 mb-4">
              "{item.feedback}"
            </p>

            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="text-sm text-slate-400">
              {item.role}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}