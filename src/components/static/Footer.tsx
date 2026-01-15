"use client";

import { BestTerminalButton } from "./TerminalAnchorButton";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center relative">
          {/* 中央に配置された著作権表示 */}
          <p className="text-sm text-gray-600 dark:text-gray-400 w-full text-center">
            © {new Date().getFullYear()} enumura1. All rights reserved.
          </p>
          
          {/* 右側に配置されたターミナル風ボタン */}
          <div className="absolute right-0">
            <BestTerminalButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
