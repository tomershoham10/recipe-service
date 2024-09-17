/////////////// RECIPES //////////////////

enum RecipeCategories {
    ITALIAN = "italian",
    ASAIN = "asain",
    INDIAN = "indian",
    VEGAN = "vegan",
    SEAFOOD = "seafood",
    SALAD = "salad",
    DINNER = "dinner",
    DESSERT = "desset",
}

enum difficultyLevels {
    EASY = "easy",
    MEDIUM = "medium",
    ADVANCED = "advanced",
}

enum Units {
    UNITS = "units",
    GRAMS = "grams",
    KGS = "kgs",
    ML = "ml",
    LITERS = "liters",
    TBLS = "tbls",
    SPOONS = "spoons",
    CUPS = "cups",
    PINCH = "pinch",
}

interface QuantifiedIngredient {
    ingredientId: string;
    quantity: number;
    unit: Units;
    index: number;
}

interface ingredientsSection {
    header: string;
    quantifiedIngredients: QuantifiedIngredient[];
    index: number;
}

interface RecipeType {
    _id: string;
    name: string;
    description: string;
    img: string;
    categories: RecipeCategories[];
    difficultyLevel: difficultyLevels;
    ingredientsSections: ingredientsSection[];
    steps: string[];
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
    CHICKEN = 'chicken',
    MEAT = 'meat',
    VEGAN = 'vegan',
    VEGETERIAN = 'vegeterian',
    VEGETABLES = 'vegetables',
    FRUITS = 'fruits',
    DAIRY = 'dairy',
    SEAFOOD = 'seafood',
    GRAINS = 'grains',
    SPICES = 'spices',
    SAUCES = 'sauces',
    ALCOHOL = 'alcohol',
}

interface IngredientType {
    _id: string;
    name: string;
    pluralName?: string;
    categories: IngredientCategories[];
};

