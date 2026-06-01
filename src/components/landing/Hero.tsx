import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <h1 className="text-6xl font-bold text-white max-w-5xl">
        Ace Your Dream Job With
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {" "}Adaptive AI Interviews
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        Practice with an AI interviewer that adapts,
        evaluates, and thinks like a real hiring team.
      </p>
      <p className="mt-4 text-slate-400">
  Resume Analysis • AI Mock Interviews • Performance Tracking
</p>

   <div className="mt-8 flex gap-4">
  <Link href="/sign-up">
   <Button
  size="lg"
  className="px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
>
  Get Started
</Button>
  </Link>

  <Link href="/sign-in">
    <Button
      variant="outline"
      size="lg"
      className="hover:scale-105 transition-all duration-300"
    >
      Sign In
    </Button>
  </Link>
</div>
    </section>
  );
}