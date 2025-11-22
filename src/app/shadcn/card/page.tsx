"use client";

import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { BellRing, Check } from "lucide-react";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function CardPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Card"
        description="헤더, 컨텐츠, 푸터를 포함한 카드를 표시합니다."
      />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Card</h1>
            <p className="text-xl text-muted-foreground">
              헤더, 컨텐츠, 푸터가 있는 카드를 표시합니다.
            </p>
          </div>

          {/* Basic Usage */}
          <ExampleSection
            title="기본 사용법"
            description="가장 기본적인 Card 사용 예시입니다."
            preview={
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your email below to login to your account
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Sign Up</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                          <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                            onClick={(e) => e.preventDefault()}
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </CardFooter>
              </Card>
            }
            code={`import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}`}
          />

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              CLI를 사용하여 Card 컴포넌트를 프로젝트에 설치합니다.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx shadcn@latest add card`} />
              </TabsContent>
              <TabsContent value="manual" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    수동으로 컴포넌트를 복사하여 프로젝트에 추가할 수 있습니다.
                  </p>
                  <CodeBlock
                    code={`// components/ui/card.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`}
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
                      <td className="px-4 py-3 font-mono text-sm">Card</td>
                      <td className="px-4 py-3 text-sm">카드 컨테이너</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        CardHeader
                      </td>
                      <td className="px-4 py-3 text-sm">카드 헤더 영역</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">CardTitle</td>
                      <td className="px-4 py-3 text-sm">카드 제목</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        CardDescription
                      </td>
                      <td className="px-4 py-3 text-sm">카드 설명</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        CardAction
                      </td>
                      <td className="px-4 py-3 text-sm">
                        카드 헤더의 액션 영역 (오른쪽 상단)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        CardContent
                      </td>
                      <td className="px-4 py-3 text-sm">카드 본문 영역</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">
                        CardFooter
                      </td>
                      <td className="px-4 py-3 text-sm">카드 푸터 영역</td>
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
              다양한 Card 스타일과 사용 예시를 확인하세요.
            </p>
          </div>

          {/* Simple Card */}
          <ExampleSection
            title="Simple Card"
            description="가장 간단한 형태의 카드입니다."
            preview={
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">Card Footer</p>
                </CardFooter>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
          />

          {/* With Action */}
          <ExampleSection
            title="With Action"
            description="CardAction을 사용하여 헤더 오른쪽에 액션 버튼을 추가할 수 있습니다."
            preview={
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                  <CardAction>
                    <Button variant="outline" size="sm">
                      Mark all as read
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 rounded-lg border p-3"
                      >
                        <BellRing className="size-5 mt-0.5" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
    <CardAction>
      <Button variant="outline" size="sm">
        Mark all as read
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>`}
          />

          {/* Form Card */}
          <ExampleSection
            title="Form Card"
            titleLink="/shadcn/input"
            description="카드 안에 폼을 포함하는 예시입니다."
            preview={
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Enter your information to create an account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="form-email">Email</Label>
                      <Input
                        id="form-email"
                        type="email"
                        placeholder="m@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="form-password">Password</Label>
                      <Input id="form-password" type="password" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button className="w-full">Create account</Button>
                  <Button variant="outline" className="w-full">
                    Sign in with Google
                  </Button>
                </CardFooter>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>
      Enter your information to create an account
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button className="w-full">Create account</Button>
    <Button variant="outline" className="w-full">
      Sign in with Google
    </Button>
  </CardFooter>
</Card>`}
          />

          {/* Stats Card */}
          <ExampleSection
            title="Stats Card"
            description="통계 정보를 표시하는 카드입니다."
            preview={
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Revenue</CardTitle>
                    <CardDescription>January - December 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      +20.1% from last year
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Active Users</CardTitle>
                    <CardDescription>Current month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">2,350</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      +12.5% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>New Signups</CardTitle>
                    <CardDescription>This week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">573</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      +8.3% from last week
                    </p>
                  </CardContent>
                </Card>
              </div>
            }
            code={`<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Card>
    <CardHeader>
      <CardTitle>Total Revenue</CardTitle>
      <CardDescription>January - December 2024</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">$45,231.89</div>
      <p className="text-xs text-muted-foreground mt-2">
        +20.1% from last year
      </p>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle>Active Users</CardTitle>
      <CardDescription>Current month</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">2,350</div>
      <p className="text-xs text-muted-foreground mt-2">
        +12.5% from last month
      </p>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle>New Signups</CardTitle>
      <CardDescription>This week</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">573</div>
      <p className="text-xs text-muted-foreground mt-2">
        +8.3% from last week
      </p>
    </CardContent>
  </Card>
</div>`}
          />

          {/* List Card */}
          <ExampleSection
            title="List Card"
            description="리스트 형태의 카드입니다."
            preview={
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your recent account activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Payment received</p>
                        <p className="text-xs text-muted-foreground">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Order shipped</p>
                        <p className="text-xs text-muted-foreground">
                          5 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Profile updated</p>
                        <p className="text-xs text-muted-foreground">
                          1 day ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View all activity
                  </Button>
                </CardFooter>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <CardTitle>Recent Activity</CardTitle>
    <CardDescription>Your recent account activity</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Payment received</p>
          <p className="text-xs text-muted-foreground">2 hours ago</p>
        </div>
      </div>
      {/* More items */}
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">
      View all activity
    </Button>
  </CardFooter>
</Card>`}
          />
        </div>
      </main>
    </div>
  );
}
