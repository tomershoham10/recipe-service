import mongoose, { Schema } from "mongoose";

enum IngredientCategories {
  CHICKEN = 'עוף',
  MEAT = 'בשרי',
  VEGAN = 'טבעוני',
  VEGETERIAN = 'צמחוני',
  VEGETABLES = 'ירקות',
  FRUITS = 'פירות',
  DAIRY = 'חלבי',
  CHEESE = 'גבינה',
  SEAFOOD = 'מאכלי ים',
  GRAINS = 'דגנים',
  SPICES = 'תבלינים',
  SAUCES = 'רטבים',
  HERBS = 'עשבי תיבול',
  ALCOHOL = 'אלכוהול',
  TOOLS = 'כלי עזר',
  SPREADS = 'ממרחים',
  SOFT_DRINKS = 'משקאות קלים',
  ASAIAN = 'אסייתי',
  NUTS = 'אגוזים',
  BAKING = 'אפייה'
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
