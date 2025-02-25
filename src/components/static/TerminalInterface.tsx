'use client';

import { useState, useEffect, useRef } from 'react';

export function TerminalInterface() {
  const [input, setInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [commands, setCommands] = useState<{command: string, output: string}[]>([
    { command: 'whoami', output: 'enumura1 - Web Frontend Developer & Indie Hacker' },
    { command: 'ls projects', output: 'hackathon-project.md  open-source.md  portfolio.md' },
    { command: 'cat skills.txt', output: 'Frontend: React, TypeScript, Next.js, Tailwind CSS\nBackend: Node.js, Python\nOther: Git, Docker, AWS, Blender' },
    { command: 'help', output: '利用可能なコマンド:\n - about: 自己紹介セクションへ\n - projects: プロジェクト一覧へ\n - skills: スキルセクションへ\n - blog: ブログセクションへ\n - contact: 連絡先へ' }
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // カーソル点滅のエフェクト
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // ターミナルがクリックされたらフォーカスを入力欄に移動
  useEffect(() => {
    const handleTerminalClick = () => {
      inputRef.current?.focus();
    };
    
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleTerminalClick);
    }
    
    return () => {
      if (terminal) {
        terminal.removeEventListener('click', handleTerminalClick);
      }
    };
  }, []);

  // コマンド実行関数
  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output = '';
    
    // 各コマンドの処理
    switch (cleanCmd) {
      case 'about':
        output = '自己紹介セクションに移動します...';
        scrollToSection('about');
        break;
      case 'projects':
        output = 'プロジェクト一覧セクションに移動します...';
        scrollToSection('projects');
        break;
      case 'skills':
        output = 'スキルセクションに移動します...';
        scrollToSection('skills');
        break;
      case 'blog':
        output = 'ブログセクションに移動します...';
        scrollToSection('blog');
        break;
      case 'contact':
        output = '連絡先セクションに移動します...';
        scrollToSection('contact');
        break;
      case 'clear':
        setCommands([]);
        return;
      case 'help':
        output = '利用可能なコマンド:\n - about: 自己紹介セクションへ\n - projects: プロジェクト一覧へ\n - skills: スキルセクションへ\n - blog: ブログセクションへ\n - contact: 連絡先へ\n - clear: 画面をクリア';
        break;
      default:
        output = `コマンドが見つかりません: ${cleanCmd}\n'help'を実行して利用可能なコマンドを確認してください`;
    }

    // コマンド履歴に追加
    setCommands(prev => [...prev, { command: cleanCmd, output }]);
    
    // 入力欄をクリア
    setInput('');
    
    // ターミナルを一番下までスクロール
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 10);
  };

  // 特定のセクションへスクロール
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // キー入力ハンドラー
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* ターミナルウィンドウ */}
      <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-2xl">
        {/* ターミナルヘッダー */}
        <div className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="absolute left-4 flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="w-full text-center text-xs text-gray-500 dark:text-gray-400">
            enumura1@terminal
          </div>
        </div>
        
        {/* ターミナルコンテンツ */}
        <div 
          ref={terminalRef}
          className="bg-white dark:bg-gray-900 p-4 h-96 overflow-y-auto font-mono text-sm text-gray-700 dark:text-gray-300"
        >
          {/* コマンド履歴 */}
          {commands.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex">
                <span className="text-green-500 dark:text-green-400 mr-2">$</span>
                <span>{item.command}</span>
              </div>
              <div className="ml-4 whitespace-pre-line">{item.output}</div>
            </div>
          ))}
          
          {/* 現在の入力行 */}
          <div className="flex items-center mt-2">
            <span className="text-green-500 dark:text-green-400 mr-2">$</span>
            <span>{input}</span>
            <span 
              className={`ml-0.5 inline-block w-2 h-5 bg-gray-700 dark:bg-gray-300 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            ></span>
            <input
              ref={inputRef}
              type="text"
              className="opacity-0 absolute left-0 w-px h-px"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
      </div>
      
      {/* 説明テキスト */}
      <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
        クリックしてターミナルを操作してみてください。<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">help</code> でコマンド一覧が表示されます。
      </p>
    </div>
  );
}
