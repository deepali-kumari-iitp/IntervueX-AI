"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "Tell me about yourself.",
  "What is React and why do we use it?",
  "Explain the difference between SQL and NoSQL.",
];

export default function InterviewPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter(); 


  return (
    
    <div className="p-10">
      <h1 className="text-4xl font-bold gradient-text">AI Mock Interview</h1>

      <div className="glass rounded-3xl p-8 mt-8">
        <h2 className="text-2xl font-bold">Question {currentQuestion + 1}</h2>

        <p className="mt-4 text-lg">{questions[currentQuestion]}</p>

        <textarea
          className="w-full mt-6 p-4 rounded-2xl bg-black/20 border border-white/10"
          rows={6}
          placeholder="Type your answer..."
        />

        <button
          onClick={() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
            } else {
              router.push("/interview-result");
            }
          }}
          className="primary-btn px-6 py-3 rounded-xl mt-6"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
