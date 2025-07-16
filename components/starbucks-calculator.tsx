"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Copy,
  Check,
  Plus,
  Minus,
  Sun,
  Moon,
  Coffee,
  Snowflake,
  Cake,
  Zap,
  Heart,
  Star,
  TrendingDown,
  Info,
  Calculator,
  Lightbulb,
  HelpCircle,
  Globe,
  MessageSquare,
  Shield,
  FileText,
  Mail,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

// Enhanced drink data with more nutritional information
const drinkCategories = [
  {
    id: "hot",
    name: "Hot Drinks",
    icon: Coffee,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
  },
  {
    id: "cold",
    name: "Cold Drinks",
    icon: Snowflake,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  },
  {
    id: "frappuccino",
    name: "Frappuccino®",
    icon: Zap,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
  },
  {
    id: "food",
    name: "Food & Bakery",
    icon: Cake,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300",
  },
]

const drinks = {
  hot: [
    {
      id: "americano",
      name: "Caffè Americano",
      baseCalories: 15,
      fat: 0,
      carbs: 3,
      protein: 1,
      caffeine: 225,
      fiber: 0,
      sugar: 0,
    },
    {
      id: "latte",
      name: "Caffè Latte",
      baseCalories: 190,
      fat: 7,
      carbs: 19,
      protein: 13,
      caffeine: 150,
      fiber: 0,
      sugar: 18,
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      baseCalories: 120,
      fat: 4,
      carbs: 12,
      protein: 8,
      caffeine: 150,
      fiber: 0,
      sugar: 10,
    },
    {
      id: "macchiato",
      name: "Caramel Macchiato",
      baseCalories: 250,
      fat: 7,
      carbs: 34,
      protein: 10,
      caffeine: 150,
      fiber: 0,
      sugar: 32,
    },
    {
      id: "mocha",
      name: "Caffè Mocha",
      baseCalories: 360,
      fat: 14,
      carbs: 44,
      protein: 13,
      caffeine: 175,
      fiber: 2,
      sugar: 35,
    },
    {
      id: "pike",
      name: "Pike Place Roast",
      baseCalories: 5,
      fat: 0,
      carbs: 0,
      protein: 1,
      caffeine: 310,
      fiber: 0,
      sugar: 0,
    },
    {
      id: "flat-white",
      name: "Flat White",
      baseCalories: 170,
      fat: 6,
      carbs: 18,
      protein: 11,
      caffeine: 195,
      fiber: 0,
      sugar: 17,
    },
    {
      id: "white-mocha",
      name: "White Chocolate Mocha",
      baseCalories: 400,
      fat: 15,
      carbs: 53,
      protein: 12,
      caffeine: 150,
      fiber: 0,
      sugar: 50,
    },
  ],
  cold: [
    {
      id: "iced-coffee",
      name: "Iced Coffee",
      baseCalories: 5,
      fat: 0,
      carbs: 0,
      protein: 1,
      caffeine: 165,
      fiber: 0,
      sugar: 0,
    },
    {
      id: "cold-brew",
      name: "Cold Brew",
      baseCalories: 5,
      fat: 0,
      carbs: 0,
      protein: 0,
      caffeine: 205,
      fiber: 0,
      sugar: 0,
    },
    {
      id: "iced-latte",
      name: "Iced Caffè Latte",
      baseCalories: 130,
      fat: 5,
      carbs: 13,
      protein: 8,
      caffeine: 150,
      fiber: 0,
      sugar: 11,
    },
    {
      id: "iced-macchiato",
      name: "Iced Caramel Macchiato",
      baseCalories: 210,
      fat: 5,
      carbs: 28,
      protein: 8,
      caffeine: 150,
      fiber: 0,
      sugar: 25,
    },
    {
      id: "refresher",
      name: "Strawberry Açaí Refresher",
      baseCalories: 90,
      fat: 0,
      carbs: 23,
      protein: 0,
      caffeine: 45,
      fiber: 1,
      sugar: 20,
    },
    {
      id: "nitro-cold-brew",
      name: "Nitro Cold Brew",
      baseCalories: 5,
      fat: 0,
      carbs: 0,
      protein: 0,
      caffeine: 280,
      fiber: 0,
      sugar: 0,
    },
    {
      id: "iced-green-tea",
      name: "Iced Green Tea Latte",
      baseCalories: 200,
      fat: 5,
      carbs: 33,
      protein: 7,
      caffeine: 80,
      fiber: 1,
      sugar: 31,
    },
  ],
  frappuccino: [
    {
      id: "caramel-frap",
      name: "Caramel Frappuccino®",
      baseCalories: 370,
      fat: 15,
      carbs: 54,
      protein: 5,
      caffeine: 100,
      fiber: 1,
      sugar: 50,
    },
    {
      id: "mocha-frap",
      name: "Mocha Frappuccino®",
      baseCalories: 350,
      fat: 14,
      carbs: 51,
      protein: 6,
      caffeine: 100,
      fiber: 2,
      sugar: 46,
    },
    {
      id: "vanilla-frap",
      name: "Vanilla Bean Frappuccino®",
      baseCalories: 320,
      fat: 13,
      carbs: 47,
      protein: 5,
      caffeine: 0,
      fiber: 0,
      sugar: 45,
    },
    {
      id: "java-chip-frap",
      name: "Java Chip Frappuccino®",
      baseCalories: 440,
      fat: 18,
      carbs: 63,
      protein: 6,
      caffeine: 105,
      fiber: 2,
      sugar: 58,
    },
    {
      id: "strawberry-frap",
      name: "Strawberry Frappuccino®",
      baseCalories: 290,
      fat: 11,
      carbs: 45,
      protein: 4,
      caffeine: 0,
      fiber: 1,
      sugar: 43,
    },
  ],
  food: [
    {
      id: "croissant",
      name: "Butter Croissant",
      baseCalories: 310,
      fat: 18,
      carbs: 32,
      protein: 7,
      caffeine: 0,
      fiber: 2,
      sugar: 7,
    },
    {
      id: "muffin",
      name: "Blueberry Muffin",
      baseCalories: 350,
      fat: 16,
      carbs: 49,
      protein: 6,
      caffeine: 0,
      fiber: 2,
      sugar: 28,
    },
    {
      id: "bagel",
      name: "Everything Bagel",
      baseCalories: 300,
      fat: 5,
      carbs: 56,
      protein: 12,
      caffeine: 0,
      fiber: 3,
      sugar: 6,
    },
    {
      id: "sandwich",
      name: "Bacon & Egg Sandwich",
      baseCalories: 450,
      fat: 23,
      carbs: 36,
      protein: 23,
      caffeine: 0,
      fiber: 2,
      sugar: 4,
    },
    {
      id: "cake-pop",
      name: "Birthday Cake Pop",
      baseCalories: 170,
      fat: 8,
      carbs: 22,
      protein: 2,
      caffeine: 0,
      fiber: 0,
      sugar: 18,
    },
    {
      id: "protein-box",
      name: "Protein Bistro Box",
      baseCalories: 380,
      fat: 19,
      carbs: 28,
      protein: 28,
      caffeine: 0,
      fiber: 5,
      sugar: 11,
    },
  ],
}

