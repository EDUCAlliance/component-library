#!/usr/bin/env node
import { mkdirSync, copyFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const outDir = join(root, "dist", "styles")
mkdirSync(outDir, { recursive: true })

copyFileSync(join(root, "src", "assets", "tailwind-config.css"), join(outDir, "tokens.css"))
copyFileSync(join(root, "src", "assets", "theme.css"), join(outDir, "theme.css"))

console.log("✓ Copied styles to dist/styles (tokens.css, theme.css)")
