import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Stats from "@/components/landing/Stats";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <Features />
<HowItWorks />
<Stats />
<Testimonials />
<FAQ />
<CTA />
<Footer />
    </main>
  );
}