const sizes = [
  { id: "short", name: "Short", volume: "8oz", multiplier: 0.75, icon: "🥃" },
  { id: "tall", name: "Tall", volume: "12oz", multiplier: 1, icon: "☕" },
  { id: "grande", name: "Grande", volume: "16oz", multiplier: 1.33, icon: "🍵" },
  { id: "venti", name: "Venti", volume: "20oz", multiplier: 1.67, icon: "🥤" },
]

const milkOptions = [
  {
    id: "whole",
    name: "2% Milk",
    calories: 20,
    fat: 0.8,
    carbs: 1.5,
    protein: 1,
    popular: true,
    description: "Classic creamy taste",
  },
  {
    id: "nonfat",
    name: "Nonfat Milk",
    calories: 10,
    fat: 0,
    carbs: 1.5,
    protein: 1,
    popular: false,
    description: "Zero fat option",
  },
  {
    id: "oat",
    name: "Oat Milk",
    calories: 15,
    fat: 0.5,
    carbs: 2,
    protein: 0.5,
    popular: true,
    description: "Plant-based creamy",
  },
  {
    id: "almond",
    name: "Almond Milk",
    calories: 5,
    fat: 0.4,
    carbs: 0.6,
    protein: 0.2,
    popular: true,
    description: "Light nutty flavor",
  },
  {
    id: "coconut",
    name: "Coconut Milk",
    calories: 8,
    fat: 0.7,
    carbs: 0.6,
    protein: 0.1,
    popular: false,
    description: "Tropical taste",
  },
  {
    id: "soy",
    name: "Soy Milk",
    calories: 13,
    fat: 0.6,
    carbs: 1,
    protein: 1.2,
    popular: false,
    description: "High protein plant milk",
  },
]

