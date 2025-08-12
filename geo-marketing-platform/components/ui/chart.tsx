"use client"

import * as React from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  type TooltipProps,
} from "recharts"
import { cn } from "@/lib/utils"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
  children: React.ReactNode
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, config, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full h-full", className)}
        style={
          {
            "--color-primary": "hsl(var(--primary))",
            "--color-secondary": "hsl(var(--secondary))",
            "--color-muted": "hsl(var(--muted))",
            "--color-muted-foreground": "hsl(var(--muted-foreground))",
            "--color-border": "hsl(var(--border))",
            "--chart-1": "hsl(var(--chart-1))",
            "--chart-2": "hsl(var(--chart-2))",
            "--chart-3": "hsl(var(--chart-3))",
            "--chart-4": "hsl(var(--chart-4))",
            "--chart-5": "hsl(var(--chart-5))",
            ...Object.entries(config).reduce(
              (acc, [key, value]) => {
                if (value.color) {
                  acc[`--color-${key}`] = value.color
                }
                return acc
              },
              {} as Record<string, string>,
            ),
          } as React.CSSProperties
        }
        {...props}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipProps extends TooltipProps<any, any> {
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot" | "dashed"
  nameKey?: string
  labelKey?: string
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ active, payload, label, hideLabel, hideIndicator, indicator = "dot", nameKey, labelKey, ...props }, ref) => {
    if (!active || !payload?.length) {
      return null
    }

    return (
      <div ref={ref} className="rounded-lg border bg-background p-2 shadow-md" {...props}>
        {!hideLabel && (
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">{labelKey || "Label"}</span>
              <span className="font-bold text-muted-foreground">{label}</span>
            </div>
          </div>
        )}
        <div className="grid gap-2">
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              {!hideIndicator && (
                <div
                  className={cn(
                    "h-2.5 w-2.5 shrink-0 rounded-[2px]",
                    indicator === "dot" && "rounded-full",
                    indicator === "dashed" && "border-2 border-dashed bg-transparent",
                  )}
                  style={{ backgroundColor: entry.color }}
                />
              )}
              <div className="flex flex-1 justify-between leading-none">
                <span className="text-muted-foreground">{nameKey ? entry.payload[nameKey] : entry.name}</span>
                <span className="font-mono font-medium tabular-nums text-foreground">{entry.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
)
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = ChartTooltip

const ChartLegend = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex items-center justify-center gap-4 pt-4", className)} {...props} />
  },
)
ChartLegend.displayName = "ChartLegend"

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent, // Added missing export
  ChartLegend,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  RadarChart, // Added RadarChart export
  Radar, // Added Radar export
  PolarGrid, // Added PolarGrid export
  PolarAngleAxis, // Added PolarAngleAxis export
  PolarRadiusAxis, // Added PolarRadiusAxis export
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  COLORS,
}
