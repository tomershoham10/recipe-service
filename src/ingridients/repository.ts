import mongoose, { Model } from "mongoose";
import { IngredientDocument, Categories, Shops } from "./model.js";

type IngredientType = {
  name: string;
  averagedPrice: number;
  category: Categories;
  whereToFind: Shops[];
};

export class IngredientRepository {
  private readonly ingredientModel: Model<IngredientDocument>;

  constructor(ingredientModel: Model<IngredientDocument>) {
    this.ingredientModel = ingredientModel;
  }

  async createIngredient(
    ingredient: IngredientType
  ): Promise<IngredientDocument> {
    console.log(ingredient);
    const newIngredient = await this.ingredientModel.create(ingredient);
    return newIngredient;
  }

  async getMany(): Promise<IngredientDocument[]> {
    const ingredients = await this.ingredientModel.find({});
    console.log(ingredients);

    return ingredients;
  }

  async getIngredientById(
    ingredientId: mongoose.ObjectId | string
  ): Promise<IngredientDocument | null> {
    const ingredient = await this.ingredientModel.findById(ingredientId);
    return ingredient;
  }

  async deleteIngredientById(
    ingredientId: mongoose.ObjectId
  ): Promise<IngredientDocument | null> {
    const ingredient = await this.ingredientModel.findOneAndDelete(
      ingredientId
    );
    return ingredient;
  }

  async updateIngredientById(
    ingredientId: mongoose.ObjectId,
    filedsToUpdate: Partial<IngredientType>
  ): Promise<IngredientDocument | null> {
    const updatedIngredient = await this.ingredientModel.findByIdAndUpdate(
      ingredientId,
      filedsToUpdate,
      { new: true }
    );
    return updatedIngredient;
  }
}
