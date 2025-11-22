"use client";

import Link from "next/link";
import {
  Home,
  Sparkles,
  ChevronDown,
  Zap,
  MoveRight,
  Search,
  RotateCw,
  Repeat,
  Radio,
  Heart,
  SquareActivity,
  Shuffle,
  Loader2,
  Component,
  Palette,
  Layers,
  BookOpen,
  FileText,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Shadcn UI 기본 컴포넌트
const shadcnComponents = [
  { name: "Button", path: "/shadcn/button", icon: Component },
  { name: "Badge", path: "/shadcn/badge", icon: Component },
  { name: "Card", path: "/shadcn/card", icon: Component },
  { name: "Checkbox", path: "/shadcn/checkbox", icon: Component },
  { name: "Input", path: "/shadcn/input", icon: Component },
  { name: "Label", path: "/shadcn/label", icon: Component },
  { name: "Dialog", path: "/shadcn/dialog", icon: Component },
  { name: "Tooltip", path: "/shadcn/tooltip", icon: Component },
  { name: "Select", path: "/shadcn/select", icon: Component },
  { name: "Separator", path: "/shadcn/separator", icon: Component },
];

// Kibo UI 복잡한 컴포넌트 (추후 추가 예정)
const kiboComponents = [
  {
    name: "Dialog Stack",
    path: "/kibo/dialog-stack",
    icon: Layers,
  },
];

// 커스텀 구현 컴포넌트
const customComponents = [
  {
    name: "Activity",
    path: "/animation/activity",
    icon: Zap,
    badge: "React 19.2",
  },
  { name: "Spinner", path: "/animation/spinner", icon: Loader2 },
];

// 애니메이션 컴포넌트
const animationComponents = [
  { name: "Fade", path: "/animation/fade", icon: Sparkles },
  { name: "Slide", path: "/animation/slide", icon: MoveRight },
  { name: "Scale", path: "/animation/scale", icon: Search },
  { name: "Rotate", path: "/animation/rotate", icon: RotateCw },
  { name: "Bounce", path: "/animation/bounce", icon: Zap },
  { name: "Spin", path: "/animation/spin", icon: Repeat },
  { name: "Pulse", path: "/animation/pulse", icon: Heart },
  { name: "Wiggle", path: "/animation/wiggle", icon: Radio },
  { name: "Flip", path: "/animation/flip", icon: Shuffle },
  { name: "Shake", path: "/animation/shake", icon: SquareActivity },
];

// 디자인 시스템 (추가 예정)
const designSystemItems = [
  { name: "Overview", path: "/design-system/overview", icon: Palette },
  { name: "Typography", path: "/design-system/typography", icon: FileText },
  { name: "Colors", path: "/design-system/colors", icon: Palette },
  { name: "Spacing", path: "/design-system/spacing", icon: Layers },
];

// 지침
const guidelineItems = [
  { name: "커밋 규칙", path: "/guidelines/commit-rules", icon: FileText },
  { name: "PR 규칙", path: "/guidelines/pr-rules", icon: FileText },
  { name: "기술 스택", path: "/guidelines/tech-stack", icon: Settings },
  { name: "커서 룰", path: "/guidelines/cursor-rules", icon: BookOpen },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Sparkles className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">템플릿 모음</span>
                  <span className="text-xs">Next.js Templates</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Home */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home />
                    <span>홈</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 컴포넌트 (대분류) */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="text-sm">컴포넌트</span>
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {/* 기본 컴포넌트 (Shadcn UI) */}
                  <Collapsible defaultOpen className="group/sub-collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full">
                          <Component className="size-4" />
                          <span>기본 컴포넌트</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/sub-collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {shadcnComponents.map((component) => (
                            <SidebarMenuSubItem key={component.path}>
                              <SidebarMenuSubButton asChild>
                                <Link href={component.path}>
                                  <component.icon className="size-4" />
                                  <span>{component.name}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>

                  {/* 고급 컴포넌트 (Kibo UI) */}
                  {kiboComponents.length > 0 && (
                    <Collapsible defaultOpen className="group/sub-collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full">
                            <Layers className="size-4" />
                            <span>고급 컴포넌트</span>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/sub-collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {kiboComponents.map((component) => (
                              <SidebarMenuSubItem key={component.path}>
                                <SidebarMenuSubButton asChild>
                                  <Link href={component.path}>
                                    <component.icon className="size-4" />
                                    <span>{component.name}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )}

                  {/* 커스텀 컴포넌트 */}
                  <Collapsible defaultOpen className="group/sub-collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full">
                          <Sparkles className="size-4" />
                          <span>커스텀 컴포넌트</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/sub-collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {customComponents.map((component) => (
                            <SidebarMenuSubItem key={component.path}>
                              <SidebarMenuSubButton asChild>
                                <Link href={component.path}>
                                  <component.icon className="size-4" />
                                  <span>{component.name}</span>
                                  {component.badge && (
                                    <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                                      {component.badge}
                                    </span>
                                  )}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* 애니메이션 */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="text-sm">애니메이션</span>
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {animationComponents.map((component) => (
                    <SidebarMenuItem key={component.path}>
                      <SidebarMenuButton asChild>
                        <Link href={component.path}>
                          <component.icon className="size-4" />
                          <span>{component.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* 디자인 시스템 */}
        <SidebarGroup>
          <Collapsible className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="text-sm">디자인 시스템</span>
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {designSystemItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton asChild>
                        <Link href={item.path}>
                          <item.icon className="size-4" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* 지침 */}
        <SidebarGroup>
          <Collapsible className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="text-sm">지침</span>
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {guidelineItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton asChild>
                        <Link href={item.path}>
                          <item.icon className="size-4" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="text-xs text-muted-foreground px-2 py-2">
              <p className="text-sm font-semibold text-foreground">
                Next.js Templates
              </p>
              <p className="mt-1">© 2025 All rights reserved</p>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
