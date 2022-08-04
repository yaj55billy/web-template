// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// const path = require('path');
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   alias: {
//     '/@': path.resolve(__dirname, './src')
//   },
// })

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://data.ntpc.gov.tw/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})