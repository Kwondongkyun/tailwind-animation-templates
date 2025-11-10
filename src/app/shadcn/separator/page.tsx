"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { PageHeader } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const basicUsageCode = `import { Separator } from "@/components/ui/separator"

export default function Example() {
  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">프로필</h3>
        <p className="text-sm text-muted-foreground">
          계정 정보를 확인하고 변경할 수 있습니다.
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">보안</h3>
        <p className="text-sm text-muted-foreground">
          비밀번호와 2단계 인증을 관리하세요.
        </p>
      </div>
    </div>
  )
}`;

const manualInstallationCode = `// components/ui/separator.tsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }`;

const variantsCode = `import { Separator } from "@/components/ui/separator"

export default function VariantsExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <span className="text-sm font-medium text-muted-foreground">
          Horizontal
        </span>
        <Separator />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium text-muted-foreground">
          Vertical
        </span>
        <div className="flex h-10 items-center gap-4">
          <span>프로필</span>
          <Separator orientation="vertical" className="h-full" />
          <span>설정</span>
          <Separator orientation="vertical" className="h-full" />
          <span>보안</span>
        </div>
      </div>
    </div>
  )
}`;

const insetSeparatorCode = `import { Separator } from "@/components/ui/separator"

export default function InsetSeparatorExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">전체 폭</p>
        <Separator />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Inset</p>
        <Separator className="mx-6 w-auto rounded-full bg-border/70" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Section Divider</p>
        <div className="space-y-2 rounded-lg border bg-card p-4">
          <div>
            <p className="font-semibold">계정</p>
            <p className="text-sm text-muted-foreground">
              프로필과 개인 정보를 관리하세요.
            </p>
          </div>
          <Separator className="mx-2 bg-border/60" />
          <div className="pl-2">
            <p className="font-semibold">팀</p>
            <p className="text-sm text-muted-foreground">
              팀 구성원과 권한을 확인하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}`;

const decorativeCode = `import { Separator } from "@/components/ui/separator"

export default function AccessibleSeparatorExample() {
  return (
    <div className="space-y-4">
      <p>
        결제 수단은 다음 섹션에서 관리할 수 있습니다. 구분선은 보조
        기술을 사용하는 사용자에게도 내용을 명확하게 전달합니다.
      </p>
      <Separator decorative={false} role="separator" aria-label="결제 관리 구분선" />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">결제 관리</h3>
        <p className="text-sm text-muted-foreground">
          신용카드, 청구서, 영수증 설정을 관리하세요.
        </p>
      </div>
    </div>
  )
}`;

const sectionTitleCode = `import { Separator } from "@/components/ui/separator"

export default function SectionTitleExample() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          개요
        </span>
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">⌘K</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          최근 활동
        </span>
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">3 업데이트</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          단축키
        </span>
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">⌘/</span>
      </div>
    </div>
  )
}`;

