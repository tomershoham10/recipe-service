import mongoose, { Model } from "mongoose";
import {
  RecipeDocument,
  Categories,
  difficultyLevels,
  QuantifiedIngredient,
} from "./model.js";

interface recipeType {
  name: string;
  description: string;
  img: string;
  categories: Categories[];
  difficultyLevel: difficultyLevels;
  quantifiedIngredients: QuantifiedIngredient[];
}

export class RecipeRepository {
  private readonly recipeModel: Model<RecipeDocument>;

  constructor(recipeModel: Model<RecipeDocument>) {
    this.recipeModel = recipeModel;
  }

  async createRecipe(recipe: recipeType): Promise<RecipeDocument> {
    const newRecipe = await this.recipeModel.create(recipe);
    return newRecipe;
  }

  async getMany(): Promise<RecipeDocument[]> {
    const recipes = await this.recipeModel.find({});
    return recipes;
  }

  async getRecipeById(
    recipeId: mongoose.ObjectId | string
  ): Promise<RecipeDocument | null> {
    const recipe = await this.recipeModel.findById(recipeId);
    return recipe;
  }

  async deleteRecipeById(
    recipeId: mongoose.ObjectId
  ): Promise<RecipeDocument | null> {
    const recipe = await this.recipeModel.findOneAndDelete(recipeId);
    return recipe;
  }

  async updateRecipeById(
    recipeId: mongoose.ObjectId,
    filedsToUpdate: Partial<RecipeDocument>
  ): Promise<RecipeDocument | null> {
    const updatedRecipe = await this.recipeModel.findByIdAndUpdate(
      recipeId,
      filedsToUpdate,
      { new: true }
    );
    return updatedRecipe;
  }

  async removeIngredients(ingredients, query = {}): Promise<> {
    const updatedRecipe = await this.recipeModel.updateMany()
  }
}
