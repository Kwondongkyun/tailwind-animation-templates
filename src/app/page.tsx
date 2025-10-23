"use client";

import Link from "next/link";
import { useState } from "react";

const animations = [
  {
    name: "Fade",
    path: "/fade",
    description: "부드러운 페이드 인/아웃 효과",
    icon: "✨",
  },
  {
    name: "Slide",
    path: "/slide",
    description: "슬라이드 애니메이션",
    icon: "➡️",
  },
  {
    name: "Scale",
    path: "/scale",
    description: "크기 변환 애니메이션",
    icon: "🔍",
  },
  {
    name: "Rotate",
    path: "/rotate",
    description: "회전 애니메이션",
    icon: "🔄",
  },
  { name: "Bounce", path: "/bounce", description: "바운스 효과", icon: "⚡" },
  { name: "Spin", path: "/spin", description: "스핀 애니메이션", icon: "🌀" },
  { name: "Pulse", path: "/pulse", description: "펄스 효과", icon: "💓" },
  { name: "Wiggle", path: "/wiggle", description: "흔들림 효과", icon: "〰️" },
  { name: "Flip", path: "/flip", description: "플립 애니메이션", icon: "🔃" },
  { name: "Shake", path: "/shake", description: "흔들기 효과", icon: "📳" },
];

const components = [
  {
    name: "Activity",
    path: "/activity",
    description: "React 19.2 상태 유지 컴포넌트",
    icon: "⚡",
    badge: "React 19.2",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"animations" | "components">(
    "animations"
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-12">
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Next.js 템플릿 모음
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            다양한 애니메이션 효과와 React 컴포넌트를 확인하고 사용해보세요
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("animations")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === "animations"
                  ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              ✨ 애니메이션 템플릿
            </button>
            <button
              onClick={() => setActiveTab("components")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === "components"
                  ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              ⚛️ React 컴포넌트
            </button>
          </div>
        </div>

        {/* Animation Templates Tab */}
        {activeTab === "animations" && (
          <section className="mb-16">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Tailwind CSS & Framer Motion을 활용한 다양한 애니메이션 효과
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {animations.map((animation) => (
                <Link
                  key={animation.path}
                  href={animation.path}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {animation.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {animation.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {animation.description}
                  </p>
                  <div className="absolute bottom-6 right-6 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Component Templates Tab */}
        {activeTab === "components" && (
          <section className="mb-16">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-lg">
              최신 React 기능을 활용한 실용적인 컴포넌트 예제
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component) => (
                <Link
                  key={component.path}
                  href={component.path}
                  className="group relative bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-200 dark:border-purple-800"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {component.badge}
                    </span>
                  </div>

                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {component.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {component.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {component.description}
                  </p>
                  <div className="absolute bottom-6 right-6 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            ✨ Tailwind CSS v4 · ⚛️ React 19.2 · ⚡ Next.js 16
          </p>
          <p className="text-sm">
            애니메이션 템플릿 및 최신 React 컴포넌트 모음
          </p>
        </footer>
      </div>
    </div>
  );
}
