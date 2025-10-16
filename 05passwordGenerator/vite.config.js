import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-first-react-app/05passwordGenerator/',  // add this line
  plugins: [
    tailwindcss(),
    react()
  ],
})

