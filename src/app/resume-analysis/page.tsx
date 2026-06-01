
import Link from "next/link";
export default function ResumeAnalysisPage() {
    const atsScore = 85;
  const matchedSkills = 12;
  const missingSkills = 4;
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold gradient-text">
        Resume Analysis
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">ATS Score</p>
          <h2 className="text-5xl font-bold mt-2">{atsScore}%</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Matched Skills</p>
          <h2 className="text-5xl font-bold mt-2">{matchedSkills}</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Missing Skills</p>
          <h2 className="text-5xl font-bold mt-2">{missingSkills}</h2>
        </div>
      </div>

      <div className="glass rounded-3xl p-6 mt-8">
        <h2 className="text-2xl font-bold">
          AI Feedback
        </h2>

        <ul className="mt-4 space-y-3 text-slate-300">
          <li>✅ Strong project section</li>
          <li>✅ Good technical stack</li>
          <li>⚠ Add measurable achievements</li>
          <li>⚠ Improve resume summary</li>
        </ul>
        <div className="flex gap-4 mt-6">
  <Link
    href="/dashboard"
    className="primary-btn px-6 py-3 rounded-xl"
  >
    ← Dashboard
  </Link>
</div>
      </div>
    </div>
  );
}