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
    comment?: string;
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
    source?: string;
    ingredientsSections: IngredientsSection[];
    stepsSections: StepsSection[];
    createdAt: Date;
}

//////////// INGREDIENT ///////////////

enum IngredientCategories {
    CHICKEN = 'עוף',
    MEAT = 'בשרי',
    VEGAN = 'טבעוני',
    VEGETERIAN = 'צמחוני',
    VEGETABLES = 'ירקות',
    FRUITS = 'פירות',
    DAIRY = 'חלבי',
    SEAFOOD = 'מאכלי ים',
    GRAINS = 'דגנים',
    SPICES = 'תבלינים',
    SAUCES = 'ממרחים',
    HERBS = 'עשבי תיבול',
    ALCOHOL = 'אלכוהול',
}

interface IngredientType {
    _id: string;
    name: string;
    pluralName?: string;
    categories: IngredientCategories[];
};
