import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiHtml5,
  SiNestjs,
  SiMysql,
  SiTypeorm,
  SiVercel,
  SiGithubactions,
  SiFirebase,
  SiVite,
  SiDotnet,
} from "react-icons/si";
import { TbPlugConnected, TbChartLine } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import type { ComponentType } from "react";
import VibratoArchitecture from "@/components/ui/diagrams/VibratoArchitecture";

// 사이트의 모든 문구·데이터는 이 파일에서 관리합니다.

export const personalInfo = {
  name: "김장훈",
  nameEn: "Kim Janghun",
  initials: "JH",
  logo: "JH.dev",
  title: "Frontend Developer",
  subtitle: "화면과 데이터를 함께 이해하는 프론트엔드 개발자",
  location: "Incheon, Korea",
  email: "kjh03291@gmail.com",
  github: "https://github.com/ja-gypsophila",
  // 이력서 PDF를 public/ 폴더에 넣고 경로를 적으면 Resume 버튼이 나타납니다. 예: "/resume.pdf"
  resumeUrl: "",
  // 프로필 사진: public/ 폴더에 넣고 경로를 적으면 About 섹션의 이니셜 대신 사진이 보입니다. 예: "/profile.jpg"
  profileImage: "/projects/profile/profile.jpg",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const aboutData = {
  bio: [
    "언플러에서 1년 2개월 동안 교육 콘텐츠와 프로모션 페이지를 퍼블리싱·개발했습니다. 드래그앤드롭, OX 퀴즈, 그림 그리기 같은 인터랙션을 직접 구현하고, LMS와 postMessage로 학습 결과를 연동했습니다.",
    "부트캠프에서는 React·TypeScript 프론트엔드와 NestJS 백엔드를 모두 맡아 보면서, 화면 뒤에서 데이터가 어떻게 흐르는지 이해하게 되었습니다.",
    "PLC 자동제어 현장 경험을 바탕으로 WebSocket 기반 실시간 설비 관제 대시보드를 만들며, 복잡한 데이터를 한눈에 읽히는 화면으로 바꾸는 일에 집중하고 있습니다.",
  ],
  stats: [
    { label: "총 경력", value: "1년 7개월" },
    { label: "FE 실무", value: "1년 2개월" },
    { label: "Projects", value: "5" },
    { label: "Team Projects", value: "3" },
  ],
};

export const careerData = [
  {
    id: 1,
    role: "FE Development 사원 · 퍼블리셔",
    company: "언플러",
    period: "2025.01 - 2026.02",
    description:
      "미래엔 달달 독해 콘텐츠 프론트엔드 개발(2인), 천재교육·YBM 프로모션 페이지와 자사 홈페이지 퍼블리싱. 인터랙티브 학습 컴포넌트 구현과 LMS postMessage 연동.",
    technologies: ["HTML/CSS", "Tailwind CSS", "JavaScript", "jQuery"],
  },
  {
    id: 2,
    role: "웹 풀스택 부트캠프 (교육)",
    company: "프로그래머스",
    period: "2024.04 - 2024.10",
    description:
      "팀 프로젝트 2건 수행 — 야구볼램(6인, 프론트엔드: Firebase 인증·배포), Vibrato(5인, 팀 리더 겸 백엔드: ERD 설계·AWS 배포).",
    technologies: ["React", "TypeScript", "NestJS", "MySQL", "AWS"],
  },
  {
    id: 3,
    role: "제어 · 자동제어 사원",
    company: "북두엔지니어링",
    period: "2022.11 - 2023.03",
    description:
      "현대모비스 포승 공장 증설 현장 파견. 도면 해독, I/O 배선, 설비 동작 검증, 미쓰비시 MELSEC PLC 래더 로직 작성.",
    technologies: ["MELSEC PLC", "Ladder Logic"],
  },
];

export type SkillCategory = "frontend" | "backend" | "devops" | "tools";

export const skillCategories: { key: SkillCategory; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "Infra" },
  { key: "tools", label: "Etc" },
];

// level(0~100)을 적으면 카드에 숙련도 막대가 표시됩니다. 비워두면 막대 없이 표시됩니다.
export const skillsData: Record<
  SkillCategory,
  {
    name: string;
    level?: number;
    icon: React.ComponentType<{ className?: string }>;
  }[]
> = {
  frontend: [
    { name: "React", icon: FaReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Recharts", icon: TbChartLine },
    { name: "jQuery", icon: SiJquery },
    { name: "HTML / CSS", icon: SiHtml5 },
    { name: "Vite", icon: SiVite },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "WebSocket (ws)", icon: TbPlugConnected },
    { name: "NestJS", icon: SiNestjs },
    { name: "TypeORM", icon: SiTypeorm },
    { name: "MySQL", icon: SiMysql },
    { name: "MS-SQL", icon: DiMsqlServer },
  ],
  devops: [
    { name: "Vercel", icon: SiVercel },
    { name: "AWS (EC2 · RDS · S3)", icon: FaAws },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Firebase Auth", icon: SiFirebase },
    { name: "Git", icon: FaGitAlt },
  ],
  tools: [{ name: "C# / .NET WinForms", icon: SiDotnet }],
};

