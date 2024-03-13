import { resolve } from 'node:path'

function r(p: string) {
  return resolve(__dirname, p)
}

export const alias: Record<string, string> = {
  '@monorepoproject/pkga': r('./packages/pkga/'),
  '@monorepoproject/pkgb': r('./packages/pkgb/'),
  '@monorepoproject/pkgc': r('./packages/pkgc/'),
  '@monorepoproject/pkgd': r('./packages/pkgd/src/')
}

