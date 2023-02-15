import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [react(), vanillaExtractPlugin({ identifiers: 'short' }), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
})
