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

const animations = [
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

const components = [
  { name: "Activity", path: "/activity", icon: Zap, badge: "React 19.2" },
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

        {/* Animation Templates */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <Sparkles />
                <span>애니메이션 템플릿</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {animations.map((animation) => (
                    <SidebarMenuItem key={animation.path}>
                      <SidebarMenuButton asChild>
                        <Link href={animation.path}>
                          <animation.icon className="size-4" />
                          <span>{animation.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* React Components */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <Atom />
                <span>React 컴포넌트</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {components.map((component) => (
                    <SidebarMenuItem key={component.path}>
                      <SidebarMenuButton asChild>
                        <Link href={component.path}>
                          <component.icon className="size-4" />
                          <span>{component.name}</span>
                          <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                            {component.badge}
                          </span>
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
              <p>✨ Tailwind CSS v4</p>
              <p>⚛️ React 19.2</p>
              <p>⚡ Next.js 16</p>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
