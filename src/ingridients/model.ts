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

ingridientSchema.index({ pluralName: 1 }, { unique: true, partialFilterExpression: { pluralName: { $exists: true, $ne: null } } });

const IngredientModel = mongoose.model<IngredientType>(
  "Ingredient",
  ingridientSchema
);
export default IngredientModel;
