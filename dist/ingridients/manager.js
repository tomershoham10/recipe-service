import { IngredientRepository } from "./repository.js";
export class IngredientManager {
    static async createIngredient(body) {
        const newIngredient = await IngredientRepository.createIngredient(body);
        return newIngredient;
    }
    static async getMany() {
        const allIngredients = await IngredientRepository.getMany();
        return allIngredients;
    }
    static async getIngredientById(id) {
        const ingredient = await IngredientRepository.getIngredientById(id);
        return ingredient;
    }
    static async deleteIngredientById(id) {
        const status = await IngredientRepository.deleteIngredientById(id);
        return status;
    }
    // add validations that the fields to update do not equal to the current fields in the DB
    static async updateIngredientById(id, filedsToUpdate) {
        const updatedIngredient = await IngredientRepository.updateIngredientById(id, filedsToUpdate);
        return updatedIngredient;
    }
}
//# sourceMappingURL=manager.js.map