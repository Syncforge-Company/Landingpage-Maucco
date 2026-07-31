import { WhatsappIcon } from "../../../public/assets/whatsapp-icon";
import { createWhatsappUrl } from "@/constants/company";

export function WhatsappFloatingButton() {
  const whatsappUrl = createWhatsappUrl(
    "Olá! Preciso de ajuda com uma questão ambiental da minha empresa. Podem me orientar?",
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Maucco pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <WhatsappIcon className="size-6" />
    </a>
  );
}
