import Image from "next/image";

import { BlurFade } from "@/components/ui/blur-fade";
import SpotlightCard from "@/components/ui/spotlight-card";
import { organs } from "@/constants/organs";

export function ProblemsSection() {
  return (
    <section
      id="orgaos"
      className="scroll-mt-24 bg-muted/50 px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">
            Trabalhamos com os processos de licenciamento em todos os órgãos
            ambientais
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Identificamos pendências, respondemos a notificações, preparamos a
            documentação e acompanhamos os processos da sua empresa.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {organs.map((organ, index) => (
            <li key={organ.title}>
              <BlurFade
                inView
                direction="up"
                offset={12}
                delay={index * 0.08}
                className="h-full"
              >
                <SpotlightCard
                  theme="light"
                  spotlightColor="var(--brand-leaf)"
                  spotlightSize={280}
                  className="h-full rounded-lg p-6 sm:p-8"
                  style={
                    {
                      "--spotlight-card-surface": "var(--card)",
                    } as React.CSSProperties
                  }
                >
                    <Image
                      src={organ.imageSrc}
                      alt={`Logotipo ${organ.title}`}
                      width={64}
                      height={64}
                      className="size-16 object-contain"
                    />

                    <p className="mt-6 text-sm font-semibold text-primary">
                      {organ.scope}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">{organ.title}</h3>

                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      {organ.description}
                    </p>
                </SpotlightCard>
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
