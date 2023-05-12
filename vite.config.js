import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss"`
      },
      postcss: {
        plugins: [
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss')('./tailwind.js'),
          require('autoprefixer')
        ]
      }
    }
  }
})

