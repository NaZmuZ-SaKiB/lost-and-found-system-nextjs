import RecentLostItemsLoading from "@/components/Loaders/RecentLostItemsLoading";
import AboutSection from "@/components/Shared/HomePage/AboutSection";
import FollowersSection from "@/components/Shared/HomePage/FollowersSection";
import HeroSection from "@/components/Shared/HomePage/HeroSection";
import OurTeam from "@/components/Shared/HomePage/OurTeam";
import RecentLostItems from "@/components/Shared/HomePage/RecentLostItems";
import Tesimonials from "@/components/Shared/HomePage/Tesimonials";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <OurTeam />

      <Suspense fallback={<RecentLostItemsLoading />}>
        <RecentLostItems />
      </Suspense>

      <FollowersSection />
      <Tesimonials />
    </main>
  );
}
