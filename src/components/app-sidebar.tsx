"use client";

import Link from "next/link";
import {
  Home,
  Sparkles,
  Atom,
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
  MousePointerClick,
  Boxes,
  Component,
  Palette,
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
  { name: "Button", path: "/shadcn/button", icon: MousePointerClick },
  { name: "Badge", path: "/shadcn/badge", icon: Component },
  { name: "Input", path: "/shadcn/input", icon: Component },
  { name: "Label", path: "/shadcn/label", icon: Component },
  { name: "Card", path: "/shadcn/card", icon: Component },
  { name: "Dialog", path: "/shadcn/dialog", icon: Component },
  { name: "Tooltip", path: "/shadcn/tooltip", icon: Component },
  { name: "Select", path: "/shadcn/select", icon: Component },
];

// Kibo UI 복잡한 컴포넌트 (추후 추가 예정)
const kiboComponents: any[] = [];

// 커스텀 구현 컴포넌트
const customComponents = [
  { name: "Activity", path: "/activity", icon: Zap, badge: "React 19.2" },
  { name: "Spinner", path: "/spinner", icon: Loader2 },
];

// 애니메이션 컴포넌트
const animationComponents = [
  { name: "Fade", path: "/fade", icon: Sparkles },
  { name: "Slide", path: "/slide", icon: MoveRight },
  { name: "Scale", path: "/scale", icon: Search },
  { name: "Rotate", path: "/rotate", icon: RotateCw },
  { name: "Bounce", path: "/bounce", icon: Zap },
  { name: "Spin", path: "/spin", icon: Repeat },
  { name: "Pulse", path: "/pulse", icon: Heart },
  { name: "Wiggle", path: "/wiggle", icon: Radio },
  { name: "Flip", path: "/flip", icon: Shuffle },
  { name: "Shake", path: "/shake", icon: SquareActivity },
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

        {/* Shadcn UI 기본 컴포넌트 */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center gap-2">
                <Component />
                <span>기본 컴포넌트(Shadcn UI)</span>
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {shadcnComponents.map((component) => (
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

        {/* Kibo UI 복잡한 컴포넌트 */}
        {kiboComponents.length > 0 && (
          <SidebarGroup>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex items-center gap-2">
                  <Boxes />
                  <span>고급 컴포넌트(Kibo UI)</span>
                  <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {kiboComponents.map((component) => (
                      <SidebarMenuItem key={component.path}>
                        <SidebarMenuButton asChild>
                          <Link href={component.path}>
                            <component.icon className="size-4" />
                            <span>{component.name}</span>
                            {component.badge && (
                              <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                                {component.badge}
                              </span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        )}

        {/* 커스텀 구현 컴포넌트 */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center gap-2">
                <Atom />
                <span>커스텀 컴포넌트(Custom)</span>
                <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {customComponents.map((component) => (
                    <SidebarMenuItem key={component.path}>
                      <SidebarMenuButton asChild>
                        <Link href={component.path}>
                          <component.icon className="size-4" />
                          <span>{component.name}</span>
                          {component.badge && (
                            <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                              {component.badge}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* 애니메이션 */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center gap-2">
                <Sparkles />
                <span>애니메이션(Animation)</span>
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
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="text-xs text-muted-foreground space-y-1 px-2 py-2">
              <p className="text-sm font-semibold text-foreground mb-2">
                기술 스택
              </p>
              <p>Tailwind CSS v4</p>
              <p>React 19.2</p>
              <p>Next.js 16</p>
              <div className="border-t border-border mt-2 pt-2">
                <p className="text-sm font-semibold text-foreground mb-1">
                  컴포넌트 구성
                </p>
                <p>Shadcn UI - 기본 컴포넌트</p>
                <p>Kibo UI - 고급 컴포넌트</p>
                <p>Custom - 커스텀 컴포넌트</p>
                <p>Animation - 애니메이션 컴포넌트</p>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
