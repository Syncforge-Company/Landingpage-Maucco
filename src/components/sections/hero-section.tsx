import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
            Evite multas ambientais, regularize sua empresa sem complicação
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Cuidamos da parte técnica elaborando estudos, laudos e outras obrigações da sua licença ambiental para que sua empresa possa operar com segurança
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappButton
              size="lg"
              label="Agente uma consulta gratuita"
              className="bg-[#5abd55] text-white hover:bg-[#4ca849]"
            />

            <Button
              nativeButton={false}
              render={<Link href="#servicos" />}
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              Principais serviços
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.12} className="relative">
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl">
            <ImagePlaceholder
              label="Maucco Consultoria Ambiental"
              variant="dark"
              className="aspect-square w-full rounded-3xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
