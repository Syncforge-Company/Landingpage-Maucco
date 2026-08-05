import {
  ClipboardCheck,
  FileCheck2,
  Files,
  GraduationCap,
  Leaf,
  Recycle,
  ShieldCheck,
  Waves,
} from "lucide-react";

export const services = [
  {
    title: "Licenciamento ambiental",
    description:
      "Cuidamos dos pedidos e das renovações de licenças e acompanhamos o processo nos órgãos ambientais.",
    icon: FileCheck2,
  },
  {
    title: "Gestão de resíduos",
    description:
      "Planejamos como os resíduos devem ser coletados, armazenados, transportados e destinados.",
    icon: Recycle,
  },
  {
    title: "Planos de resíduos (PGRS e PGRSS)",
    description:
      "Elaboramos o plano de gerenciamento adequado à empresa ou ao serviço de saúde.",
    icon: ClipboardCheck,
  },
  {
    title: "Laudos técnicos",
    description:
      "Preparamos laudos e documentos exigidos para regularizar as atividades da empresa.",
    icon: Files,
  },
  {
    title: "Uso da água, poços e efluentes",
    description:
      "Apoiamos a regularização do uso da água, de poços e do lançamento de efluentes.",
    icon: Waves,
  },
  {
    title: "Treinamentos",
    description:
      "Preparamos sua equipe para cumprir as exigências e adotar boas práticas ambientais.",
    icon: GraduationCap,
  },
  {
    title: "Práticas ESG",
    description:
      "Ajudamos a aplicar práticas ambientais, sociais e de governança no dia a dia.",
    icon: Leaf,
  },
  {
    title: "Elaboração de projetos",
    description:
      "Apoiamos a elaboração de projetos ambientais, como recuperação de áreas degradadas.",
    icon: ShieldCheck,
  },
] as const;
