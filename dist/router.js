import express from "express";
import ingredientRouter from "./ingridients/router.js";
import recipeRouter from "./recipe/router.js";
const router = express.Router();
router.get("/health", (_req, res) => {
    console.log("health");
    res.status(200).send("Alive");
});
router.use("/api/ingredients/", ingredientRouter);
router.use("/api/recipes/", recipeRouter);
export default router;
//# sourceMappingURL=router.js.map