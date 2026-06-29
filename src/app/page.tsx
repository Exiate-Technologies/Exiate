import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TechSection } from "@/components/sections/TechSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <TechSection />
      <VisionSection />
      <ContactSection />
    </>
  );
}
