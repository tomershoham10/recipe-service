import Express from "express";
import RecipeModel from "../recipes/model.js";
import IngredientModel from "../ingredients/model.js";

export class SearchController {
    static async search(req: Express.Request, res: Express.Response) {
        try {
            const { q } = req.query;
            if (!q || typeof q !== 'string') {
                return res.status(400).json({ error: 'Invalid or missing search query' });
            }

            const searchRegex = new RegExp(q, 'i');

            const [recipeResults, ingredientResults] = await Promise.all([
                RecipeModel.find({ name: { $regex: searchRegex } }),
                IngredientModel.find({ name: { $regex: searchRegex } })
            ]);

            return res.status(200).json({
                recipes: recipeResults,
                ingredients: ingredientResults,
            });
        } catch (error) {
            console.error('Error during search:', error);
            return res.status(500).json({ error: 'An error occurred during the search' });
        }
    }
}
