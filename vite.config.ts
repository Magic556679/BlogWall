import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [vue(), eslintPlugin({ cache: false })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:3010/',
        target: loadEnv('', process.cwd()).VITE_SERVER_BASE_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});