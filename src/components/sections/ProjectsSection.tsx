"use client";

import { useCallback, useState } from "react";
import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projectsData, type Project } from "@/data/portfolio-data";
import { staggerContainer } from "@/lib/animation-variants";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  // 함수 참조를 고정해 모달의 useEffect(ESC·스크롤 잠금)가 불필요하게 다시 실행되지 않게 함
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Projects" subtitle="주요 프로젝트" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projectsData.map((project) => (
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
