"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock } from "@/components/docs";
import { Terminal, Code2, Sparkles } from "lucide-react";

export default function CursorRulesPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="커서 룰"
        description="Cursor AI 사용 시 적용되는 프로젝트 규칙입니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Terminal className="size-10" />
              커서 룰
            </h1>
            <p className="text-xl text-muted-foreground">
              Cursor AI 에디터에서 일관된 코드 생성을 위한 규칙입니다.
            </p>
          </div>

          {/* What is .cursorrules */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">.cursorrules 파일이란?</h2>
            <p className="text-muted-foreground">
              Cursor AI가 코드를 생성할 때 참조하는 프로젝트별 규칙 파일입니다.
              프로젝트 루트에 위치하며, AI가 프로젝트의 컨벤션과 스타일을
              이해하는 데 도움을 줍니다.
            </p>
          </div>

          {/* Component Creation Rules */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Code2 className="size-6" />
              컴포넌트 생성 규칙
            </h2>
            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3">1. 컴포넌트 위치 및 구조</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>
                    새 컴포넌트는 항상 <code>/src/components/ui</code>{" "}
                    (Shadcn/Kibo) 또는 <code>/src/components/custom</code>에
                    위치
                  </li>
                  <li>
                    페이지는{" "}
                    <code>/src/app/[category]/[component-name]/page.tsx</code>{" "}
                    패턴 준수
                  </li>
                  <li>
                    모든 컴포넌트 페이지는 PageHeader + ExampleSection 구조 사용
                  </li>
                  <li>CodeBlock으로 사용 예시 코드 제공 필수</li>
                  <li>API Reference 테이블 포함 (props, types, defaults)</li>
                </ul>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3">
                  2. 컴포넌트 카테고리 분류
                </h3>
                <div className="space-y-3 mt-3">
                  <div>
                    <p className="font-semibold text-sm">Shadcn UI</p>
                    <p className="text-sm text-muted-foreground">
                      위치: <code>/src/components/ui/</code>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      페이지: <code>/src/app/shadcn/[component]/page.tsx</code>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Kibo UI</p>
                    <p className="text-sm text-muted-foreground">
                      위치: <code>/src/components/ui/</code>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      페이지: <code>/src/app/kibo/[component]/page.tsx</code>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Custom</p>
                    <p className="text-sm text-muted-foreground">
                      위치: <code>/src/components/custom/</code>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      페이지: <code>/src/app/[component]/page.tsx</code>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Animation</p>
                    <p className="text-sm text-muted-foreground">
                      위치: <code>/src/components/animations/</code>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      페이지: <code>/src/app/[animation-name]/page.tsx</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3">3. 파일명 규칙</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>
                    컴포넌트 파일: kebab-case (예: <code>dialog-stack.tsx</code>
                    )
                  </li>
                  <li>
                    페이지 파일: 항상 <code>page.tsx</code>
                  </li>
                  <li>
                    타입 파일: <code>[component-name].types.ts</code> (필요시)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Page Structure */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">컴포넌트 페이지 필수 섹션</h2>
            <p className="text-muted-foreground">
              모든 컴포넌트 페이지는 다음 순서를 따라야 합니다:
            </p>
            <div className="space-y-2">
              {[
                { num: 1, title: "Introduction", desc: "제목 + 설명" },
                { num: 2, title: "Basic Usage", desc: "기본 사용 예시 + 코드" },
                {
                  num: 3,
                  title: "Installation",
                  desc: "CLI 또는 수동 설치",
                },
                { num: 4, title: "Examples", desc: "다양한 사용 케이스" },
                { num: 5, title: "API Reference", desc: "Props 테이블" },
                {
                  num: 6,
                  title: "Accessibility",
                  desc: "접근성 가이드 (선택적)",
                },
              ].map((section) => (
                <div
                  key={section.num}
                  className="flex items-start gap-3 p-3 border rounded-lg"
                >
                  <div className="flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {section.num}
                  </div>
                  <div>
                    <p className="font-semibold">{section.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {section.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example Template */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">컴포넌트 페이지 템플릿</h2>
            <CodeBlock
              code={`"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { YourComponent } from "@/components/ui/your-component";

export default function YourComponentPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Component Name"
        description="간단한 설명"
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Component Name</h1>
            <p className="text-xl text-muted-foreground">
              상세한 설명
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 사용 예시"
            preview={
              <YourComponent />
            }
            code={\`import { YourComponent } from "@/components/ui/your-component"

export default function Example() {
  return <YourComponent />
}\`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <CodeBlock code={\`npx shadcn@latest add your-component\`} />
          </div>

          {/* More sections... */}
        </div>
      </main>
    </div>
  );
}`}
            />
          </div>

          {/* Styling Rules */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="size-6" />
              스타일링 규칙
            </h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">✅ 항상 사용</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Tailwind CSS 유틸리티 클래스</li>
                  <li>시맨틱 컬러 변수 (--background, --foreground 등)</li>
                  <li>cn() 함수로 클래스 병합</li>
                  <li>CVA (class-variance-authority)로 variant 관리</li>
                </ul>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <p className="font-semibold mb-2 text-destructive">
                  ❌ 사용하지 말 것
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>인라인 스타일 (style prop)</li>
                  <li>CSS-in-JS 라이브러리</li>
                  <li>하드코딩된 색상 값</li>
                  <li>!important (최대한 피하기)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TypeScript Rules */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">TypeScript 규칙</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">타입 정의</p>
                <CodeBlock
                  code={`// Props는 항상 interface로 정의
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

// 내부 타입은 type으로 정의
type ButtonVariant = "default" | "outline" | "ghost";`}
                />
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">컴포넌트 타입</p>
                <CodeBlock
                  code={`// forwardRef 사용 시
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <button ref={ref} className={cn(className)} {...props} />;
  }
);
Button.displayName = "Button";`}
                />
              </div>
            </div>
          </div>

          {/* Import Rules */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Import 순서</h2>
            <CodeBlock
              code={`// 1. React 및 Next.js
"use client"; // 필요시
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// 2. 외부 라이브러리
import { clsx } from "clsx";
import { cva } from "class-variance-authority";

// 3. 내부 컴포넌트 및 유틸리티
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// 4. 타입
import type { ButtonProps } from "./button.types";

// 5. 스타일 (필요시)
import "./styles.css";`}
            />
          </div>

          {/* Context7 Rule */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">특별 규칙</h2>
            <div className="p-6 border rounded-lg bg-primary/5">
              <h3 className="font-semibold mb-2">Always use Context7</h3>
              <p className="text-sm text-muted-foreground mb-3">
                최신 라이브러리 문서를 참조할 때는 항상 Context7 도구를
                사용합니다.
              </p>
              <CodeBlock
                code={`// Context7을 통해 최신 문서 확인
// - Next.js 최신 기능
// - React 19 새로운 API
// - Tailwind CSS v4 업데이트
// - Shadcn UI 컴포넌트 사용법`}
              />
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">베스트 프랙티스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">컴포넌트 작성</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>작고 재사용 가능하게 작성</li>
                  <li>명확한 Props 인터페이스</li>
                  <li>접근성 고려 (ARIA attributes)</li>
                  <li>적절한 기본값 설정</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">성능 최적화</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>불필요한 리렌더링 방지</li>
                  <li>동적 import 활용</li>
                  <li>이미지 최적화</li>
                  <li>Server Components 우선 사용</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">코드 품질</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>ESLint 규칙 준수</li>
                  <li>타입 안정성 확보</li>
                  <li>의미 있는 변수명</li>
                  <li>적절한 주석 작성</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">문서화</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>컴포넌트 페이지 작성</li>
                  <li>사용 예시 제공</li>
                  <li>Props 설명</li>
                  <li>JSDoc 주석</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
