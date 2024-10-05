import mongoose, { Schema } from "mongoose";

enum IngredientCategories {
  CHICKEN = 'chicken',
  MEAT = 'meat',
  VEGAN = 'vegan',
  VEGETERIAN = 'vegeterian',
  VEGETABLES = 'vegetables',
  FRUITS = 'fruits',
  DAIRY = 'dairy',
  SEAFOOD = 'seafood',
  GRAINS = 'grains',
  SPICES = 'spices',
  SAUCES = 'sauces',
  ALCOHOL = 'alcohol',
}

const ingredientSchema: Schema = new Schema<IngredientType>(
  {
    name: { type: String, required: true, unique: true, minlength: 1 },
    pluralName: { type: String, required: false, minlength: 1 },
    categories: [{
      type: String,
      enum: Object.values(IngredientCategories),
      required: false,
    }],
  },
  { timestamps: true }
);

ingredientSchema.index(
  { pluralName: 1 },
  { unique: true, partialFilterExpression: { pluralName: { $exists: true } } }
);

const IngredientModel = mongoose.model<IngredientType>(
  "Ingredient",
  ingredientSchema
);
export default IngredientModel;
