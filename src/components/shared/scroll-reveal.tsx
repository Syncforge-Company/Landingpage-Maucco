"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

const offsets = {
  up: { x: 0, y: 28 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const offset = offsets[direction];

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, x: offset.x, y: offset.y }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
        transition={{
          duration: 0.55,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
