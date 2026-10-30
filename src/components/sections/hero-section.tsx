import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { PhotoBackdrop } from "@/components/shared/photo-backdrop";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { organs } from "@/constants/organs";
import { photos } from "@/constants/photos";
import { searchIntents } from "@/constants/services";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep px-5 py-14 text-white sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <PhotoBackdrop
        photo={photos.encontroDasAguas}
        priority
        imageClassName="object-[30%_100%]"
        overlayClassName="bg-linear-to-b from-brand-deep/90 via-brand-deep/80 to-brand-deep/55 lg:bg-linear-to-r lg:from-brand-deep/95 lg:via-brand-deep/75 lg:to-brand-deep/15"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
        <div>
          <h1 className="text-4xl leading-[1.1] font-bold text-balance sm:text-5xl">
            Consultoria ambiental em Manaus: evite multas e regularize sua
            empresa sem complicação
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            Cuidamos da parte técnica, elaborando estudos, laudos e outras
            obrigações da sua licença ambiental, para que sua empresa possa
            operar com segurança.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappButton size="lg" tone="leaf" />

            <Button
              nativeButton={false}
              render={<Link href="/#servicos" />}
              size="lg"
              variant="outline"
              className="h-12 border-white/25 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Principais serviços
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative rounded-lg bg-card p-6 text-card-foreground shadow-2xl shadow-black/30 sm:p-8">
          <BorderBeam
            size={140}
            duration={12}
            borderWidth={2}
            colorFrom="var(--brand-leaf)"
            colorTo="var(--brand-mint)"
          />

          <h2 className="text-2xl leading-tight font-bold">
            O que sua empresa precisa resolver?
          </h2>

          <ul className="mt-5 border-t-2 border-foreground">
            {searchIntents.map((intent) => (
              <li key={intent.label} className="border-b">
                <Link
                  href={`/servicos/${intent.slug}`}
                  className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-primary"
                >
                  <span>
                    <span className="block text-base leading-6 font-semibold">
                      {intent.label}
                    </span>
                    <span className="block text-sm leading-6 text-muted-foreground">
                      {intent.detail}
                    </span>
                  </span>

                  <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Processos nos órgãos ambientais
            </p>

            <ul className="flex items-center gap-3">
              {organs.map((organ) => (
                <li key={organ.title}>
                  <Image
                    src={organ.imageSrc}
                    alt={`Logotipo ${organ.title}`}
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
