import express from "express";
import { RecipeController } from "./controller.js";

const recipeRouter = express.Router();

recipeRouter.get("/", RecipeController.getMany);

recipeRouter.get("/:id", RecipeController.getById);

recipeRouter.post("/", RecipeController.create);

recipeRouter.put("/:id", RecipeController.updateById);

recipeRouter.delete("/:id", RecipeController.deleteById);

export default recipeRouter;
