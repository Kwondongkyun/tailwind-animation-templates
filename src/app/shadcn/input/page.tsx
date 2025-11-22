"use client";

import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full max-w-sm">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </Button>
    </div>
  );
}

export default function InputPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Input"
        description="텍스트 입력을 받는 입력 필드입니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Input</h1>
            <p className="text-xl text-muted-foreground">
              사용자로부터 텍스트 입력을 받는 폼 컨트롤입니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Input 사용 예시입니다."
            preview={
              <div className="w-full max-w-sm space-y-2">
                <Input type="text" placeholder="Enter your name" />
                <Input type="email" placeholder="Enter your email" />
              </div>
            }
            code={`import { Input } from "@/components/ui/input"

export default function Example() {
  return (
    <>
      <Input type="text" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
    </>
  )
}`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 Input 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add input`} />
              </TabsContent>
              <TabsContent value="manual" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    수동으로 컴포넌트를 복사하여 프로젝트에 추가할 수 있습니다.
                  </p>
                  <CodeBlock
                    code={`// components/ui/input.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }`}
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
                      <td className="px-4 py-3 font-mono text-sm">type</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        "text" | "email" | "password" | "number" | "tel" | "url"
                        | ...
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">"text"</td>
                      <td className="px-4 py-3 text-sm">Input 타입</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        placeholder
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        string
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">플레이스홀더 텍스트</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">disabled</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">false</td>
                      <td className="px-4 py-3 text-sm">입력 비활성화 여부</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">value</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        string
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">입력 값</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">onChange</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        (e: ChangeEvent) =&gt; void
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">
                        값 변경 이벤트 핸들러
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
              다양한 Input 스타일과 사용 예시를 확인하세요.
            </p>
          </div>

          {/* Input Types */}
          <ExampleSection
            title="Input Types"
            description="type prop을 사용하여 다양한 입력 타입을 지정할 수 있습니다."
            preview={
              <div className="w-full max-w-sm space-y-3">
                <Input type="text" placeholder="Text input" />
                <Input type="email" placeholder="Email input" />
                <Input type="password" placeholder="Password input" />
                <Input type="number" placeholder="Number input" />
                <Input type="tel" placeholder="Phone input" />
                <Input type="url" placeholder="URL input" />
              </div>
            }
            code={`<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="Email input" />
<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />
<Input type="tel" placeholder="Phone input" />
<Input type="url" placeholder="URL input" />`}
          />

          {/* Disabled */}
          <ExampleSection
            title="Disabled"
            description="disabled prop을 사용하여 입력을 비활성화할 수 있습니다."
            preview={
              <div className="w-full max-w-sm space-y-3">
                <Input placeholder="Enabled input" />
                <Input placeholder="Disabled input" disabled />
              </div>
            }
            code={`<Input placeholder="Enabled input" />
<Input placeholder="Disabled input" disabled />`}
          />

          {/* With Label */}
          <ExampleSection
            title="With Label"
            titleLink="/shadcn/label"
            description="Label 컴포넌트와 함께 사용하여 접근성을 향상시킬 수 있습니다."
            preview={
              <div className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </div>
            }
            code={`import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="m@example.com" />
</div>

<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" />
</div>`}
          />

          {/* With Icon */}
          <ExampleSection
            title="With Icon"
            description="아이콘과 함께 사용하여 입력 필드의 용도를 명확히 할 수 있습니다."
            preview={
              <div className="w-full max-w-sm space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input type="email" placeholder="Email" className="pl-9" />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-9"
                  />
                </div>
              </div>
            }
            code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-9" />
</div>

<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input type="email" placeholder="Email" className="pl-9" />
</div>

<div className="relative">
  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input type="password" placeholder="Password" className="pl-9" />
</div>`}
          />

          {/* With Button */}
          <ExampleSection
            title="With Button"
            description="버튼과 함께 사용하여 검색이나 제출 기능을 구현할 수 있습니다."
            preview={
              <div className="w-full max-w-sm space-y-3">
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" />
                  <Button>Subscribe</Button>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Search..." />
                  <Button size="icon">
                    <Search className="size-4" />
                  </Button>
                </div>
              </div>
            }
            code={`<div className="flex gap-2">
  <Input placeholder="Enter your email" />
  <Button>Subscribe</Button>
</div>

<div className="flex gap-2">
  <Input placeholder="Search..." />
  <Button size="icon">
    <Search className="size-4" />
  </Button>
</div>`}
          />

          {/* Password with Toggle */}
          <ExampleSection
            title="Password with Toggle"
            description="비밀번호 표시/숨김 토글 버튼을 추가할 수 있습니다."
            preview={<PasswordInput />}
            code={`function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </Button>
    </div>
  );
}`}
          />

          {/* File Input */}
          <ExampleSection
            title="File Input"
            description="파일 업로드를 위한 파일 입력 필드입니다."
            preview={
              <div className="w-full max-w-sm space-y-3">
                <Input type="file" />
                <Input type="file" multiple />
              </div>
            }
            code={`<Input type="file" />
<Input type="file" multiple />`}
          />

          {/* Form Example */}
          <ExampleSection
            title="Form Example"
            description="실제 폼에서 Input을 사용하는 예시입니다."
            preview={
              <div className="w-full max-w-sm">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-form">Email</Label>
                    <Input
                      id="email-form"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" placeholder="Your message..." />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            }
            code={`import { Label } from "@/components/ui/label"

<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="name">Full Name</Label>
    <Input id="name" placeholder="John Doe" />
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="john@example.com" />
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    <Input id="message" placeholder="Your message..." />
  </div>
  
  <Button type="submit" className="w-full">
    Submit
  </Button>
</form>`}
          />
        </div>
      </main>
    </div>
  );
}
