"use client";

import { useRouter } from "next/navigation";


export default function InterviewResultPage() {
  const router = useRouter();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold gradient-text">
        Interview Results
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Overall Score</p>
          <h2 className="text-5xl font-bold mt-2">82%</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Communication</p>
          <h2 className="text-5xl font-bold mt-2">78%</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Technical</p>
          <h2 className="text-5xl font-bold mt-2">86%</h2>
        </div>
      </div>

      <div className="glass rounded-3xl p-6 mt-8">
        <h2 className="text-2xl font-bold">
          AI Feedback
        </h2>

        <ul className="mt-4 space-y-3 text-slate-300">
          <li>✅ Good confidence</li>
          <li>✅ Strong React fundamentals</li>
          <li>⚠ Improve answer structure</li>
          <li>⚠ Add more project examples</li>
        </ul>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => router.push("/dashboard")}
          className="primary-btn px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>

        <button
          onClick={() => router.push("/interview")}
          className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
        >
          Retake Interview
        </button>
      </div>
    </div>
  );
}