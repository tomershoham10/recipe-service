import express from "express";
import { SearchController } from "./controller.js";

const searchRouter = express.Router();

searchRouter.get("/", SearchController.search);

export default searchRouter;
