import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Coffee, Snowflake, Heart, TrendingDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Low-Calorie Starbucks Recipes | Starbucks Nutrition Guide",
  description:
    "Discover healthy Starbucks drink recipes with our nutrition guide. Learn to calculate calories and find low-calorie alternatives, including Starbucks oat milk options.",
  keywords:
    "low calorie starbucks drinks, healthy starbucks recipes, starbucks oat milk calories, starbucks nutrition guide, calculate starbucks calories",
}

const recipes = [
  {
    id: "skinny-vanilla-latte",
    name: "Skinny Vanilla Latte",
    calories: 120,
    fat: 0.5,
    carbs: 18,
    protein: 12,
    description: "Perfect low-calorie option using our starbucks calorie calculator recommendations",
    ingredients: ["Grande Caffè Latte", "Nonfat milk", "2 pumps sugar-free vanilla syrup", "No whipped cream"],
    tips: "This recipe reduces calories by 40% compared to regular vanilla latte. Use our starbucks calorie calculator to customize further.",
    icon: Coffee,
    category: "Hot Drinks",
    healthScore: 85,
  },
  {
    id: "iced-coffee-light",
    name: "Light Iced Coffee with Oat Milk",
    calories: 60,
    fat: 1,
    carbs: 8,
    protein: 2,
    description: "Refreshing low-calorie option featuring starbucks oat milk calories optimization",
    ingredients: ["Grande iced coffee", "Oat milk (instead of regular milk)", "1 pump vanilla syrup", "Extra ice"],
    tips: "Switching to oat milk saves calories while maintaining creaminess. Calculate starbucks oat milk calories vs other options.",
    icon: Snowflake,
    category: "Cold Drinks",
    healthScore: 90,
  },
  {
    id: "green-tea-latte-light",
    name: "Light Green Tea Latte",
    calories: 130,
    fat: 2,
    carbs: 20,
    protein: 8,
    description: "Antioxidant-rich option optimized with our starbucks nutrition calculator",
    ingredients: ["Grande Green Tea Latte", "Almond milk", "Half sweetener", "No whipped cream"],
    tips: "Green tea provides antioxidants with fewer calories. Use our starbucks drink calorie calculator to adjust sweetness.",
    icon: Coffee,
    category: "Hot Drinks",
    healthScore: 88,
  },
  {
    id: "cold-brew-protein",
    name: "Protein-Packed Cold Brew",
    calories: 95,
    fat: 1.5,
    carbs: 6,
    protein: 15,
    description: "High-protein, low-calorie drink perfect for fitness goals",
    ingredients: ["Grande cold brew", "Soy milk", "1 pump sugar-free vanilla", "Cinnamon powder"],
    tips: "Soy milk adds protein while keeping calories low. Perfect for post-workout when you calculate starbucks drink calories.",
    icon: Snowflake,
    category: "Cold Drinks",
    healthScore: 92,
  },
  {
    id: "chai-tea-light",
    name: "Spiced Chai Tea Latte Light",
    calories: 140,
    fat: 2,
    carbs: 22,
    protein: 6,
    description: "Warming spices with reduced calories using smart substitutions",
    ingredients: ["Grande Chai Tea Latte", "Coconut milk", "2 pumps chai concentrate", "Cinnamon on top"],
    tips: "Coconut milk provides richness with fewer calories than whole milk. Great for calculating calories in starbucks drink variations.",
    icon: Coffee,
    category: "Hot Drinks",
    healthScore: 80,
  },
  {
    id: "refresher-light",
    name: "Light Strawberry Refresher",
    calories: 50,
    fat: 0,
    carbs: 13,
    protein: 0,
    description: "Fruity, refreshing drink with minimal calories",
    ingredients: ["Grande Strawberry Açaí Refresher", "Water instead of lemonade", "Light ice", "Fresh strawberries"],
    tips: "Choosing water over lemonade cuts calories in half. Perfect summer drink when using our calorie calculator for starbucks drinks.",
    icon: Snowflake,
    category: "Refreshers",
    healthScore: 95,
  },
]

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
              ← Back to Starbucks Calorie Calculator
            </Link>
            <Badge variant="secondary">Healthy Recipes</Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Low-Calorie Starbucks Drink Recipes</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover delicious ways to enjoy your favorite Starbucks drinks with fewer calories. Each recipe is
            optimized using our <strong>starbucks calorie calculator</strong> and can help you
            <strong>calculate starbucks drink calories</strong> more effectively. Perfect for exploring
            <strong>st arbucks oat milk calories</strong> and other healthy alternatives.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{recipes.length}</div>
              <div className="text-sm text-gray-600">Healthy Recipes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {Math.round(recipes.reduce((acc, recipe) => acc + recipe.calories, 0) / recipes.length)}
              </div>
              <div className="text-sm text-gray-600">Avg Calories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {Math.round(recipes.reduce((acc, recipe) => acc + recipe.healthScore, 0) / recipes.length)}
              </div>
              <div className="text-sm text-gray-600">Health Score</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">50%</div>
              <div className="text-sm text-gray-600">Calorie Reduction</div>
            </CardContent>
          </Card>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recipes.map((recipe) => {
            const Icon = recipe.icon
            return (
              <Card key={recipe.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {recipe.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {recipe.calories} cal
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{recipe.name}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{recipe.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Nutrition Info */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                      <div className="font-bold text-orange-600">{recipe.fat}g</div>
                      <div className="text-gray-500">Fat</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <div className="font-bold text-blue-600">{recipe.carbs}g</div>
                      <div className="text-gray-500">Carbs</div>
                    </div>
                    <div className="text-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                      <div className="font-bold text-purple-600">{recipe.protein}g</div>
                      <div className="text-gray-500">Protein</div>
                    </div>
                  </div>

                  {/* Health Score */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Health Score</span>
                      <span className="text-sm font-bold text-green-600">{recipe.healthScore}/100</span>
                    </div>
                    <Progress value={recipe.healthScore} className="h-2" />
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="font-medium text-sm mb-2 flex items-center">
                      <Heart className="w-3 h-3 mr-1 text-red-500" />
                      Ingredients:
                    </h4>
                    <ul className="text-sm space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <TrendingDown className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-blue-700 dark:text-blue-300">{recipe.tips}</p>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/">Load in Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tips Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pro Tips for Using Our Starbucks Nutrition Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-green-600">
                  How to calculate starbucks oat milk calories effectively
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  When using our <strong>starbucks calorie calculator</strong>, compare oat milk with other
                  alternatives.
                  <strong>Starbucks oat milk calories</strong> are typically 15 calories per serving, making it a
                  moderate choice between almond milk (5 cal) and whole milk (20 cal).
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-600">
                  Best practices to calculate starbucks drink calories
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Our <strong>starbucks drink calorie calculator</strong> accounts for size multipliers. When you{" "}
                  <strong>calculate calories in starbucks drink</strong> options, remember that Grande drinks are 1.33x
                  the base calories, while Venti drinks are 1.67x.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-600">
                  Using the calorie calculator for starbucks drinks strategically
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  The <strong>calorie calculator starbucks</strong> tool works best when you experiment with different
                  combinations. Try sugar-free syrups, alternative milks, and smaller sizes to optimize your drink's
                  nutritional profile.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-600">
                  Maximizing your starbucks calories calculator results
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Our <strong>starbucks calories calculator</strong> provides real-time feedback. Use the smart tips
                  feature to discover how small changes can significantly impact your total{" "}
                  <strong>calculate starbucks calories</strong> count.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Calculate Starbucks Calories?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Use our advanced <strong>starbucks calorie calculator</strong> to create your perfect drink. Whether you
              want to <strong>calculate starbucks drink calories</strong> or explore
              <strong>starbucks oat milk calories</strong>, our tool provides instant, accurate results.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/">Start Calculating Now →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
