import { WhatsappIcon } from "../../../public/assets/whatsapp-icon";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function FinalCtaSection() {
  return (
    <section className="px-5 py-16 sm:px-6 md:py-20 lg:px-8">
      <ScrollReveal className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#0d3028] px-6 py-12 text-center text-white sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/10">
          <WhatsappIcon className="size-6 text-[#74cf68]" />
        </div>

        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Precisa de ajuda com alguma exigência ambiental?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Conte o que sua empresa precisa. Vamos ajudar você a entender o
          primeiro passo.
        </p>

        <WhatsappButton
          size="lg"
          label="Conversar pelo WhatsApp"
          className="mt-8 bg-[#5abd55] text-white hover:bg-[#4ca849]"
        />
      </ScrollReveal>
    </section>
  );
}
