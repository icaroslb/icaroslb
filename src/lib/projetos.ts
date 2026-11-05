import { getCollection } from 'astro:content';

// Projetos ordenados do mais recente para o mais antigo.
export async function getProjetos() {
  const projetos = await getCollection('projetos');
  return projetos.sort((a, b) => b.data.ano - a.data.ano || a.data.titulo.localeCompare(b.data.titulo));
}
