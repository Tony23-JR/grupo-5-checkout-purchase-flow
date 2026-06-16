import { test, expect } from '@playwright/test';
import { completePurchaseForm } from '../helpers';

test('Compra exitosa en Demoblaze con confirmación', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page).toHaveURL(/demoblaze.com/);
  await expect(page.getByText('CATEGORIES')).toBeVisible();

  const productTitles = page.locator('#tbodyid .card-title');
  await expect(productTitles.first()).toBeVisible();
  const productCount = await productTitles.count();
  expect(productCount).toBeGreaterThan(0);

  const selectedProductName = (
    await productTitles.first().textContent()
  )?.trim();
  expect(selectedProductName).toBeTruthy();

  await productTitles.first().click();
  await expect(page.locator('.name')).toBeVisible();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });
  await page.click('text=Add to cart');

  await page.click('#cartur');
  await page.waitForURL(/cart.html/);
  await expect(page.locator('#tbodyid')).toBeVisible();
  await expect(
    page.locator('td', { hasText: selectedProductName }),
  ).toBeVisible();

  await page.click('button[data-target="#orderModal"]');
  await expect(page.locator('#orderModal')).toBeVisible();

  await completePurchaseForm(page);

  await page.click('button[onclick="purchaseOrder()"]');

  await expect(page.locator('.sweet-alert h2')).toHaveText(
    'Thank you for your purchase!',
  );
  await expect(page.locator('.sweet-alert')).toContainText('Id:');
  await expect(page.locator('.sweet-alert')).toContainText('Amount:');

  await page.click('.confirm');
  await expect(page.locator('#nava')).toBeVisible();
});
