import Link from "next/link";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 pt-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Tailwind CSS 애니메이션 템플릿
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            다양한 Tailwind CSS 애니메이션 효과를 확인하고 사용해보세요
          </p>
        </header>

        {/* Animation Grid */}
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

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p>Tailwind CSS v4를 사용한 애니메이션 템플릿 모음</p>
        </footer>
      </div>
    </div>
  );
}
