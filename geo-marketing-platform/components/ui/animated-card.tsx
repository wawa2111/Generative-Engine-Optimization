"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { forwardRef } from "react"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, delay = 0, direction = "up", className, ...props }, ref) => {
    const directions = {
      up: { y: 20, x: 0 },
      down: { y: -20, x: 0 },
      left: { y: 0, x: 20 },
      right: { y: 0, x: -20 },
    }

    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          ...directions[direction],
        }}
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.25, 0.25, 0, 1],
        }}
        whileHover={{
          y: -2,
          transition: { duration: 0.2 },
        }}
      >
        <Card className={className} {...props}>
          {children}
        </Card>
      </motion.div>
    )
  },
)

AnimatedCard.displayName = "AnimatedCard"

export { AnimatedCard }
export { CardContent, CardDescription, CardHeader, CardTitle }
