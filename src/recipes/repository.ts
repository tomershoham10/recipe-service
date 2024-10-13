import mongoose, { UpdateWriteOpResult } from "mongoose";
import RecipeModel from "./model.js";

export default class RecipeRepository {
  static async createRecipe(recipe: RecipeType): Promise<RecipeType> {
    try {
      const newRecipe = await RecipeModel.create(recipe);
      console.log('RecipeRepository - createRecipe', newRecipe)
      return newRecipe;
    } catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`recipe repo - createRecipe: ${error}`);
    }
  }

  static async getMany(): Promise<RecipeType[]> {
    try {
      const recipes = await RecipeModel.find({});
      return recipes;
    } catch (error: any) {
      console.error('Repository Error getMany:', error.message);
      throw new Error(`recipe repo - getMany: ${error}`);
    }
  }

  /**
   * Retrieves a paginated list of recipes from the database.
   * @param {number} page - The page number of the paginated results.
   * @param {number} limit - The maximum number of recipes to return per page.
   * @returns {Promise<{ recipes: RecipeType[], totalRecipes: number }>} A promise that resolves to an object containing the paginated recipes and the total number of recipes.
   * @throws {Error} If there is an error while fetching the paginated recipes.
   */
  static async getPaginatedRecipes(page: number, limit: number): Promise<{ recipes: RecipeType[], totalRecipes: number }> {
    try {
      const recipes = await RecipeModel.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });

      const totalRecipes = await RecipeModel.countDocuments();
      return { recipes, totalRecipes };
    }
    catch (error: any) {
      console.error('Repository Error getPaginatedRecipes:', error.message);
      throw new Error(`recipe repo - getPaginatedRecipes: ${error}`);
    }
  }

  static async getRecipeById(recipeId: string): Promise<RecipeType | null> {
    try {
      const recipe = await RecipeModel.findById(recipeId);
      return recipe;
    }
    catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`recipe repo - getRecipeById: ${error}`);
    }
  }

  static async deleteRecipeById(recipeId: string): Promise<RecipeType | null> {
    try {
      const recipe = await RecipeModel.findOneAndDelete({ _id: recipeId });
      return recipe;
    }
    catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`recipe repo - deleteRecipeById: ${error}`);
    }
  }

  static async updateRecipeById(
    recipeId: string,
    filedsToUpdate: Partial<RecipeType>
  ): Promise<RecipeType | null> {
    try {
      const updatedRecipe = await RecipeModel.findByIdAndUpdate(
        recipeId,
        filedsToUpdate,
        { new: true }
      );
      return updatedRecipe;
    }
    catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`recipe repo - updateRecipeById: ${error}`);
    }
  }

  // TODO: Use this function
  static async removeIngredients(
    ingredients: IngredientType[],
    query: mongoose.FilterQuery<RecipeType> = {}
  ): Promise<UpdateWriteOpResult> {
    try {
      const updatedRecipes = await RecipeModel.updateMany(query, {
        $pullAll: {
          ingredients: { $in: ingredients },
        },
      });

      return updatedRecipes;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to update recipes.");
    }
  }
}
