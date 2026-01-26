# LXST.template

A premium, high-performance website template built with **Nuxt 4**, **Tailwind CSS 4**, and **shadcn-vue**. Designed for clean architecture, SEO excellence, and rapid development.

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com) (Future-ready)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) (CSS-first configuration)
- **UI Components**: [shadcn-vue](https://www.shadcn-vue.com)
- **Language**: TypeScript

## Features

- ⚡ **High Performance**: Optimized with Nuxt Image and server-side rendering.
- 📱 **Fully Responsive**: Mobile-first design approach tested across breakpoints.
- 🤖 **AI-Ready Guidelines**: Includes `app/AI.md` for strict AI coding standards.
- 🧩 **Modular Architecture**: Component-based design with reusable patterns.

## Setup

Ensure you have `pnpm` installed.

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Server will start at `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Preview production build |
| `pnpm lint:fix` | Fix linting errors |

## Project Structure

- `app/` - Core application source
    - `components/` - Vue components (including `ui/` for shadcn)
    - `pages/` - Application routes
    - `assets/` - Static assets and global CSS
    - `layouts/` - Page layouts
- `AI.md` - AI architectural guidelines
