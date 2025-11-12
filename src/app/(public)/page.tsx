import HowItWorks from "@/components/modules/home/HowItWorks";
import AIVisualizationSection from "@/components/modules/home/CTA";
import Features from "@/components/modules/home/Features";
import Hero from "@/components/modules/home/Hero";
import WhyChoose from "@/components/modules/home/WhyChoose";
import TopRatedDoctorsSection from "@/components/modules/home/TopDoctors";

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <TopRatedDoctorsSection/>
      <HowItWorks/>
      <WhyChoose/>
      <AIVisualizationSection/>
    </>
  );
}
