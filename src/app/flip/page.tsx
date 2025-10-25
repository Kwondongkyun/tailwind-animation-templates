"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const flipVariants = [
  {
    title: "Flip Horizontal",
    description: "가로 뒤집기",
    className: "animate-flip-horizontal",
  },
  {
    title: "Flip Vertical",
    description: "세로 뒤집기",
    className: "animate-flip-vertical",
  },
  {
    title: "Flip Diagonal",
    description: "대각선 뒤집기",
    className: "animate-flip-diagonal",
  },
  {
    title: "Flip In",
    description: "뒤집으며 나타남",
    className: "animate-flip-in",
  },
  {
    title: "Flip Out",
    description: "뒤집으며 사라짐",
    className: "animate-flip-out",
  },
  {
    title: "Flip In X",
    description: "X축 뒤집으며 나타남",
    className: "animate-flip-in-x",
  },
  {
    title: "Flip Scale",
    description: "크기 변화 뒤집기",
    className: "animate-flip-scale",
  },
];

const framerVariants = [
  {
    title: "Flip Horizontal",
    description: "가로 뒤집기",
    initial: { rotateY: 0 },
    animate: { rotateY: 360 },
    transition: { duration: 0.6, ease: "easeInOut" as const },
    code: `initial={{ rotateY: 0 }}
animate={{ rotateY: 360 }}
transition={{ duration: 0.6, ease: "easeInOut" }}`,
  },
  {
    title: "Flip Vertical",
    description: "세로 뒤집기",
    initial: { rotateX: 0 },
    animate: { rotateX: 360 },
    transition: { duration: 0.6, ease: "easeInOut" as const },
    code: `initial={{ rotateX: 0 }}
animate={{ rotateX: 360 }}
transition={{ duration: 0.6, ease: "easeInOut" }}`,
  },
  {
    title: "Flip In",
    description: "뒤집으며 나타남",
    initial: { rotateY: -90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    code: `initial={{ rotateY: -90, opacity: 0 }}
animate={{ rotateY: 0, opacity: 1 }}
transition={{ duration: 0.6, ease: "easeOut" }}`,
  },
  {
    title: "Flip Out",
    description: "뒤집으며 사라짐",
    initial: { rotateY: 0, opacity: 1 },
    animate: { rotateY: 90, opacity: 0 },
    transition: { duration: 0.6, ease: "easeIn" as const },
    code: `initial={{ rotateY: 0, opacity: 1 }}
animate={{ rotateY: 90, opacity: 0 }}
transition={{ duration: 0.6, ease: "easeIn" }}`,
  },
  {
    title: "Flip Scale",
    description: "크기 변화 뒤집기",
    initial: { rotateY: 0, scale: 1 },
    animate: { rotateY: [0, 180, 360], scale: [1, 1.2, 1] },
    transition: { duration: 0.8, ease: "easeInOut" as const },
    code: `initial={{ rotateY: 0, scale: 1 }}
animate={{ rotateY: [0, 180, 360], scale: [1, 1.2, 1] }}
transition={{ duration: 0.8, ease: "easeInOut" }}`,
  },
  {
    title: "Flip Both",
    description: "양방향 뒤집기",
    initial: { rotateX: 0, rotateY: 0 },
    animate: { rotateX: 360, rotateY: 360 },
    transition: { duration: 1, ease: "easeInOut" as const },
    code: `initial={{ rotateX: 0, rotateY: 0 }}
animate={{ rotateX: 360, rotateY: 360 }}
transition={{ duration: 1, ease: "easeInOut" }}`,
  },
];

export default function FlipPage() {
  const [activeTab, setActiveTab] = useState<"css" | "framer">("css");
  const [activeAnimations, setActiveAnimations] = useState<Set<number>>(
    new Set()
  );
  const [activeFramerAnimations, setActiveFramerAnimations] = useState<
    Set<number>
  >(new Set());

  const toggleAnimation = (index: number) => {
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
    }, 800);
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
    }, 1000);
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
            Flip 애니메이션
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            3D 뒤집기 효과를 확인해보세요
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
              {flipVariants.map((variant, index) => (
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
                        className={`${variant.className} bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg p-6 text-white font-semibold`}
                      >
                        뒤집기
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => toggleAnimation(index)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    재생
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
                        style={{ transformStyle: "preserve-3d" }}
                        className="bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg p-6 text-white font-semibold"
                      >
                        뒤집기
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
                    {`<div className="animate-flip-horizontal">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 mt-4">
                  <p className="text-indigo-800 dark:text-indigo-300 font-semibold">
                    💡 뒤집기 효과 활용하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-indigo-700 dark:text-indigo-400 space-y-1">
                    <li>카드 뒤집기 효과나 이미지 갤러리에 활용하세요</li>
                    <li>정보 공개/숨김 인터랙션에 사용하면 좋습니다</li>
                    <li>3D 효과로 입체감있는 UI를 만들 수 있습니다</li>
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
  initial={{ rotateY: 0 }}
  animate={{ rotateY: 360 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mt-4">
                  <p className="text-purple-800 dark:text-purple-300 font-semibold">
                    💡 3D 회전 파라미터
                  </p>
                  <ul className="list-disc list-inside mt-2 text-purple-700 dark:text-purple-400 space-y-1">
                    <li>
                      <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-xs">
                        rotateX
                      </code>
                      : X축 회전 (세로 뒤집기)
                    </li>
                    <li>
                      <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-xs">
                        rotateY
                      </code>
                      : Y축 회전 (가로 뒤집기)
                    </li>
                    <li>
                      transformStyle: &quot;preserve-3d&quot;로 3D 효과를
                      유지하세요
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
