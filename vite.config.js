import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['a16d8539a846.ngrok-free.app' , 'vast-tables-push.loca.lt'],
  }
})
 