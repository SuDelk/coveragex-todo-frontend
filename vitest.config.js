/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // <--- important for React testing
    globals: true,         // so you can use expect() without importing
    setupFiles: './src/setupTests.js', // optional for jest-dom
  },
});
