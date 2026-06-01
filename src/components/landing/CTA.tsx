import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-5xl font-bold text-white">
        Ready To Ace Your Next Interview?
      </h2>

      <p className="text-slate-300 mt-4">
        Start practicing with adaptive AI today.
      </p>

      <Button className="mt-8">
        Get Started
      </Button>
    </section>
  );
}