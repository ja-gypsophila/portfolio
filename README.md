# 김장훈 포트폴리오

프론트엔드 개발자 김장훈의 포트폴리오 사이트입니다.

- 배포 주소: https://portfolio-phi-three-too93altcx.vercel.app/
- GitHub: https://github.com/ja-gypsophila

## 기술 스택

| 구분           | 사용 기술                                      |
| -------------- | ---------------------------------------------- |
| 프레임워크     | Next.js 16 (App Router), React 19, TypeScript  |
| 스타일         | Tailwind CSS 4, CSS 변수 기반 다크/라이트 테마 |
| 애니메이션     | motion                                         |
| 테마 전환      | next-themes                                    |
| 코드 구문 강조 | sugar-high                                     |
| 아이콘         | react-icons                                    |
| 배포           | Vercel                                         |

## 주요 기능

- **다크/라이트 모드** — OS 설정을 따르고, 선택한 테마는 저장되어 새로고침해도 유지됩니다. 첫 화면부터 올바른 테마로 그려져 깜빡임이 없습니다.
- **프로젝트 상세 모달** — 카드를 누르면 기능 상세, 트러블슈팅, 설계 과정(ERD, 폴더 구조, 코드, 배포 구성도), 화면, 회고를 보여줍니다. ESC와 배경 클릭으로 닫히고, 열린 동안 배경 스크롤을 잠급니다.
- **선명한 다이어그램** — ERD는 SVG, 배포 구성도는 HTML, 코드는 텍스트로 넣어 어떤 화면 크기에서도 깨지지 않고 테마에 맞춰 색이 바뀝니다.
- **데이터와 화면 분리** — 모든 문구와 프로젝트 정보는 `src/data/portfolio-data.ts` 한 파일에서 관리합니다. 모달의 각 섹션은 데이터가 있을 때만 나타납니다.

## 폴더 구조

```
src/
├─ app/                 # layout, page, globals.css
├─ components/
│  ├─ layout/           # Navigation, Footer
│  ├─ sections/         # Hero, About, Career, Skills, Projects, Contact
│  ├─ ui/               # ProjectCard, ProjectModal, ThemeToggle 등
│  │  └─ diagrams/      # 코드로 그린 다이어그램
│  └─ ThemeProvider.tsx
├─ data/portfolio-data.ts  # 사이트의 모든 내용
├─ hooks/
└─ lib/                 # 애니메이션 설정
public/projects/        # 프로젝트별 이미지
```

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 배포용 빌드
```
