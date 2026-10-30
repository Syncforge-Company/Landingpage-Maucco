import {
  ClipboardList,
  FileSearch,
  MessageSquareText,
  Settings2,
} from "lucide-react";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    number: "01",
    title: "Entendemos sua necessidade",
    description:
      "Conversamos sobre sua empresa e o que você precisa resolver.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Analisamos a situação",
    description:
      "Verificamos os documentos, os prazos e as exigências aplicáveis.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Organizamos os próximos passos",
    description:
      "Definimos com você as etapas, os documentos e os serviços necessários.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Cuidamos do processo",
    description:
      "Preparamos os documentos e acompanhamos o andamento de cada etapa.",
    icon: Settings2,
  },
] as const;

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="scroll-mt-24 bg-brand-deep px-5 py-16 text-white sm:px-6 md:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-balance sm:text-4xl">
              Como acontece o nosso atendimento
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Explicamos o que precisa ser feito, quais são os próximos passos e
              como vamos acompanhar o processo.
            </p>
          </div>

          <WhatsappButton
            size="lg"
            tone="leaf"
            className="w-full sm:w-auto"
            message="Olá! Quero saber mais sobre como funciona o atendimento da Maucco."
          />
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li key={step.number}>
                <BlurFade
                  inView
                  direction="up"
                  offset={12}
                  delay={index * 0.1}
                  className="border-t-2 border-brand-mint pt-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-brand-mint tabular-nums">
                      {step.number}
                    </span>

                    <Icon className="size-5 text-brand-mint" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                  <p className="mt-3 text-base leading-7 text-white/75">
                    {step.description}
                  </p>
                </BlurFade>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
