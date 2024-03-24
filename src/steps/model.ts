import mongoose, { Types } from "mongoose";


const stepsSchema = new mongoose.Schema(
  {
    recipeId: {
      type: Types.ObjectId,
      required: true,
      ref: "Recipe",
      index: true,
    },
    duration: { type: Number },
    data: { type: String, required: true, minLength: 5 },
    img: { type: String },
  },
  { timestamps: true }
);

stepsSchema.index({ recipeId: 1 });

const StepModel = mongoose.model<StepType>("Step", stepsSchema);

export default StepModel;