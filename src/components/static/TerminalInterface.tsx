'use client';

import { useState, useEffect, useRef } from 'react';

export function TerminalInterface() {
  const [input, setInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [commands, setCommands] = useState<{command: string, output: string}[]>([
    { command: 'whoami', output: 'enumura1 - Web Frontend Developer & Indie Hacker' },
    { command: 'ls projects', output: 'hackathon-project.md  open-source.md  portfolio.md' },
    { command: 'cat skills.txt', output: 'Frontend: React, TypeScript, JavaScript \nBackend: Node.js \nOther: Git, Docker, AWS, Blender' }
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
            output = 'Moving to about section...';
            scrollToSection('about');
            break;
        case 'skills':
            output = 'Analyzing developer skills...';
            scrollToSection('skills');
            break;
        case 'projects':
            output = 'Loading projects...';
            scrollToSection('projects');
            break;
        case 'blog':
            output = 'Opening blog entries...';
            scrollToSection('blog');
            break;
        case 'contact':
            output = 'Establishing connection...';
            scrollToSection('contact');
            break;
        case 'clear':
            setCommands([]);
            return;
        case 'help':
            output = 'Available commands:\n - about: Navigate to About section\n - skills: Check my technical skills\n - projects: View my projects\n - blog: Read my blog posts\n - contact: Get in touch with me\n - clear: Clear the terminal\n - theme dark/light: Switch color theme\n - tech-stack: View web performance insights\n - cat resolutions: See my developer goals\n\nAlso try: whoami, ls, cat skills.txt';
            break;
        case 'whoami':
            output = 'enumura1 - Web Frontend Developer & Indie Hacker';
            break;
        case 'ls':
            output = 'about/  skills/  blog/  projects/  resolutions  tech-stack.md';
            break;
        case 'ls -a':
        case 'ls -la':
            output = '.  ..  about/  skills/  blog/  projects/  resolutions  tech-stack.md  .config';
            break;
        case 'ls projects':
        case 'ls -la projects':
            output = 'hackathon-project.md  open-source.md  portfolio.md';
            break;
        case 'cat skills.txt':
            output = 'Frontend: React, TypeScript, JavaScript, Tailwind CSS\nBackend: Node.js \nOther: Git, Docker, AWS, Blender';
            break;
        case 'cat resolutions':
            output = '🎯 Annual Developer Goals 2025:\n\n1. Master React Server Components & streaming patterns\n2. Contribute to 3+ open-source projects\n3. Write a technical e-book on web performance\n4. Launch 2 side projects with focus on accessibility\n5. Improve TypeScript knowledge with advanced patterns\n6. Mentor junior developers through community events';
            break;
        case 'theme dark':
            document.documentElement.classList.add('dark');
            output = 'Switching to dark theme...';
            break;
        case 'theme light':
            document.documentElement.classList.remove('dark');
            output = 'Switching to light theme...';
            break;
        case 'tech-stack':
            output = 'Navigating to Web Performance Insights...';
            // 少し遅延させてナビゲーション
            setTimeout(() => {
            window.location.href = '/tech-stack';
            }, 500);
            break;
        case 'sudo rm -rf /':
            output = 'Nice try! 😉 But my portfolio has backup systems.';
            break;
        default:
        if (cleanCmd.startsWith('echo ')) {
          output = cleanCmd.substring(5);
        } else {
          output = `Command not found: ${cleanCmd}\nType 'help' for available commands`;
        }
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
        <div className="flex items-center px-4 py-2 relative bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="absolute left-4 flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="w-full text-center text-xs text-gray-500 dark:text-gray-400 tracking-widest">
            enumura1@terminal
          </div>
        </div>
        
        {/* ターミナルコンテンツ - カスタムスクロールバー */}
        <div 
          ref={terminalRef}
          className="bg-white dark:bg-gray-900 p-4 h-96 overflow-y-auto font-mono text-sm text-gray-700 dark:text-gray-300
                    scrollbar-none"
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
              className={`ml-0.5 inline-block w-2 h-5
                ${cursorVisible 
                ? 'bg-gray-500 dark:bg-gray-400'
                : 'opacity-0'
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
        <p className="mt-2 text-center text-lg text-gray-400 dark:text-gray-500">
          Type <span className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-blue-500 dark:text-blue-400 font-medium">help</span> to see available commands.
        </p>
    </div>
  );
}