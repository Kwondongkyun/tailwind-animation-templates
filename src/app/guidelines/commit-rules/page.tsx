"use client";

import { PageHeader } from "@/components/page-header";
import { CodeBlock } from "@/components/docs";
import { GitCommit, CheckCircle2, XCircle } from "lucide-react";

export default function CommitRulesPage() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="커밋 규칙"
        description="일관된 Git 커밋 메시지 작성 가이드입니다."
      />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto p-8 space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <GitCommit className="size-10" />
              커밋 규칙
            </h1>
            <p className="text-xl text-muted-foreground">
              Conventional Commits 규칙을 따라 일관된 커밋 메시지를 작성합니다.
            </p>
          </div>

          {/* Commit Message Format */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">커밋 메시지 형식</h2>
            <CodeBlock
              code={`<type>(<scope>): <subject>

<body>

<footer>`}
            />
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">type (필수)</p>
                <p className="text-sm text-muted-foreground">
                  커밋의 유형을 나타냅니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">scope (선택)</p>
                <p className="text-sm text-muted-foreground">
                  변경 사항의 범위를 나타냅니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">subject (필수)</p>
                <p className="text-sm text-muted-foreground">
                  변경 사항에 대한 간단한 설명입니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">body (선택)</p>
                <p className="text-sm text-muted-foreground">
                  변경 사항에 대한 상세한 설명입니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">footer (선택)</p>
                <p className="text-sm text-muted-foreground">
                  Breaking Changes나 이슈 참조를 작성합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Commit Types */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">커밋 타입</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">
                  feat
                </p>
                <p className="text-sm text-muted-foreground">
                  새로운 기능 추가
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">fix</p>
                <p className="text-sm text-muted-foreground">버그 수정</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">
                  docs
                </p>
                <p className="text-sm text-muted-foreground">
                  문서 변경 (README, 주석 등)
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">
                  style
                </p>
                <p className="text-sm text-muted-foreground">
                  코드 포맷팅, 세미콜론 누락 등 (기능 변경 없음)
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">
                  refactor
                </p>
                <p className="text-sm text-muted-foreground">
                  코드 리팩토링 (기능 변경 없음)
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">
                  test
                </p>
                <p className="text-sm text-muted-foreground">
                  테스트 코드 추가 또는 수정
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">
                  chore
                </p>
                <p className="text-sm text-muted-foreground">
                  빌드 프로세스, 패키지 매니저 설정 등
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-mono font-semibold text-primary mb-2">
                  perf
                </p>
                <p className="text-sm text-muted-foreground">
                  성능 개선 관련 코드 변경
                </p>
              </div>
            </div>
          </div>

          {/* Good Examples */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <CheckCircle2 className="size-6 text-green-600" />
              좋은 예시
            </h2>
            <div className="space-y-3">
              <CodeBlock
                code={`feat(button): add loading state to Button component

- Add isLoading prop to Button
- Show spinner when loading
- Disable button during loading`}
              />
              <CodeBlock
                code={`fix(auth): resolve token expiration issue

Fixed bug where expired tokens were not being refreshed properly.

Closes #123`}
              />
              <CodeBlock
                code={`docs(readme): update installation instructions

Added detailed steps for Tailwind CSS v4 setup`}
              />
              <CodeBlock
                code={`refactor(hooks): simplify useLocalStorage implementation

- Remove unnecessary dependencies
- Improve type safety
- Add JSDoc comments`}
              />
              <CodeBlock
                code={`perf(animation): optimize fade animation performance

Use GPU-accelerated transforms instead of opacity transitions`}
              />
            </div>
          </div>

          {/* Bad Examples */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <XCircle className="size-6 text-destructive" />
              나쁜 예시
            </h2>
            <div className="space-y-3">
              <div className="p-4 border border-destructive/50 rounded-lg">
                <CodeBlock code={`update files`} />
                <p className="text-sm text-destructive mt-2">
                  ❌ 타입이 없고 설명이 너무 모호함
                </p>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <CodeBlock code={`fix bug`} />
                <p className="text-sm text-destructive mt-2">
                  ❌ 어떤 버그를 수정했는지 알 수 없음
                </p>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <CodeBlock
                  code={`added new button component and fixed login bug and updated readme`}
                />
                <p className="text-sm text-destructive mt-2">
                  ❌ 하나의 커밋에 여러 변경사항 포함 (분리 필요)
                </p>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <CodeBlock code={`FEAT: ADD NEW FEATURE`} />
                <p className="text-sm text-destructive mt-2">
                  ❌ 대문자 사용 (소문자로 작성해야 함)
                </p>
              </div>
            </div>
          </div>

          {/* Breaking Changes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Breaking Changes</h2>
            <p className="text-muted-foreground">
              호환성이 깨지는 변경사항은 footer에 명시합니다.
            </p>
            <CodeBlock
              code={`feat(api)!: change authentication API structure

BREAKING CHANGE: Authentication API now requires JWT tokens instead of session cookies.

Migration guide:
1. Update authentication service
2. Replace session handling with JWT
3. Update frontend to store tokens

Closes #456`}
            />
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">베스트 프랙티스</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold mb-2">✅ Do</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    현재 시제 사용 (&quot;add&quot; not &quot;added&quot;)
                  </li>
                  <li>
                    명령형 사용 (&quot;change&quot; not &quot;changes&quot;)
                  </li>
                  <li>첫 글자는 소문자로 작성</li>
                  <li>subject는 50자 이내로 작성</li>
                  <li>body는 72자마다 줄바꿈</li>
                  <li>하나의 커밋은 하나의 논리적 변경사항만 포함</li>
                  <li>의미 있는 커밋 메시지 작성</li>
                </ul>
              </div>
              <div className="p-4 border border-destructive/50 rounded-lg">
                <p className="font-semibold mb-2 text-destructive">
                  ❌ Don&apos;t
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    모호한 메시지 (&quot;fix&quot;, &quot;update&quot;,
                    &quot;wip&quot;)
                  </li>
                  <li>여러 변경사항을 하나의 커밋에 포함</li>
                  <li>과도하게 긴 커밋 메시지</li>
                  <li>이모지 사용 (필요시 타입으로 충분)</li>
                  <li>마침표로 subject 끝내기</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">도구</h2>
            <div className="p-6 border rounded-lg bg-muted/30">
              <h3 className="font-semibold mb-3">Commitlint</h3>
              <p className="text-sm text-muted-foreground mb-4">
                커밋 메시지 규칙을 자동으로 검증합니다.
              </p>
              <CodeBlock
                code={`# Install
npm install --save-dev @commitlint/cli @commitlint/config-conventional

# Configure
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# Add to package.json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}`}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
