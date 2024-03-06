import { TRecipe } from "../interfaces/recipe.interface";

let id = 0;

export const recipeDatabase: TRecipe[]  = [];

//identificador serial (em série)
export const generateId = () => {
    id++;
    return id;
}