import mongoose, { Schema } from "mongoose";
var Categories;
(function (Categories) {
    Categories[Categories["CHICKEN"] = 0] = "CHICKEN";
    Categories[Categories["MEAT"] = 1] = "MEAT";
    Categories[Categories["VEGAN"] = 2] = "VEGAN";
    Categories[Categories["VEGETABLE"] = 3] = "VEGETABLE";
    Categories[Categories["DAIRY"] = 4] = "DAIRY";
    Categories[Categories["SEAFOOD"] = 5] = "SEAFOOD";
    Categories[Categories["FRUIT"] = 6] = "FRUIT";
    Categories[Categories["GRAINS"] = 7] = "GRAINS";
    Categories[Categories["SPICES"] = 8] = "SPICES";
    Categories[Categories["SAUCES"] = 9] = "SAUCES";
})(Categories || (Categories = {}));
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
const ingridientSchema = new Schema({
    name: { type: String, required: true, unique: true, minlength: 3 },
    averagedPrice: { type: Number, required: true, min: 0 },
    category: {
        type: String,
        enum: Object.values(Categories),
        required: false,
    },
    whereToFind: {
        type: [String],
        enum: Object.values(Shops),
        required: false,
    },
}, { timestamps: true } // This will add 'createdAt' and 'updatedAt' fields automatically
);
export default mongoose.model("Ingridient", ingridientSchema);
export { Categories, Shops };
//# sourceMappingURL=model.js.map