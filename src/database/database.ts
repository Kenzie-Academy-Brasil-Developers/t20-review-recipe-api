import { IRecipe } from "../interfaces/recipe.interface";

let id = 0;

export const recipeDatabase: IRecipe[]  = [];

//identificador serial (em série)
export const generateId = () => {
    id++;
    return id;
}