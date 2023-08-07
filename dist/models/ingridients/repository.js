export class IngredientRepository {
    constructor(ingredientModel) {
        this.ingredientModel = ingredientModel;
    }
    // CRUD operations
    // Create a new ingredient
    async createIngredient(data) {
        const ingredient = await this.ingredientModel.create(data);
        return ingredient;
    }
    // Find an ingredient by ID
    async findIngredientById(ingredientId) {
        const ingredient = await this.ingredientModel.findById(ingredientId).exec();
        return ingredient;
    }
    // Update an existing ingredient
    async updateIngredient(ingredientId, data) {
        const ingredient = await this.ingredientModel
            .findByIdAndUpdate(ingredientId, data, { new: true })
            .exec();
        return ingredient;
    }
    // Delete an ingredient by ID
    async deleteIngredient(ingredientId) {
        const ingredient = await this.ingredientModel
            .findByIdAndDelete(ingredientId)
            .exec();
        return ingredient;
    }
    // Get all ingredients
    async getAllIngredients() {
        const ingredients = await this.ingredientModel.find().exec();
        return ingredients;
    }
}
//# sourceMappingURL=repository.js.map