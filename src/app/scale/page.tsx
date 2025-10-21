"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const scaleVariants = [
  {
    title: "Scale In",
    description: "작은 크기에서 커지며 나타남",
    className: "animate-scale-in",
  },
  {
    title: "Scale Out",
    description: "커지다가 사라짐",
    className: "animate-scale-out",
  },
  {
    title: "Scale Up",
    description: "크기가 커짐",
    className: "animate-scale-up",
  },
  {
    title: "Scale Down",
    description: "크기가 작아짐",
    className: "animate-scale-down",
  },
  {
    title: "Pulse",
    description: "맥박처럼 반복적인 크기 변화",
    className: "animate-pulse-scale",
    infinite: true,
  },
  {
    title: "Heartbeat",
    description: "심장박동 같은 효과",
    className: "animate-heartbeat",
    infinite: true,
  },
];

const framerVariants = [
  {
    title: "Scale In",
    description: "작은 크기에서 커지며 나타남",
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    code: `initial={{ scale: 0, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5 }}`,
  },
  {
    title: "Scale Out",
    description: "커지다가 사라짐",
    initial: { scale: 1, opacity: 1 },
    animate: { scale: 0, opacity: 0 },
    code: `initial={{ scale: 1, opacity: 1 }}
animate={{ scale: 0, opacity: 0 }}
transition={{ duration: 0.5 }}`,
  },
  {
    title: "Scale Up",
    description: "크기가 커짐",
    initial: { scale: 1 },
    animate: { scale: 1.5 },
    code: `initial={{ scale: 1 }}
animate={{ scale: 1.5 }}
transition={{ duration: 0.5 }}`,
  },
  {
    title: "Scale Down",
    description: "크기가 작아짐",
    initial: { scale: 1 },
    animate: { scale: 0.5 },
    code: `initial={{ scale: 1 }}
animate={{ scale: 0.5 }}
transition={{ duration: 0.5 }}`,
  },
  {
    title: "Spring Scale",
    description: "스프링 효과로 나타남",
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
    code: `initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}`,
  },
  {
    title: "Elastic Scale",
    description: "탄성있는 크기 변화",
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring" as const, stiffness: 100, damping: 10 },
    code: `initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10 
            }}`,
  },
];

export default function ScalePage() {
  const [activeTab, setActiveTab] = useState<"css" | "framer">("css");
  const [activeAnimations, setActiveAnimations] = useState<Set<number>>(
    new Set()
  );
  const [activeFramerAnimations, setActiveFramerAnimations] = useState<
    Set<number>
  >(new Set());

  const toggleAnimation = (index: number, infinite?: boolean) => {
    if (infinite) {
      // 무한 애니메이션은 토글만
      setActiveAnimations((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    } else {
      setActiveAnimations((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });

      // 애니메이션 재실행을 위해 잠시 후 제거
      setTimeout(() => {
        setActiveAnimations((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }, 500);
    }
  };

  const toggleFramerAnimation = (index: number) => {
    setActiveFramerAnimations((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });

    // 애니메이션 재실행을 위해 잠시 후 제거
    setTimeout(() => {
      setActiveFramerAnimations((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button & Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6"
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
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Scale 애니메이션
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            크기 변환 효과를 확인해보세요
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("css")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === "css"
                  ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              CSS 애니메이션
            </button>
            <button
              onClick={() => setActiveTab("framer")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === "framer"
                  ? "text-pink-600 dark:text-pink-400 border-b-2 border-pink-600 dark:border-pink-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Framer Motion
            </button>
          </div>
        </div>

        {/* CSS Animation Section */}
        {activeTab === "css" && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scaleVariants.map((variant, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {variant.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {variant.description}
                  </p>

                  {/* Animation Demo Area */}
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-4 min-h-[200px] flex items-center justify-center">
                    {activeAnimations.has(index) && (
                      <div
                        key={`anim-${index}-${Date.now()}`}
                        className={`${variant.className} bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white font-semibold`}
                      >
                        크기
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => toggleAnimation(index, variant.infinite)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    {variant.infinite
                      ? activeAnimations.has(index)
                        ? "중지"
                        : "재생"
                      : "재생"}
                  </button>

                  {/* Code Display */}
                  <div className="mt-4 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-green-400">
                      className=&quot;{variant.className}&quot;
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
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {variant.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {variant.description}
                  </p>

                  {/* Animation Demo Area */}
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-4 min-h-[200px] flex items-center justify-center">
                    {activeFramerAnimations.has(index) && (
                      <motion.div
                        key={`framer-${index}-${Date.now()}`}
                        initial={variant.initial}
                        animate={variant.animate}
                        transition={variant.transition}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-6 text-white font-semibold"
                      >
                        크기
                      </motion.div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => toggleFramerAnimation(index)}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    재생
                  </button>

                  {/* Code Display */}
                  <div className="mt-4 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-pink-400 whitespace-pre">
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
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            사용 방법
          </h2>

          {/* CSS Animation Usage */}
          {activeTab === "css" && (
            <div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>1. 원하는 애니메이션의 className을 복사합니다.</p>
                <p>
                  2. 애니메이션을 적용하고 싶은 요소에 className을 추가합니다.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mt-4">
                  <code className="text-sm">
                    {`<div className="animate-scale-in">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mt-4">
                  <p className="text-green-800 dark:text-green-300 font-semibold">
                    💡 Scale 애니메이션 팁
                  </p>
                  <ul className="list-disc list-inside mt-2 text-green-700 dark:text-green-400 space-y-1">
                    <li>버튼이나 카드 호버 효과에 활용하기 좋습니다</li>
                    <li>Pulse와 Heartbeat은 주목을 끄는 요소에 사용하세요</li>
                    <li>
                      transform-origin을 조절하여 변환 중심점을 변경할 수
                      있습니다
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
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5 }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold">
                    💡 Spring 효과 활용하기
                  </p>
                  <p className="mt-2 text-blue-700 dark:text-blue-400">
                    <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                      type: &quot;spring&quot;
                    </code>
                    을 사용하면 물리 기반의 자연스러운 애니메이션을 만들 수
                    있습니다. stiffness(강성)와 damping(감쇠)을 조절하여 다양한
                    효과를 연출하세요!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
