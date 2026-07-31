import {
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const benefits = [
  {
    title: "Problemas antecipados",
    description:
      "Mais tempo para corrigir pendências e evitar multas e embargos.",
    icon: ShieldCheck,
  },
  {
    title: "Prazos sob controle",
    description:
      "Acompanhamos cada etapa e os prazos importantes do processo.",
    icon: Clock3,
  },
  {
    title: "Menos custos inesperados",
    description:
      "Reduza gastos com irregularidades, correções e retrabalho.",
    icon: CircleDollarSign,
  },
  {
    title: "Decisões mais seguras",
    description: "Você recebe orientação clara para decidir em cada etapa.",
    icon: CheckCircle2,
  },
] as const;

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="scroll-mt-20 px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <ScrollReveal
          direction="left"
          className="relative overflow-hidden rounded-4xl bg-muted"
        >
          <ImagePlaceholder
            label="Maucco Consultoria Ambiental"
            className="aspect-square w-full"
          />
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <Badge variant="secondary">O que sua empresa ganha</Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Mais tranquilidade para cuidar do seu negócio.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Com os processos ambientais organizados, sua empresa reduz riscos,
            evita retrabalho e cresce com mais segurança.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
