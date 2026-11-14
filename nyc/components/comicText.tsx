import { type CSSProperties } from "react"
import { motion } from "motion/react"

import { cn } from "../src/lib/utils"

type ComicTextProps = {
  children: string
  className?: string
  style?: CSSProperties
  fontSize?: number
}

export function ComicText({
  children,
  className,
  style,
  fontSize = 3,
}: ComicTextProps) {
  if (typeof children !== "string") {
    throw new Error("children must be a string")
  }

  const dotColor = "#EF4444"
  const backgroundColor = "#FACC15"

  return (
    <motion.div
      className={cn("w-full min-w-0 text-center select-none", className)}
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
        type: "spring",
      }}
    >
      <span
        className="block w-full max-w-full px-2 leading-[1.05] [transform:skewX(-10deg)] max-sm:!transform-none"
        style={{
          fontSize: `clamp(1.5rem, 6vw, ${fontSize}rem)`,
          fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
          fontWeight: "900",
          WebkitTextStroke: `${fontSize * 0.35}px #000000`,
          textTransform: "uppercase",
          whiteSpace: "normal",
          overflowWrap: "anywhere",
          filter: `
            drop-shadow(5px 5px 0px #000000)
            drop-shadow(3px 3px 0px ${dotColor})
          `,
          backgroundColor,
          backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          ...style,
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}
