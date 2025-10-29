"use client";

import { useState } from "react";

interface CodePreviewProps {
  code: string;
  preview: React.ReactNode;
}

export function CodePreview({ code, preview }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "preview"
              ? "bg-white dark:bg-slate-800 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "code"
              ? "bg-white dark:bg-slate-800 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "preview" ? (
          <div className="flex items-center justify-center min-h-[100px]">
            {preview}
          </div>
        ) : (
          <div className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
