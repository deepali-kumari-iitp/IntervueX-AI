import Link from "next/link";

export default function LeaderboardPage() {
  const users = [
    { rank: 1, name: "Aman", score: 95 },
    { rank: 2, name: "Priya", score: 92 },
    { rank: 3, name: "Rahul", score: 88 },
    { rank: 15, name: "Deepali", score: 82 },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold gradient-text">
        Leaderboard
      </h1>

      <div className="glass rounded-3xl p-6 mt-8">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-white/10">
              <th className="py-4">Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
  key={user.rank}
  className={`border-b border-white/5 ${
    user.name === "Deepali" ? "bg-pink-500/10" : ""
  }`}
>
                <td className="py-4">#{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.score}%</td>
              </tr>
            ))}
          </tbody>
        </table>
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