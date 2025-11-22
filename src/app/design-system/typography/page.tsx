"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock, ExampleSection } from "@/components/docs";

export default function TypographyPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Typography"
        description="타이포그래피 시스템과 텍스트 스타일 가이드입니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Typography</h1>
            <p className="text-xl text-muted-foreground">
              일관된 타이포그래피 시스템으로 가독성과 계층 구조를 제공합니다.
            </p>
          </div>

          {/* Font Family */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Font Family</h2>
            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <p className="text-2xl font-sans mb-2">Sans Serif (Default)</p>
                <p className="text-sm text-muted-foreground">
                  font-family: var(--font-geist-sans)
                </p>
                <p className="mt-4 text-muted-foreground">
                  The quick brown fox jumps over the lazy dog. 빠른 갈색 여우가
                  게으른 개를 뛰어넘습니다.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <p className="text-2xl font-mono mb-2">Monospace</p>
                <p className="text-sm text-muted-foreground">
                  font-family: var(--font-geist-mono)
                </p>
                <p className="mt-4 text-muted-foreground font-mono">
                  The quick brown fox jumps over the lazy dog.
                  console.log("Hello World");
                </p>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Type Scale</h2>
            <p className="text-muted-foreground">
              Tailwind CSS의 기본 타이포그래피 스케일을 사용합니다.
            </p>
            <div className="space-y-3 p-6 border rounded-lg">
              <div className="text-xs">text-xs - 12px</div>
              <div className="text-sm">text-sm - 14px</div>
              <div className="text-base">text-base - 16px</div>
              <div className="text-lg">text-lg - 18px</div>
              <div className="text-xl">text-xl - 20px</div>
              <div className="text-2xl">text-2xl - 24px</div>
              <div className="text-3xl">text-3xl - 30px</div>
              <div className="text-4xl">text-4xl - 36px</div>
              <div className="text-5xl">text-5xl - 48px</div>
            </div>
          </div>

          {/* Font Weight */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Font Weight</h2>
            <div className="space-y-3 p-6 border rounded-lg">
              <div className="font-light">font-light (300) - Light Text</div>
              <div className="font-normal">font-normal (400) - Normal Text</div>
              <div className="font-medium">font-medium (500) - Medium Text</div>
              <div className="font-semibold">
                font-semibold (600) - Semibold Text
              </div>
              <div className="font-bold">font-bold (700) - Bold Text</div>
            </div>
          </div>

          {/* Headings */}
          <ExampleSection
            title="Headings"
            description="제목 스타일 예시입니다."
            preview={
              <div className="space-y-4 w-full">
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <h2 className="text-3xl font-bold">Heading 2</h2>
                <h3 className="text-2xl font-bold">Heading 3</h3>
                <h4 className="text-xl font-semibold">Heading 4</h4>
                <h5 className="text-lg font-semibold">Heading 5</h5>
                <h6 className="text-base font-semibold">Heading 6</h6>
              </div>
            }
            code={`<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-3xl font-bold">Heading 2</h2>
<h3 className="text-2xl font-bold">Heading 3</h3>
<h4 className="text-xl font-semibold">Heading 4</h4>
<h5 className="text-lg font-semibold">Heading 5</h5>
<h6 className="text-base font-semibold">Heading 6</h6>`}
          />

          {/* Body Text */}
          <ExampleSection
            title="Body Text"
            description="본문 텍스트 스타일입니다."
            preview={
              <div className="space-y-4 w-full">
                <p className="text-base">
                  This is a regular paragraph with default styling. 이것은 기본
                  스타일의 일반 단락입니다.
                </p>
                <p className="text-base text-muted-foreground">
                  This is muted text for secondary content. 보조 콘텐츠를 위한
                  음소거 텍스트입니다.
                </p>
                <p className="text-sm">
                  This is smaller text for captions or labels. 캡션이나 레이블을
                  위한 작은 텍스트입니다.
                </p>
              </div>
            }
            code={`<p className="text-base">Regular paragraph</p>
<p className="text-base text-muted-foreground">Muted text</p>
<p className="text-sm">Small text</p>`}
          />

          {/* Line Height */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Line Height</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">leading-tight</p>
                <p className="leading-tight text-muted-foreground">
                  This paragraph uses tight line height. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. 좁은 줄 간격을 사용합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">leading-normal (default)</p>
                <p className="leading-normal text-muted-foreground">
                  This paragraph uses normal line height. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. 일반 줄 간격을 사용합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">leading-relaxed</p>
                <p className="leading-relaxed text-muted-foreground">
                  This paragraph uses relaxed line height. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. 여유로운 줄 간격을
                  사용합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">leading-loose</p>
                <p className="leading-loose text-muted-foreground">
                  This paragraph uses loose line height. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. 넓은 줄 간격을 사용합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Code */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Usage Example</h2>
            <CodeBlock
              code={`// Typography 클래스 사용 예시
<div className="space-y-4">
  <h1 className="text-4xl font-bold">Page Title</h1>
  <p className="text-xl text-muted-foreground">Subtitle or description</p>
  <p className="text-base leading-relaxed">
    Body text with comfortable reading experience.
  </p>
  <code className="font-mono text-sm">const example = true;</code>
</div>`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
