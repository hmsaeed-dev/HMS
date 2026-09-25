import HeroSection from "@/components/home/HeroSection";
import ProofRibbon from "@/components/home/ProofRibbon";
import SynthesisSection from "@/components/home/SynthesisSection";
import StreamsSection from "@/components/home/StreamsSection";
import ActionBand from "@/components/home/ActionBand";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <HeroSection />
      <ProofRibbon />
      <SynthesisSection />
      <StreamsSection />
      <ActionBand />
    </main>
  );
}
