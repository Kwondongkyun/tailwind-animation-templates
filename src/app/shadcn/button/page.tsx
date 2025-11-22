"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock, ExampleSection } from "@/components/docs";
import {
  ArrowUpIcon,
  ArrowUpRightIcon,
  CircleFadingArrowUpIcon,
} from "lucide-react";
import { IconGitBranch } from "@tabler/icons-react";
import Link from "next/link";

export default function ButtonPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Button"
        description="클릭 가능한 버튼 컴포넌트입니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Button</h1>
            <p className="text-xl text-muted-foreground">
              버튼이나 버튼처럼 보이는 컴포넌트를 표시합니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 버튼 사용 예시입니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Button>Button</Button>
                <Button variant="outline">Button</Button>
                <Button variant="outline" size="icon" aria-label="Submit">
                  <ArrowUpIcon />
                </Button>
              </div>
            }
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <>
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </>
  )
}`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 버튼 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add button`} />
              </TabsContent>
              <TabsContent value="manual" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    수동으로 컴포넌트를 복사하여 프로젝트에 추가할 수 있습니다.
                  </p>
                  <CodeBlock
                    code={`// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`}
                  />
                </div>
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
                      <td className="px-4 py-3 font-mono text-sm">variant</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        "default" | "destructive" | "outline" | "secondary" |
                        "ghost" | "link"
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">"default"</td>
                      <td className="px-4 py-3 text-sm">버튼의 스타일 변형</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">size</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">"default"</td>
                      <td className="px-4 py-3 text-sm">버튼의 크기</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">asChild</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">false</td>
                      <td className="px-4 py-3 text-sm">
                        자식 요소를 버튼처럼 스타일링
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">disabled</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">false</td>
                      <td className="px-4 py-3 text-sm">버튼 비활성화 여부</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t" />

          {/* Examples Header */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Examples</h2>
            <p className="text-muted-foreground">
              다양한 버튼 스타일과 사용 예시를 확인하세요.
            </p>
          </div>

          {/* Variants */}
          <ExampleSection
            title="Variants"
            description="variant prop을 사용하여 버튼의 스타일을 변경할 수 있습니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            }
            code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}
          />

          {/* Sizes */}
          <ExampleSection
            title="Sizes"
            description="size prop을 사용하여 버튼의 크기를 조정할 수 있습니다."
            preview={
              <div className="flex flex-col items-start gap-8 sm:flex-row">
                <div className="flex items-start gap-2">
                  <Button size="sm" variant="outline">
                    Small
                  </Button>
                  <Button size="icon-sm" aria-label="Submit" variant="outline">
                    <ArrowUpRightIcon />
                  </Button>
                </div>
                <div className="flex items-start gap-2">
                  <Button variant="outline">Default</Button>
                  <Button size="icon" aria-label="Submit" variant="outline">
                    <ArrowUpRightIcon />
                  </Button>
                </div>
                <div className="flex items-start gap-2">
                  <Button variant="outline" size="lg">
                    Large
                  </Button>
                  <Button size="icon-lg" aria-label="Submit" variant="outline">
                    <ArrowUpRightIcon />
                  </Button>
                </div>
              </div>
            }
            code={`// Small
<Button size="sm" variant="outline">Small</Button>
<Button size="icon-sm" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>

// Default
<Button variant="outline">Default</Button>
<Button size="icon" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>

// Large
<Button size="lg" variant="outline">Large</Button>
<Button size="icon-lg" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>`}
          />

          {/* Icon Button */}
          <ExampleSection
            title="Icon Button"
            description="size='icon' prop을 사용하여 정사각형 아이콘 버튼을 만들 수 있습니다."
            preview={
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <CircleFadingArrowUpIcon />
                </Button>
                <Button size="icon">
                  <ArrowUpIcon />
                </Button>
                <Button variant="destructive" size="icon">
                  <ArrowUpRightIcon />
                </Button>
              </div>
            }
            code={`<Button variant="outline" size="icon" aria-label="Submit">
  <CircleFadingArrowUpIcon />
</Button>
<Button size="icon">
  <ArrowUpIcon />
</Button>
<Button variant="destructive" size="icon">
  <ArrowUpRightIcon />
</Button>`}
          />

          {/* With Icon */}
          <ExampleSection
            title="With Icon"
            description="아이콘과 텍스트를 함께 사용할 수 있습니다. 아이콘과 텍스트 사이의 간격은 버튼 크기에 따라 자동으로 조정됩니다."
            preview={
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <IconGitBranch /> New Branch
                </Button>
                <Button variant="outline">
                  <ArrowUpIcon /> Upload
                </Button>
                <Button variant="outline" size="lg">
                  <ArrowUpRightIcon /> Open Link
                </Button>
              </div>
            }
            code={`<Button variant="outline" size="sm">
  <IconGitBranch /> New Branch
</Button>
<Button variant="outline">
  <ArrowUpIcon /> Upload
</Button>
<Button variant="outline" size="lg">
  <ArrowUpRightIcon /> Open Link
</Button>`}
          />

          {/* Rounded */}
          <ExampleSection
            title="Rounded"
            description="className='rounded-full'을 추가하여 완전히 둥근 버튼을 만들 수 있습니다."
            preview={
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowUpIcon />
                </Button>
                <Button size="icon" className="rounded-full">
                  <ArrowUpIcon />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <ArrowUpIcon />
                </Button>
              </div>
            }
            code={`<Button variant="outline" size="icon" className="rounded-full">
  <ArrowUpIcon />
</Button>
<Button size="icon" className="rounded-full">
  <ArrowUpIcon />
</Button>
<Button variant="secondary" size="icon" className="rounded-full">
  <ArrowUpIcon />
</Button>`}
          />

          {/* Disabled */}
          <ExampleSection
            title="Disabled"
            description="disabled prop을 사용하여 버튼을 비활성화할 수 있습니다."
            preview={
              <div className="flex flex-wrap gap-2">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>
                  Disabled
                </Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
                <Button variant="ghost" disabled>
                  Disabled
                </Button>
              </div>
            }
            code={`<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>
<Button variant="ghost" disabled>Disabled</Button>`}
          />

          {/* As Child (Link) */}
          <ExampleSection
            title="As Child (Link)"
            description="asChild prop을 사용하여 Link나 다른 컴포넌트를 버튼처럼 스타일링할 수 있습니다."
            preview={
              <Button variant="outline" asChild>
                <Link href="/shadcn/button">Go to Dashboard</Link>
              </Button>
            }
            code={`import Link from "next/link"

<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>`}
          />
        </div>
      </main>
    </div>
  );
}
