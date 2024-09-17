import mongoose, { Schema } from "mongoose";

enum IngredientCategories {
  CHICKEN = "chicken",
  MEAT = "meat",
  VEGAN = "vegan",
  VEGETABLE = "vegetable",
  DAIRY = "dairy",
  SEAFOOD = "seafood",
  FRUIT = "fruit",
  GRAINS = "grains",
  SPICES = "spices",
  SAUCES = "sauces",
}

const ingridientSchema: Schema = new Schema<IngredientType>(
  {
    name: { type: String, required: true, unique: true, minlength: 1 },
    pluralName: { type: String, required: false, unique: true, minlength: 1 },
    categories: [{
      type: String,
      enum: Object.values(IngredientCategories),
      required: false,
    }],
  },
  { timestamps: true }
);

const IngredientModel = mongoose.model<IngredientType>(
  "Ingredient",
  ingridientSchema
);
export default IngredientModel;
