import Image from "next/image";
import type { IconType } from "react-icons";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandCSharp, TbCode } from "react-icons/tb";
import type { ProjectCategory } from "@/data/portfolio-data";

// 주 사용 언어 → 아이콘. 새 언어를 쓰면 여기에 한 줄 추가
const LANGUAGE_ICONS: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C#": TbBrandCSharp,
};

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
};

interface Props {
  title: string;
  language: string;
  category: ProjectCategory[];
  thumbnail?: string;
}

// 카드 상단 썸네일 — 이미지가 있으면 이미지, 없으면 언어 아이콘으로 만든 기본 썸네일
export default function ProjectThumbnail({ title, language, category, thumbnail }: Props) {
  const Icon = LANGUAGE_ICONS[language] ?? TbCode;

  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-background">
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={`${title} 화면`}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0">
          {/* 격자 무늬 + 보라/민트 빛 번짐 — 테마 색 변수를 써서 다크/라이트 모두 어울림 */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-1/3 -left-1/4 w-2/3 h-full rounded-full bg-purple/25 blur-3xl" />
          <div className="absolute -bottom-1/3 -right-1/4 w-2/3 h-full rounded-full bg-cyan/20 blur-3xl" />

          <div className="relative h-full flex flex-col items-center justify-center gap-3">
            <Icon
              aria-hidden
              className="text-6xl text-foreground/80 transition-transform duration-500 group-hover:scale-110"
            />
            <span className="font-mono text-sm tracking-wide text-text-secondary">{language}</span>
          </div>
        </div>
      )}

      {/* 분류 배지 */}
      <div className="absolute top-3 left-3 flex gap-1.5">
        {category.map((c) => (
          <span
            key={c}
            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-card/85 backdrop-blur border border-border text-foreground"
          >
            {CATEGORY_LABEL[c]}
          </span>
        ))}
      </div>

      {/* 언어 배지 (이미지 썸네일일 때만 — 기본 썸네일은 가운데에 이미 표시) */}
      {thumbnail && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-card/85 backdrop-blur border border-border text-foreground">
          <Icon aria-hidden /> {language}
        </span>
      )}
    </div>
  );
}
