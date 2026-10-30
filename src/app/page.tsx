import { AmazonasSection } from "@/components/sections/amazonas-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { KeywordsMarquee } from "@/components/sections/keywords-marquee";
import { ProblemsSection } from "@/components/sections/problems-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsappFloatingButton } from "@/components/shared/whatsapp-floating-button";
import { frequentlyAskedQuestions } from "@/constants/faq";
import { createFaqSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={createFaqSchema(frequentlyAskedQuestions)} />
      <Header />

      <main>
        <HeroSection />
        <KeywordsMarquee />
        <ServicesSection />
        <ProblemsSection />
        <AmazonasSection />
        <ProcessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
