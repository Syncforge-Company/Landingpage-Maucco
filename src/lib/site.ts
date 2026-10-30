import { company } from "@/constants/company";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maucco.com.br";

const normalizedUrl = configuredUrl.startsWith("http")
  ? configuredUrl
  : `https://${configuredUrl}`;

export const siteConfig = {
  name: company.fullName,
  shortName: company.name,
  title: "Consultoria Ambiental em Manaus | Maucco",
  description:
    "Consultoria ambiental em Manaus e no Amazonas: licenciamento, renovação de L.O., PGRS, outorga de poço, laudos e notificações do IPAAM e da SEMMAS.",
  url: new URL(normalizedUrl).origin,
  ogImage: `${new URL(normalizedUrl).origin}/opengraph-image`,
  locale: "pt_BR",
  keywords: [
    "Licença ambiental",
    "Renovação de licença ambiental",
    "Renovação L.O",
    "Notificação IPAAM",
    "Notificação SEMMAS",
    "PGRS",
    "PGRSS",
    "Outorga de poço",
    "Outorga de ETE",
    "Plano de gerenciamento de resíduos",
    "Relatório do PGRS",
    "Consultoria ambiental manaus",
    "Assessoria ambiental manaus",
    "IPAAM",
    "SEMMAS",
    "IBAMA",
    "MTR",
    "SINIR",
    "consultoria ambiental",
    "assessoria ambiental",
    "licenciamento ambiental",
    "gestão de resíduos",
    "laudos ambientais",
    "regularização ambiental",
    "consultoria ESG",
    "segurança do trabalho",
    "consultoria ambiental Amazonas",
  ],
} as const;
