import RecipeRepository from "./repository.js";

export class RecipeManager {
  static async createRecipe(body: RecipeType): Promise<RecipeType> {
    try {
      const newRecipe = await RecipeRepository.createRecipe(body);
      return newRecipe;
    } catch (error: any) {
      console.error('Manager Error [createRecipe]:', error.message);
      throw new Error('Error in createRecipe');
    }
  }

  static async getMany(): Promise<RecipeType[]> {
    try {
      const allRecipes = await RecipeRepository.getMany();
      return allRecipes;
    } catch (error: any) {
      console.error('Manager Error [getMany]:', error.message);
      throw new Error('Error in getMany');
    }
  }

  static async getRecipeById(id: string): Promise<RecipeType | null> {
    try {
      const recipe = await RecipeRepository.getRecipeById(id);
      return recipe;
    } catch (error: any) {
      console.error('Manager Error [getRecipeById]:', error.message);
      throw new Error('Error in getRecipeById');
    }
  }

  static async deleteRecipeById(id: string): Promise<RecipeType | null> {
    try {
      const status = await RecipeRepository.deleteRecipeById(id);
      return status;
    } catch (error: any) {
      console.error('Manager Error [deleteRecipeById]:', error.message);
      throw new Error('Error in deleteRecipeById');
    }
  }

  // add validations that the fields to update do not equal to the current fields in the DB
  static async updateRecipeById(
    id: string,
    filedsToUpdate: Partial<RecipeType>
  ): Promise<RecipeType | null> {
    try {
      const updatedRecipe = await RecipeRepository.updateRecipeById(id, filedsToUpdate);
      return updatedRecipe;
    } catch (error: any) {
      console.error('Manager Error [updateRecipeById]:', error.message);
      throw new Error('Error in updateRecipeById');
    }
  }
}
