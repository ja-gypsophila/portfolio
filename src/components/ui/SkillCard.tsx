"use client";

import { motion } from "motion/react";
import { staggerItem, progressBar } from "@/lib/animation-variants";

interface SkillCardProps {
  name: string;
  level?: number;
  icon: React.ComponentType<{ className?: string }>;
}

export default function SkillCard({ name, level, icon: Icon }: SkillCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.03, y: -2 }}
      className="bg-card rounded-xl p-5 border border-border hover:border-purple/40 transition-colors"
    >
      <div className={`flex items-center gap-3 ${level !== undefined ? "mb-4" : ""}`}>
        <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center">
          <Icon className="text-xl text-purple" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-foreground">{name}</h4>
            {level !== undefined && (
              <span className="text-sm text-text-secondary font-mono">{level}%</span>
            )}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      {level !== undefined && (
      <div className="w-full h-2 rounded-full bg-background overflow-hidden">
        <motion.div
          variants={progressBar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={level}
          className="h-full rounded-full bg-gradient-to-r from-purple to-cyan"
        />
      </div>
      )}
    </motion.div>
  );
}
