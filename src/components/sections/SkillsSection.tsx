"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories, skillsData, SkillCategory } from "@/data/portfolio-data";
import { staggerContainer } from "@/lib/animation-variants";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");

  return (
    <SectionWrapper id="skills">
      <SectionHeading title="Skills" subtitle="기술 스택" />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat.key
                ? "text-white"
                : "text-text-secondary hover:text-foreground bg-card border border-border"
            }`}
          >
            {activeCategory === cat.key && (
              <motion.div
                layoutId="activeSkillTab"
                className="absolute inset-0 bg-gradient-to-r from-purple to-cyan rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillsData[activeCategory].map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
