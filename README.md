<div align="center">
  <img src="./public/logo-maucco.jpg" alt="Maucco Consultoria e Assessoria Ambiental" width="120" />

  # Maucco Consultoria Ambiental

  Landing page institucional para apresentar os serviços da Maucco e facilitar o primeiro contato de empresas que precisam de orientação ambiental.

  [![Next.js](https://img.shields.io/badge/Next.js-16-111111?logo=nextdotjs)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
</div>

## Sobre o projeto

O site reúne os serviços, benefícios, processo de atendimento e perguntas frequentes da Maucco em uma experiência responsiva e direta. Os principais pontos de contato levam o visitante ao WhatsApp com mensagens contextualizadas.

### Destaques

- Layout responsivo para desktop e dispositivos móveis.
- Navegação mobile expansível sem sobrepor o header.
- CTAs integrados ao WhatsApp.
- Animações acionadas conforme o conteúdo entra na viewport.
- Preferência de movimento reduzido respeitada pelo Motion.
- Componentes de fallback para áreas sem imagem disponível.
- Ícones locais para WhatsApp e Instagram.
- Conteúdo estruturado em constantes para facilitar manutenção.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | Framework e App Router |
| [React 19](https://react.dev/) | Interface e componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização responsiva |
| [Base UI](https://base-ui.com/) | Primitivos acessíveis |
| [shadcn](https://ui.shadcn.com/) | Componentes de interface |
| [Motion](https://motion.dev/) | Animações de entrada por scroll |
| [Lucide](https://lucide.dev/) | Ícones da interface |

## Como executar

### Requisitos

- Node.js 20.18 ou superior.
- npm 10 ou superior.

### Instalação

```bash
git clone <url-do-repositorio>
cd landingpage-maucco
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Produção

```bash
npm run build
npm run start
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build otimizado de produção |
| `npm run start` | Executa o build de produção |
| `npm run lint` | Analisa o código com ESLint |
| `npx tsc --noEmit` | Valida os tipos sem gerar arquivos |

## Estrutura

```text
src/
├── app/
│   ├── globals.css          # Tema, variáveis e estilos globais
│   ├── layout.tsx           # Layout e metadados
│   └── page.tsx             # Composição da landing page
├── components/
│   ├── sections/            # Seções da página
│   ├── shared/              # Componentes reutilizáveis
│   └── ui/                  # Componentes-base de interface
├── constants/               # Empresa, serviços e perguntas frequentes
└── lib/                     # Utilitários compartilhados

public/
├── assets/                  # Ícones sociais locais
└── logo-maucco.jpg          # Logo da Maucco
```

## Personalização

### Dados da empresa

Telefone, e-mail, Instagram e endereço ficam em:

```text
src/constants/company.ts
```

### Serviços e perguntas

```text
src/constants/services.ts
src/constants/faq.ts
```

### Identidade visual

As cores, fontes e variáveis globais ficam em `src/app/globals.css`. A logo principal fica em `public/logo-maucco.jpg`.

## Uso com ngrok

O Next.js bloqueia, por segurança, requisições de origens externas aos recursos de desenvolvimento e ao HMR. O domínio atual está liberado em `next.config.ts`:

```ts
const nextConfig = {
  allowedDevOrigins: ["chauncey-palaeobotanic-reatha.ngrok-free.dev"],
};
```

Quando o ngrok gerar outro subdomínio, atualize esse hostname e reinicie o servidor:

```bash
npm run dev
```

Evite liberar `*.ngrok-free.dev`, pois isso amplia desnecessariamente as origens autorizadas no ambiente de desenvolvimento.

## Qualidade

Antes de enviar alterações, execute:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Créditos

Projeto desenvolvido pela [SyncForge](https://syncforge-business.vercel.app/) para a **Maucco Consultoria e Assessoria Ambiental**.

© 2026 Maucco. Todos os direitos reservados.

© 2026 SyncForge. Todos os direitos reservados. CNPJ 64.616.637/0001-90.
