import type { ComponentProps } from "react";

import { WhatsappIcon } from "../../../public/assets/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { createWhatsappUrl, primaryCtaLabel } from "@/constants/company";
import { cn } from "@/lib/utils";

type WhatsappButtonProps = ComponentProps<typeof Button> & {
  message?: string;
  label?: string;
  tone?: "default" | "leaf";
};

export function WhatsappButton({
  message = "Olá! Preciso de ajuda com uma questão ambiental da minha empresa. Podem me orientar?",
  label = primaryCtaLabel,
  tone = "default",
  size,
  className,
  ...props
}: WhatsappButtonProps) {
  const whatsappUrl = createWhatsappUrl(message);

  return (
    <Button
      {...props}
      size={size}
      nativeButton={false}
      render={
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />
      }
      className={cn(
        "gap-2",
        size === "lg" && "h-12 px-6 text-base",
        tone === "leaf" &&
          "bg-brand-leaf font-semibold text-brand-ink hover:bg-brand-mint",
        className,
      )}
    >
      <WhatsappIcon className="size-4" />
      {label}
    </Button>
  );
}
