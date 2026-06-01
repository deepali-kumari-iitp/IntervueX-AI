"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const [fileName, setFileName] = useState("");
  const router = useRouter();

  return (

    
    <div className="p-10">
      <div className="glass rounded-3xl p-8">
        <h1 className="text-4xl font-bold gradient-text">
          Resume Upload
        </h1>

        <p className="mt-3 text-slate-300">
          Upload your resume for AI analysis
        </p>

        <div className="mt-8 border-2 border-dashed border-white/20 rounded-3xl p-12 text-center">
          <p className="text-lg text-slate-300">
            Drag & Drop Resume Here
          </p>

          <p className="text-sm text-slate-500 mt-2">
            PDF only • Max 5 MB
          </p>

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            id="resume-upload"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];

              if (selectedFile) {
                setFileName(selectedFile.name);
              }
            }}
          />

          <label
            htmlFor="resume-upload"
            className="inline-block primary-btn px-6 py-3 rounded-xl mt-6 cursor-pointer"
          >
            Select Resume
          </label>

          {fileName && (
            <>
              <p className="mt-4 text-green-400 font-medium">
                Resume selected successfully ✅
              </p>

              <div className="mt-6 glass rounded-2xl p-5 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">
                      📄 {fileName}
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      Resume ready for AI analysis
                    </p>
                  </div>

                  <div className="flex gap-3">
  <button
  onClick={() => router.push("/resume-analysis")}
  className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition"
>
  Analyze Resume
</button>

  <span className="text-green-400 font-medium flex items-center">
    Ready ✅
  </span>
</div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex gap-4 mt-6">
  <Link
    href="/dashboard"
    className="
      primary-btn
      px-6
      py-3
      rounded-xl
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-lg
      hover:shadow-pink-500/30
      hover:-translate-y-1
    "
  >
    ← Dashboard
  </Link>
</div>
      </div>
    </div>
  );
}