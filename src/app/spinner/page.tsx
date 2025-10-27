"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Spinner } from "@/components/ui/spinner";

const spinnerVariants = [
  {
    title: "Default Spinner",
    description: "기본 스피너",
    variant: "default" as const,
  },
  {
    title: "Ring Spinner",
    description: "이중 링 스피너",
    variant: "ring" as const,
  },
  {
    title: "Dots Spinner",
    description: "점 3개 스피너",
    variant: "dots" as const,
  },
  {
    title: "Pulse Spinner",
    description: "펄스 효과",
    variant: "pulse" as const,
  },
  {
    title: "Bars Spinner",
    description: "바 애니메이션",
    variant: "bars" as const,
  },
  {
    title: "Circle Spinner",
    description: "원형 핑 효과",
    variant: "circle" as const,
  },
  {
    title: "Gradient Spinner",
    description: "그라디언트 회전",
    variant: "gradient" as const,
  },
  {
    title: "Dual Spinner",
    description: "양방향 회전",
    variant: "dual" as const,
  },
];

const framerVariants = [
  {
    title: "Rotate Spinner",
    description: "회전 애니메이션",
    component: (
      <motion.div
        className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ),
    code: `<motion.div
  className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }}
/>`,
  },
  {
    title: "Scale Pulse",
    description: "크기 변화 펄스",
    component: (
      <motion.div
        className="w-8 h-8 bg-pink-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ),
    code: `<motion.div
  className="w-8 h-8 bg-pink-500 rounded-full"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>`,
  },
  {
    title: "Dots Wave",
    description: "물결 효과",
    component: (
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-blue-500 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    ),
    code: `<div className="flex gap-2">
  {[0, 1, 2].map((i) => (
    <motion.div
      key={i}
      className="w-3 h-3 bg-blue-500 rounded-full"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        delay: i * 0.15
      }}
    />
  ))}
</div>`,
  },
  {
    title: "Orbit Spinner",
    description: "궤도 회전",
    component: (
      <div className="relative w-12 h-12">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-green-500 rounded-full" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-green-500/30 rounded-full" />
        </div>
      </div>
    ),
    code: `<div className="relative w-12 h-12">
  <motion.div
    className="absolute inset-0"
    animate={{ rotate: 360 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-green-500 rounded-full" />
  </motion.div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-4 h-4 bg-green-500/30 rounded-full" />
  </div>
</div>`,
  },
  {
    title: "Flip Spinner",
    description: "뒤집기 효과",
    component: (
      <motion.div
        className="w-8 h-8 bg-orange-500 rounded"
        animate={{ rotateY: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ),
    code: `<motion.div
  className="w-8 h-8 bg-orange-500 rounded"
  animate={{ rotateY: 360 }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>`,
  },
  {
    title: "Expanding Rings",
    description: "확장 링",
    component: (
      <div className="relative w-12 h-12 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-purple-500 rounded-full"
            animate={{
              scale: [0, 1.5],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>
    ),
    code: `<div className="relative w-12 h-12 flex items-center justify-center">
  {[0, 1, 2].map((i) => (
    <motion.div
      key={i}
      className="absolute inset-0 border-2 border-purple-500 rounded-full"
      animate={{
        scale: [0, 1.5],
        opacity: [1, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.6
      }}
    />
  ))}
</div>`,
  },
  {
    title: "Square Dance",
    description: "사각형 춤",
    component: (
      <div className="grid grid-cols-2 gap-1 w-10 h-10">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-red-500 rounded-sm"
            animate={{ scale: [1, 0.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    ),
    code: `<div className="grid grid-cols-2 gap-1 w-10 h-10">
  {[0, 1, 2, 3].map((i) => (
    <motion.div
      key={i}
      className="bg-red-500 rounded-sm"
      animate={{ scale: [1, 0.5, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        delay: i * 0.1
      }}
    />
  ))}
</div>`,
  },
  {
    title: "Infinity Loop",
    description: "무한 루프",
    component: (
      <div className="relative w-16 h-8">
        <motion.div
          className="absolute w-3 h-3 bg-indigo-500 rounded-full"
          animate={{
            x: [0, 25, 50, 25, 0],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    ),
    code: `<div className="relative w-16 h-8">
  <motion.div
    className="absolute w-3 h-3 bg-indigo-500 rounded-full"
    animate={{
      x: [0, 25, 50, 25, 0],
      y: [0, -15, 0, 15, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</div>`,
  },
];

export default function SpinnerPage() {
  const [activeTab, setActiveTab] = useState<"css" | "framer">("css");

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button & Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            홈으로 돌아가기
          </Link>
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Spinner 컴포넌트
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            다양한 로딩 스피너 애니메이션을 확인해보세요
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("css")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === "css"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              CSS 스피너
            </button>
            <button
              onClick={() => setActiveTab("framer")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === "framer"
                  ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Framer Motion
            </button>
          </div>
        </div>

        {/* CSS Spinner Section */}
        {activeTab === "css" && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spinnerVariants.map((variant, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {variant.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {variant.description}
                  </p>

                  {/* Spinner Demo Area */}
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-4 min-h-[200px] flex items-center justify-center">
                    <div className="text-blue-600 dark:text-blue-400">
                      <Spinner variant={variant.variant} size="lg" />
                    </div>
                  </div>

                  {/* Size Variants */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      Size Variants:
                    </p>
                    <div className="flex items-center justify-around text-blue-600 dark:text-blue-400">
                      <div className="flex flex-col items-center gap-2">
                        <Spinner variant={variant.variant} size="sm" />
                        <span className="text-xs text-gray-500">sm</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Spinner variant={variant.variant} size="md" />
                        <span className="text-xs text-gray-500">md</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Spinner variant={variant.variant} size="lg" />
                        <span className="text-xs text-gray-500">lg</span>
                      </div>
                    </div>
                  </div>

                  {/* Code Display */}
                  <div className="mt-4 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-green-400">
                      {`<Spinner variant="${variant.variant}" size="md" />`}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Framer Motion Section */}
        {activeTab === "framer" && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {framerVariants.map((variant, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {variant.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {variant.description}
                  </p>

                  {/* Animation Demo Area */}
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-4 min-h-[200px] flex items-center justify-center">
                    {variant.component}
                  </div>

                  {/* Code Display */}
                  <div className="mt-4 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-purple-400 whitespace-pre">
                      {variant.code}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Usage Guide */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            사용 방법
          </p>

          {/* CSS Spinner Usage */}
          {activeTab === "css" && (
            <div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>1. Spinner 컴포넌트를 import합니다.</p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <code className="text-sm">
                    {`import { Spinner } from "@/components/ui/spinner";`}
                  </code>
                </div>
                <p>2. 원하는 variant와 size로 사용합니다.</p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mt-4">
                  <code className="text-sm whitespace-pre">
                    {`<Spinner variant="default" size="md" />
<Spinner variant="dots" size="lg" />
<Spinner variant="ring" size="sm" />`}
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold">
                    💡 스피너 활용 팁
                  </p>
                  <ul className="list-disc list-inside mt-2 text-blue-700 dark:text-blue-400 space-y-1">
                    <li>데이터 로딩 중 사용자에게 피드백을 제공하세요</li>
                    <li>버튼 내부에 넣어 로딩 상태를 표시할 수 있습니다</li>
                    <li>className prop으로 색상을 커스터마이징하세요</li>
                    <li>
                      작은 크기는 인라인, 큰 크기는 전체 화면 로딩에 사용하세요
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Framer Motion Usage */}
          {activeTab === "framer" && (
            <div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>1. framer-motion을 설치합니다:</p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <code className="text-sm">npm install framer-motion</code>
                </div>
                <p>2. motion 컴포넌트를 import하고 사용합니다:</p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <code className="text-sm whitespace-pre">
                    {`import { motion } from "framer-motion";

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }}
>
  스피너 내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mt-4">
                  <p className="text-purple-800 dark:text-purple-300 font-semibold">
                    💡 Framer Motion 스피너 커스터마이징
                  </p>
                  <ul className="list-disc list-inside mt-2 text-purple-700 dark:text-purple-400 space-y-1">
                    <li>repeat: Infinity로 무한 반복 애니메이션을 만드세요</li>
                    <li>delay 값을 조절하여 순차적 애니메이션을 구현하세요</li>
                    <li>ease 타입으로 애니메이션 느낌을 바꿀 수 있습니다</li>
                    <li>여러 속성을 조합하여 독특한 스피너를 만들어보세요</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
