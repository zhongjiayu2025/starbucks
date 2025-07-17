"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <Card className="border-red-200 bg-red-50 dark:bg-red-900/10">
      <CardHeader>
        <CardTitle className="flex items-center text-red-700 dark:text-red-400">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Something went wrong
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-red-600 dark:text-red-300">
          We encountered an error while calculating your drink calories. Please try again.
        </p>
        {error && (
          <details className="text-sm text-red-500">
            <summary className="cursor-pointer">Error details</summary>
            <pre className="mt-2 p-2 bg-red-100 dark:bg-red-900/20 rounded text-xs overflow-auto">{error.message}</pre>
          </details>
        )}
        <Button onClick={resetError} variant="outline" className="w-full bg-transparent">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </CardContent>
    </Card>
  )
}
