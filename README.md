# MappaHub — Landing Page

Página de vendas do [MappaHub](https://mappahub.com.br) — plataforma SaaS para visualizar, gerenciar e compartilhar redes de parceiros em um mapa interativo.

## Estrutura

```
mappahub-html/
├── index.html              # Página principal (HTML semântico, SEO completo)
├── style.css               # Estilos — design system, componentes, responsivo
├── script.js               # Comportamento — nav scroll, mobile menu, FAQ accordion, reveal
│
├── og-image.png            # Imagem de compartilhamento social (1200×630)
├── apple-touch-icon.png    # Ícone iOS (180×180)
├── favicon.ico             # Favicon (32×32 + 16×16 embutidos)
├── icon.svg                # Favicon SVG (qualidade infinita, browsers modernos)
│
├── site.webmanifest        # PWA manifest (nome, ícones, theme-color)
├── sitemap.xml             # Sitemap para indexação no Google
├── robots.txt              # Permissões de crawlers + referência ao sitemap
│
└── _generate-assets.html   # Gerador dos assets de imagem (uso único, ver abaixo)
```

## Seções da página

| Seção | Descrição |
|---|---|
| **Nav** | Sticky com blur, links de âncora, menu mobile |
| **Hero** | Headline, CTAs e mockup CSS do mapa com pins, cluster e popup |
| **Stats bar** | 10.000+ parceiros · 99,9% uptime · Trial 14 dias · Excel |
| **Funcionalidades** | 6 cards (Geocoding, Excel, Pin types, Mapa público, Equipe, Dashboard) |
| **Como funciona** | 3 passos com cards visuais animados |
| **Preços** | Mensal R$297,90 / Anual R$268,16/mês (R$3.217,90/ano) |
| **FAQ** | 6 perguntas em accordion acessível (aria-controls, role=region) |
| **CTA final** | Seção de conversão com gradiente azul |
| **Footer** | Links de navegação em `<nav>`, copyright |

## SEO

- `<link rel="canonical">`, `<meta name="robots">`, `<meta name="author">`
- Open Graph completo: `og:image`, `og:site_name`, `og:locale`, dimensões e alt
- Twitter Card: `summary_large_image`
- **JSON-LD**: `SoftwareApplication` (com ofertas de preço), `Organization`, `FAQPage` (rich results no Google)
- Favicon em 4 formatos: `.ico`, `.svg`, `apple-touch-icon`, `manifest`
- `robots.txt` + `sitemap.xml`
- `aria-labelledby` em todas as `<section>`, FAQ com `aria-controls`/`id`/`role`

## Desenvolvimento local

O projeto é HTML/CSS/JS puro — não precisa de build, servidor ou npm.

```bash
# Abrir diretamente no browser
open index.html

# Ou servir com qualquer servidor estático, ex:
npx serve .
python3 -m http.server 3000
```

## Deploy

O site é estático e pode ser hospedado em qualquer CDN. Recomendado: **Cloudflare Pages** ou **Netlify**.

### Cloudflare Pages

1. No painel da Cloudflare → **Pages** → **Create a project**
2. Conecte o repositório `mappahub-html`
3. Configurações de build:
   - **Framework preset**: `None`
   - **Build command**: _(deixar em branco)_
   - **Output directory**: `/` (raiz)
4. Adicione o domínio `mappahub.com.br` em **Custom domains**

### Netlify

```bash
# Via CLI
npm i -g netlify-cli
netlify deploy --dir . --prod
```

Ou arraste a pasta para [app.netlify.com/drop](https://app.netlify.com/drop).

### GitHub Pages

Em **Settings → Pages**, selecione a branch `main` e a pasta `/` (root).

## Atualizar assets de imagem

Se precisar regenerar o `og-image.png`, `apple-touch-icon.png` ou `favicon.ico`:

```bash
open _generate-assets.html
```

O arquivo abre no browser, gera os assets via canvas e baixa automaticamente os 3 arquivos. Mova-os para a raiz do projeto e faça commit.

## Links

| Ambiente | URL |
|---|---|
| Produção | https://mappahub.com.br |
| App | https://app.mappahub.com.br |
| API | https://api.mappahub.com.br |
| Repositório API | `git@github.com:charleskx/atlasync-api` |
| Repositório Web | `git@github.com:charleskx/atlasync-web` |
