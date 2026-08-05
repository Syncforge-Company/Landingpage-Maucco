import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const organs = [
  {
    title: "SEMMAS",
    scope: "Âmbito Municipal",
    description:
      "Secretaria Municipal de Meio Ambiente e Sustentabilidade. Órgão responsável pelo licenciamento ambiental em nível municipal.",
    imageSrc: "/orgaos/semmas.jpg",
  },
  {
    title: "IPAAM",
    scope: "Âmbito Estadual",
    description:
      "Instituto de Proteção Ambiental do Amazonas. Órgão responsável pelo licenciamento ambiental em nível estadual.",
    imageSrc: "/orgaos/ipaam.jpg",
  },
  {
    title: "IBAMA",
    scope: "Âmbito Federal",
    description:
      "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis. Órgão responsável pelo licenciamento ambiental em nível federal.",
    imageSrc: "/orgaos/ibama.jpg",
  },
] as const;

export function ProblemsSection() {
  return (
    <section
      id="orgaos"
      className="scroll-mt-20 overflow-hidden px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal direction="left" className="max-w-xl lg:pt-2">
          <Badge variant="secondary">Órgãos e Licenciamento</Badge>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Trabalhamos com os processos de licenciamento em todos os órgãos ambientais
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Atuamos no acompanhamento e regularização de processos em todas as esferas ambientais.
          </p>

          <p className="mt-8 border-l-2 border-primary pl-4 text-sm leading-6 font-medium text-foreground/75">
            Identificamos pendências, respondemos a notificações, preparamos a documentação e acompanhamos os processos da sua empresa.
          </p>
        </ScrollReveal>

        <div className="border-t border-border/80">
          {organs.map((organ, index) => {
            return (
              <ScrollReveal
                key={organ.title}
                delay={index * 0.07}
                className="border-b border-border/80"
              >
                <article className="group grid gap-4 py-7 sm:grid-cols-[5rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-center sm:gap-6 lg:py-8">
                  <div className="flex items-center justify-between gap-3 sm:block">
                    <span className="text-xs font-bold tracking-[0.18em] text-muted-foreground/70 tabular-nums">
                      0{index + 1}
                    </span>

                    <div className="relative mt-2 flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-white p-1.5 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/50">
                      <Image
                        src={organ.imageSrc}
                        alt={`Logotipo ${organ.title}`}
                        width={56}
                        height={56}
                        className="size-full rounded-lg object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {organ.scope}
                    </span>
                    <h3 className="mt-1 text-lg font-bold leading-6 text-balance">
                      {organ.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-muted-foreground sm:pr-4">
                    {organ.description}
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
