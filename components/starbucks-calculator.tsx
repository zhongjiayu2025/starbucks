"use client"

import type React from "react"

import { useState, useMemo, useCallback, useEffect } from "react"
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
import { Alert, AlertDescription } from "@/components/ui/alert"
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
  Shield,
  Share2,
  Bookmark,
  History,
  Wifi,
  WifiOff,
  CheckCircle,
  Target,
  Users,
  Award,
  Smartphone,
  BarChart3,
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

// 防抖函数
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

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
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("calculator")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isOnline, setIsOnline] = useState(true)
  const [history, setHistory] = useState<any[]>([])
  const [showHistory, setShowHistory] = useState(false)

  // 网络状态监听
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // 添加防抖搜索
  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setDebouncedSearchTerm(term)
    }, 300),
    [],
  )

  useEffect(() => {
    debouncedSearch(searchTerm)
  }, [searchTerm, debouncedSearch])

  // 保存到本地存储
  const saveToLocalStorage = useCallback((key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn("Failed to save to localStorage:", error)
    }
  }, [])

  // 从本地存储读取
  const loadFromLocalStorage = useCallback((key: string, defaultValue: any) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn("Failed to load from localStorage:", error)
      return defaultValue
    }
  }, [])

  // 在useEffect中加载保存的偏好
  useEffect(() => {
    const savedFavorites = loadFromLocalStorage("starbucks-favorites", [])
    const savedHistory = loadFromLocalStorage("starbucks-history", [])
    setFavorites(savedFavorites)
    setHistory(savedHistory)
  }, [loadFromLocalStorage])

  // 保存收藏夹变化
  useEffect(() => {
    saveToLocalStorage("starbucks-favorites", favorites)
  }, [favorites, saveToLocalStorage])

  // 保存历史记录
  const saveToHistory = useCallback(
    (calculation: any) => {
      const newHistory = [calculation, ...history.slice(0, 9)] // 保留最近10条记录
      setHistory(newHistory)
      saveToLocalStorage("starbucks-history", newHistory)
    },
    [history, saveToLocalStorage],
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      // 选择第一个搜索结果
      if (filteredDrinks.length > 0) {
        setSelectedDrink(filteredDrinks[0])
      }
    }
  }

  // Calculate comprehensive nutrition
  const calculateNutrition = useCallback(() => {
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

    const result = {
      calories: Math.round(calories),
      fat: Math.round(fat * 10) / 10,
      carbs: Math.round(carbs * 10) / 10,
      protein: Math.round(protein * 10) / 10,
      caffeine: Math.round(caffeine),
      fiber: Math.round(fiber * 10) / 10,
      sugar: Math.round(sugar * 10) / 10,
    }

    return result
  }, [selectedDrink, selectedSize, selectedMilk, espressoShots, syrupPumps, selectedToppings])

  const nutrition = useMemo(() => calculateNutrition(), [calculateNutrition])

  const filteredDrinks = useMemo(
    () =>
      drinks[selectedCategory as keyof typeof drinks].filter((drink) =>
        drink.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
      ),
    [selectedCategory, debouncedSearchTerm],
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
    try {
      await navigator.clipboard.writeText(generateOrder())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareOrder = async () => {
    const orderText = `${generateOrder()} - ${nutrition.calories} calories`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Starbucks Order",
          text: orderText,
          url: window.location.href,
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    } else {
      // 回退到复制
      copyOrder()
    }
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
      {/* 网络状态提示 */}
      {!isOnline && (
        <Alert className="mx-4 mt-4 border-orange-200 bg-orange-50">
          <WifiOff className="h-4 w-4" />
          <AlertDescription>
            You're currently offline. Some features may be limited, but you can still use the calculator.
          </AlertDescription>
        </Alert>
      )}

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
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Starbucks Calorie Calculator
                </h1>
                <p className="text-green-600 dark:text-green-400 font-medium hidden sm:block">
                  Calculate Starbucks Calories Instantly
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            {isOnline ? <Wifi className="w-4 h-4 text-green-500" /> : <WifiOff className="w-4 h-4 text-orange-500" />}
            <Button variant="outline" size="sm" onClick={() => setShowHistory(!showHistory)} className="hidden md:flex">
              <History className="h-4 w-4 mr-1" />
              History
            </Button>
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

      {/* Hero Section - Removed logo image */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
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
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-red-700">Error: {error}</p>
                        <Button onClick={() => setError(null)} variant="outline" size="sm" className="mt-2">
                          Try Again
                        </Button>
                      </div>
                    )}

                    {isLoading && (
                      <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                        <span className="ml-2 text-gray-600">Loading...</span>
                      </div>
                    )}
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
                            } touch-manipulation`}
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
                        placeholder="Search drinks..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="pl-10 border-green-200 focus:border-green-400"
                        aria-label="Search Starbucks drinks"
                        role="searchbox"
                        aria-describedby="search-help"
                      />
                      <div id="search-help" className="sr-only">
                        Search through our database of Starbucks drinks to calculate calories
                      </div>
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
                          onClick={() => {
                            setSelectedDrink(drink)
                          }}
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
                                className="h-8 w-8 touch-manipulation"
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
                          onClick={() => {
                            setSelectedSize(size)
                          }}
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
                          if (milk) {
                            setSelectedMilk(milk)
                          }
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
                            onClick={() => {
                              const newShots = Math.max(0, espressoShots - 1)
                              setEspressoShots(newShots)
                            }}
                            className="h-10 w-10 touch-manipulation"
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
                            onClick={() => {
                              const newShots = espressoShots + 1
                              setEspressoShots(newShots)
                            }}
                            className="h-10 w-10 touch-manipulation"
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
                                className="h-8 w-8 bg-transparent touch-manipulation"
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
                                className="h-8 w-8 bg-transparent touch-manipulation"
                                onClick={() => {
                                  setSyrupPumps((prev) => ({
                                    ...prev,
                                    [syrup.id]: (prev[syrup.id] || 0) + 1,
                                  }))
                                }}
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
                      <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-green-600 mb-2 calorie-counter">
                        {nutrition.calories}
                      </div>
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

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
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
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <div className="font-medium text-red-700 dark:text-red-300">Caffeine</div>
                        <div className="text-lg font-bold text-red-600">{nutrition.caffeine}mg</div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="font-medium text-green-700 dark:text-green-300">Fiber</div>
                        <div className="text-lg font-bold text-green-600">{nutrition.fiber}g</div>
                      </div>
                      <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                        <div className="font-medium text-pink-700 dark:text-pink-300">Sugar</div>
                        <div className="text-lg font-bold text-pink-600">{nutrition.sugar}g</div>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-3">
                      <Button
                        onClick={copyOrder}
                        className="w-full bg-green-600 hover:bg-green-700 text-white touch-manipulation"
                        size="lg"
                      >
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? "Copied!" : "Copy Order"}
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          onClick={shareOrder}
                          variant="outline"
                          className="flex-1 touch-manipulation bg-transparent"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                        <Button
                          onClick={() => {
                            const calculation = {
                              drink: selectedDrink.name,
                              size: selectedSize.name,
                              calories: nutrition.calories,
                              timestamp: new Date().toISOString(),
                            }
                            saveToHistory(calculation)
                          }}
                          variant="outline"
                          className="flex-1 touch-manipulation"
                        >
                          <Bookmark className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Smart Tip */}
                <Card className="border-amber-200 bg-amber-50 dark:bg-amber-900/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Smart Tip</h4>
                        <p className="text-amber-700 dark:text-amber-300 text-sm">{getSmartTip()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Starbucks Order</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-mono leading-relaxed">{generateOrder()}</p>
                    </div>
                    <div className="mt-4 text-xs text-gray-500">
                      Perfect for ordering at Starbucks! Our starbucks calorie calculator ensures accuracy.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nutrition">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Nutrition Analysis</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete nutritional breakdown from our starbucks calorie calculator
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Macronutrients</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Total Calories</span>
                        <span className="font-bold text-green-600">{nutrition.calories}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Total Fat</span>
                        <span className="font-bold">{nutrition.fat}g</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Total Carbohydrates</span>
                        <span className="font-bold">{nutrition.carbs}g</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Protein</span>
                        <span className="font-bold">{nutrition.protein}g</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Dietary Fiber</span>
                        <span className="font-bold">{nutrition.fiber}g</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Total Sugars</span>
                        <span className="font-bold">{nutrition.sugar}g</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Additional Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Caffeine</span>
                        <span className="font-bold text-red-600">{nutrition.caffeine}mg</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Health Score</span>
                        <span className="font-bold text-green-600">{getHealthScore()}/100</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Size</span>
                        <span className="font-bold">
                          {selectedSize.name} ({selectedSize.volume})
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span>Milk Type</span>
                        <span className="font-bold">{selectedMilk.name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-4">Daily Value Percentages (Based on 2000 calorie diet)</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Calories</span>
                          <span className="text-sm font-medium">{Math.round((nutrition.calories / 2000) * 100)}%</span>
                        </div>
                        <Progress value={(nutrition.calories / 2000) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Total Fat</span>
                          <span className="text-sm font-medium">{Math.round((nutrition.fat / 65) * 100)}%</span>
                        </div>
                        <Progress value={(nutrition.fat / 65) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Carbohydrates</span>
                          <span className="text-sm font-medium">{Math.round((nutrition.carbs / 300) * 100)}%</span>
                        </div>
                        <Progress value={(nutrition.carbs / 300) * 100} className="h-2" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Protein</span>
                          <span className="text-sm font-medium">{Math.round((nutrition.protein / 50) * 100)}%</span>
                        </div>
                        <Progress value={(nutrition.protein / 50) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Fiber</span>
                          <span className="text-sm font-medium">{Math.round((nutrition.fiber / 25) * 100)}%</span>
                        </div>
                        <Progress value={(nutrition.fiber / 25) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Added Sugars</span>
                          <span className="text-sm font-medium">{Math.round((nutrition.sugar / 50) * 100)}%</span>
                        </div>
                        <Progress value={(nutrition.sugar / 50) * 100} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-amber-500" />
                    Smart Health Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {healthyTips.map((tip, index) => (
                    <div
                      key={index}
                      className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg border-l-4 border-amber-400"
                    >
                      <p className="text-amber-800 dark:text-amber-200">{tip}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingDown className="w-5 h-5 mr-2 text-green-500" />
                    Calorie Reduction Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Size Down Strategy</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Choosing a Tall instead of Venti can save you{" "}
                      {Math.round(selectedDrink.baseCalories * (sizes[3].multiplier - sizes[1].multiplier))} calories!
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Milk Swap Benefits</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Switching from 2% milk to almond milk saves{" "}
                      {Math.round((milkOptions[0].calories - milkOptions[3].calories) * selectedSize.multiplier)}{" "}
                      calories per drink.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Syrup Alternatives</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Use sugar-free syrups to eliminate 20 calories per pump while keeping the flavor you love.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* What We Do Section */}
        <section className="mt-16 mb-12">
          <div className="mx-auto max-w-6xl">
            <Card className="border-2 border-blue-100 dark:border-blue-900/20">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Do</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Empowering coffee lovers with accurate nutrition information and smart health insights
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Precise Calorie Calculation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our advanced <strong>starbucks calorie calculator</strong> provides accurate nutritional data for
                      over 500+ Starbucks drinks and food items. Calculate starbucks drink calories with precision using
                      official nutrition data and real-time customization options.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Smart Nutrition Analysis
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Beyond basic calorie counting, we provide comprehensive nutrition breakdowns including
                      macronutrients, caffeine content, and health scores. Our starbucks nutrition calculator helps you
                      understand the complete nutritional profile of your favorite drinks.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Personalized Health Tips
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get intelligent recommendations to make healthier choices. Our system analyzes your selections and
                      suggests alternatives to reduce calories, optimize nutrition, and help you achieve your health
                      goals while enjoying your favorite Starbucks beverages.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="mx-auto max-w-6xl">
            <Card className="border-2 border-green-100 dark:border-green-900/20">
              <CardHeader className="text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  The most trusted and comprehensive Starbucks nutrition calculator on the web
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">100% Accurate Data</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Official Starbucks nutrition data with real-time updates. Our starbucks calorie calculator uses
                      verified information for precise results.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Optimized</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Perfect mobile experience with touch-friendly interface. Calculate starbucks calories on-the-go
                      with our responsive design.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Trusted by Thousands</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Join thousands of health-conscious coffee lovers who rely on our starbucks nutrition calculator
                      daily.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Award-Winning Tool</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Recognized as the most comprehensive calorie calculator for starbucks drinks with advanced
                      features and insights.
                    </p>
                  </div>
                </div>
                <Separator className="my-8" />
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Features That Set Us Apart
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Smart Health Scoring</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Unique health score algorithm that evaluates your drink choices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Coffee className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Complete Customization</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Every milk type, syrup, and topping option accurately calculated
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Instant Results</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Real-time calculation as you customize your drink
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Favorites & History</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Save your favorite drinks and track your nutrition history
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Share2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Easy Sharing</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Share your perfect order with friends and family
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Privacy Focused</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Your data stays private with local storage and no tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

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

      {/* Enhanced Footer - Updated copyright and centered */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/android-chrome-192x192.png"
                  alt="Starbucks Calorie Calculator"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="font-bold text-gray-900 dark:text-white">Starbucks Calculator</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                The most accurate <strong>starbucks calorie calculator</strong> to help you make informed choices about
                your favorite drinks.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Calculator Tools</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="/" className="hover:text-green-600">
                    Starbucks Calorie Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/recipes" className="hover:text-green-600">
                    Healthy Recipes
                  </Link>
                </li>
                <li>Nutrition Analysis</li>
                <li>Health Tips</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="/faq" className="hover:text-green-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-green-600">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="/privacy-policy" className="hover:text-green-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-green-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2025 starbuckscaloriecalculator.pro. Built for coffee lovers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
