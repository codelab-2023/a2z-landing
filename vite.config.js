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
        manualChunks: {
          // Vendor split: React + React-DOM in own chunk (cached longer)
          'vendor-react': ['react', 'react-dom'],
          // Router in own chunk
          'vendor-router': ['react-router-dom'],
          // Icons in own chunk
          'vendor-icons': ['lucide-react'],
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
