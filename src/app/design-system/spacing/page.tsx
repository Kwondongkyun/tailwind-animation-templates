"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock, ExampleSection } from "@/components/docs";

export default function SpacingPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Spacing"
        description="간격 시스템과 레이아웃 가이드입니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Spacing</h1>
            <p className="text-xl text-muted-foreground">
              일관된 간격 시스템으로 조화로운 레이아웃을 구성합니다.
            </p>
          </div>

          {/* Spacing Scale */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Spacing Scale</h2>
            <p className="text-muted-foreground">
              Tailwind CSS의 기본 간격 스케일 (1 unit = 0.25rem = 4px)
            </p>
            <div className="space-y-2">
              {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48].map(
                (space) => (
                  <div key={space} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-mono">{space}</div>
                    <div className="w-20 text-sm text-muted-foreground">
                      {space * 4}px
                    </div>
                    <div
                      className="h-8 bg-primary"
                      style={{ width: `${space * 4}px` }}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Padding */}
          <ExampleSection
            title="Padding"
            description="요소 내부 간격입니다."
            preview={
              <div className="space-y-4 w-full">
                <div className="border rounded-lg">
                  <div className="p-2 bg-primary/10">p-2 (8px)</div>
                </div>
                <div className="border rounded-lg">
                  <div className="p-4 bg-primary/10">p-4 (16px)</div>
                </div>
                <div className="border rounded-lg">
                  <div className="p-6 bg-primary/10">p-6 (24px)</div>
                </div>
                <div className="border rounded-lg">
                  <div className="p-8 bg-primary/10">p-8 (32px)</div>
                </div>
              </div>
            }
            code={`<div className="p-2">Small padding</div>
<div className="p-4">Medium padding</div>
<div className="p-6">Large padding</div>
<div className="p-8">Extra large padding</div>`}
          />

          {/* Margin */}
          <ExampleSection
            title="Margin"
            description="요소 외부 간격입니다."
            preview={
              <div className="border rounded-lg p-4">
                <div className="bg-primary/10 p-2 mb-2">mb-2 (8px)</div>
                <div className="bg-primary/10 p-2 mb-4">mb-4 (16px)</div>
                <div className="bg-primary/10 p-2 mb-6">mb-6 (24px)</div>
                <div className="bg-primary/10 p-2">Last item</div>
              </div>
            }
            code={`<div className="mb-2">Small margin bottom</div>
<div className="mb-4">Medium margin bottom</div>
<div className="mb-6">Large margin bottom</div>`}
          />

          {/* Gap */}
          <ExampleSection
            title="Gap (Flexbox/Grid)"
            description="Flexbox나 Grid 레이아웃에서 자식 요소 간 간격입니다."
            preview={
              <div className="space-y-4 w-full">
                <div className="flex gap-2 border rounded-lg p-4">
                  <div className="bg-primary/10 p-4 flex-1">Item 1</div>
                  <div className="bg-primary/10 p-4 flex-1">Item 2</div>
                  <div className="bg-primary/10 p-4 flex-1">Item 3</div>
                </div>
                <p className="text-sm text-muted-foreground">gap-2 (8px)</p>

                <div className="flex gap-4 border rounded-lg p-4">
                  <div className="bg-primary/10 p-4 flex-1">Item 1</div>
                  <div className="bg-primary/10 p-4 flex-1">Item 2</div>
                  <div className="bg-primary/10 p-4 flex-1">Item 3</div>
                </div>
                <p className="text-sm text-muted-foreground">gap-4 (16px)</p>

                <div className="flex gap-8 border rounded-lg p-4">
                  <div className="bg-primary/10 p-4 flex-1">Item 1</div>
                  <div className="bg-primary/10 p-4 flex-1">Item 2</div>
                  <div className="bg-primary/10 p-4 flex-1">Item 3</div>
                </div>
                <p className="text-sm text-muted-foreground">gap-8 (32px)</p>
              </div>
            }
            code={`<div className="flex gap-2">...</div>
<div className="flex gap-4">...</div>
<div className="flex gap-8">...</div>`}
          />

          {/* Space Between */}
          <ExampleSection
            title="Space Utility"
            description="space-y와 space-x를 사용한 간격 설정입니다."
            preview={
              <div className="space-y-4 w-full">
                <div className="space-y-2 border rounded-lg p-4">
                  <div className="bg-primary/10 p-2">Item 1</div>
                  <div className="bg-primary/10 p-2">Item 2</div>
                  <div className="bg-primary/10 p-2">Item 3</div>
                </div>
                <p className="text-sm text-muted-foreground">space-y-2</p>

                <div className="space-y-4 border rounded-lg p-4">
                  <div className="bg-primary/10 p-2">Item 1</div>
                  <div className="bg-primary/10 p-2">Item 2</div>
                  <div className="bg-primary/10 p-2">Item 3</div>
                </div>
                <p className="text-sm text-muted-foreground">space-y-4</p>
              </div>
            }
            code={`<div className="space-y-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
          />

          {/* Container */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Container</h2>
            <p className="text-muted-foreground">
              최대 너비를 제한하고 중앙 정렬하는 컨테이너 클래스입니다.
            </p>
            <CodeBlock
              code={`// 기본 컨테이너
<div className="container mx-auto px-4">
  Content
</div>

// 최대 너비 제한
<div className="container max-w-6xl mx-auto px-8">
  Content
</div>

// 반응형 패딩
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>`}
            />
          </div>

          {/* Common Spacing Patterns */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">일반적인 간격 패턴</h2>
            <div className="space-y-6">
              {/* Section Spacing */}
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-3">섹션 간격</h3>
                <CodeBlock
                  code={`// 페이지 내 섹션 구분
<div className="space-y-12">
  <section>...</section>
  <section>...</section>
</div>

// 카드 그리드
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>`}
                />
              </div>

              {/* Form Spacing */}
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-3">폼 요소 간격</h3>
                <CodeBlock
                  code={`// 폼 필드 간격
<form className="space-y-4">
  <div className="space-y-2">
    <Label>Username</Label>
    <Input />
  </div>
  <div className="space-y-2">
    <Label>Password</Label>
    <Input type="password" />
  </div>
  <Button>Submit</Button>
</form>`}
                />
              </div>

              {/* Content Spacing */}
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-3">콘텐츠 간격</h3>
                <CodeBlock
                  code={`// 텍스트 콘텐츠
<article className="space-y-4">
  <h1 className="text-4xl font-bold">Title</h1>
  <p className="text-xl text-muted-foreground">Subtitle</p>
  <div className="space-y-3">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
</article>`}
                />
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">베스트 프랙티스</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">✅ Do</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>일관된 간격 스케일 사용 (4px 배수)</li>
                  <li>space-y, space-x를 활용한 자식 요소 간격</li>
                  <li>gap을 사용한 Flexbox/Grid 레이아웃</li>
                  <li>섹션 구분은 큰 간격 (space-y-8, space-y-12)</li>
                  <li>관련 요소는 작은 간격 (space-y-2, space-y-4)</li>
                </ul>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <p className="font-semibold mb-2 text-destructive">
                  ❌ Don&apos;t
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>임의의 픽셀 값 사용</li>
                  <li>과도한 간격으로 콘텐츠 분리</li>
                  <li>너무 좁은 간격으로 가독성 저하</li>
                  <li>반응형 고려 없이 고정된 간격만 사용</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
