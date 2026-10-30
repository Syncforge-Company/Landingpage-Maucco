import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { InstagramIcon } from "../../../public/assets/instagram-icon";
import { WhatsappIcon } from "../../../public/assets/whatsapp-icon";
import { Separator } from "@/components/ui/separator";
import { company, createWhatsappUrl } from "@/constants/company";
import { navigation } from "@/constants/navigation";
import { photos } from "@/constants/photos";
import { getServiceHref, services } from "@/constants/services";

export function Footer() {
  const whatsappUrl = createWhatsappUrl(
    "Olá! Preciso de orientação sobre uma questão ambiental da minha empresa. Podem me ajudar?",
  );

  return (
    <footer className="bg-brand-ink px-5 pt-14 pb-24 text-white sm:px-6 md:pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1fr]">
          <div>
            <div className="inline-flex rounded-lg bg-white p-3">
              <Image
                src="/logo-maucco.jpg"
                alt={company.fullName}
                width={938}
                height={306}
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Ajudamos empresas com licenças, documentos e outras exigências
              ambientais, com orientação e acompanhamento em cada etapa.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Serviços</h2>

            <nav
              aria-label="Serviços"
              className="mt-5 flex flex-col gap-3 text-sm text-white/70"
            >
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={getServiceHref(service)}
                  className="hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-semibold">Navegação</h2>

            <nav
              aria-label="Rodapé"
              className="mt-5 flex flex-col gap-3 text-sm text-white/70"
            >
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-semibold">Contato</h2>

            <div className="mt-5 space-y-4 text-sm text-white/70">
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
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <InstagramIcon className="size-4" />
                {company.instagram}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 text-xs leading-5 text-white/60 lg:flex-row lg:items-end lg:justify-between">
          <p>
            © {new Date().getFullYear()} Maucco. Todos os direitos reservados.
          </p>

          <p className="max-w-2xl lg:text-right">
            <span className="block">
              Fotos:{" "}
              {Object.values(photos).map((photo, index) => (
                <span key={photo.src}>
                  {index > 0 && ", "}
                  <a
                    href={photo.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/25 underline-offset-4 hover:text-white"
                  >
                    {photo.caption}
                  </a>{" "}
                  ({photo.author}, {photo.license})
                </span>
              ))}
              . Imagens redimensionadas e recortadas.
            </span>
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
