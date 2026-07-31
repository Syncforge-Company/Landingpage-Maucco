import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Recycle,
  ShieldCheck,
} from "lucide-react";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    label: "Identificação dos tipos e das quantidades de resíduos",
    icon: ClipboardCheck,
  },
  {
    label: "Orientação para armazenar e destinar cada resíduo",
    icon: Recycle,
  },
  {
    label: "Medidas para reduzir riscos e problemas na operação",
    icon: ShieldCheck,
  },
] as const;

export function FeaturedServiceSection() {
  return (
    <section className="px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <ScrollReveal className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-primary">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 text-primary-foreground sm:p-10 lg:p-14">
            <Badge className="border-white/15 bg-white/10 text-white hover:bg-white/10">
              Gestão de resíduos
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              PGRS: um plano claro para organizar os resíduos da sua empresa.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Organize os resíduos, reduza riscos e atenda às exigências
              ambientais da sua atividade.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.label} className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="size-4" />
                    </div>

                    <span className="text-sm sm:text-base">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <WhatsappButton
              size="lg"
              label="Fale com a gente sobre PGRS"
              message="Olá! Quero entender se minha empresa precisa de PGRS ou PGRSS. Podem me orientar?"
              className="mt-8 bg-white text-primary hover:bg-white/90"
            />
          </div>

          <div className="relative hidden min-h-125 bg-[#0d3028] lg:flex lg:items-center lg:justify-center">
            <div className="relative flex size-72 items-center justify-center rounded-[3rem] border border-white/10 bg-white/5">
              <div className="absolute -top-6 -right-6 flex size-28 items-center justify-center rounded-3xl bg-[#65c658]">
                <Recycle className="size-12 text-white" />
              </div>

              <div className="text-center text-white">
                <CheckCircle2 className="mx-auto size-14 text-[#74cf68]" />

                <p className="mt-5 text-xl font-semibold">
                  Resíduos sob controle
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Mais organização, menos riscos e desperdícios.
                </p>
              </div>

              <ArrowRight className="absolute right-8 bottom-8 size-6 text-white/30" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
