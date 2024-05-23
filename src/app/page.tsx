import Footer from "@/components/Layout/Footer";
import AboutSection from "@/components/Shared/HomePage/AboutSection";
import HeroSection from "@/components/Shared/HomePage/HeroSection";
import RecentLostItems from "@/components/Shared/HomePage/RecentLostItems";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <RecentLostItems />
      <Footer />
    </main>
  );
}
