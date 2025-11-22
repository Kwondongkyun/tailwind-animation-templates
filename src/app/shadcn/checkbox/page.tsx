"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const basicUsageCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const tasks = [
  {
    id: "task-1",
    label: "UI 감사 보고서 검토",
    description: "컴포넌트 토큰과 접근성 상태를 확인하세요.",
  },
  {
    id: "task-2",
    label: "신규 컴포넌트 기획 회의",
  },
  {
    id: "task-3",
    label: "디자인 시스템 업데이트 공지",
  },
]

export default function Example() {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-start space-x-3 rounded-lg border bg-card/40 p-4"
        >
          <Checkbox id={task.id} />
          <div className="space-y-1">
            <Label htmlFor={task.id} className="text-sm font-medium leading-none">
              {task.label}
            </Label>
            {task.description ? (
              <p className="text-sm text-muted-foreground">{task.description}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}
`;

const manualInstallationCode = `// components/ui/checkbox.tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }`;

const statesCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function StatesExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <Checkbox id="state-default" />
        <div className="space-y-1">
          <Label htmlFor="state-default" className="text-sm font-medium leading-none">
            기본 상태
          </Label>
          <p className="text-sm text-muted-foreground">
            아무 값도 선택하지 않은 상태입니다.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <Checkbox id="state-checked" defaultChecked />
        <div className="space-y-1">
          <Label htmlFor="state-checked" className="text-sm font-medium leading-none">
            선택됨
          </Label>
          <p className="text-sm text-muted-foreground">
            defaultChecked로 기본 선택 상태를 지정할 수 있습니다.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 opacity-60">
        <Checkbox id="state-disabled" disabled />
        <div className="space-y-1">
          <Label htmlFor="state-disabled" className="text-sm font-medium leading-none">
            비활성화
          </Label>
          <p className="text-sm text-muted-foreground">
            disabled prop으로 입력 비활성화 상태를 제공합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
`;

const withDescriptionCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function WithDescriptionExample() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card/30 p-4">
        <div className="flex items-start space-x-3">
          <Checkbox id="notifications" defaultChecked />
          <div className="space-y-1 leading-none">
            <Label htmlFor="notifications">제품 업데이트 알림</Label>
            <p className="text-sm text-muted-foreground">
              새로운 기능과 버그 수정 소식을 이메일로 받아보세요.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card/30 p-4">
        <div className="flex items-start space-x-3">
          <Checkbox id="security-alerts" aria-invalid />
          <div className="space-y-1 leading-none">
            <Label htmlFor="security-alerts">보안 경고</Label>
            <p className="text-sm text-destructive">
              최소 한 개 이상 선택해야 합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
`;

const inlineChecklistCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const features = [
  { id: "feature-analytics", label: "Analytics" },
  { id: "feature-automation", label: "Automation" },
  { id: "feature-collaboration", label: "Collaboration" },
  { id: "feature-security", label: "Security" },
]

export default function InlineChecklistExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex items-center space-x-2 rounded-full border px-4 py-2"
        >
          <Checkbox id={feature.id} className="size-3.5" />
          <Label htmlFor={feature.id} className="text-sm font-medium">
            {feature.label}
          </Label>
        </div>
      ))}
    </div>
  )
}
`;

const controlledCheckboxCode = `import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ControlledCheckboxExample() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3 rounded-lg border bg-card/40 p-4">
        <Checkbox
          id="marketing-opt-in"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
        />
        <div className="space-y-1 leading-none">
          <Label htmlFor="marketing-opt-in">마케팅 이메일 수신 동의</Label>
          <p className="text-sm text-muted-foreground">
            언제든 설정에서 수신 여부를 변경할 수 있습니다.
          </p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        현재 상태:{" "}
        <span className="font-medium text-foreground">
          {checked ? "동의함" : "동의하지 않음"}
        </span>
      </p>
    </div>
  )
}
`;

const preferenceCardCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const preferences = [
  {
    id: "pref-mentions",
    title: "멘션",
    description: "나를 언급한 활동에 대한 알림을 받습니다.",
    defaultChecked: true,
  },
  {
    id: "pref-assignments",
    title: "할 일 배정",
    description: "나에게 새로운 업무가 배정되면 즉시 알려줍니다.",
    defaultChecked: true,
  },
  {
    id: "pref-summary",
    title: "주간 요약",
    description: "매주 월요일에 팀 활동 요약을 받아보세요.",
  },
]

export default function PreferenceCardExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {preferences.map((preference) => (
        <div
          key={preference.id}
          className="space-y-3 rounded-2xl border bg-card/40 p-6 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold">{preference.title}</h3>
              <p className="text-sm text-muted-foreground">
                {preference.description}
              </p>
            </div>
            <Checkbox
              id={preference.id}
              defaultChecked={preference.defaultChecked}
              aria-label={preference.title}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
`;

