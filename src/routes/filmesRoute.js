import { Router } from "express";
import {
  obterFilmeEspecifico,
  obterFilmes,
  adicionarFilme,
  atualizarFilme,
  removerFilme,
} from "../controllers/filmesController.js";

export const filmeRouter = Router();

filmeRouter.get("/api/filmes", obterFilmes);

filmeRouter.get("/api/filmes/:id", obterFilmeEspecifico);

filmeRouter.post("/api/filmes", adicionarFilme);

filmeRouter.put("/api/filmes/:id", atualizarFilme);

filmeRouter.delete("/api/filmes/:id", removerFilme);
