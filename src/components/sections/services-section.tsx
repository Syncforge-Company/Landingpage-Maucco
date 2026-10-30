import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { photos, type Photo } from "@/constants/photos";
import { getServiceHref, services, type Service } from "@/constants/services";

const cardLayouts: Partial<
  Record<Service["slug"], { photo: Photo; className: string }>
> = {
  "licenciamento-ambiental-manaus": {
    photo: photos.ponteRioNegro,
    className: "sm:col-span-2 lg:row-span-2",
  },
  "outorga-agua-pocos-efluentes-manaus": {
    photo: photos.encontroDasAguas,
    className: "",
  },
  "projetos-ambientais-manaus": {
    photo: photos.anavilhanas,
    className: "sm:col-span-2",
  },
};

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <BlurFade
          inView
          direction="up"
          offset={12}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-balance sm:text-4xl">
              Serviços de consultoria ambiental para empresas
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Identificamos pendências, preparamos os documentos e acompanhamos
              os processos ambientais da sua empresa.
            </p>
          </div>

          <WhatsappButton
            size="lg"
            className="w-full sm:w-auto"
            message="Olá! Quero entender qual serviço ambiental minha empresa precisa. Podem me orientar?"
          />
        </BlurFade>

        <BentoGrid className="mt-12 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-4">
          {services.map((service, index) => {
            const layout = cardLayouts[service.slug];

            return (
              <BentoCard
                key={service.slug}
                name={service.title}
                description={service.description}
                href={getServiceHref(service)}
                cta="Ver detalhes"
                Icon={service.icon}
                photo={layout?.photo}
                featured={index === 0}
                className={layout?.className}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
