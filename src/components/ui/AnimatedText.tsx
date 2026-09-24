"use client";

import { motion } from "motion/react";
import { letterAnimation } from "@/lib/animation-variants";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const letters = text.split("");

  return (
    <span className="inline-flex flex-wrap" style={{ perspective: "600px" }}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`inline-block ${className}`}
          style={{ transformOrigin: "bottom", transformStyle: "preserve-3d" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
