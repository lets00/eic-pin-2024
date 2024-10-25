import {
  adicionarFilmeModel,
  atualizarFilmeModel,
  obterFilmePorIdModel,
  obterTodosOsFilmesModel,
  removerFilmeModel,
} from "../models/filmesModel.js";

export async function obterFilmes(_, res) {
  const filmes = await obterTodosOsFilmesModel();
  return res.status(200).json(filmes);
}

export async function obterFilmeEspecifico(req, res) {
  const { id } = req.params;

  const resultado = await obterFilmePorIdModel(id);
  return res.status(resultado ? 200 : 404).json(resultado);
}

export async function atualizarFilme(req, res) {
  const id = req.params.id;
  const filme = req.body;

  const filmeBD = await obterFilmePorIdModel(id);
  if (filmeBD) {
    await atualizarFilmeModel(filme);
    return res.status(204).json({});
  }
  return res.status(404).json({});
}

export async function adicionarFilme(req, res) {
  const filme = req.body;

  const filmeBD = await obterFilmePorIdModel(filme.id);

  if (filmeBD) {
    return res.status(403).json({ mensagem: "Já existe um filme cadastrado com esse ID" });
  }
  await adicionarFilmeModel(filme);
  return res.status(201).json({ mensagem: "Filme adicionado com sucesso" });
}

export async function removerFilme(req, res) {
  const { id } = req.params;

  const filmeBD = await obterFilmePorIdModel(id);
  if (filmeBD) {
    await removerFilmeModel(id);
    return res.status(200).json({ mensagem: "Filmes removidos com sucesso" });
  }
  return res.status(404).json({});  
}
