"use client";

import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { careerData } from "@/data/portfolio-data";
import { staggerContainer } from "@/lib/animation-variants";

export default function CareerSection() {
  return (
    <SectionWrapper id="career">
      <SectionHeading title="Career" subtitle="경력 사항" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-3xl mx-auto"
      >
        {careerData.map((item, index) => (
          <TimelineItem
            key={item.id}
            role={item.role}
            company={item.company}
            period={item.period}
            description={item.description}
            technologies={item.technologies}
            index={index}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
