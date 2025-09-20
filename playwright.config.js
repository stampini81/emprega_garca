// Playwright configuration for the project
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './playwright',
  timeout: 30 * 1000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000,
  },
};
module.exports = config;
