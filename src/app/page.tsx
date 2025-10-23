import { PageHeader } from "@/components/page-header";

export default function Home() {
  return (
    <>
      <PageHeader title="Next.js 템플릿 모음" />

      {/* Content Area */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="max-w-6xl mx-auto w-full px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Next.js 템플릿 모음
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              최신 기술 스택으로 만든 프로덕션 레디 템플릿
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              왼쪽 사이드바에서 원하는 템플릿을 선택하여 바로 확인하세요
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Animation Templates */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">✨</div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                애니메이션 템플릿
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tailwind CSS와 Framer Motion을 활용한 10가지 애니메이션 효과
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  CSS & Framer Motion 예제
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  즉시 사용 가능한 코드
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  다크모드 지원
                </li>
              </ul>
            </div>

            {/* React Components */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 shadow-lg border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-4">⚛️</div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                React 컴포넌트
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                React 19.2의 최신 기능을 활용한 실용적인 컴포넌트 예제
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">✓</span>
                  React 19.2 Activity 컴포넌트
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">✓</span>
                  상태 유지 기능 데모
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">✓</span>
                  상세한 개념 설명
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              🚀 빠른 시작 가이드
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                    왼쪽 사이드바 열기
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    좌측 상단의 메뉴 버튼을 클릭하여 사이드바를 열거나 닫을 수
                    있습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                    카테고리 선택
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    "애니메이션 템플릿" 또는 "React 컴포넌트"를 클릭하여
                    드롭다운을 펼칩니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                    템플릿 확인
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    원하는 템플릿을 선택하면 즉시 해당 페이지로 이동합니다.
                    실시간으로 애니메이션과 컴포넌트를 체험해보세요!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-linear-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              💻 기술 스택
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Next.js 16
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  최신 프레임워크
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚛️</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  React 19.2
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Activity 컴포넌트
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Tailwind CSS v4
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  최신 CSS 프레임워크
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Framer Motion
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  애니메이션 라이브러리
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔷</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  TypeScript
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  타입 안정성
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌙</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Dark Mode
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  다크모드 지원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
