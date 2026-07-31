import {
  AlertTriangle,
  CalendarClock,
  CircleDollarSign,
  FileWarning,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const problems = [
  {
    title: "Licenças fora do prazo",
    description:
      "O atraso na renovação pode gerar multas e interromper atividades.",
    icon: CalendarClock,
  },
  {
    title: "Documentos pendentes",
    description:
      "Sem os documentos exigidos, o processo pode ficar parado.",
    icon: FileWarning,
  },
  {
    title: "Multas e embargos",
    description:
      "Exigências não atendidas podem gerar autuações e gastos inesperados.",
    icon: AlertTriangle,
  },
  {
    title: "Custos que podem ser evitados",
    description:
      "Sem planejamento, sua empresa pode gastar mais com correções e retrabalho.",
    icon: CircleDollarSign,
  },
] as const;

export function ProblemsSection() {
  return (
    <section className="overflow-hidden px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal direction="left" className="max-w-xl lg:pt-2">
          <Badge variant="secondary">Evite problemas ambientais</Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Pendências ambientais podem atrasar ou até parar sua empresa.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Não espere uma fiscalização. Organizar tudo com antecedência reduz
            riscos e evita prejuízos.
          </p>

          <p className="mt-8 border-l-2 border-destructive pl-4 text-sm leading-6 font-medium text-foreground/75">
            Quanto antes sua empresa identifica uma pendência, mais simples é
            resolver.
          </p>
        </ScrollReveal>

        <div className="border-t border-border/80">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <ScrollReveal
                key={problem.title}
                delay={index * 0.07}
                className="border-b border-border/80"
              >
                <article className="group grid gap-4 py-7 sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-start sm:gap-6 lg:py-8">
                  <div className="flex items-center justify-between gap-3 sm:block">
                    <span className="text-xs font-bold tracking-[0.18em] text-destructive/70 tabular-nums">
                      0{index + 1}
                    </span>

                    <Icon className="size-5 text-destructive transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:mt-4" />
                  </div>

                  <h3 className="text-lg leading-6 font-semibold text-balance">
                    {problem.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground sm:pr-4">
                    {problem.description}
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
