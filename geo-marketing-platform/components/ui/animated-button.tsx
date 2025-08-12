"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, loading = false, disabled, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ duration: 0.1 }}
      >
        <Button ref={ref} disabled={disabled || loading} {...props}>
          <motion.div
            className="flex items-center gap-2"
            animate={loading ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
            transition={loading ? { repeat: Number.POSITIVE_INFINITY, duration: 1.5 } : {}}
          >
            {children}
          </motion.div>
        </Button>
      </motion.div>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
