import Express from "express";
import { IngredientManager } from "./manager.js";
import { Categories, Shops } from "./model.js";
import mongoose from "mongoose";
type IngredientType = {
  name: string;
  averagedPrice: number;
  category: Categories;
  whereToFind: Shops[];
};

export class IngredientController {
  static async create(req: Express.Request, res: Express.Response) {
    try {
      const body = req.body;
      const ingredient: IngredientType =
        await IngredientManager.createIngredient(body);
      res.json(ingredient);
    } catch (err) {
      console.log(err);
    }
  }

  static async getMany(_req: Express.Request, res: Express.Response) {
    try {
      const ingredients: IngredientType[] = await IngredientManager.getMany();
      res.json(ingredients);
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }

  static async getById(req: Express.Request, res: Express.Response) {
    try {
      const id: string = req.params.id;
      const ingredient: IngredientType | null =
        await IngredientManager.getIngredientById(id);
      !ingredient ? console.log("not found") : res.json(ingredient);
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteById(req: Express.Request, res: Express.Response) {
    try {
      const id: mongoose.Types.ObjectId = req.params.id;
      const status = await IngredientManager.deleteIngredientById(id);
      res.json(status);
    } catch (err) {
      console.log(err);
    }
  }

  static async updateById(req: Express.Request, res: Express.Response) {
    try {
      const id: mongoose.Types.ObjectId = req.params.id;
      const body: Partial<IngredientType> = req.body;
      //   console.log(id, req.body);
      const ingredient = await IngredientManager.updateIngredientById(id, body);
      res.json(ingredient);
    } catch (err) {
      console.log(err);
    }
  }
}
