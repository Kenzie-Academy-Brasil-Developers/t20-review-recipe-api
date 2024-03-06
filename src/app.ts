import "express-async-errors";
import express, { json } from "express";
import { recipeRouter } from "./routes/recipe.routes";
import { HandleErrors } from "./errors/handleErrors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

export const app = express();

app.use(helmet());
app.use(rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 30,
    standardHeaders: "draft-7",
    legacyHeaders: false,
}));
app.use(json());
app.use("/recipes", recipeRouter);
app.use(HandleErrors.execute);

// ler múltiplas receitas e fazer uma busca pelo nome da receita
// ler uma única receita
// criar uma receita
// atualizar uma receita
// excluir uma receita