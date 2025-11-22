"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
} from "@/components/kibo-ui/dialog-stack";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { CodeBlock, ExampleSection } from "@/components/docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const sixDialogStackCode = String.raw`"use client";

import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
} from "@/components/kibo-ui/dialog-stack";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const Steps = [
  {
    title: "계정 생성",
    subtitle: "고객 온보딩 1/6",
    badge: "Profile",
    description: "기본 고객 정보를 수집하고 역할을 지정합니다.",
    checklist: ["이메일 인증", "회사 선택", "역할 지정"],
  },
  {
    title: "브랜드 설정",
    subtitle: "고객 온보딩 2/6",
    badge: "Brand",
    description: "로고와 브랜드 컬러를 업로드해 제품 경험을 통일합니다.",
    checklist: ["로고 추가", "브랜드 컬러 선택", "폰트 적용"],
  },
  {
    title: "팀 초대",
    subtitle: "고객 온보딩 3/6",
    badge: "Team",
    description: "협업할 팀원을 초대하고 권한을 설정합니다.",
    checklist: ["팀원 초대", "권한 구성", "알림 채널 선택"],
  },
  {
    title: "프로젝트 연결",
    subtitle: "고객 온보딩 4/6",
    badge: "Projects",
    description: "핵심 프로젝트를 연결하고 대시보드를 활성화합니다.",
    checklist: ["프로젝트 생성", "자동 수집 활성화", "가져오기 테스트"],
  },
  {
    title: "자동화 구성",
    subtitle: "고객 온보딩 5/6",
    badge: "Automation",
    description: "규칙을 설정하고 반복 태스크를 자동화합니다.",
    checklist: ["규칙 템플릿 선택", "슬랙 채널 연결", "테스트 실행"],
  },
  {
    title: "출시 준비",
    subtitle: "고객 온보딩 6/6",
    badge: "Launch",
    description: "최종 검토 후 워크플로우를 운영 환경에 배포합니다.",
    checklist: ["준비 상태 확인", "팀 공지 작성", "런치 체크리스트 완료"],
  },
];

function DialogStackWithSixDialogs() {
  return (
    <DialogStack>
      <DialogStackTrigger asChild>
        <Button variant="outline">프로젝트 킥오프</Button>
      </DialogStackTrigger>
      <DialogStackOverlay />
      <DialogStackBody>
        {Steps.map((step, index) => (
          <DialogStackContent key={index}>
            <DialogStackHeader>
              <div className="flex items-center gap-2">
                <DialogStackTitle>{step.title}</DialogStackTitle>
                <Badge variant="secondary">{step.badge}</Badge>
              </div>
              <DialogStackDescription>
                {step.description}
              </DialogStackDescription>
            </DialogStackHeader>
            <div className="flex flex-col gap-2 mt-4">
              {step.checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <DialogStackFooter className="justify-end">
              {index > 0 && (
                <DialogStackPrevious asChild>
                  <Button variant="outline">이전</Button>
                </DialogStackPrevious>
              )}
              {index < Steps.length - 1 && (
                <DialogStackNext asChild>
                  <Button variant="outline">다음</Button>
                </DialogStackNext>
              )}
            </DialogStackFooter>
          </DialogStackContent>
        ))}
      </DialogStackBody>
    </DialogStack>
  );
}

export default DialogStackWithSixDialogs;
`;

const clickableNavigationCode = String.raw`"use client";

import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
} from "@/components/kibo-ui/dialog-stack";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const Steps = [
  {
    title: "계정 생성",
    subtitle: "고객 온보딩 1/6",
    badge: "Profile",
    description: "기본 고객 정보를 수집하고 역할을 지정합니다.",
    checklist: ["이메일 인증", "회사 선택", "역할 지정"],
  },
  {
    title: "브랜드 설정",
    subtitle: "고객 온보딩 2/6",
    badge: "Brand",
    description: "로고와 브랜드 컬러를 업로드해 제품 경험을 통일합니다.",
    checklist: ["로고 추가", "브랜드 컬러 선택", "폰트 적용"],
  },
  {
    title: "팀 초대",
    subtitle: "고객 온보딩 3/6",
    badge: "Team",
    description: "협업할 팀원을 초대하고 권한을 설정합니다.",
    checklist: ["팀원 초대", "권한 구성", "알림 채널 선택"],
  },
  {
    title: "프로젝트 연결",
    subtitle: "고객 온보딩 4/6",
    badge: "Projects",
    description: "핵심 프로젝트를 연결하고 대시보드를 활성화합니다.",
    checklist: ["프로젝트 생성", "자동 수집 활성화", "가져오기 테스트"],
  },
  {
    title: "자동화 구성",
    subtitle: "고객 온보딩 5/6",
    badge: "Automation",
    description: "규칙을 설정하고 반복 태스크를 자동화합니다.",
    checklist: ["규칙 템플릿 선택", "슬랙 채널 연결", "테스트 실행"],
  },
  {
    title: "출시 준비",
    subtitle: "고객 온보딩 6/6",
    badge: "Launch",
    description: "최종 검토 후 워크플로우를 운영 환경에 배포합니다.",
    checklist: ["준비 상태 확인", "팀 공지 작성", "런치 체크리스트 완료"],
  },
];

