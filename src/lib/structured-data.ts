import { company } from "@/constants/company";
import { getServiceHref, services, type Service } from "@/constants/services";
import { siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.url}/#organization`;

type Faq = {
  readonly question: string;
  readonly answer: string;
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": organizationId,
  name: company.fullName,
  alternateName: company.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-maucco2.png`,
  image: siteConfig.ogImage,
  description: siteConfig.description,
  email: company.email,
  telephone: `+${company.phone}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Manaus" },
    { "@type": "AdministrativeArea", name: "Amazonas" },
  ],
  sameAs: [company.instagramUrl],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${company.phone}`,
    email: company.email,
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços ambientais",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${siteConfig.url}${getServiceHref(service)}`,
      },
    })),
  },
};

export function createFaqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function createServiceSchema(service: Service) {
  const url = `${siteConfig.url}${getServiceHref(service)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.seoTitle,
      serviceType: service.title,
      description: service.seoDescription,
      url,
      provider: { "@id": organizationId },
      areaServed: organizationSchema.areaServed,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteConfig.url,
        },
        { "@type": "ListItem", position: 2, name: service.title, item: url },
      ],
    },
    createFaqSchema(service.faqs),
  ];
}
