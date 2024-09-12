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

interface RecipeIngredients {
    header: string;
    quantifiedIngredients: QuantifiedIngredient[];
}


interface RecipeType {
    _id: string;
    name: string;
    description: string;
    img: string;
    categories: Categories[];
    difficultyLevel: difficultyLevels;
    ingredients: RecipeIngredients[];
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
    CHICKEN = "chicken",
    MEAT = "meat",
    VEGAN = "vegan",
    VEGETABLE = "vegetable",
    DAIRY = "dairy",
    SEAFOOD = "seafood",
    FRUIT = "fruit",
    GRAINS = "grains",
    SPICES = "spices",
    SAUCES = "sauces",
}

enum Shops {
    GROCERY = "grocery",
    DELI = "deli",
    FARMERS_MARKET = "farmersMarket",
    SUPERMARKET = "supermarket",
    BUTCHER_SHOP = "butcherShop",
    FISH_MARKET = "fishMarket",
    HEALTH_STORE = "healthStore",
}

interface IngredientType {
    _id: string;
    name: string;
    averagedPrice: number;
    categories: IngredientCategories[];
    whereToFind: Shops[];
};

