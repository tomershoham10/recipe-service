import mongoose, { Schema } from "mongoose";
var Categories;
(function (Categories) {
    Categories[Categories["CHICKEN"] = 0] = "CHICKEN";
    Categories[Categories["MEAT"] = 1] = "MEAT";
    Categories[Categories["VEGAN"] = 2] = "VEGAN";
    Categories[Categories["VEGATERIAN"] = 3] = "VEGATERIAN";
    Categories[Categories["ITALIAN"] = 4] = "ITALIAN";
    Categories[Categories["ASIAN"] = 5] = "ASIAN";
    Categories[Categories["INDIAN"] = 6] = "INDIAN";
})(Categories || (Categories = {}));
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel[DifficultyLevel["EASY"] = 0] = "EASY";
    DifficultyLevel[DifficultyLevel["MEDIUM"] = 1] = "MEDIUM";
    DifficultyLevel[DifficultyLevel["ADVANCED"] = 2] = "ADVANCED";
})(DifficultyLevel || (DifficultyLevel = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["Minutes"] = "minutes";
    TimeUnit["Hours"] = "hours";
    TimeUnit["Days"] = "days";
})(TimeUnit || (TimeUnit = {}));
const recipeSchema = new Schema({
    name: { type: String, required: true, unique: true, minlength: 3 },
    img: { type: String, required: true, minlength: 3 },
    category: {
        type: [String],
        enum: Object.values(Categories),
        required: true,
    },
    quantifiedIngredients: {
        type: [{ type: Schema.Types.ObjectId, ref: "Ingridient" }],
        required: true,
    },
    estimatedTime: {
        value: { type: Number, required: true },
        unit: { type: String, enum: Object.values(TimeUnit), required: true },
    },
}, { timestamps: true });
export default mongoose.model("Recipe", recipeSchema);
//# sourceMappingURL=model.js.map