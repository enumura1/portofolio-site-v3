# プロジェクト構造
```
src/
├── app/
│   ├── layout.tsx (既存)
│   └── page.tsx (既存)
├── components/
│   ├── static/      # SSGコンポーネント用
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── index.ts
│   ├── dynamic/     # PPRコンポーネント用
│   │   ├── Articles.tsx
│   │   ├── Blog.tsx
│   │   └── index.ts
│   └── ui/          # 共通UIコンポーネント
│       ├── theme-switcher.tsx
│       └── index.ts
├── lib/
│   └── utils.ts     # ユーティリティ関数
├── hooks/           # カスタムフック
│   └── index.ts
└── types/           # 型定義
    └── index.ts
```