"use client";

import { motion } from "motion/react";
import { staggerItem } from "@/lib/animation-variants";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectThumbnail from "@/components/ui/ProjectThumbnail";
import type { ProjectCategory } from "@/data/portfolio-data";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: ProjectCategory[];
  language: string;
  thumbnail?: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  featured,
  category,
  language,
  thumbnail,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${title} 상세 보기`}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return; // 안쪽 링크에서 누른 키는 무시
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault(); // 스페이스 키로 페이지가 스크롤되지 않게
          onClick();
        }
      }}
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className={`group cursor-pointer relative flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-purple/40 transition-all duration-300 ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      {/* Gradient top accent */}
      <div className="h-1 bg-gradient-to-r from-purple to-cyan" />

      <ProjectThumbnail title={title} language={language} category={category} thumbnail={thumbnail} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-purple transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-text-secondary hover:text-cyan transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-text-secondary hover:text-cyan transition-colors"
                aria-label="Live demo"
              >
                <FaExternalLinkAlt className="text-lg" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-purple group-hover:text-cyan transition-colors">
          자세히 보기 <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </span>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-purple/5 to-transparent" />
    </motion.div>
  );
}
