export const photos = {
  encontroDasAguas: {
    src: "/amazonas/encontro-das-aguas.jpg",
    alt: "Vista aérea do Encontro das Águas dos rios Negro e Solimões, em Manaus, no Amazonas",
    caption: "Encontro das Águas",
    author: "Immelman284",
    license: "CC BY-SA 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Meeting_of_waters_from_the_air_manaus_brazil.JPG",
  },
  anavilhanas: {
    src: "/amazonas/anavilhanas.jpg",
    alt: "Floresta às margens do Rio Negro no Parque Nacional de Anavilhanas, no Amazonas",
    caption: "Anavilhanas",
    author: "Karen Mohrstedt Badin",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Arquip%C3%A9lago_de_Anavilhanas_12.jpg",
  },
  ponteRioNegro: {
    src: "/amazonas/ponte-rio-negro.jpg",
    alt: "Ponte Rio Negro sobre as águas do rio, em Manaus, no Amazonas",
    caption: "Ponte Rio Negro",
    author: "Ivo Brasil",
    license: "CC0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Rio_Negro_Bridge,_Brazil.jpg",
  },
} as const;

export type Photo = (typeof photos)[keyof typeof photos];
