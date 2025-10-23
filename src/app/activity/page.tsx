"use client";

import { Activity } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// 각 탭의 컴포넌트들
function HomeTab() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between gap-4 w-full">
        <div className="w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            카운터 (상태 유지)
          </p>
          <div className="flex items-center justify-center gap-6 py-8">
            <button
              onClick={() => setCount(count - 1)}
              className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              -1
            </button>
            <span className="text-5xl font-bold text-gray-800 dark:text-white min-w-[120px] text-center">
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              +1
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            텍스트 입력 (상태 유지)
          </p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="다른 탭으로 갔다 와도 입력 내용이 유지됩니다..."
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
          />
          {text && (
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              입력한 텍스트:{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                {text}
              </span>
            </p>
          )}
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          ✅ <strong>Activity 컴포넌트</strong>를 사용하면 탭을 전환해도 모든
          상태(count, text)가 유지됩니다!
        </p>
      </div>
    </motion.div>
  );
}

function ProfileTab() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(25);
  const [email, setEmail] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-start gap-4 w-full">
        <div className="w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            프로필 정보 입력
          </p>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                나이
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            입력된 정보
          </p>
          <div className="space-y-3 text-gray-600 dark:text-gray-300 text-lg">
            <p>
              이름:{" "}
              <span className="text-gray-800 dark:text-white font-semibold">
                {name}
              </span>
            </p>
            <p>
              나이:{" "}
              <span className="text-gray-800 dark:text-white font-semibold">
                {age}세
              </span>
            </p>
            <p>
              이메일:{" "}
              <span className="text-gray-800 dark:text-white font-semibold">
                {email || "미입력"}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          ✅ 다른 탭으로 이동해도 입력한 정보가 모두 유지됩니다!
        </p>
      </div>
    </motion.div>
  );
}

