const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  // Add this line to restrict Playwright to the correct folder
  testDir: './e2e-tests', 
  
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:8080',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://127.0.0.1:8080',
  },
})