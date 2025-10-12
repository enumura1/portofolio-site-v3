# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, featuring a terminal-style interface for navigation. The site showcases professional information, skills, certifications, projects, blog posts from external sources (Qiita and Zenn), and OSS contributions.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with Turbopack (Next.js 15)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

### Testing Pull Requests
PRs to `main` trigger CI that runs `npm run lint` and `npm run build`. Ensure both pass before pushing.

## Architecture Overview

### Component Organization
Components are organized by rendering strategy:

- **`src/components/static/`** - Static components that don't fetch external data
  - Terminal interface (`TerminalInterface.tsx`)
  - Navigation and layout (`Header.tsx`, `Footer.tsx`)
  - Content sections (`About.tsx`, `Skills.tsx`, `Projects.tsx`, etc.)

- **`src/components/dynamic/`** - Components that fetch external data at runtime
  - Blog integrations (`Articles.tsx`, `Zenn.tsx`, `Blog.tsx`)
  - Loading states for async content

- **`src/components/ui/`** - Shared UI utilities
  - Theme management (`theme-provider.tsx`, `theme-switcher.tsx`)

### Terminal Interface System
The portfolio features an interactive terminal interface (`TerminalInterface.tsx`) that:
- Handles command parsing and execution
- Supports tab completion for commands
- Navigates between sections using `cd` commands
- Uses `cat` commands to navigate to sub-pages

**Available terminal commands:**
- Navigation: `cd about`, `cd skills`, `cd certifications`, `cd projects`, `cd blog`, `cd oss`, `cd contact`
- Information: `whoami`, `ls`, `ls -a`, `cat skills.txt`
- Page navigation: `cat resolutions`, `cat tech-stack`, `cat oss-contributions`
- Theme: `theme dark`, `theme light`
- Utilities: `clear`, `help`, `echo <text>`

### Routing Structure
- **`src/app/page.tsx`** - Main portfolio page with all sections
- **`src/app/resolutions/page.tsx`** - Developer resolutions/goals page
- **`src/app/tech-stack/page.tsx`** - Web performance insights page
- **`src/app/oss-contributions/page.tsx`** - OSS contributions showcase
- **`src/app/layout.tsx`** - Root layout with theme provider and metadata

### External Data Fetching
Blog content is fetched from external APIs:
- **Qiita API** (`src/utils/qiita.ts`) - Requires `QIITA_ACCESS_TOKEN` environment variable
- **Zenn API** (`src/utils/zenn.ts`) - Public API, no authentication needed

Both use Next.js ISR with 1-hour revalidation (`next: { revalidate: 3600 }`).

### Theme System
- Uses Tailwind's `dark:` modifier with class-based theme switching
- `ThemeProvider` wraps the app and provides `useTheme()` hook
- Theme state managed through React Context
- Both terminal commands and UI switcher can toggle themes
- Default theme is dark mode

### Next.js 15 Features
- **Partial Prerendering (PPR)** enabled in `next.config.ts`
- Uses React 19 and Turbopack for development
- App Router architecture

## Environment Variables

Required in `.env.local`:
- `QIITA_ACCESS_TOKEN` - Personal access token for Qiita API

## Key Implementation Details

### Adding New Terminal Commands
When adding commands to `TerminalInterface.tsx`:
1. Add to `availableCommands` array for tab completion
2. Add case in `executeCommand()` switch statement
3. Update the `help` command output
4. If it's a navigation command starting with `cd` or `cat`, add to respective tab completion logic

### Adding New Sections
To add a new portfolio section:
1. Create component in `src/components/static/` or `src/components/dynamic/`
2. Import and add to `src/app/page.tsx`
3. Add section ID for scroll-to functionality
4. Update terminal commands in `TerminalInterface.tsx`

### Styling Conventions
- Tailwind CSS with dark mode support
- Always include both light and dark variants: `bg-white dark:bg-gray-900`
- Use semantic color classes for consistency
- Terminal uses green accent: `text-green-500 dark:text-green-400`
