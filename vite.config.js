import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest: {
      "name": "Dees Estates",
      "short_name": "Dees Estates",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#0F298B",
      "icons": [
        {
          "src": "./icons/icon-48x48.png",
          "sizes": "48x48",
          "type": "image/png",

        },
        {
          "src": "./icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png",

        },
        {
          "src": "./icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png",

        },
        {
          "src": "./icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png",

        },
        {
          "src": "./icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png",

        },
        {
          "src": "./icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png",

        },
        {
          "src": "./icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",

        },
        {
          "src": "./icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",

        }
      ]
    },
    includeManifestIcons: true,
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'views': path.resolve('src/views'),
      '@components': path.resolve('src/components'),
      "@images": path.resolve(__dirname, "/src/assets/images"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    target: 'es2020'
  }
})
