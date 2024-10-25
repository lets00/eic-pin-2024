import { dbPromise } from "../../database/db.js";

const db = await dbPromise;

export async function obterTodosOsFilmesModel() {
  return await db.all("SELECT * FROM filmes");
}

export async function obterFilmePorIdModel(id) {
  return await db.get("SELECT * FROM filmes WHERE id=?", [id]);
}

export async function adicionarFilmeModel(filme) {
  await db.run(
    "INSERT INTO filmes (id, nome, ano, valor_ingresso) VALUES (?, ?, ?, ?)",
    [filme.id, filme.nome, filme.ano, filme.valor_ingresso]
  );
}

export async function atualizarFilmeModel(filme) {
  await db.run("UPDATE filmes SET nome = ?, ano = ?, valor_ingresso = ? WHERE id = ? ", [
    filme.nome,
    filme.ano,
    filme.valor_ingresso,
    filme.id,
  ]);
}

export async function removerFilmeModel(id) {
  await db.run("DELETE FROM filmes WHERE id = ?", [id]);
}
