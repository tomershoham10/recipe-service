import express from "express";
import { IngredientController } from "./controller.js";

const ingredientRouter = express.Router();

ingredientRouter
    .get("/:id", IngredientController.getById)
    .get("/", IngredientController.getMany);


ingredientRouter.post("/", IngredientController.create);

ingredientRouter.put("/:id", IngredientController.updateById);

ingredientRouter.delete("/:id", IngredientController.deleteById);

export default ingredientRouter;
