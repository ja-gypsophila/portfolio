"use client";

import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { socialLinks, personalInfo } from "@/data/portfolio-data";
import { staggerContainer, staggerItem } from "@/lib/animation-variants";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Contact" subtitle="연락하기" />

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Left: Info & Social */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={staggerItem} className="text-text-secondary leading-relaxed">
            함께 일할 기회를 찾고 있습니다. 편하게 연락 주세요.
          </motion.p>

          <motion.div variants={staggerItem} className="space-y-3">
            <div className="flex items-center gap-3 text-text-secondary">
              <span className="text-purple font-mono text-sm">email:</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <span className="text-purple font-mono text-sm">location:</span>
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={staggerItem} className="flex gap-4 pt-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-card border border-border hover:border-purple/40 flex items-center justify-center text-text-secondary hover:text-purple transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="text-xl" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = `[포트폴리오 문의] ${data.get("name") ?? ""}`;
            const body = `${data.get("message") ?? ""}\n\n회신 이메일: ${data.get("email") ?? ""}`;
            window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}
          className="space-y-4"
        >
          <motion.div variants={staggerItem}>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-purple/60 transition-colors"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-purple/60 transition-colors"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <textarea
              name="message"
              required
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-purple/60 transition-colors resize-none"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <GradientButton type="submit">
              <FaPaperPlane /> Send Message
            </GradientButton>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
