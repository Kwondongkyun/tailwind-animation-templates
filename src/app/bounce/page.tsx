"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const bounceVariants = [
  {
    title: "Bounce In",
    description: "바운스하며 나타남",
    className: "animate-bounce-in",
  },
  {
    title: "Bounce Out",
    description: "바운스하며 사라짐",
    className: "animate-bounce-out",
  },
  {
    title: "Bounce Up",
    description: "위아래로 바운스",
    className: "animate-bounce-up",
    infinite: true,
  },
  {
    title: "Bounce Down",
    description: "아래위로 바운스",
    className: "animate-bounce-down",
    infinite: true,
  },
  {
    title: "Bounce Left",
    description: "좌우로 바운스 (왼쪽)",
    className: "animate-bounce-left",
    infinite: true,
  },
  {
    title: "Bounce Right",
    description: "좌우로 바운스 (오른쪽)",
    className: "animate-bounce-right",
    infinite: true,
  },
  {
    title: "Elastic Bounce",
    description: "탄성 바운스 효과",
    className: "animate-elastic-bounce",
  },
];

const framerVariants = [
  {
    title: "Bounce In",
    description: "바운스하며 나타남",
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
    code: `initial={{ scale: 0, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ 
  type: "spring", 
  stiffness: 400, 
  damping: 10 
}}`,
  },
  {
    title: "Bounce Up",
    description: "위로 튕기기",
    initial: { y: 0 },
    animate: { y: [0, -30, 0, -15, 0] },
    transition: { duration: 0.8 },
    code: `initial={{ y: 0 }}
animate={{ y: [0, -30, 0, -15, 0] }}
transition={{ duration: 0.8 }}`,
  },
  {
    title: "Bounce Down",
    description: "아래로 튕기기",
    initial: { y: 0 },
    animate: { y: [0, 30, 0, 15, 0] },
    transition: { duration: 0.8 },
    code: `initial={{ y: 0 }}
animate={{ y: [0, 30, 0, 15, 0] }}
transition={{ duration: 0.8 }}`,
  },
  {
    title: "Bounce Scale",
    description: "크기 바운스",
    initial: { scale: 1 },
    animate: { scale: [1, 1.3, 0.9, 1.1, 1] },
    transition: { duration: 0.8 },
    code: `initial={{ scale: 1 }}
animate={{ scale: [1, 1.3, 0.9, 1.1, 1] }}
transition={{ duration: 0.8 }}`,
  },
  {
    title: "Bounce Rotate",
    description: "회전 바운스",
    initial: { rotate: 0 },
    animate: { rotate: [0, 10, -10, 5, -5, 0] },
    transition: { duration: 0.6 },
    code: `initial={{ rotate: 0 }}
animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Elastic Bounce",
    description: "탄성 바운스 효과",
    initial: { scale: 0, y: 0 },
    animate: { scale: 1, y: 0 },
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 5,
    },
    code: `initial={{ scale: 0, y: 0 }}
animate={{ scale: 1, y: 0 }}
transition={{ 
  type: "spring", 
  stiffness: 200, 
  damping: 5 
}}`,
  },
];

export default function BouncePage() {
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
      }, 1000);
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
    <div className="min-h-screen bg-white p-8">
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
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Bounce 애니메이션
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            탄력있는 바운스 효과를 확인해보세요
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
              {bounceVariants.map((variant, index) => (
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
                    {activeAnimations.has(index) && (
                      <div
                        key={`anim-${index}-${Date.now()}`}
                        className={`${variant.className} bg-linear-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white font-semibold`}
                      >
                        바운스
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
                  <p className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {variant.title}
                  </p>
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
                        className="bg-linear-to-r from-pink-500 to-purple-500 rounded-lg p-6 text-white font-semibold"
                      >
                        바운스
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
          <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            사용 방법
          </p>

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
                    {`<div className="animate-bounce-in">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 mt-4">
                  <p className="text-orange-800 dark:text-orange-300 font-semibold">
                    💡 바운스 효과 활용하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-orange-700 dark:text-orange-400 space-y-1">
                    <li>
                      버튼 클릭 피드백이나 알림 메시지에 바운스 효과를 적용하면
                      좋습니다
                    </li>
                    <li>
                      무한 반복 애니메이션은 주의를 끌어야 하는 요소에
                      사용하세요
                    </li>
                    <li>Elastic Bounce는 등장 효과로 활용하면 효과적입니다</li>
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
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ 
    type: "spring", 
    stiffness: 400, 
    damping: 10 
  }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold">
                    💡 Spring 파라미터 조절하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-blue-700 dark:text-blue-400 space-y-1">
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        stiffness
                      </code>
                      : 높을수록 더 빠르고 강한 바운스 (기본: 100)
                    </li>
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        damping
                      </code>
                      : 낮을수록 더 많이 튕김 (기본: 10)
                    </li>
                    <li>
                      배열을 사용하여 keyframes 애니메이션을 만들 수 있습니다
                    </li>
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
