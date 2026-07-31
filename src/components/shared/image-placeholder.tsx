import Image from "next/image";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  className?: string;
  label: string;
  variant?: "light" | "dark";
};

export function ImagePlaceholder({
  className,
  label,
  variant = "light",
}: ImagePlaceholderProps) {
  const isDark = variant === "dark";

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden",
        isDark
          ? "bg-[#09251f] text-white"
          : "bg-[#e8f2ed] text-[#0d3028]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 opacity-70",
          isDark
            ? "bg-[radial-gradient(circle_at_25%_20%,rgba(116,207,104,0.26),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.08),transparent_30%)]"
            : "bg-[radial-gradient(circle_at_20%_20%,rgba(90,189,85,0.28),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(13,48,40,0.12),transparent_30%)]",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "absolute -top-24 -right-24 size-64 rounded-full border",
          isDark ? "border-white/10" : "border-[#0d3028]/10",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "absolute -bottom-20 -left-20 size-52 rounded-full border",
          isDark ? "border-white/10" : "border-[#0d3028]/10",
        )}
      />

      <div className="relative flex flex-col items-center gap-5 px-8 text-center">
        <div className="rounded-4xl bg-white p-4 shadow-2xl shadow-black/15 ring-1 ring-black/5">
          <Image
            src="/logo.png"
            alt=""
            width={150}
            height={150}
            className="size-28 object-contain sm:size-36"
          />
        </div>

        <p
          aria-hidden="true"
          className={cn(
            "text-xs font-semibold tracking-[0.22em] uppercase",
            isDark ? "text-white/55" : "text-[#0d3028]/55",
          )}
        >
          Consultoria ambiental
        </p>
      </div>
    </div>
  );
}
