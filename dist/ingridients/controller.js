import { IngredientManager } from "./manager.js";
export class IngredientController {
    static async create(req, res) {
        try {
            const body = req.body;
            const ingredient = await IngredientManager.createIngredient(body);
            res.json(ingredient);
        }
        catch (err) {
            console.log(err);
        }
    }
    static async getMany(_req, res) {
        try {
            const ingredients = await IngredientManager.getMany();
            res.json(ingredients);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ err: "Internal Server Error" });
        }
    }
    static async getById(req, res) {
        try {
            const id = req.params.id;
            const ingredient = await IngredientManager.getIngredientById(id);
            !ingredient ? console.log("not found") : res.json(ingredient);
        }
        catch (err) {
            console.log(err);
        }
    }
    static async deleteById(req, res) {
        try {
            const id = req.params.id;
            const status = await IngredientManager.deleteIngredientById(id);
            res.json(status);
        }
        catch (err) {
            console.log(err);
        }
    }
    static async updateById(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;
            //   console.log(id, req.body);
            const ingredient = await IngredientManager.updateIngredientById(id, body);
            res.json(ingredient);
        }
        catch (err) {
            console.log(err);
        }
    }
}
//# sourceMappingURL=controller.js.map