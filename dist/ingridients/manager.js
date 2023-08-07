import { IngredientModel } from "./model.js";
import { IngredientRepository } from "./repository.js";
const ingredientRepo = new IngredientRepository(IngredientModel);
export class IngredientManager {
    static async createIngredient(body) {
        const newIngredient = await ingredientRepo.createIngredient(body);
        return newIngredient;
    }
    static async getMany() {
        const allIngredients = await ingredientRepo.getMany();
        return allIngredients;
    }
    static async getIngredientById(id) {
        const ingredient = await ingredientRepo.getIngredientById(id);
        return ingredient;
    }
    static async deleteIngredientById(id) {
        const status = await ingredientRepo.deleteIngredientById(id);
        return status;
    }
    static async updateIngredientById(id, filedsToUpdate) {
        const updatedIngredient = await ingredientRepo.updateIngredientById(id, filedsToUpdate);
        return updatedIngredient;
    }
}
//# sourceMappingURL=manager.js.map