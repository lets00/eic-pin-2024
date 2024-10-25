import { dbPromise } from "./db.js";

const db = await dbPromise;

async function criarTabelaFilmes() {
  await db.exec(`CREATE TABLE IF NOT EXISTS filmes (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    ano INTEGER,
    valor_ingresso REAL
    )`);
}

async function adicionarFilmes() {
  const filmes = [
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

  for (const f of filmes) {
    try {
      await db.run(
        "INSERT INTO filmes (id, nome, ano, valor_ingresso) VALUES (?, ?, ?, ?)",
        [f.id, f.nome, f.ano, f.valor_ingresso]
      );
    } catch (e) {
      console.log(e);
    }
  }
}

await criarTabelaFilmes();
await adicionarFilmes();