function SettingsTab() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [language, setLanguage] = useState("ko");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          환경 설정
        </p>
        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-gray-800 dark:text-white font-semibold text-lg">
                알림
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                푸시 알림 받기
              </p>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                notifications ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md ${
                  notifications ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-gray-800 dark:text-white font-semibold text-lg">
                다크 모드
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                다크 테마 사용
              </p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                darkMode ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md ${
                  darkMode ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-gray-800 dark:text-white font-semibold text-lg">
                자동 저장
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                변경사항 자동 저장
              </p>
            </div>
            <button
              onClick={() => setAutoSave(!autoSave)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                autoSave ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md ${
                  autoSave ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          <div className="pt-4">
            <label className="block text-gray-800 dark:text-white font-semibold text-lg mb-3">
              언어
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          ✅ 모든 설정이 탭 전환 시에도 완벽하게 유지됩니다!
        </p>
      </div>
    </motion.div>
  );
}

export default function ActivityPage() {
  const [mainTab, setMainTab] = useState<"concept" | "demo">("concept");
  const [demoTab, setDemoTab] = useState<"home" | "profile" | "settings">(
    "home"
  );

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
            React 19.2 Activity
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            상태를 유지하면서 UI를 숨기고 표시하는 새로운 방법
          </p>
        </div>

        {/* Main Tab Navigation */}
        <div className="mb-8">
          <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setMainTab("concept")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                mainTab === "concept"
                  ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              📚 개념
            </button>
            <button
              onClick={() => setMainTab("demo")}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                mainTab === "demo"
                  ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              🎮 예시
            </button>
          </div>
        </div>

        {/* Concept Tab */}
        {mainTab === "concept" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* What is Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Activity 컴포넌트란?
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  <strong className="text-gray-800 dark:text-white">
                    React 19.2
                  </strong>
                  에서 새로 추가된{" "}
                  <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded text-purple-600 dark:text-purple-400 font-mono text-sm">
                    &lt;Activity&gt;
                  </code>{" "}
                  컴포넌트는 <strong>UI의 가시 상태를 선언적으로 제어</strong>
                  하는 새로운 방법입니다.
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mt-4">
                  <p className="font-bold text-gray-800 dark:text-white mb-3 text-lg">
                    핵심 기능
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm font-mono">
                          mode=&quot;visible&quot;
                        </code>
                        <span className="ml-2">
                          : 컴포넌트를 표시하고 이펙트/구독을 활성화
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm font-mono">
                          mode=&quot;hidden&quot;
                        </code>
                        <span className="ml-2">
                          : 컴포넌트를 숨기지만{" "}
                          <strong className="text-purple-600 dark:text-purple-400">
                            상태는 유지
                          </strong>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Use Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                왜 Activity를 사용해야 할까요?
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* 기존 방식 */}
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-800">
                  <p className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center text-lg">
                    <span className="text-2xl mr-2">❌</span>
                    기존 조건부 렌더링
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                      <code className="text-sm text-gray-800 dark:text-gray-300 font-mono">
                        {"{isVisible && <Component />}"}
                      </code>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <p className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>상태 초기화:</strong> 컴포넌트가 언마운트되면
                          모든 상태가 사라짐
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>반복 초기화:</strong> 다시 마운트할 때마다
                          초기값으로 리셋
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>사용자 경험 저하:</strong> 입력한 데이터가
                          사라져 불편함
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>복잡한 해결책:</strong> 상태를 부모로
                          끌어올리거나 전역 상태 관리 필요
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Activity 방식 */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
                  <p className="font-bold text-green-700 dark:text-green-400 mb-4 flex items-center text-lg">
                    <span className="text-2xl mr-2">✅</span>
                    Activity 컴포넌트
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                      <code className="text-sm text-gray-800 dark:text-gray-300 font-mono whitespace-pre">
                        {`<Activity mode="hidden">
  <Component />
</Activity>`}
                      </code>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <p className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>
                          <strong>상태 유지:</strong> 숨겨져도 모든 상태가
                          그대로 보존됨
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>
                          <strong>빠른 복원:</strong> 다시 표시할 때 즉시 이전
                          상태로 복원
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>
                          <strong>사용자 친화적:</strong> 입력 데이터가 보존되어
                          편리함
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>
                          <strong>간단한 구현:</strong> 추가 상태 관리 없이
                          선언적으로 사용
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                활용 사례
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <div className="text-3xl mb-3">📑</div>
                  <p className="font-bold text-gray-800 dark:text-white mb-2">
                    탭 네비게이션
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    사용자가 여러 탭 사이를 이동해도 각 탭의 입력값, 스크롤 위치
                    등이 유지됩니다.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <div className="text-3xl mb-3">🪟</div>
                  <p className="font-bold text-gray-800 dark:text-white mb-2">
                    모달 & 사이드바
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    모달이나 사이드바를 닫았다 열어도 내부 상태가 유지되어
                    재입력할 필요가 없습니다.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <div className="text-3xl mb-3">📋</div>
                  <p className="font-bold text-gray-800 dark:text-white mb-2">
                    다단계 폼
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    여러 단계의 폼에서 이전 단계로 돌아가도 입력한 데이터가
                    보존됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                코드 예시
              </p>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-gray-800 dark:text-gray-300 font-mono">
                    {`import { Activity } from "react";
import { useState } from "react";

function TabExample() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      {/* 탭 버튼들 */}
      <button onClick={() => setActiveTab("home")}>홈</button>
      <button onClick={() => setActiveTab("profile")}>프로필</button>
      
      {/* Activity로 감싼 컴포넌트들 */}
      <Activity mode={activeTab === "home" ? "visible" : "hidden"}>
        <HomeTab />  {/* 상태 유지됨! */}
      </Activity>
      
      <Activity mode={activeTab === "profile" ? "visible" : "hidden"}>
        <ProfileTab />  {/* 상태 유지됨! */}
      </Activity>
    </>
  );
}`}
                  </code>
                </pre>
              </div>

              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 dark:text-blue-300 font-semibold mb-2">
                  핵심 포인트
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    •{" "}
                    <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                      mode
                    </code>{" "}
                    prop으로 가시성 제어
                  </li>
                  <li>• 컴포넌트는 언마운트되지 않고 DOM에 유지됨</li>
                  <li>• hidden 모드에서는 이펙트와 구독이 일시 중지됨</li>
                  <li>• visible로 변경하면 즉시 이전 상태로 복원됨</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Demo Tab */}
        {mainTab === "demo" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Demo Description */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 mb-8 border border-purple-200 dark:border-purple-800">
              <p className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                직접 체험해보세요!
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                아래 탭들을 자유롭게 이동하며 값을 입력해보세요.{" "}
                <strong>
                  다른 탭으로 갔다가 다시 돌아와도 모든 상태가 유지
                </strong>
                되는 것을 확인할 수 있습니다!
              </p>
            </div>

            {/* Demo Tab Navigation */}
            <div className="mb-8">
              <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setDemoTab("home")}
                  className={`px-6 py-3 font-semibold transition-all duration-200 ${
                    demoTab === "home"
                      ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <span className="mr-2">🏠</span>홈
                </button>
                <button
                  onClick={() => setDemoTab("profile")}
                  className={`px-6 py-3 font-semibold transition-all duration-200 ${
                    demoTab === "profile"
                      ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <span className="mr-2">👤</span>
                  프로필
                </button>
                <button
                  onClick={() => setDemoTab("settings")}
                  className={`px-6 py-3 font-semibold transition-all duration-200 ${
                    demoTab === "settings"
                      ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <span className="mr-2">⚙️</span>
                  설정
                </button>
              </div>
            </div>

            {/* Demo Content with Activity Component */}
            <div className="relative min-h-[500px]">
              <Activity mode={demoTab === "home" ? "visible" : "hidden"}>
                <HomeTab />
              </Activity>

              <Activity mode={demoTab === "profile" ? "visible" : "hidden"}>
                <ProfileTab />
              </Activity>

              <Activity mode={demoTab === "settings" ? "visible" : "hidden"}>
                <SettingsTab />
              </Activity>
            </div>

            {/* Demo Explanation */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                실제로 어떻게 작동하나요?
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2 text-gray-800 dark:text-white">
                    1. 탭 전환 시
                  </p>
                  <p className="text-sm">
                    각 탭 컴포넌트(홈, 프로필, 설정)는{" "}
                    <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                      Activity
                    </code>
                    로 감싸져 있습니다. 탭을 전환하면 현재 탭은{" "}
                    <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                      mode=&quot;visible&quot;
                    </code>
                    , 나머지는{" "}
                    <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                      mode=&quot;hidden&quot;
                    </code>
                    으로 설정됩니다.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2 text-gray-800 dark:text-white">
                    2. 상태 보존
                  </p>
                  <p className="text-sm">
                    hidden 모드의 컴포넌트는 화면에서 사라지지만 메모리에는
                    남아있어, 카운터 값, 입력 필드, 토글 상태 등{" "}
                    <strong className="text-green-700 dark:text-green-400">
                      모든 useState가 그대로 유지
                    </strong>
                    됩니다.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2 text-gray-800 dark:text-white">
                    3. 즉시 복원
                  </p>
                  <p className="text-sm">
                    다시 해당 탭으로 돌아오면 visible 모드로 전환되어 이전에
                    입력했던 모든 값들이 즉시 표시됩니다. 리렌더링이나 데이터
                    페칭 없이 바로 복원됩니다!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
