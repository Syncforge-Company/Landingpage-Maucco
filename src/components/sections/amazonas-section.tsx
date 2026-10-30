import Image from "next/image";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { photos } from "@/constants/photos";

export function AmazonasSection() {
  return (
    <section className="px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <BlurFade inView direction="up" offset={12}>
          <figure>
            <Image
              src={photos.anavilhanas.src}
              alt={photos.anavilhanas.alt}
              width={1600}
              height={1067}
              quality={70}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />

            <figcaption className="mt-3 text-sm text-muted-foreground">
              Rio Negro, em {photos.anavilhanas.caption}
            </figcaption>
          </figure>
        </BlurFade>

        <div>
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">
            Sua empresa opera no Amazonas. Nosso trabalho também.
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Em Manaus e no Amazonas, muitas atividades estão perto de rios,
            igarapés e floresta. Regularizar sua empresa protege o negócio e o
            lugar onde ele funciona.
          </p>

          <WhatsappButton
            size="lg"
            className="mt-8 w-full sm:w-auto"
            message="Olá! Minha empresa fica no Amazonas e preciso de orientação ambiental. Podem me ajudar?"
          />
        </div>
      </div>
    </section>
  );
}
