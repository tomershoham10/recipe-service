import express from "express";
import { IngredientController } from "./controller.js";
const ingredientRouter = express.Router();
ingredientRouter.get("/", IngredientController.getMany);
ingredientRouter.get("/:id", IngredientController.getById);
ingredientRouter.post("/", IngredientController.create);
ingredientRouter.put("/:id", IngredientController.updateById);
ingredientRouter.delete("/:id", IngredientController.deleteById);
export default ingredientRouter;
//# sourceMappingURL=router.js.map