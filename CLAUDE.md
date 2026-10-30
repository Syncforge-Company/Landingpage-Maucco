# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

As regras do projeto (objetivo de conversão, design, tipografia, SEO e convenções) estão em `AGENTS.md`, importado abaixo. Esta seção cobre apenas o que não está lá ou o que difere do código atual.

@AGENTS.md

---

# Notas para o Claude Code

## Comandos

- Gerenciador de pacotes: **pnpm**. Se `pnpm run` parar com `ERR_PNPM_IGNORED_BUILDS`, execute `pnpm approve-builds` (scripts de `sharp` e `unrs-resolver`) ou chame os binários em `node_modules/.bin`.
- Lockfile: `pnpm-lock.yaml` é o lockfile atualizado; `package-lock.json` está defasado e os comandos `npm` do README não refletem isso.
- Validar tipos sem build: `pnpm exec tsc --noEmit`.
- Não há framework nem script de testes. A validação é `pnpm run lint` e `pnpm run build`; mudanças visuais precisam ser conferidas no navegador com `pnpm run dev`.
- Em desenvolvimento via ngrok, o hostname atual fica em `allowedDevOrigins` no `next.config.ts`. Atualize o valor exato e reinicie o servidor; não libere `*.ngrok-free.dev`.

## Estado atual vs. AGENTS.md

- O exemplo de `page.tsx` em `AGENTS.md` é ilustrativo. As seções reais são Hero, KeywordsMarquee, Services, Problems (órgãos ambientais), Amazonas, Process, Faq e FinalCta, além de Header, Footer e WhatsappFloatingButton. Authority, Benefits e FeaturedService não existem.
- `src/constants/` contém `company.ts`, `services.ts`, `faq.ts`, `navigation.ts`, `organs.ts` e `photos.ts`. Parte da copy ainda está dentro das sections (por exemplo, as etapas de `process-section.tsx` e as mensagens de WhatsApp).
- `src/hooks/`, `src/types/` e `src/assets/` não existem. Imagens ficam em `public/`.
- Exceção à regra de alias: os ícones `WhatsappIcon` e `InstagramIcon` são componentes TSX em `public/assets/`, fora de `src/`, e por isso usam import relativo (`../../../public/assets/...`).
- Cores da marca são tokens `brand-*` em `globals.css` (`bg-brand-deep`, `text-brand-mint` etc.). A única exceção a HEX é `opengraph-image.tsx`, que usa estilos inline, sem Tailwind.
- O site é somente tema claro: `.dark` existe em `globals.css`, mas nenhum `ThemeProvider` é montado.
- `components/ui/carousel.tsx` e `components/ui/sonner.tsx` não são usados pela página. Não presuma que toasts ou carrossel já funcionam.

## Arquitetura

- **Fonte dos dados da empresa e do SEO:** `src/constants/company.ts` alimenta `src/lib/site.ts` (`siteConfig`), que alimenta `metadata` em `layout.tsx`, `src/lib/structured-data.ts` (JSON-LD), `manifest.ts`, `robots.ts`, `sitemap.ts` e `/llms.txt`.
- **`services.ts` gera várias superfícies:** a seção de serviços, a ficha do hero (`searchIntents`), as páginas estáticas `/servicos/[slug]`, o sitemap, o JSON-LD e o `/llms.txt`. Para criar um serviço, adicione uma entrada; alterar um `slug` muda uma URL indexada e exige redirect.
- **`siteConfig.url`** usa `NEXT_PUBLIC_SITE_URL` e, sem ela, `https://maucco.com.br`. Canonical, Open Graph, sitemap e JSON-LD dependem desse valor.
- **`/llm.txt`** é um rewrite para `/llms.txt` em `next.config.ts`.
- **Funil de CTA:** todo contato passa por `createWhatsappUrl(message)` em `company.ts`. Use `WhatsappButton` (`components/shared/`) e passe `message` e `label` específicos do contexto da seção; a mensagem pré-preenchida faz parte da conversão.
- **Client boundary:** nas sections, apenas `header.tsx` usa `"use client"`. Os demais trechos interativos ficam em componentes de `components/ui/`, envolvendo conteúdo renderizado no servidor.
- **Motion:** `MotionProvider` (`layout.tsx`) aplica `reducedMotion="user"`. Use `BlurFade` só abaixo da dobra; nunca anime o H1 nem o hero, para não prejudicar o LCP. `BlurText` fica restrito ao CTA final.
- **Componentes de terceiros em `components/ui/`:** `bento-grid`, `border-beam`, `blur-fade` e `marquee` vêm do Magic UI (MIT). `spotlight-card` e `blur-text` vêm do React Bits (MIT + Commons Clause), adaptados; mantenha o aviso de copyright no topo.
- **Fotos:** toda foto nova entra em `src/constants/photos.ts` com autor, licença e origem, porque o rodapé gera os créditos a partir dali. CC BY-SA exige esse crédito.
- **shadcn:** o estilo é `base-nova`, sobre Base UI e não Radix. Composição usa a prop `render` (com `nativeButton={false}` para links), não `asChild`.
- **Serviços:** `BentoGrid` é Server Component e só usa CSS. As fotos e os tamanhos dos cards ficam em `cardLayouts`, em `services-section.tsx`; no desktop, a grade de 4 colunas depende da ordem de `services.ts`.
- **FAQ:** `FaqAccordion` (`components/shared/`) usa Motion e abre uma pergunta por vez. As respostas fechadas continuam no HTML indexável, com `inert` para ficarem fora do teclado e dos leitores de tela.
- **Logos:** `logo-maucco.jpg` (na verdade PNG 938x306) é usada no Header e no Footer; `logo-maucco2.png` nos ícones, manifest, Open Graph e JSON-LD. O arquivo de verificação do Google servido é o de `public/`.
