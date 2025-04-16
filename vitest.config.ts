import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['.storybook/vitest.setup.ts'],
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }],
      },
    },
  }),
)