function CodeBlock({ code }: { code: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border">
      <SyntaxHighlighter
        language="tsx"
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          fontFamily: "ui-monospace, monospace",
        }}
        showLineNumbers={false}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function ExampleSection({
  title,
  description,
  preview,
  code,
}: {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <div className="flex min-h-[200px] items-center justify-center rounded-lg border bg-background p-8">
            {preview}
          </div>
        </TabsContent>
        <TabsContent value="code" className="mt-4">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function SeparatorPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Separator"
        description="콘텐츠 블록을 구분하는 얇은 선 컴포넌트입니다."
      />
      <main className="flex-1">
        <div className="container mx-auto max-w-6xl space-y-12 p-8">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Separator</h1>
            <p className="text-xl text-muted-foreground">
              섹션 사이에 구분선을 추가하여 콘텐츠를 시각적으로 나눌 수
              있습니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Separator 사용 예시입니다."
            preview={
              <div className="w-full space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">프로필</h3>
                  <p className="text-sm text-muted-foreground">
                    계정 정보를 확인하고 변경할 수 있습니다.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">보안</h3>
                  <p className="text-sm text-muted-foreground">
                    비밀번호와 2단계 인증을 관리하세요.
                  </p>
                </div>
              </div>
            }
            code={basicUsageCode}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 Separator 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add separator`} />
              </TabsContent>
              <TabsContent value="manual" className="mt-4">
                <CodeBlock code={manualInstallationCode} />
              </TabsContent>
            </Tabs>
          </div>

          {/* API Reference */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">API Reference</h2>
            <div className="rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold">
                        Prop
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Default
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        orientation
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        "horizontal" | "vertical"
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">
                        "horizontal"
                      </td>
                      <td className="px-4 py-3 text-sm">
                        구분선의 방향을 설정합니다.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        decorative
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">true</td>
                      <td className="px-4 py-3 text-sm">
                        보조 기술에 구분선을 숨길지 여부입니다. 접근성
                        목적이라면 false로 설정하세요.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t" />

          {/* Examples */}
          <div>
            <h2 className="mb-2 text-3xl font-bold">Examples</h2>
            <p className="text-muted-foreground">
              다양한 Separator 스타일과 사용 예시를 확인하세요.
            </p>
          </div>

          <ExampleSection
            title="Variants"
            description="orientation prop을 사용해 수평 또는 수직 구분선을 적용합니다."
            preview={
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Horizontal
                  </span>
                  <Separator />
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Vertical
                  </span>
                  <div className="flex h-10 items-center gap-4">
                    <span>프로필</span>
                    <Separator orientation="vertical" className="h-full" />
                    <span>설정</span>
                    <Separator orientation="vertical" className="h-full" />
                    <span>보안</span>
                  </div>
                </div>
              </div>
            }
            code={variantsCode}
          />

          <ExampleSection
            title="Inset Separators"
            description="마진이나 패딩을 활용해 구분선의 시작 지점을 조절할 수 있습니다."
            preview={
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium">전체 폭</p>
                  <Separator />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Inset</p>
                  <Separator className="mx-6 w-auto rounded-full bg-border/70" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Section Divider</p>
                  <div className="space-y-2 rounded-lg border bg-card p-4">
                    <div>
                      <p className="font-semibold">계정</p>
                      <p className="text-sm text-muted-foreground">
                        프로필과 개인 정보를 관리하세요.
                      </p>
                    </div>
                    <Separator className="mx-2 bg-border/60" />
                    <div className="pl-2">
                      <p className="font-semibold">팀</p>
                      <p className="text-sm text-muted-foreground">
                        팀 구성원과 권한을 확인하세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
            code={insetSeparatorCode}
          />

          <ExampleSection
            title="Decorative Prop"
            description="decorative prop을 false로 설정해 보조 기술에도 구분선을 노출하세요."
            preview={
              <div className="space-y-4">
                <p>
                  결제 수단은 다음 섹션에서 관리할 수 있습니다. 구분선은 보조
                  기술을 사용하는 사용자에게도 내용을 명확하게 전달합니다.
                </p>
                <Separator
                  decorative={false}
                  role="separator"
                  aria-label="결제 관리 구분선"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">결제 관리</h3>
                  <p className="text-sm text-muted-foreground">
                    신용카드, 청구서, 영수증 설정을 관리하세요.
                  </p>
                </div>
              </div>
            }
            code={decorativeCode}
          />

          <ExampleSection
            title="Section Titles"
            description="텍스트와 함께 사용하여 구분선이 시각적 균형과 정보 구조를 제공하도록 할 수 있습니다."
            preview={
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    개요
                  </span>
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted-foreground">⌘K</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    최근 활동
                  </span>
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted-foreground">
                    3 업데이트
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    단축키
                  </span>
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted-foreground">⌘/</span>
                </div>
              </div>
            }
            code={sectionTitleCode}
          />
        </div>
      </main>
    </div>
  );
}
