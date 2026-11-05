// @ts-check
import { defineConfig } from 'astro/config';

// Build estático em dist/, publicado no GitHub Pages (domínio em public/CNAME).
export default defineConfig({
  site: 'https://icaroslb.dev.br',
  output: 'static',
});