// ─── 프로젝트 ────────────────────────────────────────────────
// 카드에는 description·technologies만 보이고, 클릭하면 모달에 나머지가 표시됩니다.
// 선택(?) 필드는 값이 있을 때만 모달에 해당 섹션이 나타납니다.

export type Stat = { value: string; label: string; note?: string };

export type Feature = {
  title: string;
  points: string[];
  files?: string; // 관련 파일
};

export type Troubleshooting = {
  title: string;
  commit?: string;
  problem: string; // 문제 상황
  cause?: string; // 원인
  solution: string; // 해결 방법
  code?: string; // diff 형식 코드 (+ / - 로 시작하는 줄에 색 표시)
  result?: string; // 결과
};

export type Screenshot = { src: string; caption: string };
export type Note = { title: string; body: string };
export type InfoRow = { label: string; value: string; href?: string };

// 설계 과정 블록 — 설명 + (이미지 / 표 / 제목·본문 목록)을 자유롭게 조합
export type CodeFile = { filename: string; content: string };

// 설계 과정 블록 — 설명 + (이미지 / 다이어그램 / 트리 / 코드 / 표 / 제목·본문 목록)을 자유롭게 조합
export type DesignBlock = {
  title: string;
  description?: string;
  image?: {
    src: string;
    srcDark?: string; // 다크 모드용 이미지 (SVG 다이어그램 등)
    alt: string;
    width: number;
    height: number;
    caption?: string;
    narrow?: boolean;
    scrollMinWidth?: number; // 큰 다이어그램은 이 폭 아래로 줄이지 않고 가로 스크롤
  };
  diagram?: ComponentType; // 코드로 그린 다이어그램 컴포넌트
  tree?: string; // 폴더 구조 등 텍스트 트리
  code?: CodeFile[];
  table?: { headers: string[]; rows: string[][] };
  notes?: Note[];
};

