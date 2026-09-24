import type { Variants } from "motion/react";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const letterAnimation: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
    y: 20,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const heroOverlay: Variants = {
  initial: { scaleX: 1 },
  animate: {
    scaleX: 0,
    transition: {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const lineExpand: Variants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const progressBar: Variants = {
  hidden: { width: "0%" },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.3,
    },
  }),
};

export const timelineLine: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const cardHover = {
  scale: 1.02,
  transition: { duration: 0.3, ease: "easeOut" },
};
