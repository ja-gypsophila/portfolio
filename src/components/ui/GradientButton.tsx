"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: GradientButtonProps) {
  const baseClasses =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-purple to-cyan text-white hover:shadow-[0_0_30px_rgba(123,47,247,0.4)]"
      : "border border-purple/40 text-purple hover:bg-purple/10 hover:border-purple";

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Component>
  );
}
