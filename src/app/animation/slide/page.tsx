"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const slideVariants = [
  {
    title: "Slide In Up",
    description: "아래에서 위로 슬라이드",
    className: "animate-slide-in-up",
  },
  {
    title: "Slide In Down",
    description: "위에서 아래로 슬라이드",
    className: "animate-slide-in-down",
  },
  {
    title: "Slide In Left",
    description: "왼쪽에서 오른쪽으로 슬라이드",
    className: "animate-slide-in-left",
  },
  {
    title: "Slide In Right",
    description: "오른쪽에서 왼쪽으로 슬라이드",
    className: "animate-slide-in-right",
  },
  {
    title: "Slide Out Up",
    description: "위로 슬라이드 아웃",
    className: "animate-slide-out-up",
  },
  {
    title: "Slide Out Down",
    description: "아래로 슬라이드 아웃",
    className: "animate-slide-out-down",
  },
  {
    title: "Slide Out Left",
    description: "왼쪽으로 슬라이드 아웃",
    className: "animate-slide-out-left",
  },
  {
    title: "Slide Out Right",
    description: "오른쪽으로 슬라이드 아웃",
    className: "animate-slide-out-right",
  },
];

const framerVariants = [
  {
    title: "Slide In Up",
    description: "아래에서 위로 슬라이드",
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    code: `initial={{ y: "100%", opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Slide In Down",
    description: "위에서 아래로 슬라이드",
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    code: `initial={{ y: "-100%", opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Slide In Left",
    description: "왼쪽에서 오른쪽으로 슬라이드",
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    code: `initial={{ x: "-100%", opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Slide In Right",
    description: "오른쪽에서 왼쪽으로 슬라이드",
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    code: `initial={{ x: "100%", opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Slide Out Up",
    description: "위로 슬라이드 아웃",
    initial: { y: 0, opacity: 1 },
    animate: { y: "-100%", opacity: 0 },
    code: `initial={{ y: 0, opacity: 1 }}
animate={{ y: "-100%", opacity: 0 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Slide Out Down",
    description: "아래로 슬라이드 아웃",
    initial: { y: 0, opacity: 1 },
    animate: { y: "100%", opacity: 0 },
    code: `initial={{ y: 0, opacity: 1 }}
animate={{ y: "100%", opacity: 0 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Slide Out Left",
    description: "왼쪽으로 슬라이드 아웃",
    initial: { x: 0, opacity: 1 },
    animate: { x: "-100%", opacity: 0 },
    code: `initial={{ x: 0, opacity: 1 }}
animate={{ x: "-100%", opacity: 0 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Slide Out Right",
    description: "오른쪽으로 슬라이드 아웃",
    initial: { x: 0, opacity: 1 },
    animate: { x: "100%", opacity: 0 },
    code: `initial={{ x: 0, opacity: 1 }}
animate={{ x: "100%", opacity: 0 }}
transition={{ duration: 0.6 }}`,
  },
];

export default function SlidePage() {
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

    // 애니메이션 재실행을 위해 잠시 후 제거
    setTimeout(() => {
      setActiveAnimations((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 600);
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
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button & Header */}
        <div className="mb-8">
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Slide 애니메이션
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            다양한 방향의 슬라이드 효과를 확인해보세요
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
              {slideVariants.map((variant, index) => (
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
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-4 min-h-[200px] flex items-center justify-center overflow-hidden">
                    {activeAnimations.has(index) && (
                      <div
                        key={`anim-${index}-${Date.now()}`}
                        className={`${variant.className} bg-linear-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white font-semibold`}
                      >
                        슬라이드
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => toggleAnimation(index)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
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
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-4 min-h-[200px] flex items-center justify-center overflow-hidden">
                    {activeFramerAnimations.has(index) && (
                      <motion.div
                        key={`framer-${index}-${Date.now()}`}
                        initial={variant.initial}
                        animate={variant.animate}
                        transition={{ duration: 0.6 }}
                        className="bg-linear-to-r from-pink-500 to-purple-500 rounded-lg p-6 text-white font-semibold"
                      >
                        슬라이드
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
                    {`<div className="animate-slide-in-up">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-4">
                  <p className="text-amber-800 dark:text-amber-300 font-semibold">
                    💡 팁
                  </p>
                  <p className="mt-2 text-amber-700 dark:text-amber-400">
                    슬라이드 애니메이션을 사용할 때는 부모 요소에{" "}
                    <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">
                      overflow-hidden
                    </code>
                    을 추가하면 더 깔끔한 효과를 얻을 수 있습니다.
                  </p>
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
  initial={{ y: "100%", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold">
                    💡 Framer Motion으로 더 많은 것을
                  </p>
                  <ul className="list-disc list-inside mt-2 text-blue-700 dark:text-blue-400 space-y-1">
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        type: &quot;spring&quot;
                      </code>
                      으로 자연스러운 스프링 효과 추가
                    </li>
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        whileHover
                      </code>
                      로 호버 시 애니메이션 추가 가능
                    </li>
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        staggerChildren
                      </code>
                      으로 순차적인 애니메이션 구현
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
