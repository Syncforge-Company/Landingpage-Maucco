import { AuthoritySection } from "@/components/sections/authority-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturedServiceSection } from "@/components/sections/featured-service-section";
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
        <AuthoritySection />
        <ProblemsSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <FeaturedServiceSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
