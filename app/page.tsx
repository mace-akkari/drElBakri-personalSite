import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import HeroSection from "@/components/sections/home/HeroSection";
import ImpactMetricsSection from "@/components/sections/home/ImpactMetricsSection";
import CurrentVentureSection from "@/components/sections/home/CurrentVentureSection";
import PreviousVenturesSection from "@/components/sections/home/PreviousVenturesSection";
import MedicalAcademicSection from "@/components/sections/home/MedicalAcademicSection";
import BooksSection from "@/components/sections/home/BooksSection";
import AwardsSection from "@/components/sections/home/AwardsSection";
import LeadershipSection from "@/components/sections/home/LeadershipSection";
import CtaSection from "@/components/sections/home/CtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ImpactMetricsSection />
        <CurrentVentureSection />
        <PreviousVenturesSection />
        <MedicalAcademicSection />
        <BooksSection />
        <AwardsSection />
        <LeadershipSection />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
