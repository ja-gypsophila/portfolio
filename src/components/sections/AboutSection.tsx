"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutData, personalInfo } from "@/data/portfolio-data";
import {
  staggerContainer,
  staggerItem,
  scaleIn,
} from "@/lib/animation-variants";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" subtitle="저에 대해 소개합니다" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile image placeholder */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-cyan p-[3px]">
              <div className="relative w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                {personalInfo.profileImage ? (
                  // 원 안에 꽉 차게, 얼굴이 잘리지 않도록 위쪽 기준으로 자름
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} 프로필 사진`}
                    fill
                    sizes="(min-width: 768px) 320px, 256px"
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  // 사진이 없으면 이니셜 표시
                  <div className="text-6xl md:text-7xl font-bold gradient-text">
                    {personalInfo.initials}
                  </div>
                )}
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple/20 blur-3xl -z-10" />
          </div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {aboutData.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={staggerItem}
              className="text-text-secondary leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        {aboutData.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={staggerItem}
            className="text-center p-6 rounded-xl bg-card border border-border"
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
