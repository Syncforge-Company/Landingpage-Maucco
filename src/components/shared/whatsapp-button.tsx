import type { ComponentProps } from "react";

import { WhatsappIcon } from "../../../public/assets/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { createWhatsappUrl } from "@/constants/company";
import { cn } from "@/lib/utils";

type WhatsappButtonProps = ComponentProps<typeof Button> & {
  message?: string;
  label?: string;
};

export function WhatsappButton({
  message = "Olá! Preciso de ajuda com uma questão ambiental da minha empresa. Podem me orientar?",
  label = "Fale com a gente",
  className,
  ...props
}: WhatsappButtonProps) {
  const whatsappUrl = createWhatsappUrl(message);

  return (
    <Button
      {...props}
      nativeButton={false}
      render={
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />
      }
      className={cn("gap-2", className)}
    >
      <WhatsappIcon className="size-4" />
      {label}
    </Button>
  );
}
