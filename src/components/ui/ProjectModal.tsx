"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { highlight } from "sugar-high";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaInfoCircle } from "react-icons/fa";
import type { DesignBlock, Project } from "@/data/portfolio-data";

interface Props {
  project: Project | null;
  onClose: () => void;
}

// 서버 렌더링 중에는 false, 브라우저에서는 true — document.body가 있을 때만 포털을 그리기 위함
const subscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export default function ProjectModal({ project, onClose }: Props) {
  const isClient = useIsClient();
  const closeRef = useRef<HTMLButtonElement>(null);

  // ESC로 닫기 + 배경 스크롤 잠금 + 닫기 버튼으로 포커스 이동
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    // 스크롤 컨테이너인 <html>을 잠금 (globals.css의 scrollbar-gutter와 짝을 이룸)
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            key={project.id}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl bg-card border border-border"
          >
            <div className="sticky top-0 z-10 h-1 bg-gradient-to-r from-purple to-cyan" />

            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="닫기"
              className="absolute top-4 right-4 z-10 p-2 rounded-lg text-text-secondary hover:text-foreground hover:bg-background/60"
            >
              <FaTimes size={18} />
            </button>

            <div className="p-6 md:p-10 space-y-10">
              {/* 헤더 */}
              <header>
                <h3 id="project-modal-title" className="pr-10 text-2xl md:text-3xl font-bold gradient-text">
                  {project.title}
                </h3>
                <p className="mt-4 text-text-secondary leading-relaxed">{project.overview}</p>

                <MetaGrid
                  items={[
                    ["기간", project.duration],
                    ["인원", project.team],
                    ["역할", project.role],
                  ]}
                />

                {project.notice && (
                  <p className="mt-4 flex gap-2 text-xs text-text-secondary leading-relaxed">
                    <FaInfoCircle className="mt-0.5 shrink-0 text-cyan" />
                    {project.notice}
                  </p>
                )}
              </header>

              {/* 기여도 */}
              {project.stats?.length ? (
                <ModalSection title="기여도" caption="Git 기록 기준">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {project.stats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-background/60 border border-border p-4">
                        <div className="text-2xl font-bold gradient-text">{s.value}</div>
                        <div className="mt-1 text-xs text-foreground leading-snug">{s.label}</div>
                        {s.note && <div className="mt-1 text-xs text-text-secondary">{s.note}</div>}
                      </div>
                    ))}
                  </div>
                </ModalSection>
              ) : null}

              {/* 구현 기능 상세 (없으면 details 목록) */}
              {project.features?.length ? (
                <ModalSection title={project.featuresTitle ?? "구현 기능 상세"}>
                  <div className="space-y-6">
                    {project.features.map((f, i) => (
                      <div key={f.title}>
                        <h5 className="flex items-center gap-2 font-semibold text-foreground">
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple/20 text-purple">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {f.title}
                        </h5>
                        <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-text-secondary leading-relaxed marker:text-purple/60">
                          {f.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                        {f.files && <p className="mt-2 text-xs font-mono text-text-secondary/70">{f.files}</p>}
                      </div>
                    ))}
                  </div>
                </ModalSection>
              ) : (
                <ModalSection title="주요 구현">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-text-secondary leading-relaxed marker:text-purple/60">
                    {project.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </ModalSection>
              )}

              {/* 기술별 활용 */}
              {project.techNotes?.length ? (
                <ModalSection title="사용 기술">
                  <div className="grid md:grid-cols-3 gap-3">
                    {project.techNotes.map((t) => (
                      <div key={t.title} className="rounded-xl bg-background/60 border border-border p-5">
                        <h5 className="font-semibold text-foreground">{t.title}</h5>
                        <ul className="mt-3 list-disc pl-4 space-y-1.5 text-sm text-text-secondary leading-relaxed marker:text-purple/60">
                          {t.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ModalSection>
              ) : null}

              {/* 설계 과정 */}
              {project.design?.length ? (
                <ModalSection title="설계 과정">
                  <div className="space-y-10">
                    {project.design.map((d) => (
                      <DesignBlockView key={d.title} block={d} />
                    ))}
                  </div>
                </ModalSection>
              ) : null}

              {/* 트러블슈팅 */}
              {project.troubleshooting?.length ? (
                <ModalSection title="트러블슈팅">
                  <div className="space-y-4">
                    {project.troubleshooting.map((t, i) => (
                      <article key={t.title} className="rounded-xl bg-background/60 border border-border p-5">
                        <header className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                          <h5 className="font-semibold text-foreground">
                            <span className="text-purple mr-1.5">{"①②③④⑤⑥"[i] ?? `${i + 1}.`}</span>
                            {t.title}
                          </h5>
                          {t.commit && <span className="text-xs font-mono text-text-secondary">commit {t.commit}</span>}
                        </header>
                        <dl className="grid grid-cols-[3rem_1fr] gap-x-3 gap-y-2.5 text-sm leading-relaxed">
                          <dt className="font-mono text-pink">문제</dt>
                          <dd className="text-text-secondary">{t.problem}</dd>
                          {t.cause && (
                            <>
                              <dt className="font-mono text-foreground/70">원인</dt>
                              <dd className="text-text-secondary">{t.cause}</dd>
                            </>
                          )}
                          <dt className="font-mono text-cyan">해결</dt>
                          <dd className="text-text-secondary">{t.solution}</dd>
                          {t.result && (
                            <>
                              <dt className="font-mono text-purple">결과</dt>
                              <dd className="text-text-secondary">{t.result}</dd>
                            </>
                          )}
                        </dl>
                        {t.code && <DiffBlock code={t.code} />}
                      </article>
                    ))}
                  </div>
                </ModalSection>
              ) : null}

              {/* 화면 */}
              {project.screenshots?.length ? (
                <ModalSection title="화면">
                  <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible">
                    {project.screenshots.map((s) => (
                      <figure key={s.src} className="shrink-0 w-36 md:w-auto">
                        <Image
                          src={s.src}
                          alt={s.caption}
                          width={430}
                          height={799}
                          sizes="(min-width: 768px) 160px, 144px"
                          className="w-full h-auto rounded-lg border border-border bg-white"
                        />
                        <figcaption className="mt-2 text-center text-xs text-text-secondary">{s.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </ModalSection>
              ) : null}

              {/* 회고 */}
              {project.retrospective?.length ? (
                <ModalSection title="회고 · 다시 만든다면 고칠 점">
                  <ul className="space-y-3 text-sm leading-relaxed">
                    {project.retrospective.map((r) => (
                      <li key={r.title} className="text-text-secondary">
                        <strong className="text-foreground">{r.title}</strong> — {r.body}
                      </li>
                    ))}
                  </ul>
                </ModalSection>
              ) : null}

              {/* 배운 점 */}
              {project.learnings?.length ? (
                <ModalSection title="배운 점">
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.learnings.map((l) => (
                      <div key={l.title} className="rounded-xl bg-background/60 border border-border p-5">
                        <h5 className="font-semibold text-foreground">{l.title}</h5>
                        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{l.body}</p>
                      </div>
                    ))}
                  </div>
                </ModalSection>
              ) : null}

              {/* 기술 스택 */}
              <ModalSection
                title="기술 스택"
                caption={project.mainTechnologies?.length ? "강조 표시한 항목이 직접 다룬 기술입니다" : undefined}
              >
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => {
                    const main = project.mainTechnologies?.includes(t);
                    return (
                      <span
                        key={t}
                        className={`text-xs px-3 py-1 rounded-full font-mono border ${
                          main
                            ? "bg-cyan/15 text-cyan border-cyan/50"
                            : "bg-transparent text-text-secondary border-border"
                        }`}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>
              </ModalSection>

              {/* 링크 · 기타 정보 */}
              {(project.infoRows?.length || project.githubUrl || project.liveUrl) && (
                <footer className="space-y-5 border-t border-border pt-8">
                  {project.infoRows?.length ? (
                    <dl className="grid md:grid-cols-[6rem_1fr] gap-x-4 gap-y-2 text-sm">
                      {project.infoRows.map((row) => (
                        <div key={row.label} className="contents">
                          <dt className="text-text-secondary">{row.label}</dt>
                          <dd className="text-foreground/90 font-mono text-xs leading-relaxed md:pt-0.5 mb-2 md:mb-0">
                            {row.href ? (
                              <a href={row.href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
                                {row.value}
                              </a>
                            ) : (
                              row.value
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-purple/40 text-purple hover:bg-purple/10"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-purple to-cyan text-white"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </footer>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

// 기간 · 인원 · 역할 — 값이 비어 있는 항목은 숨김
function MetaGrid({ items }: { items: [string, string][] }) {
  const visible = items.filter(([, v]) => v);
  const odd = visible.length % 2 === 1;
  const cols = visible.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <dl className={`mt-6 grid grid-cols-2 ${cols} gap-3 text-sm`}>
      {visible.map(([k, v]) => (
        <div
          key={k}
          className={`${odd ? "last:col-span-2 sm:last:col-span-1" : ""} rounded-lg bg-background/60 border border-border px-4 py-3`}
        >
          <dt className="text-text-secondary text-xs">{k}</dt>
          <dd className="mt-1 text-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

// 설계 과정 블록: 설명 → 이미지 → 표 → 제목·본문 목록 순서로, 있는 것만 표시
function DesignBlockView({ block }: { block: DesignBlock }) {
  const { title, description, image, diagram: Diagram, tree, code, table, notes } = block;

  const imgClass = `h-auto rounded-lg border border-border ${image?.srcDark ? "" : "bg-white"} ${
    image?.narrow ? "w-full max-h-[520px] object-contain object-top" : "w-full"
  }`;

  const figure = image && (
    <figure className={image.narrow ? "md:w-52 shrink-0" : ""}>
      {/* 큰 다이어그램은 최소 폭을 유지하고 가로 스크롤 — 글자가 너무 작아지지 않게 */}
      <div className={image.scrollMinWidth ? "overflow-x-auto rounded-lg" : ""}>
        {/* 클릭하면 원본을 새 탭에서 크게 볼 수 있음 (SVG는 확대해도 선명) */}
        <a
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          title="원본 크기로 보기"
          className="block"
          style={image.scrollMinWidth ? { minWidth: image.scrollMinWidth } : undefined}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            unoptimized={image.src.endsWith(".svg")}
            sizes={image.narrow ? "208px" : "(min-width: 896px) 800px, 100vw"}
            className={`${imgClass} ${image.srcDark ? "only-light" : ""}`}
          />
          {image.srcDark && (
            <Image
              src={image.srcDark}
              alt={image.alt}
              width={image.width}
              height={image.height}
              unoptimized={image.srcDark.endsWith(".svg")}
              sizes="(min-width: 896px) 800px, 100vw"
              className={`${imgClass} only-dark`}
            />
          )}
        </a>
      </div>
      {image.caption && <figcaption className="mt-2 text-xs text-text-secondary text-center">{image.caption}</figcaption>}
    </figure>
  );

  const treeView = tree && (
    <pre className="shrink-0 overflow-x-auto rounded-lg border border-border bg-background/60 p-4 text-xs leading-relaxed font-mono text-foreground/90">
      {tree.split("\n").map((line, i) => {
        // "# 설명" 부분은 흐리게
        const idx = line.indexOf("#");
        return (
          <span key={i} className="block">
            {idx === -1 ? line : line.slice(0, idx)}
            {idx !== -1 && <span className="text-text-secondary/70">{line.slice(idx)}</span>}
          </span>
        );
      })}
    </pre>
  );

  const noteList = notes?.length ? (
    <dl className="space-y-3 text-sm leading-relaxed">
      {notes.map((n) => (
        <div key={n.title}>
          <dt className="font-mono text-cyan">{n.title}</dt>
          <dd className="mt-0.5 text-text-secondary">{n.body}</dd>
        </div>
      ))}
    </dl>
  ) : null;

  const side = image?.narrow ? figure : treeView;

  return (
    <article className="space-y-4">
      <h5 className="font-semibold text-foreground">{title}</h5>
      {description && <p className="text-sm text-text-secondary leading-relaxed">{description}</p>}

      {side ? (
        // 세로로 긴 요소(폴더 트리 등)는 옆에 설명을 나란히 배치
        <div className="flex flex-col md:flex-row gap-6">
          {side}
          {noteList}
        </div>
      ) : (
        <>
          {figure}
          {Diagram && <Diagram />}
          {noteList}
        </>
      )}
      {code?.map((f) => (
        <CodeBlock key={f.filename} filename={f.filename} content={f.content} />
      ))}

      {table && (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-background/60 text-left">
              <tr>
                {table.headers.map((h) => (
                  <th key={h} scope="col" className="px-4 py-2.5 font-medium text-foreground whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-border">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-4 py-2.5 align-top leading-relaxed ${
                        i === 0 ? "font-mono text-xs text-cyan sm:whitespace-nowrap pt-3 w-[35%] sm:w-auto" : "text-text-secondary"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
}

// 파일 이름 탭이 있는 코드 블록 — sugar-high로 구문 강조, 길면 높이를 제한하고 내부 스크롤
function CodeBlock({ filename, content }: { filename: string; content: string }) {
  // highlight()는 토큰마다 색이 지정된 <span> HTML 문자열을 돌려줌
  const html = highlight(content.replace(/\n$/, ""));
  return (
    <div className="code-theme rounded-lg border overflow-hidden">
      <div className="px-4 py-2 border-b border-[var(--code-border)] text-xs font-mono text-[var(--code-muted)]">{filename}</div>
      <pre className="max-h-96 overflow-auto p-4 text-xs leading-relaxed font-mono">
        {/* 데이터 파일에 직접 작성한 정적 코드라 innerHTML 사용이 안전함 */}
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}

function ModalSection({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h4 className="flex items-center gap-2 mb-4 font-semibold text-foreground">
        <span className="h-4 w-1 rounded-full bg-gradient-to-b from-purple to-cyan" />
        {title}
        {caption && <span className="ml-1 text-xs font-normal text-text-secondary">{caption}</span>}
      </h4>
      {children}
    </section>
  );
}

// +/- 로 시작하는 줄에 배경색을 입혀 변경 전후를 보여주는 코드 블록
// 코드 자체는 sugar-high로 구문 강조, 배경·글자색은 globals.css의 --code-* 변수로 테마에 맞춰 바뀜
function DiffBlock({ code }: { code: string }) {
  return (
    <pre className="code-theme mt-4 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed font-mono">
      <code>
        {code.split("\n").map((line, i) => {
          const mark = line[0] === "+" || line[0] === "-" ? line[0] : "";
          const body = mark ? line.slice(1) : line;
          const bg =
            mark === "+"
              ? "bg-emerald-400/10"
              : mark === "-"
                ? "bg-pink-400/10 line-through decoration-[var(--diff-del)]/50"
                : "";
          return (
            <span key={i} className={`block ${bg}`}>
              <span className={`select-none ${mark === "+" ? "text-[var(--diff-add)]" : "text-[var(--diff-del)]"}`}>{mark || " "}</span>
              {/* 줄 단위로 강조 — 데이터가 직접 작성한 정적 코드라 innerHTML 사용이 안전함 */}
              <span dangerouslySetInnerHTML={{ __html: highlight(body) || " " }} />
            </span>
          );
        })}
      </code>
    </pre>
  );
}
