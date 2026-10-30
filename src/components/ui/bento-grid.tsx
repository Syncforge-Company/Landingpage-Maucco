// Adaptado de Magic UI (https://magicui.design). Licença MIT, Copyright (c) Magic UI.
import type { ComponentPropsWithoutRef, ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Photo } from "@/constants/photos";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  name: string;
  description: string;
  href: string;
  cta: string;
  Icon: ElementType;
  photo?: Photo;
  featured?: boolean;
  className?: string;
};

export function BentoGrid({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("grid gap-4", className)} {...props} />;
}

export function BentoCard({
  name,
  description,
  href,
  cta,
  Icon,
  photo,
  featured = false,
  className,
}: BentoCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex min-h-52 flex-col justify-end overflow-hidden rounded-lg border p-6 transition-colors duration-300",
        photo
          ? "min-h-64 border-transparent bg-brand-deep text-white"
          : "bg-card hover:border-primary/50",
        className,
      )}
    >
      {photo && (
        <>
          <Image
            src={photo.src}
            alt=""
            fill
            quality={70}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="-z-20 object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
          <div
            className={cn(
              "absolute inset-0 -z-10 bg-linear-to-t from-brand-deep via-brand-deep/85 to-brand-deep/45",
              featured && "lg:via-brand-deep/60 lg:to-brand-deep/10",
            )}
          />
        </>
      )}

      <div className="transition-transform duration-300 ease-out motion-reduce:transition-none lg:group-hover:-translate-y-7 lg:group-focus-visible:-translate-y-7">
        <Icon
          className={cn(
            "mb-4 size-7",
            photo ? "text-brand-mint" : "text-primary",
          )}
        />

        <h3
          className={cn(
            "font-semibold",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {name}
        </h3>

        <p
          className={cn(
            "mt-2 max-w-lg text-base leading-7",
            photo ? "text-white/85" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </div>

      <span
        className={cn(
          "mt-3 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ease-out motion-reduce:transition-none lg:absolute lg:bottom-5 lg:mt-0 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100",
          photo ? "text-brand-mint" : "text-primary",
        )}
      >
        {cta}
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
