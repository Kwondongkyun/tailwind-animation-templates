"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const rotateVariants = [
  {
    title: "Rotate",
    description: "360도 회전",
    className: "animate-rotate",
  },
  {
    title: "Rotate In",
    description: "회전하며 나타남",
    className: "animate-rotate-in",
  },
  {
    title: "Rotate Out",
    description: "회전하며 사라짐",
    className: "animate-rotate-out",
  },
  {
    title: "Rotate Scale",
    description: "회전하며 크기 변화",
    className: "animate-rotate-scale",
  },
  {
    title: "Flip Horizontal",
    description: "수평으로 뒤집기",
    className: "animate-flip",
  },
  {
    title: "Flip Vertical",
    description: "수직으로 뒤집기",
    className: "animate-flip-vertical",
  },
];

const framerVariants = [
  {
    title: "Rotate 360",
    description: "360도 회전",
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    code: `initial={{ rotate: 0 }}
animate={{ rotate: 360 }}
transition={{ duration: 1 }}`,
  },
  {
    title: "Rotate In",
    description: "회전하며 나타남",
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    code: `initial={{ rotate: -180, opacity: 0 }}
animate={{ rotate: 0, opacity: 1 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Rotate Out",
    description: "회전하며 사라짐",
    initial: { rotate: 0, opacity: 1 },
    animate: { rotate: 180, opacity: 0 },
    code: `initial={{ rotate: 0, opacity: 1 }}
animate={{ rotate: 180, opacity: 0 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "Rotate Scale",
    description: "회전하며 크기 변화",
    initial: { rotate: 0, scale: 0.5, opacity: 0 },
    animate: { rotate: 360, scale: 1, opacity: 1 },
    code: `initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
animate={{ rotate: 360, scale: 1, opacity: 1 }}
transition={{ duration: 0.8 }}`,
  },
  {
    title: "3D Flip Y",
    description: "3D Y축 회전",
    initial: { rotateY: 0 },
    animate: { rotateY: 360 },
    code: `initial={{ rotateY: 0 }}
animate={{ rotateY: 360 }}
transition={{ duration: 0.6 }}`,
  },
  {
    title: "3D Flip X",
    description: "3D X축 회전",
    initial: { rotateX: 0 },
    animate: { rotateX: 360 },
    code: `initial={{ rotateX: 0 }}
animate={{ rotateX: 360 }}
transition={{ duration: 0.6 }}`,
  },
];

export default function RotatePage() {
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
    }, 1000);
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
            Rotate 애니메이션
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            회전 및 플립 효과를 확인해보세요
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
              {rotateVariants.map((variant, index) => (
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
                        회전
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
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-4 min-h-[200px] flex items-center justify-center perspective-[1000px]">
                    {activeFramerAnimations.has(index) && (
                      <motion.div
                        key={`framer-${index}-${Date.now()}`}
                        initial={variant.initial}
                        animate={variant.animate}
                        transition={{ duration: index === 0 ? 1 : 0.6 }}
                        className="bg-linear-to-r from-pink-500 to-purple-500 rounded-lg p-6 text-white font-semibold"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        회전
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
                    {`<div className="animate-rotate">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mt-4">
                  <p className="text-purple-800 dark:text-purple-300 font-semibold">
                    💡 3D 회전 효과
                  </p>
                  <p className="mt-2 text-purple-700 dark:text-purple-400">
                    Flip 애니메이션은 perspective를 사용한 3D 효과입니다. 부모
                    요소에{" "}
                    <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                      perspective: 400px
                    </code>
                    를 설정하면 더욱 입체적인 효과를 얻을 수 있습니다.
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
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ duration: 1 }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold">
                    💡 3D 회전 활용하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-blue-700 dark:text-blue-400 space-y-1">
                    <li>
                      rotateX, rotateY, rotateZ로 각 축 회전을 제어할 수
                      있습니다
                    </li>
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        transformStyle: &quot;preserve-3d&quot;
                      </code>
                      로 3D 효과 유지
                    </li>
                    <li>카드 뒤집기 효과 구현에 활용하기 좋습니다</li>
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
