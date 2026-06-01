import Link from "next/link";
export default function AnalyticsPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold gradient-text">
        Analytics
      </h1>

      <div className="glass rounded-3xl p-8 mt-8">
        <h2 className="text-2xl font-bold">Performance Analytics</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="glass p-6 rounded-2xl">
            <p>Interviews Taken</p>
            <h3 className="text-3xl font-bold mt-2">1</h3>
          </div>

          <div className="glass p-6 rounded-2xl">
            <p>Average Score</p>
            <h3 className="text-3xl font-bold mt-2">82%</h3>
          </div>

          <div className="glass p-6 rounded-2xl">
            <p>Global Rank</p>
            <h3 className="text-3xl font-bold mt-2">#15</h3>
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
    </div>
  );
}