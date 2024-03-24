import IngredientModel from "./model.js";
export class IngredientRepository {
    static async createIngredient(ingredient) {
        console.log(ingredient);
        const newIngredient = await IngredientModel.create(ingredient);
        return newIngredient;
    }
    static async getMany() {
        const ingredients = await IngredientModel.find({});
        console.log(ingredients);
        return ingredients;
    }
    static async getIngredientById(ingredientId) {
        const ingredient = await IngredientModel.findById(ingredientId);
        return ingredient;
    }
    static async deleteIngredientById(ingredientId) {
        const ingredient = await IngredientModel.findOneAndDelete({ _id: ingredientId });
        return ingredient;
    }
    static async updateIngredientById(ingredientId, filedsToUpdate) {
        const updatedIngredient = await IngredientModel.findByIdAndUpdate(ingredientId, filedsToUpdate, { new: true });
        return updatedIngredient;
    }
}
//# sourceMappingURL=repository.js.map