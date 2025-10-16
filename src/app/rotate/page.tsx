import Link from "next/link";

export default function RotatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
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
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Rotate 애니메이션
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          준비 중입니다...
        </p>
      </div>
    </div>
  );
}
