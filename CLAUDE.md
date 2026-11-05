# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Website pessoal do icaroslb (em pt-BR): portfólio de jogos e aplicativos e currículo (histórico acadêmico e profissional).

## Comandos

Requer Node >= 22.12 (exigência do Astro 7).

- `npm run dev` — servidor de desenvolvimento do Astro.
- `npm run build` — gera o site estático em `dist/`.
- `npm run preview` — serve o `dist/` localmente (`astro preview`) para conferir o build.

Não há lint nem testes configurados.

## Arquitetura

- **Astro em modo estático no GitHub Pages.** O Astro só gera HTML em `dist/`; não há servidor próprio. O deploy é feito por GitHub Actions (`.github/workflows/deploy.yml`, com `withastro/action` + `actions/deploy-pages`) a cada push na `main`; em Settings → Pages a fonte deve ser "GitHub Actions". Não adicionar adapters de SSR (`@astrojs/node` etc.) nem código que dependa de servidor.
- **Domínio próprio `icaroslb.dev.br`.** O arquivo `public/CNAME` é copiado para a raiz do build; o site fica na raiz do domínio, então o `astro.config.mjs` usa `site: 'https://icaroslb.dev.br'` e **não** define `base`. Links internos podem ser absolutos (`/projetos/...`).
- **Sem cabeçalhos HTTP personalizados.** O GitHub Pages não permite configurar cabeçalhos (cache, segurança etc.), então nada no site pode depender deles.
- **Conteúdo separado das páginas** (schemas em `src/content.config.ts`):
  - `src/content/projetos/<slug>.md` — um arquivo por jogo/app; o slug vira a rota `/projetos/<slug>/`. `destaque: true` exibe na home; `papel`/`equipe` para projetos em equipe (membros como string ou `{ nome, papel }`); `links` lista os links externos do projeto; `capa` é uma imagem relativa ao arquivo `.md` (otimizada pelo `astro:assets`).
  - `src/content/curriculo/*.json` — arrays com `id` obrigatório. `experiencia`/`formacao` são ordenados por data (`inicio`/`fim` como `"AAAA"` ou `"AAAA-MM"`; sem `fim` = atual). `habilidades`/`idiomas` seguem a ordem do arquivo: o data store do Astro não preserva ordem, então `fileOrdenado` em `content.config.ts` injeta o campo `ordem` na leitura.
  - Dados pessoais (nome, bio, links de contato) em `src/consts.ts`.
