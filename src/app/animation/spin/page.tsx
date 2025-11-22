"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const spinVariants = [
  {
    title: "Spin Normal",
    description: "일반 회전",
    className: "animate-spin-normal",
  },
  {
    title: "Spin Infinite",
    description: "무한 회전",
    className: "animate-spin-infinite",
    infinite: true,
  },
  {
    title: "Spin Reverse",
    description: "역방향 회전",
    className: "animate-spin-reverse",
  },
  {
    title: "Spin Scale",
    description: "크기 변화 회전",
    className: "animate-spin-scale",
  },
  {
    title: "Spin Bounce",
    description: "바운스 회전",
    className: "animate-spin-bounce",
  },
  {
    title: "Spin Fade",
    description: "페이드 회전",
    className: "animate-spin-fade",
  },
  {
    title: "Spin 3D",
    description: "3D 회전",
    className: "animate-spin-3d",
  },
];

const framerVariants = [
  {
    title: "Spin Normal",
    description: "일반 회전",
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    transition: { duration: 1, ease: "linear" as const },
    code: `initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "linear" }}`,
  },
  {
    title: "Spin Scale",
    description: "크기 변화 회전",
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 360, scale: [1, 1.3, 1] },
    transition: { duration: 1 },
    code: `initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ duration: 1 }}`,
  },
  {
    title: "Spin Bounce",
    description: "바운스 회전",
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
    code: `initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10 
            }}`,
  },
  {
    title: "Spin Reverse",
    description: "역방향 회전",
    initial: { rotate: 360 },
    animate: { rotate: 0 },
    transition: { duration: 1, ease: "easeInOut" as const },
    code: `initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}`,
  },
  {
    title: "Spin 3D Y",
    description: "Y축 3D 회전",
    initial: { rotateY: 0 },
    animate: { rotateY: 360 },
    transition: { duration: 1 },
    code: `initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 1 }}`,
  },
  {
    title: "Spin 3D X",
    description: "X축 3D 회전",
    initial: { rotateX: 0 },
    animate: { rotateX: 360 },
    transition: { duration: 1 },
    code: `initial={{ rotateX: 0 }}
            animate={{ rotateX: 360 }}
            transition={{ duration: 1 }}`,
  },
];

export default function SpinPage() {
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

    setTimeout(() => {
      setActiveFramerAnimations((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button & Header */}
        <div className="mb-8">
          <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Spin 애니메이션
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            다양한 회전 효과를 확인해보세요
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
              {spinVariants.map((variant, index) => (
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
                        className={`${variant.className} bg-linear-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white font-semibold`}
                      >
                        회전
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => toggleAnimation(index, variant.infinite)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
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
                        className="bg-linear-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white font-semibold"
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
                    {`<div className="animate-spin-normal">
  내용
</div>`}
                  </code>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 mt-4">
                  <p className="text-orange-800 dark:text-orange-300 font-semibold">
                    💡 회전 효과 활용하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-orange-700 dark:text-orange-400 space-y-1">
                    <li>
                      로딩 스피너나 새로고침 아이콘에 회전 효과를 사용하세요
                    </li>
                    <li>무한 회전은 로딩 상태를 나타낼 때 유용합니다</li>
                    <li>3D 회전은 카드 뒤집기나 제품 전시에 활용하세요</li>
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
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ duration: 1, ease: "linear" }}
>
  내용
</motion.div>`}
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold">
                    💡 회전 파라미터 조절하기
                  </p>
                  <ul className="list-disc list-inside mt-2 text-blue-700 dark:text-blue-400 space-y-1">
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        rotate
                      </code>
                      : 2D 회전 (0-360도)
                    </li>
                    <li>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                        rotateX, rotateY, rotateZ
                      </code>
                      : 3D 회전
                    </li>
                    <li>ease: &quot;linear&quot;는 일정한 속도로 회전합니다</li>
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
