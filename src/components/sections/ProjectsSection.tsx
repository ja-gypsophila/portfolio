"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import {
  projectsData,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio-data";
import { staggerContainer } from "@/lib/animation-variants";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  // 함수 참조를 고정해 모달의 useEffect(ESC·스크롤 잠금)가 불필요하게 다시 실행되지 않게 함
  const handleClose = useCallback(() => setSelected(null), []);
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? projectsData : projectsData.filter((p) => p.category.includes(filter))),
    [filter],
  );

  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Projects" subtitle="주요 프로젝트" />

      {/* 분류 탭 — Skills 섹션 탭과 같은 모양 */}
      <div role="tablist" aria-label="프로젝트 분류" className="flex flex-wrap justify-center gap-3 mb-10">
        {projectCategories.map((cat) => {
          const count =
            cat.key === "all" ? projectsData.length : projectsData.filter((p) => p.category.includes(cat.key as ProjectCategory)).length;
          const active = filter === cat.key;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(cat.key)}
              className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                active ? "text-white" : "text-text-secondary hover:text-foreground bg-card border border-border"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="activeProjectTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple to-cyan rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {cat.label} <span className="opacity-70">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* 탭을 바꾸면 key가 바뀌어 카드 등장 애니메이션이 다시 재생됨 */}
      <motion.div
        key={filter}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6"
      >
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={() => setSelected(project)}
          />
        ))}
      </motion.div>

      <ProjectModal project={selected} onClose={handleClose} />
    </SectionWrapper>
  );
}
