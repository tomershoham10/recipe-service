import mongoose, { Schema } from "mongoose";

enum RecipeCategories {
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

const recipesSchema: Schema = new Schema(
  {
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
  },
  { timestamps: true }
);

const RecipeModel = mongoose.model<RecipeType>("Recipe", recipesSchema);
export default RecipeModel;