import AboutSection from "@/components/Shared/HomePage/AboutSection";
import HeroSection from "@/components/Shared/HomePage/HeroSection";
import OurTeam from "@/components/Shared/HomePage/OurTeam";
import RecentLostItems from "@/components/Shared/HomePage/RecentLostItems";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <OurTeam />
      <RecentLostItems />
    </main>
  );
}