function DialogStackWithNavigation() {
  return (
    <DialogStack clickable>
      <DialogStackTrigger asChild>
        <Button variant="outline">프로젝트 킥오프 + 네비게이션</Button>
      </DialogStackTrigger>
      <DialogStackOverlay />
      <DialogStackBody>
        {Steps.map((step, index) => (
          <DialogStackContent key={index}>
            <DialogStackHeader>
              <div className="flex items-center gap-2">
                <DialogStackTitle>{step.title}</DialogStackTitle>
                <Badge variant="secondary">{step.badge}</Badge>
              </div>
              <DialogStackDescription>
                {step.description}
              </DialogStackDescription>
            </DialogStackHeader>
            <div className="flex flex-col gap-2 mt-4">
              {step.checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <DialogStackFooter className="justify-end">
              {index > 0 && (
                <DialogStackPrevious asChild>
                  <Button variant="outline">이전</Button>
                </DialogStackPrevious>
              )}
              {index < Steps.length - 1 && (
                <DialogStackNext asChild>
                  <Button variant="outline">다음</Button>
                </DialogStackNext>
              )}
            </DialogStackFooter>
          </DialogStackContent>
        ))}
      </DialogStackBody>
    </DialogStack>
  );
}

export default DialogStackWithNavigation;
`;

const controlledDialogStackCode = String.raw`"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const controlledSteps = [
  {
    title: "티켓 triage",
    subtitle: "긴급도 평가 및 담당자 배정",
    short: "Triage",
    description: "SLI 기준으로 우선순위를 설정하고 담당자를 지정합니다.",
  },
  {
    title: "해결 전략 선택",
    subtitle: "재현 + 해결 계획 수립",
    short: "Plan",
    description: "재현 로그를 검토하고 해결 방안을 확정합니다.",
  },
  {
    title: "고객 커뮤니케이션",
    subtitle: "업데이트 공유 및 후속 작업",
    short: "Follow-up",
    description: "고객에게 진행 상황을 안내하고 후속 태스크를 예약합니다.",
  },
];

