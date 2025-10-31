import HowItWorks from "@/components/modules/home/HowItWorks";
import AIVisualizationSection from "@/components/modules/home/CTA";
import Features from "@/components/modules/home/Features";
import Hero from "@/components/modules/home/Hero";
import Services from "@/components/modules/home/Services";
import WhyChoose from "@/components/modules/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <Services/>
      <HowItWorks/>
      <WhyChoose/>
      <AIVisualizationSection/>
    </>
  );
}
