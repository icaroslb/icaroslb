import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Um arquivo Markdown por jogo/aplicativo em src/content/projetos/.
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumo: z.string(),
      tipo: z.enum(['jogo', 'app']),
      ano: z.number(),
      tecnologias: z.array(z.string()).default([]),
      // Para projetos em equipe: sua função e os demais participantes.
      papel: z.string().optional(),
      // Cada membro pode ser só o nome ("Ana") ou { nome, papel }.
      equipe: z
        .array(
          z.union([
            z.string().transform((nome) => ({ nome, papel: undefined })),
            z.object({ nome: z.string(), papel: z.string().optional() }),
          ]),
        )
        .default([]),
      capa: image().optional(),
      // Capturas de tela exibidas no carrossel após o texto (depois da capa).
      // Cada item pode ser só o caminho ("./x.png") ou { src, legenda }.
      imagens: z
        .array(
          z.union([
            image().transform((src) => ({ src, legenda: undefined })),
            z.object({ src: image(), legenda: z.string().optional() }),
          ]),
        )
        .default([]),
      links: z
        .array(
          z.object({
            rotulo: z.string(),
            url: z.url(),
          }),
        )
        .default([]),
      destaque: z.boolean().default(false),
    }),
});

const periodo = {
  inicio: z.string(), // "2022-03" ou "2022"
  fim: z.string().optional(), // ausente = atual
};

const experiencia = defineCollection({
  loader: file('./src/content/curriculo/experiencia.json'),
  schema: z.object({
    cargo: z.string(),
    empresa: z.string(),
    local: z.string().optional(),
    ...periodo,
    descricao: z.array(z.string()).default([]),
  }),
});

const formacao = defineCollection({
  loader: file('./src/content/curriculo/formacao.json'),
  schema: z.object({
    curso: z.string(),
    instituicao: z.string(),
    ...periodo,
    descricao: z.array(z.string()).default([]),
  }),
});

// O data store do Astro não preserva a ordem do arquivo; grava a posição em `ordem`
// para coleções que devem ser exibidas na ordem em que foram escritas.
const fileOrdenado = (path: string) =>
  file(path, {
    parser: (text) => JSON.parse(text).map((item: object, ordem: number) => ({ ...item, ordem })),
  });

// Grupos de habilidades (ex.: "Linguagens", "Engines"); exibidos na ordem do arquivo.
const habilidades = defineCollection({
  loader: fileOrdenado('./src/content/curriculo/habilidades.json'),
  schema: z.object({
    ordem: z.number(),
    categoria: z.string(),
    itens: z.array(z.string()),
  }),
});

// Exibidos na ordem do arquivo; `nivel` é texto livre (ex.: "Nativo", "Avançado (C1)").
const idiomas = defineCollection({
  loader: fileOrdenado('./src/content/curriculo/idiomas.json'),
  schema: z.object({
    ordem: z.number(),
    idioma: z.string(),
    nivel: z.string(),
  }),
});

export const collections = { projetos, experiencia, formacao, habilidades, idiomas };
