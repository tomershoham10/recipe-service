import express from "express";
import StepController from "./controller.js";

const StepsRouter = express.Router();

StepsRouter
    .get("/getStepsByRecipeId", StepController.getStepsByRecipeId)


StepsRouter
    .post("/createSteps", StepController.createSteps)
    .post("/", StepController.createStep);

StepsRouter
    .put("/:id", StepController.updateById);

StepsRouter.delete("/:id", StepController.deleteById);

export default StepsRouter;
