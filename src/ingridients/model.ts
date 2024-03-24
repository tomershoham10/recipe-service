import mongoose, { Schema } from "mongoose";

enum Shops {
  "GROCERY",
  "DELI",
  "FARMERS_MARKET",
  "SUPERMARKET",
  "BUTCHER_SHOP",
  "FISH_MARKET",
  "HEALTH_STORE",
}

enum IngredientCategories {
  "CHICKEN",
  "MEAT",
  "VEGAN",
  "VEGETABLE",
  "DAIRY",
  "SEAFOOD",
  "FRUIT",
  "GRAINS",
  "SPICES",
  "SAUCES",
}

const ingridientSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true, minlength: 1 },
    averagedPrice: { type: Number, required: true, min: 0 },
    category: [{
      type: String,
      enum: Object.values(IngredientCategories),
      required: false,
    }],
    whereToFind: [{
      type: String,
      enum: Object.values(Shops),
      required: false,
    }],
  },
  { timestamps: true } // adds 'createdAt' and 'updatedAt' fields automatically
);

const IngredientModel = mongoose.model<IngredientType>(
  "Ingredient",
  ingridientSchema
);
export default IngredientModel;
