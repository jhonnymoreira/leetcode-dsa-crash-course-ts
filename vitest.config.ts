import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      include: ['src/**/*.ts'],
    },
    isolate: false,
    sequence: {
      concurrent: true,
    },
    globals: true,
    reporters: ['verbose'],
    watch: false,
  },
});
