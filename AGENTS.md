# AGENTS.md

## Visão Geral

Este repositório contém a landing page comercial da **Maucco Consultoria e Assessoria Ambiental**.

O objetivo da aplicação é funcionar como um **funil de vendas**, apresentando os serviços da empresa e conduzindo visitantes qualificados para entrar em contato via WhatsApp.

**Produção**

https://maucco.com.br/

**Repositório**

https://github.com/Syncforge-Company/Landingpage-Maucco

---

# Objetivo

Toda alteração deve aumentar a capacidade da página de converter visitantes em clientes.

A landing page deve:

- apresentar rapidamente a empresa;
- mostrar os principais serviços;
- gerar autoridade;
- remover objeções;
- incentivar o contato.

Evite transformar o projeto em um site institucional.

Não criar páginas sobre:

- história da empresa;
- fundador;
- equipe;
- missão extensa;
- textos corporativos desnecessários.

Tudo deve levar o usuário até o CTA.

---

# Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Motion
- Base UI
- Sonner
- Next Themes

---

# Scripts

Instalar dependências

```bash
pnpm install
```

Rodar desenvolvimento

```bash
pnpm run dev
```

Lint

```bash
pnpm run lint
```

Build

```bash
pnpm run build
```

Produção

```bash
pnpm run start
```

Sempre execute antes de finalizar uma tarefa:

```bash
pnpm run lint
pnpm run build
```

Não considere uma tarefa concluída se houver erros de TypeScript, ESLint ou Build.

---

# Estrutura do Projeto

```
src/
│
├── app/
│
├── components/
│   ├── sections/
│   ├── shared/
│   └── ui/
│
├── constants/
│
├── hooks/
│
├── lib/
│
├── assets/
│
└── types/
```

---

# Organização

## app

Responsável apenas pela composição da aplicação.

`page.tsx` deve permanecer simples.

Exemplo:

```tsx
<>
    <Header />

    <main>
        <HeroSection />
        <AuthoritySection />
        <ProblemsSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <FeaturedServiceSection />
        <FaqSection />
        <FinalCtaSection />
    </main>

    <Footer />
    <WhatsappFloatingButton />
</>
```

Não colocar lógica de negócio dentro das páginas.

---

## components/sections

Cada arquivo representa uma seção inteira da landing page.

Exemplos:

```
hero-section.tsx

services-section.tsx

faq-section.tsx

benefits-section.tsx

footer.tsx
```

As sections nunca devem depender umas das outras.

---

## components/shared

Componentes reutilizáveis.

Exemplos:

- CTA
- Cards
- Títulos
- Botão WhatsApp
- Badge
- Container
- Section Heading
- Background Pattern

---

## components/ui

Componentes instalados pelo shadcn/ui.

Nunca modificar esses arquivos sem necessidade.

Caso seja necessário personalizar um Button ou Card, criar composição.

---

## constants

Toda informação textual deve ficar centralizada.

Exemplo:

```
company.ts

services.ts

faq.ts

benefits.ts

numbers.ts

contact.ts
```

Nunca repetir:

- telefone
- email
- endereço
- serviços
- links

em vários componentes.

---

## hooks

Hooks reutilizáveis.

---

## lib

Helpers.

Funções utilitárias.

Configurações.

---

# Alias

Sempre utilizar:

```tsx
import { Button } from "@/components/ui/button";
```

Nunca:

```tsx
import { Button } from "../../../components/ui/button";
```

---

# Componentes

Componentes reutilizáveis:

```tsx
export function HeroSection() {}
```

Páginas:

```tsx
export default function Home() {}
```

Não utilizar arrow function para declarar componentes.

Arrow functions apenas para:

- callbacks
- handlers
- funções auxiliares

---

# Server Components

Utilizar Server Components sempre que possível.

Adicionar:

```tsx
"use client";
```

somente quando necessário.

Evitar transformar uma section inteira em Client Component.

Prefira isolar apenas o componente interativo.

---

# Design

A landing segue a identidade visual da Maucco.

Referências:

- Instagram da empresa
- Logo oficial
- Paleta institucional

A aparência deve transmitir:

- segurança
- confiança
- profissionalismo
- organização
- tecnologia aplicada ao meio ambiente

Evitar aparência infantil ou excessivamente ecológica.

---

# Direção Visual

Priorizar:

- bastante espaço em branco;
- tipografia grande;
- títulos fortes;
- fotografias reais;
- ícones discretos;
- cards limpos;
- bordas suaves;
- layouts modernos.

Evitar:

- excesso de folhas;
- excesso de ilustrações;
- gradientes exagerados;
- muito blur;
- animações excessivas;
- poluição visual.

---

# Cores

Sempre utilizar os tokens do Tailwind.

Exemplo:

```tsx
bg-background

bg-card

bg-primary

text-primary

text-muted-foreground

border-border
```

Evitar utilizar HEX diretamente nos componentes.

---

# Tipografia

Hierarquia:

Hero

```
text-5xl
text-6xl
```

Títulos

```
text-4xl
```

Subtítulos

```
text-xl
```

Texto

```
text-base
```

Legendas

```
text-sm
```

---

# Responsividade

A página precisa funcionar perfeitamente em:

- Desktop
- Notebook
- Tablet
- Mobile

Sempre desenvolver utilizando Mobile First.

Utilizar:

```tsx
sm:

md:

lg:

xl:
```

Evitar larguras fixas.

---

# SEO

Toda nova seção deve considerar SEO.

Utilizar corretamente:

- h1
- h2
- h3

Adicionar textos relevantes para:

- Consultoria Ambiental
- Licenciamento Ambiental
- ESG
- PGRS
- Manaus
- Amazonas
- Estudos Ambientais
- Engenharia Ambiental

---

# Performance

Priorizar:

- Server Components
- next/image
- lazy loading
- pouco JavaScript
- poucas dependências

Evitar bibliotecas desnecessárias.

---

# Motion

Animações devem ser discretas.

Priorizar:

- fade
- slide
- reveal
- opacity

Evitar animações chamativas.

---

# Botões

Sempre possuir CTA claro.

Exemplos:

- Solicitar orçamento
- Falar com um especialista
- Entrar em contato
- Solicitar diagnóstico
- Conversar pelo WhatsApp

---

# Código

Sempre priorizar:

- legibilidade
- componentização
- reutilização
- simplicidade

Evitar duplicação.

Sempre que identificar repetição, criar um componente reutilizável.

---

# Objetivo Final

Toda decisão de desenvolvimento deve responder à pergunta:

> "Essa alteração aumenta a chance do visitante entrar em contato com a Maucco?"

Se a resposta for não, provavelmente essa alteração não pertence à landing page.