"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedText from "@/components/ui/AnimatedText";
import ParticleBackground from "@/components/ui/ParticleBackground";
import GradientButton from "@/components/ui/GradientButton";
import { personalInfo } from "@/data/portfolio-data";
import { FaArrowDown, FaFileDownload, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const [phase, setPhase] = useState<"loading" | "split" | "content">("loading");
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("split"), 600);
    const t2 = setTimeout(() => setPhase("content"), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX / width - 0.5) * 30,
        y: (e.clientY / height - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Loading overlay */}
      <AnimatePresence>
        {(phase === "loading" || phase === "split") && (
          <>
            {/* Left panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={phase === "split" ? { x: "-100%" } : { x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="fixed inset-y-0 left-0 w-1/2 bg-background z-50"
            />
            {/* Right panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={phase === "split" ? { x: "100%" } : { x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="fixed inset-y-0 right-0 w-1/2 bg-background z-50"
            />
            {/* Center line */}
            {phase === "loading" && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-[2px] bg-gradient-to-r from-purple to-cyan z-[51]"
              />
            )}
          </>
        )}
      </AnimatePresence>

      {/* Particle background */}
      {phase === "content" && <ParticleBackground />}

      {/* Gradient orbs - parallax */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--gradient-purple), transparent)" }}
      />
      <motion.div
        animate={{ x: -mousePos.x, y: -mousePos.y }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--gradient-cyan), transparent)" }}
      />

      {/* Content */}
      {phase === "content" && (
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Code tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="font-mono text-sm text-text-secondary px-4 py-2 rounded-full border border-border bg-card/50">
              &lt;/&gt; {personalInfo.location}
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <AnimatedText text={personalInfo.name} delay={0.2} className="gradient-text" />
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-text-secondary mb-4 font-light"
          >
            {personalInfo.title}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-base md:text-lg text-text-secondary/70 mb-10 max-w-2xl mx-auto"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GradientButton
              href="#projects"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </GradientButton>
            {personalInfo.resumeUrl ? (
              <GradientButton href={personalInfo.resumeUrl} variant="outline">
                <FaFileDownload /> Resume
              </GradientButton>
            ) : (
              <GradientButton href={personalInfo.github} variant="outline">
                <FaGithub /> GitHub
              </GradientButton>
            )}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-text-secondary/50"
            >
              <span className="text-xs font-mono">scroll</span>
              <FaArrowDown className="text-sm" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
