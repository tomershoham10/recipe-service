import RecipeRepository from "./repository.js";
export class RecipeManager {
    static async createRecipe(body) {
        try {
            const newRecipe = await RecipeRepository.createRecipe(body);
            return newRecipe;
        }
        catch (error) {
            console.error('Manager Error [createRecipe]:', error.message);
            throw new Error('Error in createRecipe');
        }
    }
    static async getMany() {
        try {
            const allRecipes = await RecipeRepository.getMany();
            return allRecipes;
        }
        catch (error) {
            console.error('Manager Error [getMany]:', error.message);
            throw new Error('Error in getMany');
        }
    }
    static async getRecipeById(id) {
        try {
            const recipe = await RecipeRepository.getRecipeById(id);
            return recipe;
        }
        catch (error) {
            console.error('Manager Error [getRecipeById]:', error.message);
            throw new Error('Error in getRecipeById');
        }
    }
    static async deleteRecipeById(id) {
        try {
            const status = await RecipeRepository.deleteRecipeById(id);
            return status;
        }
        catch (error) {
            console.error('Manager Error [deleteRecipeById]:', error.message);
            throw new Error('Error in deleteRecipeById');
        }
    }
    // add validations that the fields to update do not equal to the current fields in the DB
    static async updateRecipeById(id, filedsToUpdate) {
        try {
            const updatedRecipe = await RecipeRepository.updateRecipeById(id, filedsToUpdate);
            return updatedRecipe;
        }
        catch (error) {
            console.error('Manager Error [updateRecipeById]:', error.message);
            throw new Error('Error in updateRecipeById');
        }
    }
}
//# sourceMappingURL=manager.js.map