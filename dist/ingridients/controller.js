import { IngredientManager } from "./manager.js";
export class IngredientController {
    static async create(req, res) {
        try {
            const body = req.body;
            const newIngredient = await IngredientManager.createIngredient(body);
            if (!!newIngredient) {
                return res.status(201).json({ message: "Ingredient created successfully", newIngredient });
            }
            else {
                throw new Error('Ingredient controller create Ingredient error.');
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ err: "Internal Server Error" });
        }
    }
    static async getMany(_req, res) {
        try {
            const ingredients = await IngredientManager.getMany();
            if (!!!ingredients) {
                return res.status(404).json({ message: "ingredients not found" });
            }
            res.status(200).json({ ingredients });
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
            if (!!!ingredient) {
                return res.status(404).json({ message: "ingredient not found" });
            }
            res.status(200).json({ ingredient });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ err: "Internal Server Error" });
        }
    }
    static async deleteById(req, res) {
        try {
            const id = req.params.id;
            const status = await IngredientManager.deleteIngredientById(id);
            if (!!!status) {
                return res.status(404).json({ message: "ingredient not found" });
            }
            res.status(200).json({ status });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    static async updateById(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;
            //   console.log(id, req.body);
            const updatedIngredient = await IngredientManager.updateIngredientById(id, body);
            if (!!!updatedIngredient) {
                return res.status(404).json({ message: "ingredient not found" });
            }
            res.status(200).json({ updatedIngredient });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
//# sourceMappingURL=controller.js.map