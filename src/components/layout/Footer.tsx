"use client";

import { socialLinks, personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()}{" "}
          <span className="gradient-text font-medium">{personalInfo.logo}</span>. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-purple transition-colors"
                aria-label={link.label}
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
