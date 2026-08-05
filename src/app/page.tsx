import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemsSection } from "@/components/sections/problems-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhatsappFloatingButton } from "@/components/shared/whatsapp-floating-button";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <ProcessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
