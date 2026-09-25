import HeroSection from "@/components/home/HeroSection";
import SelectedWork from "@/components/home/SelectedWork";
import HowIThink from "@/components/home/HowIThink";
import VisualObservation from "@/components/home/VisualObservation";
import CurrentThought from "@/components/home/CurrentThought";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      {/* 01. Identity */}
      <HeroSection />

      {/* 02. Evidence (Substantial Work Showcase) */}
      <SelectedWork />

      {/* 03. Pause (Short 'How I Think' Statement) */}
      <HowIThink />

      {/* 04. Perspective (HMS Clicks Visual Laboratory) */}
      <VisualObservation />

      {/* 05. Exit (Current Thought Note) */}
      <CurrentThought />
    </main>
  );
}
