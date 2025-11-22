"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock } from "@/components/docs";
import { GitPullRequest, CheckCircle2, XCircle } from "lucide-react";

export default function PRRulesPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="PR 규칙"
        description="Pull Request 작성 및 리뷰 가이드입니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <GitPullRequest className="size-10" />
              PR 규칙
            </h1>
            <p className="text-xl text-muted-foreground">
              효과적인 코드 리뷰를 위한 Pull Request 작성 가이드입니다.
            </p>
          </div>

          {/* PR Title */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">PR 제목</h2>
            <p className="text-muted-foreground">
              커밋 메시지와 동일한 형식을 사용합니다.
            </p>
            <CodeBlock
              code={`<type>(<scope>): <description>

예시:
feat(button): add loading state
fix(auth): resolve token expiration issue
docs(readme): update installation guide`}
            />
          </div>

          {/* PR Description Template */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">PR 설명 템플릿</h2>
            <CodeBlock
              code={`## 📝 Description
<!-- 무엇을 변경했는지 간단히 설명해주세요 -->

## 🎯 Motivation
<!-- 왜 이 변경이 필요한지 설명해주세요 -->

## 🔧 Changes
<!-- 주요 변경사항을 나열해주세요 -->
- 
- 
- 

## 📸 Screenshots
<!-- UI 변경이 있다면 스크린샷을 첨부해주세요 -->

## ✅ Checklist
- [ ] 코드가 lint 규칙을 통과했습니다
- [ ] 테스트를 작성하거나 업데이트했습니다
- [ ] 문서를 업데이트했습니다
- [ ] Breaking changes가 있다면 문서화했습니다

## 🔗 Related Issues
<!-- 관련 이슈가 있다면 링크해주세요 -->
Closes #

## 💬 Additional Notes
<!-- 리뷰어가 알아야 할 추가 정보가 있다면 작성해주세요 -->`}
            />
          </div>

          {/* Good PR Examples */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <CheckCircle2 className="size-6 text-green-600" />
              좋은 PR 예시
            </h2>
            <div className="p-6 border rounded-lg space-y-4">
              <div>
                <p className="font-semibold text-lg mb-2">
                  feat(sidebar): reorganize navigation structure
                </p>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="font-semibold">Description:</p>
                  <p>
                    사이드바 네비게이션 구조를 재구성하여 컴포넌트를 대분류로
                    묶고, 디자인 시스템과 지침 섹션을 추가했습니다.
                  </p>
                  <p className="font-semibold mt-4">Changes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>기본/고급/커스텀 컴포넌트를 하나의 대분류로 통합</li>
                    <li>
                      디자인 시스템 섹션 추가 (Typography, Colors, Spacing)
                    </li>
                    <li>지침 섹션 추가 (커밋 규칙, PR 규칙, 기술 스택)</li>
                  </ul>
                  <p className="font-semibold mt-4">Related Issues:</p>
                  <p>Closes #42</p>
                </div>
              </div>
            </div>
          </div>

          {/* PR Size Guidelines */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">PR 크기 가이드라인</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-green-600/50 rounded-lg">
                <p className="font-semibold text-green-600 mb-2">✅ Small PR</p>
                <p className="text-sm text-muted-foreground mb-2">
                  1-200 줄 변경
                </p>
                <p className="text-sm">
                  리뷰하기 쉽고, 빠르게 머지 가능합니다.
                </p>
              </div>
              <div className="p-4 border border-yellow-600/50 rounded-lg">
                <p className="font-semibold text-yellow-600 mb-2">
                  ⚠️ Medium PR
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  200-500 줄 변경
                </p>
                <p className="text-sm">
                  가능하면 분리하는 것이 좋지만 괜찮은 크기입니다.
                </p>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <p className="font-semibold text-destructive mb-2">
                  ❌ Large PR
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  500+ 줄 변경
                </p>
                <p className="text-sm">
                  리뷰하기 어렵습니다. 여러 PR로 분리하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Review Process */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">리뷰 프로세스</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">1. 셀프 리뷰</p>
                <p className="text-sm text-muted-foreground">
                  PR을 올리기 전에 직접 변경사항을 검토합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">2. 자동화된 검사</p>
                <p className="text-sm text-muted-foreground">
                  CI/CD 파이프라인이 린트, 테스트, 빌드를 자동으로 실행합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">3. 코드 리뷰</p>
                <p className="text-sm text-muted-foreground">
                  최소 1명 이상의 리뷰어 승인이 필요합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">4. 머지</p>
                <p className="text-sm text-muted-foreground">
                  모든 검사와 리뷰가 완료되면 main 브랜치에 머지합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Code Review Comments */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">리뷰 코멘트 작성</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">✅ 건설적인 피드백</p>
                <CodeBlock
                  code={`// Good
"이 부분을 useCallback으로 감싸면 불필요한 리렌더링을 방지할 수 있을 것 같습니다.
\`\`\`typescript
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);
\`\`\`
"`}
                />
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <p className="font-semibold mb-2 text-destructive">
                  ❌ 비건설적인 피드백
                </p>
                <CodeBlock code={`// Bad\n"이 코드는 별로네요."`} />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">PR 라벨</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 border rounded-lg bg-green-600/10">
                <p className="font-mono text-sm font-semibold text-green-600">
                  feat
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-red-600/10">
                <p className="font-mono text-sm font-semibold text-red-600">
                  fix
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-blue-600/10">
                <p className="font-mono text-sm font-semibold text-blue-600">
                  docs
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-purple-600/10">
                <p className="font-mono text-sm font-semibold text-purple-600">
                  refactor
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-yellow-600/10">
                <p className="font-mono text-sm font-semibold text-yellow-600">
                  wip
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-orange-600/10">
                <p className="font-mono text-sm font-semibold text-orange-600">
                  breaking
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-pink-600/10">
                <p className="font-mono text-sm font-semibold text-pink-600">
                  urgent
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-gray-600/10">
                <p className="font-mono text-sm font-semibold text-gray-600">
                  blocked
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">베스트 프랙티스</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">✅ Do</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>작은 단위로 PR 생성 (한 번에 하나의 기능)</li>
                  <li>명확하고 설명적인 제목과 설명 작성</li>
                  <li>스크린샷이나 GIF로 UI 변경사항 시각화</li>
                  <li>관련 이슈 링크 추가</li>
                  <li>셀프 리뷰 후 PR 생성</li>
                  <li>리뷰 코멘트에 적극적으로 응답</li>
                  <li>CI/CD 통과 확인</li>
                </ul>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <p className="font-semibold mb-2 text-destructive">
                  ❌ Don&apos;t
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>여러 기능을 하나의 PR에 포함</li>
                  <li>테스트나 문서 없이 PR 생성</li>
                  <li>리뷰 없이 직접 머지</li>
                  <li>린트 에러가 있는 상태로 PR 생성</li>
                  <li>WIP PR을 draft 없이 생성</li>
                  <li>리뷰 코멘트 무시</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Merge Strategies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">머지 전략</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">Squash and Merge</p>
                <p className="text-sm text-muted-foreground">
                  모든 커밋을 하나로 합쳐서 머지합니다. (권장)
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">Merge Commit</p>
                <p className="text-sm text-muted-foreground">
                  머지 커밋을 생성하여 모든 커밋 히스토리를 유지합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">Rebase and Merge</p>
                <p className="text-sm text-muted-foreground">
                  브랜치를 리베이스한 후 머지하여 선형 히스토리를 유지합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
