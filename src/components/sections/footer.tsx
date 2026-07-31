import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { InstagramIcon } from "../../../public/assets/instagram-icon";
import { WhatsappIcon } from "../../../public/assets/whatsapp-icon";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Separator } from "@/components/ui/separator";
import { company, createWhatsappUrl } from "@/constants/company";

export function Footer() {
  const whatsappUrl = createWhatsappUrl(
    "Olá! Preciso de orientação sobre uma questão ambiental da minha empresa. Podem me ajudar?",
  );

  return (
    <footer className="bg-[#09251f] px-5 pt-14 pb-24 text-white sm:px-6 md:pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="inline-flex overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-white/10">
              <Image
                src="/logo.png"
                alt={company.fullName}
                width={150}
                height={150}
                className="size-24 object-contain"
              />
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              Ajudamos empresas com licenças, documentos e outras exigências
              ambientais, com orientação e acompanhamento em cada etapa.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="font-semibold">Navegação</h2>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link href="#servicos" className="hover:text-white">
                Serviços
              </Link>

              <Link href="#beneficios" className="hover:text-white">
                Benefícios
              </Link>

              <Link href="#processo" className="hover:text-white">
                Como funciona
              </Link>

              <Link href="#duvidas" className="hover:text-white">
                Perguntas frequentes
              </Link>
            </nav>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <h2 className="font-semibold">Contato</h2>

            <div className="mt-5 space-y-4 text-sm text-white/60">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <WhatsappIcon className="size-4" />
                {company.phoneLabel}
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="size-4" />
                {company.email}
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="size-4" />
                {company.address}
              </div>

              <a
                href="https://instagram.com/mauccobr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <InstagramIcon className="size-4" />
                {company.instagram}
              </a>
            </div>
          </ScrollReveal>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 text-xs leading-5 text-white/45 lg:flex-row lg:items-end lg:justify-between">
          <p>
            © {new Date().getFullYear()} Maucco. Todos os direitos reservados.
          </p>

          <p className="max-w-2xl lg:text-right">
            <span className="block">
              Site desenvolvido pela{" "}
              <a
                href="https://syncforge-business.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
              >
                SyncForge
              </a>
              .
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
