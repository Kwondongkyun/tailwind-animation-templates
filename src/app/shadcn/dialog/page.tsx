"use client";

import { PageHeader } from "@/components/page-header";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";

export default function DialogPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Dialog"
        description="기본 창이나 다른 다이얼로그 창 위에 겹쳐진 창입니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Dialog</h1>
            <p className="text-xl text-muted-foreground">
              기본 창이나 다른 다이얼로그 창 위에 겹쳐지며, 아래 콘텐츠를
              비활성화합니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Dialog 사용 예시입니다."
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>프로필 수정</DialogTitle>
                    <DialogDescription>
                      여기에서 프로필을 수정할 수 있습니다. 완료되면 저장을
                      클릭하세요.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        defaultValue="Pedro Duarte"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        defaultValue="@peduarte"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            code={`import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>
            여기에서 프로필을 수정할 수 있습니다. 완료되면 저장을 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 Dialog 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add dialog`} />
              </TabsContent>
              <TabsContent value="manual" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    수동으로 컴포넌트를 복사하여 프로젝트에 추가할 수 있습니다.
                  </p>
                  <CodeBlock
                    code={`// components/ui/dialog.tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
}`}
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
                        Component
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">Dialog</td>
                      <td className="px-4 py-3 text-sm">
                        다이얼로그의 루트 컴포넌트
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        DialogTrigger
                      </td>
                      <td className="px-4 py-3 text-sm">
                        다이얼로그를 여는 트리거 버튼
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        DialogContent
                      </td>
                      <td className="px-4 py-3 text-sm">
                        다이얼로그 본문 컨테이너
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        DialogHeader
                      </td>
                      <td className="px-4 py-3 text-sm">
                        다이얼로그 헤더 영역
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        DialogTitle
                      </td>
                      <td className="px-4 py-3 text-sm">다이얼로그 제목</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        DialogDescription
                      </td>
                      <td className="px-4 py-3 text-sm">다이얼로그 설명</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        DialogFooter
                      </td>
                      <td className="px-4 py-3 text-sm">
                        다이얼로그 푸터 영역
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">
                        DialogClose
                      </td>
                      <td className="px-4 py-3 text-sm">
                        다이얼로그를 닫는 버튼
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
              다양한 Dialog 사용 예시를 확인하세요.
            </p>
          </div>

          {/* Simple Dialog */}
          <ExampleSection
            title="Simple Dialog"
            description="간단한 확인 다이얼로그입니다."
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>간단한 다이얼로그</DialogTitle>
                    <DialogDescription>
                      간단한 다이얼로그입니다.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        이 작업은 취소할 수 없습니다. 계정이 영구적으로 삭제되고
        서버에서 데이터가 제거됩니다.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
          />

          {/* Custom Close Button */}
          <ExampleSection
            title="Custom Close Button"
            description="커스텀 닫기 버튼이 있는 다이얼로그입니다."
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Share</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>링크 공유</DialogTitle>
                    <DialogDescription>
                      이 링크를 가진 사람은 누구나 볼 수 있습니다.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://ui.shadcn.com/docs/installation"
                        readOnly
                      />
                    </div>
                    <Button type="button" size="icon" variant="secondary">
                      <Copy className="size-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Share</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>링크 공유</DialogTitle>
      <DialogDescription>
        이 링크를 가진 사람은 누구나 볼 수 있습니다.
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center gap-2">
      <Input
        id="link"
        defaultValue="https://ui.shadcn.com/docs/installation"
        readOnly
      />
      <Button type="button" size="icon" variant="secondary">
        <Copy className="size-4" />
      </Button>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button type="button" variant="secondary">
          Close
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          />

          {/* Confirmation Dialog */}
          <ExampleSection
            title="Confirmation Dialog"
            description="확인/취소 버튼이 있는 확인 다이얼로그입니다."
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete Account</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>계정 삭제</DialogTitle>
                    <DialogDescription>
                      정말로 계정을 삭제하시겠습니까? 이 작업은 취소할 수
                      없습니다.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive">Delete</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>계정 삭제</DialogTitle>
      <DialogDescription>
        정말로 계정을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          />

          {/* Form Dialog */}
          <ExampleSection
            title="Form Dialog"
            titleLink="/shadcn/input"
            description="폼이 포함된 다이얼로그입니다."
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Create New</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>새 프로젝트 만들기</DialogTitle>
                    <DialogDescription>
                      워크스페이스에 새 프로젝트를 추가합니다.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="project-name">Project Name</Label>
                      <Input
                        id="project-name"
                        placeholder="Enter project name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Input id="description" placeholder="Enter description" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button>Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Create New</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>새 프로젝트 만들기</DialogTitle>
      <DialogDescription>
        워크스페이스에 새 프로젝트를 추가합니다.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="project-name">Project Name</Label>
        <Input id="project-name" placeholder="Enter project name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" placeholder="Enter description" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          />

          {/* Scrollable Dialog */}
          <ExampleSection
            title="Scrollable Content"
            description="스크롤 가능한 컨텐츠가 있는 다이얼로그입니다."
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Terms & Conditions</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>이용약관</DialogTitle>
                    <DialogDescription>
                      이용약관을 읽고 동의해주세요.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="max-h-[300px] overflow-y-auto space-y-4 text-sm">
                    <h4 className="font-semibold">제1조 (목적)</h4>
                    <p>
                      본 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와
                      이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을
                      규정함을 목적으로 합니다.
                    </p>
                    <h4 className="font-semibold">제2조 (정의)</h4>
                    <p>
                      이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                      "서비스"란 회사가 제공하는 모든 서비스를 의미하며,
                      "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는
                      회원 및 비회원을 말합니다.
                    </p>
                    <h4 className="font-semibold">
                      제3조 (약관의 효력 및 변경)
                    </h4>
                    <p>
                      본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그
                      효력을 발생합니다. 회사는 필요한 경우 관련 법령을 위배하지
                      않는 범위에서 본 약관을 변경할 수 있습니다.
                    </p>
                    <h4 className="font-semibold">제4조 (서비스의 제공)</h4>
                    <p>
                      회사는 이용자에게 안정적인 서비스를 제공하기 위해 최선을
                      다하며, 서비스 개선을 위해 지속적으로 노력합니다. 다만,
                      천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
                      제공할 수 없는 경우에는 서비스 제공을 제한할 수 있습니다.
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Decline</Button>
                    </DialogClose>
                    <Button>Accept</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Terms & Conditions</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[525px]">
    <DialogHeader>
      <DialogTitle>이용약관</DialogTitle>
      <DialogDescription>
        이용약관을 읽고 동의해주세요.
      </DialogDescription>
    </DialogHeader>
    <div className="max-h-[300px] overflow-y-auto">
      {/* Scrollable content */}
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Decline</Button>
      </DialogClose>
      <Button>Accept</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          />
        </div>
      </main>
    </div>
  );
}
