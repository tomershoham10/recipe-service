import { IngredientRepository } from "./repository.js";

export class IngredientManager {
  static async createIngredient(
    body: IngredientType
  ): Promise<IngredientType> {
    const newIngredient = await IngredientRepository.createIngredient(body);
    return newIngredient;
  }

  static async getMany(): Promise<IngredientType[]> {
    const allIngredients = await IngredientRepository.getMany();
    return allIngredients;
  }

  static async getIngredientById(
    id: string
  ): Promise<IngredientType | null> {
    const ingredient = await IngredientRepository.getIngredientById(id);
    return ingredient;
  }

  static async deleteIngredientById(id: string): Promise<IngredientType | null> {
    const status = await IngredientRepository.deleteIngredientById(id);
    return status;
  }

  // add validations that the fields to update do not equal to the current fields in the DB
  static async updateIngredientById(
    id: string,
    filedsToUpdate: Partial<IngredientType>
  ): Promise<IngredientType | null> {
    const updatedIngredient = await IngredientRepository.updateIngredientById(
      id,
      filedsToUpdate
    );
    return updatedIngredient;
  }
}
