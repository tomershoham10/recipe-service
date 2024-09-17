import mongoose, { Schema } from "mongoose";

enum RecipeCategories {
  ITALIAN = "italian",
  ASAIN = "asain",
  INDIAN = "indian",
  VEGAN = "vegan",
  SEAFOOD = "seafood",
  SALAD = "salad",
  DINNER = "dinner",
  DESSERT = "desset",
}

enum difficultyLevels {
  EASY = "easy",
  MEDIUM = "medium",
  ADVANCED = "advanced",
}

const recipesSchema: Schema = new Schema<RecipeType>(
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
    ingredientsSections: [
      {
        header: { type: String, required: true },
        quantifiedIngredients: [
          {
            ingredientId: {
              type: Schema.Types.ObjectId,
              ref: "Ingredient",
              required: true,
            },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
            index: { type: Number, required: true }
          },
        ],
        index: { type: Number, required: true }
      },
    ],
  },
  { timestamps: true }
);

const RecipeModel = mongoose.model<RecipeType>("Recipe", recipesSchema);
export default RecipeModel;