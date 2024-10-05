import express from "express";
import { RecipeController } from "./controller.js";

const recipeRouter = express.Router();

recipeRouter
    .get("/infinite-scroll", RecipeController.getPaginatedRecipes)
    .get("/:id", RecipeController.getById)
    .get("/", RecipeController.getMany);

recipeRouter.post("/", RecipeController.create);

recipeRouter.put("/:id", RecipeController.updateById);

recipeRouter.delete("/:id", RecipeController.deleteById);

export default recipeRouter;
