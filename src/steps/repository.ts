import StepModel from "./model.js";

export default class StepRepository {
  static async createStep(step: StepType): Promise<StepType> {
    try {
      const newStep = await StepModel.create(step);
      return newStep;
    } catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`step repo - createStep: ${error}`);
    }
  }

  static async createSteps(steps: StepType[]): Promise<StepType[]> {
    try {
      const newSteps = await StepModel.insertMany(steps);
      return newSteps;
    } catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`step repo - createStep: ${error}`);
    }
  }

  static async getStepsByRecipeId(id: string): Promise<StepType[] | null> {
    try {
      const steps = await StepModel.find({ _id: id });
      return steps;
    } catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`step repo - getStepsByRecipeId: ${error}`);
    }
  }

  static async deleteStepById(stepId: string): Promise<StepType | null> {
    try {
      const status = await StepModel.findOneAndDelete({ _id: stepId });
      return status;
    } catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`step repo - deleteStepById: ${error}`);
    }
  }

  static async deleteByRecipeId(id: string): Promise<{ deletedCount: number }> {
    try {
      const status = await StepModel.deleteMany({ recipeId: id });
      return status;
    } catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`step repo - deleteByRecipeId: ${error}`);
    }
  }

  static async updateStepById(
    stepId: string,
    filedsToUpdate: Partial<StepType>
  ): Promise<StepType | null> {
    try { // console.log(recipeId, filedsToUpdate);
      const updatedStep = await StepModel.findByIdAndUpdate(
        stepId,
        filedsToUpdate,
        { new: true }
      );
      return updatedStep;
    }
    catch (error: any) {
      console.error('Repository Error:', error.message);
      throw new Error(`step repo - updateStepById: ${error}`);
    }
  }
}
