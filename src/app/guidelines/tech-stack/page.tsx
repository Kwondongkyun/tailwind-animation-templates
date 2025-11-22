"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock } from "@/components/docs";
import { Layers, Package, Zap } from "lucide-react";

export default function TechStackPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="기술 스택"
        description="프로젝트에서 사용하는 기술 스택과 도구들입니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Layers className="size-10" />
              기술 스택
            </h1>
            <p className="text-xl text-muted-foreground">
              Next.js 템플릿 프로젝트의 기술 스택과 주요 라이브러리입니다.
            </p>
          </div>

          {/* Core Technologies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">핵심 기술</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Package className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Next.js</h3>
                    <p className="text-sm text-muted-foreground">v16</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  React 기반 풀스택 프레임워크
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>App Router</li>
                  <li>Server Components</li>
                  <li>Server Actions</li>
                  <li>Optimized Images</li>
                </ul>
              </div>

              <div className="p-6 border rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Package className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">React</h3>
                    <p className="text-sm text-muted-foreground">v19.2</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  UI 구축을 위한 JavaScript 라이브러리
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Hooks</li>
                  <li>Concurrent Features</li>
                  <li>Suspense</li>
                  <li>use API</li>
                </ul>
              </div>

              <div className="p-6 border rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Package className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">TypeScript</h3>
                    <p className="text-sm text-muted-foreground">v5.x</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  타입 안정성을 위한 JavaScript 슈퍼셋
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Type Safety</li>
                  <li>IntelliSense</li>
                  <li>Better DX</li>
                  <li>Strict Mode</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Styling */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">스타일링</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg space-y-3">
                <h3 className="text-lg font-semibold">Tailwind CSS v4</h3>
                <p className="text-sm text-muted-foreground">
                  유틸리티 우선 CSS 프레임워크
                </p>
                <CodeBlock
                  code={`// tailwind.config.ts
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Custom theme configuration
    },
  },
}`}
                />
              </div>

              <div className="p-6 border rounded-lg space-y-3">
                <h3 className="text-lg font-semibold">CSS Variables</h3>
                <p className="text-sm text-muted-foreground">
                  시맨틱 컬러 시스템 및 다크 모드
                </p>
                <CodeBlock
                  code={`// globals.css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
}`}
                />
              </div>
            </div>
          </div>

          {/* UI Libraries */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">UI 라이브러리</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Shadcn UI</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  재사용 가능한 기본 컴포넌트
                </p>
                <a
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  ui.shadcn.com
                </a>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Kibo UI</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  복잡한 패턴 컴포넌트
                </p>
                <a
                  href="https://kibo.build/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  kibo.build
                </a>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Radix UI</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  접근 가능한 headless UI 컴포넌트
                </p>
                <a
                  href="https://www.radix-ui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  radix-ui.com
                </a>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">아이콘</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Lucide Icons</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  아름답고 일관된 아이콘 세트
                </p>
                <CodeBlock
                  code={`import { Home, Settings, User } from "lucide-react";

<Home className="size-4" />
<Settings className="size-6" />
<User className="size-8" />`}
                />
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Tabler Icons</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  다양한 스타일의 React 아이콘
                </p>
                <CodeBlock
                  code={`import { IconGitBranch } from "@tabler/icons-react";

<IconGitBranch size={24} />`}
                />
              </div>
            </div>
          </div>

          {/* Development Tools */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">개발 도구</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">ESLint</h3>
                <p className="text-sm text-muted-foreground">
                  코드 품질 및 일관성 유지
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Prettier</h3>
                <p className="text-sm text-muted-foreground">
                  코드 포맷팅 자동화
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Git</h3>
                <p className="text-sm text-muted-foreground">
                  버전 관리 시스템
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">VS Code</h3>
                <p className="text-sm text-muted-foreground">
                  권장 코드 에디터
                </p>
              </div>
            </div>
          </div>

          {/* Package Manager */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">패키지 매니저</h2>
            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-lg font-semibold">npm / pnpm / yarn</h3>
              <p className="text-sm text-muted-foreground">
                프로젝트는 npm, pnpm, yarn 모두 지원합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <CodeBlock code={`# npm\nnpm install\nnpm run dev`} />
                <CodeBlock code={`# pnpm\npnpm install\npnpm dev`} />
                <CodeBlock code={`# yarn\nyarn install\nyarn dev`} />
              </div>
            </div>
          </div>

          {/* Key Dependencies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">주요 Dependencies</h2>
            <CodeBlock
              code={`{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.0.0",
    "lucide-react": "latest",
    "@tabler/icons-react": "latest"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}`}
            />
          </div>

          {/* Performance */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="size-6 text-primary" />
              성능 최적화
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Server Components</h3>
                <p className="text-sm text-muted-foreground">
                  기본적으로 서버 컴포넌트 사용으로 번들 크기 감소
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Dynamic Imports</h3>
                <p className="text-sm text-muted-foreground">
                  필요한 시점에 컴포넌트 로드
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Image Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Next.js Image 컴포넌트로 자동 최적화
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">CSS-in-JS 없음</h3>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSS로 런타임 오버헤드 제거
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">학습 자료</h2>
            <div className="p-6 border rounded-lg bg-muted/30">
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Next.js Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    React Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Tailwind CSS Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.typescriptlang.org/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    TypeScript Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
