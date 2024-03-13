import { defineConfig } from 'vitest/config'
import { alias } from './alias'
export default defineConfig({
  optimizeDeps: {
    entries: []
  },
  resolve: {
    alias
  },
  test: {
    include: ['test/**/*.test.ts', 'test/**/*.spec.ts'],
    coverage: {
      provider: 'istanbul', // or 'v8'
      reportOnFailure: true,
      reporter: ['html', 'json'],
      reportsDirectory: './html/coverage'
    },
    reporters: ['html']
  }
})
