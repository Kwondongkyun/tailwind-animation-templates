"use client";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Star,
  Zap,
  Heart,
  TrendingUp,
  ShoppingCart,
  Mail,
  Bell,
} from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

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
    <div className="rounded-lg overflow-hidden border">
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
  titleLink,
  description,
  preview,
  code,
}: {
  title: string;
  titleLink?: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          {titleLink ? (
            <Link
              href={titleLink}
              className="inline-flex items-center gap-2 hover:text-primary underline-offset-4 hover:underline"
            >
              {title}
              <ExternalLink className="size-5" />
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <div className="flex items-center justify-center min-h-[200px] border rounded-lg bg-background p-8">
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

export default function BadgePage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Badge"
        description="상태나 카테고리를 표시하는 작은 라벨 컴포넌트입니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Badge</h1>
            <p className="text-xl text-muted-foreground">
              상태, 카테고리, 레이블을 표시하기 위한 작고 간결한 컴포넌트입니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Badge 사용 예시입니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Badge</Badge>
              </div>
            }
            code={`import { Badge } from "@/components/ui/badge"

export default function Example() {
  return <Badge>Badge</Badge>
}`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 Badge 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add badge`} />
              </TabsContent>
              <TabsContent value="manual" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    수동으로 컴포넌트를 복사하여 프로젝트에 추가할 수 있습니다.
                  </p>
                  <CodeBlock
                    code={`// components/ui/badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`}
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
                      <td className="px-4 py-3 font-mono text-sm">
                        "default" | "secondary" | "destructive" | "outline"
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">"default"</td>
                      <td className="px-4 py-3 text-sm">
                        뱃지의 시각적 스타일
                      </td>
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
              다양한 Badge 사용 예시를 확인하세요.
            </p>
          </div>

          {/* Variants */}
          <ExampleSection
            title="Variants"
            description="Badge의 다양한 variant를 확인할 수 있습니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            }
            code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
          />

          {/* With Icons */}
          <ExampleSection
            title="With Icons"
            description="아이콘과 함께 사용하는 Badge입니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Badge>
                  <CheckCircle2 className="size-3 mr-1" />
                  Success
                </Badge>
                <Badge variant="secondary">
                  <Clock className="size-3 mr-1" />
                  Pending
                </Badge>
                <Badge variant="destructive">
                  <XCircle className="size-3 mr-1" />
                  Failed
                </Badge>
                <Badge variant="outline">
                  <AlertCircle className="size-3 mr-1" />
                  Warning
                </Badge>
              </div>
            }
            code={`import { CheckCircle2, Clock, XCircle, AlertCircle } from "lucide-react"

<Badge>
  <CheckCircle2 className="size-3 mr-1" />
  Success
</Badge>
<Badge variant="secondary">
  <Clock className="size-3 mr-1" />
  Pending
</Badge>
<Badge variant="destructive">
  <XCircle className="size-3 mr-1" />
  Failed
</Badge>
<Badge variant="outline">
  <AlertCircle className="size-3 mr-1" />
  Warning
</Badge>`}
          />

          {/* Status Badges */}
          <ExampleSection
            title="Status Badges"
            description="상태를 나타내는 Badge 예시입니다."
            preview={
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium min-w-[100px]">
                    Order Status:
                  </span>
                  <Badge variant="secondary">
                    <Clock className="size-3 mr-1" />
                    Processing
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium min-w-[100px]">
                    Payment:
                  </span>
                  <Badge>
                    <CheckCircle2 className="size-3 mr-1" />
                    Completed
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium min-w-[100px]">
                    Delivery:
                  </span>
                  <Badge variant="destructive">
                    <XCircle className="size-3 mr-1" />
                    Cancelled
                  </Badge>
                </div>
              </div>
            }
            code={`<div className="flex items-center gap-2">
  <span className="text-sm font-medium">Order Status:</span>
  <Badge variant="secondary">
    <Clock className="size-3 mr-1" />
    Processing
  </Badge>
</div>

<div className="flex items-center gap-2">
  <span className="text-sm font-medium">Payment:</span>
  <Badge>
    <CheckCircle2 className="size-3 mr-1" />
    Completed
  </Badge>
</div>

<div className="flex items-center gap-2">
  <span className="text-sm font-medium">Delivery:</span>
  <Badge variant="destructive">
    <XCircle className="size-3 mr-1" />
    Cancelled
  </Badge>
</div>`}
          />

          {/* Category Badges */}
          <ExampleSection
            title="Category Badges"
            description="카테고리나 태그를 표시하는 Badge입니다."
            preview={
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      <Zap className="size-3 mr-1" />
                      Fast
                    </Badge>
                    <Badge variant="secondary">
                      <Star className="size-3 mr-1" />
                      Premium
                    </Badge>
                    <Badge variant="secondary">
                      <TrendingUp className="size-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                </div>
              </div>
            }
            code={`<div>
  <h3 className="text-sm font-semibold mb-2">Technologies</h3>
  <div className="flex flex-wrap gap-2">
    <Badge variant="outline">React</Badge>
    <Badge variant="outline">Next.js</Badge>
    <Badge variant="outline">TypeScript</Badge>
    <Badge variant="outline">Tailwind CSS</Badge>
  </div>
</div>

<div>
  <h3 className="text-sm font-semibold mb-2">Features</h3>
  <div className="flex flex-wrap gap-2">
    <Badge variant="secondary">
      <Zap className="size-3 mr-1" />
      Fast
    </Badge>
    <Badge variant="secondary">
      <Star className="size-3 mr-1" />
      Premium
    </Badge>
    <Badge variant="secondary">
      <TrendingUp className="size-3 mr-1" />
      Trending
    </Badge>
  </div>
</div>`}
          />

          {/* Notification Badges */}
          <ExampleSection
            title="Notification Badges"
            description="알림 카운트를 표시하는 Badge입니다."
            preview={
              <div className="flex flex-wrap items-center gap-6">
                <div className="relative inline-flex">
                  <Bell className="size-6" />
                  <Badge className="absolute -top-3 -right-2 px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center">
                    3
                  </Badge>
                </div>
                <div className="relative inline-flex">
                  <Mail className="size-6" />
                  <Badge className="absolute -top-3 -right-3 px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center">
                    12
                  </Badge>
                </div>
                <div className="relative inline-flex">
                  <ShoppingCart className="size-6" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-3 -right-3 px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center"
                  >
                    5
                  </Badge>
                </div>
              </div>
            }
            code={`import { Bell, Mail, ShoppingCart } from "lucide-react"

<div className="relative inline-flex">
  <Bell className="size-6" />
  <Badge className="absolute -top-3 -right-2 px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center">
    3
  </Badge>
</div>

<div className="relative inline-flex">
  <Mail className="size-6" />
  <Badge className="absolute -top-3 -right-3 px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center">
    12
  </Badge>
</div>

<div className="relative inline-flex">
  <ShoppingCart className="size-6" />
  <Badge
    variant="destructive"
    className="absolute -top-3 -right-3 px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center"
  >
    5
  </Badge>
</div>`}
          />

          {/* Custom Colors */}
          <ExampleSection
            title="Custom Colors"
            description="커스텀 색상을 적용한 Badge입니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-blue-500 hover:bg-blue-600 text-white border-0">
                  Info
                </Badge>
                <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                  Success
                </Badge>
                <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white border-0">
                  Warning
                </Badge>
                <Badge className="bg-red-500 hover:bg-red-600 text-white border-0">
                  Error
                </Badge>
                <Badge className="bg-purple-500 hover:bg-purple-600 text-white border-0">
                  <Heart className="size-3 mr-1" />
                  Featured
                </Badge>
              </div>
            }
            code={`<Badge className="bg-blue-500 hover:bg-blue-600 text-white border-0">
  Info
</Badge>
<Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
  Success
</Badge>
<Badge className="bg-yellow-500 hover:bg-yellow-600 text-white border-0">
  Warning
</Badge>
<Badge className="bg-red-500 hover:bg-red-600 text-white border-0">
  Error
</Badge>
<Badge className="bg-purple-500 hover:bg-purple-600 text-white border-0">
  <Heart className="size-3 mr-1" />
  Featured
</Badge>`}
          />

          {/* Sizes */}
          <ExampleSection
            title="Different Sizes"
            description="다양한 크기의 Badge입니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="text-xs px-2 py-0.5">Small</Badge>
                <Badge>Default</Badge>
                <Badge className="text-sm px-3 py-1">Medium</Badge>
                <Badge className="text-base px-4 py-1.5">Large</Badge>
              </div>
            }
            code={`<Badge className="text-xs px-2 py-0.5">Small</Badge>
<Badge>Default</Badge>
<Badge className="text-sm px-3 py-1">Medium</Badge>
<Badge className="text-base px-4 py-1.5">Large</Badge>`}
          />

          {/* Interactive Badges */}
          <ExampleSection
            title="Interactive Badges"
            description="클릭 가능한 인터랙티브 Badge입니다."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80 transition-colors"
                >
                  React
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80 transition-colors"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80 transition-colors"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-accent transition-colors"
                >
                  <XCircle className="size-3 mr-1" />
                  Removable
                </Badge>
              </div>
            }
            code={`<Badge
  variant="secondary"
  className="cursor-pointer hover:bg-secondary/80 transition-colors"
>
  React
</Badge>
<Badge
  variant="secondary"
  className="cursor-pointer hover:bg-secondary/80 transition-colors"
>
  TypeScript
</Badge>
<Badge
  variant="secondary"
  className="cursor-pointer hover:bg-secondary/80 transition-colors"
>
  Next.js
</Badge>
<Badge
  variant="outline"
  className="cursor-pointer hover:bg-accent transition-colors"
>
  <XCircle className="size-3 mr-1" />
  Removable
</Badge>`}
          />
        </div>
      </main>
    </div>
  );
}
