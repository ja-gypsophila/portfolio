"use client";

import { motion } from "motion/react";
import { staggerItem } from "@/lib/animation-variants";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  index: number;
}

export default function TimelineItem({
  role,
  company,
  period,
  description,
  technologies,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.4 }}
        className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple to-cyan border-2 border-background z-10"
      />

      {/* Timeline line */}
      {
        <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-gradient-to-b from-purple/40 to-transparent" />
      }

      {/* Content card */}
      <motion.div
        transition={{ duration: 0.2 }}
        className="bg-card rounded-xl p-6 border border-border"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground">{role}</h3>
          <span className="text-sm font-mono text-cyan">{period}</span>
        </div>
        <p className="text-purple font-medium mb-3">{company}</p>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-purple/10 text-purple border border-purple/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
