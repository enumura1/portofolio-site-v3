import { Terminal, ChevronUp } from 'lucide-react';

export function BestTerminalButton() {
  return (
    <a
      href="#top"
      className="group flex items-center bg-white dark:bg-gray-800 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
      aria-label="Back to top"
      title="Back to top"
    >
      {/* ターミナルプロンプト */}
      <Terminal size={16} className="text-green-500 dark:text-green-400 mr-2" />
      
      {/* コマンド部分 */}
      <span className="font-mono text-sm">cd top</span>
      
      {/* 上矢印 - よりわかりやすく */}
      <ChevronUp 
        size={18} 
        className="ml-2 text-blue-500 dark:text-blue-400 group-hover:translate-y-[-2px] transition-transform" 
      />
    </a>
  );
}
