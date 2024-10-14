import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
      },
    },
  },
  server: {
    historyApiFallback: true, // This ensures that React Router works correctly
    proxy: {
      '/api': 'http://127.0.0.1:8000',  // Redirects any requests to /api to Django backend
    }
  }
})
