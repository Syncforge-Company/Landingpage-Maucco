import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Recycle,
  ShieldCheck,
} from "lucide-react";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    label: "Licenciamento ambiental",
    icon: FileCheck2,
  },
  {
    label: "Gestão de resíduos",
    icon: Recycle,
  },
  {
    label: "Exigências em dia",
    icon: ShieldCheck,
  },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d3028] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,201,88,0.25),transparent_38%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <ScrollReveal>
          <Badge className="mb-6 border-white/15 bg-white/10 text-white hover:bg-white/10">
            Consultoria ambiental para empresas
          </Badge>

          <h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Mantenha sua empresa em dia com as exigências ambientais, sem
            complicação.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Cuidamos de licenças, resíduos, laudos e outras obrigações
            ambientais para sua empresa seguir em frente com segurança.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappButton
              size="lg"
              label="Entre em contato"
              className="bg-[#5abd55] text-white hover:bg-[#4ca849]"
            />

            <Button
              nativeButton={false}
              render={<Link href="#servicos" />}
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              Conheça nossos serviços
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="size-4 text-[#74cf68]" />
                  </div>

                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.12} className="relative">
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl">
            <ImagePlaceholder
              label="Maucco Consultoria Ambiental"
              variant="dark"
              className="aspect-[4/4.6] w-full rounded-3xl pb-24"
            />

            <div className="absolute right-7 bottom-7 left-7 rounded-2xl border border-white/15 bg-[#0b2d26]/90 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#74cf68]" />

                <div>
                  <p className="font-semibold">
                    Orientação para sua empresa
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Entendemos sua realidade e mostramos o que precisa ser
                    feito em cada etapa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
