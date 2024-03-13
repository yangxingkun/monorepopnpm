{
  "name": "serescnn",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "private": true,
  "scripts": {
    "build": "pnpm -r --filter=./packages/* run build",
    "watch": "pnpm -r --filter=./packages/* run watch",
    "test": "vitest run", // 执行测试，生成测试报告
    "test:report": "vitest --ui --coverage", // 执行测试，生成测试报告和代码覆盖率报告，并自动以html形式打开
    "docs:dev": "pnpm run -C ./docs docs:dev",
    "docs:build": "pnpm run -C ./docs docs:build",
    "docs:preview": "pnpm run -C ./docs docs:preview",
    "start:app1": "pnpm run start --filter @packages/app1",
    "eject:app1": "pnpm run eject --filter @packages/app1",
    "eject": "pnpm run -C packages/app1 eject && pnpm run -C packages/app2 start"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@changesets/cli": "^2.27.1",
    "@types/node": "^20.11.26",
    "@vitest/coverage-istanbul": "^1.3.1",
    "@vitest/ui": "^1.3.1",
    "typescript": "^5.4.2",
    "vite": "^5.1.6",
    "vitest": "^1.3.1"
  }
}
