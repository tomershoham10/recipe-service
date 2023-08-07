import mongoose, { Schema, Document, Types } from "mongoose";
import { IngredientDocument } from "../ingridients/model.js";

enum Categories {
  "ITALIAN",
  "ASAIN",
  "INDIAN",
  "VEGAN",
  "SEAFOOD",
  "SALAD",
  "DINNER",
  "DESSERT",
}

enum difficultyLevels {
  "Easy",
  "Medium",
  "Advanced",
}

interface QuantifiedIngredient {
  ingredient: Types.ObjectId | IngredientDocument;
  quantity: number;
  unit: string;
}

export interface RecipeDocument extends Document {
  name: string;
  description: string;
  img: string;
  categories: Categories[];
  difficultyLevel: difficultyLevels;
  quantifiedIngredients: QuantifiedIngredient[];
}

const recipesSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true, minlength: 3 },
    description: { type: String, required: true, minlength: 5 },
    img: { type: String, required: true, minlength: 5 },
    categories: {
      type: [String],
      enum: Object.values(Categories),
      required: true,
    },
    difficultyLevel: {
      type: String,
      enum: Object.values(difficultyLevels),
      required: true,
    },
    quantifiedIngredients: [
      {
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: "Ingredient", // Reference the Ingredient model using ObjectId
        },
        quantity: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const RecipeModel = mongoose.model<RecipeDocument>("Recipe", recipesSchema);
export { RecipeModel, Categories, difficultyLevels, QuantifiedIngredient };
