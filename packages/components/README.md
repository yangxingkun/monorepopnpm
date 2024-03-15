# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


{
  "name": "@serescnn/seres-ui",
  "private": false,
  "version": "0.0.1",
  "type": "module",
  // 使用 require('xxx') 方式引入时, 引入的是这个文件
  "main": "./ui/lib/index.js",
  // 使用 import x from 'xxx' 方式引入组件时，引入的是这个文件
  "module": "./ui/es/index.js",
  // 配置打包上传文件到npm的文件夹内容
  "files": [
    "ui"
  ],
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.21"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.4",
    "vite": "^5.1.6",
    "vite-plugin-vue-setup-extend": "^0.4.0"
  }
}
