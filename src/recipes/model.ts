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
  MEAT = 'בשרי',
}

enum DifficultyLevels {
  EASY = "קל",
  MEDIUM = "בינוני",
  ADVANCED = "למתקדמים",
}

enum Units {
  UNITS = "יח'",
  GRAMS = "גרם",
  KGS = "ק\"ג",
  ML = "מ\"ל",
  LITERS = "ליטר",
  TBLS = "כפות",
  SPOONS = "כפיות",
  CUPS = "כוסות",
  PINCH = "קמצוץ",
  BUNCH = "צרור",
  HANDFUL = 'חופן',
  SLICES = 'פרוסות',
  PACKS = 'חבילות',
  CONE = 'גביע',
  FEW = 'מעט',
  SCRAPING = 'גרידה'
}


const recipesSchema: Schema = new Schema<RecipeType>(
  {
    name: { type: String, required: true, unique: true, minlength: 3 },

    description: { type: String, required: false },

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

    source: { type: String, required: false },

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
            quantity: { type: Number, required: false },
            comment: { type: String, required: false },
            unit: { type: String, enum: Object.values(Units), required: false },
            index: { type: Number, required: true },
            _id: false
          },

        ],
        index: { type: Number, required: true },
        _id: false
      },
    ],

    stepsSections: [
      {
        header: { type: String, required: true },
        steps: [
          {
            info: { type: String, required: true },
            index: { type: Number, required: true },
            _id: false
          },
        ],
        index: { type: Number, required: true },
        _id: false

      },
    ],
  },
  { timestamps: true }
);

const RecipeModel = mongoose.model<RecipeType>("Recipe", recipesSchema);
export default RecipeModel;