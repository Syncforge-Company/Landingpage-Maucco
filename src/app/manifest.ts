import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7faf6",
    theme_color: "#0d3028",
    lang: "pt-BR",
    icons: [
      {
        src: "/logo-maucco.jpg",
        sizes: "150x150",
        type: "image/jpeg",
      },
    ],
  };
}
