import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <Link href="/">
        <h1 className="text-2xl font-bold text-white hover:text-pink-400 transition">
          IntervueX AI
        </h1>
      </Link>

      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="px-4 py-2 border rounded-md hover:bg-white/10 transition"
        >
          Login
        </Link>

        <Link
          href="/dashboard"
          className="px-4 py-2 bg-pink-600 rounded-md hover:bg-pink-700 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}