function ControlledCheckboxPreview() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3 rounded-lg border bg-card/40 p-4">
        <Checkbox
          id="preview-marketing-opt-in"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
        />
        <div className="space-y-1 leading-none">
          <Label htmlFor="preview-marketing-opt-in">
            마케팅 이메일 수신 동의
          </Label>
          <p className="text-sm text-muted-foreground">
            언제든 설정에서 수신 여부를 변경할 수 있습니다.
          </p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        현재 상태:{" "}
        <span className="font-medium text-foreground">
          {checked ? "동의함" : "동의하지 않음"}
        </span>
      </p>
    </div>
  );
}

export default function CheckboxPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Checkbox"
        description="옵션 선택 여부를 표시하고 토글할 수 있는 체크박스 컴포넌트입니다."
      />
      <main className="flex-1">
        <div className="container mx-auto max-w-6xl space-y-12 p-8">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Checkbox</h1>
            <p className="text-xl text-muted-foreground">
              Checkbox는 여러 선택지 중 일부를 선택하거나 토글 상태를 표현할 때
              사용하는 기본 입력 컴포넌트입니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Checkbox 사용 예시입니다."
            preview={
              <div className="w-full space-y-3">
                {[
                  {
                    id: "basic-task-1",
                    label: "UI 감사 보고서 검토",
                    description: "컴포넌트 토큰과 접근성 상태를 확인하세요.",
                  },
                  {
                    id: "basic-task-2",
                    label: "신규 컴포넌트 기획 회의",
                  },
                  {
                    id: "basic-task-3",
                    label: "디자인 시스템 업데이트 공지",
                  },
                ].map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start space-x-3 rounded-lg border bg-card/40 p-4"
                  >
                    <Checkbox id={task.id} />
                    <div className="space-y-1">
                      <Label
                        htmlFor={task.id}
                        className="text-sm font-medium leading-none"
                      >
                        {task.label}
                      </Label>
                      {task.description ? (
                        <p className="text-sm text-muted-foreground">
                          {task.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            }
            code={basicUsageCode}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 Checkbox 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add checkbox`} />
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
                      <td className="px-4 py-3 font-mono text-sm">id</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        string
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">
                        연결된 <code>Label</code>과 접근성을 위해 사용하는 고유
                        식별자입니다.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">checked</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean | "indeterminate"
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">
                        제어 컴포넌트에서 체크 상태를 직접 설정합니다.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        defaultChecked
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">false</td>
                      <td className="px-4 py-3 text-sm">
                        언컨트롤드 컴포넌트의 초기 체크 상태를 지정합니다.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        onCheckedChange
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        (value: CheckedState) =&gt; void
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">
                        체크 상태가 변경될 때 호출되는 콜백입니다.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">disabled</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">false</td>
                      <td className="px-4 py-3 text-sm">
                        체크박스를 비활성화하여 상호작용을 막습니다.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">required</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">false</td>
                      <td className="px-4 py-3 text-sm">
                        폼 제출 시 반드시 체크해야 할 때 사용합니다.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">className</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        string
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">
                        사용자 정의 스타일 클래스를 추가합니다.
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
              다양한 Checkbox 스타일과 사용 예시를 확인하세요.
            </p>
          </div>

          <ExampleSection
            title="States"
            description="defaultChecked, disabled 등의 prop으로 다양한 상태를 표현할 수 있습니다."
            preview={
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="preview-state-default" />
                  <div className="space-y-1">
                    <Label
                      htmlFor="preview-state-default"
                      className="text-sm font-medium leading-none"
                    >
                      기본 상태
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      아무 값도 선택하지 않은 상태입니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="preview-state-checked" defaultChecked />
                  <div className="space-y-1">
                    <Label
                      htmlFor="preview-state-checked"
                      className="text-sm font-medium leading-none"
                    >
                      선택됨
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      defaultChecked로 기본 선택 상태를 지정할 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 opacity-60">
                  <Checkbox id="preview-state-disabled" disabled />
                  <div className="space-y-1">
                    <Label
                      htmlFor="preview-state-disabled"
                      className="text-sm font-medium leading-none"
                    >
                      비활성화
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      disabled prop으로 입력 비활성화 상태를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            }
            code={statesCode}
          />

          <ExampleSection
            title="With Description"
            description="Label과 보조 설명을 함께 배치해 체크박스를 더 명확하게 표현하세요."
            preview={
              <div className="space-y-4">
                <div className="rounded-lg border bg-card/30 p-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="preview-notifications" defaultChecked />
                    <div className="space-y-1 leading-none">
                      <Label htmlFor="preview-notifications">
                        제품 업데이트 알림
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        새로운 기능과 버그 수정 소식을 이메일로 받아보세요.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card/30 p-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="preview-security-alerts" aria-invalid />
                    <div className="space-y-1 leading-none">
                      <Label htmlFor="preview-security-alerts">보안 경고</Label>
                      <p className="text-sm text-destructive">
                        최소 한 개 이상 선택해야 합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
            code={withDescriptionCode}
          />

          <ExampleSection
            title="Inline Checklist"
            description="태그 형식으로 배치하여 공간을 절약하면서 옵션을 노출합니다."
            preview={
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { id: "preview-feature-analytics", label: "Analytics" },
                  { id: "preview-feature-automation", label: "Automation" },
                  {
                    id: "preview-feature-collaboration",
                    label: "Collaboration",
                  },
                  { id: "preview-feature-security", label: "Security" },
                ].map((feature) => (
                  <div
                    key={feature.id}
                    className="flex items-center space-x-2 rounded-full border px-4 py-2"
                  >
                    <Checkbox id={feature.id} className="size-3.5" />
                    <Label htmlFor={feature.id} className="text-sm font-medium">
                      {feature.label}
                    </Label>
                  </div>
                ))}
              </div>
            }
            code={inlineChecklistCode}
          />

          <ExampleSection
            title="Controlled Checkbox"
            description="checked와 onCheckedChange를 사용하면 상태를 완전히 제어할 수 있습니다."
            preview={<ControlledCheckboxPreview />}
            code={controlledCheckboxCode}
          />

          <ExampleSection
            title="Preference Cards"
            description="카드 레이아웃과 함께 배치하여 사용자 설정 화면을 구성할 수 있습니다."
            preview={
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    id: "preview-pref-mentions",
                    title: "멘션",
                    description: "나를 언급한 활동에 대한 알림을 받습니다.",
                    defaultChecked: true,
                  },
                  {
                    id: "preview-pref-assignments",
                    title: "할 일 배정",
                    description:
                      "나에게 새로운 업무가 배정되면 즉시 알려줍니다.",
                    defaultChecked: true,
                  },
                  {
                    id: "preview-pref-summary",
                    title: "주간 요약",
                    description: "매주 월요일에 팀 활동 요약을 받아보세요.",
                  },
                  {
                    id: "preview-pref-digest",
                    title: "월간 인사이트",
                    description:
                      "팀 성과를 요약한 인사이트 리포트를 월말에 전송합니다.",
                  },
                ].map((preference) => (
                  <div
                    key={preference.id}
                    className="space-y-3 rounded-2xl border bg-card/40 p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold">
                          {preference.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {preference.description}
                        </p>
                      </div>
                      <Checkbox
                        id={preference.id}
                        defaultChecked={preference.defaultChecked}
                        aria-label={preference.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            }
            code={preferenceCardCode}
          />
        </div>
      </main>
    </div>
  );
}