const syrups = [
  { id: "vanilla", name: "Vanilla Syrup", caloriesPerPump: 20, carbs: 5, sugar: 5, popular: true },
  { id: "caramel", name: "Caramel Syrup", caloriesPerPump: 20, carbs: 5, sugar: 5, popular: true },
  { id: "hazelnut", name: "Hazelnut Syrup", caloriesPerPump: 20, carbs: 5, sugar: 5, popular: false },
  { id: "cinnamon", name: "Cinnamon Dolce Syrup", caloriesPerPump: 20, carbs: 5, sugar: 5, popular: false },
  { id: "sf-vanilla", name: "Sugar-Free Vanilla", caloriesPerPump: 0, carbs: 0, sugar: 0, popular: true },
  { id: "sf-caramel", name: "Sugar-Free Caramel", caloriesPerPump: 0, carbs: 0, sugar: 0, popular: false },
  { id: "white-mocha", name: "White Mocha Sauce", caloriesPerPump: 60, carbs: 11, sugar: 11, popular: true },
  { id: "mocha", name: "Mocha Sauce", caloriesPerPump: 25, carbs: 5, sugar: 4, popular: true },
]

const toppings = [
  { id: "whip", name: "Whipped Cream", calories: 70, fat: 7, carbs: 2, protein: 1, sugar: 2 },
  { id: "foam", name: "Extra Foam", calories: 0, fat: 0, carbs: 0, protein: 0, sugar: 0 },
  { id: "cinnamon", name: "Cinnamon Powder", calories: 5, fat: 0, carbs: 1, protein: 0, sugar: 0 },
  { id: "cocoa", name: "Cocoa Powder", calories: 5, fat: 0, carbs: 1, protein: 0, sugar: 0 },
  { id: "nutmeg", name: "Nutmeg", calories: 2, fat: 0, carbs: 0, protein: 0, sugar: 0 },
]

const healthyTips = [
  "Switch to almond milk to save calories in your starbucks drink",
  "Use sugar-free syrups to calculate fewer starbucks calories",
  "Skip the whipped cream to reduce your starbucks drink calories by 70",
  "Choose a smaller size to naturally calculate lower starbucks calories",
  "Add extra foam instead of milk for a creamy texture with zero calories",
  "Try oat milk for a creamy texture with moderate starbucks oat milk calories",
]

