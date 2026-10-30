import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { ProcessSection } from "@/components/sections/process-section";
import { ServiceDetailSection } from "@/components/sections/service-detail-section";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsappFloatingButton } from "@/components/shared/whatsapp-floating-button";
import { getServiceHref, services } from "@/constants/services";
import { siteConfig } from "@/lib/site";
import { createServiceSchema } from "@/lib/structured-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const href = getServiceHref(service);

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: href },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: href,
      siteName: siteConfig.name,
      title: service.seoTitle,
      description: service.seoDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={createServiceSchema(service)} />
      <Header />

      <main>
        <ServiceDetailSection service={service} />
        <ProcessSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
