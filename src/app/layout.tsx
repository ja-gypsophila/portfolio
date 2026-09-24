import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김장훈 | Frontend Developer Portfolio",
  description:
    "데이터가 어떻게 화면이 되는지까지 이해하는 프론트엔드 개발자 김장훈의 포트폴리오",
  keywords: [
    "김장훈",
    "프론트엔드",
    "portfolio",
    "react",
    "next.js",
    "typescript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // next-themes가 <html>에 data-theme를 먼저 붙이므로 이 태그의 서버/클라이언트 차이 경고만 끔
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
