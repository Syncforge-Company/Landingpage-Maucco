import { PhotoBackdrop } from "@/components/shared/photo-backdrop";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import BlurText from "@/components/ui/blur-text";
import { photos } from "@/constants/photos";

export function FinalCtaSection() {
  return (
    <section className="px-5 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-lg bg-brand-deep px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-24">
        <PhotoBackdrop
          photo={photos.ponteRioNegro}
          overlayClassName="bg-linear-to-r from-brand-deep via-brand-deep/90 to-brand-deep/45"
        />

        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          <BlurText
            text="Ficou com alguma dúvida? Converse com a gente pelo WhatsApp."
            delay={60}
            blur={6}
            distance={14}
            direction="bottom"
          />
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
          Conte o que sua empresa precisa. Vamos ajudar você a entender o
          primeiro passo.
        </p>

        <WhatsappButton size="lg" tone="leaf" className="mt-8" />
      </div>
    </section>
  );
}
