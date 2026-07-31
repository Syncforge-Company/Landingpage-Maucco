import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { frequentlyAskedQuestions } from "@/constants/faq";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function FaqSection() {
  return (
    <section
      id="duvidas"
      className="scroll-mt-20 bg-muted/50 px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <ScrollReveal direction="left">
          <Badge variant="secondary">Perguntas frequentes</Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Encontre respostas para as dúvidas mais comuns.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Não encontrou o que precisava? Fale com a gente e ajudaremos você a
            entender o primeiro passo.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <Accordion className="w-full">
            {frequentlyAskedQuestions.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`question-${index + 1}`}
              >
                <AccordionTrigger className="text-left text-base">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
