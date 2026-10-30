import { company } from "@/constants/company";
import { frequentlyAskedQuestions } from "@/constants/faq";
import { organs } from "@/constants/organs";
import { getServiceHref, services } from "@/constants/services";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${company.fullName}`,
    `> ${siteConfig.description}`,
    "A Maucco atende empresas em Manaus e no Amazonas que precisam obter licenças, responder a exigências de órgãos ambientais e manter documentos ambientais em dia. O atendimento começa pelo WhatsApp.",
    "## Serviços",
    services
      .map(
        (service) =>
          `- [${service.seoTitle}](${siteConfig.url}${getServiceHref(service)}): ${service.description}`,
      )
      .join("\n"),
    "## Órgãos ambientais em que atua",
    organs
      .map((organ) => `- ${organ.title} (${organ.scope.toLowerCase()})`)
      .join("\n"),
    "## Perguntas frequentes",
    frequentlyAskedQuestions
      .map((faq) => `- ${faq.question} ${faq.answer}`)
      .join("\n"),
    "## Contato",
    [
      `- Site: ${siteConfig.url}`,
      `- WhatsApp: ${company.phoneLabel}`,
      `- E-mail: ${company.email}`,
      `- Instagram: ${company.instagramUrl}`,
      `- Localização: ${company.address}`,
    ].join("\n"),
  ].join("\n\n");

  return new Response(`${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
