import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { company } from "@/constants/company";
import { services } from "@/constants/services";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-maucco2.png",
    shortcut: "/logo-maucco2.png",
    apple: "/logo-maucco2.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        secureUrl: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Maucco Consultoria Ambiental em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google9b618c6e6b5f798b",
  },
  other: {
    "geo.region": "BR-AM",
    "geo.placename": "Manaus",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.url}/#organization`,
  name: company.fullName,
  alternateName: company.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-maucco2.png`,
  image: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  email: company.email,
  telephone: company.phoneLabel,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Manaus",
    },
    {
      "@type": "AdministrativeArea",
      name: "Amazonas",
    },
  ],
  sameAs: ["https://instagram.com/mauccobr"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phoneLabel,
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
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
