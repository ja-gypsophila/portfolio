"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { FaMoon, FaSun } from "react-icons/fa";

// 서버 렌더링 중에는 false, 브라우저에서는 true
// next-themes는 서버에서 테마를 알 수 없으므로, 브라우저에서만 아이콘을 그려 hydration 불일치를 피함
const subscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme(); // resolvedTheme: "system"일 때 실제 적용된 light/dark
  const isClient = useIsClient();
  // hydration 중(isClient === false)에는 서버와 같은 값을 써야 속성 불일치가 생기지 않음
  const isDark = !isClient || resolvedTheme !== "light";
  const label = isDark ? "라이트 모드로 전환" : "다크 모드로 전환";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={`relative w-9 h-9 rounded-lg flex items-center justify-center border border-border bg-card/60 text-text-secondary hover:text-foreground hover:border-purple/40 transition-colors cursor-pointer ${className}`}
    >
      {isClient && resolvedTheme && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={resolvedTheme}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
