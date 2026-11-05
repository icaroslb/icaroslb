// Dados pessoais exibidos no cabeçalho, na home e no currículo.
export const NOME = 'Ícaro Barbosa';
export const TITULO = 'Desenvolvedor';
// Início da experiência em desenvolvimento ("AAAA" ou "AAAA-MM").
const INICIO_DEV = '2018';

// Anos completos desde INICIO_DEV, calculados no build (atualiza a cada deploy).
const anosDesde = (inicio: string) => {
  const [ano, mes = 1] = inicio.split('-').map(Number);
  const hoje = new Date();
  return hoje.getFullYear() - ano - (hoje.getMonth() + 1 < mes ? 1 : 0);
};
export const ANOS_DEV = anosDesde(INICIO_DEV);

export const BIO = `Trabalho com desenvolvimento há ${ANOS_DEV} anos. Possuo experiências variadas no desenvolvimento de jogos: diversos tipos de sistemas e trabalho com prazo curto. Sou graduado e mestre em Ciência da Computação pela UFC, com foco em Computação Gráfica.`;
export const CONTATOS: { rotulo: string; url: string }[] = [
  { rotulo: 'Github', url: 'https://github.com/icaroslb' },
  { rotulo: 'Itch.io', url: 'https://ibarbosa.itch.io/' },
  { rotulo: 'Lattes', url: 'http://lattes.cnpq.br/1866858763840341' },
  { rotulo: 'LinkedIn', url: 'https://www.linkedin.com/in/icarosbarbosa/' }
];
