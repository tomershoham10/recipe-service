import Express from "express";
import { StepManager } from "./manager.js";

export default class StepController {
  static async createStep(req: Express.Request, res: Express.Response) {
    try {
      const body = req.body;
      const newStep = await StepManager.createStep(body);
      if (!!newStep) {
        return res.status(201).json({ message: "step created successfully", newStep });
      } else {
        throw new Error('steps controller create step error.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async createSteps(req: Express.Request, res: Express.Response) {
    try {
      const body = req.body;
      const newSteps = await StepManager.createSteps(body);
      if (!!newSteps) {
        return res.status(201).json({ message: "steps created successfully", newSteps });
      } else {
        throw new Error('steps controller create steps error.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getStepsByRecipeId(req: Express.Request, res: Express.Response) {
    try {
      const recipeId = req.query.id as string;
      const steps = await StepManager.getStepsByRecipeId(recipeId);
      if (!!!steps) {
        return res.status(404).json({ message: "steps not found" });
      }
      res.status(200).json({ steps });
    }
    catch (err) {
      console.error(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }

  static async deleteById(req: Express.Request, res: Express.Response) {
    try {
      const id = req.params.id as string;
      const status = await StepManager.deleteStepById(id);
      if (!!!status) {
        return res.status(404).json({ message: "step not found" });
      }
      res.status(200).json({ status });
    } catch (err) {
      console.log(err);
    }
  }

  static async updateById(req: Express.Request, res: Express.Response) {
    try {
      const id = req.params.id as string;
      const body = req.body as Partial<StepType>;
      const updatedStep = await StepManager.updateStepById(id, body);
      if (!!!updatedStep) {
        return res.status(404).json({ message: "step not found" });
      }

      res.status(200).json({ updatedStep });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
