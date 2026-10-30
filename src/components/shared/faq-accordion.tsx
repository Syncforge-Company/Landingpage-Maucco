"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: readonly {
    readonly question: string;
    readonly answer: string;
  }[];
};

const transition = { duration: 0.32, ease: [0.22, 1, 0.36, 1] } as const;

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="border-t">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${id}-button-${index}`;
        const panelId = `${id}-panel-${index}`;

        return (
          <div key={item.question} className="relative border-b">
            {isOpen && (
              <motion.span
                layoutId={`${id}-indicator`}
                transition={transition}
                className="absolute inset-y-0 left-0 w-0.5 bg-primary"
              />
            )}

            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-5 pl-5 text-left text-lg font-semibold transition-colors outline-none hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50",
                  isOpen && "text-primary",
                )}
              >
                {item.question}

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={transition}
                  className="shrink-0"
                >
                  <Plus className="size-5" />
                </motion.span>
              </button>
            </h3>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0 }}
              transition={transition}
              className="overflow-hidden"
            >
              <motion.p
                initial={false}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -6 }}
                transition={transition}
                className="pr-9 pb-5 pl-5 text-base leading-7 text-muted-foreground"
              >
                {item.answer}
              </motion.p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
