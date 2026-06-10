# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Vue 3 component library (`@EDUCAlliance/component-library`) published to GitHub Packages. It follows **atomic design** — atoms → molecules → organisms. The library is consumed by EDUC Alliance applications; Storybook is the dev environment.

## Commands

```sh
bun storybook          # start Storybook on :6006 (primary dev environment)
bun dev                # start plain Vite app (rarely used)
bun test:unit          # run Vitest tests
bun lint               # oxlint + eslint with auto-fix
bun format             # prettier over src/
bun run build:lib      # full library build (JS + CSS + types + copy styles)
```

Single test file: `bun test:unit src/components/__tests__/foo.test.ts`

### Library build pipeline (`build:lib`)

Four sequential steps: `build:lib:js` → `build:lib:css` → `build:types` → `build:copy-styles`

- `vite.config.lib.ts` — JS build (ES + CJS), externalises Vue and all UI deps
- `vite.config.styles.ts` — standalone CSS build; the temp JS artifact is deleted afterwards
- `vue-tsc -p tsconfig.build.json` — emits `.d.ts` into `dist-types/`
- `scripts/copy-styles.mjs` — copies `tailwind-config.css` → `dist/styles/tokens.css` and `theme.css` → `dist/styles/theme.css`

## Architecture

### Component hierarchy

```
src/components/
├── atoms/       # primitive UI building blocks (buttons, forms, badges, overlays…)
├── molecules/   # small compositions of atoms (ButtonGroup, MultiSelect…)
├── organisms/   # page-level sections (Hero, Footer, RichTable, Features…)
└── ui/          # shadcn-style base primitives (button, slider) — used internally
```

Each layer exports via its own `index.ts`; everything is re-exported from `src/components/index.ts` → `src/index.ts`.

### Styling

- **Tailwind CSS v4** with a fully custom design token set (default Tailwind colors are removed).
- Design tokens live in `src/assets/tailwind-config.css` (colors, spacing, typography). Theme variables (CSS custom properties for light/dark) live in `src/assets/theme.css`.
- Component styles are co-located in `.vue` SFCs or scoped CSS; no global stylesheet beyond the tokens.
- `class-variance-authority` + `clsx` + `tailwind-merge` are used for variant-based class composition (`src/lib/utils.ts` exports `cn()`).

### Accessibility primitives

Headless UI (`@headlessui/vue`) and Reka UI (`reka-ui`) are used for accessible interactive components (dialogs, dropdowns, calendars, etc.). These are **externalised** from the bundle — consuming apps must have them installed.

### Publishing

- Registry: GitHub Packages (`https://npm.pkg.github.com`), scope `@educalliance`.
- `prepublishOnly` runs `build:lib` automatically.
- Exported paths in `package.json`: `.` (JS + types), `./dist/style.css`, `./styles/tokens.css`, `./styles/theme.css`.

## Code conventions

- The `/deslop` cursor command summarises what to avoid: no unnecessary comments, no defensive checks on trusted code paths, no `as any` casts, style must match surrounding code.
- Stories (`.stories.ts`) live next to the components they document.
- Type declarations for environment variables are in `env.d.ts`.
