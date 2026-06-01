import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
export default async function ProfilePage() {
  const user = await currentUser();

  return (
    

    <div className="p-4 md:p-8">
      {/* Hero Card */}
      <div className="glass rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg shadow-pink-500/30">
            {user?.firstName?.charAt(0)}
          </div>

          {/* User Info */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              {user?.firstName} {user?.lastName}
            </h1>

            <p className="text-slate-400 mt-3">
              {user?.emailAddresses[0]?.emailAddress}
            </p>

            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              <span className="glass px-4 py-2 rounded-full">
                🎓 Student
              </span>

              <span className="glass px-4 py-2 rounded-full">
                💻 Software Engineer
              </span>

              <span className="glass px-4 py-2 rounded-full">
                🚀 IntervueX AI User
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-300">
          <p className="text-slate-400">Readiness Score</p>
          <h2 className="text-5xl font-bold mt-3 gradient-text">
            82
          </h2>
        </div>

        <div className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-300">
          <p className="text-slate-400">Global Rank</p>
          <h2 className="text-5xl font-bold mt-3 gradient-text">
            #15
          </h2>
        </div>

        <div className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-300">
          <p className="text-slate-400">Interviews</p>
          <h2 className="text-5xl font-bold mt-3 gradient-text">
            1
          </h2>
        </div>

      </div>

      {/* Activity */}
      <div className="glass rounded-3xl p-8 mt-8">
        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

        <div className="mt-6 space-y-4">

          <div className="glass rounded-2xl p-4">
            ✅ Resume Uploaded Successfully
          </div>

          <div className="glass rounded-2xl p-4">
            📊 Resume Analysis Completed
          </div>

          <div className="glass rounded-2xl p-4">
            🎤 Mock Interview Attempted
          </div>
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
    </div>
  );
}