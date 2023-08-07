import express from "express";
import ingredientRouter from "./ingridients/router.js";
const router = express.Router();
router.get("/health", (_req, res) => {
    console.log("health");
    res.status(200).send("Alive");
});
router.use("/api/ingredients", ingredientRouter);
export default router;
//# sourceMappingURL=router.js.map