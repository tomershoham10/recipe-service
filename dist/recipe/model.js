import mongoose, { Schema } from "mongoose";
var RecipeCategories;
(function (RecipeCategories) {
    RecipeCategories[RecipeCategories["ITALIAN"] = 0] = "ITALIAN";
    RecipeCategories[RecipeCategories["ASAIN"] = 1] = "ASAIN";
    RecipeCategories[RecipeCategories["INDIAN"] = 2] = "INDIAN";
    RecipeCategories[RecipeCategories["VEGAN"] = 3] = "VEGAN";
    RecipeCategories[RecipeCategories["SEAFOOD"] = 4] = "SEAFOOD";
    RecipeCategories[RecipeCategories["SALAD"] = 5] = "SALAD";
    RecipeCategories[RecipeCategories["DINNER"] = 6] = "DINNER";
    RecipeCategories[RecipeCategories["DESSERT"] = 7] = "DESSERT";
})(RecipeCategories || (RecipeCategories = {}));
var difficultyLevels;
(function (difficultyLevels) {
    difficultyLevels[difficultyLevels["Easy"] = 0] = "Easy";
    difficultyLevels[difficultyLevels["Medium"] = 1] = "Medium";
    difficultyLevels[difficultyLevels["Advanced"] = 2] = "Advanced";
})(difficultyLevels || (difficultyLevels = {}));
const recipesSchema = new Schema({
    name: { type: String, required: true, unique: true, minlength: 3 },
    description: { type: String, required: true, minlength: 5 },
    img: { type: String, required: true, minlength: 5 },
    categories: [{
            type: String,
            enum: Object.values(RecipeCategories),
            required: true,
        }],
    difficultyLevel: {
        type: String,
        enum: Object.values(difficultyLevels),
        required: true,
    },
    quantifiedIngredients: [
        {
            ingredientId: {
                type: Schema.Types.ObjectId,
                ref: "Ingredient",
                required: true,
            },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
        },
    ],
}, { timestamps: true });
const RecipeModel = mongoose.model("Recipe", recipesSchema);
export default RecipeModel;
//# sourceMappingURL=model.js.map