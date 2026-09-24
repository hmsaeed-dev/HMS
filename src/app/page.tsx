import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import ProofRibbon from "@/components/home/ProofRibbon";
import SynthesisSection from "@/components/home/SynthesisSection";
import StreamsSection from "@/components/home/StreamsSection";
import ActionBand from "@/components/home/ActionBand";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProofRibbon />
      <SynthesisSection />
      <StreamsSection />
      <ActionBand />
      <Footer />
    </main>
  );
}
