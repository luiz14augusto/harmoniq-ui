import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

const analyze = process.env.ANALYZE === '1' || process.env.ANALYZE === 'true';
export default defineConfig({
  plugins: [react(), ...(analyze ? [visualizer({ filename: 'stats.html', template: 'treemap', open: true })] : [])],
  build: { outDir: 'dist' },
  test: {
    setupFiles: './vitest.setup.ts',
    environment: 'jsdom',
    globals: true,
    css: true,
    coverage: { provider: 'v8', reporter: ['text','lcov'], reportsDirectory: 'coverage' }
  }
});
