import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries for better caching
          'vendor-react': ['react', 'react-dom'],
          'vendor-mux': ['@mux/mux-player-react'],
          'vendor-icons': ['react-icons/fa', 'react-icons/md', 'react-icons/io5', 'react-icons/ri'],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
})