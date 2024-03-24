import StepRepository from "./repository.js";


export class StepManager {
  static async createStep(body: StepType): Promise<StepType> {
    try {
      const newStep = await StepRepository.createStep(body);
      return newStep;
    } catch (error: any) {
      console.error('Manager Error [createStep]:', error.message);
      throw new Error('Error in createStep');
    }
  }

  static async createSteps(body: StepType[]): Promise<StepType[]> {
    try {
      const newSteps = await StepRepository.createSteps(body);
      return newSteps;
    } catch (error: any) {
      console.error('Manager Error [createSteps]:', error.message);
      throw new Error('Error in createSteps');
    }
  }

  static async getStepsByRecipeId(recipeId: string): Promise<StepType[] | null> {
    try {
      const steps = await StepRepository.getStepsByRecipeId(recipeId);
      return steps;
    } catch (error: any) {
      console.error('Manager Error [getStepsByRecipeId]:', error.message);
      throw new Error('Error in getStepsByRecipeId');
    }
  }

  static async deleteStepById(stepId: string): Promise<StepType | null> {
    try {
      const status = await StepRepository.deleteStepById(stepId);
      return status;
    } catch (error: any) {
      console.error('Manager Error [deleteStepById]:', error.message);
      throw new Error('Error in deleteStepById');
    }
  }

  static async deleteByRecipeId(
    recipeId: string
  ): Promise<{ deletedCount: number }> {
    try {
      const status = await StepRepository.deleteByRecipeId(recipeId);
      return status;
    } catch (error: any) {
      console.error('Manager Error [deleteByRecipeId]:', error.message);
      throw new Error('Error in deleteByRecipeId');
    }
  }

  // add validations that the fields to update do not equal to the current fields in the DB
  static async updateStepById(
    id: string,
    filedsToUpdate: Partial<StepType>
  ): Promise<StepType | null> {
    try { // console.log(id, filedsToUpdate);
      const updatedStep = await StepRepository.updateStepById(id, filedsToUpdate);
      return updatedStep;
    } catch (error: any) {
      console.error('Manager Error [updateStepById]:', error.message);
      throw new Error('Error in updateStepById');
    }
  }
}
