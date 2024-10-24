let filmes = [
  {
    id: 0,
    nome: "Tropa de Elite 2: O Inimigo Agora é Outro",
    valor_ingresso: 25.0,
    ano: 2010,
  },
  {
    id: 1,
    nome: "Dona Flor e Seus Dois Maridos",
    valor_ingresso: 22.0,
    ano: 1976,
  },
  {
    id: 2,
    nome: "Minha Mãe é uma Peça 3",
    valor_ingresso: 20.0,
    ano: 2019,
  },
  {
    id: 3,
    nome: "Se Eu Fosse Você 2",
    valor_ingresso: 18.0,
    ano: 2009,
  },
  {
    id: 4,
    nome: "De Pernas pro Ar 2",
    valor_ingresso: 17.0,
    ano: 2012,
  },
];

export function obterFilmes(_, res) {
  return res.status(200).json(filmes);
}

export function obterFilmeEspecifico(req, res) {
  const { id } = req.params;

  const resultado = filmes.find((f) => f.id == id);
  return res.status(resultado ? 200 : 404).json(resultado);
}

export function atualizarFilme(req, res) {
  const id = req.params.id;
  const filme = req.body;

  for (let x = 0; x < filmes.length; x++) {
    if (filmes[x].id == id) {
      filmes[x].ano = filme.ano;
      filmes[x].nome = filme.nome;
      filmes[x].valor_ingresso = filme.valor_ingresso;

      return res.status(204).json({});
    }
  }
  return res.status(404).json({});
}

export function adicionarFilme(req, res) {
  const filme = req.body;

  for (let x = 0; x < filmes.length; x++) {
    if (filmes[x].id == filme.id) {
      return res.status(403).json({
        mensagem: "Já existe um filme cadastrado com esse ID",
      });
    }
  }
  filmes.push(filme);
  return res.status(201).json({ mensagem: "Filme adicionado com sucesso" });
}

export function removerFilme(req, res) {
  const { id } = req.params;

  const novoFilmes = filmes.filter((f) => f.id != id);

  if (novoFilmes.length === filmes.length) {
    return res.status(404).json({});
  }
  filmes = novoFilmes;
  return res.status(200).json({ mensagem: "Filmes removidos com sucesso" });
}
