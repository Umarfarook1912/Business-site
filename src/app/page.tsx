import { HomeHero } from "@/components/home/HomeHero";
import { HomeServicesGrid } from "@/components/home/HomeServicesGrid";
import { HomeTechStrip } from "@/components/home/HomeTechStrip";
import { HomeDeployments } from "@/components/home/HomeDeployments";
import { HomeConsultationForm } from "@/components/home/HomeConsultationForm";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServicesGrid />
      <HomeTechStrip />
      <HomeDeployments />
      <HomeConsultationForm />
    </>
  );
}
