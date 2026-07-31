import {
  ClipboardList,
  FileSearch,
  MessageSquareText,
  Settings2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

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
      className="scroll-mt-20 bg-[#0d3028] px-5 py-16 text-white sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="max-w-3xl">
          <Badge className="border-white/15 bg-white/10 text-white hover:bg-white/10">
            Como funciona
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Você sabe o que acontece em cada etapa.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Explicamos o que precisa ser feito, quais são os próximos passos e
            como vamos acompanhar o processo.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <ScrollReveal
                key={step.number}
                delay={index * 0.07}
                className="h-full"
              >
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#74cf68]">
                      {step.number}
                    </span>

                    <Icon className="size-5 text-[#74cf68]" />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
