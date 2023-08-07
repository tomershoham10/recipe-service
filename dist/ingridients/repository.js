export class IngredientRepository {
    constructor(ingredientModel) {
        this.ingredientModel = ingredientModel;
    }
    async createIngredient(ingredient) {
        console.log(ingredient);
        const newIngredient = await this.ingredientModel.create(ingredient);
        return newIngredient;
    }
    async getMany() {
        const ingredients = await this.ingredientModel.find({});
        console.log(ingredients);
        return ingredients;
    }
    async getIngredientById(ingredientId) {
        const ingredient = await this.ingredientModel.findById(ingredientId);
        return ingredient;
    }
    async deleteIngredientById(ingredientId) {
        const ingredient = await this.ingredientModel.findOneAndDelete(ingredientId);
        return ingredient;
    }
    async updateIngredientById(ingredientId, filedsToUpdate) {
        const updatedIngredient = await this.ingredientModel.findByIdAndUpdate(ingredientId, filedsToUpdate, { new: true });
        return updatedIngredient;
    }
}
//# sourceMappingURL=repository.js.map