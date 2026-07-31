import { ArrowRight } from "lucide-react";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createWhatsappUrl } from "@/constants/company";
import { services } from "@/constants/services";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 bg-muted/50 px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Badge variant="secondary">Como podemos ajudar</Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Tudo o que sua empresa precisa para ficar em dia.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Identificamos pendências, preparamos os documentos e acompanhamos
              os processos ambientais da sua empresa.
            </p>
          </div>

          <WhatsappButton
            variant="outline"
            label="Fale com a gente"
            message="Olá! Quero entender qual serviço ambiental minha empresa precisa. Podem me orientar?"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.title}
                delay={(index % 4) * 0.06}
                className="h-full"
              >
                <Card className="group h-full rounded-2xl border-border/70 bg-card shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <CardContent className="p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <a
                    href={createWhatsappUrl(
                      `Olá! Quero saber mais sobre ${service.title}. Podem me orientar?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Falar sobre este serviço
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
