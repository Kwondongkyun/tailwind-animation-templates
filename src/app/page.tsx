"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Sparkles,
  Component,
  Atom,
  MousePointerClick,
  Zap,
  MoveRight,
  Search,
  RotateCw,
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
  Boxes,
  Loader2,
  Heart,
  Layers,
  BookOpen,
  FileText,
  GitCommit,
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Next.js 컴포넌트 모음"
        description="최신 기술 스택으로 만든 프로덕션 레디 템플릿"
      />
      <main className="flex-1 overflow-auto">
        <div className="container max-w-7xl mx-auto p-8 space-y-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 py-8"
          >
            <div className="flex items-center justify-center gap-2">
              <Badge variant="secondary" className="text-sm">
                <Sparkles className="size-3 mr-1" />
                최신 기술 스택
              </Badge>
              <Badge variant="outline" className="text-sm">
                React 19.2
              </Badge>
            </div>
            <p className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Next.js 컴포넌트 모음
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              프로덕션 레디 컴포넌트와 애니메이션을 즉시 사용해보세요.
              <br />
              복사하여 붙여넣기만 하면 바로 시작할 수 있습니다.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/shadcn/button">
                  시작하기
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#categories">
                  <Boxes className="size-4 mr-2" />
                  카테고리 둘러보기
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <motion.div variants={item}>
              <Card>
                <CardContent className="p-6 text-center">
                  <Component className="size-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">
                    UI 컴포넌트
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card>
                <CardContent className="p-6 text-center">
                  <Sparkles className="size-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">
                    애니메이션
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card>
                <CardContent className="p-6 text-center">
                  <Palette className="size-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-3xl font-bold">4+</div>
                  <div className="text-sm text-muted-foreground">
                    디자인 시스템
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="size-8 mx-auto mb-2 text-green-500" />
                  <div className="text-3xl font-bold">4+</div>
                  <div className="text-sm text-muted-foreground">
                    가이드 문서
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Categories Section */}
          <div id="categories" className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">카테고리</h2>
              <p className="text-muted-foreground">
                필요한 컴포넌트를 선택하여 바로 확인하세요
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Components */}
              <motion.div variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Component className="size-6 text-primary" />
                      <CardTitle>컴포넌트</CardTitle>
                    </div>
                    <CardDescription>
                      기본부터 고급까지, 다양한 UI 컴포넌트 라이브러리
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">
                          기본 컴포넌트 (Shadcn UI)
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/shadcn/button">
                            <Badge
                              variant="secondary"
                              className="cursor-pointer hover:bg-secondary/80"
                            >
                              Button
                            </Badge>
                          </Link>
                          <Link href="/shadcn/input">
                            <Badge
                              variant="secondary"
                              className="cursor-pointer hover:bg-secondary/80"
                            >
                              Input
                            </Badge>
                          </Link>
                          <Link href="/shadcn/card">
                            <Badge
                              variant="secondary"
                              className="cursor-pointer hover:bg-secondary/80"
                            >
                              Card
                            </Badge>
                          </Link>
                          <Link href="/shadcn/dialog">
                            <Badge
                              variant="secondary"
                              className="cursor-pointer hover:bg-secondary/80"
                            >
                              Dialog
                            </Badge>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">
                          고급 컴포넌트 (Kibo UI)
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/kibo/dialog-stack">
                            <Badge
                              variant="secondary"
                              className="cursor-pointer hover:bg-secondary/80"
                            >
                              <Layers className="size-3 mr-1" />
                              Dialog Stack
                            </Badge>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span>접근성(Accessibility) 완벽 지원</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span>커스터마이징 가능한 디자인</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span>다크모드 기본 지원</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/shadcn/button">
                        둘러보기
                        <ArrowRight className="size-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Animations */}
              <motion.div variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="size-6 text-purple-500" />
                      <CardTitle>애니메이션</CardTitle>
                    </div>
                    <CardDescription>
                      Framer Motion과 Tailwind CSS 기반 애니메이션
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Link href="/animation/fade">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <Sparkles className="size-3 mr-1" />
                          Fade
                        </Badge>
                      </Link>
                      <Link href="/animation/slide">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <MoveRight className="size-3 mr-1" />
                          Slide
                        </Badge>
                      </Link>
                      <Link href="/animation/scale">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <Search className="size-3 mr-1" />
                          Scale
                        </Badge>
                      </Link>
                      <Link href="/animation/rotate">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <RotateCw className="size-3 mr-1" />
                          Rotate
                        </Badge>
                      </Link>
                      <Link href="/animation/bounce">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <Zap className="size-3 mr-1" />
                          Bounce
                        </Badge>
                      </Link>
                      <Link href="/animation/pulse">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <Heart className="size-3 mr-1" />
                          Pulse
                        </Badge>
                      </Link>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-purple-500" />
                        <span>CSS & Framer Motion 모두 지원</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-purple-500" />
                        <span>즉시 사용 가능한 코드</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-purple-500" />
                        <span>라이브 프리뷰 제공</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/animation/fade">
                        둘러보기
                        <ArrowRight className="size-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Design System */}
              <motion.div variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="size-6 text-blue-500" />
                      <CardTitle>디자인 시스템</CardTitle>
                    </div>
                    <CardDescription>
                      일관성 있는 디자인을 위한 시스템 가이드
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Link href="/design-system/overview">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          Overview
                        </Badge>
                      </Link>
                      <Link href="/design-system/typography">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <FileText className="size-3 mr-1" />
                          Typography
                        </Badge>
                      </Link>
                      <Link href="/design-system/colors">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <Palette className="size-3 mr-1" />
                          Colors
                        </Badge>
                      </Link>
                      <Link href="/design-system/spacing">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          Spacing
                        </Badge>
                      </Link>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-blue-500" />
                        <span>타이포그래피 스케일</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-blue-500" />
                        <span>시맨틱 컬러 시스템</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-blue-500" />
                        <span>간격 및 레이아웃 가이드</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/design-system/overview">
                        둘러보기
                        <ArrowRight className="size-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Guidelines */}
              <motion.div variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="size-6 text-green-500" />
                      <CardTitle>지침</CardTitle>
                    </div>
                    <CardDescription>
                      프로젝트 규칙과 베스트 프랙티스
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Link href="/guidelines/commit-rules">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          <GitCommit className="size-3 mr-1" />
                          커밋 규칙
                        </Badge>
                      </Link>
                      <Link href="/guidelines/pr-rules">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          PR 규칙
                        </Badge>
                      </Link>
                      <Link href="/guidelines/tech-stack">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          기술 스택
                        </Badge>
                      </Link>
                      <Link href="/guidelines/cursor-rules">
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80"
                        >
                          커서 룰
                        </Badge>
                      </Link>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span>Conventional Commits 규칙</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span>PR 템플릿 및 리뷰 가이드</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span>기술 스택 및 도구 소개</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/guidelines/tech-stack">
                        둘러보기
                        <ArrowRight className="size-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">주요 기능</h2>
              <p className="text-muted-foreground">
                개발 생산성을 높이는 강력한 기능들
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Code2 className="size-10 mb-2 text-primary" />
                  <CardTitle className="text-xl">복사 & 붙여넣기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    모든 컴포넌트는 즉시 사용 가능합니다. 코드를 복사하여
                    프로젝트에 바로 적용하세요.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Palette className="size-10 mb-2 text-purple-500" />
                  <CardTitle className="text-xl">완전한 커스터마이징</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    모든 스타일과 동작을 원하는 대로 수정할 수 있습니다.
                    Tailwind CSS로 쉽게 커스터마이징하세요.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="size-10 mb-2 text-green-500" />
                  <CardTitle className="text-xl">검증된 품질</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    접근성, 성능, 사용성을 고려하여 제작된 프로덕션 레디
                    컴포넌트입니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-4 py-12"
          >
            <h2 className="text-3xl font-bold">지금 바로 시작하세요</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              왼쪽 사이드바에서 원하는 컴포넌트를 선택하거나,
              <br />
              아래 버튼을 클릭하여 바로 시작할 수 있습니다.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/shadcn/button">
                  <Component className="size-4 mr-2" />
                  컴포넌트 보기
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/design-system/overview">
                  <Palette className="size-4 mr-2" />
                  디자인 시스템
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/guidelines/tech-stack">
                  <BookOpen className="size-4 mr-2" />
                  가이드 문서
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
