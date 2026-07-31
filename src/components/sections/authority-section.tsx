import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";

import { ScrollReveal } from "@/components/shared/scroll-reveal";

const authorityItems = [
  {
    title: "Orientação para sua empresa",
    description: "Recomendações de acordo com a realidade do seu negócio.",
    icon: BadgeCheck,
  },
  {
    title: "Exigências em dia",
    description: "Ajudamos sua empresa a entender e cumprir suas obrigações.",
    icon: ShieldCheck,
  },
  {
    title: "Diferentes setores",
    description: "Atendimento para empresas de várias atividades e portes.",
    icon: Building2,
  },
  {
    title: "Documentos organizados",
    description: "Cuidamos da documentação e acompanhamos cada etapa.",
    icon: ClipboardCheck,
  },
] as const;

export function AuthoritySection() {
  return (
    <section className="border-b bg-card">
      <div className="mx-auto grid max-w-7xl divide-y px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">
        {authorityItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <ScrollReveal
              key={item.title}
              delay={index * 0.07}
              className="flex gap-4 px-4 py-7 first:pl-0 last:pr-0 sm:px-6"
            >
              <Icon className="mt-1 size-5 shrink-0 text-primary" />

              <div>
                <h2 className="font-semibold">{item.title}</h2>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