export type Project = {
  id: number;
  title: string;
  description: string; // 카드 요약
  overview: string; // 모달 상단 소개
  role: string;
  duration: string;
  team: string; // 비워 두면 모달에서 숨김
  technologies: string[];
  mainTechnologies?: string[]; // 본인이 직접 다룬 기술 (모달에서 강조)
  details: string[]; // features가 없을 때 '주요 구현'으로 표시
  notice?: string; // 배포 종료 안내 등
  stats?: Stat[];
  featuresTitle?: string; // 기본값 "구현 기능 상세"
  features?: Feature[];
  techNotes?: Feature[]; // 기술별 활용 내용
  design?: DesignBlock[]; // 설계 과정 (ERD, 폴더 구조, 컨벤션 등)
  troubleshooting?: Troubleshooting[];
  screenshots?: Screenshot[];
  retrospective?: Note[]; // 다시 만든다면 고칠 점
  learnings?: Note[];
  infoRows?: InfoRow[]; // 담당 PR, 주요 커밋 등
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "미래엔 달달 독해 콘텐츠",
    description:
      "[실무 · 2인] 초등 독해 학습 콘텐츠를 레벨·차시별 4단계 구조로 제작. 드래그앤드롭·OX 퀴즈·그림 그리기 인터랙션과 LMS postMessage 연동 구현.",
    overview:
      "초등학생 대상 독해 학습 콘텐츠를 레벨·차시별 4단계 구조로 제작한 실무 프로젝트입니다. 언플러 재직 중 2명이 함께 진행했습니다.",
    details: [
      "드래그앤드롭, OX 퀴즈, 그림 그리기 등 인터랙티브 컴포넌트 설계·구현",
      "pageData.js 기반 데이터 구조로 다수의 학습 페이지 제작",
      "LMS와 postMessage 통신으로 학습 결과 연동",
    ],
    role: "프론트엔드 개발",
    duration: "2025.09.30 - 2026.01.26",
    team: "2명",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "Howler.js",
      "HLS.js",
    ],
    liveUrl: "",
    githubUrl:
      "https://github.com/ja-gypsophila/PF_miraen_dal_doc/commits/master/",
    featured: true,
  },

  {
    id: 2,
    title: "Factory Twin",
    description:
      "[개인] 스마트팩토리 설비 4대의 OEE를 실시간으로 보여주는 관제 대시보드. WebSocket 서버가 1초마다 스냅샷을 보내고 React가 KPI 카드와 차트로 시각화.",
    overview:
      "스마트팩토리 설비의 OEE(종합설비효율)를 실시간으로 시각화하는 관제 대시보드입니다. WebSocket으로 매초 갱신되는 설비 데이터를 받아, 공장 전체 현황부터 설비별 상세 진단까지 드릴다운합니다.",
    details: [
      "WebSocket 연결을 Context로 공유, 지수 백오프(300ms → 5s) 자동 재연결",
      "OEE(가용성 × 성능 × 품질), MTBF / MTTR 계산",
      "제약 이론 기반 병목 공정 탐지",
      "수치 → 등급 → 색상 규칙 중앙화, 설정 기반 설비 확장",
    ],
    features: [
      {
        title: "실시간 설비 데이터 수집 · 전송",
        points: [
          "Node.js WebSocket 서버가 4종 설비(프레스·용접·사출·검사)의 상태 스냅샷을 매초 클라이언트로 push하도록 구현",
          "연결이 끊기면 지수 백오프(300ms → 5s)로 자동 재연결해 화면이 멈추지 않도록 처리",
        ],
      },
      {
        title: "OEE 및 설비 신뢰성 지표 산출",
        points: [
          "OEE를 가용성 × 성능 × 품질로 계산하고 MTBF·MTTR 신뢰성 지표를 함께 산출",
          "가동 시간(08–19시) 기준으로 집계하고 자정 리셋과 7일 롤오버 적용",
          "서버 재시작 시 지난 시간 구간을 backfill하도록 처리",
        ],
      },
      {
        title: "병목 공정 탐지",
        points: [
          "제약 이론(Theory of Constraints)에 기반해, 후공정이 전공정의 WIP에 의해 제한되는 관계를 계산하여 전체 라인의 병목 설비를 판별",
        ],
      },
      {
        title: "관제 화면 설계 (마스터–디테일 드릴다운)",
        points: [
          "SCADA/HMI 톤의 관제 화면을 구성하고, 공장 전체 현황(/)에서 설비별 상세 진단(/machine/:id)으로 드릴다운하는 구조 설계",
          "WebSocket 연결은 Context로 하나만 공유해 중복 연결을 방지",
        ],
      },
      {
        title: "수치 → 등급 → 색상 규칙 중앙화",
        points: [
          "KPI 카드·진행 바·차트가 제각각 색을 쓰지 않도록 등급·색상 규칙을 theme/levels 한곳에 모음",
          "설비 종류도 constants/ 맵으로 관리해, 새 설비를 추가할 때 컴포넌트를 수정하지 않아도 되도록 설계",
        ],
      },
    ],
    role: "프론트엔드 · 백엔드",
    duration: "2026.06.26 - 2026.07.15",
    team: "1명 (개인)",
    technologies: [
      "React 19",
      "Recharts",
      "React Router v7",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "WebSocket (ws)",
    ],
    liveUrl: "https://pf-factory-twin.vercel.app",
    githubUrl: "https://github.com/ja-gypsophila/PF_Factory_Twin",
    featured: true,
  },
  {
    id: 3,
    title: "야구볼램",
    description:
      "[팀 · 6인] 실시간 야구경기 정보와 직관기록을 남기는 PWA 플랫폼. Firebase 인증 전체와 axios 인증 인터셉터, 공통 Toast, PWA 구성 담당.",
    overview:
      "Firebase Authentication 기반의 회원가입 · 로그인 · 비밀번호 재설정 · Google/GitHub 소셜 로그인 기능 전체를 맡아 구현했고, 백엔드 API 연동 과정에서 생긴 인증 토큰 누락·재사용 문제를 axios 인터셉터로 해결했습니다. 공통 Toast 알림 컴포넌트와 PWA 아이콘·manifest 구성도 담당했습니다.",
    notice:
      "당시 Vercel로 배포했던 서비스는 현재 운영이 종료되었습니다. 아래 화면은 GitHub 저장소 소스를 로컬에서 실행해 캡처했습니다(백엔드·Firebase 미연결 상태).",
    role: "프론트엔드 · 인증(Auth) 파트",
    duration: "2024.08.07 - 2024.08.26",
    team: "6명",
    technologies: [
      "React 18",
      "TypeScript",
      "Firebase Auth",
      "zustand",
      "axios",
      "react-hook-form",
      "React Router v6",
      "TanStack Query",
      "Tailwind CSS",
      "react-toastify",
      "Vite",
      "vite-plugin-pwa",
      "ESLint · Prettier",
      "Vercel",
    ],
    mainTechnologies: [
      "React 18",
      "TypeScript",
      "Firebase Auth",
      "zustand",
      "axios",
      "react-hook-form",
    ],
    stats: [
      {
        value: "32건",
        label: "본인 커밋 (merge 포함)",
        note: "merge 제외 22건",
      },
      {
        value: "8건",
        label: "본인 커밋이 포함된 머지 PR",
        note: "Auth 7건 · PWA 1건",
      },
      {
        value: "888줄",
        label: "최종 코드에 남은 본인 작성 코드",
        note: "src/ 기준 git blame",
      },
      {
        value: "15%",
        label: "src/ 전체 약 5,950줄 중 비중",
        note: "팀원 6명 중",
      },
    ],
    details: [
      "Firebase 인증으로 회원가입 · 로그인 · 비밀번호 재설정, Google · GitHub 소셜 로그인",
      "axios 공통 클라이언트와 인증 인터셉터",
      "공통 Toast 알림 컴포넌트, PWA 아이콘 · manifest 정비",
      "Vercel 배포 및 도메인 설정",
    ],
    features: [
      {
        title: "이메일 회원가입",
        points: [
          "react-hook-form으로 이메일·비밀번호·비밀번호 확인 검증, 비밀번호 불일치 시 validate로 즉시 안내",
          "닉네임 중복 확인 API를 호출하고, 확인되지 않으면 isNicknameAvailable 상태로 가입 요청 자체를 막음",
          '입력값 검증(trigger) 통과 후에만 응원 구단 선택 모달(KBO 10개 구단)을 띄우는 2단계 흐름 — "다음에 하기"로 건너뛰기 가능',
          "Firebase createUserWithEmailAndPassword로 계정을 만든 뒤, 닉네임·프로필 이미지·응원 구단을 백엔드 /users/join에 등록",
          "Firebase 에러 코드 5종(이메일 중복, 약한 비밀번호, 네트워크 오류, 이메일 형식, 내부 오류)을 한국어 Toast 메시지로 변환",
        ],
        files: "Signup.tsx · useAuth.ts · apis/auth.ts",
      },
      {
        title: "로그인 · 인증 상태 관리",
        points: [
          "signInWithEmailAndPassword로 로그인 후 zustand 스토어(storeLogin)에 로그인 상태 저장",
          "스토어 초기값을 localStorage 값으로 설정해 새로고침 후에도 로그인 상태 유지",
          "useAuth 커스텀 훅으로 로그인·회원가입·닉네임 확인 로직을 모아 페이지 컴포넌트는 UI에만 집중하도록 분리",
          "로그인·가입 완료 시 Toast 알림 후 홈/로그인 페이지로 이동",
        ],
        files: "Login.tsx · authStore.ts · useAuth.ts",
      },
      {
        title: "소셜 로그인 (Google · GitHub)",
        points: [
          "GoogleAuthProvider · GithubAuthProvider와 signInWithPopup으로 팝업 인증",
          "인증 결과의 이메일·프로필 사진으로 사용자 정보를 구성해 백엔드 회원 등록까지 한 번에 처리",
          "초기에 작성했던 카카오 로그인 코드를 정리하고, Firebase가 기본 지원하는 Google/GitHub으로 방식 통일",
        ],
        files: "GoogleButton.tsx · GithubButton.tsx",
      },
      {
        title: "비밀번호 재설정 · 공통 Toast · PWA",
        points: [
          "Firebase sendPasswordResetEmail로 재설정 링크 메일 발송",
          "react-toastify를 감싼 공통 Toast 컴포넌트와 showToast(message, type) 함수를 만들어 팀 전체가 같은 방식으로 알림을 띄우도록 제공",
          "PWA 설치용 아이콘 5종(16~196px) 추가 및 manifest.json 정비",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "회원가입 직후 API 요청에 토큰이 비어 있던 문제",
        commit: "c372984",
        problem:
          "Firebase 계정 생성 직후 백엔드에 회원 등록을 요청하면 인증에 실패했습니다.",
        cause:
          "axios 인터셉터가 localStorage에 저장된 토큰을 꺼내 헤더에 넣는 구조였는데, 토큰은 로그인할 때만 저장되므로 가입 시점에는 값이 없어 Bearer null이 전송되었습니다.",
        solution:
          "Firebase auth.currentUser에서 ID 토큰을 직접 발급받는 getAuthToken()을 만들고, 가입 요청에 이 토큰을 명시적으로 넣었습니다. 토큰이 없으면 헤더를 붙이지 않도록 인터셉터도 수정했습니다.",
      },
      {
        title: "저장해 둔 ID 토큰을 계속 재사용하던 구조 개선",
        commit: "20116cd",
        problem:
          "ID 토큰 문자열을 localStorage에 저장하고 모든 요청에서 그 값을 그대로 사용했습니다. Firebase ID 토큰은 약 1시간 뒤 만료되기 때문에, 오래 켜 둔 화면에서는 저장된 토큰이 더 이상 유효하지 않을 수 있습니다. 토큰이 브라우저 저장소에 그대로 노출되는 점도 문제였습니다.",
        solution:
          "요청마다 user.getIdToken()을 호출하도록 인터셉터를 바꿨습니다(Firebase SDK가 만료 전 자동 갱신). localStorage에는 토큰 대신 uid만 로그인 여부 표시용으로 저장하도록 역할을 나눴습니다.",
        code: `// apis/apiClient.ts — 요청 인터셉터
instance.interceptors.request.use(async (config) => {
-   const token = getToken();                  // localStorage에 저장된 토큰 재사용
+   const user  = auth.currentUser;
+   const token = await user?.getIdToken();    // 요청마다 유효한 토큰 발급 (SDK가 자동 갱신)
    if (token) config.headers.Authorization = \`Bearer \${token}\`;
    return config;
});`,
      },
      {
        title: "닉네임 중복·필드명 불일치로 가입이 실패하던 문제",
        commit: "7c1c11d",
        problem:
          "이미 사용 중인 닉네임으로 가입하거나, 프론트에서 보낸 가입 데이터가 서버에 제대로 저장되지 않는 오류가 있었습니다.",
        cause:
          "① 닉네임 중복을 미리 확인하는 과정이 없었고, ② 프론트가 image · team이라는 이름으로 보내던 필드를 서버는 profileImageUrl · myTeam으로 받고 있었습니다.",
        solution:
          "요청 필드명을 서버 스키마에 맞게 수정하고, 닉네임 중복 확인 API를 연동했습니다. 중복 확인을 통과하지 않으면 가입 버튼이 동작하지 않고 경고 Toast를 띄우도록 했습니다.",
      },
    ],
    screenshots: [
      {
        src: "/projects/yagu-bolram/01-login.webp",
        caption: "로그인 · 소셜 로그인",
      },
      { src: "/projects/yagu-bolram/02-signup.webp", caption: "회원가입" },
      {
        src: "/projects/yagu-bolram/03-validation-toast.webp",
        caption: "입력 검증 + Toast",
      },
      {
        src: "/projects/yagu-bolram/04-team-select.webp",
        caption: "응원 구단 선택",
      },
      {
        src: "/projects/yagu-bolram/05-reset-password.webp",
        caption: "비밀번호 재설정",
      },
    ],
    retrospective: [
      {
        title: "401 응답 처리",
        body: "응답 인터셉터 안에서 useNavigate()를 호출하고 있는데, 이는 컴포넌트 밖이라 React 훅 규칙상 동작하지 않습니다. 라우터 인스턴스의 router.navigate()를 쓰거나 인증 만료 이벤트를 전역 스토어로 전달하는 방식으로 바꾸겠습니다.",
      },
      {
        title: "가입 실패 시 계정 정리",
        body: "Firebase 계정 생성 후 백엔드 등록이 실패하면 두 곳의 회원 정보가 어긋납니다. 실패 시 deleteUser()로 되돌리는 처리가 필요합니다.",
      },
      {
        title: "소셜 로그인 재방문자 분기",
        body: "현재는 로그인할 때마다 가입 API를 호출하므로, 기존 회원인지 먼저 조회한 뒤 가입/로그인을 나누겠습니다.",
      },
      {
        title: "알림 방식 통일",
        body: "비밀번호 재설정 화면에 남아 있는 alert()를 직접 만든 Toast로 통일하겠습니다.",
      },
    ],
    learnings: [
      {
        title: "인증 흐름을 처음부터 끝까지",
        body: "외부 인증(Firebase)과 자체 백엔드 회원 정보를 연결하면서, 토큰을 어디서 발급하고 어디에 저장하고 언제 보내는지를 직접 설계해 볼 수 있었습니다.",
      },
      {
        title: "API 규격 협업",
        body: "필드명 불일치로 인한 오류를 겪은 뒤, 연동 전에 백엔드와 요청·응답 형식을 먼저 합의하는 습관이 생겼습니다.",
      },
    ],
    infoRows: [
      {
        label: "담당 PR",
        value:
          "#15 · #18 · #19 · #20 · #26 · #27 · #30 (feature/pages-Auth), #32 (feature/pages-pwa)",
      },
      {
        label: "주요 커밋",
        value:
          "8ed49a7 Firebase 적용 · 9b63c9a 구단 선택 모달 · 1efdf5a 소셜 로그인 · 7c1c11d 닉네임 중복 · c372984 토큰 이슈 · 1e9f752 Toast · 20116cd 토큰 구조 개선",
      },
      { label: "배포", value: "Vercel (현재 운영 종료)" },
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Baseball-Archive/client",
    featured: true,
  },
  {
    id: 4,
    title: "Vibrato",
    description:
      "[팀 · 5인] 음악 평가·소통 커뮤니티. 팀 리더로 참여, 종료 2주 전 백엔드를 이어받아 7개 테이블 ERD 설계와 AWS 배포까지 완료.",
    overview:
      "음악을 평가하고 유저들과 소통하는 커뮤니티입니다. 팀 리더로 참여했고, 종료 2주 전 백엔드 인원이 이탈한 뒤 4일 동안 RDBMS를 익혀 백엔드 개발 전반을 직접 담당했습니다.",
    notice: "서비스(vibrato1.shop)는 현재 운영이 종료되었습니다.",
    details: [
      "Firebase 인증 기반 회원가입 · 로그인",
      "리뷰 · 댓글 CRUD, 팔로우 · 좋아요",
      "AWS EC2 · S3 · RDS 배포, GitHub Actions",
    ],
    featuresTitle: "내가 기여한 부분",
    features: [
      {
        title: "회원가입 및 로그인",
        points: [
          "Firebase 인증을 활용해 사용자 관리 및 보안성을 높였습니다.",
          "Firebase SDK를 통해 인증 및 스토리지 연동 코드를 직접 작성했습니다.",
        ],
      },
      {
        title: "리뷰 및 댓글",
        points: [
          "사용자들이 자신만의 음악 리뷰를 작성하고 서로 의견을 나눌 수 있도록 CRUD 기능을 구축했습니다.",
        ],
      },
      {
        title: "팔로우 및 좋아요",
        points: [
          "유저 간의 상호작용을 강화하고, 사용자 경험을 극대화하기 위한 기능들을 구현했습니다.",
        ],
      },
      {
        title: "백엔드 배포",
        points: [
          "AWS EC2 및 S3, RDS 등을 활용하여 안정적인 클라우드 환경에서 배포했습니다.",
        ],
      },
    ],
    techNotes: [
      {
        title: "TypeScript · NestJS",
        points: [
          "CRUD 방식으로 안정적이고 일관성 있는 코드 설계 및 개발을 진행했습니다.",
          "Jest로 유닛 테스트를 수행해 코드의 안정성과 신뢰성을 확보했습니다.",
          "Firebase 인증을 위해 UseGuard를 적용한 인증/인가 기능을 개발했습니다.",
          "Interceptor를 활용하여 API 요청 시 URL 로깅을 구현해 모니터링을 강화했습니다.",
        ],
      },
      {
        title: "TypeORM · MySQL / MariaDB",
        points: [
          "각 엔티티 테이블을 설계하고, 컬럼 간의 관계를 설정해 데이터베이스 구조를 효율적으로 구축했습니다.",
          "FK 및 PK를 설정하여 데이터 무결성을 유지했습니다.",
        ],
      },
      {
        title: "AWS 인프라",
        points: [
          "EC2: 서버를 클라우드에 배포하고, HTTPS 프로토콜로 보안성을 강화했습니다.",
          "S3: 이미지를 안정적으로 저장 및 제공할 수 있도록 스토리지 서비스와 연동했습니다.",
          "RDS: 클라우드 기반 관계형 데이터베이스를 활용해 데이터를 안정적으로 관리했습니다.",
        ],
      },
    ],
    design: [
      {
        title: "ERD 설계",
        description:
          "기능 구현 전에 데이터 구조를 먼저 확정했습니다. 총 7개 테이블, PK/FK 관계를 명시해 데이터 무결성을 확보했습니다. 아래 다이어그램은 실제 TypeORM entity 코드를 기준으로 다시 그렸습니다.",
        image: {
          src: "/projects/vibrato/erd-light.svg",
          srcDark: "/projects/vibrato/erd-dark.svg",
          alt: "Vibrato ERD — users, reviews, comments, follows, likes_reviews, likes_comments, likes_type 7개 테이블 관계도",
          width: 1633,
          height: 1158,
          scrollMinWidth: 960,
        },
        table: {
          headers: ["테이블", "역할"],
          rows: [
            [
              "users",
              "회원 정보. Firebase uid 기준으로 닉네임·프로필 이미지 관리",
            ],
            [
              "reviews",
              "앨범·트랙·아티스트에 대한 리뷰. 평점(rated)·제목·본문 보관",
            ],
            ["comments", "리뷰에 달리는 댓글"],
            ["follows", "유저 간 팔로우 관계"],
            ["likes_reviews / likes_comments", "리뷰 좋아요 / 댓글 좋아요"],
            ["likes_type", "트랙·앨범·아티스트 좋아요 구분"],
          ],
        },
      },
      {
        title: "API 명세서",
        description: "API 계약을 문서로 먼저 확정한 뒤 구현했습니다.",
        table: {
          headers: ["도메인", "정의한 기능"],
          rows: [
            ["로그인 / 회원가입", "회원가입, 로그인, 회원정보 조회 및 수정"],
            [
              "리뷰",
              "전체 조회, 작성, 수정, 삭제, 앨범·트랙·아티스트별 조회, 내가 작성한 리뷰 조회, 특정 리뷰 조회",
            ],
            [
              "댓글",
              "작성, 수정, 삭제, 해당 리뷰 전체 댓글 조회, 내가 작성한 댓글 조회, 특정 댓글 조회",
            ],
            [
              "좋아요 · 팔로우",
              "리뷰·댓글 좋아요 추가·취소·조회, 팔로우 추가·취소",
            ],
            [
              "Spotify API 연동",
              "차트 조회(한국·글로벌 Top 50, 주간 50, 최신곡), 장르별 조회, 통합·트랙·아티스트·앨범 검색, 상세 조회",
            ],
          ],
        },
      },
      {
        title: "백엔드 폴더 구조",
        description:
          "공통 속성, 애플리케이션 설정, 기능 모듈을 계층으로 분리해 어떤 코드가 어디에 있어야 하는지 팀원이 헷갈리지 않도록 구성했습니다.",
        tree: "src/\n├─ common/                 # 전역 공통 속성\n│  ├─ decorators/          # SkipAuth, SkipAuthOptional\n│  ├─ filters/\n│  ├─ guards/              # FirebaseAuthGuard\n│  ├─ interceptors/        # 요청 URL 로깅\n│  └─ utils/\n├─ configs/\n│  ├─ firebase/            # FirebaseService\n│  └─ firbase.config.ts\n├─ modules/                # 기능별 API 모듈\n│  ├─ auth/\n│  ├─ charts/\n│  ├─ comments/\n│  ├─ follows/\n│  ├─ likes/\n│  ├─ musics/\n│  ├─ reviews/\n│  ├─ searchs/\n│  └─ selected/\n├─ types/\n│  └─ express.d.ts         # request.user 타입 확장\n├─ app.controller.ts\n├─ app.module.ts\n├─ app.service.ts\n└─ main.ts",
        notes: [
          {
            title: "common",
            body: "파일 전역에서 쓰이는 속성 정의. decorators · filters · guards · interceptors · utils로 나누어, 인증 가드와 요청 로깅 인터셉터를 기능 모듈과 분리했습니다. 인증 정책이 바뀌어도 각 기능 모듈을 건드리지 않아도 됩니다.",
          },
          {
            title: "configs",
            body: "애플리케이션 설정 및 관리 정의. Firebase 설정(firbase.config.ts)과 FirebaseService(configs/firebase)를 한곳에 모았습니다.",
          },
          {
            title: "modules",
            body: "API 모듈을 기능별로 정의. auth · charts · comments · follows · likes · musics · reviews · searchs · selected 아홉 개 모듈로 나누어, 도메인별로 컨트롤러·서비스·엔티티가 함께 위치하도록 구성했습니다.",
          },
          {
            title: "루트",
            body: "app.module.ts에서 모듈을 등록하고, types/express.d.ts로 인증 후 request.user가 주입된 커스텀 Request 타입을 선언했습니다.",
          },
        ],
      },
      {
        title: "로그인 / 회원가입 인증 처리 — 문제와 해결",
        description:
          "Firebase ID 토큰 검증을 NestJS Guard로 옮기면서 마주친 문제와, 이를 어떻게 해결했는지 정리했습니다.",
        notes: [
          {
            title: "Firebase ID 토큰 검증 오류",
            body: '만료된 토큰과 유효하지 않은 토큰을 구분해서 처리했습니다. verifyIdToken에서 auth/id-token-expired 오류가 나면 "Unauthorized: ID token has expired", auth/invalid-id-token이면 "Unauthorized: Invalid ID token" 메시지와 함께 401을 반환합니다.',
          },
          {
            title: "유연한 인증 예외 처리",
            body: "SkipAuth · SkipAuthOptional 데코레이터(SetMetadata)를 만들고 Guard에서 Reflector로 읽어, 인증을 건너뛰거나 토큰이 있을 때만 검증하도록 해 인증 로직의 유연성을 확보했습니다.",
          },
          {
            title: "토큰 추출 오류",
            body: 'extractToken 메서드에서 Authorization 헤더가 "Bearer "로 시작하는지 확인하고, 잘못된 형식이면 즉시 401 예외를 던지도록 구현했습니다. 이를 통해 요청을 안전하게 처리하고 명확한 오류 메시지를 전달할 수 있었습니다.',
          },
        ],
        code: [
          {
            filename: "common/guards/firebase-auth.guard.ts",
            content: `interface CustomRequest extends Request {\n  user?: any;\n}\n\n@Injectable()\nexport class FirebaseAuthGuard implements CanActivate {\n  constructor(\n    private readonly firebaseService: FirebaseService,\n    private readonly reflector: Reflector,\n  ) {}\n\n  async canActivate(context: ExecutionContext): Promise<boolean> {\n    const request: CustomRequest = context.switchToHttp().getRequest();\n    const authHeader = request.headers["authorization"];\n\n    const skipAuth = this.reflector.get<boolean>(\n      SKIP_AUTH_KEY,\n      context.getHandler(),\n    );\n    if (skipAuth) {\n      return true;\n    }\n\n    const skipAuthOptional = this.reflector.get<boolean>(\n      SKIP_AUTH_OPTIONAL_KEY,\n      context.getHandler(),\n    );\n    if (skipAuthOptional) {\n      if (!authHeader) {\n        return true;\n      }\n    }\n\n    const idToken = this.extractToken(authHeader);\n\n    const decodedToken = await this.verifyToken(idToken);\n    request.user = decodedToken;\n\n    return true;\n  }\n\n  private extractToken(authHeader: string): string {\n    if (!authHeader || !authHeader.startsWith("Bearer ")) {\n      throw new HttpException(\n        "Unauthorized: Missing or invalid authorization header",\n        HttpStatus.UNAUTHORIZED,\n      );\n    }\n    return authHeader.split("Bearer ")[1];\n  }\n\n  private async verifyToken(idToken: string) {\n    try {\n      const decodedToken =\n        await this.firebaseService.admin.verifyIdToken(idToken);\n\n      return decodedToken;\n    } catch (error) {\n      console.error("Firebase ID token verification failed:", error);\n      if (error.code === "auth/id-token-expired") {\n        throw new HttpException(\n          "Unauthorized: ID token has expired",\n          HttpStatus.UNAUTHORIZED,\n        );\n      }\n\n      if (error.code === "auth/invalid-id-token") {\n        throw new HttpException(\n          "Unauthorized: Invalid ID token",\n          HttpStatus.UNAUTHORIZED,\n        );\n      }\n\n      throw new HttpException(\n        "Unauthorized: ID token verification failed",\n        HttpStatus.UNAUTHORIZED,\n      );\n    }\n  }\n}\n`,
          },
          {
            filename: "common/decorators/skip-auth*.decorator.ts",
            content: `import { SetMetadata } from "@nestjs/common";\n\nexport const SKIP_AUTH_KEY = "skipAuth";\nexport const SkipAuth = () => SetMetadata(SKIP_AUTH_KEY, true);\n\nexport const SKIP_AUTH_OPTIONAL_KEY = "skipAuthOptional";\nexport const SkipAuthOptional = () => SetMetadata(SKIP_AUTH_OPTIONAL_KEY, true);\n`,
          },
          {
            filename: "modules/auth/auth.controller.ts (일부)",
            content: `@Controller("auth")\nexport class UsersController {\n  constructor(private readonly usersService: UsersService) {}\n\n  @Get("login")\n  @HttpCode(200)\n  @UseGuards(FirebaseAuthGuard)\n  async getUser(@Request() req) {\n    const { uid } = req.user;\n\n    return await this.usersService.getUser(uid);\n  }\n  // ... join, edit 도 같은 Guard 사용\n}\n`,
          },
        ],
      },
      {
        title: "배포 아키텍처",
        description:
          "AWS EC2를 중심으로 스토리지와 DB를 분리하고, GitHub Actions로 배포 과정을 자동화했습니다.",
        diagram: VibratoArchitecture,
        table: {
          headers: ["구성 요소", "역할"],
          rows: [
            [
              "EC2",
              "NestJS 서버를 클라우드에 배포. HTTPS 프로토콜을 적용해 보안성을 강화했습니다.",
            ],
            [
              "S3",
              "프로필 이미지 등 정적 파일을 안정적으로 저장·제공하도록 스토리지 서비스와 연동했습니다.",
            ],
            [
              "RDS",
              "클라우드 기반 관계형 데이터베이스를 직접 구성·운영해 데이터를 안정적으로 관리했습니다.",
            ],
            [
              "GitHub Actions",
              "GitHub 저장소에 푸시되면 EC2로 배포되도록 워크플로를 구성해, 수동 배포 과정을 없앴습니다.",
            ],
          ],
        },
      },
      {
        title: "HTTP Status Convention",
        description:
          "① API 명세서에 성공·실패 Status Code 정의 → ② 데코레이터(@HttpCode 등)로 코드 반영 → ③ Postman / Thunder Client로 검증하는 순서로 운용했습니다.",
        table: {
          headers: ["코드", "기준"],
          rows: [
            ["200 / 201", "요청 성공 / 새로운 리소스 생성 (POST)"],
            ["202 / 204", "비동기 요청 처리 / 성공했으나 반환값 없음 (DELETE)"],
            [
              "301 / 302 / 304",
              "영구 리다이렉트 / 임시 리다이렉트 / 리소스 미변경",
            ],
            ["401 / 403", "ID 토큰 유효기간 만료 / 해당 기능 권한 없음"],
          ],
        },
      },
      {
        title: "Git Convention",
        description:
          "5명이 6주간 같은 저장소에서 작업하기 위해, 커밋 메시지와 브랜치 이름 규칙을 문서로 먼저 합의했습니다.",
        table: {
          headers: ["gitmoji", "태그", "설명"],
          rows: [
            ["🎉 :tada:", "init", "프로젝트 시작"],
            ["✨ :sparkles:", "feat", "새로운 기능 구현"],
            ["⚡ :zap:", "feat", "기능 추가 구현"],
            ["🐛 :bug:", "fix", "버그 수정"],
            ["💄 :lipstick:", "design", "UI, CSS 등 스타일 변경"],
            ["📝 :memo:", "docs", "문서 추가 / 수정 (.md)"],
            ["🔥 :fire:", "remove", "코드 또는 파일 삭제"],
            ["🚑 :ambulance:", "HOTFIX", "긴급 수정"],
            ["🚚 :truck:", "rename", "파일, 폴더명 수정"],
            ["📦 :package:", "chore", "package.json / dotenv 등 모듈 변경"],
          ],
        },
        notes: [
          { title: "main / develop", body: "본래 이름 그대로 사용" },
          {
            title: "feature/…",
            body: "feature/{issue-number}-{feature-name} 형식으로 이슈 추적 (예: feature/1-init-project)",
          },
          {
            title: "release-… / hotfix-…",
            body: "release-1.2 / hotfix-1.2.1 형식",
          },
        ],
      },
    ],
    infoRows: [
      {
        label: "담당 파트",
        value:
          "앨범 상세 페이지(좋아요 · 팔로우 · 리뷰 · 댓글), 로그인 / 회원가입, 내 정보(내가 작성한 리뷰 · 댓글 조회)",
      },
      { label: "서비스", value: "vibrato1.shop (현재 운영 종료)" },
    ],
    role: "리더 · 백엔드 개발",
    duration: "2024.09.02 - 2024.10.16 (6주)",
    team: "5명",
    technologies: [
      "TypeScript",
      "NestJS",
      "TypeORM",
      "MySQL / MariaDB",
      "Firebase Auth",
      "AWS EC2 · S3 · RDS",
      "GitHub Actions",
      "Jest",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/VibratoFinal/server",
    featured: false,
  },
  {
    id: 5,
    title: "Mini MES",
    description:
      "[개인] Python 수집기 → MS-SQL → C# WinForms로 이어지는 3계층 미니 MES. 5초 자동 새로고침과 목표 미달 OEE 셀 강조 표시.",
    overview:
      "Python 수집기가 설비 실적을 MS-SQL에 적재하고, C# WinForms 화면이 5초마다 조회해 보여주는 미니 MES입니다.",
    details: [
      "machine, production_log 테이블에 FK와 복합 인덱스 (machine_id, logged_at) 설계",
      "pyodbc fast_executemany로 수집 데이터 일괄 INSERT",
      "SqlDataAdapter + DataTable 바인딩, 5초 타이머 자동 새로고침, 목표 미달 OEE 셀만 색상 표시",
      "접속 정보를 config.ini / appsettings.json으로 분리하고 example 파일만 커밋",
    ],
    role: "전체",
    duration: "2026.08.29 - 2026.08.31",
    team: "1명",
    technologies: ["C#", ".NET 8 WinForms", "MS-SQL", "Python"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

export const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: FaGithub },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: FaEnvelope },
];
