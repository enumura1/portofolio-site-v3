"use client";

import { BestTerminalButton } from "./TerminalAnchorButton";
import { useLanguage } from '@/components/ui/language-provider';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* 著作権表示 */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} enumura1. {language === 'ja' ? 'All rights reserved.' : 'All rights reserved.'}
          </p>

          {/* ターミナル風ボタン */}
          <BestTerminalButton />
        </div>
      </div>
    </footer>
  );
}
