const { test, expect } = require('@playwright/test');

test('Login emprega.garca.gov.br', async ({ page }) => {
  await page.goto('https://www.emprega.garca.sp.gov.br/b7W1p8V4');
  await page.fill('#usuario', 'larissa.luz');
  await page.fill('#senha', 'g@rcaF@TEC0825');
  await page.click('#entrar');
  await expect(page.locator('text=Bem-vindo')).toBeVisible();
});
