# SCD Advocacia & Consultoria Jurídica — Direitos da Pessoa com Autismo (TEA)

Landing page em Next.js (App Router) + TypeScript + Tailwind CSS, pronta para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Onde alterar as informações

Tudo que muda com frequência está em **`src/lib/site.ts`**:

| Constante | O que é |
| --- | --- |
| `WHATSAPP_NUMBER` | Número do WhatsApp (formato `55` + DDD + número). Todos os botões usam este valor. |
| `PHONE_DISPLAY` / `PHONE_E164` | Telefone exibido e telefone do link `tel:`. |
| `EMAIL` | E-mail do escritório. |
| `META_PIXEL_ID` | Pixel da Meta. Deixe `""` para desativar. |
| `GOOGLE_BUSINESS_URL` | Link do perfil no Google Meu Negócio. |
| `SITE_URL` | Domínio final — **atualize após publicar**, pois alimenta canonical, Open Graph e sitemap. |
| `WHATSAPP_DEFAULT_MESSAGE` / `WHATSAPP_BPC_MESSAGE` | Mensagens pré-preenchidas. |

Outros conteúdos:

- **Perguntas do FAQ:** `src/lib/faq.ts` (também alimenta o schema.org `FAQPage`).
- **Avaliações do Google:** `src/lib/reviews.ts` — a lista começa vazia. O Google não
  permite ler avaliações sem uma chave de API server-side, e este projeto não tem
  backend. Copie os textos reais do perfil e cole no array; enquanto ele estiver
  vazio, a seção mostra apenas o link para o perfil (nenhuma avaliação fictícia).

## Imagens

Em `public/images/`, geradas a partir dos arquivos originais `.jfif`:

- `criancas.jpg` — hero
- `criancas-dois.jpg` — seção emocional
- `sueli.jpg` — seção institucional
- `logo-mark.png` / `logo-lockup.png` — logo com fundo removido
- `og.jpg` — imagem de Open Graph

O favicon e o ícone de app estão em `src/app/icon.png` e `src/app/apple-icon.png`.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em vercel.com → **New Project** → importe o repositório.
3. Framework detectado automaticamente (Next.js). Nenhuma variável de ambiente é necessária.
4. Após o deploy, atualize `SITE_URL` em `src/lib/site.ts` com o domínio final.
