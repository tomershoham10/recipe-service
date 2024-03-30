import mongoose, { Schema } from "mongoose";
var Shops;
(function (Shops) {
    Shops[Shops["GROCERY"] = 0] = "GROCERY";
    Shops[Shops["DELI"] = 1] = "DELI";
    Shops[Shops["FARMERS_MARKET"] = 2] = "FARMERS_MARKET";
    Shops[Shops["SUPERMARKET"] = 3] = "SUPERMARKET";
    Shops[Shops["BUTCHER_SHOP"] = 4] = "BUTCHER_SHOP";
    Shops[Shops["FISH_MARKET"] = 5] = "FISH_MARKET";
    Shops[Shops["HEALTH_STORE"] = 6] = "HEALTH_STORE";
})(Shops || (Shops = {}));
var IngredientCategories;
(function (IngredientCategories) {
    IngredientCategories[IngredientCategories["CHICKEN"] = 0] = "CHICKEN";
    IngredientCategories[IngredientCategories["MEAT"] = 1] = "MEAT";
    IngredientCategories[IngredientCategories["VEGAN"] = 2] = "VEGAN";
    IngredientCategories[IngredientCategories["VEGETABLE"] = 3] = "VEGETABLE";
    IngredientCategories[IngredientCategories["DAIRY"] = 4] = "DAIRY";
    IngredientCategories[IngredientCategories["SEAFOOD"] = 5] = "SEAFOOD";
    IngredientCategories[IngredientCategories["FRUIT"] = 6] = "FRUIT";
    IngredientCategories[IngredientCategories["GRAINS"] = 7] = "GRAINS";
    IngredientCategories[IngredientCategories["SPICES"] = 8] = "SPICES";
    IngredientCategories[IngredientCategories["SAUCES"] = 9] = "SAUCES";
})(IngredientCategories || (IngredientCategories = {}));
const ingridientSchema = new Schema({
    name: { type: String, required: true, unique: true, minlength: 1 },
    averagedPrice: { type: Number, required: true, min: 0 },
    categories: [{
            type: String,
            enum: Object.values(IngredientCategories),
            required: false,
        }],
    whereToFind: [{
            type: String,
            enum: Object.values(Shops),
            required: false,
        }],
}, { timestamps: true } // adds 'createdAt' and 'updatedAt' fields automatically
);
const IngredientModel = mongoose.model("Ingredient", ingridientSchema);
export default IngredientModel;
//# sourceMappingURL=model.js.map