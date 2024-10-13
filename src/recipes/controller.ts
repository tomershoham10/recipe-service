import Express from "express";
import { RecipeManager } from "./manager.js";

export class RecipeController {
  static async create(req: Express.Request, res: Express.Response) {
    try {
      const body = req.body;
      console.log('RecipeController create - body', body)
      const recipe = await RecipeManager.createRecipe(body);
      if (recipe) {
        return res.status(201).json({ message: "Recipe created successfully", recipe });
      } else {
        throw new Error('Recipe controller create Recipe error.');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getMany(_req: Express.Request, res: Express.Response) {
    try {
      const recipes = await RecipeManager.getMany();

      if (!recipes) {
        return res.status(404).json({ message: "recipes not found" });
      }
      res.status(200).json({ recipes });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }

  static async getPaginatedRecipes(req: Express.Request, res: Express.Response) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const pageNum = Number(page);
      const limitNum = Number(limit);

      // Call the manager to handle the business logic
      const { recipes, hasMore, totalRecipes } = await RecipeManager.getPaginatedRecipes(pageNum, limitNum);

      // Send the response
      res.status(200).json({
        recipes,
        hasMore,
        totalRecipes,
        currentPage: pageNum,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }

  static async getById(req: Express.Request, res: Express.Response) {
    try {
      const id = req.params.id;
      console.log('recipe controller - getById: id - ', id);

      const recipe = await RecipeManager.getRecipeById(id);
      console.log('recipe controller - getById: recipe - ', recipe);
      if (!recipe) {
        return res.status(404).json({ message: "recipe not found" });
      }
      res.status(200).json({ recipe });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteById(req: Express.Request, res: Express.Response) {
    try {
      const id = req.params.id;
      const status = await RecipeManager.deleteRecipeById(id);
      if (!status) {
        return res.status(404).json({ message: "recipe not found" });
      }
      res.status(200).json({ status });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async updateById(req: Express.Request, res: Express.Response) {
    try {
      const id = req.params.id;
      const body = req.body;
      const updatedRecipe = await RecipeManager.updateRecipeById(id, body);
      if (!updatedRecipe) {
        return res.status(404).json({ message: "recipe not found" });
      }

      res.status(200).json({ updatedRecipe });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
