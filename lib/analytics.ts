// Google Analytics 4 配置
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// 页面浏览事件
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// 自定义事件
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// 计算器特定事件
export const trackCalculation = (drinkName: string, calories: number, customizations: any) => {
  event({
    action: "calculate_calories",
    category: "calculator",
    label: drinkName,
    value: calories,
  })
}

export const trackDrinkSelection = (drinkName: string, category: string) => {
  event({
    action: "select_drink",
    category: "user_interaction",
    label: `${category}:${drinkName}`,
  })
}

export const trackCustomization = (type: string, value: string) => {
  event({
    action: "customize_drink",
    category: "user_interaction",
    label: `${type}:${value}`,
  })
}

// 性能监控
export const trackPerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

    // Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          event({
            action: "lcp",
            category: "performance",
            value: Math.round(entry.startTime),
          })
        }
        if (entry.entryType === "first-input") {
          event({
            action: "fid",
            category: "performance",
            value: Math.round((entry as any).processingStart - entry.startTime),
          })
        }
      }
    })

    observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] })
  }
}

// 类型声明
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}
