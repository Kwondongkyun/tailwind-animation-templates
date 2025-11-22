"use client";

import { PageHeader } from "@/components/page-header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CodeBlock, ExampleSection } from "@/components/docs";

export default function SelectPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Select"
        description="사용자가 선택할 수 있는 옵션 목록을 표시합니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Select</h1>
            <p className="text-xl text-muted-foreground">
              사용자가 선택할 수 있는 옵션 목록을 표시합니다.
            </p>
          </div>
          {/* 기본 사용법 */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Select 사용 예시입니다."
            preview={
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="과일 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>과일</SelectLabel>
                    <SelectItem value="apple">사과</SelectItem>
                    <SelectItem value="banana">바나나</SelectItem>
                    <SelectItem value="blueberry">블루베리</SelectItem>
                    <SelectItem value="grapes">포도</SelectItem>
                    <SelectItem value="pineapple">파인애플</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            }
            code={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="과일 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>과일</SelectLabel>
      <SelectItem value="apple">사과</SelectItem>
      <SelectItem value="banana">바나나</SelectItem>
      <SelectItem value="blueberry">블루베리</SelectItem>
      <SelectItem value="grapes">포도</SelectItem>
      <SelectItem value="pineapple">파인애플</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Installation</h2>
              <p className="text-muted-foreground">
                shadcn CLI를 사용하여 Select 컴포넌트를 설치합니다.
              </p>
            </div>
            <CodeBlock code={`npx shadcn@latest add select`} />
          </div>

          {/* API Reference */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">API Reference</h2>
              <p className="text-muted-foreground">
                Select 컴포넌트에서 사용 가능한 속성들입니다.
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
                      <td className="px-4 py-3 font-mono text-xs">
                        defaultValue
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">string</td>
                      <td className="px-4 py-3 font-mono text-xs">-</td>
                      <td className="px-4 py-3">기본 선택 값</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">value</td>
                      <td className="px-4 py-3 font-mono text-xs">string</td>
                      <td className="px-4 py-3 font-mono text-xs">-</td>
                      <td className="px-4 py-3">제어되는 선택 값</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">
                        onValueChange
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">
                        (value: string) =&gt; void
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">-</td>
                      <td className="px-4 py-3">값 변경 시 호출되는 함수</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">disabled</td>
                      <td className="px-4 py-3 font-mono text-xs">boolean</td>
                      <td className="px-4 py-3 font-mono text-xs">false</td>
                      <td className="px-4 py-3">비활성화 상태</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">name</td>
                      <td className="px-4 py-3 font-mono text-xs">string</td>
                      <td className="px-4 py-3 font-mono text-xs">-</td>
                      <td className="px-4 py-3">폼 제출 시 사용되는 이름</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">required</td>
                      <td className="px-4 py-3 font-mono text-xs">boolean</td>
                      <td className="px-4 py-3 font-mono text-xs">false</td>
                      <td className="px-4 py-3">필수 입력 여부</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Examples */}
          <ExampleSection
            title="With Label"
            titleLink="/shadcn/label"
            description="Label 컴포넌트와 함께 사용하여 접근성을 향상시킬 수 있습니다."
            preview={
              <div className="w-full flex flex-col items-center max-w-sm space-y-2">
                <Label htmlFor="framework">프레임워크</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="프레임워크 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>프론트엔드</SelectLabel>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            }
            code={`import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="framework">프레임워크</Label>
  <Select>
    <SelectTrigger id="framework">
      <SelectValue placeholder="프레임워크 선택" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>프론트엔드</SelectLabel>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>`}
          />

          <ExampleSection
            title="Scrollable"
            description="많은 옵션이 있을 때 스크롤 가능한 Select를 사용할 수 있습니다."
            preview={
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="타임존 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>북미</SelectLabel>
                    <SelectItem value="est">동부 표준시 (EST)</SelectItem>
                    <SelectItem value="cst">중부 표준시 (CST)</SelectItem>
                    <SelectItem value="mst">산악 표준시 (MST)</SelectItem>
                    <SelectItem value="pst">태평양 표준시 (PST)</SelectItem>
                    <SelectItem value="akst">알래스카 표준시 (AKST)</SelectItem>
                    <SelectItem value="hst">하와이 표준시 (HST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>유럽 및 아프리카</SelectLabel>
                    <SelectItem value="gmt">그리니치 표준시 (GMT)</SelectItem>
                    <SelectItem value="cet">중앙 유럽 시간 (CET)</SelectItem>
                    <SelectItem value="eet">동부 유럽 시간 (EET)</SelectItem>
                    <SelectItem value="west">
                      서부 유럽 여름 시간 (WEST)
                    </SelectItem>
                    <SelectItem value="cat">
                      중앙 아프리카 시간 (CAT)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>아시아</SelectLabel>
                    <SelectItem value="msk">모스크바 시간 (MSK)</SelectItem>
                    <SelectItem value="ist">인도 표준시 (IST)</SelectItem>
                    <SelectItem value="cst_china">중국 표준시 (CST)</SelectItem>
                    <SelectItem value="jst">일본 표준시 (JST)</SelectItem>
                    <SelectItem value="kst">한국 표준시 (KST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>호주 및 태평양</SelectLabel>
                    <SelectItem value="awst">
                      호주 서부 표준시 (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                      호주 중부 표준시 (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                      호주 동부 표준시 (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">뉴질랜드 표준시 (NZST)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            }
            code={`<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="타임존 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>북미</SelectLabel>
      <SelectItem value="est">동부 표준시 (EST)</SelectItem>
      <SelectItem value="cst">중부 표준시 (CST)</SelectItem>
      <SelectItem value="mst">산악 표준시 (MST)</SelectItem>
      <SelectItem value="pst">태평양 표준시 (PST)</SelectItem>
      <SelectItem value="akst">알래스카 표준시 (AKST)</SelectItem>
      <SelectItem value="hst">하와이 표준시 (HST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>유럽 및 아프리카</SelectLabel>
      <SelectItem value="gmt">그리니치 표준시 (GMT)</SelectItem>
      <SelectItem value="cet">중앙 유럽 시간 (CET)</SelectItem>
      <SelectItem value="eet">동부 유럽 시간 (EET)</SelectItem>
      <SelectItem value="west">서부 유럽 여름 시간 (WEST)</SelectItem>
      <SelectItem value="cat">중앙 아프리카 시간 (CAT)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>아시아</SelectLabel>
      <SelectItem value="msk">모스크바 시간 (MSK)</SelectItem>
      <SelectItem value="ist">인도 표준시 (IST)</SelectItem>
      <SelectItem value="cst_china">중국 표준시 (CST)</SelectItem>
      <SelectItem value="jst">일본 표준시 (JST)</SelectItem>
      <SelectItem value="kst">한국 표준시 (KST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>호주 및 태평양</SelectLabel>
      <SelectItem value="awst">호주 서부 표준시 (AWST)</SelectItem>
      <SelectItem value="acst">호주 중부 표준시 (ACST)</SelectItem>
      <SelectItem value="aest">호주 동부 표준시 (AEST)</SelectItem>
      <SelectItem value="nzst">뉴질랜드 표준시 (NZST)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          />

          <ExampleSection
            title="Disabled"
            description="disabled 속성을 사용하여 Select를 비활성화할 수 있습니다."
            preview={
              <Select disabled>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="선택 불가" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="option1">옵션 1</SelectItem>
                    <SelectItem value="option2">옵션 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            }
            code={`<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="선택 불가" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="option1">옵션 1</SelectItem>
      <SelectItem value="option2">옵션 2</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          />

          <ExampleSection
            title="Default Value"
            description="defaultValue를 사용하여 초기 선택 값을 설정할 수 있습니다."
            preview={
              <Select defaultValue="react">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="프레임워크 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>프론트엔드</SelectLabel>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            }
            code={`<Select defaultValue="react">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="프레임워크 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>프론트엔드</SelectLabel>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
      <SelectItem value="angular">Angular</SelectItem>
      <SelectItem value="svelte">Svelte</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          />

          <ExampleSection
            title="Form Example"
            description="폼에서 Select를 사용하는 예시입니다."
            preview={
              <div className="w-full flex items-center justify-center gap-4 max-w-sm ">
                <div className="space-y-2">
                  <Label htmlFor="country">국가</Label>
                  <Select defaultValue="kr">
                    <SelectTrigger id="country">
                      <SelectValue placeholder="국가 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>아시아</SelectLabel>
                        <SelectItem value="kr">대한민국</SelectItem>
                        <SelectItem value="jp">일본</SelectItem>
                        <SelectItem value="cn">중국</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>북미</SelectLabel>
                        <SelectItem value="us">미국</SelectItem>
                        <SelectItem value="ca">캐나다</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>유럽</SelectLabel>
                        <SelectItem value="uk">영국</SelectItem>
                        <SelectItem value="de">독일</SelectItem>
                        <SelectItem value="fr">프랑스</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">언어</Label>
                  <Select defaultValue="ko">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="언어 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ko">한국어</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                      <SelectItem value="zh">中文</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            }
            code={`import { Label } from "@/components/ui/label"

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="country">국가</Label>
    <Select defaultValue="kr">
      <SelectTrigger id="country">
        <SelectValue placeholder="국가 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>아시아</SelectLabel>
          <SelectItem value="kr">대한민국</SelectItem>
          <SelectItem value="jp">일본</SelectItem>
          <SelectItem value="cn">중국</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>북미</SelectLabel>
          <SelectItem value="us">미국</SelectItem>
          <SelectItem value="ca">캐나다</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>유럽</SelectLabel>
          <SelectItem value="uk">영국</SelectItem>
          <SelectItem value="de">독일</SelectItem>
          <SelectItem value="fr">프랑스</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>

  <div className="space-y-2">
    <Label htmlFor="language">언어</Label>
    <Select defaultValue="ko">
      <SelectTrigger id="language">
        <SelectValue placeholder="언어 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ko">한국어</SelectItem>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ja">日本語</SelectItem>
        <SelectItem value="zh">中文</SelectItem>
      </SelectContent>
    </Select>
  </div>
</div>`}
          />
        </div>
      </main>
    </div>
  );
}
