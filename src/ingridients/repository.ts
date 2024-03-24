import mongoose from "mongoose";
import IngredientModel from "./model.js";

export class IngredientRepository {

  static async createIngredient(
    ingredient: IngredientType
  ): Promise<IngredientType> {
    console.log(ingredient);
    const newIngredient = await IngredientModel.create(ingredient);
    return newIngredient;
  }

  static async getMany(): Promise<IngredientType[]> {
    const ingredients = await IngredientModel.find({});
    console.log(ingredients);

    return ingredients;
  }

  static async getIngredientById(
    ingredientId: mongoose.ObjectId | string
  ): Promise<IngredientType | null> {
    const ingredient = await IngredientModel.findById(ingredientId);
    return ingredient;
  }

  static async deleteIngredientById(
    ingredientId: string
  ): Promise<IngredientType | null> {
    const ingredient = await IngredientModel.findOneAndDelete(
      { _id: ingredientId }
    );
    return ingredient;
  }

  static async updateIngredientById(
    ingredientId: string,
    filedsToUpdate: Partial<IngredientType>
  ): Promise<IngredientType | null> {
    const updatedIngredient = await IngredientModel.findByIdAndUpdate(
      ingredientId,
      filedsToUpdate,
      { new: true }
    );
    return updatedIngredient;
  }
}
