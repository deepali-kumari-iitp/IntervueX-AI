import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen glass p-6 border-r border-white/10">
      <h1 className="text-3xl font-bold gradient-text">
        IntervueX AI
      </h1>

      <p className="text-slate-400 mt-2 text-sm">
        AI Interview Platform
      </p>

      <div className="mt-10 space-y-3">

        <Link
          href="/dashboard"
          className="
            block w-full
            px-4 py-3
            rounded-2xl
            glass
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500/10
            hover:border-pink-500
            hover:shadow-lg
            hover:shadow-pink-500/20
          "
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/interview"
          className="
            block w-full
            px-4 py-3
            rounded-2xl
            glass
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500/10
            hover:border-pink-500
            hover:shadow-lg
            hover:shadow-pink-500/20
          "
        >
          🎤 Interviews
        </Link>

        <Link
          href="/analytics"
          className="
            block w-full
            px-4 py-3
            rounded-2xl
            glass
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500/10
            hover:border-pink-500
            hover:shadow-lg
            hover:shadow-pink-500/20
          "
        >
          📊 Analytics
        </Link>

        <Link
          href="/resume"
          className="
            block w-full
            px-4 py-3
            rounded-2xl
            glass
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500/10
            hover:border-pink-500
            hover:shadow-lg
            hover:shadow-pink-500/20
          "
        >
          📄 Resume
        </Link>

        <Link
          href="/resume-analysis"
          className="
            block w-full
            px-4 py-3
            rounded-2xl
            glass
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500/10
            hover:border-pink-500
            hover:shadow-lg
            hover:shadow-pink-500/20
          "
        >
          📑 Resume Analysis
        </Link>

        <Link
          href="/leaderboard"
          className="
            block w-full
            px-4 py-3
            rounded-2xl
            glass
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500/10
            hover:border-pink-500
            hover:shadow-lg
            hover:shadow-pink-500/20
          "
        >
          🏆 Leaderboard
        </Link>

        <Link
          href="/profile"
          className="
            block w-full
            px-4 py-3
            rounded-2xl
            glass
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500/10
            hover:border-pink-500
            hover:shadow-lg
            hover:shadow-pink-500/20
          "
        >
          👤 Profile
        </Link>

      </div>
    </aside>
  );
}