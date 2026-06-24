import { test, expect } from '@playwright/test';
import { completePurchaseForm } from '../helpers';

test('TC04 - Validar mensaje de éxito visible', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/',{timeout:60000});

  const productTitles = page.locator('#tbodyid .card-title');

  await expect(productTitles.first()).toBeVisible();

  await productTitles.first().click();

  page.once('dialog', async (dialog) => {
    await dialog.accept();
  });

  await page.click('text=Add to cart');

  await page.waitForTimeout(2000);

  await page.click('#cartur');

  await page.waitForURL(/cart.html/);

  await page.click('button[data-target="#orderModal"]');

  await expect(page.locator('#orderModal')).toBeVisible();

  await completePurchaseForm(page);

  await page.click('button[onclick="purchaseOrder()"]');

  const successTitle = page.locator('.sweet-alert h2');

  await expect(successTitle).toBeVisible();

  await expect(successTitle).toHaveText(
    'Thank you for your purchase!',
  );
});