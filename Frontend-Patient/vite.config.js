import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'https://life-care-q5tc.onrender.com', // your backend
        changeOrigin: true,
        secure: false,
       }
    }
  }

})
