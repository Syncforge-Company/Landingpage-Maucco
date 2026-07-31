"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Serviços",
    href: "#servicos",
  },
  {
    label: "Benefícios",
    href: "#beneficios",
  },
  {
    label: "Como funciona",
    href: "#processo",
  },
  {
    label: "Dúvidas",
    href: "#duvidas",
  },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Página inicial da Maucco"
          className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white"
        >
          <Image
            src="/logo.png"
            alt="Maucco Consultoria e Assessoria Ambiental"
            width={150}
            height={150}
            priority
            className="size-16 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsappButton label="Entre em contato" />
        </div>

        <Button
          variant="outline"
          size="icon"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={cn(
          "grid border-t bg-background transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0",
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Navegação mobile"
            className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-border/70 py-3 text-sm font-semibold tracking-wide uppercase transition-colors last:border-b-0 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <WhatsappButton
              label="Entre em contato"
              className="mt-4 w-full"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
