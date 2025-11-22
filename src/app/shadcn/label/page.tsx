"use client";

import { PageHeader } from "@/components/page-header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LabelPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Label"
        description="폼 컨트롤과 연결된 접근 가능한 레이블입니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Label</h1>
            <p className="text-xl text-muted-foreground">
              폼 컨트롤과 연결된 접근 가능한 레이블을 렌더링합니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Label 사용 예시입니다."
            preview={
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            }
            code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 Label 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add label`} />
              </TabsContent>
              <TabsContent value="manual" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    수동으로 컴포넌트를 복사하여 프로젝트에 추가할 수 있습니다.
                  </p>
                  <CodeBlock
                    code={`// components/ui/label.tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }`}
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
                      <td className="px-4 py-3 font-mono text-sm">htmlFor</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        string
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">
                        연결할 폼 컨트롤의 id
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">asChild</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">false</td>
                      <td className="px-4 py-3 text-sm">
                        자식 요소를 레이블로 사용
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">children</td>
                      <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                        ReactNode
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">-</td>
                      <td className="px-4 py-3 text-sm">레이블 텍스트</td>
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
              다양한 Label 사용 예시를 확인하세요.
            </p>
          </div>

          {/* With Checkbox */}
          <ExampleSection
            title="With Checkbox"
            titleLink="/shadcn/checkbox"
            description="Checkbox와 함께 사용하는 예시입니다."
            preview={
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox1" />
                  <Label htmlFor="checkbox1">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox2" />
                  <Label htmlFor="checkbox2">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox3" disabled />
                  <Label htmlFor="checkbox3">
                    Disabled option (cannot select)
                  </Label>
                </div>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="newsletter" />
  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled">Disabled option (cannot select)</Label>
</div>`}
          />

          {/* With Input */}
          <ExampleSection
            title="With Input"
            titleLink="/shadcn/input"
            description="Input과 함께 사용하는 예시입니다."
            preview={
              <div className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" />
                </div>
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
            code={`<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter your username" />
</div>

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="m@example.com" />
</div>

<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" />
</div>`}
          />

          {/* Required Field */}
          <ExampleSection
            title="Required Field"
            description="필수 입력 필드를 표시하는 예시입니다."
            preview={
              <div className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="required-name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input id="required-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="required-email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input id="required-email" type="email" required />
                </div>
              </div>
            }
            code={`<div className="space-y-2">
  <Label htmlFor="name">
    Full Name <span className="text-destructive">*</span>
  </Label>
  <Input id="name" required />
</div>

<div className="space-y-2">
  <Label htmlFor="email">
    Email <span className="text-destructive">*</span>
  </Label>
  <Input id="email" type="email" required />
</div>`}
          />

          {/* With Helper Text */}
          <ExampleSection
            title="With Helper Text"
            description="도움말 텍스트와 함께 사용하는 예시입니다."
            preview={
              <div className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username-helper">Username</Label>
                  <Input id="username-helper" />
                  <p className="text-sm text-muted-foreground">
                    This is your public display name.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" />
                  <p className="text-sm text-muted-foreground">
                    You can @mention other users and organizations.
                  </p>
                </div>
              </div>
            }
            code={`<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" />
  <p className="text-sm text-muted-foreground">
    This is your public display name.
  </p>
</div>

<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Input id="bio" />
  <p className="text-sm text-muted-foreground">
    You can @mention other users and organizations.
  </p>
</div>`}
          />

          {/* Disabled State */}
          <ExampleSection
            title="Disabled State"
            description="비활성화된 입력 필드와 함께 사용하는 예시입니다."
            preview={
              <div className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="disabled-input">Disabled Input</Label>
                  <Input id="disabled-input" disabled placeholder="Disabled" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled-checkbox" disabled />
                  <Label htmlFor="disabled-checkbox">Disabled Checkbox</Label>
                </div>
              </div>
            }
            code={`<div className="space-y-2">
  <Label htmlFor="disabled-input">Disabled Input</Label>
  <Input id="disabled-input" disabled placeholder="Disabled" />
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="disabled-checkbox" disabled />
  <Label htmlFor="disabled-checkbox">Disabled Checkbox</Label>
</div>`}
          />

          {/* Form Example */}
          <ExampleSection
            title="Form Example"
            description="실제 폼에서 Label을 사용하는 예시입니다."
            preview={
              <div className="w-full max-w-sm">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="form-name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input id="form-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="form-email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input id="form-email" type="email" required />
                      <p className="text-sm text-muted-foreground">
                        We'll never share your email.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="form-message">Message</Label>
                      <Input id="form-message" placeholder="Optional message" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="form-terms" />
                      <Label htmlFor="form-terms">
                        I agree to the terms and conditions
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="form-newsletter" />
                      <Label htmlFor="form-newsletter">
                        Send me promotional emails
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            }
            code={`<form className="space-y-6">
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">
        Name <span className="text-destructive">*</span>
      </Label>
      <Input id="name" required />
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input id="email" type="email" required />
      <p className="text-sm text-muted-foreground">
        We'll never share your email.
      </p>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Input id="message" placeholder="Optional message" />
    </div>
  </div>

  <div className="space-y-3">
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">
        I agree to the terms and conditions
      </Label>
    </div>

    <div className="flex items-center space-x-2">
      <Checkbox id="newsletter" />
      <Label htmlFor="newsletter">
        Send me promotional emails
      </Label>
    </div>
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
