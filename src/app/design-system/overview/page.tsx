"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { Palette, Layers, Type, Ruler } from "lucide-react";
import Link from "next/link";

export default function DesignSystemOverviewPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Design System Overview"
        description="디자인 시스템의 기본 원칙과 구성 요소를 소개합니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Design System</h1>
            <p className="text-xl text-muted-foreground">
              일관성 있고 확장 가능한 디자인 시스템을 구축하기 위한
              가이드입니다.
            </p>
          </div>

          {/* Design Systems 소개 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">디자인 시스템이란?</h2>
            <p className="text-muted-foreground leading-relaxed">
              디자인 시스템은 재사용 가능한 컴포넌트와 패턴의 모음으로, 일관된
              사용자 경험을 제공하고 개발 효율성을 높입니다. 이 프로젝트는{" "}
              <a
                href="https://www.designsystems.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Design Systems
              </a>
              의 베스트 프랙티스를 기반으로 구성되었습니다.
            </p>
          </div>

          {/* 핵심 구성 요소 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">핵심 구성 요소</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/design-system/typography"
                className="group p-6 border rounded-lg hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Type className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      Typography
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      타이포그래피 스케일, 폰트 패밀리, 텍스트 스타일 가이드
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/design-system/colors"
                className="group p-6 border rounded-lg hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Palette className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      Colors
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      컬러 팔레트, 시맨틱 컬러, 다크 모드 지원
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/design-system/spacing"
                className="group p-6 border rounded-lg hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Ruler className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      Spacing
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      간격 시스템, 그리드 레이아웃, 여백 가이드
                    </p>
                  </div>
                </div>
              </Link>

              <div className="p-6 border rounded-lg border-dashed opacity-50">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <Layers className="size-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Components</h3>
                    <p className="text-sm text-muted-foreground">
                      재사용 가능한 UI 컴포넌트 라이브러리 (곧 추가 예정)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">기술 스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Tailwind CSS v4</h3>
                <p className="text-sm text-muted-foreground">
                  유틸리티 기반 CSS 프레임워크
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">React 19.2</h3>
                <p className="text-sm text-muted-foreground">
                  최신 React 기능 활용
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Next.js 16</h3>
                <p className="text-sm text-muted-foreground">
                  App Router 및 Server Components
                </p>
              </div>
            </div>
          </div>

          {/* 참고 자료 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">참고 자료</h2>
            <div className="p-6 border rounded-lg bg-muted/30">
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.designsystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Design Systems by Figma
                  </a>
                  {" - "}
                  <span className="text-sm text-muted-foreground">
                    디자인 시스템 베스트 프랙티스
                  </span>
                </li>
                <li>
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Shadcn UI
                  </a>
                  {" - "}
                  <span className="text-sm text-muted-foreground">
                    기본 컴포넌트 라이브러리
                  </span>
                </li>
                <li>
                  <a
                    href="https://kibo.build/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Kibo UI
                  </a>
                  {" - "}
                  <span className="text-sm text-muted-foreground">
                    고급 컴포넌트 라이브러리
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
