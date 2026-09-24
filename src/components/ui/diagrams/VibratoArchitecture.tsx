import { FaUser, FaAws, FaDatabase, FaImage } from "react-icons/fa";
import { SiGithub, SiGithubactions, SiNestjs } from "react-icons/si";

// Vibrato 배포 구성도 — 이미지 대신 HTML로 그려서 어떤 크기·테마에서도 선명하게 보이도록 함

function Node({
  icon,
  title,
  sub,
  accent = false,
}: {
  icon: React.ReactNode;
  title: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 min-w-0 ${
        accent ? "border-cyan/50 bg-cyan/10" : "border-border bg-background/60"
      }`}
    >
      <span className={`shrink-0 text-xl ${accent ? "text-cyan" : "text-purple"}`}>{icon}</span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground">{title}</span>
        {sub && <span className="block text-xs text-text-secondary">{sub}</span>}
      </span>
    </div>
  );
}

// 화살표: 모바일에서는 아래 방향, 넓은 화면에서는 오른쪽 방향
function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-text-secondary py-1 md:py-0 md:px-1" aria-hidden>
      {label && <span className="text-[10px] font-mono mb-0.5">{label}</span>}
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </div>
  );
}

export default function VibratoArchitecture() {
  return (
    <figure className="rounded-xl border border-border bg-card p-4 md:p-6 space-y-6" aria-label="Vibrato 배포 구성도">
      {/* 요청 흐름 */}
      <div>
        <p className="mb-3 text-xs font-mono text-text-secondary">요청 흐름</p>
        <div className="flex flex-col md:flex-row md:items-center">
          <Node icon={<FaUser />} title="사용자" sub="브라우저" />
          <Arrow label="HTTPS" />
          <Node icon={<SiNestjs />} title="EC2" sub="NestJS API 서버" accent />
          <Arrow />
          <div className="flex flex-col gap-2 md:flex-1">
            <Node icon={<FaImage />} title="S3" sub="프로필 이미지 등 정적 파일" />
            <Node icon={<FaDatabase />} title="RDS" sub="MySQL / MariaDB" />
          </div>
        </div>
      </div>

      {/* 배포 흐름 */}
      <div className="border-t border-border pt-5">
        <p className="mb-3 text-xs font-mono text-text-secondary">배포 흐름</p>
        <div className="flex flex-col md:flex-row md:items-center">
          <Node icon={<SiGithub />} title="GitHub" sub="저장소에 push" />
          <Arrow />
          <Node icon={<SiGithubactions />} title="GitHub Actions" sub="배포 워크플로 실행" />
          <Arrow label="deploy" />
          <Node icon={<FaAws />} title="EC2" sub="서버 자동 반영" accent />
        </div>
      </div>
    </figure>
  );
}
