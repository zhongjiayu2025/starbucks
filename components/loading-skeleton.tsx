import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
          <Skeleton className="h-10 w-full" />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function NutritionSkeleton() {
  return (
    <Card className="border-2 border-green-200 dark:border-green-800">
      <CardContent className="p-8 text-center">
        <Skeleton className="h-20 w-32 mx-auto mb-4" />
        <Skeleton className="h-6 w-24 mx-auto mb-2" />
        <Skeleton className="h-4 w-48 mx-auto mb-6" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Skeleton className="h-4 w-12 mb-2" />
              <Skeleton className="h-6 w-16" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
