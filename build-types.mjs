#!/usr/bin/env node
import { copyFileSync, existsSync } from "fs"
import { join } from "path"

try {
  const srcPath = join(process.cwd(), "src", "index.d.ts")
  const distPath = join(process.cwd(), "dist", "index.d.ts")

  if (existsSync(srcPath)) {
    copyFileSync(srcPath, distPath)
    console.log("✓ TypeScript declarations copied successfully")
  } else {
    console.warn("⚠ No type declarations found, skipping...")
  }
} catch (error) {
  console.error("Failed to copy TypeScript declarations:", error.message)
  process.exit(1)
}
