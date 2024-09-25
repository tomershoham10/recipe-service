import mongoose, { Schema } from "mongoose";

enum RecipeCategories {
  ITALIAN = "איטלקי",
  ASAIN = "אסייתי",
  INDIAN = "הודי",
  VEGAN = "טבעוני",
  VEGETERIAN = "צמחוני",
  SEAFOOD = "דגים",
  SALAD = "סלט",
  DINNER = "ארוחת ערב",
  DESSERT = "קינוח",
  COCKTAIL = "קוקטייל",
  SOUP = "מרק",
  BAKING = "אפייה",
}

enum DifficultyLevels {
  EASY = "קל",
  MEDIUM = "בינוני",
  ADVANCED = "למתקדמים",
}

const recipesSchema: Schema = new Schema<RecipeType>(
  {
    name: { type: String, required: true, unique: true, minlength: 3 },

    description: { type: String, required: true, minlength: 5 },

    picture: { type: String, required: true, minlength: 5 },

    categories: [{
      type: String,
      enum: Object.values(RecipeCategories),
      required: true,
    }],

    difficultyLevel: {
      type: String,
      enum: Object.values(DifficultyLevels),
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

    stepsSections: [
      {
        header: { type: String, required: true },
        quantifiedIngredients: [
          {
            quantity: { type: String, required: true },
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