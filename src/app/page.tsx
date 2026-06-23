import { FooterSection } from "@/components/home/FooterSection";
import { HeroSection } from "@/components/home/HeroSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ConsultationSection } from "@/components/home/ConsultationSection";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseSection />
      <ConsultationSection />
      <IndustriesSection />
      <FooterSection />
    </main>
  );
}
