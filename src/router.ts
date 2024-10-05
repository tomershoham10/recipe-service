import express, { Router } from "express";
import Express from "express";
import ingredientRouter from "./ingredients/router.js";
import recipeRouter from "./recipes/router.js";
import searchRouter from "./search/router.js";

const router: Router = express.Router();

router.get("/health", (_req: Express.Request, res: Express.Response) => {
  console.log("health");
  res.status(200).send("Alive");
});

router.use("/api/ingredients/", ingredientRouter);
router.use("/api/recipes/", recipeRouter);
router.use("/api/search/", searchRouter);

export default router;
