import { defineConfig } from 'vite';
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
});
