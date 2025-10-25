"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const shakeVariants = [
  {
    title: "Shake Normal",
    description: "일반 흔들기",
    className: "animate-shake",
  },
  {
    title: "Shake Infinite",
    description: "무한 흔들기",
    className: "animate-shake-infinite",
    infinite: true,
  },
  {
    title: "Shake Soft",
    description: "부드러운 흔들기",
    className: "animate-shake-soft",
  },
  {
    title: "Shake Strong",
    description: "강한 흔들기",
    className: "animate-shake-strong",
  },
  {
    title: "Shake Vertical",
    description: "세로 흔들기",
    className: "animate-shake-vertical",
  },
  {
    title: "Shake Rotate",
    description: "회전 흔들기",
    className: "animate-shake-rotate",
  },
  {
    title: "Shake Crazy",
    description: "격렬한 흔들기",
    className: "animate-shake-crazy",
  },
  {
    title: "Shake Opacity",
    description: "투명도 흔들기",
    className: "animate-shake-opacity",
  },
];

const framerVariants = [
  {
    title: "Shake Normal",
    description: "일반 흔들기",
    initial: { x: 0 },
    animate: { x: [-10, 10, -10, 10, -10, 10, 0] },
    transition: { duration: 0.5, ease: "easeInOut" as const },
    code: `initial={{ x: 0 }}
animate={{ x: [-10, 10, -10, 10, -10, 10, 0] }}
transition={{ duration: 0.5, ease: "easeInOut" }}`,
  },
  {
    title: "Shake Soft",
    description: "부드러운 흔들기",
    initial: { x: 0 },
    animate: { x: [-5, 5, -5, 5, -5, 5, 0] },
    transition: { duration: 0.5, ease: "easeInOut" as const },
    code: `initial={{ x: 0 }}
animate={{ x: [-5, 5, -5, 5, -5, 5, 0] }}
transition={{ duration: 0.5, ease: "easeInOut" }}`,
  },
  {
    title: "Shake Strong",
    description: "강한 흔들기",
    initial: { x: 0 },
    animate: { x: [-15, 15, -15, 15, -15, 15, 0] },
    transition: { duration: 0.5, ease: "easeInOut" as const },
    code: `initial={{ x: 0 }}
animate={{ x: [-15, 15, -15, 15, -15, 15, 0] }}
transition={{ duration: 0.5, ease: "easeInOut" }}`,
  },
  {
    title: "Shake Vertical",
    description: "세로 흔들기",
    initial: { y: 0 },
    animate: { y: [-10, 10, -10, 10, -10, 10, 0] },
    transition: { duration: 0.5, ease: "easeInOut" as const },
    code: `initial={{ y: 0 }}
animate={{ y: [-10, 10, -10, 10, -10, 10, 0] }}
transition={{ duration: 0.5, ease: "easeInOut" }}`,
  },
  {
    title: "Shake Rotate",
    description: "회전 흔들기",
    initial: { rotate: 0 },
    animate: { rotate: [-5, 5, -5, 5, -5, 5, 0] },
    transition: { duration: 0.5, ease: "easeInOut" as const },
    code: `initial={{ rotate: 0 }}
animate={{ rotate: [-5, 5, -5, 5, -5, 5, 0] }}
transition={{ duration: 0.5, ease: "easeInOut" }}`,
  },
  {
    title: "Shake Crazy",
    description: "격렬한 흔들기",
    initial: { x: 0, y: 0, rotate: 0 },
    animate: {
      x: [-10, 10, -8, 8, -10, 10, -5, 5, 0],
      y: [-5, 5, 8, -8, 5, -5, 10, -10, 0],
      rotate: [-5, 5, -3, 3, -5, 5, -2, 2, 0],
    },
    transition: { duration: 0.6, ease: "easeInOut" as const },
    code: `initial={{ x: 0, y: 0, rotate: 0 }}
animate={{ 
  x: [-10, 10, -8, 8, -10, 10, -5, 5, 0],
  y: [-5, 5, 8, -8, 5, -5, 10, -10, 0],
  rotate: [-5, 5, -3, 3, -5, 5, -2, 2, 0]
}}
transition={{ duration: 0.6, ease: "easeInOut" }}`,
  },
  {
    title: "Shake Opacity",
    description: "투명도 흔들기",
    initial: { x: 0, opacity: 1 },
    animate: {
      x: [-10, 10, -10, 10, -10, 10, 0],
      opacity: [0.8, 1, 0.8, 1, 0.8, 1, 1],
    },
    transition: { duration: 0.5, ease: "easeInOut" as const },
    code: `initial={{ x: 0, opacity: 1 }}
animate={{ 
  x: [-10, 10, -10, 10, -10, 10, 0],
  opacity: [0.8, 1, 0.8, 1, 0.8, 1, 1]
}}
transition={{ duration: 0.5, ease: "easeInOut" }}`,
  },
  //   {
  //     title: "Shake Spring",
  //     description: "스프링 흔들기",
  //     initial: { x: 0 },
  //     animate: { x: -20 },
  //     transition: {
  //       type: "spring" as const,
  //       stiffness: 500,
  //       damping: 5,
  //     },
  //     code: `initial={{ x: 0 }}
  // animate={{ x: -20 }}
  // transition={{
  //   type: "spring",
  //   stiffness: 500,
  //   damping: 5
  // }}`,
  //   },
];

export default function ShakePage() {
  const [activeTab, setActiveTab] = useState<"css" | "framer">("css");
  const [activeAnimations, setActiveAnimations] = useState<Set<number>>(
    new Set()
  );
  const [activeFramerAnimations, setActiveFramerAnimations] = useState<
    Set<number>
  >(new Set());

  const toggleAnimation = (index: number, infinite?: boolean) => {
    if (infinite) {
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

      setTimeout(() => {
        setActiveAnimations((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }, 600);
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

    setTimeout(() => {
      setActiveFramerAnimations((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8">
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
            Shake 애니메이션
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            강렬한 흔들기 효과를 확인해보세요
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
              {shakeVariants.map((variant, index) => (
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
                        className={`${variant.className} bg-linear-to-r from-red-500 to-pink-500 rounded-lg p-6 text-white font-semibold`}
                      >
                        흔들기
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => toggleAnimation(index, variant.infinite)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
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
                        className="bg-linear-to-r from-red-500 to-pink-500 rounded-lg p-6 text-white font-semibold"
                      >
                        흔들기
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
                    {`<div className="animate-shake">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mt-4">
                  <p className="text-red-800 dark:text-red-300 font-semibold">
                    💡 흔들기 효과 활용하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-red-700 dark:text-red-400 space-y-1">
                    <li>입력 오류나 경고 메시지에 shake 효과를 사용하세요</li>
                    <li>사용자의 주의를 끌어야 할 때 강력한 효과를 줍니다</li>
                    <li>비밀번호 오류 등 중요한 피드백에 활용하세요</li>
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
  initial={{ x: 0 }}
  animate={{ x: [-10, 10, -10, 10, -10, 10, 0] }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 mt-4">
                  <p className="text-pink-800 dark:text-pink-300 font-semibold">
                    💡 흔들기 파라미터 조절하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-pink-700 dark:text-pink-400 space-y-1">
                    <li>배열의 값 크기로 흔들림의 강도를 조절하세요</li>
                    <li>
                      x, y, rotate를 동시에 사용하면 복잡한 흔들림을 만듭니다
                    </li>
                    <li>duration을 짧게 하면 더 빠르고 강렬해집니다</li>
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