function ControlledDialogStackDemo() {
  const [open, setOpen] = useState(false);
  const [stack, setStack] = useState<number[]>([]);
  const activeIndex = stack[stack.length - 1] ?? 0;

  const handleOpen = () => {
    setStack([0]);
    setOpen(true);
  };

  const handleBack = () => {
    if (stack.length <= 1) {
      setOpen(false);
      setStack([]);
      return;
    }
    setStack((prev) => prev.slice(0, -1));
  };

  const handleAdvance = () => {
    if (activeIndex >= controlledSteps.length - 1) {
      setOpen(false);
      setStack([]);
      return;
    }
    setStack((prev) => [...prev, activeIndex + 1]);
  };

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-2">
        <Button onClick={handleOpen}>지원 티켓 처리</Button>
        <p className="text-sm text-muted-foreground">
          현재 스택 깊이: {stack.length}
        </p>
      </div>
      <Dialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (!value) setStack([]);
        }}
      >
        <DialogContent className="sm:max-w-[520px] space-y-6">
          <DialogHeader>
            <DialogTitle>
              {controlledSteps[activeIndex]?.title ?? "완료"}
            </DialogTitle>
            <DialogDescription>
              {controlledSteps[activeIndex]?.subtitle ??
                "모든 단계를 완료했습니다."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {stack.map((index, depth) => (
                <Badge
                  key={\`\${index}-\${depth}\`}
                  variant={depth === stack.length - 1 ? "default" : "outline"}
                >
                  {\`\${depth + 1}단계 · \${controlledSteps[index].short}\`}
                </Badge>
              ))}
            </div>
            <div className="rounded-lg border bg-muted/20 p-4 text-sm leading-6">
              {controlledSteps[activeIndex]?.description}
            </div>
          </div>
          <DialogFooter className="flex w-full items-center justify-between">
            <Button variant="outline" onClick={handleBack}>
              {stack.length <= 1 ? "닫기" : "이전"}
            </Button>
            <Button onClick={handleAdvance}>
              {activeIndex >= controlledSteps.length - 1 ? "완료" : "다음 푸시"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ControlledDialogStackDemo;
`;

// 예시
const Steps = [
  {
    title: "계정 생성",
    subtitle: "고객 온보딩 1/6",
    badge: "Profile",
    description: "기본 고객 정보를 수집하고 역할을 지정합니다.",
    checklist: ["이메일 인증", "회사 선택", "역할 지정"],
  },
  {
    title: "브랜드 설정",
    subtitle: "고객 온보딩 2/6",
    badge: "Brand",
    description: "로고와 브랜드 컬러를 업로드해 제품 경험을 통일합니다.",
    checklist: ["로고 추가", "브랜드 컬러 선택", "폰트 적용"],
  },
  {
    title: "팀 초대",
    subtitle: "고객 온보딩 3/6",
    badge: "Team",
    description: "협업할 팀원을 초대하고 권한을 설정합니다.",
    checklist: ["팀원 초대", "권한 구성", "알림 채널 선택"],
  },
  {
    title: "프로젝트 연결",
    subtitle: "고객 온보딩 4/6",
    badge: "Projects",
    description: "핵심 프로젝트를 연결하고 대시보드를 활성화합니다.",
    checklist: ["프로젝트 생성", "자동 수집 활성화", "가져오기 테스트"],
  },
  {
    title: "자동화 구성",
    subtitle: "고객 온보딩 5/6",
    badge: "Automation",
    description: "규칙을 설정하고 반복 태스크를 자동화합니다.",
    checklist: ["규칙 템플릿 선택", "슬랙 채널 연결", "테스트 실행"],
  },
  {
    title: "출시 준비",
    subtitle: "고객 온보딩 6/6",
    badge: "Launch",
    description: "최종 검토 후 워크플로우를 운영 환경에 배포합니다.",
    checklist: ["준비 상태 확인", "팀 공지 작성", "런치 체크리스트 완료"],
  },
];

function DialogStackWithSixDialogs() {
  return (
    <DialogStack>
      <DialogStackTrigger asChild>
        <Button variant="outline">프로젝트 킥오프</Button>
      </DialogStackTrigger>
      <DialogStackOverlay />
      <DialogStackBody>
        {Steps.map((step, index) => (
          <DialogStackContent key={index}>
            <DialogStackHeader>
              <div className="flex items-center gap-2">
                <DialogStackTitle>{step.title}</DialogStackTitle>
                <Badge variant="secondary">{step.badge}</Badge>
              </div>
              <DialogStackDescription>
                {step.description}
              </DialogStackDescription>
            </DialogStackHeader>
            <div className="flex flex-col gap-2 mt-4">
              {step.checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <DialogStackFooter className="justify-end">
              {index > 0 && (
                <DialogStackPrevious asChild>
                  <Button variant="outline">이전</Button>
                </DialogStackPrevious>
              )}
              {index < Steps.length - 1 && (
                <DialogStackNext asChild>
                  <Button variant="outline">다음</Button>
                </DialogStackNext>
              )}
            </DialogStackFooter>
          </DialogStackContent>
        ))}
      </DialogStackBody>
    </DialogStack>
  );
}

function DialogStackWithNavigation() {
  return (
    <DialogStack clickable>
      <DialogStackTrigger asChild>
        <Button variant="outline">프로젝트 킥오프 + 네비게이션</Button>
      </DialogStackTrigger>
      <DialogStackOverlay />
      <DialogStackBody>
        {Steps.map((step, index) => (
          <DialogStackContent key={index}>
            <DialogStackHeader>
              <div className="flex items-center gap-2">
                <DialogStackTitle>{step.title}</DialogStackTitle>
                <Badge variant="secondary">{step.badge}</Badge>
              </div>
              <DialogStackDescription>
                {step.description}
              </DialogStackDescription>
            </DialogStackHeader>
            <div className="flex flex-col gap-2 mt-4">
              {step.checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <DialogStackFooter className="justify-end">
              {index > 0 && (
                <DialogStackPrevious asChild>
                  <Button variant="outline">이전</Button>
                </DialogStackPrevious>
              )}
              {index < Steps.length - 1 && (
                <DialogStackNext asChild>
                  <Button variant="outline">다음</Button>
                </DialogStackNext>
              )}
            </DialogStackFooter>
          </DialogStackContent>
        ))}
      </DialogStackBody>
    </DialogStack>
  );
}

const controlledSteps = [
  {
    title: "티켓 triage",
    subtitle: "긴급도 평가 및 담당자 배정",
    short: "Triage",
    description: "SLI 기준으로 우선순위를 설정하고 담당자를 지정합니다.",
  },
  {
    title: "해결 전략 선택",
    subtitle: "재현 + 해결 계획 수립",
    short: "Plan",
    description: "재현 로그를 검토하고 해결 방안을 확정합니다.",
  },
  {
    title: "고객 커뮤니케이션",
    subtitle: "업데이트 공유 및 후속 작업",
    short: "Follow-up",
    description: "고객에게 진행 상황을 안내하고 후속 태스크를 예약합니다.",
  },
];

function ControlledDialogStackDemo() {
  const [open, setOpen] = useState(false);
  const [stack, setStack] = useState<number[]>([]);
  const activeIndex = stack[stack.length - 1] ?? 0;

  const handleOpen = () => {
    setStack([0]);
    setOpen(true);
  };

  const handleBack = () => {
    if (stack.length <= 1) {
      setOpen(false);
      setStack([]);
      return;
    }
    setStack((prev) => prev.slice(0, -1));
  };

  const handleAdvance = () => {
    if (activeIndex >= controlledSteps.length - 1) {
      setOpen(false);
      setStack([]);
      return;
    }
    setStack((prev) => [...prev, activeIndex + 1]);
  };

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-2">
        <Button onClick={handleOpen}>지원 티켓 처리</Button>
        <p className="text-sm text-muted-foreground">
          현재 스택 깊이: {stack.length}
        </p>
      </div>
      <Dialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (!value) setStack([]);
        }}
      >
        <DialogContent className="sm:max-w-[520px] space-y-6">
          <DialogHeader>
            <DialogTitle>
              {controlledSteps[activeIndex]?.title ?? "완료"}
            </DialogTitle>
            <DialogDescription>
              {controlledSteps[activeIndex]?.subtitle ??
                "모든 단계를 완료했습니다."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {stack.map((index, depth) => (
                <Badge
                  key={`${index}-${depth}`}
                  variant={depth === stack.length - 1 ? "default" : "outline"}
                >
                  {`${depth + 1}단계 · ${controlledSteps[index].short}`}
                </Badge>
              ))}
            </div>
            <div className="rounded-lg border bg-muted/20 p-4 text-sm leading-6">
              {controlledSteps[activeIndex]?.description}
            </div>
          </div>
          <DialogFooter className="flex w-full items-center justify-between">
            <Button variant="outline" onClick={handleBack}>
              {stack.length <= 1 ? "닫기" : "이전"}
            </Button>
            <Button onClick={handleAdvance}>
              {activeIndex >= controlledSteps.length - 1 ? "완료" : "다음 푸시"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function DialogStackPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Dialog Stack"
        description="여러 개의 다이얼로그를 겹쳐서 단계형 프로세스를 구성할 수 있는 Kibo UI 패턴"
      />
      <main className="flex-1">
        <div className="container mx-auto max-w-6xl space-y-12 p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Dialog Stack</h1>
            <p className="text-xl text-muted-foreground">
              다중 스텝 온보딩, 중첩 폼, 마법사 플로우 등 복잡한 사용자 여정을
              하나의 일관된 인터페이스로 제공
              <span className="block" />
              여러 개의 다이얼로그를 스택 구조로 관리하는 컴포넌트
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="text-muted-foreground">
              Kibo UI CLI를 사용해 Dialog Stack 패턴을 빠르게 추가하세요.
            </p>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="docs">Docs</TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-4">
                <CodeBlock code={`npx kibo-ui add dialog-stack`} />
              </TabsContent>
              <TabsContent value="docs" className="mt-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link
                    href="https://www.kibo-ui.com/components/dialog-stack"
                    target="_blank"
                    rel="noreferrer"
                  >
                    공식 문서 열기
                    <ExternalLink className="size-4" />
                  </Link>
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">주요 특징</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              <li className="rounded-lg border bg-muted/20 p-4 text-sm leading-6">
                <span className="font-semibold">스택 기반 네비게이션:</span> 각
                다이얼로그를 스택에 쌓아 복잡한 위자드나 중첩 폼을 구현할 수
                있습니다.
              </li>
              <li className="rounded-lg border bg-muted/20 p-4 text-sm leading-6">
                <span className="font-semibold">일관된 레이아웃:</span>{" "}
                헤더·본문·푸터가 규격화되어 여러 단계가 연결돼도 사용성이
                유지됩니다.
              </li>
              <li className="rounded-lg border bg-muted/20 p-4 text-sm leading-6">
                <span className="font-semibold">내장 네비게이션 컴포넌트:</span>{" "}
                단계 전환 버튼과 사이드 목록을 조합해 원하는 흐름으로 안내할 수
                있습니다.
              </li>
              <li className="rounded-lg border bg-muted/20 p-4 text-sm leading-6">
                <span className="font-semibold">Radix 기반 접근성:</span> 포커스
                트랩과 키보드 접근성 패턴을 그대로 활용합니다.
              </li>
            </ul>
          </div>

          <ExampleSection
            title="여섯 단계 스택"
            titleLink="https://www.kibo-ui.com/components/dialog-stack"
            description="6개의 다이얼로그가 순차적으로 쌓이며, Previous/Next 버튼으로만 이동 가능한 단계별 플로우"
            preview={<DialogStackWithSixDialogs />}
            code={sixDialogStackCode}
          />

          <ExampleSection
            title="네비게이션과 함께 사용하기"
            description="clickable prop을 추가하여 이전 다이얼로그를 클릭으로 바로 이동 가능하게 만든 자유로운 네비게이션"
            preview={<DialogStackWithNavigation />}
            code={clickableNavigationCode}
          />

          <ExampleSection
            title="Controlled 스택 관리"
            description="다이얼로그 스택을 숫자 배열로 직접 관리, 각 단계의 히스토리를 시각적으로 보여주고 자유롭게 앞뒤로 이동할 수 있는 고급 제어 방식"
            preview={<ControlledDialogStackDemo />}
            code={controlledDialogStackCode}
          />
        </div>
      </main>
    </div>
  );
}
