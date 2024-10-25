import { open } from "sqlite";
import sqlite3 from "sqlite3";

export const dbPromise = open({
  filename: "./database/filmes.db",
  driver: sqlite3.Database,
});
