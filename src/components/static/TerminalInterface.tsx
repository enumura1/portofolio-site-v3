'use client';

import { useState, useEffect, useRef } from 'react';

export function TerminalInterface() {
  const [input, setInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [commands, setCommands] = useState<{command: string, output: string}[]>([
    { command: 'whoami', output: 'enumura1 - Web Engineer & Indie Hacker' },
    { command: 'ls', output: 'about, skills, certifications, blog, projects, oss' },
    { command: 'cat skills.txt', output: 'Frontend: HTML, CSS, JavaScript, TypeScript, React \nBackend: Node.js, Python \nOther: Git, Docker, AWS, Blender' }
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 利用可能なコマンドリスト タブ補完
  const availableCommands = [
    'cd about', 'cd skills', 'cd certifications', 'cd projects', 'cd blog', 'cd oss', 'cd contact',
    'about', 'skills', 'certifications', 'projects', 'blog', 'oss', 'contact', 'clear', 'help', 
    'whoami', 'ls', 'ls -a', 'ls -la',
    'cat skills.txt', 'cat resolutions', 'cat tech-stack', 'cat oss-contributions',
    'theme dark', 'theme light', 'echo '
  ];

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

  // タブ補完機能
  const handleTabCompletion = () => {
    if (!input) return;
  
    // 入力中のコマンド
    const currentInput = input.trim().toLowerCase();
    
    // cdコマンドの特別処理
    if (currentInput.startsWith('cd ')) {
      const partialDir = currentInput.substring(3);
      const possibleDirs = ['about', 'skills', 'certifications', 'projects', 'blog', 'oss', 'contact'];
      const matchingDirs = possibleDirs.filter(dir => dir.startsWith(partialDir));
      
      if (matchingDirs.length === 1) {
        setInput(`cd ${matchingDirs[0]}`);
      } else if (matchingDirs.length > 0) {
        // 複数のマッチがある場合、オプションを表示
        const options = matchingDirs.map(d => `cd ${d}`).join('  ');
        setCommands(prev => [...prev, { 
          command: currentInput, 
          output: `Possible commands:\n${options}` 
        }]);
      }
      return;
    }
    
    // catコマンドの特別処理
    if (currentInput.startsWith('cat ')) {
      const partialFile = currentInput.substring(4);
      const possibleFiles = ['skills.txt', 'resolutions', 'tech-stack', 'oss-contributions'];
      const matchingFiles = possibleFiles.filter(file => file.startsWith(partialFile));
      
      if (matchingFiles.length === 1) {
        setInput(`cat ${matchingFiles[0]}`);
      } else if (matchingFiles.length > 0) {
        // 複数のマッチがある場合、オプションを表示
        const options = matchingFiles.map(f => `cat ${f}`).join('  ');
        setCommands(prev => [...prev, { 
          command: currentInput, 
          output: `Possible commands:\n${options}` 
        }]);
      }
      return;
    }
    
    // themeコマンドの特別処理
    if (currentInput === 'theme ') {
      setInput('theme dark');
      return;
    }
  
    // 一般的なコマンド補完
    const matchingCommands = availableCommands.filter(cmd => cmd.startsWith(currentInput));
    
    if (matchingCommands.length === 1) {
      setInput(matchingCommands[0]);
    } else if (matchingCommands.length > 1) {
      // 共通の接頭辞を見つける
      let commonPrefix = currentInput;
      let position = currentInput.length;
      
      // 共通の接頭辞の最大長を見つける
      while (matchingCommands.every(cmd => cmd.length > position && 
                                  cmd.charAt(position) === matchingCommands[0].charAt(position))) {
        commonPrefix += matchingCommands[0].charAt(position);
        position++;
      }
      
      // 共通接頭辞があれば更新
      if (commonPrefix.length > currentInput.length) {
        setInput(commonPrefix);
      } else {
        // 一致するコマンドリストを表示
        const options = matchingCommands.join('  ');
        setCommands(prev => [...prev, { 
          command: currentInput, 
          output: `Possible commands:\n${options}` 
        }]);
      }
    }
  };

  // コマンド実行関数
  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output = '';
    
    // 各コマンドの処理
    switch (cleanCmd) {
        // cdコマンド
        case 'cd about':
            output = 'Moving to about section...';
            scrollToSection('about');
            break;
        case 'cd skills':
            output = 'Analyzing developer skills...';
            scrollToSection('skills');
            break;
        case 'cd certifications':
            output = 'Loading certifications...';
            scrollToSection('certifications');
            break;
        case 'cd projects':
            output = 'Loading projects...';
            scrollToSection('projects');
            break;
        case 'cd blog':
            output = 'Opening blog entries...';
            scrollToSection('blog');
            break;
        case 'cd oss':
            output = 'Loading OSS contributions...';
            scrollToSection('oss-contributions');
            break;
        case 'cd contact':
            output = 'Establishing connection...';
            scrollToSection('contact');
            break;
        // 従来のコマンド（後方互換性のため残す）
        case 'about':
            output = 'Moving to about section...';
            scrollToSection('about');
            break;
        case 'skills':
            output = 'Analyzing developer skills...';
            scrollToSection('skills');
            break;
        case 'certifications':
            output = 'Loading certifications...';
            scrollToSection('certifications');
            break;
        case 'projects':
            output = 'Loading projects...';
            scrollToSection('projects');
            break;
        case 'blog':
            output = 'Opening blog entries...';
            scrollToSection('blog');
            break;
        case 'oss':
            output = 'Loading OSS contributions...';
            scrollToSection('oss-contributions');
            break;
        case 'contact':
            output = 'Establishing connection...';
            scrollToSection('contact');
            break;
        case 'clear':
            setCommands([]);
            return;
        case 'help':
            output = 'Available commands:\n - cd about: Navigate to About section\n - cd skills: Check my technical skills\n - cd certifications: View my certifications\n - cd projects: View my projects\n - cd blog: Read my blog posts\n - cd oss: View OSS contributions\n - cd contact: Get in touch with me\n - clear: Clear the terminal\n - theme dark/light: Switch color theme\n - cat tech-stack: View web performance insights\n - cat resolutions: See my 2025 developer goals\n - cat oss-contributions: View OSS contributions page\n\nAlso try: whoami, ls, cat skills.txt';
            break;
        case 'whoami':
            output = 'enumura1 - Web Frontend Developer & Indie Hacker';
            break;
        case 'ls':
            output = 'about  skills  certifications  blog  projects  oss';
            break;
        case 'ls -a':
        case 'ls -la':
            output = '.  ..  about  skills  certifications  blog  projects  oss  .config';
            break;
        case 'cat skills.txt':
            output = 'Frontend: HTML, CSS, JavaScript, TypeScript, React\nBackend: Node.js, Python\nOther: Git, Docker, AWS, Blender';
            break;
        case 'cat resolutions':
            output = 'Navigating to Developer Resolutions page...';
            setTimeout(() => {
              window.location.href = '/resolutions';
            }, 200);
            break;
        case 'cat tech-stack':
            output = 'Navigating to Web Performance Insights...';
            setTimeout(() => {
            window.location.href = '/tech-stack';
            }, 200);
            break;
        case 'cat oss-contributions':
            output = 'Navigating to OSS Contributions page...';
            setTimeout(() => {
            window.location.href = '/oss-contributions';
            }, 200);
            break;
        case 'theme dark':
            document.documentElement.classList.add('dark');
            output = 'Switching to dark theme...';
            break;
        case 'theme light':
            document.documentElement.classList.remove('dark');
            output = 'Switching to light theme...';
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
    } else if (e.key === 'Tab') {
      e.preventDefault(); // ブラウザのデフォルトのタブ動作を防止
      handleTabCompletion();
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
        
        {/* ターミナルコンテンツ */}
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
          Type <span className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-blue-500 dark:text-blue-400 font-medium">help</span> to see available commands. <span className="text-sm ml-1">(Tab for completion)</span>
        </p>
    </div>
  );
}
