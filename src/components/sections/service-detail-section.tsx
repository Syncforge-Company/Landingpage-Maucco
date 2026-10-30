import Link from "next/link";
import { Check } from "lucide-react";

import { PhotoBackdrop } from "@/components/shared/photo-backdrop";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { photos } from "@/constants/photos";
import { getServiceHref, services, type Service } from "@/constants/services";

type ServiceDetailSectionProps = {
  service: Service;
};

export function ServiceDetailSection({ service }: ServiceDetailSectionProps) {
  const relatedServices = services.filter(
    (item) => item.slug !== service.slug,
  );

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep px-5 py-14 text-white sm:px-6 md:py-20 lg:px-8">
        <PhotoBackdrop
          photo={photos.anavilhanas}
          priority
          overlayClassName="bg-linear-to-r from-brand-deep via-brand-deep/90 to-brand-deep/50"
        />

        <div className="mx-auto max-w-7xl">
          <nav aria-label="Trilha de navegação" className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/#servicos" className="hover:text-white">
              Serviços
            </Link>
          </nav>

          <h1 className="mt-6 max-w-4xl text-4xl leading-tight font-bold text-balance sm:text-5xl">
            {service.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {service.intro}
          </p>

          <WhatsappButton
            size="lg"
            tone="leaf"
            className="mt-8"
            message={`Olá! Quero saber mais sobre ${service.title}. Podem me orientar?`}
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Quando sua empresa precisa
            </h2>

            <ul className="mt-6 divide-y border-y">
              {service.whenNeeded.map((item) => (
                <li key={item} className="py-4 text-base leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">O que a Maucco faz</h2>

            <ul className="mt-6 divide-y border-y">
              {service.whatWeDo.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-base leading-7">
                  <Check className="mt-1.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Dúvidas sobre o serviço</h2>

            <div className="mt-6 space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="Outros serviços">
            <h2 className="text-xl font-bold">Outros serviços</h2>

            <ul className="mt-4 space-y-3 text-base">
              {relatedServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={getServiceHref(item)}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