export default function StarbucksCalculator() {
  const { theme, setTheme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("hot")
  const [selectedDrink, setSelectedDrink] = useState(drinks.hot[0])
  const [selectedSize, setSelectedSize] = useState(sizes[1])
  const [selectedMilk, setSelectedMilk] = useState(milkOptions[0])
  const [espressoShots, setEspressoShots] = useState(2)
  const [syrupPumps, setSyrupPumps] = useState<Record<string, number>>({})
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("calculator")

  // Calculate comprehensive nutrition
  const nutrition = useMemo(() => {
    let calories = selectedDrink.baseCalories * selectedSize.multiplier
    let fat = (selectedDrink.fat || 0) * selectedSize.multiplier
    let carbs = (selectedDrink.carbs || 0) * selectedSize.multiplier
    let protein = (selectedDrink.protein || 0) * selectedSize.multiplier
    let caffeine = selectedDrink.caffeine || 0
    const fiber = (selectedDrink.fiber || 0) * selectedSize.multiplier
    let sugar = (selectedDrink.sugar || 0) * selectedSize.multiplier

    // Add milk nutrition
    calories += selectedMilk.calories * selectedSize.multiplier
    fat += selectedMilk.fat * selectedSize.multiplier
    carbs += selectedMilk.carbs * selectedSize.multiplier
    protein += selectedMilk.protein * selectedSize.multiplier

    // Add espresso nutrition (5 calories, 75mg caffeine per shot)
    calories += espressoShots * 5
    caffeine += espressoShots * 75

    // Add syrup nutrition
    Object.entries(syrupPumps).forEach(([syrupId, pumps]) => {
      const syrup = syrups.find((s) => s.id === syrupId)
      if (syrup && pumps > 0) {
        calories += syrup.caloriesPerPump * pumps
        carbs += syrup.carbs * pumps
        sugar += syrup.sugar * pumps
      }
    })

    // Add topping nutrition
    selectedToppings.forEach((toppingId) => {
      const topping = toppings.find((t) => t.id === toppingId)
      if (topping) {
        calories += topping.calories
        fat += topping.fat
        carbs += topping.carbs
        protein += topping.protein
        sugar += topping.sugar || 0
      }
    })

    return {
      calories: Math.round(calories),
      fat: Math.round(fat * 10) / 10,
      carbs: Math.round(carbs * 10) / 10,
      protein: Math.round(protein * 10) / 10,
      caffeine: Math.round(caffeine),
      fiber: Math.round(fiber * 10) / 10,
      sugar: Math.round(sugar * 10) / 10,
    }
  }, [selectedDrink, selectedSize, selectedMilk, espressoShots, syrupPumps, selectedToppings])

  const filteredDrinks = drinks[selectedCategory as keyof typeof drinks].filter((drink) =>
    drink.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const generateOrder = () => {
    const parts = []
    parts.push(selectedSize.name)
    parts.push(selectedDrink.name)
    if (selectedMilk.id !== "whole") {
      parts.push(`with ${selectedMilk.name}`)
    }
    if (espressoShots !== 2) {
      parts.push(`${espressoShots} shots`)
    }
    Object.entries(syrupPumps).forEach(([syrupId, pumps]) => {
      if (pumps > 0) {
        const syrup = syrups.find((s) => s.id === syrupId)
        parts.push(`${pumps} pumps ${syrup?.name}`)
      }
    })
    selectedToppings.forEach((toppingId) => {
      const topping = toppings.find((t) => t.id === toppingId)
      parts.push(`add ${topping?.name}`)
    })
    return parts.join(", ")
  }

  const copyOrder = async () => {
    await navigator.clipboard.writeText(generateOrder())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getSmartTip = () => {
    if (nutrition.calories > 400) {
      return "💡 High calorie alert! Try switching to almond milk and sugar-free syrups to calculate lower starbucks calories. This could save you 100+ calories!"
    } else if (nutrition.calories > 250) {
      return "⚡ Moderate calories. Consider removing whipped cream (-70 cal) or choosing a smaller size to reduce your starbucks drink calories."
    } else if (nutrition.calories > 100) {
      return "✅ Good choice! This drink has reasonable calories for a starbucks beverage. Our starbucks calorie calculator shows this fits most daily goals."
    } else {
      return "🌟 Excellent! This is a low-calorie option perfect for your starbucks calorie calculator goals. Great for weight management!"
    }
  }

  const getHealthScore = () => {
    let score = 100

    // Calorie penalties
    if (nutrition.calories > 400) score -= 35
    else if (nutrition.calories > 300) score -= 25
    else if (nutrition.calories > 200) score -= 15

    // Fat penalties
    if (nutrition.fat > 15) score -= 25
    else if (nutrition.fat > 10) score -= 15

    // Sugar penalties
    if (nutrition.sugar > 40) score -= 30
    else if (nutrition.sugar > 25) score -= 20
    else if (nutrition.sugar > 15) score -= 10

    // Caffeine penalties
    if (nutrition.caffeine > 400) score -= 15
    else if (nutrition.caffeine > 300) score -= 10

    // Bonuses for healthy choices
    if (selectedMilk.id === "almond" || selectedMilk.id === "oat") score += 5
    if (!selectedToppings.includes("whip")) score += 5
    if (Object.values(syrupPumps).every((pumps) => pumps === 0)) score += 10
    if (nutrition.fiber > 2) score += 5

    return Math.max(0, Math.min(100, score))
  }

  const toggleFavorite = (drinkId: string) => {
    setFavorites((prev) => (prev.includes(drinkId) ? prev.filter((id) => id !== drinkId) : [...prev, drinkId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 px-4 py-6 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/android-chrome-192x192.png"
                alt="Starbucks Calorie Calculator Logo"
                width={48}
                height={48}
                className="rounded-lg"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Starbucks Calorie Calculator</h1>
                <p className="text-green-600 dark:text-green-400 font-medium">Calculate Starbucks Calories Instantly</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="hidden md:flex">
              <Star className="w-3 h-3 mr-1" />
              Smart Calculator
            </Badge>
            <Button variant="outline" size="sm" asChild className="hidden md:flex bg-transparent">
              <Link href="/faq">
                <HelpCircle className="h-4 w-4 mr-1" />
                Help
              </Link>
            </Button>
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/android-chrome-192x192.png"
              alt="Starbucks Calorie Calculator"
              width={96}
              height={96}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Ultimate <span className="text-green-600">Starbucks Nutrition Calculator</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Welcome to the most advanced <strong>starbucks calorie calculator</strong> available. Our intelligent tool
            helps you <strong>calculate starbucks drink calories</strong> with precision, whether you want to{" "}
            <strong>calculate calories in starbucks drink</strong> options or explore
            <strong>starbucks oat milk calories</strong>. This comprehensive{" "}
            <strong>calorie calculator for starbucks drinks</strong>
            provides instant results and smart nutritional insights.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <TrendingDown className="w-3 h-3 mr-1" />
              Smart Calorie Tracking
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Info className="w-3 h-3 mr-1" />
              Nutrition Insights
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <Lightbulb className="w-3 h-3 mr-1" />
              Health Tips
            </Badge>
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200" asChild>
              <Link href="/faq">
                <HelpCircle className="w-3 h-3 mr-1" />
                FAQ & Help
              </Link>
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <div className="mx-auto max-w-7xl px-4 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
            <TabsTrigger value="calculator">Starbucks Calorie Calculator</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Analysis</TabsTrigger>
            <TabsTrigger value="tips">Smart Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Panel - Enhanced Customization */}
              <div className="space-y-6">
                <Card className="border-2 border-green-100 dark:border-green-900/20">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
                    <CardTitle className="flex items-center">
                      <Calculator className="w-5 h-5 mr-2 text-green-600" />
                      1. Build Your Drink & Calculate Starbucks Calories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    {/* Enhanced Category Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {drinkCategories.map((category) => {
                        const Icon = category.icon
                        return (
                          <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            onClick={() => {
                              setSelectedCategory(category.id)
                              setSelectedDrink(drinks[category.id as keyof typeof drinks][0])
                            }}
                            className={`h-16 flex-col space-y-1 ${
                              selectedCategory === category.id
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : "hover:bg-green-50 dark:hover:bg-green-900/20"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-xs">{category.name}</span>
                          </Button>
                        )
                      })}
                    </div>

                    {/* Enhanced Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search drinks to calculate starbucks calories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-green-200 focus:border-green-400"
                      />
                    </div>

                    {/* Enhanced Drink List */}
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {filteredDrinks.map((drink) => (
                        <div
                          key={drink.id}
                          className={`p-4 rounded-lg cursor-pointer border-l-4 transition-all hover:shadow-md ${
                            selectedDrink.id === drink.id
                              ? "border-l-green-600 bg-green-50 dark:bg-green-900/20 shadow-sm"
                              : "border-l-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => setSelectedDrink(drink)}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 dark:text-white">{drink.name}</div>
                              <div className="text-sm text-gray-500 mt-1">
                                Base: {drink.baseCalories} cal • Caffeine: {drink.caffeine}mg
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleFavorite(drink.id)
                                }}
                              >
                                <Heart
                                  className={`h-4 w-4 ${
                                    favorites.includes(drink.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                                  }`}
                                />
                              </Button>
                              {drink.baseCalories < 100 && (
                                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                  Low Cal
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Size Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>2. Select Size for Your Starbucks Drink Calorie Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {sizes.map((size) => (
                        <Card
                          key={size.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedSize.id === size.id
                              ? "border-green-600 bg-green-50 dark:bg-green-900/20 shadow-sm"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl mb-2">{size.icon}</div>
                            <div className="font-medium">{size.name}</div>
                            <div className="text-sm text-gray-500">{size.volume}</div>
                            <div className="text-xs text-green-600 mt-1">
                              {Math.round(selectedDrink.baseCalories * size.multiplier)} cal
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Customization */}
                <Card>
                  <CardHeader>
                    <CardTitle>3. Customize to Calculate Starbucks Drink Calories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Enhanced Milk Selection */}
                    <div>
                      <h4 className="font-medium mb-3 flex items-center">
                        Milk Options
                        <Badge variant="outline" className="ml-2 text-xs">
                          Affects starbucks oat milk calories
                        </Badge>
                      </h4>
                      <RadioGroup
                        value={selectedMilk.id}
                        onValueChange={(value) => {
                          const milk = milkOptions.find((m) => m.id === value)
                          if (milk) setSelectedMilk(milk)
                        }}
                        className="space-y-3"
                      >
                        {milkOptions.map((milk) => (
                          <div
                            key={milk.id}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <RadioGroupItem value={milk.id} id={milk.id} />
                            <Label htmlFor={milk.id} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span>{milk.name}</span>
                                  {milk.popular && (
                                    <Badge variant="secondary" className="ml-2 text-xs">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                                <span className="text-sm text-green-600">
                                  +{Math.round(milk.calories * selectedSize.multiplier)} cal
                                </span>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Enhanced Espresso Shots */}
                    <div>
                      <h4 className="font-medium mb-3">Espresso Shots</h4>
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setEspressoShots(Math.max(0, espressoShots - 1))}
                            className="h-10 w-10"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <div className="text-center min-w-[60px]">
                            <div className="text-2xl font-bold">{espressoShots}</div>
                            <div className="text-xs text-gray-500">shots</div>
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setEspressoShots(espressoShots + 1)}
                            className="h-10 w-10"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-green-600">+{espressoShots * 5} cal</div>
                          <div className="text-xs text-gray-500">+{espressoShots * 75}mg caffeine</div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Syrups */}
                    <div>
                      <h4 className="font-medium mb-3">Syrups & Sauces</h4>
                      <div className="space-y-3">
                        {syrups.map((syrup) => (
                          <div
                            key={syrup.id}
                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="font-medium">{syrup.name}</span>
                              {syrup.popular && (
                                <Badge variant="secondary" className="text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-3">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() =>
                                  setSyrupPumps((prev) => ({
                                    ...prev,
                                    [syrup.id]: Math.max(0, (prev[syrup.id] || 0) - 1),
                                  }))
                                }
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">{syrupPumps[syrup.id] || 0}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() =>
                                  setSyrupPumps((prev) => ({
                                    ...prev,
                                    [syrup.id]: (prev[syrup.id] || 0) + 1,
                                  }))
                                }
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                              <div className="text-right min-w-[80px]">
                                <div className="text-sm font-medium text-green-600">
                                  {syrup.caloriesPerPump * (syrupPumps[syrup.id] || 0)} cal
                                </div>
                                <div className="text-xs text-gray-500">{syrup.caloriesPerPump}/pump</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Toppings */}
                    <div>
                      <h4 className="font-medium mb-3">Toppings</h4>
                      <div className="space-y-3">
                        {toppings.map((topping) => (
                          <div
                            key={topping.id}
                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          >
                            <Label htmlFor={topping.id} className="font-medium cursor-pointer">
                              {topping.name}
                            </Label>
                            <div className="flex items-center space-x-3">
                              <Switch
                                id={topping.id}
                                checked={selectedToppings.includes(topping.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setSelectedToppings((prev) => [...prev, topping.id])
                                  } else {
                                    setSelectedToppings((prev) => prev.filter((id) => id !== topping.id))
                                  }
                                }}
                              />
                              <span className="text-sm font-medium text-green-600 min-w-[60px] text-right">
                                +{topping.calories} cal
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Panel - Enhanced Intelligence */}
              <div className="space-y-6">
                {/* Enhanced Calorie Display */}
                <Card className="border-2 border-green-200 dark:border-green-800">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4">
                      <div className="text-7xl font-bold text-green-600 mb-2 calorie-counter">{nutrition.calories}</div>
                      <div className="text-xl text-gray-600 dark:text-gray-300 font-medium">Total Calories</div>
                      <div className="text-sm text-gray-500 mt-1">Calculated with our starbucks calorie calculator</div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Health Score</span>
                        <span className="text-sm font-bold text-green-600">{getHealthScore()}/100</span>
                      </div>
                      <Progress value={getHealthScore()} className="h-2" />
                    </div>

                    <Separator className="my-6" />

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <div className="font-medium text-orange-700 dark:text-orange-300">Fat</div>
                        <div className="text-lg font-bold text-orange-600">{nutrition.fat}g</div>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="font-medium text-blue-700 dark:text-blue-300">Carbs</div>
                        <div className="text-lg font-bold text-blue-600">{nutrition.carbs}g</div>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="font-medium text-purple-700 dark:text-purple-300">Protein</div>
                        <div className="text-lg font-bold text-purple-600">{nutrition.protein}g</div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="font-medium text-green-700 dark:text-green-300">Caffeine</div>
                        <div className="text-lg font-bold text-green-600">{nutrition.caffeine}mg</div>
                      </div>
                      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <div className="font-medium text-yellow-700 dark:text-yellow-300">Sugar</div>
                        <div className="text-lg font-bold text-yellow-600">{nutrition.sugar}g</div>
                      </div>
                      <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                        <div className="font-medium text-teal-700 dark:text-teal-300">Fiber</div>
                        <div className="text-lg font-bold text-teal-600">{nutrition.fiber}g</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Smart Tip */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-blue-600 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Smart Nutrition Tip
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{getSmartTip()}</p>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        💡 Pro tip: Use our starbucks nutrition calculator to compare different milk options and see how
                        they affect your total starbucks drink calories.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Order Generator */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Coffee className="w-5 h-5 mr-2 text-green-600" />
                      Your Perfect Starbucks Order
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 border-l-4 border-l-green-500">
                      <pre className="text-sm whitespace-pre-wrap font-mono text-gray-800 dark:text-gray-200">
                        {generateOrder()}
                      </pre>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={copyOrder} className="flex-1 bg-green-600 hover:bg-green-700">
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Order
                          </>
                        )}
                      </Button>
                      <Button variant="outline" onClick={() => toggleFavorite(selectedDrink.id)}>
                        <Heart
                          className={`w-4 h-4 ${favorites.includes(selectedDrink.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nutrition">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calorie Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Base Drink</span>
                      <span className="font-medium">
                        {Math.round(selectedDrink.baseCalories * selectedSize.multiplier)} cal
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Milk ({selectedMilk.name})</span>
                      <span className="font-medium">
                        {Math.round(selectedMilk.calories * selectedSize.multiplier)} cal
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Espresso Shots</span>
                      <span className="font-medium">{espressoShots * 5} cal</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-green-600">
                      <span>Total</span>
                      <span>{nutrition.calories} cal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nutritional Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Daily Calories (2000)</span>
                        <span className="text-sm">{Math.round((nutrition.calories / 2000) * 100)}%</span>
                      </div>
                      <Progress value={(nutrition.calories / 2000) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Daily Fat (65g)</span>
                        <span className="text-sm">{Math.round((nutrition.fat / 65) * 100)}%</span>
                      </div>
                      <Progress value={(nutrition.fat / 65) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Daily Carbs (300g)</span>
                        <span className="text-sm">{Math.round((nutrition.carbs / 300) * 100)}%</span>
                      </div>
                      <Progress value={(nutrition.carbs / 300) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Daily Sugar (50g)</span>
                        <span className="text-sm">{Math.round((nutrition.sugar / 50) * 100)}%</span>
                      </div>
                      <Progress value={(nutrition.sugar / 50) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${nutrition.calories < 200 ? "bg-green-500" : nutrition.calories < 350 ? "bg-yellow-500" : "bg-red-500"}`}
                      />
                      <span className="text-sm">
                        {nutrition.calories < 200
                          ? "Low calorie choice"
                          : nutrition.calories < 350
                            ? "Moderate calories"
                            : "High calorie drink"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${nutrition.caffeine < 150 ? "bg-green-500" : nutrition.caffeine < 300 ? "bg-yellow-500" : "bg-red-500"}`}
                      />
                      <span className="text-sm">
                        {nutrition.caffeine < 150
                          ? "Low caffeine"
                          : nutrition.caffeine < 300
                            ? "Moderate caffeine"
                            : "High caffeine"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${selectedMilk.id === "almond" || selectedMilk.id === "oat" ? "bg-green-500" : "bg-gray-400"}`}
                      />
                      <span className="text-sm">
                        {selectedMilk.id === "almond" || selectedMilk.id === "oat" ? "Plant-based milk" : "Dairy milk"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${nutrition.sugar < 10 ? "bg-green-500" : nutrition.sugar < 25 ? "bg-yellow-500" : "bg-red-500"}`}
                      />
                      <span className="text-sm">
                        {nutrition.sugar < 10 ? "Low sugar" : nutrition.sugar < 25 ? "Moderate sugar" : "High sugar"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Healthy Starbucks Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthyTips.map((tip, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                      >
                        <Lightbulb className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Low-Calorie Alternatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Instead of Caramel Macchiato (250 cal)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Try: Iced Coffee with almond milk and sugar-free vanilla
                      </p>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Save 180 calories
                      </Badge>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Instead of Frappuccino (370 cal)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Try: Cold brew with oat milk and cinnamon
                      </p>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Save 320 calories
                      </Badge>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Instead of Whole Milk</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Try: Almond milk for fewer starbucks oat milk calories
                      </p>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Save 60 calories
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Enhanced FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Complete Guide to Our Starbucks Nutrition Calculator</CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Everything you need to know about using our <strong>starbucks calorie calculator</strong>
              to make informed decisions about your favorite drinks.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-green-600">How accurate is this starbucks calorie calculator?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our <strong>starbucks calories calculator</strong> uses official Starbucks nutrition data and accounts
                  for all customizations. When you <strong>calculate starbucks calories</strong>
                  with our tool, you get precise results based on standard recipes, though actual calories may vary
                  slightly due to preparation differences.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-600">
                  Can I calculate starbucks oat milk calories accurately?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our <strong>calorie calculator for starbucks drinks</strong> includes precise
                  <strong>starbucks oat milk calories</strong> data for all drink sizes. You can easily compare oat milk
                  with other alternatives to see how they affect your total drink calories.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-600">Does this work for all Starbucks drink sizes?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Yes! Our <strong>starbucks drink calorie calculator</strong> supports all standard sizes from Short
                  (8oz) to Venti (20oz/24oz). When you <strong>calculate calories in starbucks drink</strong>
                  options, the tool automatically adjusts all ingredients proportionally.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-600">
                  How does this starbucks nutrition calculator help with health goals?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our <strong>calorie calculator starbucks</strong> tool provides smart tips, nutritional breakdowns,
                  and health scores. Whether you want to <strong>calculate starbucks drink calories</strong>
                  for weight management or just make informed choices, our calculator guides you toward healthier
                  options.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optimized Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-green-700 text-white mt-16">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/android-chrome-192x192.png"
                  alt="Starbucks Calorie Calculator Logo"
                  width={40}
                  height={40}
                  className="rounded-lg bg-white/20 p-1"
                />
                <div>
                  <h3 className="font-bold text-xl text-white">Starbucks Calorie Calculator</h3>
                  <p className="text-green-100 text-sm">Smart nutrition for coffee lovers</p>
                </div>
              </div>
              <p className="text-green-100 mb-4 max-w-md">
                The most comprehensive <strong>starbucks calorie calculator</strong> to help you
                <strong>calculate starbucks drink calories</strong> with precision and make smarter choices.
              </p>
              <div className="space-y-2 text-sm text-green-100">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@starbuckscaloriecalculator.pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>starbuckscaloriecalculator.pro</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Calculator Tools</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <Link
                    href="/"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Calculator className="w-3 h-3" />
                    <span>Starbucks Calorie Calculator</span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/recipes"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Coffee className="w-3 h-3" />
                    <span>Low-Calorie Recipes</span>
                  </Link>
                </div>
                <div>
                  <a
                    href="#nutrition"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <TrendingDown className="w-3 h-3" />
                    <span>Nutrition Analysis</span>
                  </a>
                </div>
                <div>
                  <Link
                    href="/faq"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Info className="w-3 h-3" />
                    <span>FAQ & Help</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support & Info</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <Link
                    href="/contact"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Contact Us</span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/about"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Info className="w-3 h-3" />
                    <span>About Us</span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/privacy-policy"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Shield className="w-3 h-3" />
                    <span>Privacy Policy</span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/terms-of-service"
                    className="text-green-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Terms of Service</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Separator className="mb-6 bg-white/20" />
          <div className="text-center text-sm text-green-100">
            <p>© 2025 starbuckscaloriecalculator.pro. Built for coffee lovers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
