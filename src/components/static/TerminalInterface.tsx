'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/components/ui/language-provider';

type CommandHistory = { command: string; output: string };

const skillSummary = {
  ja: 'フロントエンド: JavaScript, TypeScript, React\nバックエンド: Kotlin, Node.js, Python\nデータベース・検索: PostgreSQL, DynamoDB, Aurora, Redshift, OpenSearch\nクラウド: AWS, Google Cloud\nインフラ: Kubernetes, Docker, Terraform, CloudFormation\nデータ処理: Kafka, Airflow\nAIツール: Claude Code, Codex',
  en: 'Frontend: JavaScript, TypeScript, React\nBackend: Kotlin, Node.js, Python\nData & Search: PostgreSQL, DynamoDB, Aurora, Redshift, OpenSearch\nCloud: AWS, Google Cloud\nInfrastructure: Kubernetes, Docker, Terraform, CloudFormation\nData Processing: Kafka, Airflow\nAI Tools: Claude Code, Codex',
};

function initialCommands(language: 'ja' | 'en'): CommandHistory[] {
  return [
    { command: 'whoami', output: `enumura1 - ${language === 'ja' ? 'ソフトウェアエンジニア' : 'Software Engineer'}` },
    { command: 'ls', output: 'about, skills, certifications, projects, oss' },
    { command: 'cat skills.txt', output: skillSummary[language] },
  ];
}

