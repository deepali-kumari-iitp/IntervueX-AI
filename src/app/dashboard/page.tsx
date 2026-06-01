import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import Sidebar from "@/components/dashboard/Sidebar";
export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return <div>Please Login</div>;
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`,
        email: user.emailAddresses[0]?.emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }

return (
  <div className="flex min-h-screen">
    <Sidebar />

    <main className="flex-1 p-8">
      <div className="glass rounded-3xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold gradient-text">
              Welcome, {user.firstName} 👋
            </h1>
             <p className="mt-3 text-slate-300">
              Ready to ace your next interview?
            </p>
            <div className="flex gap-4 mt-6">
                
  <Link
    href="/interview"
    className="primary-btn px-6 py-3 rounded-xl"
  >
    Start Interview
  </Link>

  <Link
    href="/resume"
    className="glass px-6 py-3 rounded-xl"
  >
    Upload Resume
  </Link>
</div>

           
          </div>

          <img
            src={user.imageUrl}
            alt="profile"
            className="w-20 h-20 rounded-full border-4 border-pink-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Readiness Score</p>
          <h2 className="text-4xl font-bold mt-2">0</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Global Rank</p>
          <h2 className="text-4xl font-bold mt-2">#--</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Interviews</p>
          <h2 className="text-4xl font-bold mt-2">0</h2>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-slate-400">Average Score</p>
          <h2 className="text-4xl font-bold mt-2">0%</h2>
        </div>
        <div className="glass rounded-3xl p-6 mt-8">
  <h2 className="text-2xl font-bold">
    Recent Activity
  </h2>

  <ul className="mt-4 space-y-3 text-slate-300">
    <li>✅ Resume Uploaded</li>
    <li>✅ Resume Analysis Completed</li>
    <li>✅ Mock Interview Attempted</li>
  </ul>
</div>
<div className="glass rounded-3xl p-8 mt-8">
  <h2 className="text-2xl font-bold">
    Quick Overview
  </h2>

  <p className="text-slate-300 mt-4">
    IntervueX AI helps you improve interview readiness
    through resume analysis, mock interviews and
    performance tracking.
  </p>
</div>
      </div>
    </main>
  </div>
);
}