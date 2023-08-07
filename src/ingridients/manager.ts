import mongoose from "mongoose";
import { Categories, IngredientDocument, Shops } from "./model.js";
import { IngredientModel } from "./model.js";
import { IngredientRepository } from "./repository.js";

const ingredientRepo = new IngredientRepository(IngredientModel);

type IngredientType = {
  name: string;
  averagedPrice: number;
  category: Categories;
  whereToFind: Shops[];
};

export class IngredientManager {
  static async createIngredient(
    body: IngredientType
  ): Promise<IngredientDocument> {
    const newIngredient = await ingredientRepo.createIngredient(body);
    return newIngredient;
  }

  static async getMany(): Promise<IngredientDocument[]> {
    const allIngredients = await ingredientRepo.getMany();
    return allIngredients;
  }

  static async getIngredientById(
    id: mongoose.ObjectId | string
  ): Promise<IngredientDocument | null> {
    const ingredient = await ingredientRepo.getIngredientById(id);
    return ingredient;
  }

  static async deleteIngredientById(
    id: mongoose.ObjectId | string
  ): Promise<IngredientDocument | null> {
    const status = await ingredientRepo.deleteIngredientById(id);
    return status;
  }

  static async updateIngredientById(
    id: mongoose.ObjectId,
    filedsToUpdate: Partial<IngredientType>
  ): Promise<IngredientDocument | null> {
    const updatedIngredient = await ingredientRepo.updateIngredientById(
      id,
      filedsToUpdate
    );
    return updatedIngredient;
  }
}
