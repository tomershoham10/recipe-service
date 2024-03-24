/////////////// RECIPES //////////////////

enum RecipeCategories {
    "ITALIAN",
    "ASAIN",
    "INDIAN",
    "VEGAN",
    "SEAFOOD",
    "SALAD",
    "DINNER",
    "DESSERT",
}

enum difficultyLevels {
    "Easy",
    "Medium",
    "Advanced",
}

enum Units {
    "units",
    "grams",
    "kgs",
    "ML",
    "liters",
    "tbls",
    "spoons",
    "cups",
    "pinch",
}

interface QuantifiedIngredient {
    ingredientId: string;
    quantity: number;
    unit: Units;
}

interface RecipeType {
    _id: string;
    name: string;
    description: string;
    img: string;
    categories: Categories[];
    difficultyLevel: difficultyLevels;
    quantifiedIngredients: QuantifiedIngredient[];
}

/////////////// STEPS //////////////////

interface StepType {
    _id: string;
    duration: number;
    data: string;
    img: string;
}

//////////// INGREDIENT ///////////////

enum IngredientCategories {
    "CHICKEN",
    "MEAT",
    "VEGAN",
    "VEGETABLE",
    "DAIRY",
    "SEAFOOD",
    "FRUIT",
    "GRAINS",
    "SPICES",
    "SAUCES",
}

enum Shops {
    "GROCERY",
    "DELI",
    "FARMERS_MARKET",
    "SUPERMARKET",
    "BUTCHER_SHOP",
    "FISH_MARKET",
    "HEALTH_STORE",
}

interface IngredientType {
    _id: string;
    name: string;
    averagedPrice: number;
    category: IngredientCategories[];
    whereToFind: Shops[];
};

