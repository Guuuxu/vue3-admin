import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";@import "@/styles/mixin.scss";`
      }
    }
  }
})
