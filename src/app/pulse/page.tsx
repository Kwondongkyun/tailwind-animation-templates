"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const pulseVariants = [
  {
    title: "Pulse Normal",
    description: "일반 펄스",
    className: "animate-pulse-normal",
  },
  {
    title: "Pulse Infinite",
    description: "무한 펄스",
    className: "animate-pulse-infinite",
    infinite: true,
  },
  {
    title: "Pulse Soft",
    description: "부드러운 펄스",
    className: "animate-pulse-soft",
    infinite: true,
  },
  {
    title: "Pulse Strong",
    description: "강한 펄스",
    className: "animate-pulse-strong",
    infinite: true,
  },
  {
    title: "Pulse Glow",
    description: "빛나는 펄스",
    className: "animate-pulse-glow",
    infinite: true,
  },
  {
    title: "Pulse Shadow",
    description: "그림자 펄스",
    className: "animate-pulse-shadow",
    infinite: true,
  },
  {
    title: "Pulse Ring",
    description: "링 펄스",
    className: "animate-pulse-ring",
    infinite: true,
  },
];

const framerVariants = [
  {
    title: "Pulse Normal",
    description: "일반 펄스",
    initial: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 1.5, ease: "easeInOut" as const },
    code: `initial={{ scale: 1, opacity: 1 }}
animate={{ scale: [1, 1.15, 1], opacity: [1, 0.8, 1] }}
transition={{ duration: 1.5, ease: "easeInOut" }}`,
  },
  {
    title: "Pulse Soft",
    description: "부드러운 펄스",
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 2, ease: "easeInOut" as const },
    code: `initial={{ scale: 1 }}
animate={{ scale: [1, 1.05, 1] }}
transition={{ duration: 2, ease: "easeInOut" }}`,
  },
  {
    title: "Pulse Strong",
    description: "강한 펄스",
    initial: { scale: 1 },
    animate: { scale: [1, 1.3, 1] },
    transition: { duration: 1, ease: "easeInOut" as const },
    code: `initial={{ scale: 1 }}
animate={{ scale: [1, 1.3, 1] }}
transition={{ duration: 1, ease: "easeInOut" }}`,
  },
  {
    title: "Pulse Opacity",
    description: "투명도 펄스",
    initial: { opacity: 1 },
    animate: { opacity: [1, 0.5, 1] },
    transition: { duration: 1.5, ease: "easeInOut" as const },
    code: `initial={{ opacity: 1 }}
animate={{ opacity: [1, 0.5, 1] }}
transition={{ duration: 1.5, ease: "easeInOut" }}`,
  },
  {
    title: "Pulse Heartbeat",
    description: "심장박동 펄스",
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 1, 1.1, 1] },
    transition: { duration: 1.3, ease: "easeInOut" as const },
    code: `initial={{ scale: 1 }}
animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
transition={{ duration: 1.3, ease: "easeInOut" }}`,
  },
  {
    title: "Pulse Spring",
    description: "스프링 펄스",
    initial: { scale: 1 },
    animate: { scale: [1, 1.2, 1] },
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 10,
    },
    code: `initial={{ scale: 1 }}
animate={{ scale: [1, 1.2, 1] }}
transition={{ 
  type: "spring", 
  stiffness: 300, 
  damping: 10 
}}`,
  },
];

export default function PulsePage() {
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
      }, 1500);
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
    }, 1500);
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
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Pulse 애니메이션
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            맥박처럼 뛰는 펄스 효과를 확인해보세요
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
              {pulseVariants.map((variant, index) => (
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
                        className={`${variant.className} bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white font-semibold`}
                      >
                        펄스
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => toggleAnimation(index, variant.infinite)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
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
                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white font-semibold"
                      >
                        펄스
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
                    {`<div className="animate-pulse-normal">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold">
                    💡 펄스 효과 활용하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-blue-700 dark:text-blue-400 space-y-1">
                    <li>알림 배지나 중요한 버튼에 펄스 효과를 적용하세요</li>
                    <li>
                      Pulse Glow와 Shadow는 특별한 강조가 필요한 요소에
                      사용하세요
                    </li>
                    <li>
                      무한 펄스는 실시간 데이터나 라이브 상태 표시에 유용합니다
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
  initial={{ scale: 1, opacity: 1 }}
  animate={{ scale: [1, 1.15, 1], opacity: [1, 0.8, 1] }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 mt-4">
                  <p className="text-pink-800 dark:text-pink-300 font-semibold">
                    💡 펄스 파라미터 조절하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-pink-700 dark:text-pink-400 space-y-1">
                    <li>배열을 사용하여 여러 단계의 크기 변화를 만드세요</li>
                    <li>
                      opacity와 scale을 함께 사용하면 더 부드러운 효과가 됩니다
                    </li>
                    <li>
                      duration을 조절하여 펄스의 속도를 변경할 수 있습니다
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
