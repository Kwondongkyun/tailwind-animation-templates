"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CodeBlock, ExampleSection } from "@/components/docs";
import {
  Plus,
  Trash2,
  Copy,
  Share2,
  Settings,
  Bold,
  Italic,
  Underline,
  ExternalLink,
} from "lucide-react";

export default function TooltipPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Tooltip"
        description="요소에 키보드 포커스가 있거나 마우스가 호버할 때 관련 정보를 표시하는 팝업입니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* 기본 사용법 */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Tooltip</h1>
            <p className="text-xl text-muted-foreground">
              요소에 키보드 포커스가 있거나 마우스가 호버할 때 관련 정보를
              표시하는 팝업입니다.
            </p>
          </div>
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Tooltip 사용 예시입니다."
            preview={
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>라이브러리에 추가</p>
                </TooltipContent>
              </Tooltip>
            }
            code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>라이브러리에 추가</p>
  </TooltipContent>
</Tooltip>`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Installation</h2>
              <p className="text-muted-foreground">
                shadcn CLI를 사용하여 Tooltip 컴포넌트를 설치합니다.
              </p>
            </div>
            <CodeBlock code={`npx shadcn@latest add tooltip`} />
          </div>

          {/* API Reference */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">API Reference</h2>
              <p className="text-muted-foreground">
                Tooltip 컴포넌트에서 사용 가능한 속성들입니다.
              </p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">속성</th>
                      <th className="px-4 py-3 text-left font-medium">타입</th>
                      <th className="px-4 py-3 text-left font-medium">
                        기본값
                      </th>
                      <th className="px-4 py-3 text-left font-medium">설명</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">side</td>
                      <td className="px-4 py-3 font-mono text-xs">
                        "top" | "right" | "bottom" | "left"
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">"top"</td>
                      <td className="px-4 py-3">툴팁이 표시될 위치</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">
                        sideOffset
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">number</td>
                      <td className="px-4 py-3 font-mono text-xs">0</td>
                      <td className="px-4 py-3">트리거로부터의 거리 (픽셀)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">
                        delayDuration
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">number</td>
                      <td className="px-4 py-3 font-mono text-xs">0</td>
                      <td className="px-4 py-3">
                        툴팁이 표시되기까지의 지연 시간 (밀리초)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">
                        defaultOpen
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">boolean</td>
                      <td className="px-4 py-3 font-mono text-xs">false</td>
                      <td className="px-4 py-3">초기 열림 상태</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">open</td>
                      <td className="px-4 py-3 font-mono text-xs">boolean</td>
                      <td className="px-4 py-3 font-mono text-xs">-</td>
                      <td className="px-4 py-3">제어되는 열림 상태</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">
                        onOpenChange
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">
                        (open: boolean) =&gt; void
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">-</td>
                      <td className="px-4 py-3">
                        열림 상태 변경 시 호출되는 함수
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Examples */}
          <ExampleSection
            title="위치 설정"
            description="side 속성을 사용하여 툴팁의 위치를 조정할 수 있습니다."
            preview={
              <div className="flex flex-wrap items-center gap-8">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>위에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>오른쪽에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>아래에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>왼쪽에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Top</Button>
  </TooltipTrigger>
  <TooltipContent side="top">
    <p>위에 표시됩니다</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Right</Button>
  </TooltipTrigger>
  <TooltipContent side="right">
    <p>오른쪽에 표시됩니다</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Bottom</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom">
    <p>아래에 표시됩니다</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Left</Button>
  </TooltipTrigger>
  <TooltipContent side="left">
    <p>왼쪽에 표시됩니다</p>
  </TooltipContent>
</Tooltip>`}
          />

          <ExampleSection
            title="아이콘 버튼"
            titleLink="/shadcn/button"
            description="아이콘 버튼에 툴팁을 추가하여 기능을 설명할 수 있습니다."
            preview={
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>추가</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>복사</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>공유</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>삭제</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            code={`import { Plus, Copy, Share2, Trash2 } from "lucide-react"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Plus className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>추가</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Copy className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>복사</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Share2 className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>공유</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Trash2 className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>삭제</p>
  </TooltipContent>
</Tooltip>`}
          />

          <ExampleSection
            title="지연 시간 설정"
            description="delayDuration 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다. (tooltip.tsx 수정 필요)"
            preview={
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">지연 없음 (0ms)</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>즉시 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={500}>
                  <TooltipTrigger asChild>
                    <Button variant="outline">지연 있음 (500ms)</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>0.5초 후 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            code={`// components/ui/tooltip.tsx 수정 필요:
function Tooltip({
  delayDuration,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  delayDuration?: number;
}) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

// 사용법:
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">지연 없음 (0ms)</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>즉시 표시됩니다</p>
  </TooltipContent>
</Tooltip>

<Tooltip delayDuration={500}>
  <TooltipTrigger asChild>
    <Button variant="outline">지연 있음 (500ms)</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>0.5초 후 표시됩니다</p>
  </TooltipContent>
</Tooltip>`}
          />

          <ExampleSection
            title="커스텀 콘텐츠"
            description="툴팁 내부에 다양한 콘텐츠를 표시할 수 있습니다."
            preview={
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      설정
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="space-y-1">
                      <p className="font-semibold">설정</p>
                      <p className="text-xs text-muted-foreground">
                        애플리케이션 설정을 관리합니다
                      </p>
                      <p className="text-xs text-muted-foreground">⌘ + ,</p>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      링크
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="space-y-1">
                      <p className="font-semibold">외부 링크</p>
                      <p className="text-xs text-muted-foreground">
                        새 탭에서 열립니다
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            code={`import { Settings, ExternalLink } from "lucide-react"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">
      <Settings className="h-4 w-4 mr-2" />
      설정
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <div className="space-y-1">
      <p className="font-semibold">설정</p>
      <p className="text-xs text-muted-foreground">
        애플리케이션 설정을 관리합니다
      </p>
      <p className="text-xs text-muted-foreground">⌘ + ,</p>
    </div>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">
      <ExternalLink className="h-4 w-4 mr-2" />
      링크
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <div className="space-y-1">
      <p className="font-semibold">외부 링크</p>
      <p className="text-xs text-muted-foreground">
        새 탭에서 열립니다
      </p>
    </div>
  </TooltipContent>
</Tooltip>`}
          />

          <ExampleSection
            title="거리 조정"
            description="sideOffset 속성을 사용하여 트리거로부터의 거리를 조정할 수 있습니다."
            preview={
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">기본 (0px)</Button>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={0}>
                    <p>거리: 0px</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">가까움 (5px)</Button>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={5}>
                    <p>거리: 5px</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">보통 (10px)</Button>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={10}>
                    <p>거리: 10px</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">멀음 (20px)</Button>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={20}>
                    <p>거리: 20px</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">기본 (0px)</Button>
  </TooltipTrigger>
  <TooltipContent sideOffset={0}>
    <p>거리: 0px</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">가까움 (5px)</Button>
  </TooltipTrigger>
  <TooltipContent sideOffset={5}>
    <p>거리: 5px</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">보통 (10px)</Button>
  </TooltipTrigger>
  <TooltipContent sideOffset={10}>
    <p>거리: 10px</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">멀음 (20px)</Button>
  </TooltipTrigger>
  <TooltipContent sideOffset={20}>
    <p>거리: 20px</p>
  </TooltipContent>
</Tooltip>`}
          />

          <ExampleSection
            title="텍스트 에디터 툴바"
            description="텍스트 에디터의 툴바 버튼에 툴팁을 추가한 실용적인 예시입니다."
            preview={
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-1 border-b pb-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Bold className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>굵게 (⌘B)</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Italic className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>기울임꼴 (⌘I)</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Underline className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>밑줄 (⌘U)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="text-sm text-muted-foreground">
                  여기에 텍스트를 입력하세요...
                </div>
              </div>
            }
            code={`import { Bold, Italic, Underline } from "lucide-react"

<div className="border rounded-lg p-4 space-y-4">
  <div className="flex items-center gap-1 border-b pb-3">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bold className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>굵게 (⌘B)</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Italic className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>기울임꼴 (⌘I)</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Underline className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>밑줄 (⌘U)</p>
      </TooltipContent>
    </Tooltip>
  </div>

  <div className="text-sm text-muted-foreground">
    여기에 텍스트를 입력하세요...
  </div>
</div>`}
          />
        </div>
      </main>
    </div>
  );
}
