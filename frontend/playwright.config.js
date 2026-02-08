import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {
    /* Maximum time expect() should wait for conditions */
    timeout: 10000, // increased to 10s for stable visibility checks
  },

  /* Fail the build on CI if test.only is left in code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 3 : undefined,

  /* Reporter */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    actionTimeout: 10000,          // max time for actions like click
    baseURL: 'http://localhost:5173', // always 5173
    trace: 'on-first-retry',
    headless: !!process.env.CI,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',  // always use dev server
    port: 5173,
    timeout: 90000,           // wait up to 90s for server start
    reuseExistingServer: !process.env.CI,
  },
})
