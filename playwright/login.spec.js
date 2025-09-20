const { test, expect } = require('@playwright/test');
const Tesseract = require('tesseract.js');
const fs = require('fs');

test('Login emprega.garca.gov.br (with OCR)', async ({ page }) => {
  await page.goto('https://www.emprega.garca.sp.gov.br/b7W1p8V4');

  // Wait for captcha image to load (assumes selector img#captcha or similar)
  const captchaImg = await page.locator('img#captcha').first();
  if (await captchaImg.count() === 0) {
    // fallback: try to find any image inside the login form
    const imgs = await page.locator('form img').all();
    if (imgs.length > 0) captchaImg = imgs[0];
  }

  let captchaText = '';
  try {
    const src = await captchaImg.getAttribute('src');
    if (src) {
      let data;
      if (src.startsWith('data:')) {
        data = src.split(',')[1];
      } else {
        // download binary and convert to base64
        const resp = await page.request.get(src);
        const buffer = await resp.body();
        data = buffer.toString('base64');
      }
      const imageBuffer = Buffer.from(data, 'base64');
      fs.writeFileSync('tmp_captcha.png', imageBuffer);
      const { data: { text } } = await Tesseract.recognize('tmp_captcha.png', 'por');
      captchaText = text.replace(/\s+/g, '');
    }
  } catch (err) {
    // OCR failed; continue without it
    captchaText = '';
  }

  await page.fill('#usuario', 'larissa.luz');
  await page.fill('#senha', 'g@rcaF@TEC0825');
  if (captchaText) {
    await page.fill('#captcha', captchaText);
  }
  await page.click('#entrar');
  await expect(page.locator('text=Bem-vindo')).toBeVisible();
});