export function TerminalInterface() {
  const { language } = useLanguage();
  const [input, setInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [commands, setCommands] = useState<CommandHistory[]>(() => initialCommands('ja'));
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCommands(initialCommands(language));
  }, [language]);

  // 利用可能なコマンドリスト タブ補完
  const availableCommands = [
    'cd about', 'cd skills', 'cd certifications', 'cd projects', 'cd oss', 'cd contact',
    'about', 'skills', 'certifications', 'projects', 'oss', 'contact', 'clear', 'help',
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
      const possibleDirs = ['about', 'skills', 'certifications', 'projects', 'oss', 'contact'];
      const matchingDirs = possibleDirs.filter(dir => dir.startsWith(partialDir));
      
      if (matchingDirs.length === 1) {
        setInput(`cd ${matchingDirs[0]}`);
      } else if (matchingDirs.length > 0) {
        // 複数のマッチがある場合、オプションを表示
        const options = matchingDirs.map(d => `cd ${d}`).join('  ');
        setCommands(prev => [...prev, { 
          command: currentInput, 
          output: `${language === 'ja' ? '候補のコマンド' : 'Possible commands'}:\n${options}`
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
          output: `${language === 'ja' ? '候補のコマンド' : 'Possible commands'}:\n${options}`
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
          output: `${language === 'ja' ? '候補のコマンド' : 'Possible commands'}:\n${options}`
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
            output = language === 'ja' ? '自己紹介へ移動します...' : 'Moving to about section...';
            scrollToSection('about');
            break;
        case 'cd skills':
            output = language === 'ja' ? 'スキルを表示します...' : 'Analyzing developer skills...';
            scrollToSection('skills');
            break;
        case 'cd certifications':
            output = language === 'ja' ? '資格を表示します...' : 'Loading certifications...';
            scrollToSection('certifications');
            break;
        case 'cd projects':
            output = language === 'ja' ? 'プロジェクトを表示します...' : 'Loading projects...';
            scrollToSection('projects');
            break;
        case 'cd oss':
            output = language === 'ja' ? 'OSSコントリビュートを表示します...' : 'Loading OSS contributions...';
            scrollToSection('oss-contributions');
            break;
        case 'cd contact':
            output = language === 'ja' ? '連絡先へ移動します...' : 'Establishing connection...';
            scrollToSection('contact');
            break;
        // 従来のコマンド（後方互換性のため残す）
        case 'about':
            output = language === 'ja' ? '自己紹介へ移動します...' : 'Moving to about section...';
            scrollToSection('about');
            break;
        case 'skills':
            output = language === 'ja' ? 'スキルを表示します...' : 'Analyzing developer skills...';
            scrollToSection('skills');
            break;
        case 'certifications':
            output = language === 'ja' ? '資格を表示します...' : 'Loading certifications...';
            scrollToSection('certifications');
            break;
        case 'projects':
            output = language === 'ja' ? 'プロジェクトを表示します...' : 'Loading projects...';
            scrollToSection('projects');
            break;
        case 'oss':
            output = language === 'ja' ? 'OSSコントリビュートを表示します...' : 'Loading OSS contributions...';
            scrollToSection('oss-contributions');
            break;
        case 'contact':
            output = language === 'ja' ? '連絡先へ移動します...' : 'Establishing connection...';
            scrollToSection('contact');
            break;
        case 'clear':
            setCommands([]);
            return;
        case 'help':
            output = language === 'ja'
              ? '使用できるコマンド:\n - cd about: 自己紹介へ移動\n - cd skills: スキルを表示\n - cd certifications: 資格を表示\n - cd projects: プロジェクトを表示\n - cd oss: OSSコントリビュートを表示\n - cd contact: 連絡先へ移動\n - clear: ターミナルを消去\n - theme dark/light: テーマを切替\n - cat tech-stack: 技術スタックページを表示\n - cat resolutions: 目標ページを表示\n - cat oss-contributions: OSSコントリビュートページを表示\n\nwhoami、ls、cat skills.txt も試せます。'
              : 'Available commands:\n - cd about: Navigate to About section\n - cd skills: Check my technical skills\n - cd certifications: View my certifications\n - cd projects: View my projects\n - cd oss: View OSS contributions\n - cd contact: Get in touch with me\n - clear: Clear the terminal\n - theme dark/light: Switch color theme\n - cat tech-stack: View web performance insights\n - cat resolutions: See my 2025 developer goals\n - cat oss-contributions: View OSS contributions page\n\nAlso try: whoami, ls, cat skills.txt';
            break;
        case 'whoami':
            output = `enumura1 - ${language === 'ja' ? 'ソフトウェアエンジニア' : 'Software Engineer'}`;
            break;
        case 'ls':
            output = 'about  skills  certifications  projects  oss';
            break;
        case 'ls -a':
        case 'ls -la':
            output = '.  ..  about  skills  certifications  projects  oss  .config';
            break;
        case 'cat skills.txt':
            output = skillSummary[language];
            break;
        case 'cat resolutions':
            output = language === 'ja' ? '開発目標ページへ移動します...' : 'Navigating to Developer Resolutions page...';
            setTimeout(() => {
              window.location.href = '/resolutions';
            }, 200);
            break;
        case 'cat tech-stack':
            output = language === 'ja' ? '技術スタックページへ移動します...' : 'Navigating to Web Performance Insights...';
            setTimeout(() => {
            window.location.href = '/tech-stack';
            }, 200);
            break;
        case 'cat oss-contributions':
            output = language === 'ja' ? 'OSSコントリビュートページへ移動します...' : 'Navigating to OSS Contributions page...';
            setTimeout(() => {
            window.location.href = '/oss-contributions';
            }, 200);
            break;
        case 'theme dark':
            document.documentElement.classList.add('dark');
            output = language === 'ja' ? 'ダークテーマへ切り替えます...' : 'Switching to dark theme...';
            break;
        case 'theme light':
            document.documentElement.classList.remove('dark');
            output = language === 'ja' ? 'ライトテーマへ切り替えます...' : 'Switching to light theme...';
            break;
        case 'sudo rm -rf /':
            output = language === 'ja' ? 'おっと！😉 このポートフォリオにはバックアップがあります。' : 'Nice try! 😉 But my portfolio has backup systems.';
            break;
        default:
        if (cleanCmd.startsWith('echo ')) {
          output = cleanCmd.substring(5);
        } else {
          output = language === 'ja' ? `コマンドが見つかりません: ${cleanCmd}\n利用可能なコマンドは 'help' で確認できます` : `Command not found: ${cleanCmd}\nType 'help' for available commands`;
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
          {language === 'ja' ? '利用可能なコマンドは ' : 'Type '}<span className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-blue-500 dark:text-blue-400 font-medium">help</span>{language === 'ja' ? ' で確認できます。' : ' to see available commands.'} <span className="text-sm ml-1">{language === 'ja' ? '（Tabで補完）' : '(Tab for completion)'}</span>
        </p>
    </div>
  );
}
