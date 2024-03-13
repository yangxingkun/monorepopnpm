import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'Pkgd',
			fileName: 'pkgd',
			formats: ['es', 'umd', 'cjs'],
		},
		copyPublicDir: false,
	},
	plugins: [dts()],
})
