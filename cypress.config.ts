import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    screenshotOnRunFailure: false,
    video: false,
    viewportHeight: 720,
    viewportWidth: 1280,
  },
})
