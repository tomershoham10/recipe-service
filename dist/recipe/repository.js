import RecipeModel from "./model.js";
export default class RecipeRepository {
    static async createRecipe(recipe) {
        try {
            const newRecipe = await RecipeModel.create(recipe);
            return newRecipe;
        }
        catch (error) {
            console.error('Repository Error:', error.message);
            throw new Error(`recipe repo - createRecipe: ${error}`);
        }
    }
    static async getMany() {
        try {
            const recipes = await RecipeModel.find({});
            return recipes;
        }
        catch (error) {
            console.error('Repository Error:', error.message);
            throw new Error(`recipe repo - getMany: ${error}`);
        }
    }
    static async getRecipeById(recipeId) {
        try {
            const recipe = await RecipeModel.findById(recipeId);
            return recipe;
        }
        catch (error) {
            console.error('Repository Error:', error.message);
            throw new Error(`recipe repo - getRecipeById: ${error}`);
        }
    }
    static async deleteRecipeById(recipeId) {
        try {
            const recipe = await RecipeModel.findOneAndDelete({ _id: recipeId });
            return recipe;
        }
        catch (error) {
            console.error('Repository Error:', error.message);
            throw new Error(`recipe repo - deleteRecipeById: ${error}`);
        }
    }
    static async updateRecipeById(recipeId, filedsToUpdate) {
        try {
            const updatedRecipe = await RecipeModel.findByIdAndUpdate(recipeId, filedsToUpdate, { new: true });
            return updatedRecipe;
        }
        catch (error) {
            console.error('Repository Error:', error.message);
            throw new Error(`recipe repo - updateRecipeById: ${error}`);
        }
    }
    // TODO: Use this function
    static async removeIngredients(ingredients, query = {}) {
        try {
            const updatedRecipes = await RecipeModel.updateMany(query, {
                $pullAll: {
                    ingredients: { $in: ingredients },
                },
            });
            return updatedRecipes;
        }
        catch (err) {
            console.error(err);
            throw new Error("Failed to update recipes.");
        }
    }
}
//# sourceMappingURL=repository.js.map