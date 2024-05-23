/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // won't need to import things like it, or describe, or test in all of our test files
    environment: 'jsdom', // enables html in our testing files
    css: true,
    setupFiles: './src/test/setup.ts',
  }
  
})
