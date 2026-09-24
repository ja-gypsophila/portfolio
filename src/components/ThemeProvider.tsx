"use client";

// next-themes의 Provider는 클라이언트 컴포넌트라서, 서버 컴포넌트인 layout.tsx에서 쓰기 위해 한 번 감쌉니다.
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme" // <html data-theme="light|dark"> — globals.css의 선택자와 맞춤
      defaultTheme="system" // 저장된 선택이 없으면 OS 설정을 따름
      enableSystem
      storageKey="theme" // 기존에 저장된 값(localStorage "theme")을 그대로 사용
    >
      {children}
    </NextThemesProvider>
  );
}
