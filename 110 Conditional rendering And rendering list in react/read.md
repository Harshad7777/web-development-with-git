npm create vite@latest     
React
javaScript
npm i   
npm run dev
npm install tailwindcss @tailwindcss/vite                      

file=vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

file=index.css
@import "tailwindcss";
