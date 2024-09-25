/////////////// RECIPES //////////////////

enum RecipeCategories {
    ITALIAN = "איטלקי",
    ASAIN = "אסייתי",
    INDIAN = "הודי",
    VEGAN = "טבעוני",
    VEGETERIAN = "צמחוני",
    SEAFOOD = "דגים",
    SALAD = "סלט",
    DINNER = "ארוחת ערב",
    DESSERT = "קינוח",
    COCKTAIL = "קוקטייל",
    SOUP = "מרק",
    BAKING = "אפייה",
}

enum DifficultyLevels {
    EASY = "קל",
    MEDIUM = "בינוני",
    ADVANCED = "למתקדמים",
}

enum Units {
    UNITS = "יח'",
    GRAMS = "גרם",
    KGS = "ק\"ג",
    ML = "מ\"ל",
    LITERS = "ליטר",
    TBLS = "כפות",
    SPOONS = "כפיות",
    CUPS = "כוסות",
    PINCH = "קמצוץ",
}

interface QuantifiedIngredient {
    ingredientId: string;
    quantity: number;
    unit: Units;
    index: number;
}

interface IngredientsSection {
    header: string;
    quantifiedIngredients: QuantifiedIngredient[];
    index: number;
}

interface StepsType {
    info: string;
    index: number
}

interface StepsSection {
    header: string;
    index: number;
    steps: StepsType[];
}

interface RecipeType {
    _id: string;
    name: string;
    description: string;
    picture: string;
    categories: RecipeCategories[];
    difficultyLevel: DifficultyLevels;
    ingredientsSections: IngredientsSection[];
    stepsSections: StepsSection[];
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
