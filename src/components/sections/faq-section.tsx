import { FaqAccordion } from "@/components/shared/faq-accordion";
import { frequentlyAskedQuestions } from "@/constants/faq";

export function FaqSection() {
  return (
    <section
      id="duvidas"
      className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">
            Perguntas frequentes sobre consultoria ambiental
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Não encontrou o que precisava? Fale com a gente e ajudaremos você a
            entender o primeiro passo.
          </p>
        </div>

        <FaqAccordion items={frequentlyAskedQuestions} />
      </div>
    </section>
  );
}
