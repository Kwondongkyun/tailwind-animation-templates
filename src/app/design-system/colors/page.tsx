"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock } from "@/components/docs";

export default function ColorsPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Colors"
        description="컬러 시스템과 시맨틱 컬러 가이드입니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Colors</h1>
            <p className="text-xl text-muted-foreground">
              시맨틱 컬러 시스템으로 일관된 색상 사용을 보장합니다.
            </p>
          </div>

          {/* Semantic Colors */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Semantic Colors</h2>
            <p className="text-muted-foreground">
              Tailwind CSS v4의 시맨틱 컬러를 사용하여 다크 모드를 자동으로
              지원합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Background */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Background</p>
                <div className="p-4 border rounded-lg bg-background">
                  <p className="text-sm">bg-background</p>
                  <p className="text-xs text-muted-foreground">기본 배경색</p>
                </div>
              </div>

              {/* Foreground */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Foreground</p>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-foreground">text-foreground</p>
                  <p className="text-xs text-muted-foreground">
                    기본 텍스트 색상
                  </p>
                </div>
              </div>

              {/* Card */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Card</p>
                <div className="p-4 border rounded-lg bg-card">
                  <p className="text-sm">bg-card</p>
                  <p className="text-xs text-muted-foreground">카드 배경색</p>
                </div>
              </div>

              {/* Muted */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Muted</p>
                <div className="p-4 border rounded-lg bg-muted">
                  <p className="text-sm">bg-muted</p>
                  <p className="text-xs text-muted-foreground">
                    부드러운 배경색
                  </p>
                </div>
              </div>

              {/* Primary */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Primary</p>
                <div className="p-4 border rounded-lg bg-primary text-primary-foreground">
                  <p className="text-sm">bg-primary</p>
                  <p className="text-xs opacity-90">주요 액션 색상</p>
                </div>
              </div>

              {/* Secondary */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Secondary</p>
                <div className="p-4 border rounded-lg bg-secondary text-secondary-foreground">
                  <p className="text-sm">bg-secondary</p>
                  <p className="text-xs opacity-90">보조 액션 색상</p>
                </div>
              </div>

              {/* Accent */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Accent</p>
                <div className="p-4 border rounded-lg bg-accent text-accent-foreground">
                  <p className="text-sm">bg-accent</p>
                  <p className="text-xs opacity-90">강조 색상</p>
                </div>
              </div>

              {/* Destructive */}
              <div className="space-y-2">
                <p className="text-sm font-semibold">Destructive</p>
                <div className="p-4 border rounded-lg bg-destructive text-destructive-foreground">
                  <p className="text-sm">bg-destructive</p>
                  <p className="text-xs opacity-90">경고/삭제 색상</p>
                </div>
              </div>
            </div>
          </div>

          {/* Border Colors */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Border & Ring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="text-sm font-semibold mb-2">border</p>
                <p className="text-xs text-muted-foreground">기본 보더 색상</p>
              </div>
              <div className="p-4 border-2 border-input rounded-lg">
                <p className="text-sm font-semibold mb-2">border-input</p>
                <p className="text-xs text-muted-foreground">입력 필드 보더</p>
              </div>
              <div className="p-4 border rounded-lg ring-2 ring-ring">
                <p className="text-sm font-semibold mb-2">ring-ring</p>
                <p className="text-xs text-muted-foreground">포커스 링</p>
              </div>
              <div className="p-4 border rounded-lg ring-2 ring-primary">
                <p className="text-sm font-semibold mb-2">ring-primary</p>
                <p className="text-xs text-muted-foreground">주요 포커스 링</p>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Text Colors</h2>
            <div className="p-6 border rounded-lg space-y-3">
              <p className="text-foreground">text-foreground - 기본 텍스트</p>
              <p className="text-muted-foreground">
                text-muted-foreground - 보조 텍스트
              </p>
              <p className="text-primary">text-primary - 주요 색상 텍스트</p>
              <p className="text-secondary-foreground">
                text-secondary-foreground - 보조 색상 텍스트
              </p>
              <p className="text-destructive">
                text-destructive - 경고/에러 텍스트
              </p>
            </div>
          </div>

          {/* Usage Example */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Usage Example</h2>
            <CodeBlock
              code={`// CSS Variables (globals.css)
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    /* ... more colors */
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    /* ... more colors */
  }
}`}
            />
          </div>

          {/* Color Usage Guidelines */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">사용 가이드라인</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">✅ Do</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>시맨틱 컬러를 사용하여 다크 모드 자동 지원</li>
                  <li>primary는 주요 액션, secondary는 보조 액션에 사용</li>
                  <li>destructive는 삭제, 경고 등 위험한 작업에만 사용</li>
                  <li>muted-foreground는 보조 정보나 설명에 사용</li>
                </ul>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <p className="font-semibold mb-2 text-destructive">
                  ❌ Don&apos;t
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>하드코딩된 색상 값 사용 (예: text-blue-500)</li>
                  <li>비시맨틱한 색상 이름 사용</li>
                  <li>의미 없이 destructive 색상 사용</li>
                  <li>다크 모드 고려 없이 색상 선택</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tailwind Config */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tailwind Configuration</h2>
            <CodeBlock
              code={`// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... more color definitions
      },
    },
  },
}`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
