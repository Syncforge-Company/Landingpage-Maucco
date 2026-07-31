import { company } from "@/constants/company";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const normalizedUrl = configuredUrl.startsWith("http")
  ? configuredUrl
  : `https://${configuredUrl}`;

export const siteConfig = {
  name: company.fullName,
  shortName: company.name,
  title: "Maucco | Consultoria e Assessoria Ambiental em Manaus",
  description:
    "Consultoria ambiental em Manaus para licenciamento, gestão de resíduos, PGRS, laudos técnicos, ESG e regularização da sua empresa.",
  url: new URL(normalizedUrl).origin,
  locale: "pt_BR",
  keywords: [
    "consultoria ambiental",
    "assessoria ambiental",
    "consultoria ambiental em Manaus",
    "licenciamento ambiental",
    "gestão de resíduos",
    "PGRS",
    "PGRSS",
    "laudos ambientais",
    "regularização ambiental",
    "consultoria ESG",
    "segurança do trabalho",
    "consultoria ambiental Amazonas",
  ],
} as const;
