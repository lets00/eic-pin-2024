import express from "express";
import {filmeRouter} from "./src/routes/filmesRoute.js"

const app = express();
const porta = 3000;



app.use(express.static("public/"));
app.use(express.json());
app.use(filmeRouter);

app.listen(porta, () => {
  console.log(`App executando na porta ${porta}...`);
});
