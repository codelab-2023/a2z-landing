import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: false,
    historyApiFallback: true,
    // Add security headers in dev mode
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },

  build: {
    emptyOutDir: true,
    // Improve chunk splitting for faster page loads
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react-router-dom') || id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router';
            }
            if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
              return 'vendor-react';
            }
          }
        },
      },
    },
    // Minify CSS
    cssMinify: true,
    // Compress assets
    assetsInlineLimit: 4096,
    // Report bundle size > 500 kB
    chunkSizeWarningLimit: 500,
    // Enable source maps only for dev debugging (false in prod = smaller bundle)
    sourcemap: false,
  },

  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['canvas-confetti'],
  },
})
