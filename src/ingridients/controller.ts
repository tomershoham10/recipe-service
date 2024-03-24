import Express from "express";
import { IngredientManager } from "./manager.js";

export class IngredientController {
  static async create(req: Express.Request, res: Express.Response) {
    try {
      const body = req.body;
      const newIngredient = await IngredientManager.createIngredient(body);
      if (!!newIngredient) {
        return res.status(201).json({ message: "Ingredient created successfully", newIngredient });
      } else {
        throw new Error('Ingredient controller create Ingredient error.');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }

  static async getMany(_req: Express.Request, res: Express.Response) {
    try {
      const ingredients: IngredientType[] = await IngredientManager.getMany();
      if (!!!ingredients) {
        return res.status(404).json({ message: "ingredients not found" });
      }
      res.status(200).json({ ingredients });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }

  static async getById(req: Express.Request, res: Express.Response) {
    try {
      const id: string = req.params.id;
      const ingredient = await IngredientManager.getIngredientById(id);
      if (!!!ingredient) {
        return res.status(404).json({ message: "ingredient not found" });
      }
      res.status(200).json({ ingredient });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }

  static async deleteById(req: Express.Request, res: Express.Response) {
    try {
      const id = req.params.id as string;
      const status = await IngredientManager.deleteIngredientById(id);
      if (!!!status) {
        return res.status(404).json({ message: "ingredient not found" });
      }
      res.status(200).json({ status });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async updateById(req: Express.Request, res: Express.Response) {
    try {
      const id: string = req.params.id;
      const body: Partial<IngredientType> = req.body;
      //   console.log(id, req.body);
      const updatedIngredient = await IngredientManager.updateIngredientById(id, body);
      if (!!!updatedIngredient) {
        return res.status(404).json({ message: "ingredient not found" });
      }

      res.status(200).json({ updatedIngredient });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
