import mongoose, { Schema, Document } from "mongoose";

enum Categories {
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

enum Shops {
  "GROCERY",
  "DELI",
  "FARMERS_MARKET",
  "SUPERMARKET",
  "BUTCHER_SHOP",
  "FISH_MARKET",
  "HEALTH_STORE",
}

export interface IngredientDocument extends Document {
  name: string;
  averagedPrice: number;
  category: Categories;
  whereToFind: Shops[];
}

const ingridientSchema: Schema = new Schema(
  {
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
  },
  { timestamps: true } // This will add 'createdAt' and 'updatedAt' fields automatically
);

const IngredientModel = mongoose.model<IngredientDocument>(
  "Ingredient",
  ingridientSchema
);
export { IngredientModel, Categories, Shops };
